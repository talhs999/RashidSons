const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Filter out existing Yokohama products (brand_id: 1)
const nonYokohamaProducts = db.products.filter(p => p.brand_id !== 1);

const newYokohamaProducts = [
  // =========================================================================
  // 1. PASSENGER CAR TYRES (category_id: 1) - 17 Products
  // =========================================================================
  {
    id: 101,
    name: "Yokohama Alliance AL30",
    slug: "yokohama-alliance-al30",
    brand_id: 1,
    category_id: 1,
    size: "185/65R14",
    description: "Reliable touring and all-season passenger tire engineered by Yokohama/Alliance for smooth comfort, long tread life, and quiet daily performance. Available sizes: 175/70R14 AL30, 165/70R14 AL30, 185/65R14 AL30, 195/65R15 AL30.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 102,
    name: "Yokohama S707",
    slug: "yokohama-s707",
    brand_id: 1,
    category_id: 1,
    size: "165/70R12",
    description: "Heavy-duty compact passenger tire providing durable performance, excellent wet stability, and long mileage for small city vehicles. Available sizes: 165/70R12 77H S707.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 103,
    name: "Yokohama ADVAN A460",
    slug: "yokohama-advan-a460",
    brand_id: 1,
    category_id: 1,
    size: "205/55R16",
    description: "Original equipment high-performance summer passenger tire engineered for crisp steering response, high-speed stability, and refined ride quality. Available sizes: 205/55R16 91V A460.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-apex.png"]
  },
  {
    id: 104,
    name: "Yokohama A.drive AA01",
    slug: "yokohama-adrive-aa01",
    brand_id: 1,
    category_id: 1,
    size: "185/65R14",
    description: "Yokohama A.drive (AA01) passenger tire designed to offer balanced handling, superior fuel efficiency, and confident wet surface traction. Available sizes: 175/70R13 A01, 185/70R13 86H AA01, 185/65R14 86H AA01.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 105,
    name: "Yokohama A-345",
    slug: "yokohama-a345",
    brand_id: 1,
    category_id: 1,
    size: "165/65R14",
    description: "Premium OE passenger tire engineered for ultra-quiet ride, low rolling resistance, and dependable everyday urban driving. Available sizes: 165/65R14 97S A345.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 106,
    name: "Yokohama BluEarth AE-50",
    slug: "yokohama-bluearth-ae-50",
    brand_id: 1,
    category_id: 1,
    size: "175/70R14",
    description: "Premium fuel-efficient passenger tire incorporating nano-blend rubber technology for outstanding wet grip and smooth touring comfort. Available sizes: 175/70R14 AE-50, 165/70R14 AE-50, 185/70R14 AE-50.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 107,
    name: "Yokohama BluEarth ES-32",
    slug: "yokohama-bluearth-es-32",
    brand_id: 1,
    category_id: 1,
    size: "195/65R15",
    description: "THE ALL NEW POWERFUL & COMFORTABLE TREAD - GRIP THE EARTH. High-rigidity extra-wide profile tread offering extra mileage, strong wet braking, and powerful stability across 13 to 18 inch rims. Available sizes: 175/70R14, 155/60R15, 175/70R13, 185/65R15, 195/65R15, 205/60R15, 205/65R15, 185/55R16, 195/50R16, 195/55R16, 195/60R16, 205/55R16, 205/60R16, 215/55R16, 225/55R16, 215/60R16, 225/60R16, 205/65R16, 205/40R17, 205/45R17, 215/45R17, 225/45R17, 215/50R17, 215/55R17, 225/50R17, 225/40R18, 235/40R18 (27 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-bluearth-es32.png"]
  },
  {
    id: 108,
    name: "Yokohama ADVAN dB V552",
    slug: "yokohama-advan-db-v552",
    brand_id: 1,
    category_id: 1,
    size: "215/55R16",
    description: "DRAMATIC SILENCE - Beautiful small block design creates breathtaking silence. Premium luxury noise-cancelling tire featuring small block tread design for near-silent cabin quietness and supreme comfort. Available sizes: 185/65R15, 195/65R15, 205/65R15, 195/55R16, 205/55R16, 215/55R16, 225/55R16, 205/60R16, 215/60R16, 215/50R17, 225/50R17, 215/55R17, 225/55R17, 215/60R17, 225/60R17, 225/45R18, 225/55R18, 235/45R18, 235/50R18, 245/50R18, 245/40R18, 245/45R18, 265/35R18, 245/45R19 (24 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-advan-db-v552.png"]
  },
  {
    id: 109,
    name: "Yokohama ADVAN dB V553",
    slug: "yokohama-advan-db-v553",
    brand_id: 1,
    category_id: 1,
    size: "215/55R17",
    description: "DRAMATIC SILENCE E+ - Handling Silence Comfort Dry Wet Asymmetric Luxury. Next-generation EV-compatible luxury quiet tire delivering sustainable noise suppression, long-lasting smoothness, and wet handling. Available sizes: 175/65R15, 185/65R15, 195/65R15, 195/55R16, 195/60R16, 205/55R16, 215/60R16, 205/60R16, 195/60R17, 215/45R17, 215/50R17, 215/55R17, 215/60R17, 225/45R17, 225/50R17, 225/55R17, 225/65R17, 245/45R17, 225/45R18, 225/50R18, 225/55R18, 225/60R18, 235/45R18, 235/50R18, 245/40R18, 245/45R18, 245/50R18, 225/55R19, 235/40R19, 245/40R19 (30 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-advan-db-v552.png"]
  },
  {
    id: 110,
    name: "Yokohama BluEarth-GT AE51",
    slug: "yokohama-bluearth-gt-ae51",
    brand_id: 1,
    category_id: 1,
    size: "205/55R16",
    description: "GRAND TOURING BLUE EARTH GTAE-51 - Newly-developed High-rigidity Asymmetrical Pattern Spirited. Grand touring passenger tire designed for high-speed stability, anti-uneven wear, and responsive steering performance. Available sizes: 155/65R14, 175/65R14, 175/65R15, 185/55R15, 185/60R15, 185/65R15, 195/60R15, 195/65R15, 205/65R15, 185/55R16, 195/55R16, 205/55R16, 205/60R16, 205/65R16, 215/55R16, 215/60R16, 215/50R17, 205/45R17, 225/55R17, 225/50R18, 235/45R18, 245/40R18, 245/45R18 (23 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 111,
    name: "Yokohama BluEarth RV-03",
    slug: "yokohama-bluearth-rv03",
    brand_id: 1,
    category_id: 1,
    size: "215/60R16",
    description: "Specially designed for MPV's BLUEARTH RV03 - Improved quietness & considerations designed for MPVs. Dedicated MPV and minivan tire engineered to reduce side-to-side sway, quieten rear-seat noise, and maximize wear life. Available sizes: 215/60R16, 225/55R18, 235/50R18.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 112,
    name: "Yokohama dB Decibel E70",
    slug: "yokohama-db-decibel-e70",
    brand_id: 1,
    category_id: 1,
    size: "215/60R16",
    description: "OEM quiet luxury touring tire optimized for fuel economy, smooth ride quality, and ultra-low tread pattern noise. Available sizes: 215/60R16 95V E70B, 215/55R17 93V E70B.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 113,
    name: "Yokohama ADVAN Apex V601",
    slug: "yokohama-advan-apex-v601",
    brand_id: 1,
    category_id: 1,
    size: "245/40R18",
    description: "MAKE YOUR CONTROL DIRECT ADVAN APEX V601 - Superior traction and handling without the road noise. High-performance summer tire engineered with solid center ribs, high-rigidity blocks, and micro-silica compound for maximum cornering. Available sizes: 225/45R17, 235/40R18, 235/45R18, 245/45R18, 245/40R18, 275/40R18, 225/40R19, 245/40R19, 245/45R19, 255/35R19, 275/35R19, 275/40R19, 275/35R20, 245/40R20 (14 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-apex.png"]
  },
  {
    id: 114,
    name: "Yokohama ADVAN Fleva V701",
    slug: "yokohama-advan-fleva-v701",
    brand_id: 1,
    category_id: 1,
    size: "195/55R16",
    description: "V701 - Sport compact street performance tire featuring directional claw grooves for aggressive wet traction and emotional driving response. Available sizes: 195/55R16 87V V701, 215/50R17 95W V701.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 115,
    name: "Yokohama ADVAN Sport V105",
    slug: "yokohama-advan-sport-v105",
    brand_id: 1,
    category_id: 1,
    size: "245/40R19",
    description: "ADVAN APEX V105 - Superb Performance Street Tire. Flagship high-speed sport tire developed on the Nürburgring for high-horsepower luxury sports cars and premium sedans. Available sizes: 205/55R16, 235/50R19, 245/40R19, 245/40R18, 275/35R19, 265/55R19, 315/35R20 RFT ZPS.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-sport-v107.webp"]
  },
  {
    id: 116,
    name: "Yokohama ADVAN Sport V107 EV",
    slug: "yokohama-advan-sport-v107-ev",
    brand_id: 1,
    category_id: 1,
    size: "275/35ZR21",
    description: "ADNAN SPORTS EV+SILENT FOAM V107 - Ultra-high performance EV and supercar tire with Silent Foam acoustic lining for whisper-quiet high-speed handling. Available sizes: 255/40ZR21, 275/35ZR21, 285/35ZR21, 305/30ZR21, 315/30ZR21, 315/30ZR22, 315/30ZR23.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-sport-v107.webp"]
  },
  {
    id: 117,
    name: "Yokohama RFT 103 ZPS",
    slug: "yokohama-rft-103-zps",
    brand_id: 1,
    category_id: 1,
    size: "225/50R17",
    description: "RFT 103 ZPS - Zero Pressure System (Run-Flat) tire allowing safe driving after total pressure loss, combining high-speed safety with comfort. Available sizes: 225/50R17 V103 ZPS, 245/50R18 V103 ZPS.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-apex.png"]
  },

  // =========================================================================
  // 2. SUV & 4X4 TYRES (category_id: 2) - 12 Products
  // =========================================================================
  {
    id: 118,
    name: "Yokohama ADVAN V61",
    slug: "yokohama-advan-v61",
    brand_id: 1,
    category_id: 2,
    size: "235/55R18",
    description: "Ultra-modern premium SUV original equipment tire offering agile high-speed handling, superior wet grip, and luxurious highway quietness. Available sizes: 235/55R18 V61, 235/60R18 V61, 225/55R19 V61, 235/55R19 V61.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-apex.png"]
  },
  {
    id: 119,
    name: "Yokohama BluEarth-XT AE61",
    slug: "yokohama-bluearth-xt-ae61",
    brand_id: 1,
    category_id: 2,
    size: "225/65R17",
    description: "GT AE-61, JUST FOR YOU, URBAN SUV TIRE BLUEARTH - All-new pattern for urban SUVs. Specialized crossover and urban SUV tire engineered to eliminate uneven wear, enhance cornering stability, and deliver a smooth ride. Available sizes: 215/50R17, 215/55R17, 225/55R17, 215/60R17, 225/60R17, 225/65R17, 225/50R18, 225/55R18, 235/50R18, 225/60R18, 235/60R18, 225/55R19, 235/55R19, 235/55R20 (14 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 120,
    name: "Yokohama Geolandar G91",
    slug: "yokohama-geolandar-g91",
    brand_id: 1,
    category_id: 2,
    size: "225/65R17",
    description: "Factory-fitted crossover & light SUV tire providing refined highway comfort, wet grip, and dependable all-season capability. Available sizes: 225/60R17 98H G91F, 225/65R17 G-91.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 121,
    name: "Yokohama Geolandar X-CV G057",
    slug: "yokohama-geolandar-xcv-g057",
    brand_id: 1,
    category_id: 2,
    size: "265/50R20",
    description: "GEOLANDAR X-CV GO-57 - The all new Performance A/S for Crossover SUV. Luxury performance all-season tire built for high-performance luxury SUVs, delivering wide contact patches and all-weather traction. Available sizes: 255/55R19, 235/45R19, 265/50R19, 265/55R19, 275/55R19, 255/55R20, 265/50R20, 265/55R20, 265/60R20, 295/35R21, 265/45R21, 275/45R21, 285/45R21, 275/40R22 (14 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 122,
    name: "Yokohama Geolandar CV G058",
    slug: "yokohama-geolandar-cv-g058",
    brand_id: 1,
    category_id: 2,
    size: "225/65R17",
    description: "GEO LANDER GO-58 - Transcend Time & Distance. Grand touring all-season SUV tire engineered with micro-silica polymer for long mileage, wet safety, and quiet highway cruising. Available sizes: 225/60R17, 225/65R17, 225/50R18, 225/55R18, 235/50R18, 235/55R18, 255/55R18, 225/60R18, 235/60R18, 265/60R18, 255/50R19, 225/55R19, 245/55R19, 255/55R19, 235/55R19, 235/55R20, 255/50R20, 255/55R20 (18 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 123,
    name: "Yokohama Geolandar H/T G056",
    slug: "yokohama-geolandar-ht-g056",
    brand_id: 1,
    category_id: 2,
    size: "265/70R16",
    description: "GEOLANDAR H/T GO-56 - Long-lasting comfort, everywhere you go. Heavy-duty highway terrain SUV & truck tire featuring adaptive 3D sipes and triple-polymer compound for extended tread wear. Available sizes: 255/70R15, 31*10.50R15, 245/70R16, 265/70R16, 275/70R16, 265/65R17, 275/65R17, 225/70R17, 255/60R18, 265/60R18, 285/60R18, 275/60R18, 275/65R18, 265/55R19, 285/50R20, 285/45R21, 275/50R21 (17 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 124,
    name: "Yokohama Geolandar A/T G015",
    slug: "yokohama-geolandar-at-g015",
    brand_id: 1,
    category_id: 2,
    size: "265/70R16",
    description: "GEO LANDER A/T GO-15 - High dimension All-Terrain tire. Greater Durability & Longer life. Excellent Wet Grip & Off-road capability across all surfaces. Available sizes: 31*10.50R15, 215/70R16, 245/70R16, 265/70R16, 275/70R16, 205/80R16, 265/65R17, 285/65R17, 225/70R17, 265/60R18, 275/65R18, 285/50R20 (12 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 125,
    name: "Yokohama Geolandar M/T G003",
    slug: "yokohama-geolandar-mt-g003",
    brand_id: 1,
    category_id: 2,
    size: "31*10.50R15",
    description: "AMAZING TRACTION GEO LANDER M/T G003 - INTEGRATED DESIGN CONCEPT. Extreme mud-terrain tire featuring Rock-Crusher blocks, aggressive sidewall armor, and GEO-SHIELD construction for off-road dominance. Available sizes: 31*10.50R15 A9Q, 285/75R16 GO03, 37*12.50R17C 4Q, LT 285/65R18C 5Q.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g003.png"]
  },
  {
    id: 126,
    name: "Yokohama Geolandar X-AT G016",
    slug: "yokohama-geolandar-xat-g016",
    brand_id: 1,
    category_id: 2,
    size: "265/70R17",
    description: "GEO LANDER X/T GO-16 FOR BULLET-PROOF VEHICLES - Go-anywhere performance. Extreme all-terrain crossover tire designed for bulletproof/armored vehicles, extreme loads, dual sidewall designs, and off-road trails. Available sizes: 31*10.50R15, 245/75R16, LT 265/75R16, LT 265-65R17, 265-65R17, LT 265/70R17, 265/65R18, 265/60R18, LT275/70R18, LT285/60R18, LT285/65R18, LT285/75R18, LT285/55R20, 265/60R20, LT285/60R20 (15 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g003.png"]
  },
  {
    id: 127,
    name: "Yokohama Geolandar A/T G-94",
    slug: "yokohama-geolandar-at-g94",
    brand_id: 1,
    category_id: 2,
    size: "265/65R17",
    description: "GEO LANDER A/T G-94 - Factory original equipment all-terrain tire customized for Toyota Land Cruiser and Hilux, delivering all-weather dependability. Available sizes: 265/70R16 G94, 265/65R17 B2SG94, 285/65R17 B6HG94, 285/60R18 B6VG94.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 128,
    name: "Yokohama Geolandar A/T G-31B",
    slug: "yokohama-geolandar-at-g31b",
    brand_id: 1,
    category_id: 2,
    size: "265/65R18",
    description: "GEO LANDER A/T G-31B - Specialty OEM all-terrain tire with reinforced bead structure for heavy SUVs and utility 4x4 vehicles. Available sizes: 265/65R18 B4VG31 X L TORR.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 129,
    name: "Yokohama Geolandar 4x4 PA02",
    slug: "yokohama-geolandar-4x4-pa02",
    brand_id: 1,
    category_id: 2,
    size: "285/50R20",
    description: "GEO LANDER 4X4 - High-performance luxury 4x4 urban street tire designed for big rim fitments, sleek aesthetics, and wet surface grip. Available sizes: 285/50R20 V105 TWRBL, 275/55R20 PA02, 285/50R20 B2VPA02.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },

  // =========================================================================
  // 3. COMMERCIAL & LIGHT TRUCK TYRES (category_id: 3) - 6 Products
  // =========================================================================
  {
    id: 130,
    name: "Yokohama Delivery Star RY356 Light Truck",
    slug: "yokohama-delivery-star-ry356",
    brand_id: 1,
    category_id: 3,
    size: "185R14C",
    description: "LT RADIAL - Heavy-duty delivery van and light truck commercial radial engineered for high payload capacity, puncture resistance, and long tread life. Available sizes: 185R14C 8PR RY356, 195R14C 8PR RY356, 195R15 6PR RY356.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 131,
    name: "Yokohama BluEarth-Van RY55 Commercial",
    slug: "yokohama-bluearth-van-ry55",
    brand_id: 1,
    category_id: 3,
    size: "195R14C",
    description: "LT RADIAL - Fuel efficient high mileage commercial van radial designed for maximum durability, wet safety, and heavy cargo transport. Available sizes: 185R14C 8PR RY55, 195R14C 8PR RY55, 195R15 8PR RY55, 195/70R15 RY55, 205/70R15 8PR RY55, 215/70R15C 8PR RY55, 225/70R15 8PR RY-55, 195/75R16 RY55, 215/75R16 RY55, 225/75R16 RY55, 235/65R16 8PR RY-55.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 132,
    name: "Yokohama Super Van RY53 Commercial",
    slug: "yokohama-super-van-ry53",
    brand_id: 1,
    category_id: 3,
    size: "205/70R15",
    description: "LT RADIAL - Heavy commercial transport radial featuring reinforced shoulder ribs for heavy urban multi-stop delivery routes. Available sizes: 205/70R15 8PR RY-53.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 133,
    name: "Yokohama Y-828A 4x4 Commercial Radial",
    slug: "yokohama-y828a-commercial",
    brand_id: 1,
    category_id: 3,
    size: "205R16",
    description: "LT RADIAL - All-terrain heavy load commercial 4x4 pickup radial tire engineered for rough rural roads and tough construction work. Available sizes: 205R16 Y-828A 8PR.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/yokohama-geolandar-g015.png"]
  },
  {
    id: 134,
    name: "Yokohama 99HG033 Commercial Truck Radial",
    slug: "yokohama-99hg033-radial",
    brand_id: 1,
    category_id: 3,
    size: "215/70R16",
    description: "LT RADIAL - High ply rating light truck commercial radial tire with reinforced casing for heavy cargo haulage. Available sizes: 215/70R16 8PR 99HG033.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/advan-fleva.png"]
  },
  {
    id: 135,
    name: "Yokohama Geolandar G018 Commercial Radial",
    slug: "yokohama-geolandar-g018",
    brand_id: 1,
    category_id: 3,
    size: "LT 265/70R17",
    description: "LT GO18 INCHES RIM / GO18 17/18 INCHES RIM - Heavy-duty light truck and 4x4 commercial radial engineered for high load capacity, rugged puncture resistance, and tough road durability. Available sizes: LT 285/75R16, LT 285/70R17, LT 275/70R18, LT 265/60R18, 255/70R15 GO18, 31*10.50R15 GO18, 265-65R17 GO18, 285-65R17 GO18, 265-60R18 GO18, 285/60R18 GO18 (10 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/yokohama-geolandar-g003.png"]
  }
];

db.products = [...nonYokohamaProducts, ...newYokohamaProducts];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated database.json with ${newYokohamaProducts.length} Yokohama products across 3 categories.`);
