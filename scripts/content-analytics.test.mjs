import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const script = readFileSync(new URL('../public/content-analytics.js', import.meta.url), 'utf8');
function install(saved, blocked = false) {
  let value = saved;
  const listeners = {};
  const nodes = [];
  const storage = { getItem: () => { if (blocked) throw Error('blocked'); return value; }, setItem: (_, next) => { if (blocked) throw Error('blocked'); value = next; } };
  let session;
  const context = { window: {}, localStorage: storage, sessionStorage: { getItem: () => session, setItem: (_, next) => { session = next; } }, URL, Date,
    location: { href: 'https://anothercyprus.com/guides/test/?utm_source=linkedin', pathname: '/guides/test/', origin: 'https://anothercyprus.com' },
    document: { documentElement: { lang: 'en' }, head: { appendChild: (node) => nodes.push(node) }, body: { appendChild: (node) => nodes.push(node) },
      createElement: (tag) => ({ tag, style: {}, addEventListener: (_, handler) => { listeners.banner = handler; }, remove() { this.removed = true; } }),
      addEventListener: (_, handler) => { listeners.click = handler; } } };
  vm.runInNewContext(script, context);
  return { context, nodes, click: (href) => listeners.click({ target: { closest: () => ({ href }) } }), accept: () => listeners.banner({ target: { closest: () => ({ dataset: { choice: 'accepted' } }) } }) };
}
function events(state) { return Array.from(state.context.window.dataLayer).filter((args) => args[0] === 'event').map((args) => JSON.parse(JSON.stringify([...args]))); }
test('denied and missing consent do not send contact or property events', () => {
  for (const saved of [null, 'declined']) {
    const state = install(saved);
    state.click('https://wa.me/35796373089?text=private');
    state.click('https://anothercyprus.com/properties/germasogeia-corporate-prime/');
    assert.deepEqual(events(state), []);
    assert.equal(state.nodes.some((node) => node.id === 'analytics-consent'), !saved);
  }
});
test('accepted consent tracks the channel without message or contact data', () => {
  const state = install('accepted');
  state.click('https://wa.me/35796373089?text=private');
  assert.deepEqual(events(state), [['event', 'contact_click', { contact_channel: 'whatsapp', project_id: 'content', page_type: 'guide' }]]);
  assert.equal(state.nodes.length, 1);
});
test('property links identify the article and project, excluding query values', () => {
  const state = install('accepted');
  state.click('https://anothercyprus.com/ru/properties/germasogeia-corporate-prime/?email=private');
  state.click('https://example.com/properties/external/');
  assert.deepEqual(events(state), [['event', 'property_link_click', { project_id: 'germasogeia-corporate-prime', page_type: 'guide', content_path: '/guides/test/' }]]);
});
test('session fallback retains consent when local storage is blocked', () => {
  const state = install(null, true);
  state.accept();
  state.click('tel:+35796373089');
  assert.equal(events(state)[0][2].contact_channel, 'phone');
  assert.equal(state.nodes.find((node) => node.id === 'analytics-consent').removed, true);
});
