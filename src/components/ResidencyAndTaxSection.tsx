import React from 'react';
import { CYPRUS_BENEFITS } from '../data/districts';
import { ShieldCheck, Award, Percent, Globe, CheckCircle2, ArrowRight, FileCheck2, UserCheck, KeyRound } from 'lucide-react';

interface ResidencyAndTaxSectionProps {
  onOpenInquiry: (topic: string) => void;
}

export const ResidencyAndTaxSection: React.FC<ResidencyAndTaxSectionProps> = ({ onOpenInquiry }) => {
  const steps = [
    {
      num: '01',
      title: 'Property and eligibility review',
      desc: 'Review the property materials and current official criteria with independent legal and immigration advisers before making any commitment.',
      icon: KeyRound,
    },
    {
      num: '02',
      title: 'Independent legal due diligence',
      desc: 'Appoint an independent Cyprus lawyer to check title, contract terms, deposits and the proposed transaction structure.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: 'Contract and Lands Office filing',
      desc: 'Your lawyer can advise on contract stamping, filing and deadlines. Land Registry procedures do not replace legal due diligence.',
      icon: Award,
    },
    {
      num: '04',
      title: 'Application and official decision',
      desc: 'Where appropriate, an independent adviser may assist. The competent authorities assess every application and set timing.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="residency" className="py-20 sm:py-28 bg-[#F3F3EE] text-[#2C2C2C] relative overflow-hidden border-t border-[#E5E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold">
            Residency & Tax Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-serif italic text-[#1A365D] font-bold leading-tight">
            Property purchases and residency questions
          </h2>
          <p className="mt-4 text-[#666666] text-sm sm:text-base font-light leading-relaxed">
            A property purchase may form part of an application under Cyprus Regulation 6(2). Eligibility, documentation and any decision remain with the competent authorities.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CYPRUS_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5DC] p-6 flex flex-col justify-between hover:border-[#C29B61] shadow-xs hover:shadow-sm transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1A365D] bg-[#F9F9F6] border border-[#E5E5DC] px-2.5 py-1 mb-4 inline-block font-mono">
                  {item.badge}
                </span>
                <h3 className="font-serif text-lg text-[#1A365D] group-hover:text-[#132A4B] transition-colors font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PR Detailed Feature Card */}
        <div className="bg-white border border-[#E5E5DC] p-6 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-[#C29B61] text-[10px] uppercase tracking-[0.25em] font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-[#C29B61]" /> Cyprus Regulation 6(2): eligibility review
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A365D] font-bold">
                Cyprus residency route: what to verify
              </h3>
              <p className="text-[#666666] text-sm sm:text-base font-light leading-relaxed">
                Official Cyprus guidance describes investment categories and current application conditions. A minimum threshold of €300,000 applies in the relevant route; your property, documents and decision must be independently verified.
              </p>
              <a
                href="https://www.gov.cy/mip-md/en/documents/companies-investors-permanent-residence-3/immigration-permits-for-investors/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#1A365D] font-mono text-[10px] font-bold uppercase tracking-[0.12em] hover:text-[#C29B61] transition-colors"
              >
                Read official Cyprus residency guidance <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Long-term status subject to current rules and ongoing conditions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Family eligibility depends on current legislation and the applicant&apos;s circumstances</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Physical-presence requirements depend on current rules</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Processing times are determined by the authorities</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F9F9F6] border border-[#E5E5DC] p-6 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-white border border-[#E5E5DC] flex items-center justify-center text-[#1A365D] mx-auto shadow-xs">
                <Globe className="w-6 h-6 text-[#C29B61]" />
              </div>
              <h4 className="font-serif text-xl text-[#1A365D] italic font-bold">
                Request buyer checklist
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed font-light">
                We can provide property materials and a buyer checklist. Obtain independent legal and tax advice before signing or applying.
              </p>
              <button
                onClick={() => onOpenInquiry('Residency & Tax Questions')}
                className="w-full py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xs"
              >
                Request document checklist
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Acquisition Journey */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A365D] font-bold">
              Property and application steps
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A8A] mt-2 font-light">
              From property review to any official decision, each stage needs independent verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E5DC] p-6 relative flex flex-col justify-between shadow-xs hover:border-[#C29B61] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl text-[#C29B61] font-bold">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 bg-[#F9F9F6] border border-[#E5E5DC] flex items-center justify-center text-[#1A365D]">
                        <Icon className="w-4 h-4 text-[#1A365D]" />
                      </div>
                    </div>
                    <h4 className="font-serif text-base text-[#1A365D] font-bold">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#666666] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

