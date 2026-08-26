import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

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
  image: string;
  gallery: string[];
  en: Copy;
  ru: Copy;
};

const pages: Page[] = [
  {
    slug: 'germasogeia-corporate-prime',
    image: '/images/commercial/al1.jpg',
    gallery: ['/images/commercial/al1.jpg', '/images/commercial/al2.jpg', '/images/commercial/al3.jpg'],
    en: {
      title: 'Office Building for Sale in Germasogeia, Limassol | €8.7M',
      description: 'Whole office building for sale in Potamos Germasogeias, Limassol. 1,934 m², 18 parking spaces, rooftop facilities and direct developer enquiry.',
      eyebrow: 'Whole-building commercial acquisition · Potamos Germasogeias',
      headline: 'A standalone Limassol headquarters, 400 metres from the coast.',
      summary: 'A 1,934 m² glass-fronted office building designed for a corporate headquarters, owner-occupier or income-producing commercial asset. Request the area schedule, plans, availability and transaction documents directly.',
      price: '€8,700,000 + VAT',
      facts: ['1,934 m² gross schedule', '18 parking spaces · 4 EV points', 'Rooftop wellness and lounge areas', 'Target handover: June 2026'],
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
      facts: ['Общая площадь 1 934 м²', '18 парковочных мест · 4 EV-точки', 'Rooftop-зоны отдыха и wellness', 'Плановая сдача: июнь 2026'],
      audience: 'Для кого объект',
      audienceCopy: 'Корпоративные покупатели, региональные штаб-квартиры, family offices и инвесторы, которым требуется отдельное здание, а не один офисный этаж.',
    },
  },
  {
    slug: 'athanasios-skyline-suites',
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
      description: 'Новая двухкомнатная резиденция с видом на море в Агиос Атанасиос, Лимассол, от €480 000. Планы и наличие напрямую от застройщика.',
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
    slug: 'dasoudi-coastal-residences',
    image: '/images/dasoudi/dasoudi-1.jpg',
    gallery: ['/images/dasoudi/dasoudi-1.jpg', '/images/dasoudi/dasoudi-2.jpg', '/images/dasoudi/dasoudi-3.jpg'],
    en: {
      title: 'New Apartments near Dasoudi Beach, Limassol | From €475K',
      description: 'New two- and three-bedroom apartments 250 metres from Dasoudi Beach in Potamos Germasogeias, Limassol. Direct developer availability.',
      eyebrow: 'Coastal apartments · 250 m to Dasoudi Beach',
      headline: 'New Limassol residences within walking distance of the sea.',
      summary: 'A boutique residential building near Dasoudi park with two- and three-bedroom layouts, covered verandas and flexible upper-floor plans. Request the price list, floor plans and current availability.',
      price: 'From €475,000 + VAT',
      facts: ['250 m to Dasoudi Beach', 'Two- and three-bedroom layouts', 'Large covered verandas', 'Flexible upper-floor configurations'],
      audience: 'Best suited to',
      audienceCopy: 'Coastal lifestyle buyers, relocating professionals and investors seeking a walkable Germasogeia location with year-round residential demand.',
    },
    ru: {
      title: 'Новые квартиры рядом с пляжем Дасуди | от €475 тыс.',
      description: 'Новые квартиры с двумя и тремя спальнями в 250 метрах от пляжа Дасуди, Потамос Гермасойя. Актуальное наличие напрямую от застройщика.',
      eyebrow: 'Прибрежные квартиры · 250 м до пляжа Дасуди',
      headline: 'Новые резиденции Лимассола в пешей доступности от моря.',
      summary: 'Бутик-комплекс рядом с парком Дасуди: планировки с двумя и тремя спальнями, крытые веранды и гибкие решения верхних этажей. Запросите прайс-лист, планы и актуальное наличие.',
      price: 'От €475 000 + НДС',
      facts: ['250 м до пляжа Дасуди', 'Планировки с 2 и 3 спальнями', 'Большие крытые веранды', 'Гибкие планировки верхних этажей'],
      audience: 'Для кого объект',
      audienceCopy: 'Покупатели жилья у моря, специалисты, переезжающие на Кипр, и инвесторы, которым нужна пешеходная локация Гермасойи с круглогодичным спросом.',
    },
  },
];

