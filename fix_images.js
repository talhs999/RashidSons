const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

dbData.products.forEach(product => {
  if (product.images && product.images.length > 0) {
    if (product.images[0].includes('/uploads/products/')) {
      if (product.brand_id === 1) { // Yokohama
        product.images = ['/images/tires/advan-fleva.png'];
      } else if (product.brand_id === 2) { // Goodyear
        product.images = ['/images/tires/goodyear-1.png'];
      } else if (product.brand_id === 3) { // Warrior
        product.images = ['/images/tires/warrior-1.png'];
      } else {
        product.images = ['/images/tires/advan-apex.png'];
      }
      console.log(`Fixed image for product ${product.name}`);
    }
  }
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log('Finished updating database.json');
