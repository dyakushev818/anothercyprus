import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };
type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  propertyName: string;
  propertyUrl: string;
  propertyCta: string;
  sections: Section[];
};

const guides: Guide[] = [
  {
    slug: 'buying-office-building-germasogeia-limassol',
    title: 'Buying an Office Building in Germasogeia: What to Check First',
    description: 'A practical buyer’s guide to acquiring a whole office building in Germasogeia, Limassol: location, floor efficiency, parking, operating costs and due diligence.',
    eyebrow: 'Commercial property · Germasogeia',
    intro: 'A whole office building is a very different purchase from a single office floor. The headline area and asking price matter, of course, but the decision usually turns on quieter details: how efficiently the space works, whether parking is genuinely sufficient, and what the building will cost to operate after the keys change hands.',
    image: '/images/commercial/al1.jpg',
    propertyName: 'Germasogeia Corporate Prime',
    propertyUrl: '/properties/germasogeia-corporate-prime/',
    propertyCta: 'View the Germasogeia office building and request its plans',
    sections: [
      { heading: 'Start with the way the building will actually be used', paragraphs: ['An owner-occupier should test the plans against real teams, meeting rooms, reception, storage and visitor flow. An investor has a second question: could the floors be occupied separately if the leasing strategy changes? A beautiful façade does not compensate for awkward circulation or a floor plate that is difficult to divide.', 'Ask for a complete area schedule and compare gross, covered and usable areas. If terraces, common areas or roof space are included in a headline figure, identify them separately before comparing the price with other buildings.'] },
      { heading: 'Parking is part of the product', paragraphs: ['In Limassol, parking can influence both staff satisfaction and rental demand. Count allocated spaces, visitor spaces and electric-vehicle charging points, then consider how the entrance and exit work during busy periods. A number on a brochure is only useful when the spaces are practical.'], bullets: ['Confirm which spaces are legally allocated to the property.', 'Check whether EV infrastructure is installed or only provisioned.', 'Review access for deliveries, visitors and people with reduced mobility.'] },
      { heading: 'Location is more than distance to the sea', paragraphs: ['Germasogeia combines coastal access with a well-established business corridor, but two buildings a few streets apart can feel very different at 8:30 in the morning. Visit at commuting time. Test the route to the highway, the airport connection and the walk to nearby services. Staff experience is an operating issue, not a lifestyle footnote.'] },
      { heading: 'Build a realistic ownership budget', paragraphs: ['The purchase price is only the first line. Request estimates for common-area electricity, cooling, lifts, security, cleaning, insurance and planned maintenance. Photovoltaic capacity and energy performance can help, but projected savings should be supported by technical information rather than marketing language.', 'Before committing, instruct independent legal, tax and technical advisers to review title, permits, VAT treatment, specifications and the sale structure. A direct developer conversation is useful; it is not a substitute for buyer-side due diligence.'] },
    ],
  },
  {
    slug: 'sea-view-apartment-agios-athanasios-guide',
    title: 'Sea-View Apartments in Agios Athanasios: A Buyer’s Reality Check',
    description: 'How to assess a sea-view apartment in Agios Athanasios, Limassol: orientation, access, layouts, running costs, rental expectations and delivery risk.',
    eyebrow: 'Apartments · Agios Athanasios',
    intro: '“Sea view” is one of the most overused phrases in Limassol property advertising. In Agios Athanasios, the elevation can produce genuinely wide views, but buyers should still ask a simple question: what exactly will I see from the living room, the veranda and the bedrooms?',
    image: '/images/athanasios/athanasios-1.jpg',
    propertyName: 'Athanasios Skyline Suites',
    propertyUrl: '/properties/athanasios-skyline-suites/',
    propertyCta: 'See the Agios Athanasios residence and request current availability',
    sections: [
      { heading: 'Check the view from the apartment, not from the drone', paragraphs: ['Drone photographs are useful for understanding the wider setting, but they do not prove the view from a particular unit. Ask for the floor number, orientation and marked position on the plan. If possible, visit the site at the approximate finished-floor height or request a verified view study.', 'Also consider afternoon sun, prevailing wind and privacy. A west-facing veranda can be dramatic at sunset and demanding in August. Shading, glazing and the depth of the covered terrace therefore matter.'] },
      { heading: 'Test daily access', paragraphs: ['The elevated parts of Agios Athanasios are popular with families and professionals, yet the quality of daily life depends on the exact road. Drive to schools, offices and the highway during real traffic. Check the final approach to the building, pedestrian access and whether nearby construction could change the immediate environment.'] },
      { heading: 'Read the plan like a resident', paragraphs: ['Two apartments with the same covered area may live very differently. Look for usable wall lengths, storage, laundry position, bedroom privacy and the relationship between kitchen, dining area and veranda. Confirm what is included in the specification and what remains an optional upgrade.'], bullets: ['Ask for net internal, covered veranda and common-area figures separately.', 'Confirm parking and storage allocations in the contract documents.', 'Review energy, cooling and hot-water specifications with a technical adviser.'] },
      { heading: 'Keep rental expectations grounded', paragraphs: ['Rental demand in Limassol is strong, but a projection should be treated as a scenario rather than a promise. For a new two-bedroom apartment in this area, current achievable rent depends on furnishing, exact location, view and competing supply. A conservative appraisal is more useful than a high headline yield.', 'Request comparable evidence from more than one independent source and allow for vacancy, management, maintenance and furnishing. If the purchase is connected to a residency application, obtain current independent immigration advice before treating eligibility as part of the investment case.'] },
    ],
  },
  {
    slug: 'turnkey-villa-agios-tychonas-checklist',
    title: 'Buying a Turnkey Villa in Agios Tychonas: The Practical Checklist',
    description: 'A practical guide to turnkey villas in Agios Tychonas: specifications, private pools, handover inspections, running costs and contract details.',
    eyebrow: 'Private villas · Agios Tychonas',
    intro: 'Turnkey should mean that a home is ready to use, not that every item in the photographs is automatically included. Before comparing villas in Agios Tychonas, turn the phrase into a written list. Furniture, appliances, landscaping, pool equipment and climate systems should each have a clear contractual status.',
    image: '/images/villas/tychonass-villa-1.jpg',
    propertyName: 'The Tychonas Sanctuary Villas',
    propertyUrl: '/properties/tychonas-sanctuary-villas/',
    propertyCta: 'Explore the Agios Tychonas villas and request the inclusion schedule',
    sections: [
      { heading: 'Ask for an inclusion schedule', paragraphs: ['A proper schedule should identify brands or performance standards, quantities and the rooms where items will be installed. “Luxury finishes” is not a specification. The same applies to kitchen appliances, wardrobes, lighting, curtains and external furniture.', 'If substitutions are allowed, the contract should explain the permitted quality level and approval process. This reduces disagreements near handover, when replacing a missing detail can be surprisingly disruptive.'] },
      { heading: 'Treat the pool as a small building system', paragraphs: ['A private pool adds genuine value for many buyers, but it also brings equipment, water treatment, cleaning and energy costs. Confirm the pool dimensions, finish, filtration system, plant-room access and warranty. Ask who maintains it before and immediately after delivery.'] },
      { heading: 'Walk the plot, not only the house', paragraphs: ['Privacy often depends on levels, neighbouring windows and planting more than boundary walls. Review the relationship between the villa, pool terrace, road and adjacent plots. Orientation affects shade, wind and how often the outdoor areas are comfortable.', 'For an off-plan or under-construction villa, request the site plan and finished levels. Small changes in elevation can make a large difference to privacy and access.'] },
      { heading: 'Plan for handover properly', paragraphs: ['Arrange an independent snagging inspection before final acceptance. Test cooling, underfloor heating, hot water, drainage, pool equipment, doors, glazing and external finishes. Record agreed corrections and their deadline in writing.'], bullets: ['Match the delivered villa against the signed specification.', 'Collect warranties, manuals and commissioning records.', 'Confirm landscaping establishment and irrigation responsibilities.', 'Verify title, permits, VAT and contract terms through independent advisers.'] },
    ],
  },
  {
    slug: 'buying-apartment-mesa-geitonia-limassol',
    title: 'Buying a New Apartment in Mesa Geitonia: What Matters Day to Day',
    description: 'A buyer-focused guide to new apartments in Mesa Geitonia, Limassol: legal layouts, verandas, parking, delivery dates and transaction structure.',
    eyebrow: 'New apartments · Mesa Geitonia',
    intro: 'Mesa Geitonia is not bought for a holiday-postcard address. Its appeal is more practical: a central Limassol location, quick access to daily services and a straightforward route to several business districts. For many residents, that convenience becomes more valuable than being directly on the seafront.',
    image: '/images/dasoudi/dasoudi-1.jpg',
    propertyName: 'OLiO Residences — Mesa Geitonia',
    propertyUrl: '/properties/olio-residences-mesa-geitonia/',
    propertyCta: 'View the OLiO two-bedroom residences and request official plans',
    sections: [
      { heading: 'Begin with the approved layout', paragraphs: ['If an apartment is approved as a two-bedroom home, evaluate and price it as a two-bedroom home. An internal adaptation may be physically possible, but that does not automatically make an additional room a legally approved bedroom. Ask for the official plan and have any proposed change reviewed independently before relying on it.', 'This distinction matters for valuation, resale, financing and honest future advertising. A flexible study or occasional room can still be useful; it should simply be described accurately.'] },
      { heading: 'Measure the veranda as living space', paragraphs: ['Covered verandas are used for much of the year in Cyprus. Depth and orientation usually matter more than the headline area. Check whether a table can sit comfortably without blocking circulation, how the veranda relates to neighbouring units, and where external air-conditioning equipment will be placed.'] },
      { heading: 'Storage and parking deserve a site visit', paragraphs: ['Confirm the exact parking bay and storage room assigned to the unit. Check turning space, ramp gradient, lift access and whether an EV charger is installed or merely anticipated. A generous storage room can materially improve apartment living, but only if it is dry, secure and easy to reach.'] },
      { heading: 'Treat delivery and transaction structure separately', paragraphs: ['A target delivery date is a planning assumption until the contract defines milestones, extensions and remedies. Buyers should monitor construction progress and understand when staged payments become due.', 'A purchase of shares in a property-owning company may sometimes be discussed as an alternative structure. It should never be presented as an automatic “no VAT” solution. Company liabilities, tax consequences, financing and future resale require full legal, tax and corporate due diligence before the structure is considered.'] },
    ],
  },
];

