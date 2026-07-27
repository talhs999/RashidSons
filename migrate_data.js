const fs = require('fs');

const dbPath = 'database.json';
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const allBrands = [
  {
    id: 1,
    name: "Yokohama",
    slug: "yokohama",
    logo_url: "/images/partners/yokohama-hd-5100.png",
    logo_white_url: "/images/brands/yokohama-white.png",
    description:
      "Yokohama Rubber Company is a Japanese tire manufacturer. As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering to Pakistani roads.",
  },
  {
    id: 2,
    name: "Michelin",
    slug: "michelin",
    logo_url: "/images/partners/michelin-hd.png",
    logo_white_url: "/images/partners/michelin-hd.png",
    description:
      "Michelin is a French multinational tyre manufacturer known for premium quality and innovation. Experience world-class performance with Michelin tyres from J. Rashid & Sons.",
  },
  {
    id: 3,
    name: "Goodyear",
    slug: "goodyear",
    logo_url: "/images/partners/goodyear-clean.png",
    logo_white_url: "/images/partners/goodyear-clean.png",
    description:
      "Goodyear Tire & Rubber Company is one of the world's largest tyre companies. J. Rashid & Sons provides authentic Goodyear tyres for passenger cars, SUVs, and commercial vehicles.",
  },
  {
    id: 4,
    name: "Blackarrow",
    slug: "blackarrow",
    logo_url: "/images/partners/blackarrow-clean.png",
    logo_white_url: "/images/partners/blackarrow-white.png",
    description:
      "Blackarrow tyres deliver exceptional value and performance for everyday driving. Available across Pakistan through J. Rashid & Sons dealer network.",
  },
  {
    id: 5,
    name: "Warrior",
    slug: "warrior",
    logo_url: "/images/brands/warrior-final-black.png",
    logo_white_url: "/images/brands/warrior-final-white.png",
    description:
      "Warrior tyres are built tough for Pakistani road conditions. Designed for durability and performance at competitive prices.",
  },
  {
    id: 6,
    name: "Rydanz",
    slug: "rydanz",
    logo_url: "/images/partners/rydanz-clean.png",
    logo_white_url: "/images/brands/rydanz-white.png",
    description:
      "Rydanz tyres provide exceptional safety, comfort, and grip. High performance engineered for smooth driving and durability across all terrains.",
  },
  {
    id: 7,
    name: "Yokohama Alliance",
    slug: "yokohama-alliance",
    logo_url: "/images/partners/alliance-clean.png",
    logo_white_url: "/images/brands/alliance-white.png",
    description:
      "Yokohama Alliance tyres deliver superior traction, durable construction, and trusted Japanese quality for agricultural, industrial, and passenger applications.",
  }
];

const allCategories = [
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
  { id: 13, name: "Passenger Tyres", "slug": "rydanz-passenger", brand_id: 6 },
  { id: 14, name: "SUV & 4x4", "slug": "rydanz-suv", brand_id: 6 },
  { id: 15, name: "Commercial & Off-Road", slug: "alliance-commercial", brand_id: 7 },
];

dbData.brands = allBrands;
dbData.categories = allCategories;

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));
console.log("Database updated with all brands and categories.");
