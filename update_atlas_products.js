const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Update Atlas Categories (brand_id: 4)
const nonAtlasCategories = db.categories.filter(c => c.brand_id !== 4);
const newAtlasCategories = [
  { id: 9, name: "Passenger Car Tyres (PCR)", slug: "passenger-car", brand_id: 4 },
  { id: 10, name: "Commercial Light Truck (LT Nylon)", slug: "commercial", brand_id: 4 },
  { id: 17, name: "Agricultural Tyres (AGRI)", slug: "agri", brand_id: 4 },
  { id: 18, name: "Off-The-Road Machinery (OTR)", slug: "otr", brand_id: 4 },
  { id: 19, name: "Industrial & Forklift", slug: "industrial", brand_id: 4 }
];
db.categories = [...nonAtlasCategories, ...newAtlasCategories];

// 2. Filter out existing Atlas products (brand_id: 4)
const nonAtlasProducts = db.products.filter(p => p.brand_id !== 4);

const newAtlasProducts = [
  // =========================================================================
  // PCR - PASSENGER CAR TYRES (category_id: 9)
  // =========================================================================
  {
    id: 401,
    name: "Atlas Green ULM W/L",
    slug: "atlas-green-ulm-wl",
    brand_id: 4,
    category_id: 9,
    size: "165/70R12",
    description: "PCR - Compact city car eco-friendly passenger tire engineered for low rolling resistance, long wear life, and comfortable daily commuting. Available sizes: 155/70R12 GREEN ULM W/L, 165/70R12 GREEN ULM W/L.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/atlas-green-at.png"]
  },
  {
    id: 402,
    name: "Atlas Green AT Passenger",
    slug: "atlas-green-at-passenger",
    brand_id: 4,
    category_id: 9,
    size: "185/65R15",
    description: "PCR - All-terrain pattern passenger & crossover tire built with multi-siped tread blocks for smooth handling and reliable wet grip. Available sizes: 165/70R13 GREEN AT, 175/70R13 GREEN AT, 165/65R14 GREEN AT, 165/70R14 GREEN AT, 185/70R14 GREEN AT, 185/60R15 GREEN AT, 185/65R15 GREEN AT (7 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/atlas-green-at.png"]
  },

  // =========================================================================
  // LT NYLON - COMMERCIAL LIGHT TRUCK (category_id: 10)
  // =========================================================================
  {
    id: 403,
    name: "Atlas LT Nylon Series (LL87 / LL MG99 / LL89)",
    slug: "atlas-lt-nylon-series",
    brand_id: 4,
    category_id: 10,
    size: "7.50-16 16PR",
    description: "LT NYLON - Heavy-duty nylon bias light truck tire built for maximum load durability, rugged puncture resistance, and tough commercial transport on Pakistani highways. Available sizes: 7.50-16 LL87 14PR, 7.50-16 LL MG99 16PR, 7.50-16 LL89 16PR.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/atlas-otr-heavy.png"]
  },

  // =========================================================================
  // AGRI - AGRICULTURAL TYRES (category_id: 17)
  // =========================================================================
  {
    id: 404,
    name: "Atlas Tractor Agricultural LBR103 AT",
    slug: "atlas-tractor-agri-lbr103",
    brand_id: 4,
    category_id: 17,
    size: "23.1-26 TL 12PR",
    description: "AGRI - Heavy agricultural tractor & harvester tire engineered with deep lug tread design for maximum field traction, mud clearing, and soil protection. Available sizes: 23.1-26 TL 12PR LBR103 AT, 23.1-30 TL 16PR LBR103 AT.",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/atlas-otr-heavy.png"]
  },

  // =========================================================================
  // OTR - OFF-THE-ROAD MACHINERY (category_id: 18)
  // =========================================================================
  {
    id: 405,
    name: "Atlas OTR Heavy Machinery Earthmover & Loader Series",
    slug: "atlas-otr-earthmover-loader",
    brand_id: 4,
    category_id: 18,
    size: "20.5R25**",
    description: "OTR - Heavy-duty mining, quarry, and construction earthmover machinery tire built for extreme rock cut resistance, heavy payloads, and durability. Available sizes: 1400-24 TT 16PR LL25 AT SDLG, 1800R33** LB02S TL LA E-4 S1, 20.5R25** LB02SD TL AT L5 C1 ZY, 23.1-26 TL 12PR LL308 LA, 23.5R25** LB02SD TL AT L5 C1 ZY (5 Sizes).",
    stock_status: "in_stock",
    featured: true,
    images: ["/images/tires/atlas-otr-heavy.png"]
  },

  // =========================================================================
  // IND FORKLIFT - INDUSTRIAL & FORKLIFT (category_id: 19)
  // =========================================================================
  {
    id: 406,
    name: "Atlas Industrial Forklift LL45",
    slug: "atlas-industrial-forklift-ll45",
    brand_id: 4,
    category_id: 19,
    size: "600-9 10PR",
    description: "IND FORKLIFT - Heavy industrial forklift tire engineered with thick sidewall protection and high ply rating for heavy warehouse material handling. Available sizes: 600-9 LL45 10PR.",
    stock_status: "in_stock",
    featured: false,
    images: ["/images/tires/atlas-otr-heavy.png"]
  }
];

db.products = [...nonAtlasProducts, ...newAtlasProducts];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Updated database.json with ${newAtlasProducts.length} Atlas products across 5 categories.`);
