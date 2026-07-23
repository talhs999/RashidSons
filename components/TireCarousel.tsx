"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Structured data for brands and their tire lines
const brandData: Record<string, { id: number; image: string; title: string }[]> = {
  Yokohama: [
    { id: 1, image: "/images/tires/advan-fleva.png", title: "ADVAN FLEVA" },
    { id: 2, image: "/images/tires/advan-a055.webp", title: "ADVAN A055" },
    { id: 3, image: "/images/tires/advan-neova-ad09.webp", title: "ADVAN NEOVA AD09" },
    { id: 4, image: "/images/tires/advan-sport-v107.webp", title: "ADVAN SPORT V107" },
    { id: 5, image: "/images/tires/advan-a052.png", title: "ADVAN A052" },
    { id: 6, image: "/images/tires/advan-apex.png", title: "ADVAN APEX V601" },
    { id: 7, image: "/images/tires/advan-sport-as.webp", title: "ADVAN SPORT A/S" },
  ],
  Michelin: [
    { id: 8, image: "/images/hero-bg.jpg", title: "PILOT SPORT" },
    { id: 9, image: "/images/hero-bg.jpg", title: "DEFENDER" },
    { id: 10, image: "/images/hero-bg.jpg", title: "CROSSCLIMATE" },
    { id: 11, image: "/images/hero-bg.jpg", title: "LATITUDE" },
    { id: 12, image: "/images/hero-bg.jpg", title: "PRIMACY" },
  ],
  Goodyear: [
    { id: 13, image: "/images/hero-bg.jpg", title: "EAGLE" },
    { id: 14, image: "/images/hero-bg.jpg", title: "WRANGLER" },
    { id: 15, image: "/images/hero-bg.jpg", title: "ASSURANCE" },
    { id: 16, image: "/images/hero-bg.jpg", title: "ULTRAGRIP" },
  ],
  Continental: [
    { id: 17, image: "/images/hero-bg.jpg", title: "EXTREME CONTACT" },
    { id: 18, image: "/images/hero-bg.jpg", title: "TRUE CONTACT" },
    { id: 19, image: "/images/hero-bg.jpg", title: "CROSS CONTACT" },
  ]
};

export default function TireCarousel() {
  const [activeBrand, setActiveBrand] = useState("Yokohama");
  const [activeIndex, setActiveIndex] = useState(1);

  const currentItems = brandData[activeBrand];

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
            PERFORMANCE AT EVERY TURN
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto font-sans mb-8">
            Discover a tire built for your exact driving needs. From the track to the trail, we have you covered.
          </p>

          {/* Brand Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(brandData).map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setActiveBrand(brand);
                  setActiveIndex(1); // Reset index on brand change
                }}
                className={`px-8 py-3 font-heading font-bold uppercase tracking-widest text-sm transition-all duration-300 border-2 skew-x-[-15deg] ${
                  activeBrand === brand
                    ? "bg-brand-yellow border-brand-yellow text-brand-black"
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
            className="absolute left-0 md:left-10 lg:left-20 bottom-4 md:bottom-10 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-gray-900 transition-colors shadow-2xl border-2 border-white"
          >
            <ChevronsLeft size={28} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-10 lg:right-20 bottom-4 md:bottom-10 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-gray-900 transition-colors shadow-2xl border-2 border-white"
          >
            <ChevronsRight size={28} />
          </button>

          {/* Tires */}
          <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[1000px]">
            <AnimatePresence initial={false}>
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
                      scale: offset === 0 ? 1.15 : 0.75,
                      opacity: 1,
                      zIndex: offset === 0 ? 30 : 20,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-[150px] md:w-[220px] lg:w-[280px] h-[220px] md:h-[300px] lg:h-[380px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-2xl relative z-10"
                    />
                    {/* Floor contact shadow */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/60 blur-md rounded-[100%] pointer-events-none z-0" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
