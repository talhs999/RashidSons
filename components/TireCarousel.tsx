"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Structured data for all 7 brands and their tire lines
const brandData: Record<string, { id: number; image: string; title: string }[]> = {
  Yokohama: [
    { id: 1, image: "/images/tires/advan-fleva.png", title: "ADVAN FLEVA" },
    { id: 2, image: "/images/tires/advan-a055.webp", title: "ADVAN A055" },
    { id: 3, image: "/images/tires/advan-neova-ad09.webp", title: "ADVAN NEOVA AD09" },
    { id: 4, image: "/images/tires/advan-sport-v107.webp", title: "ADVAN SPORT V107" },
    { id: 5, image: "/images/tires/advan-a052.png", title: "ADVAN A052" },
  ],
  Michelin: [
    { id: 6, image: "/images/tires/advan-sport-as.webp", title: "PRIMACY 4 ST" },
    { id: 7, image: "/images/tires/advan-sport-v107.webp", title: "PILOT SPORT 5" },
    { id: 8, image: "/images/tires/advan-apex.png", title: "LATITUDE SPORT 3" },
    { id: 9, image: "/images/tires/advan-fleva.png", title: "ENERGY XM2+" },
  ],
  Goodyear: [
    { id: 10, image: "/images/tires/advan-a052.png", title: "ASSURANCE TRIPLEMAX" },
    { id: 11, image: "/images/tires/advan-fleva.png", title: "WRANGLER AT/SA+" },
    { id: 12, image: "/images/tires/advan-neova-ad09.webp", title: "EAGLE F1 ASYMMETRIC" },
    { id: 13, image: "/images/tires/advan-sport-v107.webp", title: "KMAX S STEER" },
  ],
  Blackarrow: [
    { id: 14, image: "/images/tires/advan-apex.png", title: "TOURING PLUS AE" },
    { id: 15, image: "/images/tires/advan-sport-as.webp", title: "SPORT GT ULTRA" },
    { id: 16, image: "/images/tires/advan-a055.webp", title: "ECO DRIVE 100" },
  ],
  Warrior: [
    { id: 17, image: "/images/tires/advan-neova-ad09.webp", title: "ALL TERRAIN X" },
    { id: 18, image: "/images/tires/advan-a052.png", title: "HIGHWAY MASTER" },
    { id: 19, image: "/images/tires/advan-sport-v107.webp", title: "RUGGED GRIP 4X4" },
  ],
  Rydanz: [
    { id: 20, image: "/images/tires/advan-apex.png", title: "ROADSTER R02" },
    { id: 21, image: "/images/tires/advan-fleva.png", title: "REAC R05" },
    { id: 22, image: "/images/tires/advan-neova-ad09.webp", title: "RALEIGH R06 SUV" },
  ],
  "Yokohama Alliance": [
    { id: 23, image: "/images/tires/advan-neova-ad09.webp", title: "ALLIANCE AL30" },
    { id: 24, image: "/images/tires/advan-a052.png", title: "ALLIANCE FARMPRO" },
    { id: 25, image: "/images/tires/advan-fleva.png", title: "ALLIANCE MASTERDRIVE" },
  ],
};

export default function TireCarousel() {
  const [activeBrand, setActiveBrand] = useState("Yokohama");
  const [activeIndex, setActiveIndex] = useState(1);

  const currentItems = brandData[activeBrand] || brandData["Yokohama"];

  const handleNext = () => {
    setActiveIndex((prev) => (prev < currentItems.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : currentItems.length - 1));
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset < -1 && activeIndex === 0 && index === currentItems.length - 1) offset = -1;
    if (offset > 1 && activeIndex === currentItems.length - 1 && index === 0) offset = 1;
    return offset;
  };

  return (
    <section className="relative overflow-hidden pt-20">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-[60%] bg-black relative overflow-hidden flex items-center justify-center">
          {/* Giant "performance" text */}
          <h2 className="text-[8rem] md:text-[18rem] lg:text-[22rem] font-black text-white/5 whitespace-nowrap select-none absolute top-1/2 -translate-y-1/2">
            performance
          </h2>
        </div>
        <div className="h-[40%] bg-white" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10 pb-20">
        {/* Header and Tabs */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tighter mb-4">
            OUR TRUSTED DEALERS
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-sans mb-8">
            Discover a tire built for your exact driving needs. From the track to the trail, we have you covered.
          </p>

          {/* Brand Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto px-2">
            {Object.keys(brandData).map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setActiveBrand(brand);
                  setActiveIndex(1);
                }}
                className={`px-5 md:px-7 py-2.5 font-heading font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 border-2 skew-x-[-15deg] ${
                  activeBrand === brand
                    ? "bg-brand-yellow border-brand-yellow text-brand-black shadow-lg scale-105"
                    : "bg-transparent border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow"
                }`}
              >
                <span className="block skew-x-[15deg]">{brand}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Carousel Area */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[480px] w-full flex items-center justify-center mt-6">
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            aria-label="Previous Tyre"
            className="absolute left-0 md:left-10 lg:left-20 bottom-4 md:bottom-10 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors shadow-2xl border-2 border-white"
          >
            <ChevronsLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            aria-label="Next Tyre"
            className="absolute right-0 md:right-10 lg:right-20 bottom-4 md:bottom-10 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors shadow-2xl border-2 border-white"
          >
            <ChevronsRight size={28} />
          </button>

          {/* Tires */}
          <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {currentItems.map((item, index) => {
                  const offset = getOffset(index);
                  const isVisible = Math.abs(offset) <= 1;

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.5, x: offset === -1 ? "-150%" : offset === 1 ? "150%" : "0%" }}
                      animate={{
                        x: offset === 0 ? "0%" : offset === -1 ? "-120%" : offset === 1 ? "120%" : "0%",
                        scale: offset === 0 ? 1.2 : 0.75,
                        opacity: offset === 0 ? 1 : 0.7,
                        zIndex: offset === 0 ? 30 : 20,
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      onClick={() => setActiveIndex(index)}
                      className="absolute w-[150px] md:w-[220px] lg:w-[280px] h-[220px] md:h-[300px] lg:h-[380px] cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] relative z-10"
                      />
                      {/* Floor contact shadow */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/80 blur-md rounded-[100%] pointer-events-none z-0" />
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
