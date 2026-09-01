import React, { useState, useMemo, useEffect } from 'react';
import { PROPERTIES } from './data/properties';
import { Property, Currency } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CommercialSpotlight } from './components/CommercialSpotlight';
import { PropertyCard } from './components/PropertyCard';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { PortfolioSearchFilter } from './components/PortfolioSearchFilter';
import { DistrictExplorer } from './components/DistrictExplorer';
import { ResidencyAndTaxSection } from './components/ResidencyAndTaxSection';
import { SeoFaqSection } from './components/SeoFaqSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { AnalyticsConsent } from './components/AnalyticsConsent';
import { trackLead } from './utils/analytics';
import { MessageCircle, Sparkles, Building2, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';

export default function App() {
  const currency: Currency = 'EUR';

  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [selectedTag, setSelectedTag] = useState('ALL');

  // Modal states
  const [activePropertyModal, setActivePropertyModal] = useState<Property | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState<string>('');

  const commercialPrimeProperty = PROPERTIES.find((p) => p.id === 'germasogeia-corporate-prime') || PROPERTIES[0];

  const handleOpenInquiry = (topic?: string) => {
    setInquiryTopic(topic || '');
    setInquiryModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedType('ALL');
    setSelectedDistrict('ALL');
    setSelectedTag('ALL');
  };

  const scrollToProjects = () => {
    const el = document.getElementById('flagship-projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href;
      if (href.startsWith('https://wa.me/')) trackLead('whatsapp');
      if (href.startsWith('mailto:')) trackLead('email');
      if (href.startsWith('tel:')) trackLead('phone');
    };
    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Type filter
      if (selectedType !== 'ALL' && property.type !== selectedType) {
        return false;
      }

      // District filter
      if (selectedDistrict !== 'ALL' && property.district !== selectedDistrict) {
        return false;
      }

      // Tag filter
      if (selectedTag === 'PR' && !property.prEligible) {
        return false;
      }
      if (selectedTag === 'COMMISSION') {
        return true; // All developments have 0% commission
      }
      if (selectedTag === 'ROI' && (!property.rentalYieldEstimated || property.rentalYieldEstimated < 7.5)) {
        return false;
      }
      if (selectedTag === 'TURNKEY' && (!property.includedInPrice || property.includedInPrice.length === 0)) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = property.title.toLowerCase().includes(q);
        const matchDistrict = property.district.toLowerCase().includes(q);
        const matchTagline = property.tagline.toLowerCase().includes(q);
        const matchType = property.type.toLowerCase().includes(q);
        const matchFeatures = property.features.some((f) => f.toLowerCase().includes(q));
        const matchHighlights = property.highlights.some((h) => h.toLowerCase().includes(q));
        const matchDescription = property.description.toLowerCase().includes(q);
        const matchInclusions = property.includedInPrice?.some((inc) => inc.toLowerCase().includes(q));

        if (
          !matchTitle &&
          !matchDistrict &&
          !matchTagline &&
          !matchType &&
          !matchFeatures &&
          !matchHighlights &&
          !matchDescription &&
          !matchInclusions
        ) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedDistrict, selectedTag]);

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#2C2C2C] flex flex-col selection:bg-[#1A365D] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Hero Showcase for 3 Flagship Projects & High SEO Conversion */}
      <HeroSection
        properties={PROPERTIES}
        onSelectProperty={(p) => setActivePropertyModal(p)}
        onScrollToProjects={scrollToProjects}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Flagship Commercial Spotlight: Germasogeia Corporate Prime (Potamos Germasogeias) */}
      <CommercialSpotlight
        allegroProperty={commercialPrimeProperty}
        currency={currency}
        onSelectProperty={(p) => setActivePropertyModal(p)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main 3 Flagship Projects Portfolio Showcase */}
      <section id="flagship-projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E5DC]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C29B61] font-mono">
                Direct Master Developments Portfolio
              </span>
              <span className="text-[#D4D4C8]">•</span>
              <span className="text-xs text-[#1A365D] font-mono font-semibold bg-[#1A365D]/8 px-2.5 py-0.5 rounded-sm border border-[#1A365D]/15">
                0% Buyer Commission • Direct Developer Terms
              </span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif italic text-[#1A365D]">
              Curated Limassol Developments
            </h2>
            <p className="text-[#666666] text-xs sm:text-sm mt-1 font-light max-w-xl">
              Direct developer terms in prime Limassol locations. Title, eligibility, and residency matters remain subject to independent legal verification and official approval.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenInquiry('Complete Developer Investor Dossier')}
              className="px-5 py-3 bg-white hover:bg-[#F3F3EE] text-[#1A365D] hover:text-[#132A4B] border border-[#D4D4C8] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-xs"
            >
              Request Full Portfolio Dossier
            </button>
          </div>
        </div>

        {/* Real-time Portfolio Search & Filter Bar */}
        <div className="mt-8">
          <PortfolioSearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            totalCount={PROPERTIES.length}
            filteredCount={filteredProperties.length}
            onReset={handleResetFilters}
          />
        </div>

        {/* Portfolio Grid or Empty Results State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                currency={currency}
                onSelect={(p) => setActivePropertyModal(p)}
                onInquire={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white border border-[#E5E5DC] flex flex-col items-center justify-center shadow-xs">
            <p className="text-[#666666] text-sm font-light">
              No developments matched your exact criteria &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2.5 bg-[#1A365D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#132A4B] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All Developments</span>
            </button>
          </div>
        )}
      </section>

      {/* Cyprus Permanent Residency (Category 6.2) & Tax Guide */}
      <ResidencyAndTaxSection onOpenInquiry={handleOpenInquiry} />


      {/* Limassol Strategic Locations & Infrastructure */}
      <DistrictExplorer onSelectDistrict={(d) => {
        const found = PROPERTIES.find(p => p.district === d);
        if (found) {
          setActivePropertyModal(found);
        } else {
          scrollToProjects();
        }
      }} />

      {/* Search Engine Optimization (SEO) & Investor Knowledge Base FAQs */}
      <SeoFaqSection />

      {/* Direct Developer Terms & Standards */}
      <AboutSection onOpenInquiry={() => handleOpenInquiry('Direct Developer Consultation')} />

      {/* Footer */}
      <Footer
        onSelectDistrict={() => scrollToProjects()}
        onOpenInquiry={() => handleOpenInquiry('Direct Consultation')}
      />

      {/* Floating WhatsApp Quick Action Button for Direct Developer Hotline */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/35796373089?text=Hello%2C%20I%20am%20exploring%20the%20Limassol%20flagship%20developments%20on%20AnotherCyprus.com%20with%200%25%20commission."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-2xl hover:shadow-emerald-600/30 transition-all hover:scale-105"
          title="Direct WhatsApp with Developer"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline font-semibold">WhatsApp Developer</span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
        </a>
      </div>

      {/* Global In-Depth Property Detail Modal */}
      {activePropertyModal && (
        <PropertyDetailModal
          property={activePropertyModal}
          currency={currency}
          onClose={() => setActivePropertyModal(null)}
          onInquire={(topic) => handleOpenInquiry(topic)}
        />
      )}

      {/* Global Investor Inquiry & Request Form */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        propertyTitle={inquiryTopic}
      />
      <AnalyticsConsent />
    </div>
  );
}
