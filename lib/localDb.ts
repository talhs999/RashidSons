import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database.json');

export function readDb() {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
}

export function writeDb(data: any) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// Brands Helpers
export function getBrands() {
  const db = readDb();
  return db.brands || [];
}

export function getBrandById(id: number) {
  const brands = getBrands();
  return brands.find((b: any) => b.id === id) || null;
}

export function createBrand(brandData: any) {
  const db = readDb();
  if (!db.brands) db.brands = [];
  
  const newId = db.brands.length > 0 ? Math.max(...db.brands.map((b:any) => b.id)) + 1 : 1;
  const newBrand = { id: newId, ...brandData };
  
  db.brands.push(newBrand);
  writeDb(db);
  return newBrand;
}

export function updateBrand(id: number, brandData: any) {
  const db = readDb();
  const index = db.brands.findIndex((b: any) => b.id === id);
  if (index !== -1) {
    db.brands[index] = { ...db.brands[index], ...brandData };
    writeDb(db);
    return db.brands[index];
  }
  return null;
}

export function deleteBrand(id: number) {
  const db = readDb();
  db.brands = db.brands.filter((b: any) => b.id !== id);
  writeDb(db);
}
