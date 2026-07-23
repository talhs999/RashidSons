"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Partner 1", logo: "/images/partners/1.png" },
  { name: "Partner 2", logo: "/images/partners/2.png" },
  { name: "Partner 3", logo: "/images/partners/3.png" },
  { name: "Partner 4", logo: "/images/partners/4.png" },
  { name: "Warrior", logo: "/images/partners/warrior-white.png" },
  { name: "Partner 6", logo: "/images/partners/6.png" },
  { name: "Partner 7", logo: "/images/partners/7.png" },
  { name: "Partner 8", logo: "/images/partners/8.png" },
  { name: "Partner 9", logo: "/images/partners/9.png" },
  { name: "Partner 10", logo: "/images/partners/10.png" },
  { name: "Partner 11", logo: "/images/partners/11.png" },
  { name: "Partner 13", logo: "/images/partners/13.png" },
];

export default function CertifiedPartners() {
  return (
    <section className="bg-gradient-to-r from-brand-yellow to-brand-yellow-dark py-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Heading */}
        <div className="flex-shrink-0">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-brand-black leading-tight py-4">
            We have over 150+<br />Certified Partners
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="flex-1 overflow-hidden relative flex items-center py-4">
          {/* Gradient fade on edges for smooth scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-yellow to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-yellow-dark to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-12 items-center whitespace-nowrap"
          >
            {/* Double the array for seamless infinite scroll */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 md:h-24 max-w-[240px] w-auto object-contain drop-shadow-sm"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
