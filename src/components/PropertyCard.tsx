import React from 'react';
import { Property, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { Bed, Bath, Maximize2, MapPin, Waves, ShieldCheck, TrendingUp, Sparkles, MessageCircle, ArrowUpRight, Building2, Car, Layers, Zap } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  currency: Currency;
  onSelect: (property: Property) => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  currency,
  onSelect,
  onInquire,
}) => {
  const isCommercial = property.type === 'Commercial';

  return (
    <div
      className="group bg-white border border-[#E5E5DC] hover:border-[#C29B61] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
      id={`property-card-${property.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F3EE] cursor-pointer" onClick={() => onSelect(property)}>
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/60 via-[#1A365D]/10 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 bg-[#1A365D] text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-xs">
              {property.type}
            </span>
          </div>

          <span
            className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold shadow-xs ${
              property.status === 'Key Ready'
                ? 'bg-white text-[#1A365D] border border-[#E5E5DC]'
                : property.status === 'Under Construction'
                ? 'bg-white text-[#555555] border border-[#E5E5DC]'
                : 'bg-white text-[#8A8A8A] border border-[#E5E5DC]'
            }`}
          >
            {property.completionDate}
          </span>
        </div>

        {/* Bottom Image Overlay Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none">
          <div className="flex items-center gap-1.5 text-xs text-[#2C2C2C] font-semibold bg-white/95 backdrop-blur-md px-2.5 py-1 border border-[#E5E5DC] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C29B61]" />
            <span className="tracking-wider text-[11px] uppercase">{property.district}</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#1A365D] font-bold bg-white/95 backdrop-blur-md px-2.5 py-1 border border-[#E5E5DC] shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#C29B61]" />
            <span>{property.rentalYieldEstimated}% Yield</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Tagline */}
        <div className="cursor-pointer" onClick={() => onSelect(property)}>
          <h3 className="font-serif text-xl font-bold text-[#1A365D] italic group-hover:text-[#132A4B] transition-colors line-clamp-1">
            {property.title}
          </h3>
          <p className="mt-1.5 text-xs text-[#666666] font-light line-clamp-2 leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Specs Grid — Adaptive for Commercial vs Residential */}
        <div className="grid grid-cols-4 gap-2 py-3.5 my-4 border-y border-[#E5E5DC] text-[#2C2C2C] text-xs">
          {isCommercial ? (
            <>
              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>1,934m²</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">Total Area</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Layers className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>4 Floors</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">+ Roof Gym</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Car className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>18 Spots</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">4 EV Ports</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Waves className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>400m</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">To Beach</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Bed className="w-3.5 h-3.5 text-[#8A8A8A]" />
                  <span>{property.bedrooms}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">Beds</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Bath className="w-3.5 h-3.5 text-[#8A8A8A]" />
                  <span>{property.bathrooms}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">Baths</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Maximize2 className="w-3.5 h-3.5 text-[#8A8A8A]" />
                  <span>{property.coveredAreaM2}m²</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">Covered</span>
              </div>

              <div className="flex flex-col items-center justify-center p-2 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div className="flex items-center gap-1 font-bold text-[#1A365D]">
                  <Waves className="w-3.5 h-3.5 text-[#8A8A8A]" />
                  <span>{property.distanceToBeachM === 0 ? 'Direct' : `${property.distanceToBeachM}m`}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#8A8A8A] mt-0.5">To Sea</span>
              </div>
            </>
          )}
        </div>

        {/* Financial Yield or PR Qualification Callout */}
        {isCommercial && property.projectedMonthlyIncomeEUR ? (
          <div className="mb-4 flex items-center justify-between text-[11px] font-semibold text-[#1A365D] bg-[#FBF8F2] border border-[#C29B61]/40 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
              <span>Projected Rent: <strong>€49,000 / month</strong></span>
            </div>
            <span className="text-[#AF884E] font-mono text-[10px] font-bold">€588,000/yr</span>
          </div>
        ) : property.prEligible ? (
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-[#1A365D] bg-[#FBF8F2] border border-[#C29B61]/40 px-3 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
            <span>Cyprus EU Permanent Residency Cat 6.2</span>
          </div>
        ) : null}

        {/* Footer: Price & Action Buttons */}
        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8A8A8A] block font-mono">
              {isCommercial ? 'Whole Building Asking Price' : 'Asking Price'}
            </span>
            <div className="text-xl font-serif text-[#1A365D] font-bold mt-0.5">
              {formatPrice(property.priceEUR, currency)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${
                property.developerContact?.phones[0]
                  ? property.developerContact.phones[0].replace(/[^0-9]/g, '')
                  : '35796373089'
              }?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                property.title
              )}%20(${property.district}%2C%20Limassol)%20on%20AnotherCyprus.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white hover:bg-[#F3F3EE] text-[#2C2C2C] hover:text-[#1A365D] transition-colors border border-[#D4D4C8] shadow-xs"
              title="Chat on WhatsApp with Developer (+357 96 373089)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </a>

            <button
              onClick={() => onSelect(property)}
              className="px-4 py-2.5 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
            >
              <span>Inspect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C29B61]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
