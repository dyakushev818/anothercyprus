import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const RU: Record<string, string> = {
  '0% Buyer Commission • Direct Developer': '0% комиссии покупателя • напрямую от застройщика',
  'Direct Developer Desk': 'Отдел продаж застройщика',
  'Direct Developer Collection': 'Коллекция объектов от застройщика',
  Developments: 'Проекты',
  Locations: 'Локации',
  'PR & Taxes': 'ПМЖ и налоги',
  'Direct Terms': 'Прямые условия',
  'Direct Developer Inquiry': 'Связаться с застройщиком',
  'Flagship Developments': 'Ключевые проекты',
  'Strategic Locations': 'Перспективные локации',
  'Cyprus PR 6.2 & Taxes': 'ПМЖ Кипра 6.2 и налоги',
  'Rental ROI Calculator': 'Калькулятор доходности',
  '0% Commission Terms': 'Условия без комиссии',
  'Inquire via Email': 'Запрос по email',
  'Direct Developer Collection • Limassol, Cyprus': 'Коллекция от застройщика • Лимассол, Кипр',
  '0% Buyer Commission • Direct Developer Terms': '0% комиссии покупателя • прямые условия застройщика',
  'Prime Commercial &': 'Премиальная коммерческая',
  'Luxury Residential': 'и жилая недвижимость',
  'Developments in Limassol.': 'в Лимассоле.',
  'An exclusive portfolio of institutional-grade commercial headquarters and luxury residential developments in Limassol. From a landmark': 'Эксклюзивная коллекция коммерческой и жилой недвижимости в Лимассоле. От знакового',
  'Class-A Headquarters in Potamos Germasogeias (400m to sea)': 'офисного здания класса A в Потамос Гермасойя (400 м до моря)',
  'to panoramic': 'до панорамных',
  'Agios Athanasios sea-view residences': 'резиденций с видом на море в Агиос Атанасиос',
  'Agios Tychonas turnkey private pool villas': 'готовых вилл с бассейнами в Агиос Тихонас',
  'OLiO two-bedroom residences in Mesa Geitonia': 'двухспальных резиденций OLiO в Меса Гитония',
  and: 'и',
  ', and': ', и',
  'Explore Flagship Developments': 'Смотреть ключевые проекты',
  'View Projects & Request Availability': 'Проекты и актуальное наличие',
  'Developer Sales Desk on WhatsApp': 'Отдел продаж в WhatsApp',
  'Request Plans & Availability': 'Запросить планы и наличие',
  'Direct developer communication': 'Прямая связь с застройщиком',
  'Current prices & availability': 'Актуальные цены и наличие',
  'Plans on request': 'Планы по запросу',
  'English & Russian support': 'Поддержка на английском и русском',
  'Private viewings by appointment': 'Просмотры по предварительной записи',
  'New Apartments, Villas &': 'Новые квартиры, виллы и',
  'Commercial Property': 'коммерческая недвижимость',
  'Direct from Developers in Limassol.': 'напрямую от застройщиков в Лимассоле.',
  'Explore developer projects in Limassol and request': 'Изучите проекты застройщиков в Лимассоле и запросите',
  'current prices, plans and availability': 'актуальные цены, планы и наличие',
  'directly from the sales desk. Choose from a': 'напрямую у отдела продаж. Выберите',
  'Class-A headquarters in Potamos Germasogeias': 'офисное здание класса A в Потамос Гермасойя',
  'sea-view residences in Agios Athanasios': 'резиденции с видом на море в Агиос Атанасиос',
  'turnkey villas in Agios Tychonas': 'готовые виллы в Агиос Тихонас',
  'WhatsApp Direct (+357 96 373089)': 'Написать в WhatsApp (+357 96 373089)',
  'Direct Email Request': 'Запрос по email',
  'Direct Portfolio Navigator': 'Навигатор по проектам',
  '0% Buyer Commission • Direct Developer Pricing & Title Deeds': '0% комиссии • цены застройщика • проверка титула',
  'Price from': 'Цена от',
  'Inspect Specs': 'Подробнее',
  'Prime Commercial': 'Премиальная коммерция',
  'Class-A Commercial Yield': 'Доходность коммерции класса A',
  Commission: 'Комиссия',
  '0% Commission': 'Комиссия 0%',
  'Direct from Developer': 'Напрямую от застройщика',
  'Immigration Fast-Track': 'Иммиграционная программа',
  'Subject to Current Rules & Approval': 'По действующим правилам и с одобрением',
  'Energy & Engineering': 'Энергетика и инженерия',
  'Solar Grid & Raised Floor Systems': 'Солнечная энергия и инженерные системы',
  'Request Full Portfolio Dossier': 'Запросить полное досье проектов',
  'All Developments': 'Все проекты',
  'All Locations': 'Все локации',
  'All Criteria': 'Все критерии',
  '0% Commission (Direct)': '0% комиссии (напрямую)',
  'High Yield (≥7.5%)': 'Высокая доходность (≥7,5%)',
  'All-Inclusive Turnkey': 'Полная готовность под ключ',
  Inspect: 'Подробнее',
  'Schedule Free Legal Consultation': 'Запросить юридическую консультацию',
  'View Germasogeia Properties': 'Смотреть объекты Гермасойи',
  All: 'Все',
  Commercial: 'Коммерция',
  Residency: 'ПМЖ',
  Tax: 'Налоги',
  Acquisition: 'Покупка',
  'Frequently Asked Questions': 'Частые вопросы',
  'Request Direct Developer Consultation': 'Запросить консультацию застройщика',
  'Contact Developer': 'Связаться с застройщиком',
  'Direct Developer Email Desk': 'Email отдела продаж',
  'Direct Developer Inquiries': 'Прямые запросы застройщику',
  'Back to top': 'Наверх',
};

