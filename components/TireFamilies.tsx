"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface BrandFamilyData {
  id: number;
  name: string;
  slug: string;
  logo: string;
  slogan: string;
  description: string;
  tires: {
    name: string;
    image: string;
    tag?: string;
  }[];
}

const brandFamilies: BrandFamilyData[] = [
  {
    id: 1,
    name: "Yokohama",
    slug: "yokohama",
    logo: "/images/brands/yokohama-white.png",
    slogan: "THE DEFINITION OF ALL-SEASON PERFORMANCE",
    description:
      "As the official importer of Yokohama tyres in Pakistan, J. Rashid & Sons brings world-class Japanese engineering and advanced rubber compounds to Pakistani roads.",
    tires: [
      { name: "BluEarth AE51", image: "/images/tires/advan-fleva.png", tag: "Eco Performance" },
      { name: "Advan Fleva V701", image: "/images/tires/advan-a055.webp", tag: "High Speed" },
      { name: "Geolandar A/T G015", image: "/images/tires/advan-neova-ad09.webp", tag: "All Terrain" },
      { name: "Advan Sport V107", image: "/images/tires/advan-a052.png", tag: "Ultra Sport" },
      { name: "Advan Apex V601", image: "/images/tires/advan-apex.png", tag: "Track & Street" },
    ],
  },
  {
    id: 2,
    name: "Michelin",
    slug: "michelin",
    logo: "/images/partners/michelin-hd.png",
    slogan: "MOTION FOR LIFE & PREMIUM LONGEVITY",
    description:
      "Renowned worldwide for safety, durability, and wet grip. Discover premium French engineering for exceptional highway comfort.",
    tires: [
      { name: "Primacy 4 ST", image: "/images/tires/advan-sport-as.webp", tag: "Comfort & Quiet" },
      { name: "Pilot Sport 5", image: "/images/tires/advan-sport-v107.webp", tag: "Performance" },
      { name: "Latitude Sport 3", image: "/images/tires/advan-apex.png", tag: "SUV Luxury" },
      { name: "Energy XM2+", image: "/images/tires/advan-fleva.png", tag: "Long Life" },
    ],
  },
  {
    id: 3,
    name: "Goodyear",
    slug: "goodyear",
    logo: "/images/partners/goodyear-clean.png",
    slogan: "MADE TO FEEL GOOD & BUILT TO LAST",
    description:
      "Innovative HydroTred technology for maximum braking efficiency. Engineered for reliability across all driving conditions in Pakistan.",
    tires: [
      { name: "Assurance TripleMax 2", image: "/images/tires/advan-a052.png", tag: "Wet Safety" },
      { name: "Wrangler AT/SA+", image: "/images/tires/advan-fleva.png", tag: "All Terrain SUV" },
      { name: "Eagle F1 Asymmetric", image: "/images/tires/advan-neova-ad09.webp", tag: "High Grip" },
      { name: "KMAX S Steer", image: "/images/tires/advan-sport-v107.webp", tag: "Commercial" },
    ],
  },
  {
    id: 4,
    name: "Blackarrow",
    slug: "blackarrow",
    logo: "/images/partners/blackarrow-white.png",
    slogan: "UNMATCHED DAILY DRIVING VALUE",
    description:
      "High performance daily driver tyres designed to offer exceptional fuel economy, durability, and smooth handling at competitive prices.",
    tires: [
      { name: "Touring Plus AE", image: "/images/tires/advan-apex.png", tag: "Daily Driver" },
      { name: "Sport GT Ultra", image: "/images/tires/advan-sport-as.webp", tag: "Responsive" },
      { name: "Eco Drive 100", image: "/images/tires/advan-a055.webp", tag: "Fuel Efficient" },
      { name: "City Comfort", image: "/images/tires/advan-fleva.png", tag: "Urban Smooth" },
    ],
  },
  {
    id: 5,
    name: "Warrior",
    slug: "warrior",
    logo: "/images/partners/warrior-white.png",
    slogan: "TOUGH DURABILITY FOR PAKISTANI ROADS",
    description:
      "Heavy-duty construction and deep tread depth engineered to resist punctures and conquer rough road conditions with confidence.",
    tires: [
      { name: "All Terrain X", image: "/images/tires/advan-neova-ad09.webp", tag: "Heavy Duty" },
      { name: "Highway Master", image: "/images/tires/advan-a052.png", tag: "Highway Cruiser" },
      { name: "Rugged Grip 4x4", image: "/images/tires/advan-sport-v107.webp", tag: "Offroad" },
      { name: "City Warrior", image: "/images/tires/advan-apex.png", tag: "Long Tread" },
    ],
  },
  {
    id: 6,
    name: "Rydanz",
    slug: "rydanz",
    logo: "/images/brands/rydanz-white.png",
    slogan: "SMOOTH PERFORMANCE & HIGHWAY SAFETY",
    description:
      "Rydanz tyres provide exceptional comfort, wet grip, and precise handling. Designed for daily urban commuting and long highway journeys across Pakistan.",
    tires: [
      { name: "Roadster R02", image: "/images/tires/advan-apex.png", tag: "Passenger Comfort" },
      { name: "Reac R05", image: "/images/tires/advan-fleva.png", tag: "High Speed" },
      { name: "Raleigh R06 SUV", image: "/images/tires/advan-neova-ad09.webp", tag: "SUV Performance" },
      { name: "Nordica Winter", image: "/images/tires/advan-sport-v107.webp", tag: "All Season" },
    ],
  },
  {
    id: 7,
    name: "Yokohama Alliance",
    slug: "yokohama-alliance",
    logo: "/images/brands/alliance-white.png",
    slogan: "SUPERIOR DURABILITY & JAPANESE QUALITY",
    description:
      "Yokohama Alliance tyres deliver maximum traction, heavy-duty sidewall protection, and reliable long-distance performance for all commercial and passenger vehicles.",
    tires: [
      { name: "Alliance AL30", image: "/images/tires/advan-neova-ad09.webp", tag: "Heavy Duty" },
      { name: "Alliance FarmPRO", image: "/images/tires/advan-a052.png", tag: "All Terrain" },
      { name: "Alliance MasterDrive", image: "/images/tires/advan-fleva.png", tag: "Commercial" },
    ],
  },
];

