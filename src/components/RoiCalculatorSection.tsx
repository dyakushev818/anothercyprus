import React, { useState, useId } from 'react';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { Calculator, TrendingUp, DollarSign, PieChart, ShieldCheck, ArrowRight } from 'lucide-react';

interface RoiCalculatorSectionProps {
  initialPriceEUR?: number;
  currency: Currency;
  onOpenInquiry: (topic: string) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({
  initialPriceEUR = 750000,
  currency,
  onOpenInquiry,
}) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPriceEUR);
  const [strategy, setStrategy] = useState<'longterm' | 'shortterm'>('longterm');
  const [appreciationRate, setAppreciationRate] = useState<number>(5.5); // % annual growth
  const [managementFeePct, setManagementFeePct] = useState<number>(10); // %

  const priceInputId = useId();
  const growthInputId = useId();
  const mgmtInputId = useId();

  const priceMinEUR = 300000;
  const priceStepEUR = 25000;
  const priceMaxEUR = Math.max(5000000, Math.ceil(initialPriceEUR / 250000) * 250000);
  const priceMidEUR = Math.round(((priceMinEUR + priceMaxEUR) / 2) / priceStepEUR) * priceStepEUR;

  // Calculations based on Limassol market benchmarks
  // Long-term average gross: 7.8% | Short-term average gross: 9.5%
  const grossYieldPct = strategy === 'longterm' ? 7.6 : 9.8;
  const grossAnnualRentEUR = (propertyPrice * grossYieldPct) / 100;
  
  // Expenses
  const managementExpenseEUR = (grossAnnualRentEUR * managementFeePct) / 100;
  const commonExpensesAndMaintEUR = propertyPrice * 0.008; // 0.8% annual common exp & insurance
  const totalAnnualExpensesEUR = managementExpenseEUR + commonExpensesAndMaintEUR;

  const netAnnualRentEUR = grossAnnualRentEUR - totalAnnualExpensesEUR;
  const netYieldPct = Number(((netAnnualRentEUR / propertyPrice) * 100).toFixed(2));
  const netMonthlyCashFlowEUR = Math.round(netAnnualRentEUR / 12);

  // 5 Year Projection (Compounded appreciation + 5 yr cumulative net rent)
  const futurePropertyValueEUR = Math.round(propertyPrice * Math.pow(1 + appreciationRate / 100, 5));
  const capitalGain5YearsEUR = futurePropertyValueEUR - propertyPrice;
  const cumulativeRent5YearsEUR = Math.round(netAnnualRentEUR * 5);
  const total5YearReturnEUR = capitalGain5YearsEUR + cumulativeRent5YearsEUR;
  const totalRoi5YearsPct = Number(((total5YearReturnEUR / propertyPrice) * 100).toFixed(1));

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-[#F9F9F6] text-[#2C2C2C] border-t border-[#E5E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C29B61] font-bold">
            Investment Intelligence
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-serif italic text-[#1A365D] font-bold">
            Yield & Capital Growth Model
          </h2>
          <p className="mt-3 text-[#666666] text-sm sm:text-base font-light leading-relaxed">
            Forecast net cash flow, yields, and 5-year capital appreciation based on current Limassol residential rental metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-white border border-[#E5E5DC] p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E5E5DC] pb-4">
              <span className="font-serif text-lg text-[#1A365D] flex items-center gap-2 font-bold">
                <Calculator className="w-4 h-4 text-[#C29B61]" />
                Scenario Inputs
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A] font-mono font-medium">Interactive Model</span>
            </div>

            {/* Property Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={priceInputId} className="text-[#555555] uppercase tracking-wider font-bold text-[11px]">Property Value</label>
                <span className="font-serif text-lg text-[#1A365D] font-bold">
                  {formatPrice(propertyPrice, currency)}
                </span>
              </div>
              <input
                id={priceInputId}
                type="range"
                min={priceMinEUR}
                max={priceMaxEUR}
                step={priceStepEUR}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E5DC] rounded-none appearance-none cursor-pointer accent-[#1A365D]"
              />
              <div className="flex justify-between text-[10px] text-[#8A8A8A] font-light">
                <span>{formatPrice(priceMinEUR, currency)}</span>
                <span>{formatPrice(priceMidEUR, currency)}</span>
                <span>{formatPrice(priceMaxEUR, currency)}</span>
              </div>
            </div>

            {/* Strategy Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-[#555555] font-bold block">Rental Strategy</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStrategy('longterm')}
                  className={`p-3.5 border text-left transition-all cursor-pointer ${
                    strategy === 'longterm'
                      ? 'bg-[#FBF8F2] border-[#C29B61] text-[#1A365D] shadow-xs'
                      : 'bg-[#F9F9F6] border-[#E5E5DC] text-[#666666] hover:text-[#1A365D]'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A365D]">Long-Term Lease</div>
                  <div className="text-[11px] text-[#666666] mt-1 font-light">High stability, ~7.6% Gross</div>
                </button>

                <button
                  type="button"
                  onClick={() => setStrategy('shortterm')}
                  className={`p-3.5 border text-left transition-all cursor-pointer ${
                    strategy === 'shortterm'
                      ? 'bg-[#FBF8F2] border-[#C29B61] text-[#1A365D] shadow-xs'
                      : 'bg-[#F9F9F6] border-[#E5E5DC] text-[#666666] hover:text-[#1A365D]'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A365D]">Holiday / Short-Let</div>
                  <div className="text-[11px] text-[#666666] mt-1 font-light">Marina/Seafront, ~9.8% Gross</div>
                </button>
              </div>
            </div>

            {/* Annual Capital Appreciation Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={growthInputId} className="text-[#555555] uppercase tracking-wider font-bold text-[11px]">Expected Annual Capital Growth</label>
                <span className="font-serif text-base text-[#1A365D] font-bold">{appreciationRate}% / yr</span>
              </div>
              <input
                id={growthInputId}
                type="range"
                min="2.0"
                max="10.0"
                step="0.5"
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E5DC] rounded-none appearance-none cursor-pointer accent-[#1A365D]"
              />
              <div className="flex justify-between text-[10px] text-[#8A8A8A] font-light">
                <span>2% Conservative</span>
                <span>5.5% Historical Limassol avg</span>
                <span>10% Prime Boom</span>
              </div>
            </div>

            {/* Property Management Fee */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={mgmtInputId} className="text-[#555555] uppercase tracking-wider font-bold text-[11px]">Management & Operating Costs</label>
                <span className="font-serif text-base text-[#1A365D] font-bold">{managementFeePct}% of rent</span>
              </div>
              <input
                id={mgmtInputId}
                type="range"
                min="5"
                max="20"
                step="1"
                value={managementFeePct}
                onChange={(e) => setManagementFeePct(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E5E5DC] rounded-none appearance-none cursor-pointer accent-[#1A365D]"
              />
            </div>
          </div>

          {/* Results Output Dashboard */}
          <div className="lg:col-span-6 bg-white border border-[#E5E5DC] p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#E5E5DC] pb-4">
              <span className="font-serif text-lg text-[#1A365D] flex items-center gap-2 font-bold">
                <TrendingUp className="w-4 h-4 text-[#C29B61]" />
                Projected Net Returns
              </span>
              <span className="text-[10px] uppercase tracking-widest px-3 py-1 bg-[#FBF8F2] border border-[#C29B61]/40 text-[#1A365D] font-bold">
                Net Yield: {netYieldPct}%
              </span>
            </div>

            {/* Core Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9F9F6] p-4 border border-[#E5E5DC] space-y-1">
                <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-bold font-mono">
                  Net Monthly Cash Flow
                </span>
                <div className="text-2xl font-serif text-[#1A365D] font-bold">
                  {formatPrice(netMonthlyCashFlowEUR, currency)}
                  <span className="text-xs text-[#8A8A8A] font-sans font-light ml-1">/mo</span>
                </div>
                <span className="text-[10px] text-[#8A8A8A] font-light block">After management & HOA</span>
              </div>

              <div className="bg-[#F9F9F6] p-4 border border-[#E5E5DC] space-y-1">
                <span className="text-[10px] text-[#8A8A8A] uppercase tracking-widest block font-bold font-mono">
                  Net Annual Rent
                </span>
                <div className="text-2xl font-serif text-[#1A365D] font-bold">
                  {formatPrice(Math.round(netAnnualRentEUR), currency)}
                  <span className="text-xs text-[#8A8A8A] font-sans font-light ml-1">/yr</span>
                </div>
                <span className="text-[10px] text-[#8A8A8A] font-light block">Gross: {formatPrice(Math.round(grossAnnualRentEUR), currency)}</span>
              </div>
            </div>

            {/* 5-Year Wealth Accumulation Card */}
            <div className="p-5 bg-[#F9F9F6] border border-[#E5E5DC] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C29B61] font-bold block font-mono">
                    5-Year Total Projection
                  </span>
                  <div className="text-3xl font-serif text-[#1A365D] font-bold mt-1">
                    {formatPrice(total5YearReturnEUR, currency)}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8A8A] block font-mono">Total 5-Yr ROI</span>
                  <span className="text-2xl font-serif text-[#C29B61] font-bold">+{totalRoi5YearsPct}%</span>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#E5E5DC] text-xs font-light">
                <div className="flex justify-between text-[#555555]">
                  <span>Projected Asset Value in 5 Years:</span>
                  <span className="font-serif text-[#1A365D] font-bold">{formatPrice(futurePropertyValueEUR, currency)}</span>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>Capital Appreciation Gain:</span>
                  <span className="font-serif text-[#1A365D] font-bold">+{formatPrice(capitalGain5YearsEUR, currency)}</span>
                </div>
                <div className="flex justify-between text-[#555555]">
                  <span>5-Year Cumulative Net Rental Income:</span>
                  <span className="font-serif text-[#C29B61] font-bold">+{formatPrice(cumulativeRent5YearsEUR, currency)}</span>
                </div>
              </div>
            </div>

            {/* Tax Note */}
            <div className="p-3.5 bg-[#FBF8F2] border border-[#C29B61]/40 text-xs text-[#2C2C2C] flex items-start gap-2.5 font-light">
              <ShieldCheck className="w-4 h-4 text-[#C29B61] flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#1A365D] font-bold">Cyprus tax note:</strong> Tax treatment depends on residence, domicile, income type, and personal circumstances. Obtain current advice from a qualified Cyprus tax professional.
              </span>
            </div>

            <button
              onClick={() => onOpenInquiry(`Custom ROI Consultation for ${formatPrice(propertyPrice, currency)} property`)}
              className="w-full py-4 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>Request Tailored Property ROI Report</span>
              <ArrowRight className="w-4 h-4 text-[#C29B61]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

