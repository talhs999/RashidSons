// Static data that mirrors the database seed data
// This allows the site to work without a database connection during development

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  logo_white_url?: string;
  banner_url?: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  brand_id: number;
  image_url?: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  brand_id: number;
  category_id: number;
  size?: string;
  description: string;
  price?: number | null;
  stock_status: "in_stock" | "out_of_stock" | "on_order";
  featured: boolean;
  images: string[];
}

export interface Dealer {
  id: number;
  name: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: string;
  sort_order: number;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Yokohama",
    slug: "yokohama",
    logo_url: "/images/partners/yokohama-hd-5100.png",
    logo_white_url: "/images/brands/yokohama-white.png",
    description:
      "Yokohama Rubber Company is a Japanese tire manufacturer. As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering to Pakistani roads.",
  },
  {
    id: 2,
    name: "Michelin",
    slug: "michelin",
    logo_url: "/images/partners/michelin-hd.png",
    logo_white_url: "/images/partners/michelin-hd.png",
    description:
      "Michelin is a French multinational tyre manufacturer known for premium quality and innovation. Experience world-class performance with Michelin tyres from J. Rashid & Sons.",
  },
  {
    id: 3,
    name: "Goodyear",
    slug: "goodyear",
    logo_url: "/images/partners/goodyear-clean.png",
    logo_white_url: "/images/partners/goodyear-clean.png",
    description:
      "Goodyear Tire & Rubber Company is one of the world's largest tyre companies. J. Rashid & Sons provides authentic Goodyear tyres for passenger cars, SUVs, and commercial vehicles.",
  },
  {
    id: 4,
    name: "Blackarrow",
    slug: "blackarrow",
    logo_url: "/images/partners/blackarrow-clean.png",
    logo_white_url: "/images/partners/blackarrow-white.png",
    description:
      "Blackarrow tyres deliver exceptional value and performance for everyday driving. Available across Pakistan through J. Rashid & Sons dealer network.",
  },
  {
    id: 5,
    name: "Warrior",
    slug: "warrior",
    logo_url: "/images/partners/warrior-clean.png",
    logo_white_url: "/images/partners/warrior-white.png",
    description:
      "Warrior tyres are built tough for Pakistani road conditions. Designed for durability and performance at competitive prices.",
  },
  {
    id: 6,
    name: "Rydanz",
    slug: "rydanz",
    logo_url: "/images/partners/rydanz-clean.png",
    logo_white_url: "/images/brands/rydanz-white.png",
    description:
      "Rydanz tyres provide exceptional safety, comfort, and grip. High performance engineered for smooth driving and durability across all terrains.",
  },
  {
    id: 7,
    name: "Yokohama Alliance",
    slug: "yokohama-alliance",
    logo_url: "/images/partners/alliance-clean.png",
    logo_white_url: "/images/brands/alliance-white.png",
    description:
      "Yokohama Alliance tyres deliver superior traction, durable construction, and trusted Japanese quality for agricultural, industrial, and passenger applications.",
  },
];

