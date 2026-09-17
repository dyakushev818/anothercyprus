import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PROPERTIES } from '../src/data/properties';

type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  summary: string;
  price: string;
  facts: string[];
  audience: string;
  audienceCopy: string;
};

type Page = {
  slug: string;
  schemaPrice: number;
  schemaLocality: string;
  image: string;
  gallery: string[];
  en: Copy;
  ru: Copy;
};

const pages: Page[] = [
  {
    slug: 'germasogeia-corporate-prime',
    schemaPrice: 8700000,
    schemaLocality: 'Potamos Germasogeias',
    image: '/images/commercial/al1.jpg',
    gallery: ['/images/commercial/al1.jpg', '/images/commercial/al2.jpg', '/images/commercial/al3.jpg'],
    en: {
      title: 'Office Building for Sale in Germasogeia, Limassol | €8.7M',
      description: 'Whole office building for sale in Potamos Germasogeias, Limassol. 1,934 m², 18 parking spaces, rooftop facilities and direct developer enquiry.',
      eyebrow: 'Whole-building commercial acquisition · Potamos Germasogeias',
      headline: 'A standalone Limassol headquarters, 400 metres from the coast.',
      summary: 'A 1,934 m² glass-fronted office building designed for a corporate headquarters, owner-occupier or income-producing commercial asset. Request the area schedule, plans, availability and transaction documents directly.',
      price: '€8,700,000 + VAT',
      facts: ['1,934 m² gross schedule', '18 parking spaces · 4 EV points', 'Roof garden', 'Original target: June 2026 — current status on request'],
      audience: 'Best suited to',
      audienceCopy: 'Corporate occupiers, regional headquarters, family offices and commercial-property investors seeking a complete building rather than a single floor.',
    },
    ru: {
      title: 'Офисное здание в Гермасойе, Лимассол | €8,7 млн',
      description: 'Отдельное офисное здание 1 934 м² в Потамос Гермасойя, Лимассол. 18 парковочных мест, rooftop-зоны и прямой запрос застройщику.',
      eyebrow: 'Покупка здания целиком · Потамос Гермасойя',
      headline: 'Отдельная штаб-квартира в Лимассоле, 400 метров от моря.',
      summary: 'Офисное здание площадью 1 934 м² для корпоративной штаб-квартиры, собственного использования или коммерческой инвестиции. Запросите поэтажные планы, наличие и документы по сделке напрямую.',
      price: '€8 700 000 + НДС',
      facts: ['Общая площадь 1 934 м²', '18 парковочных мест · 4 EV-точки', 'Сад на крыше', 'Исходный срок: июнь 2026 — уточните текущую готовность'],
      audience: 'Для кого объект',
      audienceCopy: 'Корпоративные покупатели, региональные штаб-квартиры, family offices и инвесторы, которым требуется отдельное здание, а не один офисный этаж.',
    },
  },
  {
    slug: 'athanasios-skyline-suites',
    schemaPrice: 480000,
    schemaLocality: 'Agios Athanasios',
    image: '/images/athanasios/athanasios-1.jpg',
    gallery: ['/images/athanasios/athanasios-1.jpg', '/images/athanasios/athanasios-2.jpg', '/images/athanasios/athanasios-5.jpg'],
    en: {
      title: 'Sea-View Apartment in Agios Athanasios, Limassol | €480K',
      description: 'New two-bedroom sea-view residence in Agios Athanasios, Limassol from €480,000. Direct developer enquiry, plans and availability.',
      eyebrow: 'New sea-view residence · Agios Athanasios',
      headline: 'Elevated Limassol living with panoramic Mediterranean views.',
      summary: 'A new two-bedroom residence in a low-density development above Limassol. Designed for family living, relocation or long-term investment, with direct access to project plans and current availability.',
      price: 'From €480,000 + VAT',
      facts: ['Two-bedroom residence', 'Panoramic sea and city views', 'Energy-efficient specification', 'Target delivery: January 2027'],
      audience: 'Best suited to',
      audienceCopy: 'Relocating professionals, families seeking access to Limassol schools and qualifying third-country buyers exploring a Regulation 6(2) application with independent advice.',
    },
    ru: {
      title: 'Квартира с видом на море в Агиос Атанасиос | €480 тыс.',
      description: 'Новая резиденция с двумя спальнями с видом на море в Агиос Атанасиос, Лимассол, от €480 000. Планы и наличие напрямую от застройщика.',
      eyebrow: 'Новая резиденция с видом на море · Агиос Атанасиос',
      headline: 'Панорамные виды Средиземного моря над Лимассолом.',
      summary: 'Новая резиденция с двумя спальнями в малоэтажном комплексе над Лимассолом. Подходит для семьи, переезда или долгосрочной инвестиции. Планы и актуальное наличие предоставляются по запросу.',
      price: 'От €480 000 + НДС',
      facts: ['Две спальни', 'Панорамный вид на море и город', 'Энергоэффективная спецификация', 'Плановая сдача: январь 2027'],
      audience: 'Для кого объект',
      audienceCopy: 'Специалисты, переезжающие на Кипр, семьи, которым важен доступ к школам Лимассола, и покупатели из третьих стран, рассматривающие подачу по Regulation 6(2) после независимой консультации.',
    },
  },
  {
    slug: 'tychonas-sanctuary-villas',
    schemaPrice: 1430000,
    schemaLocality: 'Agios Tychonas',
    image: '/images/villas/tychonass-villa-1.jpg',
    gallery: ['/images/villas/tychonass-villa-1.jpg', '/images/villas/tychonass-villa-2.jpg', '/images/villas/tychonass-villa-3.jpg'],
    en: {
      title: 'Luxury Villas with Private Pools in Agios Tychonas | €1.43M+',
      description: 'Turnkey detached villas with private pools in Agios Tychonas, Limassol from €1.43M. Furniture, climate systems and landscaping included.',
      eyebrow: 'Turnkey private villas · Agios Tychonas',
      headline: 'Private-pool villas near Limassol’s five-star coastline.',
      summary: 'A boutique collection of detached villas offered with private pools, landscaping, furniture and an extensive turnkey specification. Request the villa comparison, plot plans and current allocation.',
      price: 'From €1,430,000 + VAT',
      facts: ['Detached villas with private pools', 'Furniture and appliances included', 'Underfloor heating and VRV climate', 'Target delivery: July 2027'],
      audience: 'Best suited to',
      audienceCopy: 'High-net-worth families, lifestyle buyers and second-home purchasers prioritising privacy, turnkey delivery and proximity to the Amathus coastline.',
    },
    ru: {
      title: 'Виллы с бассейнами в Агиос Тихонас | от €1,43 млн',
      description: 'Отдельные виллы под ключ с частными бассейнами в Агиос Тихонас, Лимассол, от €1,43 млн. Мебель, климатические системы и ландшафт включены.',
      eyebrow: 'Частные виллы под ключ · Агиос Тихонас',
      headline: 'Виллы с бассейнами рядом с пятизвёздочным побережьем Лимассола.',
      summary: 'Бутик-коллекция отдельных вилл с частными бассейнами, ландшафтным дизайном, мебелью и полной спецификацией под ключ. Запросите сравнение вилл, планы участков и актуальное наличие.',
      price: 'От €1 430 000 + НДС',
      facts: ['Отдельные виллы с бассейнами', 'Мебель и техника включены', 'Тёплые полы и VRV-климат', 'Плановая сдача: июль 2027'],
      audience: 'Для кого объект',
      audienceCopy: 'Состоятельные семьи, lifestyle-покупатели и владельцы второго дома, которым важны приватность, готовность под ключ и близость к побережью Аматус.',
    },
  },
  {
    slug: 'olio-residences-mesa-geitonia',
    schemaPrice: 475000,
    schemaLocality: 'Mesa Geitonia',
    image: '/images/dasoudi/dasoudi-1.jpg',
    gallery: ['/images/dasoudi/dasoudi-1.jpg', '/images/dasoudi/dasoudi-2.jpg', '/images/dasoudi/dasoudi-3.jpg'],
    en: {
      title: 'OLiO 2-Bedroom Apartments in Mesa Geitonia | From €475K',
      description: 'New two-bedroom OLiO apartments in Mesa Geitonia, Limassol, from €475,000. Direct developer plans, availability and December 2027 delivery target.',
      eyebrow: 'Two-bedroom residences · Mesa Geitonia, Limassol',
      headline: 'OLiO two-bedroom residences in Mesa Geitonia.',
      summary: 'A boutique residential building with approved two-bedroom layouts and covered verandas. An optional internal adaptation may be discussed but is not marketed as an approved legal third bedroom. Request the official plans and current availability.',
      price: 'From €475,000 + VAT',
      facts: ['Approved two-bedroom layouts', 'Target delivery: December 2027', 'Large covered verandas', 'Possible company-share acquisition structure, subject to independent legal and tax advice'],
      audience: 'Best suited to',
      audienceCopy: 'Owner-occupiers, relocating professionals and investors seeking a new two-bedroom residence in Mesa Geitonia. Availability, rental assumptions and transaction structure require independent verification.',
    },
    ru: {
      title: 'OLiO: квартиры с 2 спальнями в Меса Гитония | от €475 тыс.',
      description: 'Новые квартиры OLiO с двумя спальнями в Меса Гитония, Лимассол, от €475 000. Планы, наличие и плановая сдача в декабре 2027 года.',
      eyebrow: 'Квартиры с двумя спальнями · Меса Гитония, Лимассол',
      headline: 'Резиденции OLiO с двумя спальнями в Меса Гитония.',
      summary: 'Бутик-комплекс с утверждёнными планировками на две спальни и крытыми верандами. Возможную внутреннюю адаптацию можно обсудить, но она не рекламируется как официально согласованная третья спальня. Запросите официальные планы и актуальное наличие.',
      price: 'От €475 000 + НДС',
      facts: ['Утверждённые планировки на 2 спальни', 'Плановая сдача: декабрь 2027', 'Большие крытые веранды', 'Возможна покупка акций компании-владельца после независимой юридической и налоговой проверки'],
      audience: 'Для кого объект',
      audienceCopy: 'Покупатели для собственного проживания, специалисты, переезжающие на Кипр, и инвесторы, которым нужна новая двухспальная квартира в Меса Гитония. Наличие, аренду и структуру сделки необходимо проверять независимо.',
    },
  },
];

