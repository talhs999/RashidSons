-- J. Rashid & Sons Database Schema
-- Run this in phpMyAdmin (XAMPP locally, Hostinger for production)

CREATE DATABASE IF NOT EXISTS jrashid_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE jrashid_db;

-- ============================================
-- ADMINS
-- ============================================
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'staff',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================
-- BRANDS
-- ============================================
CREATE TABLE brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  logo_url VARCHAR(255),
  banner_url VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================
-- CATEGORIES
-- ============================================
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  brand_id INT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================
-- PRODUCTS
-- ============================================
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE,
  brand_id INT,
  category_id INT,
  size VARCHAR(50),
  description TEXT,
  price DECIMAL(10,2) NULL,
  stock_status ENUM('in_stock','out_of_stock','on_order') DEFAULT 'in_stock',
  featured TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================
-- PRODUCT IMAGES
-- ============================================
CREATE TABLE product_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================
-- DEALERS
-- ============================================
CREATE TABLE dealers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  city VARCHAR(100) NOT NULL,
  region VARCHAR(100),
  address VARCHAR(255),
  phone VARCHAR(50),
  lat DECIMAL(10,7),
  lng DECIMAL(10,7),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================
-- BRANCHES
-- ============================================
CREATE TABLE branches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  city VARCHAR(100) DEFAULT 'Lahore',
  sort_order INT DEFAULT 0
) ENGINE=InnoDB;

-- ============================================
-- CONTACT SUBMISSIONS
-- ============================================
CREATE TABLE contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  phone VARCHAR(50),
  email VARCHAR(150),
  city VARCHAR(100),
  message TEXT,
  product_id INT NULL,
  status ENUM('new','read','responded') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ============================================
