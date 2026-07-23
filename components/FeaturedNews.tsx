"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "Jul 1st, 2026",
    title: "J. Rashid & Sons 'Pit Crew' Teaches Drivers the Importance of Tire Safety",
    tag: "CONSUMER NEWS",
    image: "/images/hero-bg.jpg" // Placeholder
  },
  {
    id: 2,
    date: "Jun 23rd, 2026",
    title: "Drivers Ride ADVAN Tires to Division Victories, Record-Breaking Runs",
    tag: "MOTORSPORTS",
    image: "/images/hero-bg.jpg" // Placeholder
  },
  {
    id: 3,
    date: "Jun 16th, 2026",
    title: "Tire Drivers Gearing Up for 104th Pikes Peak International Hill Climb",
    tag: "MOTORSPORTS",
    image: "/images/hero-bg.jpg" // Placeholder
  }
];

export default function FeaturedNews() {
  return (
    <section className="bg-brand-light py-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-brand-black/10 pb-6 relative">
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-black tracking-tighter uppercase relative">
            Featured News
            <div className="absolute -bottom-[26px] left-0 w-16 h-1 bg-brand-yellow" />
          </h2>
          
          <Link href="/news" className="group flex items-center gap-2 mt-4 md:mt-0 font-heading font-bold text-brand-black uppercase tracking-wider hover:text-brand-yellow transition-colors">
            View All News <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((news, i) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[450px] w-full bg-brand-black overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Date */}
                <div className="mb-4">
                  <span className="text-white font-bold font-sans text-sm">{news.date}</span>
                  <div className="h-0.5 w-8 bg-white mt-1" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-white leading-snug mb-6 group-hover:text-brand-yellow transition-colors duration-300">
                  {news.title}
                </h3>
                
                {/* Tag & Button Row */}
                <div className="flex items-center justify-between">
                  {/* Tag */}
                  <span className="bg-brand-black/80 backdrop-blur-sm border border-white/10 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-widest">
                    {news.tag}
                  </span>
                  
                  {/* Action Button (Slanted) */}
                  <div className="absolute bottom-0 right-0 bg-brand-yellow text-brand-black p-4 skew-x-[-20deg] translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                     <ChevronRight size={24} className="skew-x-[20deg]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
