export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneClean: string;
  email: string;
  //addressPlaceholder: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  instagramHandle: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
    whatsapp: string;
  };
  navItems: NavItem[];
  brandValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "TOZEUR EXPERIENCE",
  tagline: "Vivez l’essence de Tozeur",
  phone: "+216 54 467 632",
  phoneClean: "+21654467632",
  email: "tozeur.experience@gmail.com",
  //addressPlaceholder: "Rue Abou Kacem Chebbi, Tozeur, Tunisie, 2200",
  mapsUrl: "https://maps.app.goo.gl/DWng5suAVxLYgNHp8",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3310.9290375402056!2d8.1319887!3d33.9172259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1257ebf3dcd148a7%3A0xb29e8e4e573bb94a!2sTOZEUR%20EXPERIENCE!5e0!3m2!1sfr!2stn!4v1794404933268!5m2!1sfr!2stn",
  instagramHandle: "@tozeur.experience",
  socials: {
    instagram: "https://www.instagram.com/tozeur.experience/",
    facebook: "https://www.facebook.com/profile.php?id=61582801710765&locale=ar_AR",
    tiktok: "https://www.tiktok.com/@tozeur.experience?is_from_webapp=1&sender_device=pc",
    whatsapp: "https://wa.me/21654467632",
  },
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ],
  brandValues: [
    {
      title: "Authentic Local Experiences",
      description: "Immerse yourself in real Saharan encounters guided by native connoisseurs.",
      icon: "Handshake",
    },
    {
      title: "Discover the Beauty of Nature",
      description: "Marvel at mountain canyons, crystalline natural waterfalls, and golden dunes.",
      icon: "Mountain",
    },
    {
      title: "Explore Local Culture & Heritage",
      description: "Uncover historical Medina brickwork, artisanal crafts, and centuries of tradition.",
      icon: "Landmark",
    },
    {
      title: "Personalized Adventures",
      description: "Customized private itineraries crafted according to your personal travel desires.",
      icon: "Compass",
    },
  ],
};