const css = `:root{font-family:Arial,sans-serif;color:#24334a;background:#f7f6f1}*{box-sizing:border-box}body{margin:0}.wrap{max-width:1160px;margin:auto;padding:28px}.nav{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:18px 0}.brand{font-family:Georgia,serif;letter-spacing:.22em;font-weight:700}.langs a,.cta{display:inline-block;padding:12px 18px;border:1px solid #c8a36b;text-decoration:none;color:#17365d;font-weight:700}.hero{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:center;padding:52px 0}.hero img{width:100%;height:520px;object-fit:cover}.eyebrow{text-transform:uppercase;letter-spacing:.2em;color:#9b7440;font-size:12px;font-weight:700}h1{font-family:Georgia,serif;font-size:52px;line-height:1.05;margin:18px 0}.summary{font-size:18px;line-height:1.65;color:#536070}.price{font-family:Georgia,serif;font-size:30px;margin:25px 0}.cta{background:#17365d;color:white;border-color:#17365d}.facts{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:36px 0}.fact,.audience{background:white;border:1px solid #dedbd1;padding:18px}.gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:30px 0 60px}.gallery img{width:100%;height:260px;object-fit:cover}footer{border-top:1px solid #dedbd1;padding:25px 0;color:#6e747d}@media(max-width:800px){.hero{grid-template-columns:1fr;padding-top:25px}.hero img{height:360px}h1{font-size:38px}.gallery{grid-template-columns:1fr}.facts{grid-template-columns:1fr}}`;

function render(page: Page, lang: 'en' | 'ru') {
  const copy = page[lang];
  const other = lang === 'en' ? 'ru' : 'en';
  const base = lang === 'en' ? `/properties/${page.slug}/` : `/ru/properties/${page.slug}/`;
  const otherBase = other === 'en' ? `/properties/${page.slug}/` : `/ru/properties/${page.slug}/`;
  const canonical = `https://anothercyprus.com${base}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': page.slug.includes('corporate') ? 'CommercialRealEstate' : page.slug.includes('villas') ? 'SingleFamilyResidence' : 'ApartmentComplex',
    name: copy.title.split('|')[0].trim(),
    url: canonical,
    image: page.gallery.map((image) => `https://anothercyprus.com${image}`),
    offers: { '@type': 'Offer', priceCurrency: 'EUR', url: canonical },
  });
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${copy.title}</title><meta name="description" content="${copy.description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="en" href="https://anothercyprus.com/properties/${page.slug}/"><link rel="alternate" hreflang="ru" href="https://anothercyprus.com/ru/properties/${page.slug}/"><link rel="alternate" hreflang="x-default" href="https://anothercyprus.com/properties/${page.slug}/"><meta property="og:type" content="website"><meta property="og:title" content="${copy.title}"><meta property="og:description" content="${copy.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://anothercyprus.com${page.image}"><meta name="twitter:card" content="summary_large_image"><style>${css}</style><script type="application/ld+json">${schema}</script></head><body><main class="wrap"><nav class="nav"><a class="brand" href="/">ANOTHER CYPRUS</a><div class="langs"><a href="${otherBase}">${other.toUpperCase()}</a></div></nav><section class="hero"><div><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.headline}</h1><p class="summary">${copy.summary}</p><div class="price">${copy.price}</div><a class="cta" href="https://wa.me/35796373089?text=${encodeURIComponent(`${copy.title} — request plans and availability`)}">WhatsApp · +357 96 373089</a><div class="facts">${copy.facts.map((fact) => `<div class="fact">${fact}</div>`).join('')}</div><div class="audience"><strong>${copy.audience}</strong><p>${copy.audienceCopy}</p></div></div><img src="${page.image}" alt="${copy.headline}" width="1600" height="1000"></section><section class="gallery">${page.gallery.map((image) => `<img src="${image}" alt="${copy.headline}" loading="lazy">`).join('')}</section></main><footer><div class="wrap">Another Cyprus · Direct developer enquiries · Buyers should independently verify pricing, title, specifications and eligibility.</div></footer></body></html>`;
}

for (const page of pages) {
  for (const lang of ['en', 'ru'] as const) {
    const dir = join(process.cwd(), 'public', ...(lang === 'ru' ? ['ru'] : []), 'properties', page.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), render(page, lang));
  }
}
