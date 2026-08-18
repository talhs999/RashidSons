const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Update Risen Categories (brand_id: 5)
const nonRisenCategories = db.categories.filter(c => c.brand_id !== 5);
const newRisenCategories = [
  { id: 11, name: "Passenger & Touring Tyres (RP68)", slug: "passenger-car", brand_id: 5 },
  { id: 12, name: "SUV & Crossover Tyres", slug: "suv", brand_id: 5 },
  { id: 20, name: "Commercial & Light Truck Tyres", slug: "commercial", brand_id: 5 }
];
db.categories = [...nonRisenCategories, ...newRisenCategories];

// 2. Filter out existing Risen products (brand_id: 5)
const nonRisenProducts = db.products.filter(p => p.brand_id !== 5);

const newRisenProducts = [
  // =========================================================================
  // PASSENGER & TOURING TYRES (category_id: 11)
  // =========================================================================
  {
    id: 501,
    name: "Risen RP68 Passenger",
    slug: "risen-rp68-passenger",
    brand_id: 5,
    category_id: 11,
    size: "195/65R15",
    description: "RP68 PASSENGER - Premium touring passenger tire engineered with variable pitch tread blocks for whisper-quiet ride comfort, superior wet braking, and 4 wide longitudinal drainage grooves. Available sizes: 165/65R13, 165/70R13, 175/65R14, 175/70R14, 185/60R14, 185/60R15, 185/65R14, 185/65R15, 185/70R14, 195/55R15, 195/55R16, 195/60R15, 195/65R15, 205/55R16, 205/60R16, 205/65R15, 215/60R16, 215/70R15, 205/45R17, 205/50R17, 205/55R17, 215/45R17, 215/50R17, 215/55R16, 215/55R17, 215/55R18, 225/45R17, 225/45R18, 225/50R17, 225/55R17, 225/55R18, 225/60R17, 225/65R17, 235/45R18, 235/50R18, 235/55R18, 235/55R19, 235/60R18, 245/45R18, 265/60R18, 265/65R17, 265/70R17, 275/45R20, 245/40R20 (65+ Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/risen-rp68.png"]
  },
  {
    id: 502,
    name: "Risen RS20 Eco Comfort",
    slug: "risen-rs20-eco-comfort",
    brand_id: 5,
    category_id: 11,
    size: "185/65R15",
    description: "High-efficiency compact & midsize sedan tire offering low rolling resistance, long wear life, and dependable wet surface traction for daily urban driving.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/risen-rp68.png"]
  },

  // =========================================================================
  // SUV & CROSSOVER TYRES (category_id: 12)
  // =========================================================================
  {
    id: 503,
    name: "Risen HT70 Highway SUV",
    slug: "risen-ht70-highway-suv",
    brand_id: 5,
    category_id: 12,
    size: "235/65R17",
    description: "Highway terrain SUV & crossover tire engineered for smooth luxury cruising, low road noise, and stable high-speed handling across Pakistani highways.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/risen-rp68.png"]
  },
  {
    id: 504,
    name: "Risen AT01 All-Terrain 4x4",
    slug: "risen-at01-all-terrain",
    brand_id: 5,
    category_id: 12,
    size: "265/70R16",
    description: "Aggressive All-Terrain 4x4 tire with reinforced sidewalls, self-cleaning tread grooves, and tough off-road mud & gravel traction.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/risen-rp68.png"]
  },

  // =========================================================================
  // COMMERCIAL & LIGHT TRUCK TYRES (category_id: 20)
  // =========================================================================
  {
    id: 505,
    name: "Risen RL88 Commercial Light Truck",
    slug: "risen-rl88-commercial-truck",
    brand_id: 5,
    category_id: 20,
    size: "185R14C",
    description: "Heavy-duty commercial van & light truck radial tire engineered for high load capacity, puncture-resistant casing, and extended mileage on delivery routes.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/risen-rp68.png"]
  }
];

db.products = [...nonRisenProducts, ...newRisenProducts];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated database.json with ${newRisenProducts.length} Risen products across 3 categories.`);