const relatedAreaByProperty: Record<string, string> = {
  'germasogeia-corporate-prime': 'germasogeia-commercial-property',
  'athanasios-skyline-suites': 'agios-athanasios-sea-view-apartments',
  'tychonas-sanctuary-villas': 'agios-tychonas-luxury-villas',
  'olio-residences-mesa-geitonia': 'mesa-geitonia-new-apartments',
};

const css = `:root{font-family:Arial,sans-serif;color:#24334a;background:#f7f6f1}*{box-sizing:border-box}body{margin:0}.wrap{max-width:1160px;margin:auto;padding:28px}.nav{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 0}.brand{font-family:Georgia,serif;letter-spacing:.22em;font-weight:700}.brand,.crumb{color:#17365d;text-decoration:none}.langs a,.cta{display:inline-block;padding:12px 18px;border:1px solid #c8a36b;text-decoration:none;color:#17365d;font-weight:700}.hero{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:center;padding:32px 0 52px}.hero img{width:100%;height:520px;object-fit:cover}.eyebrow{text-transform:uppercase;letter-spacing:.2em;color:#9b7440;font-size:12px;font-weight:700}h1{font-family:Georgia,serif;font-size:52px;line-height:1.05;margin:18px 0}.summary{font-size:18px;line-height:1.65;color:#536070}.price{font-family:Georgia,serif;font-size:30px;margin:25px 0}.actions{display:flex;flex-wrap:wrap;gap:10px}.cta{background:#17365d;color:white;border-color:#17365d}.cta.secondary{background:transparent;color:#17365d;border-color:#c8a36b}.facts{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:36px 0}.fact,.audience{background:white;border:1px solid #dedbd1;padding:18px}.lead{display:grid;grid-template-columns:.8fr 1.2fr;gap:35px;background:#17365d;color:white;padding:34px;margin:10px 0 30px}.lead h2{font-family:Georgia,serif;font-size:32px;margin:0 0 12px}.lead p{line-height:1.6;color:#dfe8f2}.lead form{display:grid;grid-template-columns:1fr 1fr;gap:12px}.lead input,.lead select,.lead textarea{width:100%;padding:13px;border:1px solid #c9d3df;background:white;color:#24334a;font:inherit}.lead textarea,.lead button,.privacy{grid-column:1/-1}.lead button{padding:15px;border:0;background:#0a9f62;color:white;font-weight:700;cursor:pointer}.privacy{font-size:12px;color:#dfe8f2}label{display:block;line-height:1.7}.wide{grid-column:1/-1}.lead .consent{display:flex;gap:10px;align-items:start;font-size:13px}.lead .consent input{width:auto;margin-top:6px}.details{background:white;padding:24px;margin-bottom:30px;border:1px solid #dedbd1}.details p,.details li{line-height:1.7}.details dl{display:grid;grid-template-columns:1fr 1fr;gap:10px}.details dt{font-weight:bold}.details dd{margin:0}.gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:30px 0 60px}.gallery img{width:100%;height:260px;object-fit:cover}footer{border-top:1px solid #dedbd1;padding:25px 0;color:#6e747d}@media(max-width:800px){.hero,.lead{grid-template-columns:1fr;padding-top:25px}.hero img{height:360px}h1{font-size:38px}.gallery{grid-template-columns:1fr}.facts{grid-template-columns:1fr}.actions .cta{width:100%;text-align:center}.lead form{grid-template-columns:1fr}.lead input,.lead select,.lead textarea,.lead button,.privacy{grid-column:1}}`;

