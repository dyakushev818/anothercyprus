import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'dist', 'index.html');
const targetDir = path.join(root, 'dist', 'ru');
const targetPath = path.join(targetDir, 'index.html');

const english = fs.readFileSync(sourcePath, 'utf8');
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
  .replace('<meta name="twitter:description" content="Selected commercial property, apartments and villas in Limassol with direct developer enquiries." />', '<meta name="twitter:description" content="Коммерческая и жилая недвижимость в Лимассоле напрямую от застройщика." />');

fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(targetPath, russian);
console.log(`Generated ${path.relative(root, targetPath)}`);
