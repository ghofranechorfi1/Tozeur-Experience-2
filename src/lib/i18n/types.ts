export type Locale = "en" | "fr" | "ar" | "de" | "it";

export interface NavItemTranslation {
  label: string;
  href: string;
}

export interface BrandValueTranslation {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItemTranslation {
  id: string;
  title: string;
  tag: string;
  category: string;
  categories: string[];
  description: string;
  iconName: string;
  image: string;
  alt: string;
  features: string[];
}

export interface GalleryItemTranslation {
  id: string;
  title: string;
  category: string;
  filterCategory: string;
  filterCategories: string[];
  caption: string;
  image: string;
  alt: string;
  aspectSpan?: string;
}

export interface EventItemTranslation {
  id: string;
  title: string;
  tag: string;
  datePlaceholder: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  iconName: string;
  duration?: string;
  groupSize?: string;
  highlights?: string[];
  included?: string[];
  practicalInfo?: string;
}

export interface Translations {
  locale: Locale;
  dir: "ltr" | "rtl";
  langName: string;
  flag: string;

  nav: {
    items: NavItemTranslation[];
    cta: string;
  };

  hero: {
    overline: string;
    title: string;
    subtitle: string;
    exploreCta: string;
    contactCta: string;
    scrollDown: string;
  };

  about: {
    overline: string;
    title: string;
    description: string;
    landmarkTag: string;
    landmarkTitle: string;
    brandValues: BrandValueTranslation[];
    cta: string;
  };

  services: {
    overline: string;
    title: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    items: ServiceItemTranslation[];
    discoverMore: string;
    noItems: string;
  };

  gallery: {
    overline: string;
    title: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    items: GalleryItemTranslation[];
    noItems: string;
  };

  events: {
    overline: string;
    title: string;
    subtitle: string;
    seeMoreInfos: string;
    dateLabel: string;
    locationLabel: string;
    durationLabel: string;
    capacityLabel: string;
    aboutTitle: string;
    highlightsTitle: string;
    includedTitle: string;
    practicalNoteTitle: string;
    closeBtn: string;
    conciergeNotice: string;
    items: EventItemTranslation[];
  };

  contact: {
    overline: string;
    title: string;
    subtitle: string;
    inquiringAbout: string;
    phoneTitle: string;
    phoneSubtitle: string;
    emailTitle: string;
    emailSubtitle: string;
    addressTitle: string;
    addressValue: string;
    addressSubtitle: string;
    hoursTitle: string;
    hoursValue: string;
    hoursSubtitle: string;
    destinationTag: string;
    destinationTitle: string;
    destinationDesc: string;
    mapsCta: string;
  };

  footer: {
    tagline: string;
    description: string;
    quote: string;
    quickLinks: string;
    experiencesTitle: string;
    contactTitle: string;
    rights: string;
  };

  common: {
    backToTop: string;
    language: string;
  };
}
