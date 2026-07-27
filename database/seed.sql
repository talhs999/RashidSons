-- Seed Data for J Rashid & Sons

-- Insert Brands
INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (1, 'Yokohama', 'yokohama', '/images/partners/yokohama-clean.png', '/images/partners/yokohama-white.png', 'Premium Japanese tyre manufacturer...');
INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (2, 'Goodyear', 'goodyear', '/images/partners/goodyear-clean.png', '/images/partners/goodyear-clean.png', 'Goodyear Tire & Rubber Company...');
INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (3, 'Michelin', 'michelin', '/images/partners/michelin-clean.png', '/images/partners/michelin-hd.png', 'French multinational tyre manufacturer...');
INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (4, 'Blackarrow', 'blackarrow', '/images/partners/blackarrow-clean.png', '/images/partners/blackarrow-white.png', 'Blackarrow tyres deliver exceptional value...');
INSERT INTO brands (id, name, slug, logo_url, logo_white_url, description) VALUES (5, 'Warrior', 'warrior', '/images/brands/warrior-final-black.png', '/images/partners/warrior-white.png', 'Warrior tyres are built tough...');

-- Insert Categories
INSERT INTO categories (id, name, slug, brand_id) VALUES (1, 'Passenger Car Tyres', 'passenger-car', 1);
INSERT INTO categories (id, name, slug, brand_id) VALUES (2, 'SUV / 4x4 Tyres', 'suv-4x4', 1);
INSERT INTO categories (id, name, slug, brand_id) VALUES (3, 'Commercial Tyres', 'commercial', 1);
INSERT INTO categories (id, name, slug, brand_id) VALUES (4, 'Passenger Car Tyres', 'goodyear-passenger', 2);
INSERT INTO categories (id, name, slug, brand_id) VALUES (5, 'SUV / 4x4 Tyres', 'goodyear-suv', 2);
INSERT INTO categories (id, name, slug, brand_id) VALUES (6, 'Performance Tyres', 'goodyear-performance', 2);

-- Note: Tire Families and Products to be seeded similarly.
