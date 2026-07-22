export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Residences' | 'Commercial' | 'Farm Estates' | 'Hospitality';
  location: string;
  year: string;
  area: string;
  heroImage: string;
  gallery: string[];
  description: string;
  challenge: string;
  solution: string;
  services: string[];
  materials: string[];
  beforeImage: string;
  afterImage: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  deliverables: string[];
  materialsUsed: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const GKV_COMPANY_INFO = {
  name: "Green Kole Ventures",
  tagline: "Designing Outdoor Experiences That Last",
  established: "2020",
  incorporated: "April 12, 2022",
  phone: "+91 83300 80387",
  email: "greenkoleventures@gmail.com",
  website: "www.greenkoleventures.com",
  location: "Kerala, India",
  hours: "Mon - Sat: 9:00 AM - 6:30 PM IST",
  stats: {
    projectsCompleted: "140+",
    acresTransformed: "350+",
    teamExperts: "28+",
    clientSatisfaction: "99.4%"
  },
  originStory: `Green Kole Ventures began its journey during the COVID-19 pandemic with the online sale of indoor plants, bringing the organic tranquility of nature into homes during a period of global isolation. Driven by a relentless passion for ecological craftsmanship and architectural precision, we formally incorporated on April 12, 2022. Today, we stand as one of South India's premier landscape architecture and outdoor environment studios, managing multi-acre farm estates, luxury residential gardens, automated irrigation networks, and bio-climatic polyhouse installations.`,
  mission: "To redefine the standards of agriculture, hardscape architecture, and luxury landscaping through innovation, sustainable engineering, and uncompromising visual excellence.",
  vision: "To lead the transformation of green spaces across tropical and subtropical regions by synthesizing modern architectural aesthetics with native ecosystems and intelligent climate-driven infrastructure."
};

