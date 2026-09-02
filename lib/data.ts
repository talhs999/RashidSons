export interface BrandAbout {
  heading?: string;
  founder?: string;
  founded_year?: string;
  history: string;
  vision?: string;
  mission?: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  logo_white_url?: string;
  banner_url?: string;
  banner_image?: string;
  tire_image?: string;
  slogan?: string;
  about?: BrandAbout;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  brand_id: number;
  image_url?: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  brand_id: number;
  category_id: number;
  size?: string;
  description: string;
  price?: number | null;
  stock_status: "in_stock" | "out_of_stock" | "on_order";
  featured: boolean;
  images: string[];
}

export interface Dealer {
  id: number;
  name: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  brands?: string[];
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: string;
  sort_order: number;
}

export const brands: Brand[] = [
  {
    "id": 1,
    "name": "Yokohama",
    "slug": "yokohama",
    "logo_url": "/images/partners/yokohama-hd-5100.png",
    "logo_white_url": "/images/brands/yokohama-white.png",
    "banner_image": "/images/brands/yokohama-hero-banner.jpg",
    "description": "Yokohama Rubber Company is a Japanese tire manufacturer. As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering to Pakistani roads."
  },
  {
    "id": 2,
    "name": "Goodyear",
    "slug": "goodyear",
    "logo_url": "/images/partners/goodyear-clean.png",
    "logo_white_url": "/images/partners/goodyear-clean.png",
    "banner_image": "/images/brands/goodyear-hero-banner.jpg",
    "description": "Goodyear Tire & Rubber Company is one of the world's largest tyre companies. J. Rashid & Sons provides authentic Goodyear tyres for passenger cars, SUVs, and commercial vehicles."
  },
  {
    "id": 3,
    "name": "Warrior",
    "slug": "warrior",
    "logo_url": "/images/brands/warrior-final-black.png",
    "logo_white_url": "/images/brands/warrior-final-white.png",
    "banner_image": "/images/brands/warrior-hero-banner.jpg",
    "description": "Warrior tyres are built tough for Pakistani road conditions. Designed for durability and performance at competitive prices."
  },
  {
    "id": 4,
    "name": "Atlas Tyre",
    "slug": "atlas",
    "logo_url": "/images/brands/atlas-logo.png",
    "logo_white_url": "/images/brands/atlas-logo-white.png",
    "banner_image": "/images/brands/atlas-hero-banner.jpg",
    "description": "Atlas Tyres deliver superior traction and durability for a wide range of vehicles, ensuring a safe and comfortable ride across Pakistan."
  },
  {
    "id": 5,
    "name": "Risen",
    "slug": "risen",
    "logo_url": "/images/brands/risen-logo.png",
    "logo_white_url": "/images/brands/risen-logo-white.png",
    "banner_image": "/images/brands/risen-hero-banner.jpg",
    "description": "Risen Tyres provide exceptional value and reliable performance, designed specifically to tackle tough road conditions with ease."
  },
  {
    "id": 6,
    "name": "Falken",
    "slug": "falken",
    "logo_url": "/images/brands/falken-logo.png",
    "logo_white_url": "/images/brands/falken-logo-white.png",
    "banner_image": "/images/brands/falken-hero-banner.jpg",
    "description": "Falken is known for its high-performance tires, offering precision handling and superior grip for sports cars and everyday driving."
  }
,
  {
    "id": 7,
    "name": "Sunwide",
    "slug": "sunwide",
    "logo_url": "/images/brands/sunwide-logo.png",
    "logo_white_url": "/images/brands/sunwide-logo-white.png",
    "banner_image": "/images/brands/sunwide-hero-banner.webp",
    "description": "Sunwide Tyres is a rapidly emerging brand known for providing highly reliable and cost-effective tire solutions for everyday drivers."
  }
];

export const categories: Category[] = [
  { id: 1, name: "Passenger Car Tyres", slug: "passenger-car", brand_id: 1 },
  { id: 2, name: "SUV Tyres", slug: "suv", brand_id: 1 },
  { id: 3, name: "Commercial Tyres", slug: "commercial", brand_id: 1 },
  { id: 4, name: "Passenger Car Tyres", slug: "goodyear-passenger", brand_id: 2 },
  { id: 5, name: "SUV & 4x4 Tyres", slug: "goodyear-suv", brand_id: 2 },
  { id: 6, name: "Truck Tyres", slug: "goodyear-truck", brand_id: 2 },
  { id: 7, name: "Premium Tyres", slug: "michelin-premium", brand_id: 3 },
  { id: 8, name: "SUV Tyres", slug: "michelin-suv", brand_id: 3 },
  { id: 9, name: "All Season", slug: "blackarrow-allseason", brand_id: 4 },
  { id: 10, name: "Performance", slug: "blackarrow-performance", brand_id: 4 },
  { id: 11, name: "All Terrain", slug: "warrior-allterrain", brand_id: 5 },
  { id: 12, name: "Highway", slug: "warrior-highway", brand_id: 5 },
  { id: 13, name: "Passenger Tyres", slug: "rydanz-passenger", brand_id: 6 },
  { id: 14, name: "SUV & 4x4", slug: "rydanz-suv", brand_id: 6 },
  { id: 15, name: "Commercial & Off-Road", slug: "alliance-commercial", brand_id: 7 },
];

