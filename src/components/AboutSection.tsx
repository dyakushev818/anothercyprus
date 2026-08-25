import React from 'react';
import { Building2, Compass, ShieldCheck, HeartHandshake, Sparkles, MapPin, Mail, Zap } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const pillars = [
    {
      title: '0% Buyer Commission',
      desc: 'Acquire directly from the master developer. No agency fees, no middleman markups, and completely transparent milestone contract structures.',
      icon: Building2,
    },
    {
      title: 'Strict Micro-Location Focus',
      desc: 'Specialized focus on Limassol’s top growth corridors: Potamos Germasogeias (400m to beach), elevated Agios Athanasios, and prestigious Agios Tychonas.',
      icon: Compass,
    },
    {
      title: 'Fast-Track PR & Tax Optimization',
      desc: 'Seamless qualification for Cyprus Permanent Residency (Regulation 6.2) for the entire family, coupled with 0% Non-Dom dividend tax advantages.',
      icon: ShieldCheck,
    },
    {
      title: 'Turnkey All-Inclusive Handover',
      desc: 'Comprehensive inclusions: photovoltaic solar power, underfloor heating, VRV climate control, Italian porcelain finishes, and full designer furnishings.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F9F9F6] text-[#2C2C2C] border-t border-[#E5E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold">
                Direct Master Developer Collection
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-serif italic text-[#1A365D] font-bold leading-tight">
                Direct Developer Acquisition in Prime Limassol.
              </h2>
            </div>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
              <strong className="text-[#1A365D] font-bold uppercase tracking-wider text-xs block mb-1">ANOTHER CYPRUS (anothercyprus.com)</strong>
              A dedicated digital portal presenting flagship developments in Limassol with zero buyer commissions, direct developer pricing, and guaranteed clean freehold title deeds.
            </p>

            <p className="text-[#666666] text-xs sm:text-sm leading-relaxed font-light">
              Whether securing a full-building commercial headquarters in Potamos Germasogeias, panoramic sea-view residences in Agios Athanasios, all-inclusive designer pool villas in Agios Tychonas, or coastal sky penthouses, you deal directly with the master building team with personalized legal and residency support.
            </p>

            {/* Quick badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#2C2C2C] bg-white p-3.5 border border-[#E5E5DC] font-medium shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                <span>0% Intermediary Markup</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#2C2C2C] bg-white p-3.5 border border-[#E5E5DC] font-medium shadow-xs">
                <Mail className="w-4 h-4 text-[#1A365D] flex-shrink-0" />
                <span>Direct Developer Desk</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-4 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-xs cursor-pointer"
              >
                Request Direct Developer Consultation
              </button>
            </div>
          </div>

          {/* Right Column Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 border border-[#E5E5DC] space-y-3 shadow-xs hover:border-[#C29B61] transition-all"
                >
                  <div className="w-9 h-9 bg-[#F9F9F6] border border-[#E5E5DC] text-[#1A365D] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#C29B61]" />
                  </div>
                  <h3 className="font-serif text-base text-[#1A365D] font-bold">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

