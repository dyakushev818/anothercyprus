import React from 'react';
import { LimassolDistrict } from '../types';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectDistrict: (district: LimassolDistrict) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectDistrict, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A365D] text-[#E5E5DC] border-t border-[#132A4B]">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 bg-[#132A4B]/60 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold font-mono">
              0% Buyer Commission • Direct Master Developer
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif italic text-white mt-2 font-bold">
              Ready to acquire directly in Limassol?
            </h3>
            <p className="text-xs sm:text-sm text-[#E5E5DC]/80 mt-2 max-w-xl font-light">
              Schedule a private on-site inspection or request available architectural drawings, financial information, and legal documentation.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenInquiry}
              className="flex-1 md:flex-initial px-8 py-4 bg-[#C29B61] hover:bg-[#b08b53] text-[#1A365D] text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer text-center"
            >
              Contact Developer
            </button>
            <a
              href="https://wa.me/35796373089?text=Hello%2C%20I%20am%20interested%20in%20direct%20developer%20terms%20for%20Limassol%20properties"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C29B61]" />
              <span className="hidden sm:inline">WhatsApp (+357 96 373089)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#C29B61]/40 bg-white/10 flex items-center justify-center text-[#C29B61] font-serif font-bold text-lg">
                AC
              </div>
              <div>
                <div className="font-serif tracking-widest text-lg text-white uppercase font-bold">
                  Another Cyprus
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#C29B61] font-medium font-mono">
                  anothercyprus.com • Limassol Direct
                </div>
              </div>
            </div>

            <p className="text-xs text-[#E5E5DC]/75 leading-relaxed max-w-sm font-light">
              Direct master developer micro-site showcasing prime commercial office headquarters and luxury residences in Limassol with 0% buyer commission.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#E5E5DC]/80 font-light">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                <span>Potamos Germasogeias & Agios Tychonas, Limassol, Cyprus</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                <span>Direct Line / WhatsApp: +357 96 373089</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                <button
                  onClick={() => onOpenInquiry()}
                  className="text-[#C29B61] hover:underline font-mono text-left cursor-pointer"
                >
                  Direct Developer Email Desk
                </button>
              </div>
            </div>
          </div>

          {/* Quick Enclaves */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white tracking-wider font-bold">
              Prime Locations
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E5DC]/70 font-light">
              <li>
                <button
                  onClick={() => onSelectDistrict('Germasogeia')}
                  className="hover:text-[#C29B61] transition-colors cursor-pointer text-left"
                >
                  Potamos Germasogeias
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDistrict('Agios Athanasios')}
                  className="hover:text-[#C29B61] transition-colors cursor-pointer text-left"
                >
                  Agios Athanasios Hills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDistrict('Agios Tychonas')}
                  className="hover:text-[#C29B61] transition-colors cursor-pointer text-left"
                >
                  Agios Tychonas Enclave
                </button>
              </li>
            </ul>
          </div>

          {/* Flagship Developments */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white tracking-wider font-bold">
              Flagship Developments
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E5DC]/70 font-light">
              <li>
                <a href="#properties" className="hover:text-[#C29B61] transition-colors">
                  Germasogeia Corporate Prime
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#C29B61] transition-colors">
                  Athanasios Skyline Suites
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#C29B61] transition-colors">
                  The Tychonas Sanctuary Villas
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#C29B61] transition-colors">
                  OLiO Residences — Mesa Geitonia
                </a>
              </li>
            </ul>
          </div>

          {/* Investor Resources */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-white tracking-wider font-bold">
              Legal & Tax Guides
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E5DC]/70 font-light">
              <li>
                <a href="#residency" className="hover:text-[#C29B61] transition-colors">
                  Cyprus PR Regulation 6.2
                </a>
              </li>
              <li>
                <a href="#residency" className="hover:text-[#C29B61] transition-colors">
                  0% Non-Dom Tax Regime
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C29B61] transition-colors">
                  ROI & Cash Flow Calculator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C29B61] transition-colors">
                  Investor FAQ & Title Deeds
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E5DC]/70 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C29B61]" />
            <span>© {new Date().getFullYear()} Another Cyprus (anothercyprus.com) • Direct Developer Sales • 0% Buyer Commission</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenInquiry()}
              className="text-[#C29B61] hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#C29B61]" />
              <span>Direct Developer Inquiries</span>
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E5E5DC]/70 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
