import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
  propertyLabel: string;
  propertyCopy: string;
  propertyCta: string;
  guideCta: string;
};

type Area = {
  slug: string;
  locality: string;
  image: string;
  propertyName: string;
  propertyUrl: string;
  guideUrl: string;
  en: Copy;
  ru: Copy;
};

const areas: Area[] = [
  {
    slug: 'germasogeia-commercial-property', locality: 'Germasogeia', image: '/images/commercial/al4.jpg',
    propertyName: 'Germasogeia Corporate Prime', propertyUrl: '/properties/germasogeia-corporate-prime/', guideUrl: '/guides/buying-office-building-germasogeia-limassol/',
    en: {
      title: 'Commercial Property in Germasogeia, Limassol | Office Building',
      description: 'A focused guide to commercial property and whole office buildings in Germasogeia, Limassol, with direct access to a standalone headquarters opportunity.',
      eyebrow: 'Commercial property · Germasogeia, Limassol',
      headline: 'Commercial property in Germasogeia for companies that need a complete building.',
      intro: 'Germasogeia attracts international companies because it connects the coastal business corridor with Limassol’s highway network. This page is for buyers considering a standalone office building—not apartments, villas or individual office units.',
      sections: [
        { heading: 'Why companies consider Germasogeia', paragraphs: ['The district combines an established international business environment with access to the seafront, hotels, restaurants and residential neighbourhoods used by relocating teams. The practical advantage is not a postcode alone: staff access, client arrival and the route to both airports need to work every day.', 'For an owner-occupier, a complete building can provide control over branding, security and future space planning. For an investor, the key question is whether the floor plates and services support flexible occupation if the leasing strategy changes.'] },
        { heading: 'What to verify before an office acquisition', paragraphs: ['Compare usable working space separately from common areas, terraces and roof facilities. Review parking allocations, lift capacity, cooling, energy performance, access control and the cost of operating the building after handover.'], bullets: ['Test highway and coastal-road access during commuting hours.', 'Confirm legal parking allocations and EV infrastructure.', 'Request permits, title information, area schedules and technical specifications.', 'Model occupancy, operating costs and exit options conservatively.'] },
        { heading: 'A focused opportunity', paragraphs: ['The featured property is a glass-fronted whole office building in Potamos Germasogeias. It is presented for corporate occupation or commercial investment, with plans and transaction information supplied on request. All material details should be checked by the buyer’s independent legal, tax and technical advisers.'] },
      ],
      faq: [
        { question: 'Is this page about residential property?', answer: 'No. It is intentionally focused on commercial buildings and corporate headquarters in Germasogeia.' },
        { question: 'Can the building be reviewed floor by floor?', answer: 'Request the current plans and area schedule, then test each floor against the intended occupation or leasing strategy.' },
        { question: 'Should headline rental yield be treated as guaranteed?', answer: 'No. Rent, occupancy, costs and yield require an independent commercial appraisal.' },
      ],
      propertyLabel: 'Featured Germasogeia office building', propertyCopy: 'A standalone 1,934 m² commercial building offered as a complete acquisition.', propertyCta: 'View office building and request plans', guideCta: 'Read the office-building buyer checklist',
    },
    ru: {
      title: 'Коммерческая недвижимость в Гермасойе, Лимассол | Офисное здание',
      description: 'Коммерческая недвижимость и отдельные офисные здания в Гермасойе, Лимассол. Прямой доступ к предложению корпоративной штаб-квартиры.',
      eyebrow: 'Коммерческая недвижимость · Гермасойя, Лимассол',
      headline: 'Офисное здание в Гермасойе для компании, которой нужен объект целиком.',
      intro: 'Гермасойю выбирают международные компании благодаря связи прибрежного делового коридора с трассой Лимассола. Эта страница создана только для покупателей отдельного офисного здания — без квартир, вилл и отдельных офисных блоков.',
      sections: [
        { heading: 'Почему компании рассматривают Гермасойю', paragraphs: ['Район сочетает международную деловую среду с доступом к побережью, отелям, ресторанам и жилым районам, где селятся сотрудники после релокации. Важен не только адрес: необходимо проверить ежедневный маршрут команды, приезд клиентов и связь с обоими аэропортами.', 'Собственное здание даёт компании контроль над брендингом, безопасностью и будущей организацией пространства. Инвестору важно понять, позволяют ли этажи и инженерные системы менять формат аренды.'] },
        { heading: 'Что проверить перед покупкой', paragraphs: ['Сравнивайте полезную офисную площадь отдельно от общих зон, террас и крыши. Проверьте парковку, лифты, охлаждение, энергоэффективность, контроль доступа и будущие эксплуатационные расходы.'], bullets: ['Проверить подъезд в часы пик.', 'Подтвердить юридическое закрепление парковочных мест и EV-точек.', 'Запросить разрешения, титул, площади и техническую спецификацию.', 'Консервативно рассчитать заполнение, расходы и будущую продажу.'] },
        { heading: 'Профильное предложение', paragraphs: ['Представленный объект — отдельное стеклянное офисное здание в Потамос Гермасойя. Оно подходит для штаб-квартиры или коммерческой инвестиции. Планы и документы предоставляются по запросу, а существенные условия должны проверяться независимыми юристами, налоговыми и техническими специалистами покупателя.'] },
      ],
      faq: [
        { question: 'Здесь представлена жилая недвижимость?', answer: 'Нет. Страница намеренно посвящена офисным зданиям и корпоративным штаб-квартирам в Гермасойе.' },
        { question: 'Можно изучить планы каждого этажа?', answer: 'Да, запросите актуальные планы и таблицу площадей и сопоставьте их с вашей моделью использования.' },
        { question: 'Доходность гарантирована?', answer: 'Нет. Аренда, заполнение, расходы и доходность требуют независимой коммерческой оценки.' },
      ],
      propertyLabel: 'Офисное здание в Гермасойе', propertyCopy: 'Отдельное коммерческое здание площадью 1 934 м², продаваемое целиком.', propertyCta: 'Посмотреть здание и запросить планы', guideCta: 'Чек-лист покупателя офисного здания',
    },
  },
  {
    slug: 'agios-athanasios-sea-view-apartments', locality: 'Agios Athanasios', image: '/images/athanasios/athanasios-1.jpg',
    propertyName: 'Athanasios Skyline Suites', propertyUrl: '/properties/athanasios-skyline-suites/', guideUrl: '/guides/sea-view-apartment-agios-athanasios-guide/',
    en: {
      title: 'Sea-View Apartments in Agios Athanasios, Limassol', description: 'New sea-view apartments in Agios Athanasios, Limassol: location, access, layouts and a focused two-bedroom residence opportunity.',
      eyebrow: 'Sea-view apartments · Agios Athanasios', headline: 'Sea-view apartments above Limassol in Agios Athanasios.',
      intro: 'Agios Athanasios is primarily a residential choice for buyers who want elevation, city access and proximity to schools and the highway. This page focuses only on new apartments in the area and the practical questions behind a genuine sea view.',
      sections: [
        { heading: 'Elevation, orientation and daily access', paragraphs: ['A drone panorama does not prove the outlook from a specific apartment. Buyers should confirm the unit’s floor, orientation and marked position, then consider afternoon sun, wind and future construction nearby.', 'The district can work well for families and professionals, but the last kilometre matters. Drive the actual route to schools, offices and the highway during normal weekday traffic.'] },
        { heading: 'Evaluate the apartment, not the brochure', paragraphs: ['Separate internal covered area, veranda and common-area allocation. Test storage, bedroom privacy, usable wall lengths and the connection between kitchen, living room and outdoor space.'], bullets: ['Confirm the exact parking bay and storage allocation.', 'Check cooling, hot water, glazing and energy specifications.', 'Ask for the construction schedule and contractual delivery provisions.', 'Use realistic rent evidence; owner guidance for a two-bedroom apartment is currently up to €2,500 per month.'] },
        { heading: 'The residence featured here', paragraphs: ['Athanasios Skyline Suites is presented as a new two-bedroom residence with panoramic sea and city views. Current availability, plans and specifications can be requested directly. Rental performance and any residency-related eligibility must be checked independently.'] },
      ],
      faq: [{ question: 'How can I verify the sea view?', answer: 'Ask for the exact floor, orientation and a verified view study for the unit—not only drone photography.' }, { question: 'What is a realistic two-bedroom rent?', answer: 'The owner’s current guidance is up to €2,500 per month, depending on the exact unit, furnishing and market conditions.' }, { question: 'Is the apartment automatically eligible for permanent residency?', answer: 'No. Eligibility depends on current rules, property status and the buyer’s circumstances; obtain independent advice.' }],
      propertyLabel: 'Featured Agios Athanasios residence', propertyCopy: 'A new two-bedroom residence with panoramic sea and city views.', propertyCta: 'View residence and request availability', guideCta: 'Read the sea-view apartment reality check',
    },
    ru: {
      title: 'Квартиры с видом на море в Агиос Атанасиос, Лимассол', description: 'Новые квартиры с видом на море в Агиос Атанасиос: расположение, подъезд, планировки и двухспальная резиденция.',
      eyebrow: 'Квартиры с видом на море · Агиос Атанасиос', headline: 'Квартиры с видом на море над Лимассолом в Агиос Атанасиос.',
      intro: 'Агиос Атанасиос подходит покупателям, которым важны высота, доступ к городу, школам и трассе. Страница посвящена только новым квартирам района и практической проверке настоящего вида на море.',
      sections: [
        { heading: 'Высота, ориентация и ежедневный маршрут', paragraphs: ['Панорама с дрона не подтверждает вид из конкретной квартиры. Необходимо знать этаж, ориентацию и положение квартиры на плане, а также учитывать вечернее солнце, ветер и возможное строительство рядом.', 'Район удобен семьям и специалистам, но решающим бывает последний километр. Проверьте реальную дорогу к школам, офисам и трассе в будний день.'] },
        { heading: 'Оценивайте квартиру, а не буклет', paragraphs: ['Отделяйте внутреннюю площадь от крытой веранды и доли общих зон. Проверьте хранение, приватность спален, полезные стены и связь кухни, гостиной и террасы.'], bullets: ['Подтвердить конкретную парковку и кладовую.', 'Проверить охлаждение, горячую воду, стеклопакеты и энергоэффективность.', 'Запросить график строительства и условия договора по срокам.', 'Использовать реалистичную аренду: текущий ориентир владельца — до €2 500 в месяц за две спальни.'] },
        { heading: 'Представленная резиденция', paragraphs: ['Athanasios Skyline Suites — новая квартира с двумя спальнями и панорамным видом на море и город. Актуальное наличие, планы и спецификацию можно запросить напрямую. Арендный результат и соответствие условиям ПМЖ необходимо проверять независимо.'] },
      ],
      faq: [{ question: 'Как проверить вид на море?', answer: 'Запросите точный этаж, ориентацию и подтверждённую визуализацию вида конкретной квартиры, а не только съёмку с дрона.' }, { question: 'Какой ориентир аренды для двух спален?', answer: 'Текущий ориентир владельца — до €2 500 в месяц в зависимости от квартиры, мебели и рынка.' }, { question: 'Квартира автоматически подходит для ПМЖ?', answer: 'Нет. Это зависит от действующих правил, статуса объекта и покупателя; требуется независимая консультация.' }],
      propertyLabel: 'Резиденция в Агиос Атанасиос', propertyCopy: 'Новая квартира с двумя спальнями и панорамным видом на море и город.', propertyCta: 'Посмотреть резиденцию и наличие', guideCta: 'Как проверить квартиру с видом на море',
    },
  },
  {
    slug: 'agios-tychonas-luxury-villas', locality: 'Agios Tychonas', image: '/images/villas/tychonass-villa-1.jpg',
    propertyName: 'The Tychonas Sanctuary Villas', propertyUrl: '/properties/tychonas-sanctuary-villas/', guideUrl: '/guides/turnkey-villa-agios-tychonas-checklist/',
    en: {
      title: 'Luxury Villas with Private Pools in Agios Tychonas, Limassol', description: 'Turnkey luxury villas with private pools in Agios Tychonas, Limassol: privacy, specifications, handover and a focused villa collection.',
      eyebrow: 'Private-pool villas · Agios Tychonas', headline: 'Luxury villas with private pools in Agios Tychonas.',
      intro: 'Agios Tychonas is a low-density hillside villa market above Limassol’s eastern coastline. This page is exclusively for buyers seeking a detached home with privacy and a private pool—not an apartment or a yield-led commercial purchase.',
      sections: [
        { heading: 'Why the exact plot matters', paragraphs: ['Privacy depends on levels, neighbouring windows, road position and landscaping. Review the site plan, finished levels and the relationship between the house, pool terrace and adjoining plots.', 'Orientation changes shade, wind and how often outdoor areas are comfortable. Visit the area at different times and drive the route to the coast, schools and city rather than relying on straight-line distances.'] },
        { heading: 'Define “turnkey” in writing', paragraphs: ['Furniture, appliances, landscaping, pool equipment and climate systems should be listed in the contract specification. Marketing photographs are not an inclusion schedule.'], bullets: ['Confirm pool dimensions, filtration, plant access and warranty.', 'Record brands or performance standards for finishes and systems.', 'Arrange independent snagging before final acceptance.', 'Collect permits, warranties, manuals and commissioning records.'] },
        { heading: 'A villa collection for this search', paragraphs: ['The Tychonas Sanctuary Villas are presented as detached turnkey homes with private pools, furniture and landscaping. Request the current villa allocation, plot plans and written inclusion schedule. Legal title, VAT and contract terms require independent verification.'] },
      ],
      faq: [{ question: 'What should turnkey include?', answer: 'Only items listed in the signed specification should be treated as included: furniture, appliances, landscaping and systems must be explicit.' }, { question: 'Does every villa have the same privacy and view?', answer: 'No. Plot levels, orientation and neighbours differ, so each villa must be assessed individually.' }, { question: 'When should snagging take place?', answer: 'Arrange an independent inspection before final acceptance, with defects and completion deadlines recorded in writing.' }],
      propertyLabel: 'Featured Agios Tychonas villas', propertyCopy: 'Detached turnkey villas with private pools, furniture and landscaping.', propertyCta: 'View villas and request plot plans', guideCta: 'Read the turnkey villa checklist',
    },
    ru: {
      title: 'Элитные виллы с бассейнами в Агиос Тихонас, Лимассол', description: 'Виллы под ключ с частными бассейнами в Агиос Тихонас: приватность, комплектация, приёмка и профильная коллекция вилл.',
      eyebrow: 'Виллы с бассейнами · Агиос Тихонас', headline: 'Элитные виллы с частными бассейнами в Агиос Тихонас.',
      intro: 'Агиос Тихонас — малоэтажный рынок вилл на холмах над восточным побережьем Лимассола. Страница создана только для покупателей отдельного дома с приватностью и бассейном, а не квартиры или коммерческого объекта.',
      sections: [
        { heading: 'Почему важен конкретный участок', paragraphs: ['Приватность зависит от перепада высот, соседних окон, дороги и озеленения. Изучите генплан, готовые отметки и расположение дома, бассейна и соседних участков.', 'Ориентация влияет на тень, ветер и комфорт открытых зон. Посетите район в разное время и самостоятельно проверьте дорогу к побережью, школам и городу.'] },
        { heading: 'Зафиксируйте значение «под ключ»', paragraphs: ['Мебель, техника, озеленение, оборудование бассейна и климатические системы должны быть перечислены в договорной спецификации. Фотографии не заменяют перечень комплектации.'], bullets: ['Подтвердить размеры бассейна, фильтрацию, доступ и гарантию.', 'Зафиксировать марки или стандарты отделки и оборудования.', 'Провести независимую приёмку до окончательного расчёта.', 'Получить разрешения, гарантии, инструкции и акты запуска систем.'] },
        { heading: 'Коллекция вилл под этот запрос', paragraphs: ['The Tychonas Sanctuary Villas — отдельные виллы под ключ с бассейнами, мебелью и озеленением. Запросите актуальное наличие, планы участков и письменную комплектацию. Титул, НДС и условия договора требуют независимой проверки.'] },
      ],
      faq: [{ question: 'Что должно входить в «под ключ»?', answer: 'Включёнными считаются только позиции из подписанной спецификации: мебель, техника, озеленение и системы должны быть указаны явно.' }, { question: 'У всех вилл одинаковая приватность?', answer: 'Нет. Высота участка, ориентация и соседи различаются, поэтому каждая вилла оценивается отдельно.' }, { question: 'Когда проводить приёмку?', answer: 'Независимую проверку проводят до окончательной приёмки, фиксируя дефекты и сроки устранения письменно.' }],
      propertyLabel: 'Виллы в Агиос Тихонас', propertyCopy: 'Отдельные виллы под ключ с бассейнами, мебелью и озеленением.', propertyCta: 'Посмотреть виллы и планы участков', guideCta: 'Чек-лист покупки виллы под ключ',
    },
  },
  {
    slug: 'mesa-geitonia-new-apartments', locality: 'Mesa Geitonia', image: '/images/dasoudi/dasoudi-1.jpg',
    propertyName: 'OLiO Residences — Mesa Geitonia', propertyUrl: '/properties/olio-residences-mesa-geitonia/', guideUrl: '/guides/buying-apartment-mesa-geitonia-limassol/',
    en: {
      title: 'New Apartments in Mesa Geitonia, Limassol | OLiO', description: 'New two-bedroom apartments in Mesa Geitonia, Limassol: approved layouts, daily access, delivery and the OLiO Residences opportunity.',
      eyebrow: 'New apartments · Mesa Geitonia, Limassol', headline: 'New two-bedroom apartments in central Mesa Geitonia.',
      intro: 'Mesa Geitonia is a practical central-Limassol choice for residents who value access to business districts, daily services and the highway. This page is dedicated to new apartments in Mesa Geitonia and does not position OLiO as a Dasoudi development.',
      sections: [
        { heading: 'A location chosen for everyday use', paragraphs: ['The area is not marketed as a beachfront resort address. Its strength is the ability to reach several parts of Limassol without beginning every journey on the seafront road. Buyers should still test the exact route at commuting time and inspect the immediate streets.', 'For owner-occupiers and relocating professionals, supermarkets, schools, medical services and workplace access may matter more than a holiday-style setting.'] },
        { heading: 'Use the approved two-bedroom plan', paragraphs: ['OLiO apartments are approved as two-bedroom homes. A possible internal adaptation must not be described as an approved legal third bedroom unless formally authorised. This distinction matters for valuation, financing and resale.'], bullets: ['Request the official stamped plan.', 'Separate internal area, covered veranda and common allocation.', 'Confirm parking, storage and lift access.', 'Review staged payments and the contractual delivery provisions for December 2027.'] },
        { heading: 'Transaction structure needs advice', paragraphs: ['A company-share acquisition may be discussed in some circumstances, but it is not an automatic “no VAT” route. Company liabilities, tax, financing and resale consequences require independent legal, tax and corporate due diligence.'] },
      ],
      faq: [{ question: 'Is OLiO located in Dasoudi?', answer: 'No. OLiO is presented as a Mesa Geitonia development in Limassol.' }, { question: 'Are the apartments legal three-bedroom units?', answer: 'No. The approved layouts are two-bedroom homes. Any internal adaptation requires separate professional and legal review.' }, { question: 'What is the target delivery date?', answer: 'The stated target is December 2027; buyers should confirm contractual milestones, extensions and remedies.' }],
      propertyLabel: 'Featured Mesa Geitonia apartments', propertyCopy: 'OLiO approved two-bedroom residences with covered verandas and a December 2027 delivery target.', propertyCta: 'View OLiO and request official plans', guideCta: 'Read the Mesa Geitonia apartment guide',
    },
    ru: {
      title: 'Новые квартиры в Меса Гитония, Лимассол | OLiO', description: 'Новые квартиры с двумя спальнями в Меса Гитония: утверждённые планы, расположение, сдача и проект OLiO Residences.',
      eyebrow: 'Новые квартиры · Меса Гитония, Лимассол', headline: 'Новые квартиры с двумя спальнями в центральной Меса Гитония.',
      intro: 'Меса Гитония подходит жителям, которым важны деловые районы, повседневные услуги и трасса. Страница посвящена только новым квартирам в Меса Гитония и не позиционирует OLiO как проект в Дасуди.',
      sections: [
        { heading: 'Расположение для повседневной жизни', paragraphs: ['Это не курортный адрес на первой линии. Сильная сторона района — возможность добираться в разные части Лимассола, не начиная каждую поездку с прибрежной дороги. Проверьте конкретный маршрут в часы пик и осмотрите ближайшие улицы.', 'Для собственного проживания и релокации доступ к магазинам, школам, медицине и работе часто важнее туристического окружения.'] },
        { heading: 'Ориентируйтесь на утверждённый план с двумя спальнями', paragraphs: ['Квартиры OLiO утверждены как жильё с двумя спальнями. Возможную внутреннюю адаптацию нельзя называть официальной третьей спальней без согласования. Это важно для оценки, финансирования и перепродажи.'], bullets: ['Запросить официальный утверждённый план.', 'Разделить внутреннюю площадь, крытую веранду и общие зоны.', 'Подтвердить парковку, кладовую и доступ к лифту.', 'Проверить график платежей и условия договора по сдаче в декабре 2027 года.'] },
        { heading: 'Структура сделки требует консультации', paragraphs: ['Покупка акций компании-владельца иногда может обсуждаться, но не является автоматическим способом избежать НДС. Обязательства компании, налоги, финансирование и будущая продажа требуют независимой юридической, налоговой и корпоративной проверки.'] },
      ],
      faq: [{ question: 'OLiO находится в Дасуди?', answer: 'Нет. OLiO представлен как проект в районе Меса Гитония, Лимассол.' }, { question: 'Это официальные квартиры с тремя спальнями?', answer: 'Нет. Утверждённые планировки имеют две спальни. Любая адаптация требует отдельной профессиональной и юридической проверки.' }, { question: 'Когда планируется сдача?', answer: 'Заявленный срок — декабрь 2027 года; в договоре необходимо проверить этапы, возможные продления и ответственность.' }],
      propertyLabel: 'Квартиры в Меса Гитония', propertyCopy: 'OLiO: утверждённые квартиры с двумя спальнями, крытыми верандами и плановой сдачей в декабре 2027 года.', propertyCta: 'Посмотреть OLiO и запросить планы', guideCta: 'Гид по покупке квартиры в Меса Гитония',
    },
  },
];

