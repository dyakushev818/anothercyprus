import React from 'react';
import { useLanguage } from '../context/LanguageContext';
const englishArticles = [
  { href: '/guides/cyprus-schengen-what-it-means-for-limassol/', title: 'Cyprus, Schengen and the Opportunity to Buy Property in Limassol', description: 'What closer European connections could mean for buyers of homes and offices in Limassol.', category: 'Cyprus & Europe', image: '/images/commercial/al1.jpg' },
  { href: '/guides/buy-office-building-limassol-company-headquarters/', title: 'Buying an Office Building in Limassol for Your Company', description: 'From layouts and parking to fit-out: what to consider when choosing a company headquarters.', category: 'Office property', image: '/images/commercial/al2.jpg' },
  { href: '/guides/limassol-property-market-2026-buyer-guide/', title: 'Limassol Property Market 2026: Choose the Micro-Market Before the Headline', description: 'How to compare locations, rental demand and the details of a specific property.', category: 'Market insights', image: '/images/athanasios/athanasios-1.jpg' },
];
const russianArticles = [
  { href: '/ru/guides/cyprus-schengen-what-it-means-for-limassol/', title: 'Кипр, Шенген и возможности покупки недвижимости в Лимассоле', description: 'Перспективы европейской интеграции и что они могут означать для покупателей жилья и офисов.', category: 'Кипр и Европа', image: '/images/commercial/al1.jpg' },
  { href: '/ru/guides/novostroyki-limassola-sravnenie-proektov/', title: 'Четыре проекта в Лимассоле: квартиры, виллы и офисное здание', description: 'Сравнение районов, характеристик и условий покупки четырёх проектов нашей коллекции.', category: 'Выбор недвижимости', image: '/images/athanasios/athanasios-1.jpg' },
];
export const NewsSection: React.FC = () => {
  const { language } = useLanguage();
  const ru = language === 'ru';
  const articles = ru ? russianArticles : englishArticles;
  return (
    <section id="insights" aria-labelledby="insights-heading" className="bg-[#F3F3EE] border-y border-[#E5E5DC] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div><h2 id="insights-heading" className="text-3xl font-serif italic text-[#1A365D]">{ru ? 'Новости и аналитика' : 'News & property insights'}</h2>
          <p className="text-sm text-[#666666] mt-2">{ru ? 'Рынок Кипра и практические советы покупателю.' : 'Cyprus market context and practical reading for property buyers.'}</p></div>
          <a href="/guides/" className="text-xs font-semibold text-[#1A365D] underline underline-offset-4">{ru ? 'Все статьи (EN / RU)' : 'All articles'}</a>
        </div>
        <div className={ru ? 'grid gap-6 md:grid-cols-2' : 'grid gap-6 md:grid-cols-3'}>
          {articles.map(article => (
            <article key={article.href} className="bg-white border border-[#E5E5DC] flex flex-col">
              <a href={article.href} aria-label={article.title} tabIndex={-1}><img src={article.image} alt="" loading="lazy" width="640" height="320" className="w-full aspect-[2/1] object-cover" /></a>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] uppercase tracking-widest text-[#AF884E] font-semibold mb-3">{article.category}</p>
                <h3 className="text-xl leading-snug font-serif font-bold text-[#1A365D]"><a className="hover:underline underline-offset-4" href={article.href}>{article.title}</a></h3>
                <p className="text-sm text-[#666666] leading-relaxed mt-3 mb-5">{article.description}</p>
                <a href={article.href} className="mt-auto text-xs font-bold text-[#1A365D] underline underline-offset-4">{ru ? 'Читать статью' : 'Read article'}<span className="sr-only">: {article.title}</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