export const GKV_PROJECTS: Project[] = [
  {
    id: "malabar-estate",
    title: "The Malabar Hill Sanctuary",
    subtitle: "A 4-Acre Modernist Tropical Residence",
    category: "Residences",
    location: "Vayanad, Kerala",
    year: "2024",
    area: "18,000 sq.ft Landscape",
    heroImage: "/assets/projects/page_1_0_X4.jpg",
    gallery: [
      "/assets/projects/page_1_0_X4.jpg",
      "/assets/projects/page_5_11_X9.jpg",
      "/assets/projects/page_9_26_X11.jpg",
      "/assets/projects/page_9_21_X5.jpg"
    ],
    description: "Nestled high in the misty canopy, The Malabar Hill Sanctuary seamlessly merges brutalist concrete architecture with lush native tropical softscapes and hand-chiseled granite hardscaping.",
    challenge: "Managing steep 35-degree slope erosion while maintaining structural integrity for heavy stone paving and year-round monsoon drainage without disrupting natural groundwater aquifers.",
    solution: "Engineered terraced stone retaining walls, subterranean sub-surface drainage channels, and a deep-root native flora matrix that naturally anchors the hillside while collecting rainwater into a bio-retention filtration pool.",
    services: ["Landscape Architecture", "Architectural Hardscape", "Bio-Filtration Pond", "Smart Irrigation"],
    materials: ["Kerala Dark Granite", "Weathered Teak Wood", "River Pebbles", "Native Ferns & Tree Palms"],
    beforeImage: "/assets/projects/page_9_28_X13.jpg",
    afterImage: "/assets/projects/page_1_0_X4.jpg",
    featured: true
  },
  {
    id: "serene-lake-villa",
    title: "Vembanad Lakeside Courtyard",
    subtitle: "Waterfront Minimalist Retreat",
    category: "Hospitality",
    location: "Kumarakom, Kerala",
    year: "2023",
    area: "25,000 sq.ft Waterfront",
    heroImage: "/assets/projects/page_9_22_X7.jpg",
    gallery: [
      "/assets/projects/page_9_22_X7.jpg",
      "/assets/projects/page_6_13_X7.jpg",
      "/assets/projects/page_9_27_X12.jpg"
    ],
    description: "An serene eco-resort courtyard designed to reflect the reflective stillness of the backwaters, featuring floating basalt step stones, accent bamboo groves, and ambient recessed low-voltage lighting.",
    challenge: "High saline soil conditions and fluctuating water tables during tidal changes requiring specialized halophyte horticultural selections and non-corrosive hardscape masonry.",
    solution: "Curated elevated planter beds with high-saline tolerant palms, stainless-steel anchored stone decking, and automated soil salinity sensors integrated into the drip irrigation network.",
    services: ["Garden Design", "Stone Works", "Automation", "Lighting Architecture"],
    materials: ["Basalt Stone", "Polished Black Granite", "Zoysia Turf", "Architectural Lighting"],
    beforeImage: "/assets/projects/page_9_29_X14.jpg",
    afterImage: "/assets/projects/page_9_22_X7.jpg",
    featured: true
  },
  {
    id: "greenhouse-farm-estate",
    title: "Kochi Bio-Climatic Farm Estate",
    subtitle: "High-Tech Commercial & Recreational Farm",
    category: "Farm Estates",
    location: "Kochi Outskirts, Kerala",
    year: "2024",
    area: "12 Acres",
    heroImage: "/assets/projects/page_8_19_X7.jpg",
    gallery: [
      "/assets/projects/page_8_19_X7.jpg",
      "/assets/projects/page_8_18_X4.jpg",
      "/assets/projects/page_7_15_X4.jpg"
    ],
    description: "A state-of-the-art agricultural development featuring automated climate-controlled polyhouses, organic avocado & exotic fruit orchards, and a luxury owner's glass pavilion.",
    challenge: "Balancing commercial crop productivity with luxury aesthetic standards suitable for hosting high-profile private events and sustainable agricultural tourism.",
    solution: "Designed dual-zone infrastructure separating high-yield precision polyhouses with automated micro-misting from manicured leisure lawn terraces and ornamental koi waterways.",
    services: ["Farm Development", "Polyhouse Construction", "Weather-Based Automation", "Consultancy"],
    materials: ["Galvanized Structural Steel", "Diffuse UV Polycarbonate", "Teak Pergolas", "Organic Topsoil"],
    beforeImage: "/assets/projects/page_9_24_X9.jpg",
    afterImage: "/assets/projects/page_8_19_X7.jpg",
    featured: true
  },
  {
    id: "thrissur-urban-residence",
    title: "The Courtyard of Light",
    subtitle: "Internal Sanctuary & Rooftop Meadow",
    category: "Residences",
    location: "Thrissur, Kerala",
    year: "2023",
    area: "8,500 sq.ft",
    heroImage: "/assets/projects/page_9_26_X11.jpg",
    gallery: [
      "/assets/projects/page_9_26_X11.jpg",
      "/assets/projects/page_5_10_X8.jpg",
      "/assets/projects/page_9_23_X8.jpg"
    ],
    description: "An inward-looking architectural residence centered around a double-height open courtyard filled with moss gardens, a solitary bonsai ficus, and custom stone water basins.",
    challenge: "Limited natural sunlight penetration into central core and strict weight thresholds for the third-floor rooftop infinity lawn.",
    solution: "Utilized lightweight engineered substrate media, shade-tolerant understory flora, and full spectrum architectural grow lamps disguised as moonlight projectors.",
    services: ["Landscape Architecture", "Rooftop Garden", "Water Features", "Maintenance"],
    materials: ["Kota Stone", "River Basalt", "Lightweight Pumice Substrate", "Creeping Fig"],
    beforeImage: "/assets/projects/page_9_25_X10.jpg",
    afterImage: "/assets/projects/page_9_26_X11.jpg"
  }
];

