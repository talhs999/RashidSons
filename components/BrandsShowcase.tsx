"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { brands } from "@/lib/data"; // assuming this exists and has logos

export default function BrandsShowcase() {
  // Use all 5 brands for the showcase
  const showcaseBrands = brands;

  return (
    <section className="bg-brand-light py-20 lg:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-black uppercase tracking-tighter mb-4">
            Our Premium Partners
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto" />
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {showcaseBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white border border-brand-gray/10 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[340px] flex items-center justify-center"
            >
              {/* Brand Logo (Default State) */}
              <div className="absolute inset-0 p-4 flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-105">
                <img
                  src={brand.logo_url}
                  alt={brand.name}
                  className="w-full h-full max-h-[240px] object-contain p-1 scale-110 transition-all duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center translate-y-full group-hover:translate-y-0">
                <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase">
                  {brand.name}
                </h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-2">
                  {brand.description}
                </p>
                <Link href={`/brands/${brand.slug}`} className="btn-skew-yellow scale-90 hover:scale-95">
                  <span>
                    SHOP {brand.name} <ChevronRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/brands" className="text-brand-gray hover:text-brand-yellow font-bold uppercase tracking-widest text-sm underline underline-offset-8 transition-colors">
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  );
}
