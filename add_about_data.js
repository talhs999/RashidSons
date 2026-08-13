const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const aboutData = {
  "yokohama": {
    "heading": "The Yokohama Story",
    "founder": "Yokohama Cable Mfg. & B.F. Goodrich",
    "founded_year": "1917",
    "headquarters": "Tokyo, Japan",
    "history": "The Yokohama Rubber Company, Limited was established in 1917 as a joint venture between Yokohama Cable Manufacturing and B.F. Goodrich. Over the past century, Yokohama has grown into a global leader in tire technology, renowned for its high-performance tires, motorsports pedigree, and cutting-edge rubber compounds."
  },
  "goodyear": {
    "heading": "The Goodyear Heritage",
    "founder": "Frank Seiberling",
    "founded_year": "1898",
    "headquarters": "Akron, Ohio, USA",
    "history": "Founded in 1898 by Frank Seiberling, The Goodyear Tire & Rubber Company was named after Charles Goodyear, the inventor of vulcanized rubber. Today, Goodyear is one of the world's largest tire companies, celebrated for its innovations in aviation, motorsports, and everyday consumer driving."
  },
  "warrior": {
    "heading": "The Warrior Legacy",
    "founder": "Double Coin Holdings",
    "founded_year": "1920s",
    "headquarters": "Shanghai, China",
    "history": "With a heritage dating back to the 1920s in Shanghai, Warrior Tyres is one of China's most historic and respected domestic tire brands. Backed by joint ventures with global tire giants over the decades, Warrior combines century-old manufacturing experience with modern European and Asian tire technology."
  },
  "atlas": {
    "heading": "The Atlas Tradition",
    "founder": "Standard Oil",
    "founded_year": "1935",
    "headquarters": "USA",
    "history": "Established in 1935 as the official tire brand of Standard Oil service stations across the United States, Atlas has long been a symbol of American automotive reliability. Today, Atlas continues to deliver exceptional quality, durability, and value for passenger cars and commercial vehicles globally."
  },
  "risen": {
    "heading": "The Risen Innovation",
    "founder": "Shandong Risen Tyre",
    "founded_year": "2000s",
    "headquarters": "Shandong, China",
    "history": "Risen Tyre represents the new wave of modern Chinese tire manufacturing. Utilizing state-of-the-art automated production lines and advanced tread design technologies, Risen focuses on eco-friendly, fuel-efficient, and highly durable tires that meet strict international safety standards."
  },
  "falken": {
    "heading": "The Falken Journey",
    "founder": "Sumitomo Rubber Industries",
    "founded_year": "1983",
    "headquarters": "Kobe, Japan",
    "history": "Launched in 1983 as a flagship high-performance brand under Sumitomo Rubber Industries, Falken was created to challenge the world's most demanding motorsports arenas. Falken has since transformed that track-tested technology into premium passenger, light truck, and SUV tires for the global market."
  }
};

dbData.brands = dbData.brands.map(brand => {
  if (aboutData[brand.slug]) {
    brand.about = aboutData[brand.slug];
  }
  return brand;
});

fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2), 'utf8');
console.log('Database updated successfully with About data.');
