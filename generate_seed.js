const fs = require('fs');

// We will read from a hardcoded export or just require the TS file after transpiling.
// Actually, it's easier to just copy the data structure here and generate SQL.

const brands = [
  {
    id: 1,
    name: "Yokohama",
    slug: "yokohama",
    logo_url: "/images/partners/yokohama-clean.png",
    logo_white_url: "/images/partners/yokohama-white.png",
    description: "Premium Japanese tyre manufacturer...",
  },
  {
    id: 2,
    name: "Goodyear",
    slug: "goodyear",
    logo_url: "/images/partners/goodyear-clean.png",
    logo_white_url: "/images/partners/goodyear-clean.png",
    description: "Goodyear Tire & Rubber Company...",
  },
  {
    id: 3,
    name: "Michelin",
    slug: "michelin",
    logo_url: "/images/partners/michelin-clean.png",
    logo_white_url: "/images/partners/michelin-hd.png",
    description: "French multinational tyre manufacturer...",
  },
  {
    id: 4,
    name: "Blackarrow",
    slug: "blackarrow",
    logo_url: "/images/partners/blackarrow-clean.png",
    logo_white_url: "/images/partners/blackarrow-white.png",
    description: "Blackarrow tyres deliver exceptional value...",
  },
  {
    id: 5,
    name: "Warrior",
    slug: "warrior",
    logo_url: "/images/brands/warrior-final-black.png",
    logo_white_url: "/images/partners/warrior-white.png",
    description: "Warrior tyres are built tough...",
  }
];

const categories = [
  { id: 1, name: "Passenger Car Tyres", slug: "passenger-car", brand_id: 1 },
  { id: 2, name: "SUV / 4x4 Tyres", slug: "suv-4x4", brand_id: 1 },
  { id: 3, name: "Commercial Tyres", slug: "commercial", brand_id: 1 },
  { id: 4, name: "Passenger Car Tyres", slug: "goodyear-passenger", brand_id: 2 },
  { id: 5, name: "SUV / 4x4 Tyres", slug: "goodyear-suv", brand_id: 2 },
  { id: 6, name: "Performance Tyres", slug: "goodyear-performance", brand_id: 2 },
];

let sql = `-- Seed Data for J Rashid & Sons

-- Insert Brands
`;

brands.forEach(b => {
  sql += `INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (${b.id}, '${b.name}', '${b.slug}', '${b.logo_url}', '${b.logo_white_url}', '${b.description.replace(/'/g, "''")}');\n`;
});

sql += `\n-- Insert Categories\n`;
categories.forEach(c => {
  sql += `INSERT INTO categories (id, name, slug, brand_id) VALUES (${c.id}, '${c.name}', '${c.slug}', ${c.brand_id});\n`;
});

sql += `\n-- Note: Tire Families and Products to be seeded similarly.\n`;

fs.writeFileSync('database/seed.sql', sql);
console.log('Seed SQL generated.');
