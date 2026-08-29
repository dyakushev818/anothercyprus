import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'anothercyprus_analytics_consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateAnalyticsConsent(accepted: boolean) {
  window.gtag?.('consent', 'update', {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export const AnalyticsConsent: React.FC = () => {
  const [choice, setChoice] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));
  const isRussian = window.location.pathname.startsWith('/ru') || new URLSearchParams(window.location.search).get('lang') === 'ru' || navigator.language.toLowerCase().startsWith('ru');

  useEffect(() => {
    if (choice) updateAnalyticsConsent(choice === 'accepted');
  }, [choice]);

  if (choice) return null;

  const decide = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  return (
    <aside className="fixed bottom-0 inset-x-0 z-[70] bg-[#132A4B] text-white border-t border-[#C29B61] shadow-2xl" aria-label="Analytics consent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-xs leading-relaxed flex-1 text-white/85">
          {isRussian ? 'До выбора отправляются только анонимные технические сигналы Google без аналитических cookies. Полная аналитика включается только с вашего согласия.' : 'Before you choose, Google receives only anonymous technical signals without analytics cookies. Full analytics starts only with your consent.'}{' '}
          <a className="text-[#C29B61] underline" href={isRussian ? '/ru/privacy/' : '/privacy/'}>{isRussian ? 'Конфиденциальность' : 'Privacy policy'}</a>
        </p>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={() => decide('declined')} className="flex-1 md:flex-none px-5 py-2.5 border border-white/30 text-xs font-bold cursor-pointer">{isRussian ? 'Отклонить' : 'Decline'}</button>
          <button onClick={() => decide('accepted')} className="flex-1 md:flex-none px-5 py-2.5 bg-[#C29B61] text-[#132A4B] text-xs font-bold cursor-pointer">{isRussian ? 'Разрешить аналитику' : 'Allow analytics'}</button>
        </div>
      </div>
    </aside>
  );
};
