import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'dist', 'index.html');
const targetDir = path.join(root, 'dist', 'ru');
const targetPath = path.join(targetDir, 'index.html');

const english = fs.readFileSync(sourcePath, 'utf8');
const russianFallback = `<!-- SEO_HOME_CONTENT_START -->
      <main>
        <header>
          <p>Another Cyprus · Коллекция объектов от застройщика</p>
          <h1>Премиальная коммерческая и жилая недвижимость в Лимассоле</h1>
          <p>Отобранные коммерческие объекты, квартиры и виллы в Лимассоле, Кипр. Уточняйте наличие и условия покупки напрямую у застройщика.</p>
          <p><a href="https://wa.me/35796373089">Написать застройщику в WhatsApp</a> · <a href="mailto:info@anothercyprus.com">Запросить наличие по email</a></p>
        </header>
        <section aria-labelledby="developments-heading">
          <h2 id="developments-heading">Четыре проекта в Лимассоле</h2>
          <article><h3><a href="/ru/properties/germasogeia-corporate-prime/">Germasogeia Corporate Prime</a></h3><p>Офисное здание класса A в Потамос Гермасойя, примерно в 400 метрах от моря.</p></article>
          <article><h3><a href="/ru/properties/athanasios-skyline-suites/">Athanasios Skyline Suites</a></h3><p>Квартиры с видом на море в Агиос Атанасиос, Лимассол.</p></article>
          <article><h3><a href="/ru/properties/tychonas-sanctuary-villas/">The Tychonas Sanctuary Villas</a></h3><p>Готовые виллы с частными бассейнами в Агиос Тихонас.</p></article>
          <article><h3><a href="/ru/properties/olio-residences-mesa-geitonia/">OLiO Residences — Mesa Geitonia</a></h3><p>Двухспальные резиденции в Меса Гитония с вариантом неюридической планировки третьей спальни. Сдача — декабрь 2027 года; возможна покупка компании, что потенциально позволяет избежать НДС при независимой проверке.</p></article>
        </section>
        <section aria-labelledby="guides-heading"><h2 id="guides-heading">Гиды покупателя</h2><p><a href="/guides/">Практические материалы о покупке недвижимости в Лимассоле</a>.</p></section>
      </main>
      <!-- SEO_HOME_CONTENT_END -->`;
const russian = english
  .replace('<html lang="en"', '<html lang="ru"')
  .replace('<title>Limassol Property Direct from Developer | Another Cyprus</title>', '<title>Недвижимость Лимассола напрямую от застройщика | Another Cyprus</title>')
  .replace('content="Explore selected commercial property, apartments and villas in Limassol. View project details and contact the developer directly about pricing and availability."', 'content="Коммерческая и жилая недвижимость в Лимассоле напрямую от застройщика. Цены, проекты и запрос актуального наличия."')
  .replace('<link rel="canonical" href="https://anothercyprus.com/" />', '<link rel="canonical" href="https://anothercyprus.com/ru/" />')
  .replace('<meta property="og:locale" content="en_GB" />', '<meta property="og:locale" content="ru_RU" />')
  .replace('<meta property="og:url" content="https://anothercyprus.com/" />', '<meta property="og:url" content="https://anothercyprus.com/ru/" />')
  .replace('<meta property="og:title" content="Limassol Property Direct from Developer | Another Cyprus" />', '<meta property="og:title" content="Недвижимость Лимассола напрямую от застройщика | Another Cyprus" />')
  .replace('<meta property="og:description" content="Selected commercial property, apartments and villas in Limassol with direct developer enquiries." />', '<meta property="og:description" content="Коммерческая и жилая недвижимость в Лимассоле напрямую от застройщика." />')
  .replace('<meta name="twitter:title" content="Limassol Property Direct from Developer | Another Cyprus" />', '<meta name="twitter:title" content="Недвижимость Лимассола напрямую от застройщика | Another Cyprus" />')
  .replace('<meta name="twitter:description" content="Selected commercial property, apartments and villas in Limassol with direct developer enquiries." />', '<meta name="twitter:description" content="Коммерческая и жилая недвижимость в Лимассоле напрямую от застройщика." />')
  .replace(/<!-- SEO_HOME_CONTENT_START -->[\s\S]*?<!-- SEO_HOME_CONTENT_END -->/, russianFallback)
  .replace('<meta property="og:image:alt" content="Modern commercial property development in Limassol, Cyprus" />', '<meta property="og:image:alt" content="Коммерческая недвижимость в Лимассоле, Кипр" />')
  .replace('<meta name="twitter:image:alt" content="Modern commercial property development in Limassol, Cyprus" />', '<meta name="twitter:image:alt" content="Коммерческая недвижимость в Лимассоле, Кипр" />')
  .replace('<meta property="og:locale:alternate" content="ru_RU" />', '<meta property="og:locale:alternate" content="en_GB" />');

fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(targetPath, russian);
console.log(`Generated ${path.relative(root, targetPath)}`);