export const products: Product[] = [
  {
    "id": 4,
    "name": "Goodyear Assurance TripleMax 2",
    "slug": "goodyear-assurance-triplemax-2",
    "brand_id": 2,
    "category_id": 4,
    "size": "195/65R15",
    "description": "HydroTred Technology for superior wet braking. DuraGrip Technology for longer tyre life. Perfect for Pakistani city driving with enhanced safety features.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/goodyear-1.png"
    ]
  },
  {
    "id": 5,
    "name": "Goodyear Wrangler AT/SA+",
    "slug": "goodyear-wrangler-at-sa-plus",
    "brand_id": 2,
    "category_id": 5,
    "size": "245/70R16",
    "description": "Versatile all-terrain tyre with aggressive tread pattern. Self-cleaning grooves for off-road confidence. Ideal for Pakistani terrain.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/goodyear-1.png"
    ]
  },
  {
    "id": 6,
    "name": "Goodyear KMAX S",
    "slug": "goodyear-kmax-s",
    "brand_id": 2,
    "category_id": 6,
    "size": "315/80R22.5",
    "description": "Steer axle truck tyre with optimized footprint shape for even wear and long tread life. Built for commercial fleets.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/goodyear-1.png"
    ]
  },
  {
    "id": 206,
    "name": "Goodyear EfficientGrip Performance 2",
    "slug": "goodyear-efficientgrip-performance-2",
    "brand_id": 2,
    "category_id": 4,
    "description": "The Goodyear EfficientGrip Performance 2 offers 50% more miles and the shortest braking distances on wet and dry roads. Designed for optimal touring and passenger car performance.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/goodyear_effigrip_perf2.png"
    ]
  },
  {
    "id": 207,
    "name": "Goodyear Eagle Sport 2",
    "slug": "goodyear-eagle-sport-2",
    "brand_id": 2,
    "category_id": 4,
    "description": "The Eagle Sport 2 delivers excellent all-season sport performance with enhanced steering responsiveness and confident grip in various conditions.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/goodyear_eagle_sport2.png"
    ]
  },
  {
    "id": 208,
    "name": "Goodyear Eagle F1 Asymmetric 5",
    "slug": "goodyear-eagle-f1-asymmetric-5",
    "brand_id": 2,
    "category_id": 4,
    "description": "High-performance summer tire delivering superior wet grip and luxurious comfort, offering short braking distances in wet and dry conditions.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/goodyear_eagle_f1_asy5.png"
    ]
  },
  {
    "id": 209,
    "name": "Goodyear Eagle F1 Asymmetric 3 MOE RFT",
    "slug": "goodyear-eagle-f1-asymmetric-3-moe-rft",
    "brand_id": 2,
    "category_id": 5,
    "description": "Ultra-high-performance tire featuring RunOnFlat technology and Mercedes Original Extended (MOE) homologation. Shorter braking distances and precise handling.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/goodyear_eagle_f1_asy3.png"
    ]
  },
  {
    "id": 210,
    "name": "Goodyear Eagle F1 Asymmetric 2 MOE RFT",
    "slug": "goodyear-eagle-f1-asymmetric-2-moe-rft",
    "brand_id": 2,
    "category_id": 4,
    "description": "High-performance tire with RunOnFlat capabilities, engineered for responsive handling and control in dry and wet conditions.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/goodyear_eagle_f1_asy2.png"
    ]
  },
  {
    "id": 211,
    "name": "Goodyear EfficientGrip RFT MOE ROF",
    "slug": "goodyear-efficientgrip-rft-moe-rof",
    "brand_id": 2,
    "category_id": 4,
    "description": "Features RunOnFlat technology ensuring mobility even after a puncture. Designed with fuel-saving technology for efficient, long-lasting drives.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/goodyear_effigrip_rft.png"
    ]
  },
  {
    "id": 212,
    "name": "Goodyear Eagle F1 Asymmetric 6",
    "slug": "goodyear-eagle-f1-asymmetric-6",
    "brand_id": 2,
    "category_id": 4,
    "description": "The latest ultra-high-performance tire ready for anything. Superb dry and wet performance and optimized for electric vehicles.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/goodyear_eagle_f1_asy6.png"
    ]
  },
  {
    "id": 101,
    "name": "Yokohama Alliance AL30",
    "slug": "yokohama-alliance-al30",
    "brand_id": 1,
    "category_id": 1,
    "size": "185/65R14",
    "description": "Reliable touring and all-season passenger tire engineered by Yokohama/Alliance for smooth comfort, long tread life, and quiet daily performance",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 102,
    "name": "Yokohama S707",
    "slug": "yokohama-s707",
    "brand_id": 1,
    "category_id": 1,
    "size": "165/70R12",
    "description": "Heavy-duty compact passenger tire providing durable performance, excellent wet stability, and long mileage for small city vehicles",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 103,
    "name": "Yokohama ADVAN A460",
    "slug": "yokohama-advan-a460",
    "brand_id": 1,
    "category_id": 1,
    "size": "205/55R16",
    "description": "Original equipment high-performance summer passenger tire engineered for crisp steering response, high-speed stability, and refined ride quality",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-apex.png"
    ]
  },
  {
    "id": 104,
    "name": "Yokohama A.drive AA01",
    "slug": "yokohama-adrive-aa01",
    "brand_id": 1,
    "category_id": 1,
    "size": "185/65R14",
    "description": "Yokohama A.drive (AA01) passenger tire designed to offer balanced handling, superior fuel efficiency, and confident wet surface traction",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 105,
    "name": "Yokohama A-345",
    "slug": "yokohama-a345",
    "brand_id": 1,
    "category_id": 1,
    "size": "165/65R14",
    "description": "Premium OE passenger tire engineered for ultra-quiet ride, low rolling resistance, and dependable everyday urban driving",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 106,
    "name": "Yokohama Blue Earth AE-50",
    "slug": "yokohama-bluearth-ae-50",
    "brand_id": 1,
    "category_id": 1,
    "size": "175/70R14",
    "description": "Premium fuel-efficient passenger tire incorporating nano-blend rubber technology for outstanding wet grip and smooth touring comfort",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 107,
    "name": "Yokohama Blue Earth ES-32",
    "slug": "yokohama-bluearth-es-32",
    "brand_id": 1,
    "category_id": 1,
    "size": "195/65R15",
    "description": "THE ALL NEW POWERFUL & COMFORTABLE TREAD - GRIP THE EARTH. High-rigidity extra-wide profile tread offering extra mileage, strong wet braking, and powerful stability across 13 to 18 inch rims",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-bluearth-es32.png"
    ]
  },
  {
    "id": 108,
    "name": "Yokohama ADVAN dB V552",
    "slug": "yokohama-advan-db-v552",
    "brand_id": 1,
    "category_id": 1,
    "size": "215/55R16",
    "description": "DRAMATIC SILENCE - Beautiful small block design creates breathtaking silence. Premium luxury noise-cancelling tire featuring small block tread design for near-silent cabin quietness and supreme comfort",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-advan-db-v552.png"
    ]
  },
  {
    "id": 109,
    "name": "Yokohama ADVAN dB V553",
    "slug": "yokohama-advan-db-v553",
    "brand_id": 1,
    "category_id": 1,
    "size": "215/55R17",
    "description": "DRAMATIC SILENCE E+ - Handling Silence Comfort Dry Wet Asymmetric Luxury. Next-generation EV-compatible luxury quiet tire delivering sustainable noise suppression, long-lasting smoothness, and wet handling",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-advan-db-v552.png"
    ]
  },
  {
    "id": 110,
    "name": "Yokohama Blue Earth-GT AE51",
    "slug": "yokohama-bluearth-gt-ae51",
    "brand_id": 1,
    "category_id": 1,
    "size": "205/55R16",
    "description": "GRAND TOURING BLUE EARTH GTAE-51 - Newly-developed High-rigidity Asymmetrical Pattern Spirited. Grand touring passenger tire designed for high-speed stability, anti-uneven wear, and responsive steering performance",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 111,
    "name": "Yokohama Blue Earth RV-03",
    "slug": "yokohama-bluearth-rv03",
    "brand_id": 1,
    "category_id": 1,
    "size": "215/60R16",
    "description": "Specially designed for MPV's BLUEARTH RV03 - Improved quietness & considerations designed for MPVs. Dedicated MPV and minivan tire engineered to reduce side-to-side sway, quieten rear-seat noise, and maximize wear life",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 112,
    "name": "Yokohama Decibel E70",
    "slug": "yokohama-db-decibel-e70",
    "brand_id": 1,
    "category_id": 1,
    "size": "215/60R16",
    "description": "OEM quiet luxury touring tire optimized for fuel economy, smooth ride quality, and ultra-low tread pattern noise",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 113,
    "name": "Yokohama ADVAN Apex V601",
    "slug": "yokohama-advan-apex-v601",
    "brand_id": 1,
    "category_id": 1,
    "size": "245/40R18",
    "description": "MAKE YOUR CONTROL DIRECT ADVAN APEX V601 - Superior traction and handling without the road noise. High-performance summer tire engineered with solid center ribs, high-rigidity blocks, and micro-silica compound for maximum cornering",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-apex.png"
    ]
  },
  {
    "id": 114,
    "name": "Yokohama ADVAN Fleva V701",
    "slug": "yokohama-advan-fleva-v701",
    "brand_id": 1,
    "category_id": 1,
    "size": "195/55R16",
    "description": "V701 - Sport compact street performance tire featuring directional claw grooves for aggressive wet traction and emotional driving response",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 115,
    "name": "Yokohama ADVAN Sport V105",
    "slug": "yokohama-advan-sport-v105",
    "brand_id": 1,
    "category_id": 1,
    "size": "245/40R19",
    "description": "ADVAN APEX V105 - Superb Performance Street Tire. Flagship high-speed sport tire developed on the Nürburgring for high-horsepower luxury sports cars and premium sedans",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-sport-v107.webp"
    ]
  },
  {
    "id": 116,
    "name": "Yokohama ADVAN Sport V107 EV",
    "slug": "yokohama-advan-sport-v107-ev",
    "brand_id": 1,
    "category_id": 1,
    "size": "275/35ZR21",
    "description": "ADNAN SPORTS EV+SILENT FOAM V107 - Ultra-high performance EV and supercar tire with Silent Foam acoustic lining for whisper-quiet high-speed handling",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-sport-v107.webp"
    ]
  },
  {
    "id": 117,
    "name": "Yokohama RFT 103 ZPS",
    "slug": "yokohama-rft-103-zps",
    "brand_id": 1,
    "category_id": 1,
    "size": "225/50R17",
    "description": "RFT 103 ZPS - Zero Pressure System (Run-Flat) tire allowing safe driving after total pressure loss, combining high-speed safety with comfort",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-apex.png"
    ]
  },
  {
    "id": 118,
    "name": "Yokohama ADVAN V61",
    "slug": "yokohama-advan-v61",
    "brand_id": 1,
    "category_id": 2,
    "size": "235/55R18",
    "description": "Ultra-modern premium SUV original equipment tire offering agile high-speed handling, superior wet grip, and luxurious highway quietness",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-apex.png"
    ]
  },
  {
    "id": 119,
    "name": "Yokohama Blue Earth-XT AE61",
    "slug": "yokohama-bluearth-xt-ae61",
    "brand_id": 1,
    "category_id": 2,
    "size": "225/65R17",
    "description": "GT AE-61, JUST FOR YOU, URBAN SUV TIRE BLUEARTH - All-new pattern for urban SUVs. Specialized crossover and urban SUV tire engineered to eliminate uneven wear, enhance cornering stability, and deliver a smooth ride",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 120,
    "name": "Yokohama Geolandar G91",
    "slug": "yokohama-geolandar-g91",
    "brand_id": 1,
    "category_id": 2,
    "size": "225/65R17",
    "description": "Factory-fitted crossover & light SUV tire providing refined highway comfort, wet grip, and dependable all-season capability",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 121,
    "name": "Yokohama Geolandar X-CV G057",
    "slug": "yokohama-geolandar-xcv-g057",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/50R20",
    "description": "GEOLANDAR X-CV GO-57 - The all new Performance A/S for Crossover SUV. Luxury performance all-season tire built for high-performance luxury SUVs, delivering wide contact patches and all-weather traction",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 122,
    "name": "Yokohama Geolandar CV G058",
    "slug": "yokohama-geolandar-cv-g058",
    "brand_id": 1,
    "category_id": 2,
    "size": "225/65R17",
    "description": "GEO LANDER GO-58 - Transcend Time & Distance. Grand touring all-season SUV tire engineered with micro-silica polymer for long mileage, wet safety, and quiet highway cruising",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 123,
    "name": "Yokohama Geolandar H/T G056",
    "slug": "yokohama-geolandar-ht-g056",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/70R16",
    "description": "GEOLANDAR H/T GO-56 - Long-lasting comfort, everywhere you go. Heavy-duty highway terrain SUV & truck tire featuring adaptive 3D sipes and triple-polymer compound for extended tread wear",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 124,
    "name": "Yokohama Geolandar A/T G015",
    "slug": "yokohama-geolandar-at-g015",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/70R16",
    "description": "GEO LANDER A/T GO-15 - High dimension All-Terrain tire. Greater Durability & Longer life. Excellent Wet Grip & Off-road capability across all surfaces",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 125,
    "name": "Yokohama Geolandar M/T G003",
    "slug": "yokohama-geolandar-mt-g003",
    "brand_id": 1,
    "category_id": 2,
    "size": "31*10.50R15",
    "description": "AMAZING TRACTION GEO LANDER M/T G003 - INTEGRATED DESIGN CONCEPT. Extreme mud-terrain tire featuring Rock-Crusher blocks, aggressive sidewall armor, and GEO-SHIELD construction for off-road dominance",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g003.png"
    ]
  },
  {
    "id": 126,
    "name": "Yokohama Geolandar X-AT G016",
    "slug": "yokohama-geolandar-xat-g016",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/70R17",
    "description": "GEO LANDER X/T GO-16 FOR BULLET-PROOF VEHICLES - Go-anywhere performance. Extreme all-terrain crossover tire designed for bulletproof/armored vehicles, extreme loads, dual sidewall designs, and off-road trails",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g003.png"
    ]
  },
  {
    "id": 127,
    "name": "Yokohama Geolandar A/T G-94",
    "slug": "yokohama-geolandar-at-g94",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/65R17",
    "description": "GEO LANDER A/T G-94 - Factory original equipment all-terrain tire customized for Toyota Land Cruiser and Hilux, delivering all-weather dependability",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 128,
    "name": "Yokohama Geolandar A/T G-31B",
    "slug": "yokohama-geolandar-at-g31b",
    "brand_id": 1,
    "category_id": 2,
    "size": "265/65R18",
    "description": "GEO LANDER A/T G-31B - Specialty OEM all-terrain tire with reinforced bead structure for heavy SUVs and utility 4x4 vehicles",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 129,
    "name": "Yokohama Geolandar 4x4 PA02",
    "slug": "yokohama-geolandar-4x4-pa02",
    "brand_id": 1,
    "category_id": 2,
    "size": "285/50R20",
    "description": "GEO LANDER 4X4 - High-performance luxury 4x4 urban street tire designed for big rim fitments, sleek aesthetics, and wet surface grip",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 130,
    "name": "Yokohama Delivery Star RY356 Light Truck",
    "slug": "yokohama-delivery-star-ry356",
    "brand_id": 1,
    "category_id": 3,
    "size": "185R14C",
    "description": "LT RADIAL - Heavy-duty delivery van and light truck commercial radial engineered for high payload capacity, puncture resistance, and long tread life",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 131,
    "name": "Yokohama Blue Earth-Van RY55 Commercial",
    "slug": "yokohama-bluearth-van-ry55",
    "brand_id": 1,
    "category_id": 3,
    "size": "195R14C",
    "description": "LT RADIAL - Fuel efficient high mileage commercial van radial designed for maximum durability, wet safety, and heavy cargo transport",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 132,
    "name": "Yokohama Super Van RY53 Commercial",
    "slug": "yokohama-super-van-ry53",
    "brand_id": 1,
    "category_id": 3,
    "size": "205/70R15",
    "description": "LT RADIAL - Heavy commercial transport radial featuring reinforced shoulder ribs for heavy urban multi-stop delivery routes",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 133,
    "name": "Yokohama Y-828A 4x4 Commercial Radial",
    "slug": "yokohama-y828a-commercial",
    "brand_id": 1,
    "category_id": 3,
    "size": "205R16",
    "description": "LT RADIAL - All-terrain heavy load commercial 4x4 pickup radial tire engineered for rough rural roads and tough construction work",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/yokohama-geolandar-g015.png"
    ]
  },
  {
    "id": 134,
    "name": "Yokohama 99HG033 Commercial Truck Radial",
    "slug": "yokohama-99hg033-radial",
    "brand_id": 1,
    "category_id": 3,
    "size": "215/70R16",
    "description": "LT RADIAL - High ply rating light truck commercial radial tire with reinforced casing for heavy cargo haulage",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/advan-fleva.png"
    ]
  },
  {
    "id": 135,
    "name": "Yokohama Geolandar G018 Commercial Radial",
    "slug": "yokohama-geolandar-g018",
    "brand_id": 1,
    "category_id": 3,
    "size": "LT 265/70R17",
    "description": "LT GO18 INCHES RIM / GO18 17/18 INCHES RIM - Heavy-duty light truck and 4x4 commercial radial engineered for high load capacity, rugged puncture resistance, and tough road durability",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/yokohama-geolandar-g003.png"
    ]
  },
  {
    "id": 301,
    "name": "Warrior R700 EV",
    "slug": "warrior-r700-ev",
    "brand_id": 3,
    "category_id": 7,
    "size": "185/55R16",
    "description": "EV Special - Advanced Electric Vehicle passenger tire designed for whisper-quiet rolling comfort, instantaneous torque traction, and low energy consumption",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-ecomax.png"
    ]
  },
  {
    "id": 302,
    "name": "Warrior ECO-MAX",
    "slug": "warrior-eco-max",
    "brand_id": 3,
    "category_id": 7,
    "size": "195/65R15",
    "description": "High-efficiency green touring passenger tire engineered for maximum fuel economy, smooth tread life, and reliable wet/dry handling across city and highway roads",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-ecomax.png"
    ]
  },
  {
    "id": 303,
    "name": "Warrior R29",
    "slug": "warrior-r29",
    "brand_id": 3,
    "category_id": 7,
    "size": "185/55R15",
    "description": "Durable daily commute passenger tire built for long mileage, wear resistance, and comfortable steering response for compact vehicles",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/warrior-1.png"
    ]
  },
  {
    "id": 304,
    "name": "Warrior R699",
    "slug": "warrior-r699",
    "brand_id": 3,
    "category_id": 7,
    "size": "185/65R15",
    "description": "Premium family sedan tire featuring multi-pitch tread design to minimize road noise and provide enhanced wet braking safety",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/warrior-1.png"
    ]
  },
  {
    "id": 305,
    "name": "Warrior R35 UHP",
    "slug": "warrior-r35-uhp",
    "brand_id": 3,
    "category_id": 7,
    "size": "225/45R18",
    "description": "Ultra-high performance (UHP) summer sport tire delivering sharp cornering control, high-speed stability, and aggressive grip for sports sedans",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-ecomax.png"
    ]
  },
  {
    "id": 306,
    "name": "Warrior Comfortune A05",
    "slug": "warrior-comfortune-a05",
    "brand_id": 3,
    "category_id": 7,
    "size": "215/55R16",
    "description": "Luxury comfort-oriented touring tire optimized for vibration absorption, plush ride comfort, and stable high-speed cruising",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/warrior-1.png"
    ]
  },
  {
    "id": 307,
    "name": "Warrior R32",
    "slug": "warrior-r32",
    "brand_id": 3,
    "category_id": 7,
    "size": "205/55R17",
    "description": "High-performance sport touring tire featuring optimized tread blocks for precise steering feedback and excellent high-speed stability",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/warrior-ecomax.png"
    ]
  },
  {
    "id": 308,
    "name": "Warrior Wondergy EV",
    "slug": "warrior-wondergy-ev",
    "brand_id": 3,
    "category_id": 7,
    "size": "225/45R18",
    "description": "WONDERGY EV - Next-generation EV flagship tire engineered for high load index, ultra-low rolling resistance, and supreme acoustic quietness",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-ecomax.png"
    ]
  },
  {
    "id": 309,
    "name": "Warrior SR1 / SR1HP SUV",
    "slug": "warrior-sr1-suv",
    "brand_id": 3,
    "category_id": 8,
    "size": "235/60R18",
    "description": "Premium highway terrain crossover & SUV tire engineered for smooth luxury cruising, enhanced wet grip, and long-lasting tread wear",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-at-plus.png"
    ]
  },
  {
    "id": 310,
    "name": "Warrior Cosilency SUV",
    "slug": "warrior-cosilency-suv",
    "brand_id": 3,
    "category_id": 8,
    "size": "235/55R18",
    "description": "COSILENCY - Ultra-quiet luxury SUV tire featuring noise-cancelling tread sipes and extra-wide shoulder blocks for supreme highway comfort",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-at-plus.png"
    ]
  },
  {
    "id": 311,
    "name": "Warrior AT-PLUS 4x4",
    "slug": "warrior-at-plus-4x4",
    "brand_id": 3,
    "category_id": 8,
    "size": "265/70R16",
    "description": "AT-PLUS - Heavy-duty All-Terrain 4x4 tire with reinforced sidewalls, self-cleaning tread grooves, and aggressive off-road mud & gravel traction",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-at-plus.png"
    ]
  },
  {
    "id": 312,
    "name": "Warrior LT Cruseross 4x4",
    "slug": "warrior-lt-cruseross-4x4",
    "brand_id": 3,
    "category_id": 8,
    "size": "LT 265/65R17",
    "description": "LT CRUSEROSS - Extreme light-truck all-terrain 4x4 tire built for high load capacity, puncture-resistant casing, and heavy-duty off-road adventure",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/warrior-at-plus.png"
    ]
  },
  {
    "id": 313,
    "name": "Warrior Light Truck Commercial CR19 / WS320",
    "slug": "warrior-lt-commercial-cr19",
    "brand_id": 3,
    "category_id": 16,
    "size": "185R14C",
    "description": "LT LIGHT-TRUCK - Heavy-duty commercial van and truck radial tire engineered for maximum payload capacity, high ply ratings, and extreme durability on Pakistani commercial routes",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/warrior-1.png"
    ]
  },
  {
    "id": 401,
    "name": "Atlas Green ULM W/L",
    "slug": "atlas-green-ulm-wl",
    "brand_id": 4,
    "category_id": 9,
    "size": "165/70R12",
    "description": "PCR - Compact city car eco-friendly passenger tire engineered for low rolling resistance, long wear life, and comfortable daily commuting",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/atlas-green-at.png"
    ]
  },
  {
    "id": 402,
    "name": "Atlas Green AT Passenger",
    "slug": "atlas-green-at-passenger",
    "brand_id": 4,
    "category_id": 9,
    "size": "185/65R15",
    "description": "PCR - All-terrain pattern passenger & crossover tire built with multi-siped tread blocks for smooth handling and reliable wet grip",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/atlas-green-at.png"
    ]
  },
  {
    "id": 403,
    "name": "Atlas LT Nylon Series (LL87 / LL MG99 / LL89)",
    "slug": "atlas-lt-nylon-series",
    "brand_id": 4,
    "category_id": 10,
    "size": "7.50-16 16PR",
    "description": "LT NYLON - Heavy-duty nylon bias light truck tire built for maximum load durability, rugged puncture resistance, and tough commercial transport on Pakistani highways",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/atlas-otr-heavy.png"
    ]
  },
  {
    "id": 404,
    "name": "Atlas Tractor Agricultural LBR103 AT",
    "slug": "atlas-tractor-agri-lbr103",
    "brand_id": 4,
    "category_id": 17,
    "size": "23.1-26 TL 12PR",
    "description": "AGRI - Heavy agricultural tractor & harvester tire engineered with deep lug tread design for maximum field traction, mud clearing, and soil protection",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/atlas-otr-heavy.png"
    ]
  },
  {
    "id": 405,
    "name": "Atlas OTR Heavy Machinery Earthmover & Loader Series",
    "slug": "atlas-otr-earthmover-loader",
    "brand_id": 4,
    "category_id": 18,
    "size": "20.5R25**",
    "description": "OTR - Heavy-duty mining, quarry, and construction earthmover machinery tire built for extreme rock cut resistance, heavy payloads, and durability",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/atlas-otr-heavy.png"
    ]
  },
  {
    "id": 406,
    "name": "Atlas Industrial Forklift LL45",
    "slug": "atlas-industrial-forklift-ll45",
    "brand_id": 4,
    "category_id": 19,
    "size": "600-9 10PR",
    "description": "IND FORKLIFT - Heavy industrial forklift tire engineered with thick sidewall protection and high ply rating for heavy warehouse material handling",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/atlas-otr-heavy.png"
    ]
  },
  {
    "id": 501,
    "name": "Risen RP68 Passenger",
    "slug": "risen-rp68-passenger",
    "brand_id": 5,
    "category_id": 11,
    "size": "195/65R15",
    "description": "RP68 PASSENGER - Premium touring passenger tire engineered with variable pitch tread blocks for whisper-quiet ride comfort, superior wet braking, and 4 wide longitudinal drainage grooves",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/risen-rp68.png"
    ]
  },
  {
    "id": 502,
    "name": "Risen RS20 Eco Comfort",
    "slug": "risen-rs20-eco-comfort",
    "brand_id": 5,
    "category_id": 11,
    "size": "185/65R15",
    "description": "High-efficiency compact & midsize sedan tire offering low rolling resistance, long wear life, and dependable wet surface traction for daily urban driving.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/risen-rp68.png"
    ]
  },
  {
    "id": 503,
    "name": "Risen HT70 Highway SUV",
    "slug": "risen-ht70-highway-suv",
    "brand_id": 5,
    "category_id": 12,
    "size": "235/65R17",
    "description": "Highway terrain SUV & crossover tire engineered for smooth luxury cruising, low road noise, and stable high-speed handling across Pakistani highways.",
    "stock_status": "in_stock",
    "featured": true,
    "images": [
      "/images/tires/risen-rp68.png"
    ]
  },
  {
    "id": 504,
    "name": "Risen AT01 All-Terrain 4x4",
    "slug": "risen-at01-all-terrain",
    "brand_id": 5,
    "category_id": 12,
    "size": "265/70R16",
    "description": "Aggressive All-Terrain 4x4 tire with reinforced sidewalls, self-cleaning tread grooves, and tough off-road mud & gravel traction.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/risen-rp68.png"
    ]
  },
  {
    "id": 505,
    "name": "Risen RL88 Commercial Light Truck",
    "slug": "risen-rl88-commercial-truck",
    "brand_id": 5,
    "category_id": 20,
    "size": "185R14C",
    "description": "Heavy-duty commercial van & light truck radial tire engineered for high load capacity, puncture-resistant casing, and extended mileage on delivery routes.",
    "stock_status": "in_stock",
    "featured": false,
    "images": [
      "/images/tires/risen-rp68.png"
    ]
  }
];

