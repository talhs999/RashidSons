const mysql = require('mysql2/promise');

async function initDB() {
  console.log("Connecting to MySQL server...");
  try {
    // Connect to MySQL server without specifying database first
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
    });
    console.log("Connected successfully to MySQL server.");

    // Create database if it doesn't exist
    await connection.query("CREATE DATABASE IF NOT EXISTS jrashid_db;");
    console.log("Database 'jrashid_db' is ready.");
    
    // Switch to database
    await connection.query("USE jrashid_db;");

    // Create admins table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create brands table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS brands (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        logo_url VARCHAR(255),
        logo_white_url VARCHAR(255),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create categories table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        brand_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
      )
    `);

    // Create tire_families table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tire_families (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        brand_id INT,
        logo VARCHAR(255),
        slogan VARCHAR(255),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
      )
    `);

    // Create products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        brand_id INT,
        category_id INT,
        family_id INT,
        tag VARCHAR(255),
        image_url VARCHAR(255),
        description TEXT,
        features JSON,
        sizes JSON,
        is_featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
        FOREIGN KEY (family_id) REFERENCES tire_families(id) ON DELETE SET NULL
      )
    `);

    console.log("All tables created successfully.");

    // Check if default admin exists
    const [admins] = await connection.query("SELECT * FROM admins WHERE username = 'admin'");
    if (admins.length === 0) {
      const bcrypt = require('bcryptjs');
      const hash = await bcrypt.hash('admin123', 10);
      await connection.query("INSERT INTO admins (username, password_hash) VALUES (?, ?)", ['admin', hash]);
      console.log("Default admin created (admin / admin123)");
    }
    
    await connection.end();
    console.log("Done.");

  } catch (error) {
    console.error("Database initialization failed:");
    console.error(error.message);
  }
}

initDB();
