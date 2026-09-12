import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Market = {
  lang: 'en' | 'ru' | 'uk' | 'he';
  path: string;
  dir?: 'rtl';
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  checks: string[];
  faq: Array<{ q: string; a: string }>;
  cta: string;
  propertyPath: string;
};

const markets: Market[] = [
  {
    lang: 'en', path: '/markets/european-buyers-limassol/',
    title: 'Buying New Property in Limassol from Europe | Another Cyprus',
    description: 'A practical starting point for European buyers considering a new apartment, villa or whole office building in Limassol, Cyprus.',
    eyebrow: 'Europe · Limassol property',
    heading: 'Buying a new property in Limassol from Europe.',
    intro: 'A cross-border purchase works best when the buyer starts with the exact property, documents and delivery terms—not a generic investment promise. Another Cyprus presents four distinct new-build opportunities in Limassol with direct developer enquiries.',
    checks: ['Choose the asset type before comparing headline yields: apartment, villa or whole office building.', 'Request the approved plans, specification, price and current availability for the exact unit or building.', 'Use independent Cyprus legal, tax and technical advisers before signing or relying on any residency, VAT or rental assumption.'],
    faq: [{ q: 'Is this a general Cyprus property marketplace?', a: 'No. The website focuses on four specific Limassol developments and direct enquiries for their current documents and availability.' }, { q: 'Can a buyer rely on a projected return or residency outcome?', a: 'No. Rental performance, tax treatment and immigration eligibility depend on current rules and the buyer’s circumstances and need independent advice.' }],
    cta: 'Explore the Limassol developments', propertyPath: '/',
  },
  {
    lang: 'ru', path: '/ru/markets/limassol-property-russian-speaking-buyers/',
    title: 'Недвижимость Лимассола для русскоязычных покупателей | Another Cyprus',
    description: 'Квартиры, виллы и офисное здание в Лимассоле: прямой запрос планов, цен и актуального наличия у застройщика.',
    eyebrow: 'Русскоязычные покупатели · Лимассол',
    heading: 'Новая недвижимость Лимассола для русскоязычных покупателей.',
    intro: 'Покупка недвижимости на Кипре должна начинаться с конкретного объекта и документов, а не с обещаний доходности или налогового результата. Здесь представлены четыре разных новостройки Лимассола с прямым запросом актуальных планов и наличия.',
    checks: ['Выбрать тип объекта: квартира, вилла или отдельное офисное здание.', 'Запросить утверждённый план, спецификацию, цену и условия сдачи именно выбранного объекта.', 'До подписания договора привлечь независимых юриста, налогового и технического специалиста на Кипре.'],
    faq: [{ q: 'Это каталог всей недвижимости Кипра?', a: 'Нет. Сайт посвящён четырём конкретным объектам в Лимассоле и прямому запросу их актуальных документов.' }, { q: 'Можно гарантировать ВНЖ, доходность или отсутствие НДС?', a: 'Нет. Такие вопросы зависят от правил и обстоятельств сделки и требуют независимой профессиональной проверки.' }],
    cta: 'Посмотреть объекты в Лимассоле', propertyPath: '/ru/',
  },
  {
    lang: 'uk', path: '/uk/markets/limassol-property-ukrainian-buyers/',
    title: 'Нерухомість у Лімасолі для покупців з України | Another Cyprus',
    description: 'Нові квартири, вілли та офісна будівля в Лімасолі: плани, характеристики й актуальна наявність напряму від девелопера.',
    eyebrow: 'Покупці з України · Лімасол',
    heading: 'Нова нерухомість у Лімасолі для покупців з України.',
    intro: 'Міжнародну купівлю варто починати з конкретного об’єкта, офіційного плану та умов договору, а не з обіцянок прибутковості. Another Cyprus представляє чотири різні новобудови Лімасола та допомагає надіслати прямий запит девелоперу.',
    checks: ['Спочатку визначити тип: квартира, вілла або окрема офісна будівля.', 'Запросити затверджений план, специфікацію, поточну ціну та графік передачі саме для вибраного об’єкта.', 'До підписання договору залучити незалежних кіпрських юриста, податкового та технічного консультантів.'],
    faq: [{ q: 'Чи це загальний каталог нерухомості Кіпру?', a: 'Ні. Сайт присвячений чотирьом конкретним проєктам у Лімасолі та прямому запиту їхніх актуальних документів.' }, { q: 'Чи гарантує сайт дохід, податковий результат або дозвіл на проживання?', a: 'Ні. Це залежить від правил і обставин покупця та потребує незалежної професійної перевірки.' }],
    cta: 'Переглянути об’єкти у Лімасолі', propertyPath: '/',
  },
  {
    lang: 'he', path: '/he/markets/limassol-property-israeli-buyers/', dir: 'rtl',
    title: 'נכסים חדשים בלימסול לרוכשים מישראל | Another Cyprus',
    description: 'דירות חדשות, וילות ובניין משרדים בלימסול: תוכניות, מפרטים וזמינות עדכנית בפנייה ישירה ליזם.',
    eyebrow: 'רוכשים מישראל · לימסול',
    heading: 'נכסים חדשים בלימסול לרוכשים מישראל.',
    intro: 'רכישה בינלאומית מתחילה בנכס מסוים, בתוכניות מאושרות ובתנאי הסכם ברורים — לא בהבטחת תשואה. Another Cyprus מציג ארבעה פרויקטים מובחנים בלימסול ומאפשר פנייה ישירה לקבלת מידע עדכני.',
    checks: ['לבחור תחילה את סוג הנכס: דירה, וילה או בניין משרדים שלם.', 'לבקש תוכנית מאושרת, מפרט, מחיר עדכני ולוח מסירה עבור הנכס המדויק.', 'לפני חתימה יש להיעזר ביועצים משפטיים, מסיים וטכניים עצמאיים בקפריסין.'],
    faq: [{ q: 'האם זהו מאגר כללי של נכסים בקפריסין?', a: 'לא. האתר מתמקד בארבעה פרויקטים ספציפיים בלימסול ובפנייה ישירה לקבלת מסמכים וזמינות עדכניים.' }, { q: 'האם מובטחת תשואה, תוצאת מס או זכאות לתושבות?', a: 'לא. נושאים אלה תלויים בכללים ובנסיבות הרוכש ודורשים בדיקה מקצועית עצמאית.' }],
    cta: 'לצפייה בנכסים בלימסול', propertyPath: '/',
  },
];