const css = `:root{font-family:Arial,sans-serif;color:#283649;background:#f7f6f1}*{box-sizing:border-box}body{margin:0}a{color:#17365d}.wrap{max-width:1050px;margin:auto;padding:24px}.nav{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #dcd8cd;padding:17px 0}.brand{text-decoration:none;font-family:Georgia,serif;font-weight:700;letter-spacing:.2em}.lang{border:1px solid #c29b61;padding:9px 13px;text-decoration:none;font-weight:700}.hero{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center;padding:55px 0}.hero img{width:100%;height:470px;object-fit:cover}.eyebrow{text-transform:uppercase;letter-spacing:.18em;color:#9b7440;font-size:12px;font-weight:700}h1,h2{font-family:Georgia,serif;color:#17365d}h1{font-size:49px;line-height:1.08;margin:18px 0}.intro{font-size:19px;line-height:1.65;color:#536070}.article{max-width:790px;margin:auto}.article h2{font-size:30px;margin:46px 0 14px}.article p,.article li{font-size:17px;line-height:1.75}.offer{background:#17365d;color:white;padding:34px;margin:50px 0}.offer h2{color:white;margin:0 0 10px}.offer p{color:#dfe7f1}.actions{display:flex;flex-wrap:wrap;gap:12px}.cta{display:inline-block;background:#c29b61;color:#102744;text-decoration:none;padding:14px 18px;font-weight:800}.secondary{background:white}.faq{border-top:1px solid #dcd8cd;margin-top:45px}.faq h3{font-size:18px;color:#17365d;margin:28px 0 6px}.faq p{margin-top:0}.note{font-size:13px!important;color:#68717d;border-top:1px solid #dcd8cd;padding-top:22px;margin:50px 0}footer{border-top:1px solid #dcd8cd;color:#68717d;font-size:13px;padding:24px 0}@media(max-width:760px){.hero{grid-template-columns:1fr;padding:35px 0}.hero img{height:330px}h1{font-size:37px}.article h2{font-size:27px}.actions a{width:100%;text-align:center}}`;