export const categories: Category[] = [
  { id: 1, name: "Passenger Car Tyres", slug: "passenger-car", brand_id: 1 },
  { id: 2, name: "SUV Tyres", slug: "suv", brand_id: 1 },
  { id: 3, name: "Commercial Tyres", slug: "commercial", brand_id: 1 },
  { id: 4, name: "Passenger Car Tyres", slug: "goodyear-passenger", brand_id: 2 },
  { id: 5, name: "SUV & 4x4 Tyres", slug: "goodyear-suv", brand_id: 2 },
  { id: 6, name: "Truck Tyres", slug: "goodyear-truck", brand_id: 2 },
  { id: 7, name: "Premium Tyres", slug: "michelin-premium", brand_id: 3 },
  { id: 8, name: "SUV Tyres", slug: "michelin-suv", brand_id: 3 },
  { id: 9, name: "All Season", slug: "blackarrow-allseason", brand_id: 4 },
  { id: 10, name: "Performance", slug: "blackarrow-performance", brand_id: 4 },
  { id: 11, name: "All Terrain", slug: "warrior-allterrain", brand_id: 5 },
  { id: 12, name: "Highway", slug: "warrior-highway", brand_id: 5 },
  { id: 13, name: "Passenger Tyres", slug: "rydanz-passenger", brand_id: 6 },
  { id: 14, name: "SUV & 4x4", slug: "rydanz-suv", brand_id: 6 },
  { id: 15, name: "Commercial & Off-Road", slug: "alliance-commercial", brand_id: 7 },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Yokohama BluEarth AE51",
    slug: "yokohama-bluearth-ae51",
    brand_id: 1,
    category_id: 1,
    size: "205/55R16",
    description:
      "The BluEarth AE51 combines eco-friendly performance with excellent wet grip. Advanced silica compound for reduced rolling resistance and improved fuel economy. Featuring Yokohama's orange oil technology for enhanced grip and lower environmental impact.",
    stock_status: "in_stock",
    featured: true,
    images: ["/uploads/products/yokohama-bluearth-ae51.png"],
  },
  {
    id: 2,
    name: "Yokohama Geolandar A/T G015",
    slug: "yokohama-geolandar-at-g015",
    brand_id: 1,
    category_id: 2,
    size: "265/70R16",
    description:
      "All-terrain performance meets on-road comfort. Triple polymer tread compound delivers outstanding traction on any surface. Perfect for SUV drivers who need both highway comfort and off-road capability.",
    stock_status: "in_stock",
    featured: true,
    images: ["/uploads/products/yokohama-geolandar-at-g015.png"],
  },
  {
    id: 3,
    name: "Yokohama TY517",
    slug: "yokohama-ty517",
    brand_id: 1,
    category_id: 3,
    size: "11R22.5",
    description:
      "Premium commercial drive tyre with deep tread design for extended mileage. Engineered for long-haul operations with superior fuel efficiency.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/yokohama-ty517.png"],
  },
  {
    id: 4,
    name: "Goodyear Assurance TripleMax 2",
    slug: "goodyear-assurance-triplemax-2",
    brand_id: 2,
    category_id: 4,
    size: "195/65R15",
    description:
      "HydroTred Technology for superior wet braking. DuraGrip Technology for longer tyre life. Perfect for Pakistani city driving with enhanced safety features.",
    stock_status: "in_stock",
    featured: true,
    images: ["/uploads/products/goodyear-assurance-triplemax-2.png"],
  },
  {
    id: 5,
    name: "Goodyear Wrangler AT/SA+",
    slug: "goodyear-wrangler-at-sa-plus",
    brand_id: 2,
    category_id: 5,
    size: "245/70R16",
    description:
      "Versatile all-terrain tyre with aggressive tread pattern. Self-cleaning grooves for off-road confidence. Ideal for Pakistani terrain.",
    stock_status: "in_stock",
    featured: true,
    images: ["/uploads/products/goodyear-wrangler-at-sa-plus.png"],
  },
  {
    id: 6,
    name: "Goodyear KMAX S",
    slug: "goodyear-kmax-s",
    brand_id: 2,
    category_id: 6,
    size: "315/80R22.5",
    description:
      "Steer axle truck tyre with optimized footprint shape for even wear and long tread life. Built for commercial fleets.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/goodyear-kmax-s.png"],
  },
  {
    id: 7,
    name: "Michelin Primacy 4 ST",
    slug: "michelin-primacy-4-st",
    brand_id: 3,
    category_id: 7,
    size: "215/55R17",
    description:
      "Premium touring tyre with EverGrip Technology. New when worn - maintains performance throughout its life. The benchmark in premium comfort.",
    stock_status: "in_stock",
    featured: true,
    images: ["/uploads/products/michelin-primacy-4-st.png"],
  },
  {
    id: 8,
    name: "Michelin Latitude Sport 3",
    slug: "michelin-latitude-sport-3",
    brand_id: 3,
    category_id: 8,
    size: "235/65R17",
    description:
      "High-performance SUV tyre combining sportiness with comfort. Green X technology for fuel efficiency. Premium handling and braking.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/michelin-latitude-sport-3.png"],
  },
  {
    id: 9,
    name: "Blackarrow Touring Plus",
    slug: "blackarrow-touring-plus",
    brand_id: 4,
    category_id: 9,
    size: "185/65R15",
    description:
      "Reliable all-season tyre with optimized tread pattern for comfortable daily driving in Pakistan. Excellent value for money.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/blackarrow-touring-plus.png"],
  },
  {
    id: 10,
    name: "Blackarrow Sport GT",
    slug: "blackarrow-sport-gt",
    brand_id: 4,
    category_id: 10,
    size: "225/45R17",
    description:
      "Performance-oriented tyre with aggressive tread design. Enhanced cornering stability and responsive handling for spirited driving.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/blackarrow-sport-gt.png"],
  },
  {
    id: 11,
    name: "Warrior All Terrain X",
    slug: "warrior-all-terrain-x",
    brand_id: 5,
    category_id: 11,
    size: "265/75R16",
    description:
      "Built for the toughest Pakistani roads. Reinforced sidewalls and deep tread lugs for maximum durability and off-road confidence.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/warrior-all-terrain-x.png"],
  },
  {
    id: 12,
    name: "Warrior Highway Master",
    slug: "warrior-highway-master",
    brand_id: 5,
    category_id: 12,
    size: "195/65R15",
    description:
      "Smooth, quiet highway tyre with excellent fuel economy. Low rolling resistance compound for long-distance comfort.",
    stock_status: "in_stock",
    featured: false,
    images: ["/uploads/products/warrior-highway-master.png"],
  },
];

