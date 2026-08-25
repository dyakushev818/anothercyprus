import React from 'react';
import { Property, PropertyType, LimassolDistrict } from '../types';
import { Search, SlidersHorizontal, X, Sparkles, Building2, Home, CheckCircle2, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

interface PortfolioSearchFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedType: string;
  onTypeChange: (t: string) => void;
  selectedDistrict: string;
  onDistrictChange: (d: string) => void;
  selectedTag: string;
  onTagChange: (tag: string) => void;
  totalCount: number;
  filteredCount: number;
  onReset: () => void;
}

export const PortfolioSearchFilter: React.FC<PortfolioSearchFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedDistrict,
  onDistrictChange,
  selectedTag,
  onTagChange,
  totalCount,
  filteredCount,
  onReset,
}) => {
  const typeOptions = [
    { label: 'All Developments', value: 'ALL' },
    { label: 'Commercial Office (€8.7M)', value: 'Commercial' },
    { label: 'Luxury Villas (€1.43M+)', value: 'Villa' },
    { label: 'Sea-View Apartments (€480k)', value: 'Apartment' },
    { label: 'Sky Penthouses (€890k)', value: 'Penthouse' },
  ];

  const districtOptions = [
    { label: 'All Locations', value: 'ALL' },
    { label: 'Potamos Germasogeias', value: 'Germasogeia' },
    { label: 'Agios Athanasios', value: 'Agios Athanasios' },
    { label: 'Agios Tychonas', value: 'Agios Tychonas' },
  ];

  const tagOptions = [
    { label: 'All Criteria', value: 'ALL', icon: Sparkles },
    { label: '0% Commission (Direct)', value: 'COMMISSION', icon: ShieldCheck },
    { label: 'Fast-Track PR 6.2', value: 'PR', icon: ShieldCheck },
    { label: 'High Yield (≥7.5%)', value: 'ROI', icon: TrendingUp },
    { label: 'All-Inclusive Turnkey', value: 'TURNKEY', icon: Zap },
  ];

  const isFiltered = searchQuery !== '' || selectedType !== 'ALL' || selectedDistrict !== 'ALL' || selectedTag !== 'ALL';

  return (
    <div className="bg-white border border-[#E5E5DC] p-4 sm:p-6 mb-8 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E5E5DC]">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#8A8A8A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by keyword (e.g. office, villa, pool, solar PV, PR 6.2, 400m, turnkey, sea view)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#F9F9F6] border border-[#D4D4C8] focus:border-[#1A365D] text-[#2C2C2C] text-xs sm:text-sm placeholder-[#8A8A8A] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8A8A] hover:text-[#1A365D]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Status Count & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <div className="font-mono text-[#555555]">
            Showing <span className="font-bold text-[#1A365D]">{filteredCount}</span> of <span className="text-[#8A8A8A]">{totalCount} Direct Developments</span>
          </div>

          {isFiltered && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-[11px] font-mono text-[#C29B61] hover:text-[#1A365D] underline uppercase tracking-wider cursor-pointer font-bold"
            >
              <X className="w-3 h-3" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Filter Row 1: Property Type Tabs */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest whitespace-nowrap font-bold">
          Asset Type:
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onTypeChange(opt.value)}
              className={`px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                selectedType === opt.value
                  ? 'bg-[#1A365D] text-white font-bold shadow-xs'
                  : 'bg-[#F9F9F6] text-[#555555] hover:bg-[#F3F3EE] hover:text-[#1A365D] border border-[#E5E5DC]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Row 2: District & Investment Advantage Chips */}
      <div className="pt-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* District Chips */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-mono text-[#8A8A8A] uppercase tracking-widest whitespace-nowrap font-bold">
            Location:
          </span>
          {districtOptions.map((d) => (
            <button
              key={d.value}
              onClick={() => onDistrictChange(d.value)}
              className={`px-2.5 py-1 text-[11px] transition-colors cursor-pointer ${
                selectedDistrict === d.value
                  ? 'bg-[#F3F3EE] text-[#1A365D] font-bold border border-[#1A365D]'
                  : 'bg-[#F9F9F6] text-[#666666] hover:text-[#1A365D] border border-[#E5E5DC]'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Advantage Tag Chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {tagOptions.map((tag) => {
            const Icon = tag.icon;
            return (
              <button
                key={tag.value}
                onClick={() => onTagChange(tag.value)}
                className={`px-2.5 py-1 text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer ${
                  selectedTag === tag.value
                    ? 'bg-[#FBF8F2] text-[#1A365D] border border-[#C29B61] font-bold'
                    : 'bg-[#F9F9F6] text-[#666666] hover:text-[#1A365D] border border-[#E5E5DC]'
                }`}
              >
                <Icon className="w-3 h-3 text-[#C29B61]" />
                <span>{tag.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