export const GKV_SERVICES: Service[] = [
  {
    id: "landscape-architecture",
    title: "Landscape Architecture & Softscape",
    category: "Design & Spatial Planning",
    tagline: "Harmonizing raw earth with living sculpture",
    shortDesc: "Every project is a unique collaboration between nature and design. We curate lush softscapes featuring native plantings and tiered garden beds.",
    fullDesc: "We craft immersive outdoor living environments where organic beauty meets architectural geometry. By studying soil microbiology, sun trajectories, and microclimates, our agricultural graduates and landscape architects select plant species that thrive effortlessly across tropical seasons.",
    image: "/assets/projects/page_5_11_X9.jpg",
    features: [
      "Master Site & Spatial Planning",
      "Native & Exotic Botanical Selection",
      "Tiered Terrace & Contour Grading",
      "Soil Conditioning & Bio-Enrichment"
    ],
    deliverables: ["3D Architectural Renders", "Botanical Planting Schedules", "Topographical Layout Maps"],
    materialsUsed: ["Native Palms", "Tropical Broadleaf Shrubs", "Custom Organic Soil Blends", "Moss Layers"]
  },
  {
    id: "hardscape-stone",
    title: "Architectural Hardscape & Stone Paving",
    category: "Civil & Structural Masonry",
    tagline: "Solidifying elegance with timeless natural stone",
    shortDesc: "Sophisticated hardscape elements utilizing premium materials to craft patios, walkways, and gathering spaces that invite you outdoors.",
    fullDesc: "Our civil engineers and master masons work in tandem to construct rockwork, precision-cut stone walkways, retaining walls, and sunken fire lounges. We utilize locally quarried granite, slate, Kota stone, and teak timber designed to withstand centuries of weathering.",
    image: "/assets/projects/page_1_0_X4.jpg",
    features: [
      "Custom Hand-Chiseled Stone Paving",
      "Retaining Walls & Structural Terraces",
      "Outdoor Lounges & Sunken Fire Pits",
      "Permeable Eco-Paving Systems"
    ],
    deliverables: ["Structural Engineering Diagrams", "Stone Sample Boards", "Drainage Flow Simulations"],
    materialsUsed: ["Kerala Flamed Granite", "Kota Blue Limestone", "Basalt Boulders", "Weathered Teak"]
  },
  {
    id: "irrigation-automation",
    title: "Smart Irrigation & Climate Automation",
    category: "Fluid & Environmental Engineering",
    tagline: "Precision water stewardship backed by real-time data",
    shortDesc: "Smart automation systems using real-time weather data to optimize watering, keeping your landscape healthy while saving water and money.",
    fullDesc: "Designed by certified irrigation engineers, our automated networks monitor local humidity, precipitation forecasts, and soil moisture levels. From subtle subsurface drip lines to atmospheric mist cannons, we ensure zero water waste.",
    image: "/assets/projects/page_8_18_X4.jpg",
    features: [
      "Weather-Driven Smart Controllers",
      "Subsurface Precision Drip Arrays",
      "Atmospheric Micro-Misting Networks",
      "Rainwater Harvesting & Bio-Filtration"
    ],
    deliverables: ["Hydraulic Pressure Schematics", "IoT Mobile Control Dashboard", "Water Efficiency Audits"],
    materialsUsed: ["UV-Stabilized Polyethylene", "Brass Drip Nozzles", "Rain & Soil Sensors", "Submersible Pumps"]
  },
  {
    id: "farm-development",
    title: "Farm Planning & Estate Development",
    category: "Agricultural Engineering",
    tagline: "Transforming acreage into thriving productive sanctuaries",
    shortDesc: "Plan and develop your agricultural land effectively with our specialized team of agricultural graduates and soil scientists.",
    fullDesc: "We convert underutilized acreage into profitable, picturesque farm estates. Whether planning organic fruit orchards, timber plantations, or recreational country estates, we oversee everything from land clearing to crop yield optimization.",
    image: "/assets/projects/page_7_15_X4.jpg",
    features: [
      "Master Farm Blueprint & Zoning",
      "Crop Suitability & Soil Soil Matrix Analysis",
      "Road, Fencing & Water Reservoir Infra",
      "High-Yield Fruit Orchard Layouts"
    ],
    deliverables: ["10-Year Crop Yield Forecast", "Estate Infrastructure Map", "Soil Regeneration Plan"],
    materialsUsed: ["Organic Bio-Fertilizers", "High-Yield Grafted Varieties", "Durable Boundary Infra"]
  },
  {
    id: "greenhouse-polyhouse",
    title: "Greenhouse & Polyhouse Construction",
    category: "Bio-Climatic Enclosures",
    tagline: "Optimized microclimates for year-round horticultural excellence",
    shortDesc: "Custom-built greenhouse and polyhouse solutions prioritizing light transmission, airflow, and structural integrity for maximum plant health.",
    fullDesc: "Engineered to withstand tropical monsoons and high thermal indices, our greenhouses provide pristine conditions for delicate exotic flora, indoor plant propagation, or commercial hydroponic farming.",
    image: "/assets/projects/page_8_19_X7.jpg",
    features: [
      "Hot-Dip Galvanized Steel Framing",
      "Diffuse Light & UV-Shielded Polycarbonate",
      "Automated Climate & Shading Screens",
      "Hydroponic & Vertical Growing Racks"
    ],
    deliverables: ["Structural Load Calculations", "Microclimate Thermal Models", "Operations Manual"],
    materialsUsed: ["Galvanized Steel", "200-Micron Anti-Drip Polyfilm", "Thermal Shade Nets"]
  },
  {
    id: "garden-maintenance",
    title: "Year-Round Horticultural Stewardship",
    category: "Asset Care & Preservation",
    tagline: "Preserving pristine aesthetics with expert horticultural care",
    shortDesc: "Ongoing attention tailored to the unique needs of your property, ensuring your outdoor sanctuary continuously matures with grace.",
    fullDesc: "A luxury landscape is a living canvas that requires delicate curation over time. Our dedicated teams perform seasonal pruning, organic soil nourishment, pest diagnostics, and turf management so your estate looks pristine every day of the year.",
    image: "/assets/projects/page_6_13_X7.jpg",
    features: [
      "Weekly Horticultural Check-Ups",
      "Organic Fertilization & Soil Health",
      "Precision Turf Renovation & Mowing",
      "Pest & Disease Early Warning Diagnostics"
    ],
    deliverables: ["Monthly Health Log", "Plant Replenishment Guarantee", "Seasonal Pruning Schedule"],
    materialsUsed: ["Custom Compost Blends", "Neem Oil Extract", "Precision Shears & Aerators"]
  }
];

