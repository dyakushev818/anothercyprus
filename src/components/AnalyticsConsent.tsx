import React, { useEffect, useState } from 'react';

const MEASUREMENT_ID = 'G-3WVGML1VRS';
const STORAGE_KEY = 'anothercyprus_analytics_consent';

function startAnalytics() {
  if (document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) return;
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => window.dataLayer.push(args);
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { anonymize_ip: true });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.ga4 = MEASUREMENT_ID;
  document.head.appendChild(script);
}

export const AnalyticsConsent: React.FC = () => {
  const [choice, setChoice] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));
  const isRussian = new URLSearchParams(window.location.search).get('lang') === 'ru' || navigator.language.toLowerCase().startsWith('ru');

  useEffect(() => { if (choice === 'accepted') startAnalytics(); }, [choice]);

  if (choice) return null;

  const decide = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
  };

  return (
    <aside className="fixed bottom-0 inset-x-0 z-[70] bg-[#132A4B] text-white border-t border-[#C29B61] shadow-2xl" aria-label="Analytics consent">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-xs leading-relaxed flex-1 text-white/85">
          {isRussian ? 'Мы используем Google Analytics только с вашего согласия, чтобы понимать эффективность страниц объектов и рекламных источников.' : 'We use Google Analytics only with your consent to understand property-page performance and advertising sources.'}{' '}
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
