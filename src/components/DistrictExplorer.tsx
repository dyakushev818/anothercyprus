import React, { useState } from 'react';
import { DISTRICTS } from '../data/districts';
import { LimassolDistrict } from '../types';
import { MapPin, TrendingUp, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DistrictExplorerProps {
  onSelectDistrict: (district: LimassolDistrict) => void;
}

export const DistrictExplorer: React.FC<DistrictExplorerProps> = ({ onSelectDistrict }) => {
  const [selectedDistrictName, setSelectedDistrictName] = useState<string>(DISTRICTS[0].name);

  const currentDistrict = DISTRICTS.find((d) => d.name === selectedDistrictName) || DISTRICTS[0];

  return (
    <section id="districts" className="scroll-mt-32 py-20 sm:py-28 bg-[#F9F9F6] text-[#2C2C2C] border-t border-[#E5E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold">
            Limassol Micro-Markets
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-serif italic text-[#1A365D] font-bold">
            Explore Limassol’s Prime Enclaves
          </h2>
          <p className="mt-3 text-[#666666] text-sm sm:text-base font-light leading-relaxed">
            From the bustling superyacht berths of Limassol Marina to the quiet hillside mansions of Agios Tychonas, choose the location tailored to your lifestyle and return goals.
          </p>
        </div>

        {/* District Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 justify-start sm:justify-center no-scrollbar">
          {DISTRICTS.map((d) => (
            <button
              key={d.name}
              onClick={() => setSelectedDistrictName(d.name)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                selectedDistrictName === d.name
                  ? 'bg-[#1A365D] text-white'
                  : 'bg-white text-[#555555] hover:text-[#1A365D] hover:bg-[#F3F3EE] border border-[#E5E5DC]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#C29B61]" />
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        {/* Active District Spotlight Card */}
        <div className="mt-6 bg-white border border-[#E5E5DC] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* District Image */}
          <div className="relative lg:col-span-6 min-h-[320px] lg:min-h-[460px] overflow-hidden bg-neutral-900">
            <img
              src={currentDistrict.image}
              alt={currentDistrict.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/80 via-[#1A365D]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#E5E5DC] text-[#1A365D] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 shadow-xs">
                <Compass className="w-3.5 h-3.5 text-[#C29B61]" />
                Featured District
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-bold">
                {currentDistrict.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 font-light mt-1">
                {currentDistrict.tagline}
              </p>
            </div>
          </div>

          {/* District Details */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Top stats pill */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 bg-[#FBF8F2] border border-[#C29B61]/40 text-[#1A365D] text-xs font-bold flex items-center gap-1.5 shadow-xs">
                  <TrendingUp className="w-4 h-4 text-[#C29B61]" />
                  <span>Average Rental Yield: {currentDistrict.avgYield}</span>
                </div>
                <div className="px-3.5 py-1.5 bg-[#F9F9F6] border border-[#E5E5DC] text-[#666666] text-xs font-medium">
                  {currentDistrict.lifestyleType}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
                {currentDistrict.description}
              </p>

              {/* District Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] uppercase tracking-widest text-[#8A8A8A] font-bold font-mono">
                  Neighborhood Advantages
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentDistrict.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#2C2C2C] bg-[#F9F9F6] p-2.5 border border-[#E5E5DC] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular For */}
              <div className="p-3.5 bg-[#FBF8F2] border border-[#C29B61]/40 text-xs text-[#2C2C2C] font-light">
                <strong className="text-[#1A365D] font-bold">Ideal Buyer Profile:</strong> {currentDistrict.popularFor}
              </div>
            </div>

            {/* Action button: filter properties by this district */}
            <div className="pt-4 border-t border-[#E5E5DC] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#8A8A8A] font-light">
                Ready to view available listings in {currentDistrict.name}?
              </span>
              <button
                onClick={() => {
                  onSelectDistrict(currentDistrict.name as LimassolDistrict);
                  const el = document.getElementById('properties');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <span>View {currentDistrict.name} Properties</span>
                <ArrowRight className="w-4 h-4 text-[#C29B61]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
