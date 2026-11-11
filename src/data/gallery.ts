export interface GalleryItem {
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

export interface GalleryCategory {
  id: string;
  label: string;
  iconName?: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "All Photos", iconName: "Camera" },
  { id: "sahara", label: "Sahara & Dunes", iconName: "Sun" },
  { id: "oasis", label: "Oases & Canyons", iconName: "Palmtree" },
  { id: "architecture", label: "Medina & Heritage", iconName: "Landmark" },
  { id: "adventure", label: "Adventures & Nomads", iconName: "Compass" },
];

export const galleryData: GalleryItem[] = [
  {
    id: "chebika-waterfall",
    title: "Chebika Mountain Oasis Waterfall",
    category: "Mountain Oasis",
    filterCategory: "oasis",
    filterCategories: ["oasis"],
    caption:
      "Crystal-clear natural spring cascading through the terracotta rocks of Chebika canyon into emerald palm basins.",
    image: "/images/gallery-waterfall.jpg",
    alt: "Panoramic view of Chebika mountain oasis waterfall in Tozeur Tunisia with crystal turquoise pools and palm trees in canyon ravines.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "sahara-sunset",
    title: "Golden Sahara Dunes at Sunset",
    category: "Sahara Desert",
    filterCategory: "sahara",
    filterCategories: ["sahara"],
    caption:
      "Sweeping waves of amber and ochre desert dunes glowing under the soft twilight of southern Tunisia.",
    image: "/images/gallery-sunset.jpg",
    alt: "Mesmerizing Saharan sand dunes in Tozeur glowing under warm sunset sky with rich shades of terracotta and warm amber gold.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "medina-brickwork",
    title: "Historic Medina of Ouled El Hadef",
    category: "Heritage Architecture",
    filterCategory: "architecture",
    filterCategories: ["architecture"],
    caption:
      "Unique geometric relief brickwork facades reflecting the centuries-old artisanal masonry of Tozeur.",
    image: "/images/gallery-medina.jpg",
    alt: "Intricate geometric relief brickwork facades of the historic Medina Ouled El Hadef in Tozeur with shaded alleys.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "camel-caravan",
    title: "Saharan Caravan Odyssey",
    category: "Authentic Nomad",
    filterCategory: "adventure",
    filterCategories: ["adventure", "sahara"],
    caption:
      "Nomadic camel trek crossing the horizon near Chott el Djerid as dusk turns the sky into shades of gold and violet.",
    image: "/images/gallery-caravan.jpg",
    alt: "A peaceful camel caravan journeying across open desert plain near Chott el Djerid Tozeur during twilight hours.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "palmeraie-grove",
    title: "Lush Tozeur Palmeraie & Canals",
    category: "Palm Tree Oases",
    filterCategory: "oasis",
    filterCategories: ["oasis"],
    caption:
      "Ancient date palm groves fed by traditional seguias, providing cooling shade and abundant Deglet Nour dates.",
    image: "/images/palmeraie.jpg",
    alt: "Dense lush canopy of date palms in Tozeur oasis with traditional irrigation channels and morning sunshine.",
    aspectSpan: "md:col-span-2",
  },
  {
    id: "desert-4x4-expedition",
    title: "4x4 Desert Thrill at Ong Jmel",
    category: "Outdoor Adventures",
    filterCategory: "adventure",
    filterCategories: ["adventure", "sahara"],
    caption:
      "High-energy four-by-four traverse across pristine desert sands and renowned cinematic landscapes.",
    image: "/images/desert-4x4.jpg",
    alt: "4x4 expedition across desert sand ridges near Ong Jmel in Tozeur, Tunisia under bright Saharan skies.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "chebika-canyon-about",
    title: "Canyon Cliffs of Chebika Oasis",
    category: "Mountain Oasis",
    filterCategory: "oasis",
    filterCategories: ["oasis"],
    caption:
      "Vivid contrasts between scorched desert cliffs and natural turquoise mountain springs in Chebika gorge.",
    image: "/images/chebika-about.jpg",
    alt: "Rugged canyon ravines and emerald palm groves nestled in Chebika mountain oasis.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "medina-culture-art",
    title: "Medina Craftsmanship & Shaded Passages",
    category: "Heritage Architecture",
    filterCategory: "architecture",
    filterCategories: ["architecture"],
    caption:
      "Centuries-old brick vaulting designed to naturally cool the alleys under the radiant desert sun.",
    image: "/images/medina-culture.jpg",
    alt: "Traditional brick vaulted corridors and artisans in Tozeur historic medina.",
    aspectSpan: "md:col-span-1",
  },
  {
    id: "events-banquet-night",
    title: "Starlit Bedouin Gala & Evening Camp",
    category: "Authentic Nomad",
    filterCategory: "sahara",
    filterCategories: ["sahara", "adventure"],
    caption:
      "Evening encampment surrounded by the quiet splendor of the Sahara dunes, carpets, and lanterns.",
    image: "/images/events-banquet.jpg",
    alt: "Exclusive candlelit desert gathering with traditional carpets and lanterns under starry sky.",
    aspectSpan: "md:col-span-1",
  },
];