function render(area: Area, lang: 'en' | 'ru') {
  const copy = area[lang];
  const base = `${lang === 'ru' ? '/ru' : ''}/areas/${area.slug}/`;
  const otherBase = `${lang === 'en' ? '/ru' : ''}/areas/${area.slug}/`;
  const canonical = `https://anothercyprus.com${base}`;
  const propertyUrl = lang === 'ru' ? `/ru${area.propertyUrl}` : area.propertyUrl;
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: copy.title, description: copy.description, url: canonical, about: { '@type': 'Place', name: area.locality, address: { '@type': 'PostalAddress', addressRegion: 'Limassol', addressCountry: 'CY' } }, primaryImageOfPage: `https://anothercyprus.com${area.image}` });
  const faqSchema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
  const breadcrumb = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Another Cyprus', item: 'https://anothercyprus.com/' }, { '@type': 'ListItem', position: 2, name: area.locality, item: canonical }] });
  const sections = copy.sections.map((section) => `<section><h2>${section.heading}</h2>${section.paragraphs.map((p) => `<p>${p}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}</section>`).join('');
  const guideLink = lang === 'en' ? `<a class="cta secondary" href="${area.guideUrl}">${copy.guideCta}</a>` : '';
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${copy.title}</title><meta name="description" content="${copy.description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="en" href="https://anothercyprus.com/areas/${area.slug}/"><link rel="alternate" hreflang="ru" href="https://anothercyprus.com/ru/areas/${area.slug}/"><link rel="alternate" hreflang="x-default" href="https://anothercyprus.com/areas/${area.slug}/"><meta property="og:type" content="website"><meta property="og:title" content="${copy.title}"><meta property="og:description" content="${copy.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://anothercyprus.com${area.image}"><meta name="twitter:card" content="summary_large_image"><style>${css}</style><script type="application/ld+json">${schema}</script><script type="application/ld+json">${faqSchema}</script><script type="application/ld+json">${breadcrumb}</script></head><body><main class="wrap"><nav class="nav"><a class="brand" href="${lang === 'ru' ? '/ru/' : '/'}">ANOTHER CYPRUS</a><a class="lang" href="${otherBase}">${lang === 'ru' ? 'EN' : 'RU'}</a></nav><header class="hero"><div><div class="eyebrow">${copy.eyebrow}</div><h1>${copy.headline}</h1><p class="intro">${copy.intro}</p></div><img src="${area.image}" alt="${copy.headline}" width="1600" height="1000" fetchpriority="high"></header><article class="article">${sections}<aside class="offer"><div class="eyebrow">${copy.propertyLabel}</div><h2>${area.propertyName}</h2><p>${copy.propertyCopy}</p><div class="actions"><a class="cta" href="${propertyUrl}">${copy.propertyCta}</a>${guideLink}</div></aside><section class="faq"><h2>${lang === 'ru' ? 'Частые вопросы' : 'Focused buyer questions'}</h2>${copy.faq.map((item) => `<h3>${item.question}</h3><p>${item.answer}</p>`).join('')}</section><p class="note">${lang === 'ru' ? 'Информация носит общий характер и не является юридической, налоговой, иммиграционной, оценочной или инвестиционной консультацией. Проверяйте все существенные сведения с независимыми специалистами.' : 'This page is general information, not legal, tax, immigration, valuation or investment advice. Verify all material facts with independent qualified advisers.'}</p></article></main><footer><div class="wrap">Another Cyprus · ${area.locality} · ${copy.propertyLabel}</div></footer></body></html>`;
}

for (const area of areas) {
  for (const lang of ['en', 'ru'] as const) {
    const dir = join(process.cwd(), 'public', ...(lang === 'ru' ? ['ru'] : []), 'areas', area.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), render(area, lang));
  }
}
