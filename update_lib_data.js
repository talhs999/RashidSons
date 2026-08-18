const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const dataTsPath = path.join(__dirname, 'lib', 'data.ts');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let content = fs.readFileSync(dataTsPath, 'utf8');

// Replace products array in data.ts
const productsJson = JSON.stringify(db.products, null, 2);

const regex = /export const products: Product\[\] = \[[\s\S]*?\];/;
content = content.replace(regex, `export const products: Product[] = ${productsJson};`);

fs.writeFileSync(dataTsPath, content, 'utf8');
console.log('Successfully updated lib/data.ts with products from database.json');
