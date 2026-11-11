export interface EventItem {
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

export const eventsData: EventItem[] = [
  {
    id: "sahara-stargazing",
    title: "Sahara Sunset Stargazing & Campfire",
    tag: "Seasonal Excursion",
    datePlaceholder: "[October – April Season]",
    location: "Ong Jmel & Tozeur Dunes",
    description:
      "Gather around a traditional fire under one of the world’s clearest night skies, accompanied by Saharan mint tea and Berber astronomy storytelling.",
    image: "/images/events-banquet.jpg",
    alt: "Sahara desert evening campfire setting with lanterns and rugs under a starry sky.",
    iconName: "Moon",
    duration: "4 to 5 Hours (Sunset to Midnight)",
    groupSize: "Small Group or Private VIP",
    highlights: [
      "Stargazing under one of the clearest, unpolluted night skies in North Africa",
      "Traditional campfire tea ritual with fresh Saharan mint and desert dates",
      "Berber ancestral astronomy storytelling and desert constellations folklore",
      "Sunset photography over the rolling golden sand dunes of Ong Jmel",
    ],
    included: [
      "Roundtrip 4x4 expedition transport from your hotel in Tozeur",
      "Traditional Bedouin campfire setup with carpets and lanterns",
      "Experienced local guide & astronomy storyteller",
      "Hot Saharan mint tea, mineral water, and traditional pastries",
    ],
    practicalInfo:
      "Suitable for families and couples. Warm layers are recommended as desert temperatures drop after sunset.",
  },
  {
    id: "date-harvest",
    title: "Date Palm Harvest & Culinary Journey",
    tag: "Harvest Experience",
    datePlaceholder: "[Autumn Season Event]",
    location: "Tozeur Ancient Palmeraie",
    description:
      "Experience the historic Deglet Nour date harvest, meet local farmers, and taste traditional culinary delicacies prepared in the heart of the oasis.",
    image: "/images/palmeraie.jpg",
    alt: "Golden Deglet Nour date clusters hanging from tall palm trees in the sunny oasis of Tozeur.",
    iconName: "Apple",
    duration: "Half-Day Experience (~4 Hours)",
    groupSize: "Small Group (Max 12 guests)",
    highlights: [
      "Authentic hands-on experience harvesting world-famous Deglet Nour dates",
      "Guided walk along the centuries-old seguia gravity irrigation channels",
      "Live artisanal demonstration of palm-climbing and traditional toolcraft",
      "Curated date tasting flight paired with fresh local goat cheese and organic honey",
    ],
    included: [
      "Private access to a historic heritage Palmeraie estate",
      "Dedicated local oasis agriculturalist and host",
      "Hands-on harvesting workshop and tasting session",
      "Exclusive souvenir box of hand-selected premium Deglet Nour dates",
    ],
    practicalInfo:
      "Comfortable flat walking shoes and sun protection (hat/sunglasses) are recommended.",
  },
  {
    id: "chott-sunrise-trek",
    title: "Chott el Djerid Sunrise & Mountain Trek",
    tag: "Trek & Panorama",
    datePlaceholder: "[Weekly Departures / Private]",
    location: "Chebika & Tamerza Canyons",
    description:
      "Witness the ethereal mirages over the Chott el Djerid salt flats at dawn, followed by an exhilarating guided trail through ancient mountain waterfalls.",
    image: "/images/gallery-waterfall.jpg",
    alt: "Morning sun rising over the rocky desert mountains and canyon spring pools near Tozeur.",
    iconName: "Compass",
    duration: "Full-Day Excursion (~7 Hours)",
    groupSize: "Private or Shared Small Group",
    highlights: [
      "Sunrise mirage phenomenon across the vast, crystalline Chott el Djerid salt flats",
      "Scenic hike through the dramatic sandstone gorges and waterfalls of Chebika oasis",
      "Exploration of the ancient abandoned Berber cliffside villages of Tamerza",
      "Breathtaking panoramic viewpoints overlooking the Atlas Mountains and Sahara edge",
    ],
    included: [
      "Chauffeured high-clearance 4x4 vehicle with air conditioning",
      "Certified mountain & desert trekking guide",
      "Authentic traditional Berber lunch at a local oasis mountain restaurant",
      "Chilled bottled spring water and trekking equipment",
    ],
    practicalInfo:
      "Moderate walking ability required. Please wear sturdy walking/hiking footwear.",
  },
];