const escapeHtml = (value: unknown) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function renderDetails(page: Page, lang: 'en' | 'ru') {
  const property = PROPERTIES.find(p => p.id === page.slug || (page.slug === 'olio-residences-mesa-geitonia' && p.id === 'dasoudi-coastal-penthouses'));
  if (!property) throw new Error(`Missing specifications for ${page.slug}`);
  const ru = lang === 'ru';
  const rows: Array<[string, unknown]> = [
    [ru ? 'Крытая площадь, м²' : 'Covered area, m²', property.coveredAreaM2],
    [ru ? 'Веранды, м²' : 'Verandas, m²', property.verandaAreaM2],
    [ru ? 'Спальни' : 'Bedrooms', property.bedrooms || (ru ? 'Коммерческий объект' : 'Commercial property')],
    [ru ? 'Заявленный класс энергоэффективности' : 'Stated energy rating', property.energyEfficiency],
  ];
  if (property.distanceToBeachM) rows.push([ru ? 'Заявленное расстояние до моря, м' : 'Stated distance to the sea, m', property.distanceToBeachM]);
  const rent = property.projectedMonthlyIncomeEUR || (property.rentalYieldEstimated ? property.priceEUR * property.rentalYieldEstimated / 1200 : null);
  const scenario = rent ? `<h3>${ru ? 'Иллюстративный арендный сценарий' : 'Illustrative rental scenario'}</h3><p>€${rent.toLocaleString('en')} / ${ru ? 'месяц' : 'month'} × 12 ÷ €${property.priceEUR.toLocaleString('en')} = ${(rent * 12 / property.priceEUR * 100).toFixed(2)}% ${ru ? 'годовых до расходов' : 'annual gross'}.</p><p>${ru ? 'Это расчёт по заявленной аренде, а не подтверждение действующего договора или гарантия дохода. НДС, простой, обслуживание, управление, финансирование и налоги не включены. Запросите независимую оценку аренды.' : 'This is an illustration using the stated rent, not evidence of a signed lease or a guaranteed return. VAT, vacancy, maintenance, management, financing and taxes are excluded. Request an independent rental appraisal.'}</p>` : '';
  return `<section class="details"><h2>${ru ? 'Характеристики и документы объекта' : 'Property specifications and documents'}</h2><p>${ru ? 'Сведения из опубликованной спецификации проекта. Крытая, общая и открытая площади имеют разные определения; запросите официальный план и экспликацию перед покупкой.' : 'Details from the published project specification. Covered, gross and outdoor areas use different definitions; request the official plans and area schedule before purchase.'}</p><dl>${rows.map(([k,v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join('')}</dl>${page.slug === 'germasogeia-corporate-prime' ? `<p>${ru ? 'Заявленная комплектация: 18 парковочных мест, 4 EV-точки, солнечная система 23 кВт, фальшпол 31 мм, охранные камеры и сад на крыше. Состав поставки уточняется в договоре.' : 'Stated specification: 18 parking spaces, 4 EV points, a 23 kW photovoltaic system, 31 mm raised floors, security cameras and a roof garden. Confirm the contractual inclusions.'}</p>` : ''}${scenario}<h3>${ru ? 'Что запросить перед бронированием' : 'What to request before reserving'}</h3><ul><li>${ru ? 'Актуальное наличие, цена и условия НДС для конкретного объекта.' : 'Current unit availability, price and applicable VAT terms.'}</li><li>${ru ? 'Утверждённые планы, экспликация площадей, разрешения и спецификация отделки.' : 'Approved plans, area schedule, permits and finish specification.'}</li><li>${ru ? 'Подтверждение текущей готовности, график платежей и условия передачи.' : 'Confirmation of current completion status, payment schedule and handover terms.'}</li><li>${ru ? 'Документы о праве собственности и обременениях для проверки независимым юристом.' : 'Title and encumbrance documents for independent legal review.'}</li></ul><a href="#request">${ru ? 'Запросить документы по объекту' : 'Request the property documents'}</a></section>`;
}

