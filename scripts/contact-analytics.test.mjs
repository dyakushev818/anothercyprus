import assert from 'node:assert/strict';
import test from 'node:test';
import { trackContactClick } from '../src/utils/analytics.ts';

function makeStorage({ value = null, throws = false } = {}) {
  return {
    getItem() {
      if (throws) throw new Error('storage unavailable');
      return value;
    },
  };
}

function install({ local = {}, session = {}, gtag } = {}) {
  globalThis.localStorage = makeStorage(local);
  globalThis.sessionStorage = makeStorage(session);
  globalThis.window = { gtag };
}

test('accepted consent emits one safe contact event', () => {
  const calls = [];
  install({ local: { value: 'accepted' }, gtag: (...args) => calls.push(args) });

  trackContactClick('whatsapp', 'olio-residences-mesa-geitonia');

  assert.deepEqual(calls, [[
    'event',
    'contact_click',
    { contact_channel: 'whatsapp', project_id: 'olio-residences-mesa-geitonia', page_type: 'portfolio' },
  ]]);
});

test('declined and missing consent emit no event', () => {
  for (const value of ['declined', null]) {
    const calls = [];
    install({ local: { value }, gtag: (...args) => calls.push(args) });
    trackContactClick('email');
    assert.equal(calls.length, 0);
  }
});

test('storage failure falls back to session consent without throwing', () => {
  const calls = [];
  install({ local: { throws: true }, session: { value: 'accepted' }, gtag: (...args) => calls.push(args) });

  assert.doesNotThrow(() => trackContactClick('phone', 'portfolio'));
  assert.equal(calls.length, 1);
});

test('storage failure without session consent emits no event', () => {
  const calls = [];
  install({ local: { throws: true }, session: { throws: true }, gtag: (...args) => calls.push(args) });

  assert.doesNotThrow(() => trackContactClick('email'));
  assert.equal(calls.length, 0);
});

test('a failing analytics function cannot interrupt the caller', () => {
  install({ local: { value: 'accepted' }, gtag: () => { throw new Error('analytics unavailable'); } });

  assert.doesNotThrow(() => trackContactClick('whatsapp'));
});