const css = `:root{font-family:Georgia,serif;color:#2d3748;background:#f8f7f2}*{box-sizing:border-box}body{margin:0}a{color:#17365d}.wrap{max-width:900px;margin:auto;padding:24px}.nav{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ddd8ca;padding:16px 0;font-family:Arial,sans-serif}.brand{text-decoration:none;letter-spacing:.22em;font-weight:800}.back{font-size:14px}.hero{padding:64px 0 34px}.eyebrow{font:700 12px Arial,sans-serif;text-transform:uppercase;letter-spacing:.18em;color:#a3773b}h1{font-size:52px;line-height:1.08;color:#17365d;margin:16px 0 22px}.intro{font-size:22px;line-height:1.6;color:#536070}.hero img{width:100%;max-height:500px;object-fit:cover;margin-top:28px}.article{max-width:760px;margin:0 auto}.article h2{font-size:31px;color:#17365d;margin:48px 0 14px}.article p,.article li{font-size:18px;line-height:1.75}.article li{margin:8px 0}.property{border-left:5px solid #c29b61;background:#fff;padding:26px 30px;margin:48px 0;font-family:Arial,sans-serif}.property strong{display:block;color:#17365d;font-size:20px;margin-bottom:10px}.cta{display:inline-block;background:#17365d;color:#fff;text-decoration:none;padding:13px 18px;font-weight:700;margin-top:8px}.note{font:14px/1.6 Arial,sans-serif;color:#68717d;border-top:1px solid #ddd8ca;padding-top:24px;margin:50px 0}footer{font:14px Arial,sans-serif;border-top:1px solid #ddd8ca;padding:28px 0;color:#6e747d}@media(max-width:700px){h1{font-size:38px}.intro{font-size:19px}.article h2{font-size:27px}.article p,.article li{font-size:17px}.hero{padding-top:38px}}`;