function render(page: Page, lang: 'en' | 'ru') {
  const copy = page[lang];
  const other = lang === 'en' ? 'ru' : 'en';
  const base = lang === 'en' ? `/properties/${page.slug}/` : `/ru/properties/${page.slug}/`;
  const otherBase = other === 'en' ? `/properties/${page.slug}/` : `/ru/properties/${page.slug}/`;
  const canonical = `https://anothercyprus.com${base}`;
  const labels = lang === 'ru'
    ? { all: 'Все объекты', plans: 'Запросить планы и наличие', email: 'Написать email', call: 'Позвонить', area: 'Подробнее о районе и типе объекта', leadTitle: 'Получите планы и актуальное наличие', leadCopy: 'Оставьте короткий запрос — откроется WhatsApp с готовым сообщением по этому объекту.', name: 'Ваше имя', phone: 'Телефон / WhatsApp', timeline: 'Срок покупки', question: 'Что вы хотите уточнить?', send: 'Отправить запрос в WhatsApp', privacy: 'Данные используются только для ответа на запрос по недвижимости.', footer: 'Прямой запрос по объектам · Покупателю следует независимо проверить цены, право собственности, спецификации и соответствие требованиям.', consent: 'До выбора отправляются только анонимные технические сигналы Google без аналитических cookies.', privacyLink: 'Конфиденциальность', decline: 'Отклонить', allow: 'Разрешить аналитику' }
    : { all: 'All developments', plans: 'Request plans and availability', email: 'Email enquiry', call: 'Call developer desk', area: 'Explore this area and property type', leadTitle: 'Get plans and current availability', leadCopy: 'Send a short property-specific request. WhatsApp will open with your details ready to send.', name: 'Your name', phone: 'Phone / WhatsApp', timeline: 'Purchase timeframe', question: 'What would you like to know?', send: 'Send request in WhatsApp', privacy: 'Your details are used only to answer this property request.', footer: 'Direct developer enquiries · Buyers should independently verify pricing, title, specifications and eligibility.', consent: 'Before you choose, Google receives only anonymous technical signals without analytics cookies.', privacyLink: 'Privacy policy', decline: 'Decline', allow: 'Allow analytics' };
  const areaUrl = `${lang === 'ru' ? '/ru' : ''}/areas/${relatedAreaByProperty[page.slug]}/`;
  const propertyType = page.slug.includes('corporate') ? 'CommercialRealEstate' : page.slug.includes('villas') ? 'SingleFamilyResidence' : 'ApartmentComplex';
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    // Keep the concrete property type while explicitly describing this page as a
    // real-estate listing for crawlers that understand the Schema.org type.
    '@type': ['RealEstateListing', propertyType],
    name: copy.title.split('|')[0].trim(),
    url: canonical,
    image: page.gallery.map((image) => `https://anothercyprus.com${image}`),
    address: { '@type': 'PostalAddress', addressLocality: page.schemaLocality, addressRegion: 'Limassol', addressCountry: 'CY' },
    offers: { '@type': 'Offer', price: page.schemaPrice, priceCurrency: 'EUR', url: canonical },
  });
  const breadcrumb = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: labels.all, item: `https://anothercyprus.com${lang === 'ru' ? '/ru/' : '/'}` }, { '@type': 'ListItem', position: 2, name: copy.headline, item: canonical }] });
  const homeUrl = lang === 'ru' ? '/ru/' : '/';
  const details = renderDetails(page, lang);
  const privacyUrl = lang === 'ru' ? '/ru/privacy/' : '/privacy/';
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${copy.title}</title><meta name="description" content="${copy.description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="en" href="https://anothercyprus.com/properties/${page.slug}/"><link rel="alternate" hreflang="ru" href="https://anothercyprus.com/ru/properties/${page.slug}/"><link rel="alternate" hreflang="x-default" href="https://anothercyprus.com/properties/${page.slug}/"><meta property="og:type" content="website"><meta property="og:locale" content="${lang === 'ru' ? 'ru_RU' : 'en_GB'}"><meta property="og:title" content="${copy.title}"><meta property="og:description" content="${copy.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://anothercyprus.com${page.image}"><meta name="twitter:card" content="summary_large_image"><style>${css}</style><script>window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});try{if(localStorage.getItem('anothercyprus_analytics_consent')==='accepted')window.gtag('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'})}catch(e){}window.gtag('js',new Date());window.gtag('config','G-3WVGML1VRS',{anonymize_ip:true});</script><script async src="https://www.googletagmanager.com/gtag/js?id=G-3WVGML1VRS"></script><script type="application/ld+json">${schema}</script><script type="application/ld+json">${breadcrumb}</script></head><body><main class="wrap"><nav class="nav"><a class="brand" href="${homeUrl}">ANOTHER CYPRUS</a><div class="langs"><a href="${otherBase}">${other.toUpperCase()}</a></div></nav><a class="crumb" href="${homeUrl}#flagship-projects">← ${labels.all}</a><section class="hero"><div><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.headline}</h1><p class="summary">${copy.summary}</p><div class="price">${copy.price}</div><div class="actions"><a class="cta" href="#request">${labels.plans}</a><a class="cta secondary" href="mailto:dyakushev@gmail.com?subject=${encodeURIComponent(`Property enquiry: ${copy.title}`)}">${labels.email}</a><a class="cta secondary" href="tel:+35796373089">${labels.call}</a><a class="cta secondary" href="${areaUrl}">${labels.area}</a></div><div class="facts">${copy.facts.map((fact) => `<div class="fact">${fact}</div>`).join('')}</div><div class="audience"><strong>${copy.audience}</strong><p>${copy.audienceCopy}</p></div></div><img src="${page.image}" alt="${copy.headline}" width="1600" height="1000"></section>${details}<section class="lead" id="request"><div><h2>${labels.leadTitle}</h2><p>${labels.leadCopy}</p></div><form id="lead-form"><label for="lead-name">${labels.name}<input id="lead-name" name="name" autocomplete="name" placeholder="${labels.name}" required></label><label for="lead-phone">${labels.phone}<input id="lead-phone" name="phone" type="tel" autocomplete="tel" placeholder="${labels.phone}" required></label><label for="lead-timeline">${labels.timeline}<select id="lead-timeline" name="timeline"><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Researching options</option></select></label><label class="wide" for="lead-question">${labels.question}<textarea id="lead-question" name="question" rows="2" placeholder="${labels.question}"></textarea></label><label class="wide consent"><input type="checkbox" required> ${labels.privacy} <a href="${privacyUrl}">${labels.privacyLink}</a></label><button type="submit">${labels.send}</button><span class="privacy">${labels.privacy}</span></form></section><section class="gallery">${page.gallery.map((image) => `<img src="${image}" alt="${copy.headline}" loading="lazy" width="1600" height="1000">`).join('')}</section></main><footer><div class="wrap">Another Cyprus · ${labels.footer}</div></footer><aside id="analytics-consent" style="position:fixed;right:0;bottom:0;left:0;z-index:20;background:#132A4B;color:#fff;border-top:1px solid #c8a36b;padding:16px;font:13px/1.5 Arial,sans-serif"><div style="max-width:1160px;margin:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:260px">${labels.consent} <a style="color:#e0b569" href="${privacyUrl}">${labels.privacyLink}</a></span><button data-choice="declined" style="padding:9px 14px;background:transparent;color:#fff;border:1px solid #ffffff66;cursor:pointer">${labels.decline}</button><button data-choice="accepted" style="padding:9px 14px;background:#c8a36b;color:#132A4B;border:0;font-weight:700;cursor:pointer">${labels.allow}</button></div></aside><script>(function(){var key='anothercyprus_analytics_consent',box=document.getElementById('analytics-consent');try{if(localStorage.getItem(key)){box.remove();return}}catch(e){}box.addEventListener('click',function(e){var b=e.target.closest('button[data-choice]');if(!b)return;var ok=b.dataset.choice==='accepted';try{localStorage.setItem(key,ok?'accepted':'declined')}catch(e){}window.gtag('consent','update',{analytics_storage:ok?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});box.remove()})})();function trackContact(c){try{if(localStorage.getItem('anothercyprus_analytics_consent')==='accepted')window.gtag('event','contact_click',{contact_channel:c,project_id:'${page.slug}',page_type:'property'})}catch(e){}}document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a)return;var h=a.href,c=h.indexOf('wa.me/')>-1?'whatsapp':h.indexOf('mailto:')===0?'email':h.indexOf('tel:')===0?'phone':'';if(c)trackContact(c)});document.getElementById('lead-form').addEventListener('submit',function(e){e.preventDefault();var f=new FormData(e.target),p=new URLSearchParams(location.search),src=['utm_source','utm_medium','utm_campaign','utm_term','gclid','fbclid'].map(function(k){return p.get(k)?k+'='+p.get(k):''}).filter(Boolean).join(' | ')||document.referrer||'direct';var msg=['${lang === 'ru' ? 'Здравствуйте! Прошу прислать актуальное наличие, планы и условия покупки.' : 'Hello! Please send current availability, plans and purchase terms.'}','Property: ${copy.title.replace(/'/g, "\\'")}', 'Name: '+f.get('name'),'Phone / WhatsApp: '+f.get('phone'),'Purchase timeframe: '+f.get('timeline'),f.get('question')?'Question: '+f.get('question'):'','Page: '+location.href,'Source: '+src].filter(Boolean).join('\\n');trackContact('whatsapp');window.open('https://wa.me/35796373089?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer')});</script></body></html>`;
}

for (const page of pages) {
  for (const lang of ['en', 'ru'] as const) {
    const dir = join(process.cwd(), 'public', ...(lang === 'ru' ? ['ru'] : []), 'properties', page.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), render(page, lang));
  }
}

const legacyRedirects = [
  { from: ['properties', 'dasoudi-coastal-residences'], to: '/properties/olio-residences-mesa-geitonia/' },
  { from: ['ru', 'properties', 'dasoudi-coastal-residences'], to: '/ru/properties/olio-residences-mesa-geitonia/' },
];

for (const redirect of legacyRedirects) {
  const dir = join(process.cwd(), 'public', ...redirect.from);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'index.html'),
    `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><link rel="canonical" href="https://anothercyprus.com${redirect.to}"><meta http-equiv="refresh" content="0;url=${redirect.to}"><title>OLiO Residences — Mesa Geitonia</title></head><body><a href="${redirect.to}">Continue to the corrected OLiO Residences page</a></body></html>`,
  );
}
