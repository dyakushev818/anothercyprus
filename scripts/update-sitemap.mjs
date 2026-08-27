import fs from 'node:fs';
import path from 'node:path';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

for (const url of ['https://anothercyprus.com/', 'https://anothercyprus.com/ru/']) {
  const pattern = new RegExp(`(<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>\\s*<lastmod>)[^<]+`, 'g');
  sitemap = sitemap.replace(pattern, `$1${today}`);
}

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Updated homepage sitemap dates to ${today}`);