function renderGuide(guide: Guide) {
  const canonical = `https://anothercyprus.com/guides/${guide.slug}/`;
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description, image: `https://anothercyprus.com${guide.image}`, datePublished: '2026-08-27', dateModified: '2026-08-27', author: { '@type': 'Organization', name: 'Another Cyprus' }, publisher: { '@type': 'Organization', name: 'Another Cyprus', url: 'https://anothercyprus.com/' }, mainEntityOfPage: canonical });
  const sections = guide.sections.map((section, index) => `${index === 2 ? `<aside class="property"><strong>${guide.propertyName}</strong><p>For buyers who want to compare this checklist with a live development, the project page includes current headline details, photographs and a direct request for plans.</p><a class="cta" href="${guide.propertyUrl}">${guide.propertyCta}</a></aside>` : ''}<section><h2>${section.heading}</h2>${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}</section>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${guide.title} | Another Cyprus</title><meta name="description" content="${guide.description}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:title" content="${guide.title}"><meta property="og:description" content="${guide.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://anothercyprus.com${guide.image}"><meta name="twitter:card" content="summary_large_image"><style>${css}</style><script type="application/ld+json">${schema}</script></head><body><main class="wrap"><nav class="nav"><a class="brand" href="/">ANOTHER CYPRUS</a><a class="back" href="/guides/">Buyer guides</a></nav><header class="hero"><div class="eyebrow">${guide.eyebrow}</div><h1>${guide.title}</h1><p class="intro">${guide.intro}</p><img src="${guide.image}" alt="${guide.title}" width="1600" height="1000"></header><article class="article">${sections}<p class="note">This guide is general information, not legal, tax, immigration, valuation or investment advice. Property details and market conditions change. Buyers should verify all material facts with independent qualified advisers.</p></article></main><footer><div class="wrap">Another Cyprus · Practical Limassol property guides · Direct property-specific enquiries</div></footer></body></html>`;
}

