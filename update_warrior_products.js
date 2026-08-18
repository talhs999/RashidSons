const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Update Warrior Categories (brand_id: 3)
const nonWarriorCategories = db.categories.filter(c => c.brand_id !== 3);
const newWarriorCategories = [
  { id: 7, name: "Passenger Car Tyres", slug: "passenger-car", brand_id: 3 },
  { id: 8, name: "SUV & 4x4 Tyres", slug: "suv", brand_id: 3 },
  { id: 16, name: "Commercial Tyres", slug: "commercial", brand_id: 3 }
];
db.categories = [...nonWarriorCategories, ...newWarriorCategories];

// 2. Filter out existing Warrior products (brand_id: 3)
const nonWarriorProducts = db.products.filter(p => p.brand_id !== 3);

const newWarriorProducts = [
  // =========================================================================
  // PASSENGER CAR TYRES (category_id: 7) - 8 Products
  // =========================================================================
  {
    id: 301,
    name: "Warrior R700 EV",
    slug: "warrior-r700-ev",
    brand_id: 3,
    category_id: 7,
    size: "185/55R16",
    description: "EV Special - Advanced Electric Vehicle passenger tire designed for whisper-quiet rolling comfort, instantaneous torque traction, and low energy consumption. Available sizes: 145-70R12 69T, 165-65R15 81H, 185-55R16 87H XL, 215/55R17, 215/55R18.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-ecomax.png"]
  },
  {
    id: 302,
    name: "Warrior ECO-MAX",
    slug: "warrior-eco-max",
    brand_id: 3,
    category_id: 7,
    size: "195/65R15",
    description: "High-efficiency green touring passenger tire engineered for maximum fuel economy, smooth tread life, and reliable wet/dry handling across city and highway roads. Available sizes: 175-70R13 82T, 175-65R14 82H, 175-70R14, 185-65R14 86H, 185-70R14 88H, 185-60R15 84H, 185-65R15 88H, 195-65R15, 205-65R15 94V, 195-55R16 91W XL, 195-60R16 89H, 205-55R16 91V, 205-60R16 92V, 215-60R16 95V (14 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-ecomax.png"]
  },
  {
    id: 303,
    name: "Warrior R29",
    slug: "warrior-r29",
    brand_id: 3,
    category_id: 7,
    size: "185/55R15",
    description: "Durable daily commute passenger tire built for long mileage, wear resistance, and comfortable steering response for compact vehicles. Available sizes: 165-65R13, 155-65R14, 165-65R14 79T, 185-55R15, 195-65R15 91V.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/warrior-1.png"]
  },
  {
    id: 304,
    name: "Warrior R699",
    slug: "warrior-r699",
    brand_id: 3,
    category_id: 7,
    size: "185/65R15",
    description: "Premium family sedan tire featuring multi-pitch tread design to minimize road noise and provide enhanced wet braking safety. Available sizes: 165-70R13 79T, 165-70R14 81T, 175-65R14 82T, 185-70R14 88H, 185-65R15 88H, 195-65R15 91V.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/warrior-1.png"]
  },
  {
    id: 305,
    name: "Warrior R35 UHP",
    slug: "warrior-r35-uhp",
    brand_id: 3,
    category_id: 7,
    size: "225/45R18",
    description: "Ultra-high performance (UHP) summer sport tire delivering sharp cornering control, high-speed stability, and aggressive grip for sports sedans. Available sizes: 225-45R18 XL 95W, 215/45R17 91W, 235/35R19 91Y XL.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-ecomax.png"]
  },
  {
    id: 306,
    name: "Warrior Comfortune A05",
    slug: "warrior-comfortune-a05",
    brand_id: 3,
    category_id: 7,
    size: "215/55R16",
    description: "Luxury comfort-oriented touring tire optimized for vibration absorption, plush ride comfort, and stable high-speed cruising. Available sizes: 215-55R16, 185/65R15.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/warrior-1.png"]
  },
  {
    id: 307,
    name: "Warrior R32",
    slug: "warrior-r32",
    brand_id: 3,
    category_id: 7,
    size: "205/55R17",
    description: "High-performance sport touring tire featuring optimized tread blocks for precise steering feedback and excellent high-speed stability. Available sizes: 205-45ZR17 88W XL, 205-55R17 95V XL, 215-55R17 98W XL.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/warrior-ecomax.png"]
  },
  {
    id: 308,
    name: "Warrior Wondergy EV",
    slug: "warrior-wondergy-ev",
    brand_id: 3,
    category_id: 7,
    size: "225/45R18",
    description: "WONDERGY EV - Next-generation EV flagship tire engineered for high load index, ultra-low rolling resistance, and supreme acoustic quietness. Available sizes: 215/45R17 91W, 205/55R17 95V XL, 225/60R17 99H, 215/50R18 92Y, 225/45R18 95E XL, 235-45R18 98Y XL, 225-50R18 95W, 235/50R19 99V, 245/40R19 98W, 245-45R19 102Y XL, 255/45R19 100W, 255/45R21 105W XL, 265/45R21 108W XL, 245/40R20 103V XL, 255/40R20 101Y XL, 275/45R20 110Y XL, 235/55R20 102V, 275-40R19 101Y (18 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-ecomax.png"]
  },

  // =========================================================================
  // SUV & 4X4 TYRES (category_id: 8) - 4 Products
  // =========================================================================
  {
    id: 309,
    name: "Warrior SR1 / SR1HP SUV",
    slug: "warrior-sr1-suv",
    brand_id: 3,
    category_id: 8,
    size: "235/60R18",
    description: "Premium highway terrain crossover & SUV tire engineered for smooth luxury cruising, enhanced wet grip, and long-lasting tread wear. Available sizes: 215-60R17 96H SR1, 225-55R18 102W XL SR1, 235-60R18 103W SR1, 225-55R19 99V HP SR1, 265-65R17 112H SR1HP, 265-60R18 110H SR1HP.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-at-plus.png"]
  },
  {
    id: 310,
    name: "Warrior Cosilency SUV",
    slug: "warrior-cosilency-suv",
    brand_id: 3,
    category_id: 8,
    size: "235/55R18",
    description: "COSILENCY - Ultra-quiet luxury SUV tire featuring noise-cancelling tread sipes and extra-wide shoulder blocks for supreme highway comfort. Available sizes: 225-45R17 94W XL, 215-50R17 95W XL, 225/50R17 98W XL, 235-45R18 98W XL, 235-50R18 101V XL, 225/55R18 102W XL SUV, 235-55R18 104V XL SUV, 235-60R18 107V XL, 245-45R18 100W XL, 225-45R19 96W XL, 235-55R19 105V XL, 245-55R19 103V, 255/50R20 109W, 275-45R21 110W XL SUV (14 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-at-plus.png"]
  },
  {
    id: 311,
    name: "Warrior AT-PLUS 4x4",
    slug: "warrior-at-plus-4x4",
    brand_id: 3,
    category_id: 8,
    size: "265/70R16",
    description: "AT-PLUS - Heavy-duty All-Terrain 4x4 tire with reinforced sidewalls, self-cleaning tread grooves, and aggressive off-road mud & gravel traction. Available sizes: 265-70R16 115T XL, 265-65R17 112T, 265-60R18 114T XL, 285-60R18 120T XL, 215-75R15C AT-PLUS.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-at-plus.png"]
  },
  {
    id: 312,
    name: "Warrior LT Cruseross 4x4",
    slug: "warrior-lt-cruseross-4x4",
    brand_id: 3,
    category_id: 8,
    size: "LT 265/65R17",
    description: "LT CRUSEROSS - Extreme light-truck all-terrain 4x4 tire built for high load capacity, puncture-resistant casing, and heavy-duty off-road adventure. Available sizes: LT265/65R17 120/117S CRUSEROSS, LT265/65R18 122/119Q CRUSEROSS.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/warrior-at-plus.png"]
  },

  // =========================================================================
  // COMMERCIAL & LIGHT TRUCK TYRES (category_id: 16) - 1 Product
  // =========================================================================
  {
    id: 313,
    name: "Warrior Light Truck Commercial CR19 / WS320",
    slug: "warrior-lt-commercial-cr19",
    brand_id: 3,
    category_id: 16,
    size: "185R14C",
    description: "LT LIGHT-TRUCK - Heavy-duty commercial van and truck radial tire engineered for maximum payload capacity, high ply ratings, and extreme durability on Pakistani commercial routes. Available sizes: 175-70R14C 95/93S, 165R13 CR19, 185R14C 102/100Q, 195R14C 106/104, 195R15C 106/104R, 195/70R15C 104/102R, 205/70R15C 106/104R, 215-70R15C 109/107, 750R16 14PR WS320, 750R16 16PR WS256 (10 Sizes).",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/warrior-1.png"]
  }
];

db.products = [...nonWarriorProducts, ...newWarriorProducts];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated database.json with ${newWarriorProducts.length} Warrior products across 3 categories.`);