export const dealers: Dealer[] = [
  { id: 1, name: "Rashid Sons", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0315-4416626", lat: 31.5724, lng: 74.3075, brands: ["ALL BRANDS"] },
  { id: 2, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0321-4697896", lat: 31.5724, lng: 74.3075, brands: ["ALL BRANDS"] },
  { id: 3, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "Faisal Town, Lahore", phone: "0300-4058489", lat: 31.4727, lng: 74.3072, brands: ["ALL BRANDS"] },
  { id: 4, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "DHA Kamaha Interchange, Lahore", phone: "0313-7017059", lat: 31.4580, lng: 74.4120, brands: ["ALL BRANDS"] },
  { id: 5, name: "Fine Traders", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0321-4457276", lat: 31.5724, lng: 74.3075, brands: ["ALL BRANDS"] },
  { id: 6, name: "Sardar Ent", city: "Lahore", region: "Punjab", address: "Sardar Enterprises 313 Circular Road, Lahore", phone: "0345-4040726", lat: 31.5830, lng: 74.3160, brands: ["ALL BRANDS"] },
  { id: 7, name: "Shakeel Tyre", city: "Gujranwala", region: "Punjab", address: "Opposite Iqbal School GT Rd, Gujranwala", phone: "0337-7903730 / 0312-7915855", lat: 32.1617, lng: 74.1883, brands: ["Yokohama", "Warrior", "Atlas Tyre", "Risen", "Falken"] },
  { id: 8, name: "Japan Tyre", city: "Islamabad", region: "Federal", address: "Blue Area Huma Plaza, Islamabad", phone: "0345-2055505 / 0321-5699331", lat: 33.7118, lng: 73.0573, brands: ["Yokohama"] },
  { id: 9, name: "Mughal Auto", city: "Sialkot", region: "Punjab", address: "Shahabpura, Sialkot", phone: "0332-5252535", lat: 32.4945, lng: 74.5229, brands: ["ALL BRANDS"] },
  { id: 10, name: "Anees Tyre", city: "Peshawar", region: "KPK", address: "Fakhr-e-Alam Rd, Cantt, Peshawar", phone: "091-5278895", lat: 34.0040, lng: 71.5540, brands: ["Yokohama", "Warrior"] },
  { id: 11, name: "Malik Tyre", city: "Peshawar", region: "KPK", address: "F.C Dil Jan Plaza, Sunehri Masjid Rd, Peshawar", phone: "0345-9086758", lat: 34.0080, lng: 71.5510, brands: ["Yokohama"] },
  { id: 12, name: "Shehzad Traders", city: "Faisalabad", region: "Punjab", address: "Canal Road, Faisalabad", phone: "0336-0000026", lat: 31.4360, lng: 73.0900, brands: ["ALL BRANDS"] },
  { id: 13, name: "Chaudhary Tyres", city: "Sargodha", region: "Punjab", address: "Fatima Jinnah Rd, Sargodha", phone: "0300-6037781 / 0310-7768566", lat: 32.0836, lng: 72.6711, brands: ["Yokohama", "Goodyear", "Warrior"] },
  { id: 14, name: "Muslim Tyres", city: "Sargodha", region: "Punjab", address: "Fatima Jinnah Rd, Sargodha", phone: "0321-8600678", lat: 32.0836, lng: 72.6711, brands: ["Yokohama"] },
  { id: 15, name: "Olympia Tyre", city: "Multan", region: "Punjab", address: "Vehari Road, Multan", phone: "0321-6382002", lat: 30.1700, lng: 71.4900, brands: ["Yokohama"] },
  { id: 16, name: "United Motors", city: "Multan", region: "Punjab", address: "Nawa Shehar Road, Multan", phone: "0300-6369695", lat: 30.1980, lng: 71.4680, brands: ["ALL BRANDS"] },
  { id: 17, name: "Sardar Ent.", city: "Karachi", region: "Sindh", address: "PSO Pump 6 No Checkpost Cantt, Karachi", phone: "021-34900207", lat: 24.8500, lng: 67.0300, brands: ["ALL BRANDS"] },
  { id: 18, name: "Misal Ent.", city: "Karachi", region: "Sindh", address: "Sharah-e-Qadeem Plot#235, Karachi", phone: "0300-3478088", lat: 24.8600, lng: 67.0100, brands: ["Yokohama"] },
  { id: 19, name: "Pakistan Motor", city: "Sukkur", region: "Sindh", address: "Hussaini Rd, Gharyabad, Sukkur", phone: "0333-7151707", lat: 27.7052, lng: 68.8574, brands: ["Yokohama"] },
  { id: 20, name: "Wheel Look", city: "Hyderabad", region: "Sindh", address: "Latifabad Road, Hyderabad", phone: "0312-1332056", lat: 25.3670, lng: 68.3670, brands: ["Yokohama"] },
  { id: 21, name: "Hafiz Jamali Tyre", city: "Sindh", region: "Sindh", address: "Sindh Region", phone: "0334-0224114", lat: 25.0000, lng: 68.0000, brands: ["ALL BRANDS"] },
  { id: 22, name: "Madina Tyre", city: "Rahim Yar Khan", region: "Punjab", address: "Belgium Chowk Shahi Rd, Rahim Yar Khan", phone: "0300-7029298 / 0316-6300266", lat: 28.4212, lng: 70.2989, brands: ["Yokohama"] },
  { id: 23, name: "Lucky Tyre", city: "Haripur", region: "KPK", address: "Haripur City", phone: "0300-9115854", lat: 33.9946, lng: 72.9332, brands: ["Warrior"] },
  { id: 24, name: "Rustam Tyre", city: "Mardan", region: "KPK", address: "Charsaddah Road Near Inayat Shopping Center, Mardan", phone: "0300-5724177", lat: 34.1980, lng: 72.0400, brands: ["Warrior"] },
  { id: 25, name: "Anees Tyre", city: "Islamabad", region: "Federal", address: "F-10 Markaz, Islamabad", phone: "0345-5278895", lat: 33.6983, lng: 73.0135, brands: ["Yokohama", "Warrior", "Atlas Tyre", "Risen"] },
  { id: 26, name: "Ibrahim Autos", city: "Hyderabad", region: "Sindh", address: "Auto Bhan Road / Latifabad, Hyderabad", phone: "0312-3456789", lat: 25.3670, lng: 68.3670, brands: ["Yokohama", "Warrior", "Atlas Tyres Truck"] },
  { id: 27, name: "Rahim Yar Khan Tyre Center (RTC)", city: "Rahim Yar Khan", region: "Punjab", address: "6- Circular Road, Belgium Chowk, Rahim Yar Khan", phone: "0300-0630870", lat: 28.4212, lng: 70.2989, brands: ["ALL BRANDS"] },
  { id: 28, name: "MashaAllah Tyre & Wheel Alignment", city: "Depalpur", region: "Punjab", address: "Okara Road, Katchery Road, Depalpur", phone: "0304-1945450 / 0307-1964974", lat: 30.6708, lng: 73.6534, brands: ["ALL BRANDS"] },
];

export const branches: Branch[] = [
  {
    id: 1,
    name: "Anarkali Branch",
    address: "14, Nila Gumbad, Dina Nath Mansion, Anarkali, Lahore",
    phone: "+92 42 37232001",
    city: "Lahore",
    sort_order: 1,
  },
  {
    id: 2,
    name: "Ravi Road Branch",
    address: "Plot # 29, Shop # 3-4 Truck Adda, Ravi Road, Lahore",
    phone: "+92 42 37652001",
    city: "Lahore",
    sort_order: 2,
  },
  {
    id: 3,
    name: "Faisal Town Branch",
    address: "2 - C1, Block C1, Abul Hassan Isfahani Road, Faisal Town, Lahore",
    phone: "+92 42 35160001",
    city: "Lahore",
    sort_order: 3,
  },
  {
    id: 4,
    name: "DHA Branch",
    address: "Kamahan Lidher Road, DHA Lahore",
    phone: "+92 42 35721001",
    city: "Lahore",
    sort_order: 4,
  },
  {
    id: 5,
    name: "Malir Karachi Branch",
    address: "Askari PSO Pump, Malir Karachi Cantt",
    phone: "+92 21 34502001",
    city: "Karachi",
    sort_order: 5,
  },
  {
    id: 6,
    name: "Badami Bagh Branch",
    address: "313 Circular Road, Badami Bagh Lahore",
    phone: "+92 42 37712001",
    city: "Lahore",
    sort_order: 6,
  }
];

// Helper functions
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getCategoriesByBrand(brandId: number): Category[] {
  return categories.filter((c) => c.brand_id === brandId);
}

export function getCategoryBySlug(slug: string, brandId?: number): Category | undefined {
  if (brandId) {
    return categories.find((c) => c.slug === slug && c.brand_id === brandId);
  }
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categoryId: number): Product[] {
  return products.filter((p) => p.category_id === categoryId);
}

export function getProductsByBrand(brandId: number): Product[] {
  return products.filter((p) => p.brand_id === brandId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getDealersByCity(city: string): Dealer[] {
  return dealers.filter(
    (d) => d.city.toLowerCase() === city.toLowerCase()
  );
}