-- DEFAULT ADMIN USER
-- password: admin123 (bcrypt hash — change after first login)
-- ============================================
INSERT INTO admins (name, email, password_hash, role) VALUES
('Admin', 'admin@jrashid.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'staff');

-- ============================================
-- SEED DATA: BRANDS
-- ============================================
INSERT INTO brands (name, slug, logo_url, description) VALUES
('Yokohama', 'yokohama', '/uploads/brands/yokohama.png', 'Yokohama Rubber Company is a Japanese tire manufacturer. As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering to Pakistani roads.'),
('Goodyear', 'goodyear', '/uploads/brands/goodyear.png', 'Goodyear is one of the world''s largest tire companies. J. Rashid & Sons is a proud distributor of Goodyear tyres across Pakistan, delivering American quality and reliability.'),
('Michelin', 'michelin', '/uploads/brands/michelin.png', 'Michelin is a French multinational tyre manufacturer known for premium quality and innovation. Experience world-class performance with Michelin tyres from J. Rashid & Sons.'),
('Blackarrow', 'blackarrow', '/uploads/brands/blackarrow.png', 'Blackarrow tyres deliver exceptional value and performance for everyday driving. Available across Pakistan through J. Rashid & Sons dealer network.'),
('Warrior', 'warrior', '/uploads/brands/warrior.png', 'Warrior tyres are built tough for Pakistani road conditions. Designed for durability and performance at competitive prices.');

-- ============================================
-- SEED DATA: CATEGORIES
-- ============================================
INSERT INTO categories (name, slug, brand_id, image_url) VALUES
('Passenger Car Tyres', 'passenger-car', 1, '/uploads/categories/passenger-car.jpg'),
('SUV Tyres', 'suv', 1, '/uploads/categories/suv.jpg'),
('Commercial Tyres', 'commercial', 1, '/uploads/categories/commercial.jpg'),
('Passenger Car Tyres', 'goodyear-passenger', 2, '/uploads/categories/passenger-car.jpg'),
('SUV & 4x4 Tyres', 'goodyear-suv', 2, '/uploads/categories/suv.jpg'),
('Truck Tyres', 'goodyear-truck', 2, '/uploads/categories/truck.jpg'),
('Premium Tyres', 'michelin-premium', 3, '/uploads/categories/premium.jpg'),
('SUV Tyres', 'michelin-suv', 3, '/uploads/categories/suv.jpg'),
('All Season', 'blackarrow-allseason', 4, '/uploads/categories/allseason.jpg'),
('Performance', 'blackarrow-performance', 4, '/uploads/categories/performance.jpg'),
('All Terrain', 'warrior-allterrain', 5, '/uploads/categories/allterrain.jpg'),
('Highway', 'warrior-highway', 5, '/uploads/categories/highway.jpg');

-- ============================================
-- SEED DATA: PRODUCTS
-- ============================================
INSERT INTO products (name, slug, brand_id, category_id, size, description, stock_status, featured) VALUES
('Yokohama BluEarth AE51', 'yokohama-bluearth-ae51', 1, 1, '205/55R16', 'The BluEarth AE51 combines eco-friendly performance with excellent wet grip. Advanced silica compound for reduced rolling resistance and improved fuel economy.', 'in_stock', 1),
('Yokohama Geolandar A/T G015', 'yokohama-geolandar-at-g015', 1, 2, '265/70R16', 'All-terrain performance meets on-road comfort. Triple polymer tread compound delivers outstanding traction on any surface.', 'in_stock', 1),
('Yokohama TY517', 'yokohama-ty517', 1, 3, '11R22.5', 'Premium commercial drive tyre with deep tread design for extended mileage. Engineered for long-haul operations.', 'in_stock', 0),
('Goodyear Assurance TripleMax 2', 'goodyear-assurance-triplemax-2', 2, 4, '195/65R15', 'HydroTred Technology for superior wet braking. DuraGrip Technology for longer tyre life. Perfect for Pakistani city driving.', 'in_stock', 1),
('Goodyear Wrangler AT/SA+', 'goodyear-wrangler-at-sa-plus', 2, 5, '245/70R16', 'Versatile all-terrain tyre with aggressive tread pattern. Self-cleaning grooves for off-road confidence.', 'in_stock', 1),
('Goodyear KMAX S', 'goodyear-kmax-s', 2, 6, '315/80R22.5', 'Steer axle truck tyre with optimized footprint shape for even wear and long tread life.', 'in_stock', 0),
('Michelin Primacy 4 ST', 'michelin-primacy-4-st', 3, 7, '215/55R17', 'Premium touring tyre with EverGrip Technology. New when worn — maintains performance throughout its life.', 'in_stock', 1),
('Michelin Latitude Sport 3', 'michelin-latitude-sport-3', 3, 8, '235/65R17', 'High-performance SUV tyre combining sportiness with comfort. Green X technology for fuel efficiency.', 'in_stock', 0),
('Blackarrow Touring Plus', 'blackarrow-touring-plus', 4, 9, '185/65R15', 'Reliable all-season tyre with optimized tread pattern for comfortable daily driving in Pakistan.', 'in_stock', 0),
('Blackarrow Sport GT', 'blackarrow-sport-gt', 4, 10, '225/45R17', 'Performance-oriented tyre with aggressive tread design. Enhanced cornering stability and responsive handling.', 'in_stock', 0),
('Warrior All Terrain X', 'warrior-all-terrain-x', 5, 11, '265/75R16', 'Built for the toughest Pakistani roads. Reinforced sidewalls and deep tread lugs for maximum durability.', 'in_stock', 0),
('Warrior Highway Master', 'warrior-highway-master', 5, 12, '195/65R15', 'Smooth, quiet highway tyre with excellent fuel economy. Low rolling resistance compound.', 'in_stock', 0);

-- ============================================
-- SEED DATA: PRODUCT IMAGES
-- ============================================
INSERT INTO product_images (product_id, image_url, sort_order) VALUES
(1, '/uploads/products/yokohama-bluearth-ae51.png', 0),
(2, '/uploads/products/yokohama-geolandar-at-g015.png', 0),
(3, '/uploads/products/yokohama-ty517.png', 0),
(4, '/uploads/products/goodyear-assurance-triplemax-2.png', 0),
(5, '/uploads/products/goodyear-wrangler-at-sa-plus.png', 0),
(6, '/uploads/products/goodyear-kmax-s.png', 0),
(7, '/uploads/products/michelin-primacy-4-st.png', 0),
(8, '/uploads/products/michelin-latitude-sport-3.png', 0),
(9, '/uploads/products/blackarrow-touring-plus.png', 0),
(10, '/uploads/products/blackarrow-sport-gt.png', 0),
(11, '/uploads/products/warrior-all-terrain-x.png', 0),
(12, '/uploads/products/warrior-highway-master.png', 0);

-- ============================================
-- SEED DATA: BRANCHES
-- ============================================
INSERT INTO branches (name, address, phone, city, sort_order) VALUES
('Anarkali Branch', '14, Nila Gumbad, Dina Nath Mansion, Anarkali, Lahore', '+92 42 37232001', 'Lahore', 1),
('Ravi Road Branch', 'Plot # 29, Shop # 3-4 Truck Adda, Ravi Road, Lahore', '+92 42 37652001', 'Lahore', 2),
('Faisal Town Branch', '2 - C1, Block C1, Abul Hassan Isfahani Road, Faisal Town, Lahore', '+92 42 35160001', 'Lahore', 3),
('DHA Branch', 'Kamahan Lidher Road, DHA Lahore', '+92 42 35721001', 'Lahore', 4),
('Malir Karachi Branch', 'Askari PSO Pump, Malir Karachi Cantt', '+92 21 34502001', 'Karachi', 5),
('Badami Bagh Branch', '313 Circular Road, Badami Bagh Lahore', '+92 42 37712001', 'Lahore', 6);

-- ============================================
-- SEED DATA: DEALERS
-- ============================================
INSERT INTO dealers (name, city, region, address, phone, lat, lng) VALUES
('Al-Rashid Tyres', 'Lahore', 'Punjab', 'Main Boulevard, Gulberg III, Lahore', '+92 300 1234567', 31.5204, 74.3587),
('Pakistan Tyre House', 'Lahore', 'Punjab', 'GT Road, Baghbanpura, Lahore', '+92 301 2345678', 31.5897, 74.3436),
('Karachi Tyre Center', 'Karachi', 'Sindh', 'Shahrah-e-Faisal, Karachi', '+92 321 3456789', 24.8607, 67.0011),
('Islamabad Rubber Works', 'Islamabad', 'Federal', 'Blue Area, Islamabad', '+92 333 4567890', 33.7294, 73.0931),
('Peshawar Tyre Mart', 'Peshawar', 'KPK', 'University Road, Peshawar', '+92 345 5678901', 34.0151, 71.5249),
('Faisalabad Tyre House', 'Faisalabad', 'Punjab', 'D Ground, Faisalabad', '+92 300 6789012', 31.4504, 73.1350),
('Multan Tyre Center', 'Multan', 'Punjab', 'Bosan Road, Multan', '+92 301 7890123', 30.1575, 71.5249),
('Rawalpindi Auto Tyres', 'Rawalpindi', 'Punjab', 'Murree Road, Rawalpindi', '+92 333 8901234', 33.5651, 73.0169),
('Sargodha Tyre Depot', 'Sargodha', 'Punjab', 'Faisalabad Road, Sargodha', '+92 345 9012345', 32.0836, 72.6711),
('Hyderabad Rubber House', 'Hyderabad', 'Sindh', 'Autobahn Road, Hyderabad', '+92 300 0123456', 25.3960, 68.3578),
('Sukkur Tyre World', 'Sukkur', 'Sindh', 'Military Road, Sukkur', '+92 321 1234567', 27.7052, 68.8574),
('Quetta Tyre Palace', 'Quetta', 'Balochistan', 'Jinnah Road, Quetta', '+92 333 2345678', 30.1798, 66.9750);