export const dealers: Dealer[] = [
  { id: 1, name: "Rashid Sons", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0315-4416626", lat: 31.5724, lng: 74.3075 },
  { id: 2, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0321-4697896", lat: 31.5724, lng: 74.3075 },
  { id: 3, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "Faisal Town, Lahore", phone: "0300-4058489", lat: 31.4727, lng: 74.3072 },
  { id: 4, name: "J Rashid & Sons", city: "Lahore", region: "Punjab", address: "DHA Kamaha Interchange, Lahore", phone: "0313-7017059", lat: 31.4580, lng: 74.4120 },
  { id: 5, name: "Fine Traders", city: "Lahore", region: "Punjab", address: "Neela Gumbad, Lahore", phone: "0321-4457276", lat: 31.5724, lng: 74.3075 },
  { id: 6, name: "Sardar Ent", city: "Lahore", region: "Punjab", address: "Sardar Enterprises 313 Circular Road, Lahore", phone: "0345-4040726", lat: 31.5830, lng: 74.3160 },
  { id: 7, name: "Shakeel Tyre", city: "Gujranwala", region: "Punjab", address: "Opposite Iqbal School GT Rd, Gujranwala", phone: "0337-7903730 / 0312-7915855", lat: 32.1617, lng: 74.1883 },
  { id: 8, name: "Japan Tyre", city: "Islamabad", region: "Federal", address: "Blue Area Huma Plaza, Islamabad", phone: "0345-2055505 / 0321-5699331", lat: 33.7118, lng: 73.0573 },
  { id: 9, name: "Mughal Auto", city: "Sialkot", region: "Punjab", address: "Shahabpura, Sialkot", phone: "0332-5252535", lat: 32.4945, lng: 74.5229 },
  { id: 10, name: "Anees Tyre", city: "Peshawar", region: "KPK", address: "Fakhr-e-Alam Rd, Cantt, Peshawar", phone: "091-5278895", lat: 34.0040, lng: 71.5540 },
  { id: 11, name: "Malik Tyre", city: "Peshawar", region: "KPK", address: "F.C Dil Jan Plaza, Sunehri Masjid Rd, Peshawar", phone: "0345-9086758", lat: 34.0080, lng: 71.5510 },
  { id: 12, name: "Shehzad Traders", city: "Faisalabad", region: "Punjab", address: "Canal Road, Faisalabad", phone: "0336-0000026", lat: 31.4360, lng: 73.0900 },
  { id: 13, name: "Chaudhary Tyres", city: "Sargodha", region: "Punjab", address: "Fatima Jinnah Rd, Sargodha", phone: "0300-6037781 / 0310-7768566", lat: 32.0836, lng: 72.6711 },
  { id: 14, name: "Muslim Tyres", city: "Sargodha", region: "Punjab", address: "Fatima Jinnah Rd, Sargodha", phone: "0321-8600678", lat: 32.0836, lng: 72.6711 },
  { id: 15, name: "Olympia Tyre", city: "Multan", region: "Punjab", address: "Vehari Road, Multan", phone: "0321-6382002", lat: 30.1700, lng: 71.4900 },
  { id: 16, name: "United Tyre", city: "Multan", region: "Punjab", address: "Nawa Shehar Road, Multan", phone: "0300-6369695", lat: 30.1980, lng: 71.4680 },
  { id: 17, name: "Sardar Ent.", city: "Karachi", region: "Sindh", address: "PSO Pump 6 No Checkpost Cantt, Karachi", phone: "021-34900207", lat: 24.8500, lng: 67.0300 },
  { id: 18, name: "Misal Ent.", city: "Karachi", region: "Sindh", address: "Sharah-e-Qadeem Plot#235, Karachi", phone: "0300-3478088", lat: 24.8600, lng: 67.0100 },
  { id: 19, name: "Pakistan Motor", city: "Sukkur", region: "Sindh", address: "Hussaini Rd, Gharyabad, Sukkur", phone: "0333-7151707", lat: 27.7052, lng: 68.8574 },
  { id: 20, name: "Wheel Look", city: "Hyderabad", region: "Sindh", address: "Latifabad Road, Hyderabad", phone: "0312-1332056", lat: 25.3670, lng: 68.3670 },
  { id: 21, name: "Hafiz Jamali Tyre", city: "Sindh", region: "Sindh", address: "Sindh Region", phone: "0334-0224114", lat: 25.0000, lng: 68.0000 },
  { id: 22, name: "Madina Tyre", city: "Rahim Yar Khan", region: "Punjab", address: "Belgium Chowk Shahi Rd, Rahim Yar Khan", phone: "0300-7029298 / 0316-6300266", lat: 28.4212, lng: 70.2989 },
  { id: 23, name: "Lucky Tyre", city: "Haripur", region: "KPK", address: "Haripur City", phone: "0300-9115854", lat: 33.9946, lng: 72.9332 },
  { id: 24, name: "Rustam Tyre", city: "Mardan", region: "KPK", address: "Charsaddah Road Near Inayat Shopping Center, Mardan", phone: "0300-5724177", lat: 34.1980, lng: 72.0400 },
];

export const branches: Branch[] = [
  {
    id: 1,
    name: "Anarkali Branch",
    address: "14, Nila Gumbad, Dina Nath Mansion, Anarkali, Lahore",
    phone: "+92 42 37232001",
    city: "Lahore",
    sort_order: 1,
  },
  {
    id: 2,
    name: "Ravi Road Branch",
    address: "Plot # 29, Shop # 3-4 Truck Adda, Ravi Road, Lahore",
    phone: "+92 42 37652001",
    city: "Lahore",
    sort_order: 2,
  },
  {
    id: 3,
    name: "Faisal Town Branch",
    address: "2 - C1, Block C1, Abul Hassan Isfahani Road, Faisal Town, Lahore",
    phone: "+92 42 35160001",
    city: "Lahore",
    sort_order: 3,
  },
  {
    id: 4,
    name: "DHA Branch",
    address: "Kamahan Lidher Road, DHA Lahore",
    phone: "+92 42 35721001",
    city: "Lahore",
    sort_order: 4,
  },
  {
    id: 5,
    name: "Malir Karachi Branch",
    address: "Askari PSO Pump, Malir Karachi Cantt",
    phone: "+92 21 34502001",
    city: "Karachi",
    sort_order: 5,
  },
  {
    id: 6,
    name: "Badami Bagh Branch",
    address: "313 Circular Road, Badami Bagh Lahore",
    phone: "+92 42 37712001",
    city: "Lahore",
    sort_order: 6,
  },
];

// Helper functions
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getCategoriesByBrand(brandId: number): Category[] {
  return categories.filter((c) => c.brand_id === brandId);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categoryId: number): Product[] {
  return products.filter((p) => p.category_id === categoryId);
}

export function getProductsByBrand(brandId: number): Product[] {
  return products.filter((p) => p.brand_id === brandId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getDealersByCity(city: string): Dealer[] {
  return dealers.filter(
    (d) => d.city.toLowerCase() === city.toLowerCase()
  );
}