const outputRoot = join(process.cwd(), 'public', 'guides');
mkdirSync(outputRoot, { recursive: true });

for (const guide of guides) {
  const dir = join(outputRoot, guide.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), renderGuide(guide));
}

const cards = guides.map((guide) => `<article><img src="${guide.image}" alt="${guide.title}" loading="lazy"><div><span>${guide.eyebrow}</span><h2><a href="/guides/${guide.slug}/">${guide.title}</a></h2><p>${guide.description}</p></div></article>`).join('');
writeFileSync(join(outputRoot, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Limassol Property Buyer Guides | Another Cyprus</title><meta name="description" content="Practical, buyer-focused guides to commercial buildings, sea-view apartments, private villas and new residences in Limassol."><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="https://anothercyprus.com/guides/"><style>${css}article{display:grid;grid-template-columns:280px 1fr;gap:26px;background:#fff;margin:25px 0;border:1px solid #ddd8ca}article img{width:100%;height:220px;object-fit:cover}article div{padding:24px 24px 24px 0}article span{font:700 11px Arial,sans-serif;text-transform:uppercase;letter-spacing:.13em;color:#a3773b}article h2{font-size:28px;margin:10px 0}article p{font-size:17px;line-height:1.55;color:#536070}@media(max-width:700px){article{grid-template-columns:1fr}article div{padding:22px}article img{height:250px}}</style></head><body><main class="wrap"><nav class="nav"><a class="brand" href="/">ANOTHER CYPRUS</a><a class="back" href="/">Developments</a></nav><header class="hero"><div class="eyebrow">Independent questions · Direct answers</div><h1>Limassol property buyer guides</h1><p class="intro">Short, practical reading for buyers who want to understand a property before requesting the plans.</p></header>${cards}</main><footer><div class="wrap">Another Cyprus · Practical Limassol property guides</div></footer></body></html>`);
