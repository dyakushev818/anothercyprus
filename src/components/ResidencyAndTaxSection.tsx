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
      title: 'Curated Property Selection',
      desc: 'Identify prime properties matching Category 6.2 PR eligibility criteria (min €300,000 + VAT) and investment goals with our Limassol advisory team.',
      icon: KeyRound,
    },
    {
      num: '02',
      title: 'Legal Due Diligence & Contract',
      desc: 'Independent Cypriot legal counsel conducts thorough title deed searches and drafts the reservation and sale agreement protecting buyer funds in escrow.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: 'Land Registry Stamping & Deposit',
      desc: 'Contract deposited at the Limassol District Lands Office, legally securing your ownership priority against all third-party claims.',
      icon: Award,
    },
    {
      num: '04',
      title: 'PR Application & Biometrics',
      desc: 'Direct submission of fast-track PR dossier to Civil Registry and Migration Department. Biometrics collected; permanent biometric residency cards issued.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="residency" className="py-20 sm:py-28 bg-[#F3F3EE] text-[#2C2C2C] relative overflow-hidden border-t border-[#E5E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold">
            Cyprus Golden Advantage
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-serif italic text-[#1A365D] font-bold leading-tight">
            Permanent EU Residency & Unmatched Tax Regimes
          </h2>
          <p className="mt-4 text-[#666666] text-sm sm:text-base font-light leading-relaxed">
            Acquiring real estate in Limassol unlocks one of the European Union’s most attractive lifestyle and wealth preservation frameworks.
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
                <ShieldCheck className="w-4 h-4 text-[#C29B61]" /> Fast-Track Category 6.2 Program
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A365D] font-bold">
                Cyprus Permanent Residency Requirements
              </h3>
              <p className="text-[#666666] text-sm sm:text-base font-light leading-relaxed">
                By investing €300,000 (+ VAT) in a brand-new residential property in Limassol, investors and their families gain unconditional permanent residency in an EU member state.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Valid for life (no renewal tests)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Covers spouse & children up to 25</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>No minimum stay (1 visit every 2 yrs)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2C2C2C] bg-[#F9F9F6] p-3 border border-[#E5E5DC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                  <span>Fast processing time (approx. 2-3 months)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F9F9F6] border border-[#E5E5DC] p-6 sm:p-8 text-center space-y-4">
              <div className="w-12 h-12 bg-white border border-[#E5E5DC] flex items-center justify-center text-[#1A365D] mx-auto shadow-xs">
                <Globe className="w-6 h-6 text-[#C29B61]" />
              </div>
              <h4 className="font-serif text-xl text-[#1A365D] italic font-bold">
                Request PR Legal Advisory Kit
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed font-light">
                Receive our comprehensive legal dossier covering document checklists, non-dom tax exemptions, and escrow security protocols.
              </p>
              <button
                onClick={() => onOpenInquiry('Permanent Residency Consultation')}
                className="w-full py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xs"
              >
                Schedule Free Legal Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Step-by-Step Acquisition Journey */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A365D] font-bold">
              Seamless 4-Step Acquisition Process
            </h3>
            <p className="text-xs sm:text-sm text-[#8A8A8A] mt-2 font-light">
              From private viewing to biometric permanent residency card collection
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