export const GKV_PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation & Visioning",
    subtitle: "Understanding your lifestyle, site topography, and aesthetic aspirations.",
    description: "We begin with an in-depth conversation at your property. Our architects listen to your spatial desires, evaluate natural light patterns, and map out initial design possibilities.",
    image: "/assets/projects/page_2_2_X4.jpg"
  },
  {
    number: "02",
    title: "Topographical Survey & Analysis",
    subtitle: "Measuring soil microbiology, drainage contours, and solar trajectories.",
    description: "Our civil and agricultural engineers conduct thorough soil tests, slope measurements, and hydrological surveys to guarantee structural stability and plant longevity.",
    image: "/assets/projects/page_7_16_X7.jpg"
  },
  {
    number: "03",
    title: "3D Masterplan & Material Selection",
    subtitle: "Visualizing every stone, plant species, and water feature in high-fidelity 3D.",
    description: "We present a comprehensive architectural masterplan complete with 3D walkthroughs, lighting layouts, plant palettes, and natural stone sample boards for your review.",
    image: "/assets/projects/page_3_4_X4.jpg"
  },
  {
    number: "04",
    title: "Material Sourcing & Engineering",
    subtitle: "Hand-selecting natural granite, teak, and healthy nursery specimens.",
    description: "Every boulder, paving slab, and tree specimen is hand-curated from accredited quarries and specialized plant nurseries to match our exact visual standards.",
    image: "/assets/projects/page_5_10_X8.jpg"
  },
  {
    number: "05",
    title: "Precision Execution & Craftsmanship",
    subtitle: "Civil earthworks, automated irrigation installation, and artistic planting.",
    description: "Our skilled workforce—led on-site by civil engineers and agricultural graduates—executes earth grading, hardscape masonry, smart piping, and softscape planting with surgical care.",
    image: "/assets/projects/page_9_21_X5.jpg"
  },
  {
    number: "06",
    title: "Horticultural Stewardship",
    subtitle: "Handing over a thriving ecosystem with dedicated year-round care.",
    description: "After commissioning, we provide a complete maintenance playbook and deploy our expert team for regular care, ensuring your investment grows more beautiful with each passing year.",
    image: "/assets/projects/page_6_14_X8.jpg"
  }
];

