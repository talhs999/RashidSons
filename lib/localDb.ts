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

// Certified Partners Helpers
export function getPartnersSettings() {
  const db = readDb();
  if (!db.certified_partners) {
    db.certified_partners = {
      heading: "We have over 150+ Certified Partners",
      partners: []
    };
  }
  return db.certified_partners;
}

export function updatePartnersHeading(heading: string) {
  const db = readDb();
  if (!db.certified_partners) {
    db.certified_partners = { heading: "", partners: [] };
  }
  db.certified_partners.heading = heading;
  writeDb(db);
  return db.certified_partners;
}

export function addPartner(partnerData: { name: string; logo_url: string }) {
  const db = readDb();
  if (!db.certified_partners) {
    db.certified_partners = { heading: "We have over 150+ Certified Partners", partners: [] };
  }
  const partners = db.certified_partners.partners || [];
  const newId = partners.length > 0 ? Math.max(...partners.map((p: any) => p.id)) + 1 : 1;
  const newPartner = { id: newId, ...partnerData };
  partners.push(newPartner);
  db.certified_partners.partners = partners;
  writeDb(db);
  return newPartner;
}

export function updatePartner(id: number, partnerData: { name: string; logo_url: string }) {
  const db = readDb();
  if (!db.certified_partners || !db.certified_partners.partners) return null;
  const index = db.certified_partners.partners.findIndex((p: any) => p.id === id);
  if (index !== -1) {
    db.certified_partners.partners[index] = { ...db.certified_partners.partners[index], ...partnerData };
    writeDb(db);
    return db.certified_partners.partners[index];
  }
  return null;
}

export function deletePartner(id: number) {
  const db = readDb();
  if (db.certified_partners && db.certified_partners.partners) {
    db.certified_partners.partners = db.certified_partners.partners.filter((p: any) => p.id !== id);
    writeDb(db);
  }
}

// Categories Helpers
export function getCategories() {
  const db = readDb();
  return db.categories || [];
}

export function getCategoryById(id: number) {
  const categories = getCategories();
  return categories.find((c: any) => c.id === id) || null;
}

export function getCategoriesByBrandId(brandId: number) {
  const categories = getCategories();
  return categories.filter((c: any) => c.brand_id === brandId);
}

export function getCategoryBySlug(slug: string, brandId?: number) {
  const categories = getCategories();
  if (brandId) {
    return categories.find((c: any) => c.slug === slug && c.brand_id === brandId) || null;
  }
  return categories.find((c: any) => c.slug === slug) || null;
}

export function createCategory(categoryData: any) {
  const db = readDb();
  if (!db.categories) db.categories = [];
  const newId = db.categories.length > 0 ? Math.max(...db.categories.map((c: any) => c.id)) + 1 : 1;
  const newCategory = { id: newId, ...categoryData };
  db.categories.push(newCategory);
  writeDb(db);
  return newCategory;
}

export function updateCategory(id: number, categoryData: any) {
  const db = readDb();
  const index = db.categories.findIndex((c: any) => c.id === id);
  if (index !== -1) {
    db.categories[index] = { ...db.categories[index], ...categoryData };
    writeDb(db);
    return db.categories[index];
  }
  return null;
}

export function deleteCategory(id: number) {
  const db = readDb();
  db.categories = db.categories.filter((c: any) => c.id !== id);
  writeDb(db);
}

// Products Helpers
export function getProducts() {
  const db = readDb();
  return db.products || [];
}

export function getProductById(id: number) {
  const products = getProducts();
  return products.find((p: any) => p.id === id) || null;
}

export function getProductsByBrandId(brandId: number) {
  const products = getProducts();
  return products.filter((p: any) => p.brand_id === brandId);
}

export function getProductsByCategoryId(categoryId: number) {
  const products = getProducts();
  return products.filter((p: any) => p.category_id === categoryId);
}

export function getProductBySlug(slug: string) {
  const products = getProducts();
  return products.find((p: any) => p.slug === slug) || null;
}

export function createProduct(productData: any) {
  const db = readDb();
  if (!db.products) db.products = [];
  const newId = db.products.length > 0 ? Math.max(...db.products.map((p: any) => p.id)) + 1 : 1;
  const newProduct = { id: newId, ...productData };
  db.products.push(newProduct);
  writeDb(db);
  return newProduct;
}

export function updateProduct(id: number, productData: any) {
  const db = readDb();
  const index = db.products.findIndex((p: any) => p.id === id);
  if (index !== -1) {
    db.products[index] = { ...db.products[index], ...productData };
    writeDb(db);
    return db.products[index];
  }
  return null;
}

export function deleteProduct(id: number) {
  const db = readDb();
  db.products = db.products.filter((p: any) => p.id !== id);
  writeDb(db);
}

export function getBrandBySlug(slug: string) {
  const brands = getBrands();
  return brands.find((b: any) => b.slug === slug) || null;
}