const allAlternates = markets.map((market) => `<link rel="alternate" hreflang="${market.lang}" href="https://anothercyprus.com${market.path}">`).join('');
const css = `:root{font-family:Arial,sans-serif;color:#283649;background:#f7f6f1}*{box-sizing:border-box}body{margin:0}.wrap{max-width:920px;margin:auto;padding:24px}.nav{display:flex;justify-content:space-between;border-bottom:1px solid #ddd8ca;padding:18px 0}.brand,a{color:#17365d}.brand{text-decoration:none;font-family:Georgia,serif;font-weight:700;letter-spacing:.18em}.eyebrow{font-size:12px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#9b7440}.hero{padding:60px 0 25px}h1,h2{font-family:Georgia,serif;color:#17365d}h1{font-size:48px;line-height:1.1;margin:17px 0}.intro,p,li{font-size:18px;line-height:1.7;color:#536070}.card{background:#fff;border:1px solid #ddd8ca;padding:30px;margin:35px 0}.cta{display:inline-block;background:#17365d;color:#fff;padding:14px 18px;text-decoration:none;font-weight:700}.faq{border-top:1px solid #ddd8ca;margin-top:40px}.note{font-size:13px;border-top:1px solid #ddd8ca;padding-top:20px}@media(max-width:700px){h1{font-size:36px}.hero{padding-top:36px}}`;

function render(market: Market) {
  const canonical = `https://anothercyprus.com${market.path}`;
  const faq = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: market.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const page = { '@context': 'https://schema.org', '@type': 'WebPage', name: market.title, description: market.description, url: canonical, inLanguage: market.lang, about: { '@type': 'Place', name: 'Limassol', address: { '@type': 'PostalAddress', addressCountry: 'CY' } } };
  const allProperties = market.lang === 'ru' ? 'Объекты в Лимассоле' : market.lang === 'uk' ? 'Об’єкти в Лімасолі' : market.lang === 'he' ? 'נכסים בלימסול' : 'Limassol properties';
  const note = market.lang === 'ru' ? 'Информация носит общий характер и не является юридической, налоговой, иммиграционной, оценочной или инвестиционной консультацией.' : market.lang === 'uk' ? 'Інформація має загальний характер і не є юридичною, податковою, імміграційною, оціночною чи інвестиційною консультацією.' : market.lang === 'he' ? 'המידע כללי בלבד ואינו ייעוץ משפטי, מסי, הגירה, הערכה או השקעות.' : 'Information is general only and is not legal, tax, immigration, valuation or investment advice.';
  return `<!doctype html><html lang="${market.lang}"${market.dir ? ` dir="${market.dir}"` : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${market.title}</title><meta name="description" content="${market.description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}">${allAlternates}<link rel="alternate" hreflang="x-default" href="https://anothercyprus.com/markets/european-buyers-limassol/"><meta property="og:type" content="website"><meta property="og:title" content="${market.title}"><meta property="og:description" content="${market.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://anothercyprus.com/images/commercial/al4.jpg"><meta name="twitter:card" content="summary_large_image"><style>${css}</style><script type="application/ld+json">${JSON.stringify(page)}</script><script type="application/ld+json">${JSON.stringify(faq)}</script></head><body><main class="wrap"><nav class="nav"><a class="brand" href="${market.lang === 'ru' ? '/ru/' : '/'}">ANOTHER CYPRUS</a><a href="/">${allProperties}</a></nav><header class="hero"><div class="eyebrow">${market.eyebrow}</div><h1>${market.heading}</h1><p class="intro">${market.intro}</p></header><section class="card"><h2>${market.lang === 'ru' ? 'Практический маршрут покупателя' : market.lang === 'uk' ? 'Практичний маршрут покупця' : market.lang === 'he' ? 'מסלול מעשי לרוכש' : 'A practical buyer route'}</h2><ul>${market.checks.map((item) => `<li>${item}</li>`).join('')}</ul><a class="cta" href="${market.propertyPath}">${market.cta}</a></section><section class="faq"><h2>${market.lang === 'ru' ? 'Частые вопросы' : market.lang === 'uk' ? 'Поширені запитання' : market.lang === 'he' ? 'שאלות נפוצות' : 'Buyer questions'}</h2>${market.faq.map((item) => `<h3>${item.q}</h3><p>${item.a}</p>`).join('')}</section><p class="note">${note}</p></main></body></html>`;
}

for (const market of markets) {
  const destination = join(process.cwd(), 'public', ...market.path.split('/').filter(Boolean));
  mkdirSync(destination, { recursive: true });
  writeFileSync(join(destination, 'index.html'), render(market));
}
