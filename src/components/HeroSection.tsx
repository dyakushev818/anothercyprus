import React from 'react';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';
interface HeroSectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onScrollToProjects: () => void;
  onOpenInquiry: (topic?: string) => void;
}
export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToProjects, onOpenInquiry }) => {
  const { language } = useLanguage();
  const ru = language === 'ru';
  return (
    <section className="border-b border-[#E5E5DC] bg-[#F3F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 lg:flex lg:items-center lg:justify-between gap-8">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#AF884E] mb-2">{ru ? 'Четыре проекта · Лимассол, Кипр' : 'Four projects · Limassol, Cyprus'}</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A365D] leading-tight">{ru ? 'Офисы, квартиры и виллы в Лимассоле от застройщиков' : 'Offices, apartments and villas in Limassol direct from developers'}</h1>
          <p className="text-sm text-[#555555] mt-3 leading-relaxed">{ru ? 'Сравните четыре проекта. Запросите актуальное наличие, планы и условия покупки напрямую у отдела продаж.' : 'Explore four projects. Request current availability, floor plans and purchase terms directly from the sales desk.'}</p>
        </div>
        <div className="flex flex-wrap lg:flex-col gap-3 mt-5 lg:mt-0 shrink-0">
          <button onClick={onScrollToProjects} className="bg-[#1A365D] hover:bg-[#132A4B] text-white px-5 py-3 text-xs font-bold cursor-pointer">{ru ? 'Смотреть четыре проекта' : 'View four projects'}</button>
          <button onClick={() => onOpenInquiry('Current Plans, Prices & Availability')} className="border border-[#D4D4C8] bg-white px-5 py-3 text-xs font-semibold text-[#1A365D] cursor-pointer hover:bg-[#F9F9F6]">{ru ? 'Запросить планы и наличие' : 'Request plans & availability'}</button>
        </div>
      </div>
    </section>
  );
};