export const GKV_JOURNAL: Article[] = [
  {
    id: "tropical-architecture-flora",
    title: "Harmonizing Modernist Architecture with Native Kerala Flora",
    subtitle: "How brutalist concrete and warm teak find stillness within lush tropical softscapes.",
    category: "Landscape Design",
    readTime: "6 min read",
    date: "February 14, 2026",
    author: "GKV Design Studio",
    image: "/assets/projects/page_1_0_X4.jpg",
    excerpt: "Modern luxury architecture in tropical climates demands a subtle dialogue between sharp geometric lines and wild organic growth.",
    content: [
      "In modern estate design, the boundary between interior living spaces and external landscapes is no longer a solid wall—it is a fluid transition.",
      "When designing for South India's lush tropical climate, we prioritize native species such as royal palms, tree ferns, and broadleaf elephant ears. These plants not only thrive under intense monsoons but also soften the raw strength of exposed concrete and dark granite.",
      "By layering softscapes in cascading tiers, we create natural privacy screens, regulate ambient micro-temperatures around the residence, and evoke the calm atmosphere of an Aman sanctuary."
    ]
  },
  {
    id: "natural-stone-paving-art",
    title: "The Art of Hand-Chiseled Natural Stone Paving",
    subtitle: "Why locally quarried granite and basalt outlast synthetic paving in luxury outdoor spaces.",
    category: "Hardscape Architecture",
    readTime: "5 min read",
    date: "January 28, 2026",
    author: "Lead Masonry Engineer",
    image: "/assets/projects/page_9_26_X11.jpg",
    excerpt: "Synthetic tiles fade under tropical UV rays, but hand-flamed natural granite gains character with age and weathering.",
    content: [
      "Hardscape is the structural backbone of any landscape. It defines movement, creates gathering anchors, and provides tactile weight underfoot.",
      "At Green Kole Ventures, we source Kerala granite, Kota blue stone, and river basalt. Each slab is hand-chiseled by veteran masons to create custom joint patterns that channel rainwater naturally into hidden bio-swales.",
      "The result is a surface that remains slip-resistant during heavy rain while radiating a warm, grounded tactile luxury under sun."
    ]
  },
  {
    id: "smart-microclimate-irrigation",
    title: "Smart Microclimate Irrigation: Saving Water While Nurturing Luxury Estates",
    subtitle: "Leveraging real-time weather sensors and subsurface drip technology.",
    category: "Engineering & Water",
    readTime: "4 min read",
    date: "January 10, 2026",
    author: "Irrigation Engineering Team",
    image: "/assets/projects/page_8_18_X4.jpg",
    excerpt: "Overwatering is the single greatest cause of plant stress in luxury gardens. Smart automation solves this with surgical precision.",
    content: [
      "Traditional sprinkler systems waste up to 40% of water through evaporation and runoff. Our smart irrigation networks solve this by pairing subterranean drip arrays with IoT weather monitors.",
      "By analyzing local humidity forecasts and soil moisture content at 30cm depth, the system calculates exact hydrological requirements per botanical zone.",
      "Property owners can view water savings, adjust parameters, or trigger misting sequences directly from a mobile interface."
    ]
  }
];

export const GKV_CLIENT_TYPES = [
  { name: "Private Estate Owners", description: "Bespoke luxury residential gardens & farm retreats" },
  { name: "Architectural Studios", description: "Collaborative hardscape & outdoor spatial design" },
  { name: "Luxury Hospitality & Resorts", description: "Immersive tranquil waterfront landscapes" },
  { name: "Commercial Developers", description: "High-end corporate green roofs & polyhouses" },
  { name: "Agricultural Investors", description: "Turnkey 5+ acre farm estate planning & development" }
];
