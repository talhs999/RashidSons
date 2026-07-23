"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Yokohama", logo: "/images/partners/yokohama-hd-5100.png" },
  { name: "Michelin", logo: "/images/partners/michelin-hd.png" },
  { name: "Goodyear", logo: "/images/partners/goodyear-clean.png" },
  { name: "Blackarrow", logo: "/images/partners/blackarrow-clean.png" },
  { name: "Warrior", logo: "/images/partners/warrior-clean.png" },
  { name: "Rydanz", logo: "/images/partners/rydanz-clean.png" },
  { name: "Yokohama Alliance", logo: "/images/partners/alliance-clean.png" },
];

export default function CertifiedPartners() {
  return (
    <section className="bg-gradient-to-r from-brand-yellow to-brand-yellow-dark py-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Heading */}
        <div className="flex-shrink-0">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-brand-black leading-tight py-4 uppercase">
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
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-14 md:gap-20 items-center whitespace-nowrap"
          >
            {/* Repeat the 7 brand logos 4 times for smooth continuous infinite marquee loop */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-9 md:h-12 max-w-[180px] w-auto object-contain drop-shadow-sm brightness-0"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
