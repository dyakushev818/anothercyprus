import React, { useEffect, useState } from 'react';
import { Property, Currency, PropertyUnit } from '../types';
import { formatPrice } from '../utils/formatters';
import {
  X,
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Waves,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Building,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
  Phone,
  Layers,
  Compass,
  Check,
  Clock,
  Navigation,
  Car,
  FileText,
  Sun,
  Shield,
  Download,
  Mail,
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  currency: Currency;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  currency,
  onClose,
  onInquire,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState<PropertyUnit | null>(
    property?.availableUnits && property.availableUnits.length > 0 ? property.availableUnits[0] : null
  );
  const [activeTab, setActiveTab] = useState<'overview' | 'floors' | 'specs' | 'cad' | 'units'>('overview');
  const [selectedCadFloor, setSelectedCadFloor] = useState<'typical' | 'ground'>('typical');

  if (!property) return null;

  const isCommercial = property.type === 'Commercial';
  const images = property.galleryImages?.length > 0 ? property.galleryImages : [property.heroImage];
  const activePrice = selectedUnit ? selectedUnit.priceEUR : property.priceEUR;
  const monthlyRentalEstEUR = property.projectedMonthlyIncomeEUR || (property.rentalYieldEstimated ? Math.round((activePrice * (property.rentalYieldEstimated / 100)) / 12) : 0);
  const annualRentalEstEUR = property.projectedAnnualIncomeEUR || monthlyRentalEstEUR * 12;

  useEffect(() => {
    if (images.length < 2) return;
    const neighbours = [
      images[(activeImageIndex + 1) % images.length],
      images[(activeImageIndex - 1 + images.length) % images.length],
    ];
    neighbours.forEach((src) => { const image = new Image(); image.src = src; });
  }, [activeImageIndex, images]);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-5xl shadow-2xl border border-[#E5E5DC] overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#2C2C2C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#1A365D] text-white px-6 py-4 flex items-center justify-between border-b border-[#132A4B]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 bg-[#C29B61] text-[#1A365D] text-[10px] font-bold uppercase tracking-wider">
                {property.type}
              </span>
              <span className="text-[#C29B61] font-semibold uppercase tracking-[0.2em] text-[10px]">
                {property.district}, Limassol
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[#C29B61] text-xs font-medium flex items-center gap-1 font-mono">
                <TrendingUp className="w-3.5 h-3.5" /> {property.rentalYieldEstimated ? `${property.rentalYieldEstimated}% Gross Yield` : 'Rental estimate on request'}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 text-xs font-medium flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> {property.completionDate}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif italic text-white line-clamp-1 mt-1 font-bold">
              {property.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#E5E5DC] bg-[#F9F9F6] px-2 sm:px-4 overflow-x-auto md:overflow-x-visible md:flex-wrap">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider leading-tight transition-colors border-b-2 whitespace-nowrap md:whitespace-normal md:flex-1 md:min-w-[210px] md:min-h-12 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#1A365D] text-[#1A365D]'
                : 'border-transparent text-[#666666] hover:text-[#1A365D]'
            }`}
          >
            Executive Overview
          </button>

          {isCommercial && property.floorBreakdown && (
            <button
              onClick={() => setActiveTab('floors')}
              className={`py-3 px-3 text-xs font-bold uppercase tracking-wider leading-tight transition-colors border-b-2 whitespace-nowrap flex items-center gap-1.5 md:justify-center md:whitespace-normal md:flex-1 md:min-w-[210px] md:min-h-12 cursor-pointer ${
                activeTab === 'floors'
                  ? 'border-[#1A365D] text-[#1A365D]'
                  : 'border-transparent text-[#666666] hover:text-[#1A365D]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#C29B61]" />
              Floor Area Breakdown (1,934 m²)
            </button>
          )}

          {property.technicalSpecsList && (
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3 px-3 text-xs font-bold uppercase tracking-wider leading-tight transition-colors border-b-2 whitespace-nowrap flex items-center gap-1.5 md:justify-center md:whitespace-normal md:flex-1 md:min-w-[210px] md:min-h-12 cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-[#1A365D] text-[#1A365D]'
                  : 'border-transparent text-[#666666] hover:text-[#1A365D]'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#C29B61]" />
              Technical & Engineering Specs
            </button>
          )}

          <button
            onClick={() => setActiveTab('cad')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider leading-tight transition-colors border-b-2 whitespace-nowrap flex items-center gap-1.5 md:justify-center md:whitespace-normal md:flex-1 md:min-w-[210px] md:min-h-12 cursor-pointer ${
              activeTab === 'cad'
                ? 'border-[#1A365D] text-[#1A365D]'
                : 'border-transparent text-[#666666] hover:text-[#1A365D]'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-[#C29B61]" />
            Architectural Drawings & CAD Plans
          </button>

          {property.availableUnits && property.availableUnits.length > 0 && (
            <button
              onClick={() => setActiveTab('units')}
              className={`py-3 px-3 text-xs font-bold uppercase tracking-wider leading-tight transition-colors border-b-2 whitespace-nowrap flex items-center gap-1.5 md:justify-center md:whitespace-normal md:flex-1 md:min-w-[210px] md:min-h-12 cursor-pointer ${
                activeTab === 'units'
                  ? 'border-[#1A365D] text-[#1A365D]'
                  : 'border-transparent text-[#666666] hover:text-[#1A365D]'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-[#C29B61]" />
              Available Units & Floor Inventory ({property.availableUnits.filter(u => u.status === 'Available').length} Available)
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              {/* Media Gallery */}
              <div className="relative aspect-[16/9] bg-[#2C2C2C] border border-[#E5E5DC] overflow-hidden group">
                <img
                  src={images[activeImageIndex]}
                  alt={property.title}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#1A365D]/80 hover:bg-[#1A365D] text-white border border-white/20 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-[#1A365D]/80 hover:bg-[#1A365D] text-white border border-white/20 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#1A365D]/80 text-white px-3 py-1 border border-white/20 text-[11px] font-mono">
                      <span>{activeImageIndex + 1}</span>
                      <span>/</span>
                      <span>{images.length}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Inclusions & Guarantees */}
              {property.includedInPrice && (
                <div className="p-4 bg-[#FBF8F2] border border-[#C29B61]/50 text-xs">
                  <div className="flex items-center gap-2 mb-2 font-semibold uppercase tracking-wider text-[#1A365D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C29B61]" />
                    <span>Included in Purchase Price (0% Buyer Commission):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-[#555555]">
                    {property.includedInPrice.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#C29B61] rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Financial & Sizing Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F9F9F6] border border-[#E5E5DC]">
                <div>
                  <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider block font-mono">
                    Direct Developer Price
                  </span>
                  <span className="text-xl sm:text-2xl font-serif text-[#1A365D] font-bold mt-0.5 block">
                    {formatPrice(activePrice, currency)}
                  </span>
                  <span className="text-[11px] text-[#666666] block font-light">+ VAT • 0% Commission</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider block font-mono">
                    Projected Cash Flow
                  </span>
                  <span className="text-xl sm:text-2xl font-serif text-[#1A365D] font-bold mt-0.5 block">
                    {monthlyRentalEstEUR ? `€${monthlyRentalEstEUR.toLocaleString()} / mo` : 'On request'}
                  </span>
                  <span className="text-[11px] text-[#C29B61] block font-mono font-semibold">
                    {annualRentalEstEUR ? `€${annualRentalEstEUR.toLocaleString()} / year (${property.rentalYieldEstimated}% gross)` : 'Independent rental appraisal recommended'}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider block font-mono">
                    Total Covered Area
                  </span>
                  <span className="text-xl sm:text-2xl font-serif text-[#1A365D] font-bold mt-0.5 block">
                    {selectedUnit ? selectedUnit.totalCoveredM2 : property.coveredAreaM2} m²
                  </span>
                  <span className="text-[11px] text-[#666666] block font-light">
                    {isCommercial ? '1,934 m² Gross Schedule' : `${property.verandaAreaM2} m² Verandas`}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#8A8A8A] uppercase tracking-wider block font-mono">
                    Completion Status
                  </span>
                  <span className="text-xl sm:text-2xl font-serif text-[#1A365D] font-bold mt-0.5 block">
                    {property.completionDate}
                  </span>
                  <span className="text-[11px] text-[#666666] block font-light">{property.status}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29B61] mb-2 font-mono">
                  Project Narrative
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Property Features List */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C29B61] mb-3 font-mono">
                  Building Features & Infrastructure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#555555] py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C29B61]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer & Direct Contact */}
              {property.developerContact && (
                <div className="p-5 bg-[#F9F9F6] border border-[#E5E5DC]">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-3 font-mono">
                    Authorized Master Developer Details (0% Commission)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] text-[#8A8A8A] uppercase block">Developer Terms</span>
                      <span className="text-[#1A365D] font-bold">{property.developerContact.developers}</span>
                      {property.developerContact.address && (
                        <span className="text-[#666666] block text-[11px] mt-0.5">{property.developerContact.address}</span>
                      )}
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8A8A8A] uppercase block">Direct Desk & Transmissions</span>
                      <div className="space-y-0.5 mt-0.5">
                        <button
                          onClick={() => onInquire(`Direct Inquiry for ${property.title}`)}
                          className="text-[#1A365D] hover:underline block font-mono font-bold text-left cursor-pointer"
                        >
                          Direct Developer Email Desk
                        </button>
                        {property.developerContact.phones.map((phone, i) => (
                          <a key={i} href={`tel:${phone}`} className="text-[#555555] hover:text-[#1A365D] block font-mono">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8A8A8A] uppercase block">Distance to Prime Anchors</span>
                      <div className="text-[#666666] space-y-0.5 mt-0.5 text-[11px]">
                        <div>• Beach: {property.distanceToBeachM}m ({property.developerContact.distanceToBeachMin || 2} min)</div>
                        <div>• Highway: {property.developerContact.distanceToHighwayMin || 3} min</div>
                        <div>• Amenities: {property.developerContact.distanceToEssentialsMin || 1} min walk</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* TAB 2: FLOOR BREAKDOWN (COMMERCIAL) */}
          {activeTab === 'floors' && property.floorBreakdown && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-serif italic text-[#1A365D] font-bold mb-1">
                  Detailed Area & Floor Schedule ({property.title})
                </h3>
                <p className="text-xs text-[#666666] font-light">
                  Exact architectural schedule compliant with Limassol municipality building permits. Total Gross Area: <strong>1,934 m²</strong>.
                </p>
              </div>

              <div className="overflow-x-auto border border-[#E5E5DC]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F9F9F6] text-[#555555] uppercase text-[10px] tracking-wider border-b border-[#E5E5DC]">
                    <tr>
                      <th className="py-3 px-4">Level / Floor</th>
                      <th className="py-3 px-4">Covered (m²)</th>
                      <th className="py-3 px-4">Covered Verandas</th>
                      <th className="py-3 px-4">Common Area</th>
                      <th className="py-3 px-4">Uncovered Verandas</th>
                      <th className="py-3 px-4 font-bold text-[#1A365D]">Total Area (m²)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5DC] font-mono">
                    {property.floorBreakdown.map((item, index) => (
                      <tr key={index} className="hover:bg-[#F9F9F6] transition-colors">
                        <td className="py-3 px-4 font-sans font-medium text-[#2C2C2C]">
                          <div>{item.floor}</div>
                          {item.description && (
                            <span className="text-[11px] text-[#8A8A8A] font-light block mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-[#555555]">{item.coveredM2} m²</td>
                        <td className="py-3 px-4 text-[#8A8A8A]">{item.coveredVerandasM2 ? `${item.coveredVerandasM2} m²` : '—'}</td>
                        <td className="py-3 px-4 text-[#8A8A8A]">{item.commonAreaM2 ? `${item.commonAreaM2} m²` : '—'}</td>
                        <td className="py-3 px-4 text-[#8A8A8A]">{item.uncoveredVerandasM2 ? `${item.uncoveredVerandasM2} m²` : '—'}</td>
                        <td className="py-3 px-4 font-bold text-[#1A365D]">{item.totalAreaM2} m²</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: TECHNICAL & ENGINEERING SPECS */}
          {activeTab === 'specs' && property.technicalSpecsList && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-serif italic text-[#1A365D] font-bold mb-1">
                  Technical Specifications & Engineering Standards
                </h3>
                <p className="text-xs text-[#666666] font-light">
                  Strictly conforming to European building codes, seismic engineering, and Category A/A+ energy efficiency.
                </p>
              </div>

              <div className="space-y-3">
                {property.technicalSpecsList.map((spec, index) => (
                  <div key={index} className="p-4 bg-[#F9F9F6] border border-[#E5E5DC] space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-[#1A365D] text-[#C29B61] flex items-center justify-center text-[10px] font-mono font-bold">
                        0{spec.number || index + 1}
                      </span>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A365D]">
                        {spec.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#555555] leading-relaxed font-light pl-7">
                      {spec.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: AVAILABLE UNITS */}
          {activeTab === 'units' && property.availableUnits && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif italic text-[#1A365D] font-bold">
                    Live Unit Inventory & Availability Matrix
                  </h3>
                  <p className="text-xs text-[#666666] font-light">
                    Direct developer enquiry. Any Cyprus PR (Category 6.2) eligibility is subject to current criteria and official approval.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#1A365D] font-bold bg-[#FBF8F2] border border-[#C29B61] px-3 py-1">
                  {property.availableUnits.filter(u => u.status === 'Available').length} Units Remaining
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.availableUnits.map((unit) => {
                  const isSelected = selectedUnit?.unitNumber === unit.unitNumber;
                  const isAvailable = unit.status === 'Available';

                  return (
                    <div
                      key={unit.unitNumber}
                      onClick={() => setSelectedUnit(unit)}
                      className={`p-5 border transition-all cursor-pointer flex flex-col justify-between shadow-xs ${
                        isSelected
                          ? 'border-[#1A365D] bg-[#FBF8F2] ring-1 ring-[#1A365D]'
                          : 'border-[#E5E5DC] bg-white hover:border-[#C29B61]'
                      } ${!isAvailable ? 'opacity-50' : ''}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-serif text-lg font-bold text-[#1A365D]">
                            Unit {unit.unitNumber} ({unit.block})
                          </span>
                          <span
                            className={`px-2.5 py-0.5 text-[10px] uppercase font-mono font-bold ${
                              isAvailable
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                                : 'bg-red-50 text-red-800 border border-red-300'
                            }`}
                          >
                            {unit.status}
                          </span>
                        </div>

                        <div className="text-xs text-[#555555] font-mono mb-3">
                          {unit.floor} • {unit.bedrooms} Bedrooms • {unit.view}
                        </div>

                        <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E5E5DC] text-xs font-mono">
                          <div>
                            <span className="text-[10px] text-[#8A8A8A] block uppercase">Internal</span>
                            <span className="text-[#2C2C2C] font-semibold">{unit.internalM2} m²</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#8A8A8A] block uppercase">Veranda</span>
                            <span className="text-[#2C2C2C] font-semibold">{unit.verandaM2} m²</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#8A8A8A] block uppercase">Total Cov.</span>
                            <span className="text-[#1A365D] font-bold">{unit.totalCoveredM2} m²</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-[#8A8A8A] block uppercase">Price (+ VAT)</span>
                          <span className="text-lg font-serif text-[#1A365D] font-bold">
                            {formatPrice(unit.priceEUR, currency)}
                          </span>
                        </div>

                        {isAvailable && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onInquire(`Reservation Request: ${property.title} - Unit ${unit.unitNumber}`);
                            }}
                            className="px-4 py-2 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Reserve Unit
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: CAD & ARCHITECTURAL DRAWINGS */}
          {activeTab === 'cad' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-serif italic text-[#1A365D] font-bold">
                    Architectural Layouts & CAD Schematics
                  </h3>
                  <p className="text-xs text-[#666666] font-light">
                    Illustrative layout summary only. Request the official developer-stamped architectural drawings before relying on dimensions or room configuration.
                  </p>
                </div>

                {isCommercial && (
                  <div className="flex items-center gap-1.5 bg-[#F9F9F6] p-1 border border-[#E5E5DC]">
                    <button
                      onClick={() => setSelectedCadFloor('typical')}
                      className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer ${
                        selectedCadFloor === 'typical' ? 'bg-[#1A365D] text-white font-bold' : 'text-[#666666] hover:text-[#1A365D]'
                      }`}
                    >
                      1st–4th Typical
                    </button>
                    <button
                      onClick={() => setSelectedCadFloor('ground')}
                      className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer ${
                        selectedCadFloor === 'ground' ? 'bg-[#1A365D] text-white font-bold' : 'text-[#666666] hover:text-[#1A365D]'
                      }`}
                    >
                      Ground & Parking
                    </button>
                  </div>
                )}
              </div>

              {/* Interactive Vector CAD Blueprint Renderer */}
              <div className="bg-[#F9F9F6] border border-[#E5E5DC] p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-[#E5E5DC] pb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#C29B61]" />
                    <span className="text-xs font-mono uppercase text-[#1A365D] font-bold">
                      {isCommercial
                        ? selectedCadFloor === 'typical'
                          ? '1st, 2nd, 3rd, 4th Typical Floor Plan (255 m² covered + 78 m² veranda)'
                          : 'Ground Floor Layout (84 m² lobby + 18 parking bays + 4 storages)'
                        : property.id === 'tychonas-sanctuary-villas'
                        ? 'Agios Tychonas Villa Floor Plan & Pool Layout (232m² – 334m² Total Covered + 36m² Pool)'
                        : property.id === 'dasoudi-coastal-penthouses'
                        ? 'OLiO Residences — illustrative two-bedroom layout summary'
                        : 'Flat 201 Architectural CAD Plan (Agios Athanasios - 117m² Covered + 32m² Veranda)'}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8A8A8A] font-mono">Not to scale • Official plans on request</span>
                </div>

                {/* SVG Blueprint Canvas */}
                <div className="relative aspect-[16/9] w-full bg-[#1A365D]/95 border border-[#132A4B] flex items-center justify-center p-4">
                  <svg className="w-full h-full max-h-[380px]" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid Pattern */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a4a75" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="800" height="450" fill="url(#grid)" />

                    {isCommercial ? (
                      selectedCadFloor === 'typical' ? (
                        <>
                          {/* Main Office Building Contour */}
                          <rect x="120" y="80" width="560" height="280" stroke="#C29B61" strokeWidth="3" fill="#132A4B" fillOpacity="0.6" />
                          {/* Veranda Left */}
                          <rect x="120" y="100" width="120" height="120" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" fill="#0369a1" fillOpacity="0.2" />
                          <text x="180" y="165" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace">Covered Veranda 42m²</text>
                          {/* Veranda Right */}
                          <rect x="560" y="100" width="120" height="120" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" fill="#0369a1" fillOpacity="0.2" />
                          <text x="620" y="165" fill="#38bdf8" fontSize="11" textAnchor="middle" fontFamily="monospace">Covered Veranda 36m²</text>
                          {/* Core / Elevator & Staircase */}
                          <rect x="360" y="80" width="120" height="110" stroke="#e2e8f0" strokeWidth="2" fill="#24426b" />
                          <text x="420" y="125" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">LIFT & CORE</text>
                          <text x="420" y="145" fill="#C29B61" fontSize="9" textAnchor="middle">Colbeck 750kg</text>
                          {/* Open Plan Work Area */}
                          <text x="420" y="270" fill="#ffffff" fontSize="14" textAnchor="middle" fontFamily="serif" fontWeight="bold">OPEN PLAN OFFICE SUITE (170 m²)</text>
                          <text x="420" y="295" fill="#C29B61" fontSize="11" textAnchor="middle">CBI Bare Panel Encapsulated Raised Floor 31mm</text>
                          {/* Dimension Lines */}
                          <line x1="120" y1="390" x2="680" y2="390" stroke="#94a3b8" strokeWidth="1.5" />
                          <text x="400" y="410" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="monospace">Length: 24.10 m</text>
                        </>
                      ) : selectedCadFloor === 'ground' ? (
                        <>
                          <rect x="80" y="60" width="640" height="320" stroke="#C29B61" strokeWidth="3" fill="#132A4B" fillOpacity="0.6" />
                          <rect x="420" y="100" width="260" height="120" stroke="#fbbf24" strokeWidth="2" fill="#78350f" fillOpacity="0.3" />
                          <text x="550" y="165" fill="#fbbf24" fontSize="12" textAnchor="middle" fontWeight="bold">GRAND RECEPTION LOBBY (84 m²)</text>
                          {/* Parking bays */}
                          <rect x="100" y="90" width="80" height="260" stroke="#34d399" strokeWidth="1.5" fill="#064e3b" fillOpacity="0.3" />
                          <text x="140" y="225" fill="#34d399" fontSize="11" textAnchor="middle" transform="rotate(-90 140 225)">18 PARKING SPACES + 4 EV</text>
                        </>
                      ) : null
                    ) : property.id === 'tychonas-sanctuary-villas' ? (
                      <>
                        {/* Villa Plot Boundary */}
                        <rect x="70" y="40" width="660" height="360" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                        <text x="100" y="65" fill="#C29B61" fontSize="10" fontFamily="monospace">Plot Area: 473 m² – 544 m² (Gated Boundary)</text>

                        {/* Villa Ground Floor Footprint */}
                        <rect x="100" y="90" width="360" height="280" stroke="#C29B61" strokeWidth="2.5" fill="#132A4B" fillOpacity="0.6" />
                        
                        {/* Living & Dining Area */}
                        <rect x="110" y="100" width="210" height="160" stroke="#38bdf8" strokeWidth="1.5" fill="#0369a1" fillOpacity="0.15" />
                        <text x="215" y="170" fill="#f8fafc" fontSize="12" textAnchor="middle" fontWeight="bold">OPEN PLAN LIVING & DINING</text>
                        <text x="215" y="190" fill="#cbd5e1" fontSize="10" textAnchor="middle">VRV A/C & Underfloor Heating</text>
                        
                        {/* White Matt Island Kitchen */}
                        <rect x="330" y="100" width="120" height="160" stroke="#fbbf24" strokeWidth="1.5" fill="#78350f" fillOpacity="0.2" />
                        <text x="390" y="165" fill="#fbbf24" fontSize="11" textAnchor="middle" fontWeight="bold">ISLAND KITCHEN</text>
                        <text x="390" y="185" fill="#cbd5e1" fontSize="9" textAnchor="middle">White Matt Finishes</text>
                        
                        {/* Covered Veranda */}
                        <rect x="110" y="270" width="340" height="90" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" fill="#064e3b" fillOpacity="0.2" />
                        <text x="280" y="320" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">COVERED POOL VERANDA (54m² – 59m²)</text>
                        
                        {/* Private Swimming Pool */}
                        <rect x="490" y="110" width="220" height="230" rx="8" stroke="#38bdf8" strokeWidth="3" fill="#0284c7" fillOpacity="0.25" />
                        <text x="600" y="215" fill="#38bdf8" fontSize="14" textAnchor="middle" fontFamily="serif" fontWeight="bold">PRIVATE SWIMMING POOL</text>
                        <text x="600" y="235" fill="#93c5fd" fontSize="11" textAnchor="middle" fontFamily="monospace">32 m² – 36 m² (Tiled Deck & BBQ Zone)</text>

                        {/* Parking driveway */}
                        <rect x="100" y="380" width="180" height="15" fill="#334155" />
                        <text x="190" y="392" fill="#cbd5e1" fontSize="9" textAnchor="middle">2 Covered Parking Spaces</text>
                      </>
                    ) : property.id === 'dasoudi-coastal-penthouses' ? (
                      <>
                        {/* OLiO Residences Flat 201/301 Layout */}
                        <rect x="80" y="60" width="640" height="320" stroke="#C29B61" strokeWidth="2.5" fill="#132A4B" fillOpacity="0.6" />
                        
                        {/* Front Covered Veranda (South) */}
                        <rect x="90" y="70" width="300" height="70" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" fill="#064e3b" fillOpacity="0.25" />
                        <text x="240" y="110" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">FRONT COVERED VERANDA (15 m²)</text>
                        <text x="240" y="125" fill="#a7f3d0" fontSize="9" textAnchor="middle">Mesa Geitonia outlook varies by unit</text>

                        {/* Living & Dining Area */}
                        <rect x="90" y="150" width="300" height="150" stroke="#38bdf8" strokeWidth="1.5" fill="#0369a1" fillOpacity="0.15" />
                        <text x="240" y="215" fill="#f8fafc" fontSize="13" textAnchor="middle" fontWeight="bold">OPEN LIVING & DINING (38 m²)</text>
                        <text x="240" y="235" fill="#cbd5e1" fontSize="10" textAnchor="middle">120×120cm Porcelain • VRV Climate Control</text>

                        {/* Kitchen Suite */}
                        <rect x="90" y="310" width="180" height="60" stroke="#fbbf24" strokeWidth="1.5" fill="#78350f" fillOpacity="0.2" />
                        <text x="180" y="345" fill="#fbbf24" fontSize="10" textAnchor="middle" fontWeight="bold">FITTED KITCHEN</text>

                        {/* Master Bedroom */}
                        <rect x="400" y="70" width="160" height="140" stroke="#94a3b8" strokeWidth="1.5" fill="#24426b" fillOpacity="0.4" />
                        <text x="480" y="130" fill="#f1f5f9" fontSize="11" textAnchor="middle" fontWeight="bold">MASTER BEDROOM</text>
                        <text x="480" y="148" fill="#cbd5e1" fontSize="9" textAnchor="middle">En-Suite & Wardrobes</text>

                        {/* Bedroom 2 */}
                        <rect x="400" y="220" width="160" height="150" stroke="#94a3b8" strokeWidth="1.5" fill="#24426b" fillOpacity="0.4" />
                        <text x="480" y="290" fill="#f1f5f9" fontSize="11" textAnchor="middle" fontWeight="bold">BEDROOM 2</text>
                        <text x="480" y="308" fill="#cbd5e1" fontSize="9" textAnchor="middle">Waterproof Parquet</text>

                        {/* Back Covered Veranda / Option 3rd Bed */}
                        <rect x="570" y="70" width="140" height="300" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5" fill="#581c87" fillOpacity="0.25" />
                        <text x="640" y="200" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold" transform="rotate(-90 640 200)">BACK COVERED VERANDA (15–25 m²)</text>
                        <text x="660" y="200" fill="#e9d5ff" fontSize="9" textAnchor="middle" transform="rotate(-90 660 200)">Optional adaptation is not an approved legal 3rd bedroom</text>
                      </>
                    ) : (
                      <>
                        <rect x="140" y="80" width="520" height="280" stroke="#C29B61" strokeWidth="2" fill="#132A4B" fillOpacity="0.6" />
                        <rect x="160" y="100" width="220" height="150" stroke="#38bdf8" strokeWidth="1.5" fill="#0369a1" fillOpacity="0.2" />
                        <text x="270" y="175" fill="#e2e8f0" fontSize="11" textAnchor="middle">Living & Dining (4.00 × 4.25m)</text>
                        <rect x="400" y="100" width="140" height="150" stroke="#94a3b8" strokeWidth="1.5" />
                        <text x="470" y="175" fill="#e2e8f0" fontSize="11" textAnchor="middle">Master Bed (3.10 × 3.85m)</text>
                        <rect x="160" y="260" width="480" height="80" stroke="#34d399" strokeWidth="2" strokeDasharray="4 4" fill="#064e3b" fillOpacity="0.2" />
                        <text x="400" y="305" fill="#34d399" fontSize="12" textAnchor="middle" fontWeight="bold">Panoramic Sea View Veranda (32 m²)</text>
                      </>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Modal Bottom Action Footer */}
        <div className="sticky bottom-0 z-20 bg-[#F9F9F6] px-6 py-4 border-t border-[#E5E5DC] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#666666] font-light">
              Direct Terms:
            </span>
            <span className="text-xs text-[#1A365D] font-mono flex items-center gap-1 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29B61]" />
              0% Buyer Commission
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/35796373089?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                property.title
              )}%20(${property.district}%2C%20Limassol)%20with%200%25%20commission.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#FBF8F2] hover:bg-[#f3ebe0] text-[#1A365D] border border-[#C29B61] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#C29B61]" />
              <span>WhatsApp (+357 96 373089)</span>
            </a>

            <button
              onClick={() => onInquire(`Schedule Private Viewing: ${property.title}`)}
              className="px-5 py-2.5 bg-[#1A365D] hover:bg-[#132A4B] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              Direct Developer Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

