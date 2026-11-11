import { Translations, Locale } from "./types";

export const translations: Record<Locale, Translations> = {
  // ================= ENGLISH =================
  en: {
    locale: "en",
    dir: "ltr",
    langName: "English",
    flag: "🇬🇧",

    nav: {
      items: [
        { label: "Home", href: "#hero" },
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Gallery", href: "#gallery" },
        { label: "Events", href: "#events" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Discover Tozeur",
    },

    hero: {
      overline: "DISCOVER SOUTHERN TUNISIA",
      title: "Discover the Magic of Tozeur",
      subtitle:
        "From breathtaking desert adventures to peaceful oasis escapes, discover the authentic beauty, culture, and unforgettable experiences of Tozeur.",
      exploreCta: "Explore Our Experiences",
      contactCta: "Contact Us",
      scrollDown: "Scroll Down",
    },

    about: {
      overline: "WHO WE ARE",
      title: "More Than a Journey, An Authentic Experience",
      description:
        "At TOZEUR EXPERIENCE, we believe that discovering a destination means experiencing its soul. We invite you to explore the natural beauty, rich heritage, and unique landscapes of Tozeur through authentic and memorable experiences.",
      landmarkTag: "Iconic Landmark",
      landmarkTitle: "Mountain Oasis of Chebika",
      brandValues: [
        {
          title: "Authentic Local Experiences",
          description:
            "Immerse yourself in real Saharan encounters guided by native connoisseurs.",
          icon: "Handshake",
        },
        {
          title: "Discover the Beauty of Nature",
          description:
            "Marvel at mountain canyons, crystalline natural waterfalls, and golden dunes.",
          icon: "Mountain",
        },
        {
          title: "Explore Local Culture & Heritage",
          description:
            "Uncover historical Medina brickwork, artisanal crafts, and centuries of tradition.",
          icon: "Landmark",
        },
        {
          title: "Personalized Adventures",
          description:
            "Customized private itineraries crafted according to your personal travel desires.",
          icon: "Compass",
        },
      ],
      cta: "Discover Our Experiences",
    },

    services: {
      overline: "WHAT WE OFFER",
      title: "Explore Tozeur Your Way",
      subtitle:
        "Whether you are looking for adventure, relaxation, or cultural discovery, we offer experiences that bring you closer to the essence of Tozeur.",
      categories: [
        { id: "all", label: "All Activities" },
        { id: "desert", label: "Sahara & Desert" },
        { id: "oasis", label: "Oasis & Nature" },
        { id: "culture", label: "Culture & Heritage" },
        { id: "adventure", label: "Active & Trekking" },
        { id: "custom", label: "Bespoke & Events" },
      ],
      items: [
        {
          id: "oasis-mountain",
          title: "Oasis & Mountain Discovery",
          tag: "Oasis Sanctuary",
          category: "oasis",
          categories: ["oasis", "adventure"],
          description:
            "Explore beautiful palm groves, natural oases, mountain landscapes, and hidden gems across southern Tunisia including Chebika, Tamerza, and Midès.",
          iconName: "Palmtree",
          image: "/images/palmeraie.jpg",
          alt: "Scenic landscape of Tozeur palm groves and mountain oasis canyon at Chebika.",
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
          image: "/images/desert-4x4.jpg",
          alt: "Four-by-four desert safari expedition vehicle traversing sweeping golden Sahara sand dunes.",
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
          image: "/images/medina-culture.jpg",
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
          image: "/images/trekking-cycling.jpg",
          alt: "Adventurous travelers trekking across desert hills and cycling along palm paths.",
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
          image: "/images/events-banquet.jpg",
          alt: "Exclusive luxury candlelit desert banquet setup under a starry sky.",
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
          image: "/images/gallery-sunset.jpg",
          alt: "Romantic Saharan desert luxury camp at dusk with tents and glowing lanterns.",
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
          image: "/images/palmeraie.jpg",
          alt: "Lush Tozeur date palm grove with artisanal culinary spread and fresh dates.",
          features: [
            "Deglet Nour date harvest & nectar tasting",
            "Traditional bread baking class with local artisans",
            "Authentic multi-course lunch in an ancient palm orchard",
          ],
        },
      ],
      discoverMore: "Discover More",
      noItems: "No experiences found in this category.",
    },

    gallery: {
      overline: "EXPLORE THE BEAUTY",
      title: "Moments from Tozeur",
      subtitle:
        "Every corner tells a story. Explore the landscapes, adventures, and unforgettable moments that make Tozeur special.",
      categories: [
        { id: "all", label: "All Photos" },
        { id: "sahara", label: "Sahara & Dunes" },
        { id: "oasis", label: "Oases & Canyons" },
        { id: "architecture", label: "Medina & Heritage" },
        { id: "adventure", label: "Adventures & Nomads" },
      ],
      items: [
        {
          id: "chebika-waterfall",
          title: "Chebika Mountain Oasis Waterfall",
          category: "Mountain Oasis",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Crystal-clear natural spring cascading through the terracotta rocks of Chebika canyon into emerald palm basins.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Panoramic view of Chebika mountain oasis waterfall in Tozeur Tunisia.",
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
          alt: "Mesmerizing Saharan sand dunes in Tozeur glowing under warm sunset sky.",
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
          alt: "Intricate geometric relief brickwork facades of the historic Medina Ouled El Hadef.",
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
          alt: "A peaceful camel caravan journeying across open desert plain near Chott el Djerid.",
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
          alt: "Dense lush canopy of date palms in Tozeur oasis with traditional irrigation channels.",
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
          alt: "4x4 expedition across desert sand ridges near Ong Jmel in Tozeur.",
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
      ],
      noItems: "No moments found in this category.",
    },

    events: {
      overline: "WHAT'S HAPPENING",
      title: "Discover Our Events & Special Experiences",
      subtitle:
        "Be part of unique moments and discover Tozeur through special activities, local experiences, and customized adventures.",
      seeMoreInfos: "See more infos",
      dateLabel: "Season / Date",
      locationLabel: "Location",
      durationLabel: "Duration",
      capacityLabel: "Capacity",
      aboutTitle: "About This Experience",
      highlightsTitle: "Experience Highlights",
      includedTitle: "What's Included",
      practicalNoteTitle: "Practical Note:",
      closeBtn: "Close",
      conciergeNotice: "Tozeur Experience · Authentic Sahara & Oasis Journeys",
      items: [
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
      ],
    },

    contact: {
      overline: "LET'S CONNECT",
      title: "Your Next Adventure Starts Here",
      subtitle:
        "Ready to discover Tozeur? Get in touch with our team and let us help you plan your next experience.",
      inquiringAbout: "You are inquiring about:",
      phoneTitle: "Direct Call & WhatsApp",
      phoneSubtitle: "Available for instant inquiries, tour bookings, and custom quotes.",
      emailTitle: "Electronic Mail",
      emailSubtitle: "We reply to bespoke travel and group itineraries within 24 hours.",
      addressTitle: "Our Address",
      addressValue: "Abou Kacem Chebbi Street, Tozeur, Tunisia, 2200",
      addressSubtitle: "Tozeur Oasis & Medina District, Southern Tunisia.",
      hoursTitle: "Operating Hours",
      hoursValue: "Monday – Sunday: 08:00 AM – 08:00 PM (GMT+1)",
      hoursSubtitle: "Daily concierge assistance & private excursion planning.",
      destinationTag: "Destination",
      destinationTitle: "Tozeur, Tunisia",
      destinationDesc:
        "Experience unforgettable desert excursions, mountain oasis treks, and historic medina heritage walks with our local concierge team.",
      mapsCta: "View on Google Maps",
    },

    footer: {
      tagline: "Live the essence of Tozeur",
      description:
        "TOZEUR EXPERIENCE invites you to discover the magic of southern Tunisia through bespoke desert adventures, historic oasis discovery, and authentic local cultural heritage.",
      quote: "“Vivez l’essence de Tozeur”",
      quickLinks: "Quick Navigation",
      experiencesTitle: "Experiences",
      contactTitle: "Contact & Location",
      rights: "All rights reserved. Designed for authentic Saharan hospitality.",
    },

    common: {
      backToTop: "Back to top",
      language: "Language",
    },
  },

  // ================= FRENCH =================
  fr: {
    locale: "fr",
    dir: "ltr",
    langName: "Français",
    flag: "🇫🇷",

    nav: {
      items: [
        { label: "Accueil", href: "#hero" },
        { label: "À propos", href: "#about" },
        { label: "Nos Services", href: "#services" },
        { label: "Galerie", href: "#gallery" },
        { label: "Événements", href: "#events" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Découvrir Tozeur",
    },

    hero: {
      overline: "DÉCOUVREZ LE SUD TUNISIEN",
      title: "Découvrez la magie de Tozeur",
      subtitle:
        "Des aventures palpitantes dans le désert aux paisibles escapades dans les oasis, découvrez la beauté authentique, la culture et les expériences inoubliables de Tozeur.",
      exploreCta: "Explorer nos expériences",
      contactCta: "Contactez-nous",
      scrollDown: "Faire défiler",
    },

    about: {
      overline: "QUI SOMMES-NOUS",
      title: "Plus qu'un voyage, une expérience authentique",
      description:
        "Chez TOZEUR EXPERIENCE, nous croyons que découvrir une destination, c'est ressentir son âme. Nous vous invitons à explorer la beauté naturelle, le riche patrimoine et les paysages uniques de Tozeur à travers des expériences authentiques et mémorables.",
      landmarkTag: "Lieu emblématique",
      landmarkTitle: "Oasis de montagne de Chebika",
      brandValues: [
        {
          title: "Expériences locales authentiques",
          description:
            "Plongez dans des rencontres sahariennes authentiques guidées par des experts natifs.",
          icon: "Handshake",
        },
        {
          title: "Beauté de la nature",
          description:
            "Émerveillez-vous devant les canyons, cascades cristallines et dunes dorées.",
          icon: "Mountain",
        },
        {
          title: "Culture et patrimoine local",
          description:
            "Explorez l'architecture en briques de la Médina, l'artisanat et les traditions séculaires.",
          icon: "Landmark",
        },
        {
          title: "Aventures sur-mesure",
          description:
            "Des itinéraires privés et personnalisés conçus selon vos envies et votre rythme.",
          icon: "Compass",
        },
      ],
      cta: "Découvrir nos expériences",
    },

    services: {
      overline: "CE QUE NOUS OFFRONS",
      title: "Explorez Tozeur à votre façon",
      subtitle:
        "Que vous recherchiez l'aventure, la détente ou la découverte culturelle, nous vous proposons des expériences qui vous rapprochent de l'essence de Tozeur.",
      categories: [
        { id: "all", label: "Toutes les activités" },
        { id: "desert", label: "Sahara & Désert" },
        { id: "oasis", label: "Oasis & Nature" },
        { id: "culture", label: "Culture & Patrimoine" },
        { id: "adventure", label: "Randonnée & Aventure" },
        { id: "custom", label: "Sur-Mesure & Événements" },
      ],
      items: [
        {
          id: "oasis-mountain",
          title: "Découverte des Oasis & Montagnes",
          tag: "Sanctuaire d'Oasis",
          category: "oasis",
          categories: ["oasis", "adventure"],
          description:
            "Explorez les magnifiques palmeraies, les oasis naturelles et les canyons spectaculaires du sud tunisien : Chebika, Tamerza et Midès.",
          iconName: "Palmtree",
          image: "/images/palmeraie.jpg",
          alt: "Paysage de la palmeraie de Tozeur et des oasis de montagne.",
          features: [
            "Cascades et sources d'eau de Chebika & Tamerza",
            "Balade guidée le long des seguias d'irrigation",
            "Points de vue panoramiques sur les gorges de Midès",
          ],
        },
        {
          id: "desert-adventures",
          title: "Aventures Sahariennes",
          tag: "Odyssée du Sahara",
          category: "desert",
          categories: ["desert", "adventure"],
          description:
            "Vivez le Sahara à travers des safaris en 4x4 sur les dunes dorées d'Ong Jmel, des couchers de soleil féeriques et des bivouacs sous les étoiles.",
          iconName: "Sun",
          image: "/images/desert-4x4.jpg",
          alt: "Véhicule 4x4 traversant les dunes dorées du Sahara à Tozeur.",
          features: [
            "Frissons en 4x4 dans les dunes & site d'Ong Jmel",
            "Caravane chamelière traditionnelle au crépuscule",
            "Bivouac nomade tout confort sous la voûte étoilée",
          ],
        },
        {
          id: "culture-heritage",
          title: "Culture & Patrimoine Médina",
          tag: "Joyaux Architecturaux",
          category: "culture",
          categories: ["culture"],
          description:
            "Découvrez l'architecture singulière en briques d'argile d'Ouled El Hadef, les ruelles ombragées, la poterie et le tissage artisanal.",
          iconName: "Landmark",
          image: "/images/medina-culture.jpg",
          alt: "Façade traditionnelle en briques dans la médina de Tozeur.",
          features: [
            "Visite guidée de la médina historique du XIVe siècle",
            "Ateliers de poterie, vannerie et tissage traditionnel",
            "Musée des traditions et parc culturel Chak Wak",
          ],
        },
        {
          id: "trekking-cycling",
          title: "Trekking & Randonnées Vélo",
          tag: "Expéditions Actives",
          category: "adventure",
          categories: ["adventure", "oasis"],
          description:
            "Parcourez des paysages à couper le souffle à pied ou à vélo : sentiers de la palmeraie, gorges rocheuses et mirages du Chott el Djerid.",
          iconName: "Bike",
          image: "/images/trekking-cycling.jpg",
          alt: "Randonneurs et cyclistes dans les sentiers de l'oasis de Tozeur.",
          features: [
            "Circuits vélo guidés au cœur de la palmeraie",
            "Sentiers pédestres dans le canyon de Chebika",
            "Traversée à pied des mirages du Chott el Djerid",
          ],
        },
        {
          id: "events-custom",
          title: "Événements & Expériences Privées",
          tag: "Sur-Mesure",
          category: "custom",
          categories: ["custom", "desert"],
          description:
            "Banquets privés aux chandelles dans les dunes, retraites professionnelles, célébrations uniques et séjours entièrement personnalisés.",
          iconName: "Sparkles",
          image: "/images/events-banquet.jpg",
          alt: "Banquet de luxe sous les étoiles dans les dunes de Tozeur.",
          features: [
            "Dîners VIP raffinés aux chandelles dans le désert",
            "Séminaires d'entreprise et teambuilding mémorables",
            "Célébrations privées et mariages féeriques dans les dunes",
          ],
        },
        {
          id: "stargazing-bivouac",
          title: "Astronomie & Bivouac Saharien",
          tag: "Nuits Nomades",
          category: "desert",
          categories: ["desert", "custom"],
          description:
            "Passez une nuit magique sous l'un des ciels les plus purs d'Afrique, bercé par les contes berbères et le chant du feu de camp.",
          iconName: "Moon",
          image: "/images/gallery-sunset.jpg",
          alt: "Campement saharien au crépuscule avec tentes et lanternes.",
          features: [
            "Tentes nomades de prestige avec literie soignée",
            "Observation des constellations guidée par un conteur",
            "Pain cuit dans le sable de braise & thé à la menthe",
          ],
        },
        {
          id: "oasis-gastronomy",
          title: "Gastronomie d'Oasis & Dégustations",
          tag: "Saveurs Locales",
          category: "culture",
          categories: ["culture", "oasis"],
          description:
            "Récoltez les dattes Deglet Nour, découvrez l'irrigation traditionnelle et savourez un repas berbère de la ferme à la table.",
          iconName: "Apple",
          image: "/images/palmeraie.jpg",
          alt: "Palmeraie de Tozeur avec table garnie de spécialités culinaires.",
          features: [
            "Dégustation comparative de dattes et sirop de palmier",
            "Atelier de préparation du pain traditionnel tabouna",
            "Déjeuner gourmand servi sous les palmiers centenaires",
          ],
        },
      ],
      discoverMore: "En savoir plus",
      noItems: "Aucune expérience trouvée dans cette catégorie.",
    },

    gallery: {
      overline: "EXPLOREZ LA BEAUTÉ",
      title: "Moments de Tozeur",
      subtitle:
        "Chaque recoin raconte une histoire. Découvrez les paysages, les aventures et les moments inoubliables qui font la singularité de Tozeur.",
      categories: [
        { id: "all", label: "Toutes les photos" },
        { id: "sahara", label: "Sahara & Dunes" },
        { id: "oasis", label: "Oasis & Canyons" },
        { id: "architecture", label: "Médina & Patrimoine" },
        { id: "adventure", label: "Aventures & Nomades" },
      ],
      items: [
        {
          id: "chebika-waterfall",
          title: "Cascade de l'Oasis de Chebika",
          category: "Oasis de Montagne",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Source naturelle d'eau cristalline se déversant entre les roches ocre du canyon de Chebika.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Vue panoramique sur la cascade et les palmiers de Chebika.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "sahara-sunset",
          title: "Dunes Dorées du Sahara au Crépuscule",
          category: "Désert du Sahara",
          filterCategory: "sahara",
          filterCategories: ["sahara"],
          caption:
            "Vagues infinies de sable ocre et ambré s'illuminant sous les douces lueurs du soleil couchant.",
          image: "/images/gallery-sunset.jpg",
          alt: "Dunes du Sahara à Tozeur rougeoyantes au coucher du soleil.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-brickwork",
          title: "Médina Historique d'Ouled El Hadef",
          category: "Architecture & Patrimoine",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Façades uniques en briques d'argile aux motifs géométriques, témoignant du savoir-faire séculaire.",
          image: "/images/gallery-medina.jpg",
          alt: "Façades en briques décoratives de la médina d'Ouled El Hadef.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "camel-caravan",
          title: "Caravane Chamelière Saharienne",
          category: "Vie Nomade",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Traversée paisible en dromadaires près du Chott el Djerid lorsque le ciel se pare d'or et de violet.",
          image: "/images/gallery-caravan.jpg",
          alt: "Caravane de chameaux à l'horizon au coucher du soleil.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "palmeraie-grove",
          title: "Palmeraie Luxuriante & Canaux",
          category: "Oasis de Palmiers",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Forêt de palmiers dattiers irriguée par des seguias ancestrales, offrant une fraîcheur bienfaisante.",
          image: "/images/palmeraie.jpg",
          alt: "Canopée dense de palmiers dattiers à Tozeur.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "desert-4x4-expedition",
          title: "Expédition 4x4 à Ong Jmel",
          category: "Aventure en Plein Air",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Franchissement exaltant des crêtes de sable dans les paysages cinématographiques de renommée mondiale.",
          image: "/images/desert-4x4.jpg",
          alt: "4x4 en pleine ascension d'une dune près d'Ong Jmel.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "chebika-canyon-about",
          title: "Falaises du Canyon de Chebika",
          category: "Oasis de Montagne",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Contraste saisissant entre les falaises rocheuses arides et la source d'eau turquoise vivifiante.",
          image: "/images/chebika-about.jpg",
          alt: "Gorges rocheuses et palmiers dans l'oasis de montagne de Chebika.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-culture-art",
          title: "Passages Voûtés & Artisans de la Médina",
          category: "Architecture & Patrimoine",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Voûtes traditionnelles en briques conçues pour rafraîchir naturellement les ruelles sous le soleil du désert.",
          image: "/images/medina-culture.jpg",
          alt: "Couloirs voûtés en briques et artisans dans la médina de Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "events-banquet-night",
          title: "Soirée Bédouine sous les Étoiles",
          category: "Vie Nomade",
          filterCategory: "sahara",
          filterCategories: ["sahara", "adventure"],
          caption:
            "Campement nocturne féerique entouré du silence majestueux des dunes sahariennes et des lanternes.",
          image: "/images/events-banquet.jpg",
          alt: "Banquets aux chandelles avec tapis traditionnels dans le désert.",
          aspectSpan: "md:col-span-1",
        },
      ],
      noItems: "Aucun moment trouvé dans cette catégorie.",
    },

    events: {
      overline: "CE QUI SE PASSE",
      title: "Découvrez nos événements & expériences spéciales",
      subtitle:
        "Participez à des moments uniques et découvrez Tozeur à travers des activités spéciales, des expériences locales et des aventures sur mesure.",
      seeMoreInfos: "Voir plus d'infos",
      dateLabel: "Saison / Date",
      locationLabel: "Lieu",
      durationLabel: "Durée",
      capacityLabel: "Capacité",
      aboutTitle: "À propos de cette expérience",
      highlightsTitle: "Points forts de l'expérience",
      includedTitle: "Ce qui est inclus",
      practicalNoteTitle: "Conseil pratique :",
      closeBtn: "Fermer",
      conciergeNotice: "Tozeur Experience · Voyages authentiques au Sahara",
      items: [
        {
          id: "sahara-stargazing",
          title: "Feu de Camp & Astronomie Saharienne",
          tag: "Excursion Saisonnière",
          datePlaceholder: "[Saison Octobre – Avril]",
          location: "Ong Jmel & Dunes de Tozeur",
          description:
            "Rassemblez-vous autour d'un feu de camp traditionnel sous l'un des ciels les plus étoilés au monde, savourez le thé à la menthe et écoutez les récits d'astronomie berbère.",
          image: "/images/events-banquet.jpg",
          alt: "Soirée au coin du feu dans le désert avec lanternes et tapis berbères.",
          iconName: "Moon",
          duration: "4 à 5 Heures (Coucher du soleil à minuit)",
          groupSize: "Petit groupe ou VIP privé",
          highlights: [
            "Observation des constellations sous un ciel nocturne d'une clarté absolue",
            "Cérémonie authentique du thé saharien et dégustation de dattes fraîches",
            "Légendes et mythologie bédouine racontées au coin du feu",
            "Séance photo au coucher de soleil sur les crêtes de sable d'Ong Jmel",
          ],
          included: [
            "Transport privé aller-retour en 4x4 depuis votre hôtel à Tozeur",
            "Installation bédouine traditionnelle avec tapis, coussins et lanternes",
            "Guide local conteur et astronome passionné",
            "Thé à la menthe chaud, eau minérale et pâtisseries du désert",
          ],
          practicalInfo:
            "Idéal pour familles et couples. Vêtements chauds recommandés car les températures fraîchissent la nuit.",
        },
        {
          id: "date-harvest",
          title: "Récolte des Dattes & Voyage Culinaire",
          tag: "Expérience Saisonnière",
          datePlaceholder: "[Événement d'Automne]",
          location: "Ancienne Palmeraie de Tozeur",
          description:
            "Vivez la récolte ancestrale de la datte Deglet Nour, rencontrez les agriculteurs locaux et dégustez des trésors culinaires au cœur de l'oasis.",
          image: "/images/palmeraie.jpg",
          alt: "Régimes de dattes Deglet Nour dorées suspendues aux palmiers.",
          iconName: "Apple",
          duration: "Demi-journée (~4 Heures)",
          groupSize: "Petit groupe (Max 12 personnes)",
          highlights: [
            "Immersion pratique dans la cueillette des réputées dattes Deglet Nour",
            "Promenade guidée le long des canaux d'irrigation par gravité séculaires",
            "Démonstration d'escalade traditionnelle des troncs de palmiers",
            "Dégustation de dattes d'exception accompagnées de fromage de chèvre et miel pur",
          ],
          included: [
            "Accès exclusif à une palmeraie historique privée",
            "Guide agriculteur passionné natif de Tozeur",
            "Atelier de cueillette et séance de dégustation complète",
            "Coffret souvenir de dattes Deglet Nour fraîchement récoltées",
          ],
          practicalInfo:
            "Chaussures confortables et protection solaire (chapeau/lunettes) recommandées.",
        },
        {
          id: "chott-sunrise-trek",
          title: "Lever de Soleil au Chott & Trek en Montagne",
          tag: "Trek & Panorama",
          datePlaceholder: "[Départs hebdomadaires / Privé]",
          location: "Canyons de Chebika & Tamerza",
          description:
            "Admirez les mirages envoûtants sur l'immensité saline du Chott el Djerid à l'aube, puis partez en randonnée le long des cascades de montagne.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Soleil levant illuminant les montagnes rocheuses et les sources d'eau de Tozeur.",
          iconName: "Compass",
          duration: "Journée complète (~7 Heures)",
          groupSize: "Groupe privé ou partagé",
          highlights: [
            "Spectacle magique des mirages matinaux sur le lac salé du Chott el Djerid",
            "Randonnée à travers les gorges spectaculaires et cascades de Chebika",
            "Exploration des anciens villages berbères perchés et abandonnés de Tamerza",
            "Panoramas grandioses sur la frontière saharienne et les contreforts de l'Atlas",
          ],
          included: [
            "Véhicule 4x4 tout confort climatisé avec chauffeur expérimenté",
            "Guide certifié de randonnée en montagne et désert",
            "Déjeuner berbère traditionnel dans un restaurant d'oasis montagnarde",
            "Eau minérale fraîche et bâtons de randonnée mis à disposition",
          ],
          practicalInfo:
            "Niveau de marche modéré. Veuillez prévoir des chaussures de marche stables.",
        },
      ],
    },

    contact: {
      overline: "CONTACTEZ-NOUS",
      title: "Votre prochaine aventure commence ici",
      subtitle:
        "Prêt à découvrir Tozeur ? Contactez notre équipe et laissez-nous vous aider à concevoir votre prochain séjour sur-mesure.",
      inquiringAbout: "Vous vous renseignez sur :",
      phoneTitle: "Appel direct & WhatsApp",
      phoneSubtitle: "Disponible pour réservations instantanées et devis personnalisés.",
      emailTitle: "Courrier électronique",
      emailSubtitle: "Nous répondons à toutes les demandes sous 24 heures.",
      addressTitle: "Notre adresse",
      addressValue: "Rue Abou Kacem Chebbi, Tozeur, Tunisie, 2200",
      addressSubtitle: "Quartier de l'Oasis & Médina, Tozeur, Sud Tunisien.",
      hoursTitle: "Horaires d'ouverture",
      hoursValue: "Lundi – Dimanche : 08h00 – 20h00 (GMT+1)",
      hoursSubtitle: "Conciergerie quotidienne et organisation d'excursions privées.",
      destinationTag: "Destination",
      destinationTitle: "Tozeur, Tunisie",
      destinationDesc:
        "Vivez des excursions désertiques mémorables, des treks dans les oasis de montagne et des immersions culturelles avec notre équipe locale.",
      mapsCta: "Voir sur Google Maps",
    },

    footer: {
      tagline: "Vivez l’essence de Tozeur",
      description:
        "TOZEUR EXPERIENCE vous invite à découvrir la magie du sud tunisien à travers des aventures personnalisées dans le désert, la découverte des oasis historiques et un patrimoine culturel authentique.",
      quote: "“Vivez l’essence de Tozeur”",
      quickLinks: "Navigation rapide",
      experiencesTitle: "Expériences",
      contactTitle: "Contact & Localisation",
      rights: "Tous droits réservés. L'hospitalité saharienne d'exception.",
    },

    common: {
      backToTop: "Haut de page",
      language: "Langue",
    },
  },

  // ================= ARABIC =================
  ar: {
    locale: "ar",
    dir: "rtl",
    langName: "العربية",
    flag: "🇹🇳",

    nav: {
      items: [
        { label: "الرئيسية", href: "#hero" },
        { label: "من نحن", href: "#about" },
        { label: "خدماتنا", href: "#services" },
        { label: "المعرض", href: "#gallery" },
        { label: "الفعاليات", href: "#events" },
        { label: "اتصل بنا", href: "#contact" },
      ],
      cta: "اكتشف توزر",
    },

    hero: {
      overline: "اكتشف الجنوب التونسي",
      title: "اكتشف سحر وأصالة توزر",
      subtitle:
        "من مغامرات الصحراء الخلابة إلى سكينة الواحات الطبيعية، استمتع بالجمال الأصيل والتراث العريق والتجارب التي لا تُنسى في قلب توزر.",
      exploreCta: "استكشف تجاربنا",
      contactCta: "تواصل معنا",
      scrollDown: "مرر للأسفل",
    },

    about: {
      overline: "من نحن",
      title: "أكثر من مجرد رحلة، إنها تجربة أصيلة",
      description:
        "في توزر إكسبيرينس، نؤمن بأن اكتشاف الوجهة يعني ملامسة روحها الحقيقية. ندعوكم لاستكشاف الطبيعة الساحرة والتراث العريق والمناظر الفريدة لتوزر عبر تجارب أصيلة تبقى في الذاكرة.",
      landmarkTag: "معلم أسطوري",
      landmarkTitle: "واحة الشبيكة الجبلية",
      brandValues: [
        {
          title: "تجارب محلية أصيلة",
          description: "عش أوقاتاً صحراوية حقيقية برفقة مرشدين محليين متمرسين.",
          icon: "Handshake",
        },
        {
          title: "سحر الطبيعة العذراء",
          description: "تأمل روعة الوديان والينابيع الجبلية والشلالات والكثبان الذهبية.",
          icon: "Mountain",
        },
        {
          title: "التراث المعماري والثقافي",
          description: "تعرف على عمارة الآجر التقليدية في المدينة العتيقة والصناعات اليدوية العريقة.",
          icon: "Landmark",
        },
        {
          title: "مغامرات مصممة خصيصاً",
          description: "برامج رحلات خاصة ومخصصة بالكامل وفق رغباتكم واهتماماتكم.",
          icon: "Compass",
        },
      ],
      cta: "اكتشف تجاربنا",
    },

    services: {
      overline: "ما نقدمه",
      title: "استكشف توزر على طريقتك",
      subtitle:
        "سواء كنت تبحث عن المغامرة أو الاسترخاء أو الاكتشاف الثقافي، نقدم لك تجارب استثنائية تقربك من جوهر توزر الحقيقي.",
      categories: [
        { id: "all", label: "جميع الأنشطة" },
        { id: "desert", label: "الصحراء والكثبان" },
        { id: "oasis", label: "الواحات والطبيعة" },
        { id: "culture", label: "الثقافة والتراث" },
        { id: "adventure", label: "مغامرات ومسارات" },
        { id: "custom", label: "تجارب خاصة وفعاليات" },
      ],
      items: [
        {
          id: "oasis-mountain",
          title: "اكتشاف الواحات والجبال",
          tag: "ملاذ الواحات",
          category: "oasis",
          categories: ["oasis", "adventure"],
          description:
            "استكشف واحات النخيل الغناء والينابيع الطبيعية وجبال الشبيكة وتمغزة وميداس الساحرة في الجنوب التونسي.",
          iconName: "Palmtree",
          image: "/images/palmeraie.jpg",
          alt: "منظر طبيعي لواحات توزر وجبال الشبيكة.",
          features: [
            "شلالات وينابيع جبال الشبيكة وتمغزة الطبيعية",
            "جولة مشي بمحاذاة قنوات السواقي التاريخية للري",
            "إطلالات بانورامية خلابة على مضيق ميداس",
          ],
        },
        {
          id: "desert-adventures",
          title: "مغامرات الصحراء الكبرى",
          tag: "ملحمة الصحراء",
          category: "desert",
          categories: ["desert", "adventure"],
          description:
            "عش إثارة الصحراء عبر رحلات سيارات الدفع الرباعي 4x4 في عنق الجمل، وغروب الشمس الأخاذ، والمخيمات الصحراوية تحت النجوم.",
          iconName: "Sun",
          image: "/images/desert-4x4.jpg",
          alt: "سيارة دفع رباعي تجوب كثبان الصحراء الذهبية في توزر.",
          features: [
            "قيادة رباعية مثيرة في الكثبان وموقع عنق الجمل",
            "قافلة جمال تقليدية عند مغيب الشمس الذهبي",
            "مخيمات صحراوية فاخرة تحت قبة النجوم المتلألئة",
          ],
        },
        {
          id: "culture-heritage",
          title: "التراث والمدينة التاريخية",
          tag: "روائع العمارة",
          category: "culture",
          categories: ["culture"],
          description:
            "اكتشف العمارة الهندسية بالآجر الصحراوي، وأزقة أولاد الهادف العتيقة، وحرف الخزف وسعف النخيل وتاريخ توزر الألفي.",
          iconName: "Landmark",
          image: "/images/medina-culture.jpg",
          alt: "تفاصيل معمارية تاريخية في مدينة توزر القديمة.",
          features: [
            "جولة إرشادية في حي أولاد الهادف العائد للقرن 14",
            "صناعات الخزف التقليدي والنسيج وحرف السعف",
            "متحف التقاليد ومنتزه الشاق واق الثقافي",
          ],
        },
        {
          id: "trekking-cycling",
          title: "المسارات وركوب الدراجات",
          tag: "رحلات نشطة",
          category: "adventure",
          categories: ["adventure", "oasis"],
          description:
            "استمتع بالطبيعة عبر مسارات المشي وركوب الدراجات في الواحة، وممرات الوديان الجبلية وتأمل سراب شط الجريد.",
          iconName: "Bike",
          image: "/images/trekking-cycling.jpg",
          alt: "مسافورن يمارسون ركوب الدراجات والمشي بين نخيل توزر.",
          features: [
            "تأجير دراجات ومسارات موجهة داخل واحة النخيل",
            "مسارات مشي جبلية في وادي وشلال الشبيكة",
            "جولات سير على أطراف سراب شط الجريد اللامع",
          ],
        },
        {
          id: "events-custom",
          title: "فعاليات وتجارب مصممة خصيصاً",
          tag: "حسب الطلب",
          category: "custom",
          categories: ["custom", "desert"],
          description:
            "مآدب عشاء خاصة على ضوء الشموع بين الكثبان، رحلات عمل مميزة، واحتفالات رومانسية مصممة بأعلى معايير الفخامة.",
          iconName: "Sparkles",
          image: "/images/events-banquet.jpg",
          alt: "عشاء فاخر على ضوء الشموع تحت سماء الصحراء في توزر.",
          features: [
            "عشاء صحراوي حصري وراقٍ على ضوء الشموع والنجوم",
            "لقاءات أعمال وفعاليات بناء الفريق للشركات",
            "تنظيم مناسبات واحتفالات استثنائية في قلب الصحراء",
          ],
        },
        {
          id: "stargazing-bivouac",
          title: "مراقبة النجوم ومخيم بدوي",
          tag: "ليالي البادية",
          category: "desert",
          categories: ["desert", "custom"],
          description:
            "اقضِ ليلة ساحرة في خيمة بدوية مريحة تحت قبة السماء الصافية مع أنغام الموسيقى البدوية والشاي حول النار.",
          iconName: "Moon",
          image: "/images/gallery-sunset.jpg",
          alt: "مخيم صحراوي رومانسي عند الشفق مع خيام وفوانيس.",
          features: [
            "مخيم بدوي فاخر مع أسرّة مريحة وخصوصية تامة",
            "جلسة فلكية لشرح النجوم والأبراج مع مرشد متخصص",
            "خبز الملة المطهو في الجمر وشاي الصحراء المنعش",
          ],
        },
        {
          id: "oasis-gastronomy",
          title: "مذاقات الواحة وتذوق التمور",
          tag: "نكهات أصيلة",
          category: "culture",
          categories: ["culture", "oasis"],
          description:
            "عش موسم جني دجلة النور الملكية، وتعرف على نظام الري القديم، وتذوق وجبة غداء بربرية طازجة في قلب الواحة.",
          iconName: "Apple",
          image: "/images/palmeraie.jpg",
          alt: "مائدة طعام تقليدية غنية بالتمور في واحة توزر.",
          features: [
            "تذوق أجود أنواع دجلة النور ودبس التمر الطبيعي",
            "ورشة تحضير خبز الطابونة التقليدي مع الحرفيين",
            "غداء شهي أصيل تحت ظلال النخيل الباسق",
          ],
        },
      ],
      discoverMore: "اكتشف المزيد",
      noItems: "لم يتم العثور على أنشطة في هذا التصنيف.",
    },

    gallery: {
      overline: "استكشف الروعة",
      title: "لحظات من توزر",
      subtitle:
        "كل زاوية تروي حكاية. استكشف المناظر الطبيعية والمغامرات واللحظات الخالدة التي تجعل من توزر وجهة لا مثيل لها.",
      categories: [
        { id: "all", label: "جميع الصور" },
        { id: "sahara", label: "الصحراء والكثبان" },
        { id: "oasis", label: "الواحات والوديان" },
        { id: "architecture", label: "المدينة العتيقة والتراث" },
        { id: "adventure", label: "مغامرات البدو" },
      ],
      items: [
        {
          id: "chebika-waterfall",
          title: "شلال واحة الشبيكة الجبلية",
          category: "واحة جبلية",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption: "ينبوع طبيعي عذب ينساب بين صخور الشبيكة الصلصالية ليغذي أحواض النخيل الخضراء.",
          image: "/images/gallery-waterfall.jpg",
          alt: "منظر شلال واحة الشبيكة الجبلية بتوزر تونس.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "sahara-sunset",
          title: "كثبان الصحراء الذهبية عند المغيب",
          category: "صحراء تونس",
          filterCategory: "sahara",
          filterCategories: ["sahara"],
          caption: "أمواج ممتدة من الرمال العنبرية تتلألأ تحت ضوء شمس المغيب الهادئة في الجنوب التونسي.",
          image: "/images/gallery-sunset.jpg",
          alt: "كثبان رملية ساحرة في توزر متوهجة عند الغروب.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-brickwork",
          title: "مدينة أولاد الهادف التاريخية",
          category: "عمارة تراثية",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption: "واجهات منقوشة بالآجر الصحراوي تعكس مهارة البنائين والمعماريين بتوزر عبر القرون.",
          image: "/images/gallery-medina.jpg",
          alt: "واجهات آجر هندسية بالمدينة العتيقة بتوزر.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "camel-caravan",
          title: "قافلة الجمال الصحراوية",
          category: "حياة البادية",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption: "مسير هادئ لقافلة الإبل عند الأفق قرب شط الجريد بينما يتلون الأفق بالذهب والبنفسج.",
          image: "/images/gallery-caravan.jpg",
          alt: "قافلة جمال تسير في الصحراء عند الشفق.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "palmeraie-grove",
          title: "واحة توزر الخضراء وقنوات الري",
          category: "واحة النخيل",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption: "غابات النخيل الباسقة تتغذى من السواقي القديمة لتجود بأشهى تمور دجلة النور التونسية.",
          image: "/images/palmeraie.jpg",
          alt: "واحة نخيل كثيفة وقنوات مياه جارية في توزر.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "desert-4x4-expedition",
          title: "إثارة الدفع الرباعي في عنق الجمل",
          category: "مغامرات صحراوية",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption: "مغامرة حماسية بالدفع الرباعي فوق الكثبان الرملية والمشاهد السينمائية المشهورة عالمياً.",
          image: "/images/desert-4x4.jpg",
          alt: "سيارة دفع رباعي تعبر تلال الرمال قرب عنق الجمل.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "chebika-canyon-about",
          title: "منحدرات وادي الشبيكة الجبلي",
          category: "واحة جبلية",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption: "تباين بديع بين الجروف الصخرية العاتية والمياه الفيروزية الصافية والواحة الخضراء.",
          image: "/images/chebika-about.jpg",
          alt: "مضائق جبلية ونخيل في واحة الشبيكة الجبلية.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-culture-art",
          title: "أزقة المدينة وأصالة الحرفيين",
          category: "عمارة تراثية",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption: "أقواس وممرات تقليدية صُممت لتوفر الظل والنسيم البارد في أزقة المدينة الصحراوية.",
          image: "/images/medina-culture.jpg",
          alt: "أروقة تاريخية وحرفيون في مدينة توزر.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "events-banquet-night",
          title: "سهرة بدوية فاخرة تحت النجوم",
          category: "حياة البادية",
          filterCategory: "sahara",
          filterCategories: ["sahara", "adventure"],
          caption: "جلسة ليلية استثنائية محاطة بسكينة الصحراء والفوانيس المضيئة والسجاد البربري الأصيل.",
          image: "/images/events-banquet.jpg",
          alt: "عشاء فاخر على ضوء الفوانيس بين الكثبان في الصحراء.",
          aspectSpan: "md:col-span-1",
        },
      ],
      noItems: "لم يتم العثور على صور في هذا التصنيف.",
    },

    events: {
      overline: "الفعاليات الحالية",
      title: "اكتشف فعالياتنا وتجاربنا الاستثنائية",
      subtitle:
        "كن جزءاً من لحظات فريدة واكتشف سحر توزر من خلال أنشطة موسمية وبرامج سياحية حصرية ومصممة بعناية.",
      seeMoreInfos: "عرض المزيد من التفاصيل",
      dateLabel: "الموسم / التاريخ",
      locationLabel: "الموقع",
      durationLabel: "المدة",
      capacityLabel: "السعة",
      aboutTitle: "عن هذه التجربة",
      highlightsTitle: "أبرز مميزات التجربة",
      includedTitle: "ما تشمله التجربة",
      practicalNoteTitle: "ملاحظة هامة:",
      closeBtn: "إغلاق",
      conciergeNotice: "توزر إكسبيرينس · رحلات صحراوية وأصالة تونسية",
      items: [
        {
          id: "sahara-stargazing",
          title: "سهرة النار ورصد نجوم الصحراء",
          tag: "رحلة موسمية",
          datePlaceholder: "[موسم أكتوبر – أبريل]",
          location: "عنق الجمل وكثبان توزر",
          description:
            "اجتمع حول نار المخيم التقليدي تحت صفاء السماء الصحراوية وتذوق الشاي بالنعناع واستمع لحكايات الفلك البدوية.",
          image: "/images/events-banquet.jpg",
          alt: "جلسة مسائية حول النار وفوانيس وسجاد بربري تحت سماء مرصعة بالنجوم.",
          iconName: "Moon",
          duration: "4 إلى 5 ساعات (من الغروب حتى منتصف الليل)",
          groupSize: "مجموعة صغيرة أو VIP خاص",
          highlights: [
            "تأمل النجوم والأبراج تحت واحدة من أصفى سماء قارة إفريقيا",
            "طقوس إعداد الشاي الصحراوي وتذوق التمور والحلويات المحلية",
            "روايات وأساطير فلكية متوارثة عن البدو الأوائل",
            "جلسة تصوير احترافية عند غروب الشمس فوق كثبان عنق الجمل",
          ],
          included: [
            "تنقل مريح بسيارة دفع رباعي 4x4 ذهاباً وإياباً من فندقك بتوزر",
            "جلسة بدوية مريحة بالسجاد التقليدي والوسائد والفوانيس",
            "مرشد محلي وخبير بالحكايات الفلكية الصحراوية",
            "شاي صحراوي ساخن، مياه معدنية، وحلويات محلية طازجة",
          ],
          practicalInfo:
            "مناسبة للعائلات والأزواج. يُنصح بارتداء ملابس دافئة نظراً لانخفاض درجات الحرارة ليلاً.",
        },
        {
          id: "date-harvest",
          title: "موسم جني التمور ورحلة الطهي الأصيل",
          tag: "تجربة الجني",
          datePlaceholder: "[فعالية موسم الخريف]",
          location: "واحة توزر التاريخية",
          description:
            "عش أجواء الجني التاريخي لتمور دجلة النور، وتعرف على الفلاحين، وتذوق الأطباق التقليدية المحضرة في قلب الواحة.",
          image: "/images/palmeraie.jpg",
          alt: "عراجين تمور دجلة النور الذهبية تتدلى من النخيل في واحة توزر.",
          iconName: "Apple",
          duration: "نصف يوم (~4 ساعات)",
          groupSize: "مجموعة صغيرة (حد أقصى 12 فرداً)",
          highlights: [
            "مشاركة حقيقية في جني تمور دجلة النور التونسية الشهيرة",
            "جولة سير بجانب السواقي التاريخية ونظام تقسيم المياه العادل",
            "عرض حي لتسلق النخيل بالطريقة التقليدية المتوارثة",
            "تذوق فاخر للتمور مع جبن الماعز الطازج والعسل الطبيعي",
          ],
          included: [
            "دخول خاص لبستان نخيل تاريخي وتراثي",
            "مرشد فلاحي محلي متمرس من أبناء الواحة",
            "ورشة جني عملية وجلسة تذوق متكاملة",
            "علبة هدايا فاخرة من أجود تمور دجلة النور المقطوفة حديثاً",
          ],
          practicalInfo:
            "يُفضل ارتداء أحذية مشي مريحة وقبعة ونظارات للحماية من أشعة الشمس.",
        },
        {
          id: "chott-sunrise-trek",
          title: "شروق شط الجريد ومسار الجبال",
          tag: "مسار وبانوراما",
          datePlaceholder: "[رحلات أسبوعية / حجوزات خاصة]",
          location: "مضائق الشبيكة وتمغزة وشط الجريد",
          description:
            "شاهد ظاهرة السراب البصري على مساحات شط الجريد الشاسعة فجراً، ثم انطلق في مسار جبلي مشوق بين الشلالات القديمة.",
          image: "/images/gallery-waterfall.jpg",
          alt: "شروق الشمس الذهبي ينير جبال الصحراء وينابيع واحة توزر.",
          iconName: "Compass",
          duration: "يوم كامل (~7 ساعات)",
          groupSize: "مجموعة خاصة أو مشتركة",
          highlights: [
            "مشهد الشروق الخلاب وظاهرة السراب على بحيرة شط الجريد الملحية",
            "مسار مشي بين الصخور والشلالات الطبيعية في واحة الشبيكة",
            "استكشاف القرى البربرية الحجرية المهجورة في تمغزة",
            "إطلالات مذهلة تشرف على امتداد الصحراء وجبال الأطلس",
          ],
          included: [
            "سيارة دفع رباعي 4x4 حديثة ومكيفة مع سائق متمرس",
            "مرشد سياحي معتمد لمسارات الجبال والصحراء",
            "غداء بربري تقليدي في مطعم جبلي محلي",
            "مياه معدنية مثلجة وعصي للمشي في المسارات",
          ],
          practicalInfo:
            "مستوى المشي متوسط. يرجى ارتداء أحذية مخصصة للمشي والمسارات الصخرية.",
        },
      ],
    },

    contact: {
      overline: "تواصل معنا",
      title: "مغامرتك القادمة تبدأ هنا",
      subtitle:
        "هل أنت مستعد لاكتشاف توزر؟ تواصل مع فريقنا ودعنا نساعدك في التخطيط لرحلتك القادمة بأدق التفاصيل.",
      inquiringAbout: "أنت تستفسر بخصوص:",
      phoneTitle: "اتصال مباشر وواتساب",
      phoneSubtitle: "متاح للحجوزات السريعة والاستفسارات والأسعار المخصصة.",
      emailTitle: "البريد الإلكتروني",
      emailSubtitle: "نرد على كافة طلبات الرحلات المصممة خلال 24 ساعة.",
      addressTitle: "موقعنا",
      addressValue: "نهج أبو القاسم الشابي، توزر، تونس، 2200",
      addressSubtitle: "منطقة الواحة والمدينة العتيقة، توزر، الجنوب التونسي.",
      hoursTitle: "أوقات العمل",
      hoursValue: "الإثنين – الأحد: 08:00 صباحاً – 08:00 مساءً (GMT+1)",
      hoursSubtitle: "خدمة إرشاد ومساعدة سياحية يومية وتنظيم جولات خاصة.",
      destinationTag: "الوجهة",
      destinationTitle: "توزر، تونس",
      destinationDesc:
        "عش تجارب لا تُنسى في الصحراء، ومسارات الواحات الجبلية، والجولات التراثية في المدينة القديمة برفقة مرشدينا المحليين.",
      mapsCta: "عرض على خرائط Google",
    },

    footer: {
      tagline: "عش جوهر وأصالة توزر",
      description:
        "تدعوكم توزر إكسبيرينس لاكتشاف سحر الجنوب التونسي من خلال رحلات صحراوية مصممة، واكتشاف الواحات التاريخية، والتراث الثقافي الأصيل.",
      quote: "“عش جوهر وأصالة توزر”",
      quickLinks: "روابط سريعة",
      experiencesTitle: "التجارب والأنشطة",
      contactTitle: "التواصل والموقع",
      rights: "جميع الحقوق محفوظة. صُمم للاحتفاء بكرم الضيافة الصحراوية.",
    },

    common: {
      backToTop: "الرجوع للأعلى",
      language: "اللغة",
    },
  },

  // ================= GERMAN =================
  de: {
    locale: "de",
    dir: "ltr",
    langName: "Deutsch",
    flag: "🇩🇪",

    nav: {
      items: [
        { label: "Startseite", href: "#hero" },
        { label: "Über uns", href: "#about" },
        { label: "Unsere Angebote", href: "#services" },
        { label: "Galerie", href: "#gallery" },
        { label: "Erlebnisse", href: "#events" },
        { label: "Kontakt", href: "#contact" },
      ],
      cta: "Tozeur entdecken",
    },

    hero: {
      overline: "ENTDECKEN SIE SÜDTUNESIEN",
      title: "Entdecken Sie die Magie von Tozeur",
      subtitle:
        "Von atemberaubenden Wüstenabenteuern bis hin zu friedlichen Oasenerlebnissen: Entdecken Sie die authentische Schönheit, Kultur und unvergessliche Momente in Tozeur.",
      exploreCta: "Erlebnisse entdecken",
      contactCta: "Kontaktieren Sie uns",
      scrollDown: "Nach unten scrollen",
    },

    about: {
      overline: "ÜBER UNS",
      title: "Mehr als eine Reise – ein authentisches Erlebnis",
      description:
        "Bei TOZEUR EXPERIENCE sind wir überzeugt: Ein Reiseziel zu entdecken bedeutet, seine Seele zu spüren. Wir laden Sie ein, die natürliche Schönheit, das reiche Erbe und die einzigartigen Landschaften von Tozeur durch authentische Erlebnisse zu entdecken.",
      landmarkTag: "Ikonisches Wahrzeichen",
      landmarkTitle: "Bergoase Chebika",
      brandValues: [
        {
          title: "Authentische lokale Erlebnisse",
          description:
            "Tauchen Sie ein in echte Wüstenbegegnungen, geführt von einheimischen Kennern.",
          icon: "Handshake",
        },
        {
          title: "Schönheit der Natur",
          description:
            "Bestaunen Sie Bergschluchten, kristallklare Wasserfälle und goldene Dünen.",
          icon: "Mountain",
        },
        {
          title: "Lokale Kultur & Erbe",
          description:
            "Erkunden Sie die Ziegelarchitektur der Medina, traditionelles Handwerk und alte Bräuche.",
          icon: "Landmark",
        },
        {
          title: "Maßgeschneiderte Abenteuer",
          description:
            "Individuelle private Routen, abgestimmt auf Ihre persönlichen Reisewünsche.",
          icon: "Compass",
        },
      ],
      cta: "Erlebnisse entdecken",
    },

    services: {
      overline: "UNSER ANGEBOT",
      title: "Entdecken Sie Tozeur nach Ihren Wünschen",
      subtitle:
        "Ob Abenteuer, Entspannung oder kulturelle Entdeckungen: Wir bieten Erlebnisse, die Sie der Seele von Tozeur näherbringen.",
      categories: [
        { id: "all", label: "Alle Aktivitäten" },
        { id: "desert", label: "Sahara & Wüste" },
        { id: "oasis", label: "Oasen & Natur" },
        { id: "culture", label: "Kultur & Erbe" },
        { id: "adventure", label: "Aktiv & Trekking" },
        { id: "custom", label: "Maßgeschneidert & Events" },
      ],
      items: [
        {
          id: "oasis-mountain",
          title: "Oasen- & Bergentdeckungen",
          tag: "Oasenoase",
          category: "oasis",
          categories: ["oasis", "adventure"],
          description:
            "Erkunden Sie Palmenhaine, natürliche Bergoasen und Schluchten im Süden Tunesiens wie Chebika, Tamerza und Midès.",
          iconName: "Palmtree",
          image: "/images/palmeraie.jpg",
          alt: "Palmenhaine und Schluchtlandschaft in Tozeur Tunesien.",
          features: [
            "Bergwasserfälle von Chebika & Tamerza",
            "Traditionelle Seguias-Bewässerungsspaziergänge",
            "Spektakuläre Aussichtspunkte über die Midès-Schlucht",
          ],
        },
        {
          id: "desert-adventures",
          title: "Wüstenabenteuer Sahara",
          tag: "Sahara-Odyssee",
          category: "desert",
          categories: ["desert", "adventure"],
          description:
            "Erleben Sie die Sahara bei 4x4-Dünenfahrten in Ong Jmel, stimmungsvollen Sonnenuntergängen und Wüstencamps unter dem Sternenhimmel.",
          iconName: "Sun",
          image: "/images/desert-4x4.jpg",
          alt: "4x4 Geländewagen in den goldenen Saharadünen von Tozeur.",
          features: [
            "4x4 Dünensafari & Ong Jmel Filmlocations",
            "Traditionelle Kamelkarawane zur goldenen Stunde",
            "Komfortables Beduinen-Biwak unter Sternen",
          ],
        },
        {
          id: "culture-heritage",
          title: "Kultur & Medina-Erbe",
          tag: "Architekturperlen",
          category: "culture",
          categories: ["culture"],
          description:
            "Entdecken Sie die Lehmziegelarchitektur von Ouled El Hadef, historische Gassen, Töpferei und jahrhundertealtes Kulturerbe.",
          iconName: "Landmark",
          image: "/images/medina-culture.jpg",
          alt: "Traditionelle Ziegelbauweise in der historischen Medina von Tozeur.",
          features: [
            "Führung durch die Medina aus dem 14. Jahrhundert",
            "Handwerkliche Töpferei, Weberei und Korbflechterei",
            "Traditionsmuseum & Kulturpark Chak Wak",
          ],
        },
        {
          id: "trekking-cycling",
          title: "Trekking & Radtouren",
          tag: "Aktive Touren",
          category: "adventure",
          categories: ["adventure", "oasis"],
          description:
            "Erleben Sie atemberaubende Natur zu Fuß oder per Fahrrad: Oasenpfade, felsige Canyons und weite Salzebenen.",
          iconName: "Bike",
          image: "/images/trekking-cycling.jpg",
          alt: "Wanderer und Radfahrer in der Palmenoase von Tozeur.",
          features: [
            "Fahrradverleih & geführte Routen durch die Palmeraie",
            "Wanderwege durch die Chebika-Bergschlucht",
            "Wanderung über die Fata-Morgana-Ebenen von Chott el Djerid",
          ],
        },
        {
          id: "events-custom",
          title: "Events & Private Erlebnisse",
          tag: "Maßgeschneidert",
          category: "custom",
          categories: ["custom", "desert"],
          description:
            "Exklusive Candle-Light-Dinner in den Dünen, Firmenseminare, private Feiern und maßgeschneiderte Erlebnisse.",
          iconName: "Sparkles",
          image: "/images/events-banquet.jpg",
          alt: "Exklusives Wüstenbankett unter den Sternen in Tozeur.",
          features: [
            "VIP-Dinner bei Kerzenschein in den Saharadünen",
            "Unvergessliche Firmen-Incentives & Teambuildings",
            "Private Feiern & Hochzeitsarrangements im Wüstensand",
          ],
        },
        {
          id: "stargazing-bivouac",
          title: "Sternenbeobachtung & Beduinen-Biwak",
          tag: "Nomadennächte",
          category: "desert",
          categories: ["desert", "custom"],
          description:
            "Verbringen Sie eine magische Nacht in einem komfortablen Beduinencamp unter einem der klarsten Nachthimmel der Welt.",
          iconName: "Moon",
          image: "/images/gallery-sunset.jpg",
          alt: "Romantisches Wüstencamp in der Abenddämmerung mit Laternen.",
          features: [
            "Komfortable Nomadenzelte mit hochwertiger Ausstattung",
            "Geführte Sternenführung mit astronomischen Geschichten",
            "Frisches Beduinenbrot aus der Glut & Pfefferminztee",
          ],
        },
        {
          id: "oasis-gastronomy",
          title: "Oasenküche & Dattelverkostung",
          tag: "Lokale Aromen",
          category: "culture",
          categories: ["culture", "oasis"],
          description:
            "Erleben Sie die Deglet Nour Dattelernte, traditionelle Bewässerung und ein authentisches Berber-Mittagessen direkt in der Oase.",
          iconName: "Apple",
          image: "/images/palmeraie.jpg",
          alt: "Üppiger Palmenhain mit traditionellen Speisen und Datteln.",
          features: [
            "Verkostung feinster Deglet Nour Datteln & Palmensirup",
            "Backkurs für traditionelles Tabouna-Brot",
            "Mehrgängiges Genuss-Mittagessen unter Palmen",
          ],
        },
      ],
      discoverMore: "Mehr erfahren",
      noItems: "Keine Angebote in dieser Kategorie gefunden.",
    },

    gallery: {
      overline: "DIE SCHÖNHEIT ENTDECKEN",
      title: "Momente aus Tozeur",
      subtitle:
        "Jeder Winkel erzählt eine Geschichte. Erkunden Sie die Landschaften und Momente, die Tozeur so einzigartig machen.",
      categories: [
        { id: "all", label: "Alle Fotos" },
        { id: "sahara", label: "Sahara & Dünen" },
        { id: "oasis", label: "Oasen & Schluchten" },
        { id: "architecture", label: "Medina & Erbe" },
        { id: "adventure", label: "Abenteuer & Nomaden" },
      ],
      items: [
        {
          id: "chebika-waterfall",
          title: "Chebika Bergoasen-Wasserfall",
          category: "Bergoase",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Kristallklare Quelle ergießt sich zwischen den Felsen von Chebika in grüne Palmenbecken.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Panoramablick auf den Wasserfall der Bergoase Chebika.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "sahara-sunset",
          title: "Goldene Saharadünen bei Sonnenuntergang",
          category: "Saharawüste",
          filterCategory: "sahara",
          filterCategories: ["sahara"],
          caption:
            "Sanfte Sandwellen leuchten in warmen Ocker- und Bernsteintönen in der Abenddämmerung.",
          image: "/images/gallery-sunset.jpg",
          alt: "Faszinierende Wüstendünen in Tozeur bei Sonnenuntergang.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-brickwork",
          title: "Historische Medina Ouled El Hadef",
          category: "Architekturerbe",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Einzigartige Relief-Ziegelmuster spiegeln die jahrhundertealte Maurerarbeit von Tozeur wider.",
          image: "/images/gallery-medina.jpg",
          alt: "Ziegelmauerwerk der Medina Ouled El Hadef in Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "camel-caravan",
          title: "Saharische Kamelkarawane",
          category: "Nomadenleben",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Friedlicher Kamelzug am Horizont bei Chott el Djerid während der Abenddämmerung.",
          image: "/images/gallery-caravan.jpg",
          alt: "Kamelkarawane auf der weiten Wüstenebene.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "palmeraie-grove",
          title: "Grüne Palmeraie & Bewässerungskanäle",
          category: "Palmenoase",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Uralte Dattelhaine, gespeist von Seguias, spenden kühlenden Schatten und edle Deglet Nour Früchte.",
          image: "/images/palmeraie.jpg",
          alt: "Dichtes Kronendach aus Dattelpalmen in Tozeur.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "desert-4x4-expedition",
          title: "4x4 Wüstenabenteuer in Ong Jmel",
          category: "Outdoor-Abenteuer",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Dynamische Dünendurchquerung durch weltberühmte Wüstenlandschaften.",
          image: "/images/desert-4x4.jpg",
          alt: "Geländewagen auf Sandkämmen nahe Ong Jmel.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "chebika-canyon-about",
          title: "Canyonwände der Oase Chebika",
          category: "Bergoase",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Kontrast zwischen schroffen Felswänden und erfrischenden türkisfarbenen Bergquellen.",
          image: "/images/chebika-about.jpg",
          alt: "Felsenschluchten und Palmen in der Bergoase Chebika.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-culture-art",
          title: "Gewölbegänge & Handwerker der Medina",
          category: "Architekturerbe",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Traditionelle Ziegelgewölbe kühlen die Gassen unter der intensiven Wüstensonne.",
          image: "/images/medina-culture.jpg",
          alt: "Historische Ziegelgänge und Handwerker in Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "events-banquet-night",
          title: "Beduinen-Gala unter dem Sternenhimmel",
          category: "Nomadenleben",
          filterCategory: "sahara",
          filterCategories: ["sahara", "adventure"],
          caption:
            "Stimmungsvolles Abendcamp umgeben von der Stille der Saharadünen und Laternen.",
          image: "/images/events-banquet.jpg",
          alt: "Kerzenlicht-Dinner in der Wüste mit Teppichen und Laternen.",
          aspectSpan: "md:col-span-1",
        },
      ],
      noItems: "Keine Bilder in dieser Kategorie gefunden.",
    },

    events: {
      overline: "AKTUELLES & EVENTS",
      title: "Entdecken Sie unsere Events & besonderen Erlebnisse",
      subtitle:
        "Werden Sie Teil einzigartiger Momente und entdecken Sie Tozeur durch besondere Aktivitäten und Erlebnisse.",
      seeMoreInfos: "Mehr Details ansehen",
      dateLabel: "Saison / Datum",
      locationLabel: "Ort",
      durationLabel: "Dauer",
      capacityLabel: "Kapazität",
      aboutTitle: "Über dieses Erlebnis",
      highlightsTitle: "Highlights des Erlebnisses",
      includedTitle: "Inbegriffen",
      practicalNoteTitle: "Praktischer Hinweis:",
      closeBtn: "Schließen",
      conciergeNotice: "Tozeur Experience · Authentische Reisen in die Sahara",
      items: [
        {
          id: "sahara-stargazing",
          title: "Lagerfeuer & Sternenbeobachtung in der Sahara",
          tag: "Saisonale Tour",
          datePlaceholder: "[Saison Oktober – April]",
          location: "Ong Jmel & Dünen von Tozeur",
          description:
            "Versammeln Sie sich am Lagerfeuer unter einem der reinsten Nachthimmel der Welt, genießen Sie Minztee und berberische Sternenkunde.",
          image: "/images/events-banquet.jpg",
          alt: "Lagerfeuer in den Wüstendünen mit Teppichen und Laternen.",
          iconName: "Moon",
          duration: "4 bis 5 Stunden (Sonnenuntergang bis Mitternacht)",
          groupSize: "Kleine Gruppe oder VIP privat",
          highlights: [
            "Beobachtung der Sternbilder unter absolut unverschmutztem Nachthimmel",
            "Traditionelles Tee-Ritual mit frischer Minze und Wüstendatteln",
            "Berberische Sternenmythen und Beduinengeschichten am Feuer",
            "Sonnenuntergangs-Fotografie auf den Dünenkämmen von Ong Jmel",
          ],
          included: [
            "Privater Hin- und Rücktransfer im 4x4 ab Ihrem Hotel in Tozeur",
            "Traditionelles Beduinen-Setup mit Teppichen, Kissen und Laternen",
            "Erfahrener lokaler Guide & Sternen-Erzähler",
            "Heißer Pfefferminztee, Mineralwasser und Wüstenfeingebäck",
          ],
          practicalInfo:
            "Perfekt für Familien und Paare. Warme Kleidung empfohlen, da es nachts kühl wird.",
        },
        {
          id: "date-harvest",
          title: "Dattelernte & Kulinarische Oasentour",
          tag: "Ernte-Erlebnis",
          datePlaceholder: "[Herbst-Event]",
          location: "Historische Palmeraie von Tozeur",
          description:
            "Erleben Sie die Deglet Nour Ernte, begegnen Sie Bauern und verkosten Sie Spezialitäten direkt im Herzen der Oase.",
          image: "/images/palmeraie.jpg",
          alt: "Goldene Deglet Nour Datteln an Palmen in der Oase von Tozeur.",
          iconName: "Apple",
          duration: "Halbtägig (~4 Stunden)",
          groupSize: "Kleine Gruppe (Max 12 Gäste)",
          highlights: [
            "Praktisches Mitwirken bei der Ernte der weltberühmten Deglet Nour Datteln",
            "Geführter Rundgang entlang der jahrhundertealten Bewässerungskanäle",
            "Live-Vorführung des traditionellen Palmenkletterns",
          ],
          included: [
            "Exklusiver Zugang zu einem privaten historischen Dattelgut",
            "Einheimischer Oasenfachmann und Gastgeber",
            "Ernteworkshop und ausführliche Verkostungsrunde",
            "Geschenkbox mit frisch geernteten Deglet Nour Datteln",
          ],
          practicalInfo:
            "Bequemes Schuhwerk und Sonnenschutz (Hut/Sonnenbrille) empfohlen.",
        },
        {
          id: "chott-sunrise-trek",
          title: "Sonnenaufgang am Chott & Bergtrekking",
          tag: "Trekking & Panorama",
          datePlaceholder: "[Wöchentliche Abfahrten / Privat]",
          location: "Schluchten von Chebika & Tamerza",
          description:
            "Erleben Sie die Fata Morganas auf dem Salzsee Chott el Djerid im Morgengrauen und wandern Sie entlang von Bergwasserfällen.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Morgensonne über den Felsbergen und Wasserläufen nahe Tozeur.",
          iconName: "Compass",
          duration: "Ganztägig (~7 Stunden)",
          groupSize: "Private oder kleine Gruppe",
          highlights: [
            "Magisches Farbspiel und Luftspiegelungen am Salzsee Chott el Djerid",
            "Wanderung durch die Sandsteinschluchten und Oasenquellen von Chebika",
            "Erkundung der verlassenen alten Berberdörfer von Tamerza",
            "Atemberaubende Panoramablicke über die Wüstenlandschaft",
          ],
          included: [
            "Klimatisierter 4x4 Geländewagen mit ortskundigem Fahrer",
            "Zertifizierter Berg- und Wüstenguide",
            "Traditionelles Berber-Mittagessen in einem Bergoasen-Restaurant",
            "Gekühltes Quellwasser und Wanderstöcke bereitgestellt",
          ],
          practicalInfo:
            "Mittlere Kondition erforderlich. Bitte feste Wanderschuhe tragen.",
        },
      ],
    },

    contact: {
      overline: "KONTAKTIEREN SIE UNS",
      title: "Ihr nächstes Abenteuer beginnt hier",
      subtitle:
        "Bereit, Tozeur zu entdecken? Kontaktieren Sie unser Team und lassen Sie uns Ihre Reise planen.",
      inquiringAbout: "Ihre Anfrage betrifft:",
      phoneTitle: "Direktanruf & WhatsApp",
      phoneSubtitle: "Verfügbar für sofortige Buchungen und individuelle Angebote.",
      emailTitle: "E-Mail",
      emailSubtitle: "Wir beantworten Reiseanfragen innerhalb von 24 Stunden.",
      addressTitle: "Adresse",
      addressValue: "Abou Kacem Chebbi Straße, Tozeur, Tunesien, 2200",
      addressSubtitle: "Oasen- & Medinaviertel, Tozeur, Südtunesien.",
      hoursTitle: "Öffnungszeiten",
      hoursValue: "Montag – Sonntag: 08:00 – 20:00 Uhr (GMT+1)",
      hoursSubtitle: "Täglicher Concierge-Service & private Ausflugsplanung.",
      destinationTag: "Reiseziel",
      destinationTitle: "Tozeur, Tunesien",
      destinationDesc:
        "Erleben Sie Wüstenausflüge, Wanderungen in Bergoasen und Kulturführungen mit unserem Team vor Ort.",
      mapsCta: "Auf Google Maps ansehen",
    },

    footer: {
      tagline: "Erleben Sie die Seele von Tozeur",
      description:
        "TOZEUR EXPERIENCE lädt Sie ein, Südtunesien durch maßgeschneiderte Wüstenreisen, historische Oasen und authentisches Erbe zu entdecken.",
      quote: "“Vivez l’essence de Tozeur”",
      quickLinks: "Schnellnavigation",
      experiencesTitle: "Erlebnisse",
      contactTitle: "Kontakt & Standort",
      rights: "Alle Rechte vorbehalten. Authentische saharische Gastfreundschaft.",
    },

    common: {
      backToTop: "Nach oben",
      language: "Sprache",
    },
  },

  // ================= ITALIAN =================
  it: {
    locale: "it",
    dir: "ltr",
    langName: "Italiano",
    flag: "🇮🇹",

    nav: {
      items: [
        { label: "Home", href: "#hero" },
        { label: "Chi siamo", href: "#about" },
        { label: "I nostri servizi", href: "#services" },
        { label: "Galleria", href: "#gallery" },
        { label: "Eventi", href: "#events" },
        { label: "Contatti", href: "#contact" },
      ],
      cta: "Scopri Tozeur",
    },

    hero: {
      overline: "SCOPRI IL SUD DELLA TUNISIA",
      title: "Scopri la magia di Tozeur",
      subtitle:
        "Dalle emozionanti avventure nel deserto alle oasi di pace, scopri la bellezza autentica, la cultura e le esperienze indimenticabili di Tozeur.",
      exploreCta: "Esplora le nostre esperienze",
      contactCta: "Contattaci",
      scrollDown: "Scorri in basso",
    },

    about: {
      overline: "CHI SIAMO",
      title: "Più di un viaggio, un'esperienza autentica",
      description:
        "In TOZEUR EXPERIENCE crediamo che scoprire una destinazione significhi vivere la sua anima. Vi invitiamo a esplorare la bellezza naturale, il ricco patrimonio e i paesaggi unici di Tozeur attraverso esperienze autentiche e memorabili.",
      landmarkTag: "Luogo emblematico",
      landmarkTitle: "Oasi di montagna di Chebika",
      brandValues: [
        {
          title: "Esperienze locali autentiche",
          description:
            "Vivi incontri sahariani genuini guidati da esperti del territorio.",
          icon: "Handshake",
        },
        {
          title: "Bellezza della natura",
          description:
            "Ammira canyon montani, cascate naturali cristalline e dune dorate.",
          icon: "Mountain",
        },
        {
          title: "Cultura e patrimonio locale",
          description:
            "Scopri l'architettura in mattoni della Medina, l'artigianato e le tradizioni secolari.",
          icon: "Landmark",
        },
        {
          title: "Avventure su misura",
          description:
            "Itinerari privati e personalizzati creati secondo i tuoi desideri di viaggio.",
          icon: "Compass",
        },
      ],
      cta: "Scopri le nostre esperienze",
    },

    services: {
      overline: "COSA OFFRIAMO",
      title: "Esplora Tozeur a modo tuo",
      subtitle:
        "Che tu sia alla ricerca di avventura, relax o scoperta culturale, offriamo esperienze che ti avvicinano all'essenza di Tozeur.",
      categories: [
        { id: "all", label: "Tutte le attività" },
        { id: "desert", label: "Sahara & Deserto" },
        { id: "oasis", label: "Oasi & Natura" },
        { id: "culture", label: "Cultura & Patrimonio" },
        { id: "adventure", label: "Avventura & Trekking" },
        { id: "custom", label: "Su Misura & Eventi" },
      ],
      items: [
        {
          id: "oasis-mountain",
          title: "Scoperta di Oasi e Montagne",
          tag: "Santuario dell'Oasi",
          category: "oasis",
          categories: ["oasis", "adventure"],
          description:
            "Esplora palmeti lussureggianti, oasi naturali e canyon montani nel sud della Tunisia come Chebika, Tamerza e Midès.",
          iconName: "Palmtree",
          image: "/images/palmeraie.jpg",
          alt: "Paesaggio del palmeto di Tozeur e dell'oasi di Chebika.",
          features: [
            "Cascate e sorgenti naturali di Chebika e Tamerza",
            "Passeggiata lungo i tradizionali canali di irrigazione",
            "Punti panoramici spettacolari sulle gole di Midès",
          ],
        },
        {
          id: "desert-adventures",
          title: "Avventure nel Sahara",
          tag: "Odissea Sahariana",
          category: "desert",
          categories: ["desert", "adventure"],
          description:
            "Vivi il Sahara con safari in 4x4 sulle dune di Ong Jmel, tramonti mozzafiato e suggestivi accampamenti sotto le stelle.",
          iconName: "Sun",
          image: "/images/desert-4x4.jpg",
          alt: "Fuoristrada 4x4 sulle dune dorate del deserto di Tozeur.",
          features: [
            "Emozioni in 4x4 sulle dune e nei set di Ong Jmel",
            "Carovana tradizionale di dromedari al tramonto",
            "Bivacco nomade di lusso sotto la volta stellata",
          ],
        },
        {
          id: "culture-heritage",
          title: "Cultura & Patrimonio della Medina",
          tag: "Gioielli Architettonici",
          category: "culture",
          categories: ["culture"],
          description:
            "Scopri l'architettura in mattoni d'argilla di Ouled El Hadef, i vicoli storici, la ceramica e l'eredità millenaria di Tozeur.",
          iconName: "Landmark",
          image: "/images/medina-culture.jpg",
          alt: "Dettagli architettonici in mattoni nella medina storica di Tozeur.",
          features: [
            "Visita guidata della medina trecentesca di Ouled El Hadef",
            "Artigianato di ceramica, tessitura e cesteria",
            "Parco culturale Chak Wak e museo Eden Palm",
          ],
        },
        {
          id: "trekking-cycling",
          title: "Trekking & Escursioni in Bici",
          tag: "Spedizioni Attive",
          category: "adventure",
          categories: ["adventure", "oasis"],
          description:
            "Attraversa paesaggi straordinari a piedi o in bicicletta: sentieri dell'oasi, canyon rocciosi e miraggi di Chott el Djerid.",
          iconName: "Bike",
          image: "/images/trekking-cycling.jpg",
          alt: "Escursionisti e ciclisti tra i sentieri del palmeto di Tozeur.",
          features: [
            "Noleggio bici e itinerari guidati nel palmeto",
            "Sentieri escursionistici nel canyon di Chebika",
            "Passeggiate tra i miraggi della distesa di Chott el Djerid",
          ],
        },
        {
          id: "events-custom",
          title: "Eventi & Esperienze Esclusive",
          tag: "Su Misura",
          category: "custom",
          categories: ["custom", "desert"],
          description:
            "Banchetti privati a lume di candela tra le dune, ritiri aziendali, celebrazioni speciali e soggiorni interamente personalizzati.",
          iconName: "Sparkles",
          image: "/images/events-banquet.jpg",
          alt: "Banchetto esclusivo sotto le stelle nelle dune di Tozeur.",
          features: [
            "Cene VIP a lume di candela nel deserto sahariano",
            "Incentive aziendali e team building indimenticabili",
            "Matrimoni ed eventi privati esclusivi sulle dune",
          ],
        },
        {
          id: "stargazing-bivouac",
          title: "Astronomia & Bivacco Sahariano",
          tag: "Notti Nomadi",
          category: "desert",
          categories: ["desert", "custom"],
          description:
            "Trascorri una notte magica in un accampamento beduino sotto uno dei cieli più limpidi del mondo con musica e tè attorno al fuoco.",
          iconName: "Moon",
          image: "/images/gallery-sunset.jpg",
          alt: "Accampamento nel deserto al crepuscolo con lanterne.",
          features: [
            "Tende nomadi raffinate con il massimo del comfort",
            "Osservazione guidata delle costellazioni con un narratore",
            "Pane tradizionale cotto nella brace e tè alla menta",
          ],
        },
        {
          id: "oasis-gastronomy",
          title: "Cucina dell'Oasi & Degustazione Datteri",
          tag: "Sapori Locali",
          category: "culture",
          categories: ["culture", "oasis"],
          description:
            "Partecipa alla raccolta dei datteri Deglet Nour, scopri l'irrigazione millenaria e assapora un pranzo berbero autentico.",
          iconName: "Apple",
          image: "/images/palmeraie.jpg",
          alt: "Tavola tradizionale imbandita con datteri e specialità dell'oasi.",
          features: [
            "Degustazione di datteri Deglet Nour e nettare di palma",
            "Laboratorio di preparazione del pane tipico tabouna",
            "Pranzo gourmet servito all'ombra di palme secolari",
          ],
        },
      ],
      discoverMore: "Scopri di più",
      noItems: "Nessuna esperienza trovata in questa categoria.",
    },

    gallery: {
      overline: "ESPLORA LA BELLEZZA",
      title: "Momenti da Tozeur",
      subtitle:
        "Ogni angolo racconta una storia. Scopri i paesaggi, le avventure e i momenti indimenticabili che rendono speciale Tozeur.",
      categories: [
        { id: "all", label: "Tutte le foto" },
        { id: "sahara", label: "Sahara & Dune" },
        { id: "oasis", label: "Oasi & Canyon" },
        { id: "architecture", label: "Medina & Patrimonio" },
        { id: "adventure", label: "Avventure & Nomadi" },
      ],
      items: [
        {
          id: "chebika-waterfall",
          title: "Cascata dell'Oasi di Chebika",
          category: "Oasi di Montagna",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Sorgente naturale che scorre tra le rocce d'ocra del canyon di Chebika fino ai palmeti.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Cascata naturale nell'oasi montana di Chebika a Tozeur.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "sahara-sunset",
          title: "Dune Dorate del Sahara al Tramonto",
          category: "Deserto del Sahara",
          filterCategory: "sahara",
          filterCategories: ["sahara"],
          caption:
            "Onde infinite di sabbia dorata che brillano sotto la luce calda del crepuscolo tunisino.",
          image: "/images/gallery-sunset.jpg",
          alt: "Dune del deserto a Tozeur illuminate dalla luce dorata del tramonto.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-brickwork",
          title: "Medina Storica di Ouled El Hadef",
          category: "Architettura & Patrimonio",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Facciate uniche in mattoni d'argilla con motivi geometrici dell'artigianato locale.",
          image: "/images/gallery-medina.jpg",
          alt: "Facciate in mattoni geometrici nella medina di Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "camel-caravan",
          title: "Carovana di Dromedari nel Sahara",
          category: "Vita Nomade",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Carovana all'orizzonte vicino a Chott el Djerid mentre il cielo si tinge d'oro e viola.",
          image: "/images/gallery-caravan.jpg",
          alt: "Carovana di dromedari nella vastità del deserto al crepuscolo.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "palmeraie-grove",
          title: "Palmeto Lussureggiante e Canali",
          category: "Oasi di Palme",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Antichi palmeti irrigati dalle tradizionali seguias, fonte di ombra e datteri Deglet Nour.",
          image: "/images/palmeraie.jpg",
          alt: "Fitta chioma di palme da dattero nell'oasi di Tozeur.",
          aspectSpan: "md:col-span-2",
        },
        {
          id: "desert-4x4-expedition",
          title: "Spedizione 4x4 a Ong Jmel",
          category: "Avventura all'Aperto",
          filterCategory: "adventure",
          filterCategories: ["adventure", "sahara"],
          caption:
            "Attraversamento emozionante delle creste sabbiose in paesaggi cinematografici leggendari.",
          image: "/images/desert-4x4.jpg",
          alt: "4x4 sulle dune vicino a Ong Jmel a Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "chebika-canyon-about",
          title: "Pareti del Canyon di Chebika",
          category: "Oasi di Montagna",
          filterCategory: "oasis",
          filterCategories: ["oasis"],
          caption:
            "Contrasto sorprendente tra aride pareti rocciose e limpide sorgenti montane turchesi.",
          image: "/images/chebika-about.jpg",
          alt: "Canyon e palme nell'oasi montana di Chebika.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "medina-culture-art",
          title: "Passaggi a Volta & Botteghe Artigiane",
          category: "Architettura & Patrimonio",
          filterCategory: "architecture",
          filterCategories: ["architecture"],
          caption:
            "Volte storiche in mattoni studiate per rinfrescare naturalmente i vicoli sotto il sole sahariano.",
          image: "/images/medina-culture.jpg",
          alt: "Corridoi ad arco in mattoni e artigiani a Tozeur.",
          aspectSpan: "md:col-span-1",
        },
        {
          id: "events-banquet-night",
          title: "Serata Beduina sotto le Stelle",
          category: "Vita Nomade",
          filterCategory: "sahara",
          filterCategories: ["sahara", "adventure"],
          caption:
            "Accampamento notturno magico circondato dal silenzio solenne delle dune del Sahara e lanterne.",
          image: "/images/events-banquet.jpg",
          alt: "Cena romantica tra le dune con tappeti tradizionali e candele.",
          aspectSpan: "md:col-span-1",
        },
      ],
      noItems: "Nessun momento trovato in questa categoria.",
    },

    events: {
      overline: "EVENTI IN EVIDENZA",
      title: "Scopri i nostri eventi ed esperienze speciali",
      subtitle:
        "Vivi momenti unici e scopri Tozeur attraverso attività speciali, esperienze locali e avventure su misura.",
      seeMoreInfos: "Vedi più dettagli",
      dateLabel: "Stagione / Data",
      locationLabel: "Luogo",
      durationLabel: "Durata",
      capacityLabel: "Capacità",
      aboutTitle: "Su questa esperienza",
      highlightsTitle: "Punti salienti",
      includedTitle: "Cosa è incluso",
      practicalNoteTitle: "Nota pratica:",
      closeBtn: "Chiudi",
      conciergeNotice: "Tozeur Experience · Viaggi autentici nel Sahara",
      items: [
        {
          id: "sahara-stargazing",
          title: "Fuoco di Bivacco & Astronomia Sahariana",
          tag: "Escursione Stagionale",
          datePlaceholder: "[Stagione Ottobre – Aprile]",
          location: "Ong Jmel & Dune di Tozeur",
          description:
            "Riunisciti attorno a un fuoco tradizionale sotto uno dei cieli più limpidi del pianeta con tè alla menta e racconti berberi sulle stelle.",
          image: "/images/events-banquet.jpg",
          alt: "Fuoco di campo nel deserto con lanterne e tappeti berberi.",
          iconName: "Moon",
          duration: "4 - 5 Ore (Dal tramonto a mezzanotte)",
          groupSize: "Piccolo gruppo o VIP privato",
          highlights: [
            "Osservazione delle costellazioni sotto un cielo notturno incontaminato",
            "Cerimonia del tè alla menta con datteri freschi del deserto",
            "Racconti e leggende di astronomia beduina attorno al fuoco",
            "Foto al tramonto sulle spettacolari dune dorate di Ong Jmel",
          ],
          included: [
            "Trasporto privato a/r in fuoristrada 4x4 dal tuo hotel a Tozeur",
            "Allestimento beduino con tappeti, cuscini e lanterne",
            "Guida locale e narratore esperto del cielo notturno",
            "Tè caldo alla menta, acqua minerale e dolci tradizionali",
          ],
          practicalInfo:
            "Adatto a coppie e famiglie. Si consiglia abbigliamento pesante per la notte nel deserto.",
        },
        {
          id: "date-harvest",
          title: "Raccolta dei Datteri & Viaggio Culinario",
          tag: "Esperienza del Raccolto",
          datePlaceholder: "[Evento Autunnale]",
          location: "Palmeto Antico di Tozeur",
          description:
            "Vivi la storica raccolta dei datteri Deglet Nour, incontra gli agricoltori locali e degusta prelibatezze preparate nell'oasi.",
          image: "/images/palmeraie.jpg",
          alt: "Grappoli di datteri Deglet Nour dorati sulle palme a Tozeur.",
          iconName: "Apple",
          duration: "Mezza giornata (~4 Ore)",
          groupSize: "Piccolo gruppo (Max 12 persone)",
          highlights: [
            "Partecipazione pratica alla raccolta dei celebri datteri Deglet Nour",
            "Passeggiata guidata lungo i secolari canali d'irrigazione a gravità",
            "Dimostrazione dal vivo dell'arrampicata tradizionale sulle palme",
            "Degustazione di datteri accompagnati da formaggio fresco e miele locale",
          ],
          included: [
            "Accesso esclusivo a un palmeto storico privato",
            "Agricoltore e guida locale dell'oasi",
            "Laboratorio di raccolta e degustazione completa",
            "Confezione regalo di datteri Deglet Nour appena raccolti",
          ],
          practicalInfo:
            "Si consigliano scarpe comode e protezione solare (cappello/occhiali da sole).",
        },
        {
          id: "chott-sunrise-trek",
          title: "Alba a Chott el Djerid & Trekking Montano",
          tag: "Trek & Panorama",
          datePlaceholder: "[Partenze settimanali / Privato]",
          location: "Canyon di Chebika & Tamerza",
          description:
            "Ammira i miraggi mattutini sulla distesa di sale di Chott el Djerid all'alba, seguiti da un trekking guidato lungo cascate montane.",
          image: "/images/gallery-waterfall.jpg",
          alt: "Sole nascente che illumina le montagne e le sorgenti vicino a Tozeur.",
          iconName: "Compass",
          duration: "Intera giornata (~7 Ore)",
          groupSize: "Gruppo privato o condiviso",
          highlights: [
            "Spettacolo dell'alba e dei miraggi ottici sul lago salato Chott el Djerid",
            "Trekking tra le spettacolari gole d'arenaria e le cascate di Chebika",
            "Esplorazione degli antichi villaggi berberi abbandonati di Tamerza",
            "Panorami mozzafiato sul confine sahariano e sulla catena dell'Atlante",
          ],
          included: [
            "Veicolo 4x4 climatizzato con autista esperto",
            "Guida certificata per escursioni in montagna e deserto",
            "Pranzo tradizionale berbero in un ristorante locale dell'oasi",
            "Acqua minerale fresca e bastoncini da trekking forniti",
          ],
          practicalInfo:
            "Difficoltà moderata. Si prega di indossare scarpe da trekking stabili.",
        },
      ],
    },

    contact: {
      overline: "CONTATTACI",
      title: "La tua prossima avventura inizia qui",
      subtitle:
        "Pronto a scoprire Tozeur? Contatta il nostro team e lascia che ti aiutiamo a pianificare la tua prossima esperienza.",
      inquiringAbout: "Stai chiedendo informazioni su:",
      phoneTitle: "Chiamata diretta & WhatsApp",
      phoneSubtitle: "Disponibile per prenotazioni immediate e preventivi personalizzati.",
      emailTitle: "Posta elettronica",
      emailSubtitle: "Rispondiamo alle richieste su misura entro 24 ore.",
      addressTitle: "Indirizzo",
      addressValue: "Via Abou Kacem Chebbi, Tozeur, Tunisia, 2200",
      addressSubtitle: "Distretto dell'Oasi e Medina, Tozeur, Sud Tunisia.",
      hoursTitle: "Orari di apertura",
      hoursValue: "Lunedì – Domenica: 08:00 – 20:00 (GMT+1)",
      hoursSubtitle: "Assistenza concierge quotidiana ed escursioni private.",
      destinationTag: "Destinazione",
      destinationTitle: "Tozeur, Tunisia",
      destinationDesc:
        "Vivi escursioni indimenticabili nel deserto, trekking nelle oasi di montagna e tour culturali con il nostro team locale.",
      mapsCta: "Visualizza su Google Maps",
    },

    footer: {
      tagline: "Vivi l’essenza di Tozeur",
      description:
        "TOZEUR EXPERIENCE ti invita a scoprire la magia del sud della Tunisia attraverso avventure nel deserto, oasi storiche e autentico patrimonio culturale.",
      quote: "“Vivez l’essence de Tozeur”",
      quickLinks: "Navigazione rapida",
      experiencesTitle: "Esperienze",
      contactTitle: "Contatto & Posizione",
      rights: "Tutti i diritti riservati. Autentica ospitalità sahariana.",
    },

    common: {
      backToTop: "Torna su",
      language: "Lingua",
    },
  },
};
