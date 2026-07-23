"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutUsTeaser() {
  return (
    <section className="bg-brand-light py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-12 bg-brand-yellow" />
              <div className="bg-brand-black px-5 py-1.5 skew-x-[-15deg] shadow-md border-b-2 border-brand-yellow">
                 <span className="block skew-x-[15deg] text-brand-yellow font-bold uppercase tracking-widest text-sm">Since 1948</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-brand-black uppercase tracking-tighter mb-6 leading-[1.1]">
              DRIVING EXCELLENCE FOR OVER 70 YEARS.
            </h2>
            
            <p className="text-brand-gray text-lg mb-8 font-sans leading-relaxed">
              J. Rashid & Sons has been at the forefront of the tire industry in Pakistan, 
              bringing world-class performance and safety to every journey. As official distributors 
              for Yokohama, Goodyear, Michelin, and more, we guarantee authentic products and unmatched expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="btn-skew-yellow">
                <span>
                  OUR HISTORY <ChevronRight size={18} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Images/Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            <div className="absolute top-0 right-0 w-[85%] h-[80%] skew-x-[-10deg] overflow-hidden rounded-2xl shadow-2xl border-2 border-brand-yellow/30 group">
              <Image
                src="/images/about-history.jpg" // The new history image
                alt="J Rashid History"
                fill
                className="object-cover object-center opacity-95 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-brand-yellow skew-x-[10deg] overflow-hidden rounded-2xl border-8 border-brand-light shadow-xl z-10 flex items-center justify-center">
               <div className="text-center p-6 skew-x-[-10deg]">
                 <p className="text-5xl font-heading font-extrabold text-brand-black mb-1">150+</p>
                 <p className="text-brand-black font-bold uppercase tracking-widest text-sm">Certified Dealers</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
