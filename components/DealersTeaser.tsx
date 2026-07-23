"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Sargodha",
  "Hyderabad",
  "Sukkur",
  "Quetta",
];

export default function DealersTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-4"
            >
              Dealer Network
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold text-brand-black leading-tight mb-6"
            >
              200+ Wholesale Dealers
              <br />
              Across Pakistan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-gray text-lg leading-relaxed mb-8"
            >
              Find an authorized J. Rashid &amp; Sons dealer near you. Our
              extensive network ensures premium tyres are always within reach, no
              matter where you are in Pakistan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/dealers"
                className="btn-primary rounded-lg bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black"
              >
                <MapPin size={18} />
                Find a Dealer Near You
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right: City grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-3">
              {cities.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                >
                  <Link
                    href={`/dealers?city=${encodeURIComponent(city)}`}
                    className="group flex items-center gap-2 p-4 rounded-xl bg-cream hover:bg-brand-black transition-all duration-400"
                  >
                    <Building2
                      size={16}
                      className="text-brand-gray group-hover:text-brand-yellow transition-colors flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-brand-charcoal group-hover:text-white transition-colors">
                      {city}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
