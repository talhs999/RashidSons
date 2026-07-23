"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Yokohama",
    slug: "yokohama",
    logo: "/images/partners/yokohama-hd-5100.png",
    tire: "/images/tires/advan-fleva.png",
  },
  {
    name: "Michelin",
    slug: "michelin",
    logo: "/images/partners/michelin-hd.png",
    tire: "/images/tires/advan-sport-as.webp",
  },
  {
    name: "Goodyear",
    slug: "goodyear",
    logo: "/images/partners/goodyear-clean.png",
    tire: "/images/tires/advan-a052.png",
  },
  {
    name: "Blackarrow",
    slug: "blackarrow",
    logo: "/images/partners/blackarrow-clean.png",
    tire: "/images/tires/advan-apex.png",
  },
  {
    name: "Warrior",
    slug: "warrior",
    logo: "/images/partners/warrior-clean.png",
    tire: "/images/tires/advan-neova-ad09.webp",
  },
  {
    name: "Rydanz",
    slug: "rydanz",
    logo: "/images/partners/rydanz-clean.png",
    tire: "/images/tires/advan-a055.webp",
  },
  {
    name: "Yokohama Alliance",
    slug: "yokohama-alliance",
    logo: "/images/partners/alliance-clean.png",
    tire: "/images/tires/advan-sport-v107.webp",
  },
];

export default function BrandStrip() {
  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-brand-yellow-dark uppercase tracking-[0.2em] font-semibold mb-3">
            Official Distributor
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-black uppercase tracking-tight font-heading">
            World-Class Brands,{" "}
            <span className="text-brand-yellow-dark">One Destination</span>
          </h2>
        </motion.div>

        {/* Brands Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group relative flex flex-col items-center justify-between p-6 h-[290px] rounded-2xl border-2 border-brand-yellow-dark/20 bg-brand-yellow hover:bg-brand-black shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Default View: Top Tyre Image + Bottom Logo */}
                <div className="flex flex-col items-center justify-between w-full h-full group-hover:opacity-0 group-hover:scale-95 transition-all duration-500">
                  {/* Top: Tyre Image */}
                  <div className="relative w-full h-[155px] flex items-center justify-center pt-2">
                    <img
                      src={brand.tire}
                      alt={`${brand.name} tire`}
                      className="h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom: Brand Logo */}
                  <div className="relative w-full h-[65px] flex items-center justify-center border-t border-gray-100 pt-3">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={`object-contain ${brand.slug === 'goodyear' ? 'max-h-6 max-w-[55%] scale-75' : 'max-h-12 max-w-[85%]'}`}
                    />
                  </div>
                </div>

                {/* Hover View: Brand Name + Action Button */}
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-brand-black z-20 text-center">
                  <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase tracking-wider mb-4 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {brand.name}
                  </h3>
                  
                  <div className="btn-skew-yellow py-2.5 px-6 text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:scale-105 transition-transform shadow-lg">
                    <span>
                      EXPLORE BRAND <ChevronRight size={14} className="inline ml-1" />
                    </span>
                  </div>
                </div>

                {/* Accent bottom yellow bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow w-0 group-hover:w-full transition-all duration-500 z-30" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