export default function TireFamilies() {
  const [brandIndex, setBrandIndex] = useState(0);
  const [tireIndex, setTireIndex] = useState(1);

  const activeBrand = brandFamilies[brandIndex];
  const currentTires = activeBrand.tires;

  const handleNextBrand = () => {
    setBrandIndex((prev) => (prev < brandFamilies.length - 1 ? prev + 1 : 0));
    setTireIndex(1);
  };

  const handlePrevBrand = () => {
    setBrandIndex((prev) => (prev > 0 ? prev - 1 : brandFamilies.length - 1));
    setTireIndex(1);
  };

  const handleNextTire = () => {
    if (tireIndex < currentTires.length - 1) {
      setTireIndex((prev) => prev + 1);
    } else {
      // Wrap to next brand
      handleNextBrand();
    }
  };

  const handlePrevTire = () => {
    if (tireIndex > 0) {
      setTireIndex((prev) => prev - 1);
    } else {
      // Wrap to prev brand
      handlePrevBrand();
    }
  };

  const getOffset = (index: number) => {
    let offset = index - tireIndex;
    if (offset < -1 && tireIndex === 0 && index === currentTires.length - 1) offset = -1;
    if (offset > 1 && tireIndex === currentTires.length - 1 && index === 0) offset = 1;
    return offset;
  };

  return (
    <section className="bg-brand-black relative min-h-[850px] flex flex-col justify-center overflow-hidden pt-16 pb-16">
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
          OUR TRUSTED DEALERS
        </h2>

        {/* Brand Tab Navigation */}
        <div className="w-full max-w-5xl mx-auto mb-10 py-2 px-2">
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-4 border-b border-white/10 pb-4">
            {brandFamilies.map((brand, idx) => {
              const isActive = idx === brandIndex;
              return (
                <button
                  key={brand.id}
                  onClick={() => {
                    setBrandIndex(idx);
                    setTireIndex(1);
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
                      className="absolute -bottom-[17px] left-0 right-0 h-1 bg-brand-yellow shadow-[0_0_12px_rgba(255,215,0,0.8)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Brand Content (IMAGE 1 HEADER) */}
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
              <div className="mb-6 border-t-4 border-brand-yellow pt-6 h-[110px] md:h-[130px] w-full max-w-[340px] flex items-center justify-center mx-auto">
                <img
                  src={activeBrand.logo}
                  alt={activeBrand.name}
                  className="h-20 md:h-24 max-w-[320px] w-auto object-contain drop-shadow-lg"
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

      {/* 3D Coverflow Thumbnails Row (IMAGE 2 TIRES) */}
      <div className="relative z-20 mt-6 pb-6 pt-6">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative h-[220px] md:h-[280px] lg:h-[340px] flex items-center justify-center">
          
          {/* Previous Tire / Brand Button */}
          <button 
            onClick={handlePrevTire}
            aria-label="Previous Tire or Brand"
            className="absolute left-2 md:left-10 lg:left-20 bottom-0 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all shadow-2xl border-[3px] border-white group"
          >
            <ChevronsLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Next Tire / Brand Button */}
          <button 
            onClick={handleNextTire}
            aria-label="Next Tire or Brand"
            className="absolute right-2 md:right-10 lg:right-20 bottom-0 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all shadow-2xl border-[3px] border-white group"
          >
            <ChevronsRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Active Brand Tires Display */}
          <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {currentTires.map((tire, index) => {
                  const offset = getOffset(index);
                  const isVisible = Math.abs(offset) <= 1;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={tire.name + index}
                      initial={{ opacity: 0, scale: 0.5, x: offset === -1 ? "-150%" : offset === 1 ? "150%" : "0%" }}
                      animate={{
                        x: offset === 0 ? "0%" : offset === -1 ? "-120%" : offset === 1 ? "120%" : "0%",
                        scale: offset === 0 ? 1.25 : 0.8,
                        opacity: offset === 0 ? 1 : 0.7,
                        zIndex: offset === 0 ? 30 : 20,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      onClick={() => setTireIndex(index)}
                      className="absolute w-[130px] md:w-[200px] lg:w-[260px] h-[170px] md:h-[240px] lg:h-[310px] cursor-pointer group flex flex-col items-center justify-center"
                    >
                      <Image
                        src={tire.image}
                        alt={tire.name}
                        fill
                        className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                      


                      {/* Floor contact shadow */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-black/80 blur-md rounded-[100%] pointer-events-none z-0" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
