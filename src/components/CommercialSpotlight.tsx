import React, { useState } from 'react';
import { Property, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import {
  Building2,
  TrendingUp,
  Zap,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileText,
  Sparkles,
  Mail,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface CommercialSpotlightProps {
  allegroProperty: Property;
  currency: Currency;
  onSelectProperty: (property: Property) => void;
  onOpenInquiry: (topic?: string) => void;
}

const PHOTO_CAPTIONS = [
  { title: 'Corner Perspective Survey (al3)', tag: '3/4 Aerial View' },
  { title: 'Front Architectural Elevation (al2)', tag: 'Front Facade' },
  { title: 'Rooftop & Elevation Survey (al1)', tag: 'Drone Top Angle' },
  { title: 'Potamos Germasogeias Panorama (al4)', tag: 'Limassol Coastal View' },
  { title: 'Architectural Glazing Profile (al5)', tag: 'Glazing Details' },
];

export const CommercialSpotlight: React.FC<CommercialSpotlightProps> = ({
  allegroProperty,
  currency,
  onSelectProperty,
  onOpenInquiry,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const images = allegroProperty.galleryImages && allegroProperty.galleryImages.length > 0
    ? allegroProperty.galleryImages
    : [allegroProperty.heroImage];

  const currentImage = images[selectedPhotoIndex] || allegroProperty.heroImage;

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="commercial-spotlight" className="py-16 sm:py-24 bg-[#F3F3EE] border-y border-[#E5E5DC] text-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E5E5DC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29B61] font-mono">
                Institutional Commercial Flagship
              </span>
              <span className="text-[#D4D4C8]">•</span>
              <span className="text-xs text-[#1A365D] font-mono font-semibold">Potamos Germasogeias, Limassol</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif italic text-[#1A365D] font-bold">
              Germasogeia Corporate Prime
            </h2>
            <p className="text-[#666666] text-sm sm:text-base mt-2 font-light max-w-2xl">
              Whole Building Investment: 1,934 m² prime 4-story glass-facade headquarters with a roof garden, 18 parking spaces, and 400m walk to the Mediterranean sea.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProperty(allegroProperty)}
              className="px-6 py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>View Full Specs & Architectural Plans</span>
              <ArrowRight className="w-4 h-4 text-[#C29B61]" />
            </button>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* Left: Media & Visual Highlight */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onClick={() => onSelectProperty(allegroProperty)}
              className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-[#E5E5DC] cursor-pointer group shadow-sm"
            >
              <img
                src={currentImage}
                alt={`Germasogeia Corporate Prime Commercial Building - ${PHOTO_CAPTIONS[selectedPhotoIndex]?.title || 'Limassol'}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/80 via-[#1A365D]/20 to-transparent" />

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1A365D] border border-[#E5E5DC] transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-[#1A365D] border border-[#E5E5DC] transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-10 shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white/95 text-[#1A365D] text-xs font-mono font-semibold border border-[#E5E5DC] shadow-xs">
                  Handover: June 2026
                </span>
                <span className="px-3 py-1 bg-[#1A365D] text-white text-xs font-mono font-bold border border-[#1A365D] shadow-xs">
                  6.8%–8.0% Projected ROI
                </span>
                <span className="px-3 py-1 bg-[#FBF8F2] text-[#AF884E] text-xs font-mono font-bold border border-[#C29B61]/40 shadow-xs">
                  0% Buyer Commission
                </span>
              </div>

              {/* Active Image Tag */}
              <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 border border-[#E5E5DC] text-[10px] uppercase font-mono font-bold text-[#1A365D] shadow-xs">
                {PHOTO_CAPTIONS[selectedPhotoIndex]?.title || `Photo ${selectedPhotoIndex + 1} of ${images.length}`}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[11px] text-[#C29B61] uppercase font-mono block font-bold">Direct Developer Price</span>
                  <span className="text-2xl sm:text-3xl font-serif text-white font-bold">
                    {formatPrice(allegroProperty.priceEUR, currency)}
                  </span>
                  <span className="text-xs text-[#E5E5DC] block">+ VAT • Independent Title Verification Required</span>
                </div>

                <span className="text-xs text-[#1A365D] bg-white/95 px-3 py-1.5 border border-[#E5E5DC] flex items-center gap-1.5 group-hover:bg-white transition-colors font-bold shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>Inspect Dossier</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation with customized focal point object-position */}
            <div className="grid grid-cols-5 gap-2">
              {images.map((imgUrl, idx) => {
                const objectPositions = [
                  'object-center',        // al1 - rooftop & full elevation
                  'object-center',        // al2 - front facade
                  'object-[center_35%]',  // al3 - 3/4 perspective & glass corner
                  'object-[center_60%]',  // al4 - coastal panorama & cityscape
                  'object-[center_30%]',  // al5 - glazing details
                ];
                const posClass = objectPositions[idx] || 'object-cover';

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhotoIndex(idx);
                    }}
                    className={`relative aspect-[4/3] overflow-hidden border transition-all cursor-pointer group bg-white shadow-xs ${
                      selectedPhotoIndex === idx
                        ? 'border-[#1A365D] ring-2 ring-[#1A365D]/60 opacity-100'
                        : 'border-[#E5E5DC] opacity-70 hover:opacity-100 hover:border-[#C29B61]'
                    }`}
                    title={PHOTO_CAPTIONS[idx]?.title || `View Photo ${idx + 1}`}
                  >
                    <img
                      src={imgUrl}
                      alt={PHOTO_CAPTIONS[idx]?.title || `Commercial photo ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${posClass} transition-transform duration-300 group-hover:scale-105`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-white/90 text-[8px] font-mono font-bold text-[#1A365D] px-1 py-0.5 truncate text-center backdrop-blur-xs">
                      {PHOTO_CAPTIONS[idx]?.tag || `0${idx + 1}`}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 bg-white border border-[#E5E5DC] shadow-xs">
                <span className="text-[10px] text-[#8A8A8A] uppercase block">Total Area</span>
                <span className="text-base text-[#1A365D] font-bold mt-0.5 block">1,934 m²</span>
                <span className="text-[10px] text-[#666666] font-sans">Full Gross Schedule</span>
              </div>

              <div className="p-3.5 bg-white border border-[#E5E5DC] shadow-xs">
                <span className="text-[10px] text-[#8A8A8A] uppercase block">Rental Cash Flow</span>
                <span className="text-base text-[#C29B61] font-bold mt-0.5 block">€49,000 / mo</span>
                <span className="text-[10px] text-[#666666] font-sans">€588,000 / year</span>
              </div>

              <div className="p-3.5 bg-white border border-[#E5E5DC] shadow-xs">
                <span className="text-[10px] text-[#8A8A8A] uppercase block">Parking Capacity</span>
                <span className="text-base text-[#1A365D] font-bold mt-0.5 block">18 Spaces</span>
                <span className="text-[10px] text-[#666666] font-sans">16+2 with 4 EV</span>
              </div>

              <div className="p-3.5 bg-white border border-[#E5E5DC] shadow-xs">
                <span className="text-[10px] text-[#8A8A8A] uppercase block">Beach Distance</span>
                <span className="text-base text-[#1A365D] font-bold mt-0.5 block">400 m</span>
                <span className="text-[10px] text-[#666666] font-sans">2 min walk to coast</span>
              </div>
            </div>
          </div>

          {/* Right: Commercial Investment Case & Inclusions */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-white border border-[#E5E5DC] p-5 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A365D] mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29B61]" />
                  Direct Institutional Commercial Asset
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">
                  Positioned in Limassol&apos;s primary business strip, Germasogeia Corporate Prime is engineered for high-caliber international corporations, investment funds, and family offices seeking high income yields, zero intermediary markups, and long-term capital preservation in a low-tax European jurisdiction.
                </p>
              </div>

              {/* Floor Plan Quick Breakdown */}
              <div className="bg-white border border-[#E5E5DC] p-5 space-y-3 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A365D] mb-1">
                  Floor-by-Floor Architecture
                </h3>
                <div className="space-y-2 text-xs divide-y divide-[#E5E5DC]">
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#2C2C2C] font-medium">Ground Floor & Lobby</span>
                    <span className="text-[#666666] font-mono">84m² Lobby + 18 Parking + 4 Storages</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#2C2C2C] font-medium">Intermediate Floor — official plan on request</span>
                    <span className="text-[#666666] font-mono">213 m² Total (178 m² Cov.)</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#2C2C2C] font-medium">1st, 2nd, 3rd & 4th Floors</span>
                    <span className="text-[#666666] font-mono">323 m² per floor (255 m² cov. + 78 m² ver.)</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#2C2C2C] font-medium">Roof Garden</span>
                    <span className="text-[#1A365D] font-mono font-bold">161 m² with 80 m² open sky deck</span>
                  </div>
                </div>
              </div>

              {/* Included in €8.7M Price Callout */}
              <div className="p-4 bg-[#FBF8F2] border border-[#C29B61]/40 shadow-xs">
                <span className="text-[11px] text-[#AF884E] font-bold uppercase tracking-wider block mb-2 font-mono">
                  All-Inclusive Package (Fully Included):
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#2C2C2C]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
                    <span>CBI 31mm Raised Floors</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
                    <span>23 kW Photovoltaic Solar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
                    <span>IP 4K Security Cameras</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B61] flex-shrink-0" />
                    <span>Complimentary Space Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://wa.me/35796373089?text=Hello%2C%20I%20am%20interested%20in%20acquiring%20the%20Germasogeia%20Corporate%20Prime%20Commercial%20Building%20(€8.7M)%20in%20Limassol."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-white border border-[#D4D4C8] hover:bg-[#F3F3EE] text-[#2C2C2C] hover:text-[#1A365D] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp (+357 96 373089)</span>
              </a>

              <button
                onClick={() => onOpenInquiry('Germasogeia Corporate Prime Complete Dossier')}
                className="flex-1 py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#C29B61]" />
                <span>Direct Developer Inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