const originalText = new WeakMap<Text, string>();

function translateNode(node: Text, language: Language) {
  if (!originalText.has(node)) originalText.set(node, node.data);
  const source = originalText.get(node) ?? node.data;
  if (language === 'en') {
    if (node.data !== source) node.data = source;
    return;
  }
  const trimmed = source.trim();
  const translated = RU[trimmed];
  if (!translated) return;
  const leading = source.match(/^\s*/)?.[0] ?? '';
  const trailing = source.match(/\s*$/)?.[0] ?? '';
  node.data = `${leading}${translated}${trailing}`;
}

function translateTree(root: Node, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateNode(node as Text, language);
    node = walker.nextNode();
  }
}

const TranslationLayer: React.FC<{ language: Language }> = ({ language }) => {
  useEffect(() => {
    translateTree(document.body, language);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => translateTree(node, language));
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return null;
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() =>
    window.location.pathname === '/ru' || window.location.pathname.startsWith('/ru/') ||
    new URLSearchParams(window.location.search).get('lang') === 'ru' ? 'ru' : 'en',
  );
  const setLanguage = (next: Language) => {
    if (next === language) return;
    const target = next === 'ru' ? `/ru/${window.location.hash}` : `/${window.location.hash}`;
    window.history.pushState(null, '', target);
    setLanguageState(next);
  };
  useEffect(() => {
    const syncLanguageWithUrl = () => setLanguageState(window.location.pathname.startsWith('/ru') ? 'ru' : 'en');
    window.addEventListener('popstate', syncLanguageWithUrl);
    return () => window.removeEventListener('popstate', syncLanguageWithUrl);
  }, []);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('lang') === 'ru' && !window.location.pathname.startsWith('/ru')) {
      window.location.replace(`/ru/${window.location.hash}`);
      return;
    }
    document.documentElement.lang = language;
    const isRussian = language === 'ru';
    const title = isRussian ? 'Новостройки Лимассола напрямую от застройщика | Another Cyprus' : 'New Properties in Limassol Direct from Developers | Another Cyprus';
    const description = isRussian ? 'Новостройки, виллы и коммерческая недвижимость в Лимассоле напрямую от застройщика. Актуальные цены, планы и наличие.' : 'New apartments, villas and commercial property in Limassol direct from developers. Request current prices, plans and availability.';
    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', isRussian ? 'https://anothercyprus.com/ru/' : 'https://anothercyprus.com/');
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return (
    <LanguageContext.Provider value={value}>
      <TranslationLayer language={language} />
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
