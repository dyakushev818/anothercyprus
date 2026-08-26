import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'Commercial' | 'Residency' | 'Tax' | 'Acquisition';
}

const FAQS: FaqItem[] = [
  {
    category: 'Commercial',
    question: 'What is the projected rental yield and return on investment for Germasogeia Corporate Prime?',
    answer:
      'Germasogeia Corporate Prime is projected to generate €49,000 per month (€588,000 per year), delivering a stable gross rental yield between 6.8% and 8.0%. The sustained demand is driven by multinational technology enterprises, fintech firms, and maritime conglomerates establishing regional European headquarters in Limassol (Potamos Germasogeias, 400m from the coastline).',
  },
  {
    category: 'Commercial',
    question: 'What infrastructure is included in the €8,700,000 turnkey commercial building purchase price?',
    answer:
      'The €8,700,000 turnkey price includes the entire 1,934 m² building freehold: 4 open-plan office levels with 31mm CBI encapsulated raised flooring, a 23 kW connected photovoltaic solar system, 18 parking bays with 4 EV charging stations, an 84 m² grand designer lobby, a 161 m² rooftop garden and wellness gym retreat, full IP security video surveillance, video door access control, light automation, and 0% buyer commission on direct developer terms.',
  },
  {
    category: 'Residency',
    question: 'How do the developments qualify for Fast-Track Cyprus Permanent Residency (Category 6.2)?',
    answer:
      'Certain qualifying investments may support an application under Cyprus Immigration Regulation 6(2). Eligibility depends on the current rules, the property and source-of-funds documentation, and approval by the competent authorities. Obtain independent immigration and legal advice before relying on a property for residency purposes.',
  },
  {
    category: 'Tax',
    question: 'What are the main tax benefits of owning real estate and operating a business in Cyprus?',
    answer:
      'Cyprus tax treatment depends on current law, residence and domicile status, income type, qualifying activity, and individual or company circumstances. Confirm applicable corporate, dividend, property, and IP Box treatment with a qualified Cyprus tax adviser.',
  },
  {
    category: 'Acquisition',
    question: 'How are purchases structured and is there any broker commission?',
    answer:
      'Purchases can be discussed directly with the development team with no buyer commission stated by this portal. Title, contract protections, warranties, pricing, and any escrow arrangements must be independently verified for the specific transaction. Inquiries and viewing requests are handled through the inquiry portal and WhatsApp contact.',
  },
];

export const SeoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F3F3EE] text-[#2C2C2C] border-t border-[#E5E5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E5DC] text-[#C29B61] text-[10px] font-mono uppercase tracking-widest mb-3 font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C29B61]" />
            <span>Search Engine & Investor Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-[#1A365D] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-[#666666] text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
            Essential guidelines on Limassol commercial property acquisitions, residential yields, corporate taxation, and Cyprus Permanent Residency.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Commercial', 'Residency', 'Tax', 'Acquisition'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A365D] text-white font-bold shadow-xs'
                    : 'bg-white text-[#555555] hover:text-[#1A365D] hover:bg-[#F9F9F6] border border-[#E5E5DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E5E5DC] bg-white overflow-hidden transition-colors hover:border-[#C29B61] shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-serif text-[#1A365D] italic font-bold">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8A8A8A] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] font-light leading-relaxed border-t border-[#E5E5DC]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
