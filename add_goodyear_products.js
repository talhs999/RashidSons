const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Generate a unique ID for new products
const maxProductId = Math.max(...dbData.products.map(p => p.id), 0);

const newProducts = [
  {
    "id": maxProductId + 1,
    "name": "Goodyear EfficientGrip Performance 2",
    "slug": "goodyear-efficientgrip-performance-2",
    "brand_id": 2,
    "category_id": 4, 
    "description": "The Goodyear EfficientGrip Performance 2 offers 50% more miles and the shortest braking distances on wet and dry roads. Designed for optimal touring and passenger car performance.",
    "stock_status": "in_stock",
    "featured": true,
    "images": ["/images/tires/goodyear_effigrip_perf2.png"]
  },
  {
    "id": maxProductId + 2,
    "name": "Goodyear Eagle Sport 2",
    "slug": "goodyear-eagle-sport-2",
    "brand_id": 2,
    "category_id": 4,
    "description": "The Eagle Sport 2 delivers excellent all-season sport performance with enhanced steering responsiveness and confident grip in various conditions.",
    "stock_status": "in_stock",
    "featured": false,
    "images": ["/images/tires/goodyear_eagle_sport2.png"]
  },
  {
    "id": maxProductId + 3,
    "name": "Goodyear Eagle F1 Asymmetric 5",
    "slug": "goodyear-eagle-f1-asymmetric-5",
    "brand_id": 2,
    "category_id": 4,
    "description": "High-performance summer tire delivering superior wet grip and luxurious comfort, offering short braking distances in wet and dry conditions.",
    "stock_status": "in_stock",
    "featured": true,
    "images": ["/images/tires/goodyear_eagle_f1_asy5.png"]
  },
  {
    "id": maxProductId + 4,
    "name": "Goodyear Eagle F1 Asymmetric 3 MOE RFT",
    "slug": "goodyear-eagle-f1-asymmetric-3-moe-rft",
    "brand_id": 2,
    "category_id": 5, 
    "description": "Ultra-high-performance tire featuring RunOnFlat technology and Mercedes Original Extended (MOE) homologation. Shorter braking distances and precise handling.",
    "stock_status": "in_stock",
    "featured": false,
    "images": ["/images/tires/goodyear_eagle_f1_asy3.png"]
  },
  {
    "id": maxProductId + 5,
    "name": "Goodyear Eagle F1 Asymmetric 2 MOE RFT",
    "slug": "goodyear-eagle-f1-asymmetric-2-moe-rft",
    "brand_id": 2,
    "category_id": 4,
    "description": "High-performance tire with RunOnFlat capabilities, engineered for responsive handling and control in dry and wet conditions.",
    "stock_status": "in_stock",
    "featured": false,
    "images": ["/images/tires/goodyear_eagle_f1_asy2.png"]
  },
  {
    "id": maxProductId + 6,
    "name": "Goodyear EfficientGrip RFT MOE ROF",
    "slug": "goodyear-efficientgrip-rft-moe-rof",
    "brand_id": 2,
    "category_id": 4,
    "description": "Features RunOnFlat technology ensuring mobility even after a puncture. Designed with fuel-saving technology for efficient, long-lasting drives.",
    "stock_status": "in_stock",
    "featured": false,
    "images": ["/images/tires/goodyear_effigrip_rft.png"]
  },
  {
    "id": maxProductId + 7,
    "name": "Goodyear Eagle F1 Asymmetric 6",
    "slug": "goodyear-eagle-f1-asymmetric-6",
    "brand_id": 2,
    "category_id": 4,
    "description": "The latest ultra-high-performance tire ready for anything. Superb dry and wet performance and optimized for electric vehicles.",
    "stock_status": "in_stock",
    "featured": true,
    "images": ["/images/tires/goodyear_eagle_f1_asy6.png"]
  }
];

dbData.products.push(...newProducts);

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log('Successfully added 7 new Goodyear products (without specific sizes).');
