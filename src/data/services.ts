export interface ServiceItem {
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

export interface ServiceCategory {
  id: string;
  label: string;
  iconName?: string;
}

export const serviceCategories: ServiceCategory[] = [
  { id: "all", label: "All Activities", iconName: "Sparkles" },
  { id: "desert", label: "Sahara & Desert", iconName: "Sun" },
  { id: "oasis", label: "Oasis & Nature", iconName: "Palmtree" },
  { id: "culture", label: "Culture & Heritage", iconName: "Landmark" },
  { id: "adventure", label: "Active & Trekking", iconName: "Compass" },
  { id: "custom", label: "Bespoke & Events", iconName: "Crown" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "oasis-mountain",
    title: "Oasis & Mountain Discovery",
    tag: "Oasis Sanctuary",
    category: "oasis",
    categories: ["oasis", "adventure"],
    description:
      "Explore beautiful palm groves, natural oases, mountain landscapes, and hidden gems across southern Tunisia including Chebika, Tamerza, and Midès.",
    iconName: "Palmtree",
    image: "/images/services-oasis-mountain.jpg",
    alt: "Scenic landscape of Tozeur palm groves and mountain oasis canyon at Chebika with lush date palms and desert cliffs.",
    features: [
      "Chebika & Tamerza mountain waterfalls",
      "Traditional Palmeraie irrigation walk",
      "Midès canyon panoramic gorge viewpoints",
    ],
  },
  {
    id: "desert-adventures",
    title: "Desert Adventures",
    tag: "Sahara Odyssey",
    category: "desert",
    categories: ["desert", "adventure"],
    description:
      "Experience the Sahara through unforgettable desert excursions, sunset 4x4 safaris across rolling dunes, and atmospheric Saharan night camps.",
    iconName: "Sun",
    image: "/images/services-desert-adventures.jpg",
    alt: "Four-by-four desert safari expedition vehicle traversing sweeping golden Sahara sand dunes in Tozeur at sunset.",
    features: [
      "4x4 dune bashing & Ong Jmel expedition",
      "Traditional camel caravan at golden hour",
      "Bivouac luxury camping under the stars",
    ],
  },
  {
    id: "culture-heritage",
    title: "Culture & Local Heritage",
    tag: "Architectural Gems",
    category: "culture",
    categories: ["culture"],
    description:
      "Discover traditional brick architecture, historic Medina alleyways, artisanal pottery, date weaving, and the rich thousand-year heritage of Tozeur.",
    iconName: "Landmark",
    image: "/images/services-culture-heritage.jpg",
    alt: "Close-up architectural detail of historical Tozeur Medina Ouled El Hadef with geometric clay brick patterns.",
    features: [
      "Guided tour of Ouled El Hadef 14th-century medina",
      "Artisan pottery, rug weaving, and basketry",
      "Chak Wak cultural park & Eden Palm museum",
    ],
  },
  {
    id: "trekking-cycling",
    title: "Trekking & Cycling",
    tag: "Active Expeditions",
    category: "adventure",
    categories: ["adventure", "oasis"],
    description:
      "Explore breathtaking landscapes through outdoor adventures, guided hiking trails, rocky canyon trekking, and invigorating oasis cycling tours.",
    iconName: "Bike",
    image: "/images/services-trekking-cycling.jpg",
    alt: "Adventurous travelers trekking across desert hills and cycling along palm-lined oasis paths in Tozeur, Tunisia.",
    features: [
      "Palmeraie bike rentals & guided routes",
      "Chebika canyon pedestrian trails",
      "Chott el Djerid mirage walking circuits",
    ],
  },
  {
    id: "events-custom",
    title: "Events & Custom Experiences",
    tag: "Tailor-Made",
    category: "custom",
    categories: ["custom", "desert"],
    description:
      "Enjoy personalized group experiences, corporate retreats, cultural celebrations, private romantic dinners, and tailored activities specifically organized for you.",
    iconName: "Sparkles",
    image: "/images/services-events-custom.jpg",
    alt: "Exclusive luxury candlelit desert banquet setup under a starry sky in the dunes of Tozeur with traditional carpets.",
    features: [
      "Bespoke VIP Saharan candlelit dinners",
      "Corporate team-building & incentive retreats",
      "Private wedding & celebration planning in the dunes",
    ],
  },
  {
    id: "stargazing-bivouac",
    title: "Sahara Stargazing & Bivouac",
    tag: "Nomadic Nights",
    category: "desert",
    categories: ["desert", "custom"],
    description:
      "Spend a magical Saharan night in a luxury nomad bivouac beneath the star-strewn desert sky, with campfire Berber music and storytelling.",
    iconName: "Moon",
    image: "/images/services-stargazing-bivouac.jpg",
    alt: "Romantic Saharan desert luxury camp at dusk with tents and glowing lanterns in the Tozeur desert dunes.",
    features: [
      "Private luxury Bedouin tented encampment",
      "Astronomer-guided night sky constellation tour",
      "Traditional bread cooked in desert embers & mint tea",
    ],
  },
  {
    id: "oasis-gastronomy",
    title: "Oasis Culinary & Date Tasting",
    tag: "Local Flavors",
    category: "culture",
    categories: ["culture", "oasis"],
    description:
      "Immerse in ancient culinary heritage: harvest Deglet Nour dates, discover oasis irrigation, and enjoy authentic Berber farm-to-table lunch.",
    iconName: "Apple",
    image: "/images/services-oasis-gastronomy.jpg",
    alt: "Lush Tozeur date palm grove with artisanal culinary spread and fresh dates.",
    features: [
      "Deglet Nour date harvest & nectar tasting",
      "Traditional bread baking class with local artisans",
      "Authentic multi-course lunch in an ancient palm orchard",
    ],
  },
];
