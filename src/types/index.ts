export type ServiceCategory = 'producto' | 'servicio';

export interface CommercialOffering {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  iconName: string;
  imageSrc: string;
  slug: string;
  highlightBenefit: string;
  badgeText: string;
}

export interface PlanFeature {
  id: number;
  text: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  periodText?: string;
  subtitle: string;
  disclaimer: string;
  features: PlanFeature[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  isDemo: boolean;
  statusLabel: string;
  imageSrc: string;
  linkText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  verifiedStatus: string;
  rating?: number;
}

export interface ContactModalContextType {
  isOpen: boolean;
  preselectedProduct?: string;
  preselectedPlan?: string;
  preselectedPrice?: string;
  originPage?: string;
  openModal: (options?: {
    product?: string;
    plan?: string;
    price?: string;
    origin?: string;
  }) => void;
  closeModal: () => void;
}

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  advertising: boolean;
  preferences: boolean;
  timestamp: number;
  version: string;
}

export interface CookieContextType {
  preferences: CookiePreferences | null;
  hasConsented: boolean;
  showBanner: boolean;
  showPreferencesModal: boolean;
  showPolicyModal: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (prefs: { analytics: boolean; advertising: boolean; preferences: boolean }) => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
  openPolicyModal: () => void;
  closePolicyModal: () => void;
}

export interface LandingPageContent {
  slug: string;
  category: ServiceCategory;
  serviceName: string;
  tagline: string;
  headlineH1: string;
  heroParagraph: string;
  heroImage: string;
  trustPillars: { title: string; desc: string }[];
  editorialTitle: string;
  editorialText: string;
  editorialImage: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  pricingSection: {
    title: string;
    subtitle: string;
    scopeEvaluation: string[];
    scopeInclusions: string[];
    scopeProposals: string[];
    highlightPlan?: {
      name: string;
      price: string;
      features: string[];
    };
  };
  processSteps: {
    number: string;
    step: string;
    description: string;
  }[];
  portfolioItems: {
    title: string;
    category: string;
    summary: string;
    technologies: string;
    isDemo: boolean;
    imageSrc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
