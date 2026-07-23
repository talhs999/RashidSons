"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const brands = [
  { name: "Yokohama", slug: "yokohama", logo: "/images/brands/yokohama.webp" },
  { name: "Goodyear", slug: "goodyear", logo: "/uploads/brands/goodyear.png" },
  { name: "Michelin", slug: "michelin", logo: "/uploads/brands/michelin.png" },
  { name: "Blackarrow", slug: "blackarrow", logo: "/uploads/brands/blackarrow.png" },
  { name: "Warrior", slug: "warrior", logo: "/uploads/brands/warrior.png" },
];

export default function BrandStrip() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-3">
            Official Distributor
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-black uppercase tracking-tight font-heading">
            World-Class Brands,{" "}
            <span className="text-gradient">One Destination</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group relative flex flex-col items-center justify-center p-8 lg:p-10 h-full min-h-[220px] rounded-2xl border border-brand-black/5 bg-brand-light/50 hover:bg-brand-black transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-8">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                  />
                  <p className="mt-4 text-sm font-semibold text-brand-gray group-hover:text-white transition-colors duration-500 uppercase tracking-wider text-center">
                    {brand.name}
                  </p>
                </div>
                
                {/* Reveal content on hover */}
                <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-center flex flex-col items-center">
                   <p className="text-white/70 text-xs mb-3 line-clamp-2">Explore the premium range of {brand.name} tires.</p>
                   <span className="text-[10px] uppercase font-bold tracking-widest text-brand-yellow flex items-center gap-1">
                     View Details
                   </span>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-yellow group-hover:w-1/2 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
