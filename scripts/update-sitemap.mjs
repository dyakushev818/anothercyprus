import fs from 'node:fs';
import path from 'node:path';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

for (const url of ['https://anothercyprus.com/', 'https://anothercyprus.com/ru/']) {
  const pattern = new RegExp(`(<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>\\s*<lastmod>)[^<]+`, 'g');
  sitemap = sitemap.replace(pattern, `$1${today}`);
}

const internationalPages = [
  'https://anothercyprus.com/markets/european-buyers-limassol/',
  'https://anothercyprus.com/ru/markets/limassol-property-russian-speaking-buyers/',
  'https://anothercyprus.com/uk/markets/limassol-property-ukrainian-buyers/',
  'https://anothercyprus.com/he/markets/limassol-property-israeli-buyers/',
];

for (const url of internationalPages) {
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    sitemap = sitemap.replace('</urlset>', `  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n</urlset>`);
  }
}

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Updated homepage sitemap dates to ${today}`);
