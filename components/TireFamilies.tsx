"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from "lucide-react";
import { brands } from "@/lib/data";

const thumbnails = [
  "/images/tires/advan-fleva.png",
  "/images/tires/advan-a055.webp",
  "/images/tires/advan-neova-ad09.webp",
  "/images/tires/advan-a052.png",
  "/images/tires/advan-apex.png",
  "/images/tires/advan-sport-as.webp",
];

export default function TireFamilies() {
  const featuredBrand = brands[0]; // Let's feature the first brand (Yokohama)
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset < -1 && activeIndex === 0 && index === thumbnails.length - 1) offset = -1;
    if (offset > 1 && activeIndex === thumbnails.length - 1 && index === 0) offset = 1;
    return offset;
  };

  return (
    <section className="bg-brand-black relative min-h-[800px] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background with 3D Car PNG */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark solid background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Giant "performance" text watermark (like the Tire Carousel) */}
        <h2 className="text-[12rem] md:text-[20rem] lg:text-[26rem] font-black text-white/5 whitespace-nowrap select-none absolute top-[30%] -translate-y-1/2 left-0 right-0 text-center pointer-events-none">
          performance
        </h2>
        
        {/* Black split background for the bottom carousel part */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black z-0" />
        
        {/* 3D Car PNG - Positioned dynamically behind the content */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          whileInView={{ opacity: 0.4, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-[-10%] top-[10%] w-[80%] max-w-[1200px] h-[80%] pointer-events-none"
        >
          <Image
            src="/images/car-3d.png" // User should place their transparent 3D car PNG here
            alt="Premium 3D Car"
            fill
            className="object-contain"
          />
        </motion.div>
        
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-6 w-full flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tighter mb-12">
          Choose By Tire Family
        </h2>

        {/* Featured Brand Logo & Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="mb-6 border-t-4 border-brand-yellow pt-6">
            <Image
              src="/images/brands/yokohama-white.png"
              alt={featuredBrand.name}
              width={450}
              height={150}
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>

          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white uppercase tracking-wider mb-4">
            THE DEFINITION OF ALL-SEASON PERFORMANCE.
          </h3>
          
          <p className="text-white/80 text-lg mb-10 max-w-2xl">
            {featuredBrand.description} Discover reliable, dependable, and comfortable driving with our premium selection.
          </p>

          <Link href={`/brands/${featuredBrand.slug}`} className="btn-skew-yellow">
            <span>
              DISCOVER {featuredBrand.name} <ChevronRight size={18} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* 3D Coverflow Thumbnails Row */}
      <div className="relative z-20 mt-10 pb-10 pt-10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative h-[200px] md:h-[250px] lg:h-[350px] flex items-center justify-center">
          

          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:left-10 lg:left-20 bottom-[-1rem] md:bottom-4 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-gray-900 transition-colors shadow-2xl border-[3px] border-white"
          >
            <ChevronsLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 md:right-10 lg:right-20 bottom-[-1rem] md:bottom-4 z-30 bg-black w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white hover:bg-gray-900 transition-colors shadow-2xl border-[3px] border-white"
          >
            <ChevronsRight size={24} />
          </button>

          {/* Tires */}
          <div className="relative w-full h-full flex items-center justify-center z-10 perspective-[1000px]">
            <AnimatePresence initial={false}>
              {thumbnails.map((img, index) => {
                const offset = getOffset(index);
                const isVisible = Math.abs(offset) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={img + index}
                    initial={{ opacity: 0, scale: 0.5, x: offset === -1 ? "-150%" : offset === 1 ? "150%" : "0%" }}
                    animate={{
                      x: offset === 0 ? "0%" : offset === -1 ? "-120%" : offset === 1 ? "120%" : "0%",
                      scale: offset === 0 ? 1.2 : 0.75,
                      opacity: 1,
                      zIndex: offset === 0 ? 30 : 20,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-[120px] md:w-[180px] lg:w-[240px] h-[160px] md:h-[220px] lg:h-[300px]"
                  >
                    <Image
                      src={img}
                      alt="Tire thumbnail"
                      fill
                      className="object-contain drop-shadow-2xl relative z-10"
                    />
                    {/* Floor contact shadow */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-black/60 blur-md rounded-[100%] pointer-events-none z-0" />
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
