"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { brands } from "@/lib/data";

const brandTires: Record<string, string> = {
  yokohama: "/images/tires/advan-fleva.png",
  michelin: "/images/tires/advan-sport-as.webp",
  goodyear: "/images/tires/advan-a052.png",
  blackarrow: "/images/tires/advan-apex.png",
  warrior: "/images/tires/advan-neova-ad09.webp",
  rydanz: "/images/tires/advan-a055.webp",
  "yokohama-alliance": "/images/tires/advan-sport-v107.webp",
};

export default function BrandsShowcase() {
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {showcaseBrands.map((brand, i) => {
            const tireImg = brandTires[brand.slug] || "/images/tires/advan-fleva.png";

            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group relative bg-brand-yellow border-2 border-brand-yellow-dark/20 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-[300px] flex flex-col justify-between p-6"
                >
                  {/* Default View: Top Tyre Image + Bottom Logo */}
                  <div className="flex flex-col items-center justify-between w-full h-full group-hover:opacity-0 group-hover:scale-95 transition-all duration-500">
                    {/* Top: Tyre Image */}
                    <div className="relative w-full h-[160px] flex items-center justify-center pt-2">
                      <img
                        src={tireImg}
                        alt={`${brand.name} tire`}
                        className="h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Bottom: Brand Logo */}
                    <div className="relative w-full h-[55px] flex items-center justify-center border-t border-black/10 pt-2">
                      <img
                        src={brand.logo_url}
                        alt={brand.name}
                        className="max-h-8 max-w-[65%] w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Hover Overlay: Brand Name + Action Button */}
                  <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center z-20">
                    <h3 className="text-2xl font-heading font-extrabold text-white mb-4 uppercase tracking-wider transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {brand.name}
                    </h3>
                    
                    <div className="btn-skew-yellow py-2.5 px-6 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:scale-105 transition-transform shadow-lg">
                      <span>
                        SHOP {brand.name.toUpperCase()} <ChevronRight size={16} className="inline ml-1" />
                      </span>
                    </div>
                  </div>

                  {/* Accent yellow border on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow w-0 group-hover:w-full transition-all duration-500 z-30" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="/brands" className="text-brand-gray hover:text-brand-yellow-dark font-bold uppercase tracking-widest text-sm underline underline-offset-8 transition-colors">
            View All Brands
          </Link>
        </div>
      </div>
    </section>
  );
}
