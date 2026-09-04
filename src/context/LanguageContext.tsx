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
  APARTMENT: 'КВАРТИРА',
  VILLA: 'ВИЛЛА',
  COMMERCIAL: 'КОММЕРЦИЯ',
  Apartment: 'Квартира',
  Villa: 'Вилла',
  'Gross Yield': 'Валовая доходность',
  'Yield on request': 'Доходность по запросу',
  'Rental estimate on request': 'Оценка аренды по запросу',
  'Under Construction': 'Строится',
  'Key Ready': 'Готово к заселению',
  'Total Area': 'Общая площадь',
  'Roof Garden': 'Сад на крыше',
  'To Beach': 'До пляжа',
  Beds: 'Спальни',
  Baths: 'Ванные',
  Covered: 'Крытая площадь',
  'To Sea': 'До моря',
  'On request': 'По запросу',
  'Asking Price': 'Цена',
  'Whole Building Asking Price': 'Цена всего здания',
  'Projected Rent:': 'Расчётная аренда:',
  'Cyprus EU Permanent Residency Cat 6.2': 'ПМЖ Кипра, категория 6.2',
  'Direct Master Developments Portfolio': 'Портфель объектов напрямую от застройщика',
  'Curated Limassol Developments': 'Избранные проекты Лимассола',
  'Direct developer terms in prime Limassol locations. Title, eligibility, and residency matters remain subject to independent legal verification and official approval.': 'Прямые условия застройщика в лучших районах Лимассола. Титул, соответствие требованиям и вопросы ПМЖ подлежат независимой юридической проверке и официальному одобрению.',
  'No developments matched your exact criteria': 'По заданным критериям проекты не найдены',
  'Show All Developments': 'Показать все проекты',
  'Commercial Office (€8.7M)': 'Офисное здание (€8,7 млн)',
  'Luxury Villas (€1.43M+)': 'Виллы (€1,43 млн+)',
  'Sea-View Apartments (€480k)': 'Квартиры с видом на море (€480 тыс.)',
  'Fast-Track PR 6.2': 'Ускоренное ПМЖ 6.2',
  'Asset Type:': 'Тип объекта:',
  'Location:': 'Район:',
  'Reset Filters': 'Сбросить фильтры',
  'Limassol Micro-Markets': 'Районы Лимассола',
  'Explore Limassol’s Prime Enclaves': 'Лучшие районы Лимассола',
  'From the bustling superyacht berths of Limassol Marina to the quiet hillside mansions of Agios Tychonas, choose the location tailored to your lifestyle and return goals.': 'От делового побережья Гермасойи до спокойных холмов Агиос Тихонас — выберите район, который подходит вашему образу жизни и целям покупки.',
  'Featured District': 'Выбранный район',
  'Average Rental Yield:': 'Ориентир доходности:',
  'Neighborhood Advantages': 'Преимущества района',
  'Ideal Buyer Profile:': 'Для кого подходит:',
  'Ready to view available listings in': 'Готовы посмотреть доступные объекты в',
  'Cyprus Golden Advantage': 'Преимущества Кипра',
  'Permanent EU Residency & Unmatched Tax Regimes': 'ПМЖ Кипра и налоговые возможности',
  'Acquiring real estate in Limassol unlocks one of the European Union’s most attractive lifestyle and wealth preservation frameworks.': 'Недвижимость в Лимассоле может сочетать комфорт проживания, международную деловую среду и возможности долгосрочного планирования капитала.',
  'Direct Savings': 'Прямая покупка',
  'EU Residency': 'ПМЖ Кипра',
  'Tax Optimization': 'Налоговое планирование',
  'High Yield': 'Доходность',
  'Fast-Track Category 6.2 Program': 'Программа ПМЖ категории 6.2',
  'Cyprus Permanent Residency Requirements': 'Требования к ПМЖ Кипра',
  'Certain investments may support an application under Cyprus Regulation 6(2), subject to current eligibility criteria, documentation, and approval by the competent authorities.': 'Некоторые инвестиции могут соответствовать требованиям подачи по Регламенту Кипра 6(2), при соблюдении актуальных условий, наличии документов и одобрении компетентных органов.',
  'Long-term status subject to current rules and ongoing conditions': 'Долгосрочный статус зависит от действующих правил и условий',
  'Covers spouse & children up to 25': 'Может распространяться на супруга и детей до 25 лет',
  'Physical-presence requirements depend on current rules': 'Требования к присутствию определяются действующими правилами',
  'Processing times are determined by the authorities': 'Срок рассмотрения устанавливают государственные органы',
  'Request PR Legal Advisory Kit': 'Запросить юридическую памятку по ПМЖ',
  'Receive our comprehensive legal dossier covering document checklists, non-dom tax exemptions, and escrow security protocols.': 'Получите перечень документов и вопросов для независимой проверки ПМЖ, налогового статуса и безопасности сделки.',
  'Seamless 4-Step Acquisition Process': 'Четыре этапа покупки',
  'From private viewing to biometric permanent residency card collection': 'От просмотра объекта до оформления сделки и, при применимости, подачи на ПМЖ',
  'Curated Property Selection': 'Выбор объекта',
  'Legal Due Diligence & Contract': 'Юридическая проверка и договор',
  'Land Registry Stamping & Deposit': 'Регистрация договора',
  'PR Application & Biometrics': 'Заявление на ПМЖ и биометрия',
  'Search Engine & Investor Knowledge Base': 'Ответы покупателям и инвесторам',
  'Essential guidelines on Limassol commercial property acquisitions, residential yields, corporate taxation, and Cyprus Permanent Residency.': 'Практические ответы о покупке коммерческой и жилой недвижимости, доходности, налогах и ПМЖ Кипра.',
  'Direct Master Developer Collection': 'Коллекция напрямую от застройщика',
  'Direct Developer Acquisition in Prime Limassol.': 'Покупка напрямую от застройщика в Лимассоле.',
  'A dedicated portal presenting selected Limassol developments with direct-developer enquiries. Buyers should independently verify pricing, title, and contract terms.': 'Специализированный сайт избранных проектов Лимассола с прямыми запросами застройщику. Покупателю следует независимо проверять цену, титул и условия договора.',
  '0% Intermediary Markup': 'Без наценки посредника',
  '0% Buyer Commission': '0% комиссии покупателя',
  'Strict Micro-Location Focus': 'Точный выбор локации',
  'Fast-Track PR & Tax Optimization': 'ПМЖ и налоговое планирование',
  'Turnkey All-Inclusive Handover': 'Комплектация под ключ',
  'Ready to acquire directly in Limassol?': 'Готовы купить недвижимость в Лимассоле напрямую?',
  'Schedule a private on-site inspection or request available architectural drawings, financial information, and legal documentation.': 'Запросите частный просмотр, актуальные планы, финансовую информацию и доступные юридические документы.',
  'Prime Locations': 'Лучшие районы',
  'Legal & Tax Guides': 'Право и налоги',
  'Practical Buyer Guides': 'Практические руководства',
  'Prime 1,934 m² Class-A commercial office headquarters in Potamos Germasogeias — 400m to the beach; stated rental scenario implies approximately 6.8% gross before costs': 'Офисное здание класса A площадью 1 934 м² в Потамос Гермасойя — 400 м до моря; заявленный сценарий валовой доходности около 6,8% до расходов',
  'Approx. 6.8% Gross Scenario': 'Сценарий: около 6,8% валовой доходности',
  'The stated rental scenario for Germasogeia Corporate Prime is €49,000 per month (€588,000 per year), which is approximately 6.8% gross on the stated €8,700,000 price before VAT, vacancy, operating costs and tax. This is a scenario, not a guaranteed return; obtain an independent rental appraisal before relying on it.': 'Заявленный сценарий аренды Germasogeia Corporate Prime составляет €49 000 в месяц (€588 000 в год), то есть около 6,8% валовой доходности от цены €8 700 000 до НДС, простоя, эксплуатационных расходов и налогов. Это не гарантированный доход; необходима независимая оценка аренды.',
  'Whether securing a full-building commercial headquarters in Potamos Germasogeias, panoramic sea-view residences in Agios Athanasios, all-inclusive designer pool villas in Agios Tychonas, or OLiO two-bedroom residences in Mesa Geitonia, you deal directly with the master building team with personalized legal and residency support.': 'Вы можете запросить напрямую офисное здание в Потамос Гермасойя, квартиры с видом на море в Агиос Атанасиос, виллы с бассейнами в Агиос Тихонас или двухспальные резиденции OLiO в Меса Гитония. Юридические вопросы и ПМЖ проверяются с независимыми специалистами.',
  'Established corporate and residential demand; independent rental appraisal recommended': 'Сформированный деловой и жилой спрос; рекомендуется независимая оценка аренды',
  'Direct Line / WhatsApp:': 'Прямая линия / WhatsApp:',
  'Buyer Guides': 'Руководства покупателя',
  'Privacy & Analytics': 'Конфиденциальность и аналитика',
  'Panoramic sea-view residences in elevated Agios Athanasios — Grade A energy rating and current two-bedroom rent up to €2,500/month': 'Панорамные резиденции с видом на море в Агиос Атанасиос — энергоэффективность класса A; ориентир аренды до €2 500 в месяц',
  'Turnkey boutique collection of luxury detached villas with private pools & All-Inclusive Package — Delivery July 2027': 'Бутик-коллекция вилл с частными бассейнами и комплектацией под ключ — сдача в июле 2027 года',
  'Boutique two-bedroom residences with deep verandas and an optional internal adaptation; any third-bedroom configuration is not presented as an approved legal bedroom': 'Бутик-резиденции с двумя спальнями, просторными верандами и возможной внутренней адаптацией; третья спальня не заявляется как юридически утверждённая',
  'Whole Building Investment: 1,934 m² prime 4-story glass-facade headquarters with a roof garden, 18 parking spaces, and 400m walk to the Mediterranean sea.': 'Целое офисное здание: 1 934 м², четыре офисных уровня, стеклянный фасад, сад на крыше, 18 парковочных мест и 400 м до моря.',
  'View Full Specs & Architectural Plans': 'Характеристики и архитектурные планы',
  'Direct Developer Price': 'Цена застройщика',
  'Independent Title Verification Required': 'Необходима независимая проверка титула',
  'Inspect Dossier': 'Открыть досье',
  'Rental Cash Flow': 'Сценарий аренды',
  'Parking Capacity': 'Парковка',
  'Beach Distance': 'До пляжа',
  'Full Gross Schedule': 'Общая ведомость площадей',
  'DIRECT INSTITUTIONAL COMMERCIAL ASSET': 'КОММЕРЧЕСКИЙ ОБЪЕКТ ДЛЯ КОРПОРАТИВНОГО ПОКУПАТЕЛЯ',
  'FLOOR-BY-FLOOR ARCHITECTURE': 'ПЛАНИРОВКА ПО ЭТАЖАМ',
  'ALL-INCLUSIVE PACKAGE (FULLY INCLUDED):': 'ВКЛЮЧЕНО В КОМПЛЕКТАЦИЮ:',
  'Ground Floor & Lobby': 'Первый этаж и лобби',
  'Intermediate Floor — official plan on request': 'Промежуточный этаж — официальный план по запросу',
  '1st, 2nd, 3rd & 4th Floors': '1-й, 2-й, 3-й и 4-й этажи',
  '0% Buyer Commission (Direct Developer Terms)': '0% комиссии покупателя (условия застройщика)',
  'Enquire directly about developer terms and stated buyer-commission arrangements. Pricing, delivery dates, and contract protections should be verified for the specific property.': 'Запросите условия напрямую у застройщика. Цена, срок сдачи и договорные гарантии проверяются отдельно по выбранному объекту.',
  'Permanent Residency (Fast-Track Category 6.2)': 'ПМЖ Кипра (категория 6.2)',
  'Certain investments may support an application under Regulation 6.2, subject to current eligibility criteria, supporting documents, and official approval. Processing times vary.': 'Некоторые инвестиции могут соответствовать требованиям Регламента 6.2 при соблюдении актуальных критериев, наличии документов и официальном одобрении.',
  'Cyprus Non-Dom Tax Regime (0% Dividend Tax)': 'Налоговый режим Cyprus Non-Dom',
  'Non-domicile treatment may provide relief from certain taxes for qualifying Cyprus tax residents. Eligibility, scope, and current rates require professional advice.': 'Статус non-dom может давать налоговые льготы отдельным налоговым резидентам Кипра. Условия и ставки уточняются у квалифицированного консультанта.',
  'High Rental Yields & Sustained Capital Growth': 'Арендный потенциал и долгосрочная стоимость',
  'Limassol has year-round corporate and residential demand, but achievable rent, occupancy and net yield vary materially by property and should be independently appraised.': 'В Лимассоле существует круглогодичный спрос, однако фактическая аренда, заполняемость и чистая доходность зависят от объекта и требуют независимой оценки.',
  'Identify prime properties matching Category 6.2 PR eligibility criteria (min €300,000 + VAT) and investment goals with our Limassol advisory team.': 'Выберите объект с учётом целей покупки и актуальных требований категории 6.2. Сумму, НДС и соответствие необходимо подтвердить независимо.',
  'Independent Cypriot legal counsel conducts thorough title deed searches and drafts the reservation and sale agreement protecting buyer funds in escrow.': 'Независимый кипрский юрист проверяет титул и документы, а также готовит договоры с защитой интересов покупателя.',
  'Contract deposited at the Limassol District Lands Office, legally securing your ownership priority against all third-party claims.': 'Договор подаётся в Земельный департамент Лимассола в соответствии с применимой процедурой и рекомендациями независимого юриста.',
  'An independent adviser may prepare and submit an application dossier. Biometrics and any permit are handled by the competent authorities, subject to approval.': 'Независимый консультант может подготовить заявление. Биометрия и выдача разрешения относятся к компетенции государственных органов.',
  'Potamos Germasogeias — Prime coastal commercial & international lifestyle district': 'Потамос Гермасойя — прибрежный деловой и жилой район международного уровня',
  'Stated scenario: 6.8% gross': 'Заявленный сценарий: около 6,8% валовой доходности',
  'Independent appraisal required': 'Требуется независимая оценка',
  'Class-A Commercial Hub & 400m Walk-to-Beach Living': 'Деловой кластер класса A, 400 м до пляжа',
  'Potamos Germasogeias is Limassol’s most dynamic commercial and coastal enclave, positioned just 400 meters from the Dasoudi sandy beaches and eucalyptus park. Home to corporate regional headquarters, banks, top restaurants, and luxury residential developments, it commands the highest international tenant demand and capital liquidity in Cyprus.': 'Потамос Гермасойя — развитый деловой и прибрежный район Лимассола рядом с пляжем Дасуди и эвкалиптовым парком. Здесь расположены офисы компаний, банки, рестораны и современные жилые проекты.',
  'Corporate headquarters, international IT firms, institutional yield funds': 'Корпоративные покупатели, международные IT-компании и инвестиционные структуры',
  'What is the projected rental yield and return on investment for Germasogeia Corporate Prime?': 'Какой сценарий аренды и доходности заявлен для Germasogeia Corporate Prime?',
  'What infrastructure is included in the €8,700,000 turnkey commercial building purchase price?': 'Что входит в цену €8 700 000 за коммерческое здание?',
  'How do the developments qualify for Fast-Track Cyprus Permanent Residency (Category 6.2)?': 'Какие объекты могут соответствовать требованиям ПМЖ Кипра категории 6.2?',
  'What are the main tax benefits of owning real estate and operating a business in Cyprus?': 'Какие налоговые вопросы нужно учесть при владении недвижимостью и бизнесом на Кипре?',
  'How are purchases structured and is there any broker commission?': 'Как оформляется покупка и взимается ли комиссия?',
  'Acquire directly from the master developer. No agency fees, no middleman markups, and completely transparent milestone contract structures.': 'Прямой запрос застройщику без агентской комиссии со стороны этого сайта. Цена и условия договора подтверждаются по конкретной сделке.',
  'Specialized focus on Limassol’s top growth corridors: Potamos Germasogeias (400m to beach), elevated Agios Athanasios, and prestigious Agios Tychonas.': 'Фокус на конкретных районах Лимассола: Потамос Гермасойя, Агиос Атанасиос, Агиос Тихонас и Меса Гитония.',
  'Residency and tax planning may be available to qualifying applicants, subject to current rules, official approval, and professional advice.': 'Вопросы ПМЖ и налогового планирования зависят от действующих правил, официального одобрения и профессиональной консультации.',
  'Comprehensive inclusions: photovoltaic solar power, underfloor heating, VRV climate control, Italian porcelain finishes, and full designer furnishings.': 'Комплектация зависит от выбранного объекта и подтверждается официальной спецификацией застройщика.',
  'Direct master developer micro-site showcasing prime commercial office headquarters and luxury residences in Limassol with 0% buyer commission.': 'Микросайт четырёх объектов в Лимассоле с прямым запросом застройщику и заявленной комиссией покупателя 0%.',
};

const RU_PHRASES = Object.entries(RU)
  .filter(([source]) => source.length >= 8 && source !== 'Inquire via Email')
  .sort(([a], [b]) => b.length - a.length);

const originalText = new WeakMap<Text, string>();

function translateNode(node: Text, language: Language) {
  if (!originalText.has(node)) originalText.set(node, node.data);
  const source = originalText.get(node) ?? node.data;
  if (language === 'en') {
    if (node.data !== source) node.data = source;
    return;
  }
  const trimmed = source.trim();
  let translated = RU[trimmed];
  if (!translated) {
    translated = trimmed;
    for (const [english, russian] of RU_PHRASES) translated = translated.replaceAll(english, russian);
    translated = translated.replace(/\band\b/g, 'и');
    if (translated === trimmed) return;
  }
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
