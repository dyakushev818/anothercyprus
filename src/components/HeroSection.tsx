import React from 'react';
import { Property } from '../types';
import { ShieldCheck, Building2, TrendingUp, Sparkles, Compass, CheckCircle2, ChevronRight, FileText, MessageCircle, Mail } from 'lucide-react';

interface HeroSectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onScrollToProjects: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  properties,
  onSelectProperty,
  onScrollToProjects,
  onOpenInquiry,
}) => {
  return (
    <section className="relative bg-[#F9F9F6] text-[#2C2C2C] overflow-hidden border-b border-[#E5E5DC]">
      {/* Subtle Warm Minimalist Background Texture & Architectural Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/commercial/al1.jpg"
          alt="Limassol Prime Real Estate & Commercial Developments"
          className="w-full h-full object-cover object-center opacity-10 scale-105 transform duration-1000 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F6]/80 via-[#F9F9F6]/95 to-[#F9F9F6]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A365D]/5 via-transparent to-[#F9F9F6] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-20 lg:pb-24">
        {/* Top Eyebrow */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[#C29B61] uppercase tracking-[0.35em] text-[11px] font-bold">
            Direct Developer Collection • Limassol, Cyprus
          </span>
          <span className="text-[#D4D4C8]">•</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E5DC] text-[#1A365D] text-[10px] uppercase tracking-widest font-mono font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C29B61]" />
            0% Buyer Commission • Direct Developer Terms
          </span>
        </div>

        {/* Main Heading for SEO & High Conversion */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.12] tracking-tight text-[#1A365D] mb-6 italic font-bold">
            New Apartments, Villas &amp; <br />
            Commercial Property <br />
            <span className="not-italic text-[#2C2C2C]">Direct from Developers in Limassol.</span>
          </h1>
          <p className="text-[#555555] text-base sm:text-lg leading-relaxed max-w-3xl font-light mb-8">
            Explore developer projects in Limassol and request <strong className="text-[#1A365D] font-semibold">current prices, plans and availability</strong> directly from the sales desk. Choose from a <strong className="text-[#1A365D] font-semibold">Class-A headquarters in Potamos Germasogeias</strong>, sea-view residences in Agios Athanasios, turnkey villas in Agios Tychonas and OLiO two-bedroom residences in Mesa Geitonia.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-12">
            <button
              onClick={onScrollToProjects}
              className="bg-[#1A365D] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#132A4B] transition-all cursor-pointer shadow-md flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-[#C29B61]" />
              <span>View Projects &amp; Request Availability</span>
            </button>

            <a
              href="https://wa.me/35796373089?text=Hello%2C%20I%20am%20interested%20in%20the%20direct%20Limassol%20development%20portfolio%20with%200%25%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4D4C8] bg-white hover:bg-[#F3F3EE] text-[#2C2C2C] hover:text-[#1A365D] px-6 py-4 text-xs uppercase tracking-widest font-bold transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Developer Sales Desk on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry('Current Plans, Prices & Availability')}
              className="border border-[#D4D4C8] hover:border-[#1A365D] bg-white hover:bg-[#F3F3EE] px-6 py-4 text-xs uppercase tracking-widest font-bold text-[#1A365D] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#C29B61]" />
              <span>Request Plans &amp; Availability</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 border-y border-[#E5E5DC] bg-white/70 max-w-5xl">
            {['Direct developer communication', 'Current prices & availability', 'Plans on request', 'English & Russian support', 'Private viewings by appointment'].map((item) => (
              <div key={item} className="px-4 py-3 text-[10px] uppercase tracking-wide font-bold text-[#1A365D] border-b sm:border-b-0 sm:border-r last:border-r-0 border-[#E5E5DC] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B61] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Projects Showcase Navigator */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C29B61]" />
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#1A365D]">
                Direct Portfolio Navigator
              </h2>
            </div>
            <span className="text-[11px] text-[#666666] font-mono hidden sm:inline">
              0% Buyer Commission • Direct Developer Pricing & Title Deeds
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {properties.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProperty(project)}
                className="group relative bg-white hover:bg-[#FAF9F5] border border-[#E5E5DC] hover:border-[#C29B61] p-5 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#666666] uppercase tracking-widest font-mono mb-2">
                    <span className="px-2 py-0.5 bg-[#F3F3EE] border border-[#E5E5DC] text-[#1A365D] font-semibold">{project.type}</span>
                    <span className="text-[#C29B61] font-bold">{project.rentalYieldEstimated ? `${project.rentalYieldEstimated}% gross yield` : 'Yield on request'}</span>
                  </div>
                  <h3 className="text-base font-serif italic text-[#1A365D] group-hover:text-[#132A4B] transition-colors line-clamp-1 font-bold">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#666666] font-light mt-1.5 line-clamp-2">
                    {project.district} • {project.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E5E5DC] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-[#8A8A8A] block uppercase font-mono">Price from</span>
                    <span className="font-serif text-[#1A365D] font-bold text-sm">
                      €{(project.priceEUR / (project.priceEUR >= 1000000 ? 1000000 : 1000)).toLocaleString()} {project.priceEUR >= 1000000 ? 'M' : 'k'}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#C29B61] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect Specs <ChevronRight className="w-3.5 h-3.5 text-[#C29B61]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Investment Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#E5E5DC]">
          <div className="p-4 bg-white border border-[#E5E5DC] shadow-xs">
            <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-mono">Prime Commercial</span>
            <span className="text-lg font-serif text-[#1A365D] font-bold block mt-0.5">€49,000 / mo</span>
            <span className="text-[11px] text-[#666666] font-light">Class-A Commercial Yield</span>
          </div>

          <div className="p-4 bg-white border border-[#E5E5DC] shadow-xs">
            <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-mono">Commission</span>
            <span className="text-lg font-serif text-[#1A365D] font-bold block mt-0.5">0% Commission</span>
            <span className="text-[11px] text-[#666666] font-light">Direct from Developer</span>
          </div>

          <div className="p-4 bg-white border border-[#E5E5DC] shadow-xs">
            <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-mono">Immigration Fast-Track</span>
            <span className="text-lg font-serif text-[#1A365D] font-bold block mt-0.5">EU PR Cat 6.2</span>
            <span className="text-[11px] text-[#666666] font-light">Subject to Current Rules & Approval</span>
          </div>

          <div className="p-4 bg-white border border-[#E5E5DC] shadow-xs">
            <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-mono">Energy & Engineering</span>
            <span className="text-lg font-serif text-[#C29B61] font-bold block mt-0.5">Class A+ / PV</span>
            <span className="text-[11px] text-[#666666] font-light">Solar Grid & Raised Floor Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};
