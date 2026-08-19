"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface BrandFamilyData {
  id: number;
  name: string;
  slug: string;
  logo: string;
  slogan: string;
  description: string;
}

const defaultBrandFamilies: BrandFamilyData[] = [
  {
    id: 1,
    name: "Yokohama",
    slug: "yokohama",
    logo: "/images/brands/yokohama-white.png",
    slogan: "THE DEFINITION OF ALL-SEASON PERFORMANCE",
    description:
      "As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering and advanced rubber compounds to Pakistani roads.",
  },
  {
    id: 2,
    name: "Goodyear",
    slug: "goodyear",
    logo: "/images/partners/goodyear-white.png",
    slogan: "MADE TO FEEL GOOD & BUILT TO LAST",
    description:
      "Innovative HydroTred technology for maximum braking efficiency. Engineered for reliability across all driving conditions in Pakistan.",
  },
  {
    id: 3,
    name: "Warrior",
    slug: "warrior",
    logo: "/images/brands/warrior-final-white.png",
    slogan: "TOUGH DURABILITY FOR PAKISTANI ROADS",
    description:
      "Heavy-duty construction and deep tread depth engineered to resist punctures and conquer rough road conditions with confidence.",
  },
  {
    id: 4,
    name: "Atlas Tyre",
    slug: "atlas",
    logo: "/images/brands/atlas-logo-white.png",
    slogan: "ENGINEERED FOR EXTREME DURABILITY",
    description:
      "Atlas Tyres deliver superior traction and durability for a wide range of vehicles, ensuring a safe and comfortable ride across Pakistan.",
  },
  {
    id: 5,
    name: "Risen",
    slug: "risen",
    logo: "/images/brands/risen-logo-white.png",
    slogan: "RELIABLE PERFORMANCE ON EVERY JOURNEY",
    description:
      "Risen Tyres provide exceptional value and reliable performance, designed specifically to tackle tough road conditions with ease.",
  },
  {
    id: 6,
    name: "Falken",
    slug: "falken",
    logo: "/images/brands/falken-logo-white.png",
    slogan: "PRECISION HANDLING & SUPERIOR GRIP",
    description:
      "Falken is known for its high-performance tires, offering precision handling and superior grip for sports cars and everyday driving.",
  },
  {
    name: "Sunwide",
    slug: "sunwide",
    logo: "/images/brands/sunwide-logo-white.png",
    description:
      "Reliable, efficient, and built for the everyday driver. Discover exceptional value with Sunwide.",
    tires: [
      { name: "RS-ECO", image: "/images/tires/sunwide-rs-eco.png" },
      { name: "RS-ZERO", image: "/images/tires/sunwide-rs-zero.png" },
    ],
  },
];

export default function TireFamilies({ brands }: { brands?: any[] }) {
  const [brandIndex, setBrandIndex] = useState(0);

  // Normalize dynamic brands array from DB or default
  const activeBrandList: BrandFamilyData[] = (brands && brands.length > 0)
    ? brands.map((b) => ({
        id: b.id,
        name: b.name,
        slug: b.slug,
        logo: b.logo_white_url || b.logo_url || "/images/brands/yokohama-white.png",
        slogan: b.slogan || "PREMIUM QUALITY TYRES",
        description: b.description || "",
      }))
    : defaultBrandFamilies;

  const activeBrand = activeBrandList[brandIndex] || activeBrandList[0];

  return (
    <section className="bg-brand-black relative min-h-[750px] flex flex-col justify-center overflow-hidden pt-16 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        
        {/* Dynamic Watermark Text matching active brand */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeBrand.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-[10rem] md:text-[18rem] lg:text-[24rem] font-black text-white/[0.04] whitespace-nowrap select-none absolute top-[30%] -translate-y-1/2 left-0 right-0 text-center pointer-events-none uppercase"
          >
            {activeBrand.name}
          </motion.h2>
        </AnimatePresence>
        
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-0" />
        
        {/* 3D Car PNG */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          whileInView={{ opacity: 0.4, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-[-10%] top-[10%] w-[80%] max-w-[1200px] h-[80%] pointer-events-none"
        >
          <Image
            src="/images/car-3d.png"
            alt="Premium 3D Car"
            fill
            className="object-contain"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-6 w-full flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl lg:text-5xl font-heading font-extrabold text-white uppercase tracking-tighter mb-8">
          OFFICIAL DISTRIBUTOR
        </h2>

        {/* Brand Tab Navigation */}
        <div className="w-full max-w-5xl mx-auto mb-10 py-2 px-2">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pb-2">
            {activeBrandList.map((brand, idx) => {
              const isActive = idx === brandIndex;
              return (
                <button
                  key={brand.id}
                  onClick={() => {
                    setBrandIndex(idx);
                  }}
                  className={`relative px-3.5 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                    isActive
                      ? "bg-white/10 text-white border border-brand-yellow/50 shadow-lg scale-105"
                      : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className={`text-xs md:text-sm font-bold uppercase tracking-wider ${isActive ? "text-brand-yellow" : "text-white/70 group-hover:text-white"}`}>
                    {brand.name}
                  </span>
                  
                  {/* Yellow active underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBrandIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-yellow shadow-[0_0_12px_rgba(255,215,0,0.8)] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Brand Content */}
        <div className="max-w-3xl mx-auto flex flex-col items-center min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Brand Logo with top yellow line */}
              <div className="mb-6 border-t-4 border-brand-yellow pt-6 h-[120px] md:h-[150px] w-full max-w-[400px] flex items-center justify-center mx-auto">
                <img
                  src={activeBrand.logo}
                  alt={activeBrand.name}
                  className="h-28 md:h-36 max-w-[380px] w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Slogan & Description */}
              <h3 className="text-xl lg:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-3">
                {activeBrand.slogan}
              </h3>
              
              <p className="text-white/80 text-base lg:text-lg mb-8 max-w-2xl leading-relaxed">
                {activeBrand.description}
              </p>

              {/* Dynamic Discover Brand Button */}
              <Link href={`/brands/${activeBrand.slug}`} className="btn-skew-yellow">
                <span>
                  DISCOVER {activeBrand.name.toUpperCase()} <ChevronRight size={18} />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
