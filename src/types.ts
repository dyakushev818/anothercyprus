export type PropertyType = 'All' | 'Villa' | 'Penthouse' | 'Apartment' | 'Townhouse' | 'Commercial';

export type LimassolDistrict =
  | 'All'
  | 'Germasogeia'
  | 'Agios Athanasios'
  | 'Agios Tychonas';

export type PropertyStatus = 'All' | 'Key Ready' | 'Under Construction' | 'Off-Plan';

export type Currency = 'EUR' | 'USD' | 'GBP';

export interface PropertyUnit {
  unitNumber: string;
  block: string;
  floor: string;
  bedrooms: number;
  bathrooms: number;
  internalM2: number;
  verandaM2: number;
  storageM2: number;
  totalCoveredM2: number;
  parkingSpaces: number;
  priceEUR: number;
  view: string;
  status: 'Available' | 'Sold' | 'Reserved';
  roomDimensions?: {
    livingRoom?: string;
    diningRoom?: string;
    kitchen?: string;
    bedroom1?: string;
    bedroom2?: string;
    coveredVeranda?: string;
  };
}

export interface PropertyFloorBreakdown {
  floor: string;
  coveredM2: number;
  coveredVerandasM2?: number;
  commonAreaM2?: number;
  uncoveredVerandasM2?: number;
  totalAreaM2: number;
  description?: string;
}

export interface TechnicalSpecItem {
  number?: number;
  title: string;
  details: string;
}

export interface Property {
  id: string;
  projectNumber?: number;
  title: string;
  tagline: string;
  district: Exclude<LimassolDistrict, 'All'>;
  type: Exclude<PropertyType, 'All'>;
  priceEUR: number;
  bedrooms: number;
  bathrooms: number;
  coveredAreaM2: number;
  plotAreaM2?: number;
  verandaAreaM2: number;
  distanceToBeachM: number;
  status: Exclude<PropertyStatus, 'All'>;
  completionDate: string;
  prEligible: boolean;
  rentalYieldEstimated: number; // in percentage e.g. 7.5
  projectedAnnualIncomeEUR?: number;
  projectedMonthlyIncomeEUR?: number;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  description: string;
  highlights: string[];
  energyEfficiency: 'A+' | 'A';
  featured?: boolean;
  architecturalStyle: string;
  specifications: {
    pool: string;
    view: string;
    climate: string;
    security: string;
    parking: string;
    interiors: string;
  };
  availableUnits?: PropertyUnit[];
  floorBreakdown?: PropertyFloorBreakdown[];
  technicalSpecsList?: TechnicalSpecItem[];
  includedInPrice?: string[];
  developerContact?: {
    developers: string;
    phones: string[];
    emails: string[];
    distanceToHighwayMin?: number;
    distanceToBeachMin?: number;
    distanceToEssentialsMin?: number;
    address?: string;
  };
}

export interface DistrictInfo {
  name: Exclude<LimassolDistrict, 'All'>;
  tagline: string;
  description: string;
  avgYield: string;
  lifestyleType: string;
  image: string;
  highlights: string[];
  popularFor: string;
}

export interface InquiryFormData {
  propertyId?: string;
  propertyTitle?: string;
  name: string;
  email: string;
  phone: string;
  preferredChannel: 'WhatsApp' | 'Phone Call' | 'Email' | 'Telegram';
  inquiryType: 'Schedule Private Viewing' | 'Request Investor Pack & Floorplans' | 'Permanent Residency Consultation' | 'General Inquiry';
  budgetRange: string;
  timeline: string;
  notes: string;
}
