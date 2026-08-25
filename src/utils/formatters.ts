import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  EUR: { symbol: '€', rate: 1.0, label: 'EUR (€)' },
  USD: { symbol: '$', rate: 1.08, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.86, label: 'GBP (£)' },
};

export function formatPrice(priceEUR: number, currency: Currency = 'EUR'): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  const converted = Math.round(priceEUR * rate);
  return `${symbol}${converted.toLocaleString('en-US')}`;
}

export function formatArea(sqm: number, unit: 'sqm' | 'sqft' = 'sqm'): string {
  if (unit === 'sqft') {
    const sqft = Math.round(sqm * 10.7639);
    return `${sqft.toLocaleString('en-US')} sq ft`;
  }
  return `${sqm} m²`;
}
