import React, { useState } from 'react';
import { MessageCircle, Menu, X, Building2, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenInquiry: (propertyTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#F9F9F6]/95 backdrop-blur-md border-b border-[#E5E5DC] text-[#2C2C2C] transition-all duration-300">
      {/* Top micro bar for VIP contact & domain info */}
      <div className="bg-[#F3F3EE] border-b border-[#E5E5DC] px-4 sm:px-8 py-2 text-[11px] text-[#666666] tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#1A365D] uppercase tracking-[0.25em] text-[10px] font-bold font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C29B61] animate-pulse"></span>
              0% Buyer Commission • Direct Developer
            </span>
            <span className="hidden sm:inline text-[#D4D4C8]">|</span>
            <span className="hidden sm:inline text-[#8A8A8A] tracking-widest text-[10px] uppercase font-mono">
              anothercyprus.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex border border-[#D4D4C8] bg-white p-0.5" aria-label="Language selector">
              {(['en', 'ru'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${
                    language === option ? 'bg-[#1A365D] text-white' : 'text-[#1A365D] hover:bg-[#F3F3EE]'
                  }`}
                  aria-pressed={language === option}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={() => onOpenInquiry('Direct Developer Desk')}
              className="inline-flex items-center gap-1.5 text-[#1A365D] hover:text-[#C29B61] transition-colors uppercase tracking-[0.15em] text-[10px] font-mono cursor-pointer font-semibold"
            >
              <Mail className="w-3.5 h-3.5 text-[#C29B61]" />
              <span>Direct Developer Desk</span>
            </button>
            <span className="text-[#D4D4C8]">|</span>
            <a
              href="https://wa.me/35796373089?text=Hello%20Another%20Cyprus%2C%20I%20am%20interested%20in%20direct%20Limassol%20properties%20with%200%25%20commission"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#2C2C2C] hover:text-[#1A365D] transition-colors uppercase tracking-[0.2em] text-[10px] font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp (+357 96 373089)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group py-2">
            <span className="text-xl sm:text-2xl tracking-[0.28em] font-serif uppercase text-[#1A365D] group-hover:text-[#132A4B] transition-colors font-bold">
              Another Cyprus
            </span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C29B61] mt-0.5 group-hover:text-[#AF884E] transition-colors font-semibold">
              Direct Developer Collection
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[11px] uppercase tracking-[0.22em] text-[#666666] font-semibold">
            <a href="#flagship-projects" className="hover:text-[#1A365D] transition-colors">
              Developments
            </a>
            <a href="#districts" className="hover:text-[#1A365D] transition-colors">
              Locations
            </a>
            <a href="#residency" className="hover:text-[#1A365D] transition-colors">
              PR & Taxes
            </a>
            <a href="#about" className="hover:text-[#1A365D] transition-colors">
              Direct Terms
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="bg-[#1A365D] hover:bg-[#132A4B] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#C29B61]" />
              <span>Direct Developer Inquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#2C2C2C] hover:text-[#1A365D] hover:bg-[#F3F3EE] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F9F6] border-b border-[#E5E5DC] px-6 pt-4 pb-8 space-y-5 shadow-lg">
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#666666]">
            <a
              href="#flagship-projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2C2C2C] hover:text-[#1A365D] py-2.5 border-b border-[#E5E5DC]"
            >
              Flagship Developments
            </a>
            <a
              href="#districts"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2C2C2C] hover:text-[#1A365D] py-2.5 border-b border-[#E5E5DC]"
            >
              Strategic Locations
            </a>
            <a
              href="#residency"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2C2C2C] hover:text-[#1A365D] py-2.5 border-b border-[#E5E5DC]"
            >
              Cyprus PR 6.2 & Taxes
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#2C2C2C] hover:text-[#1A365D] py-2.5"
            >
              0% Commission Terms
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#C29B61]" />
              <span>Direct Developer Inquiry</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Direct Developer Email Inquiry');
              }}
              className="w-full py-3.5 border border-[#E5E5DC] bg-white text-[#1A365D] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F3F3EE] font-mono cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#C29B61]" />
              <span>Inquire via Email</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
