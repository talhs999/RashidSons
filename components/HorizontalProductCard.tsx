"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Settings2, ShieldCheck, Zap, Sun, Snowflake, FileText, MapPin } from "lucide-react";

interface HorizontalProductCardProps {
  name: string;
  slug: string;
  brandName: string;
  brandSlug: string;
  categorySlug: string;
  size?: string;
  image?: string;
  description: string;
  index?: number;
}

export default function HorizontalProductCard({
  name,
  slug,
  brandName,
  brandSlug,
  categorySlug,
  size,
  image,
  description,
  index = 0,
}: HorizontalProductCardProps) {
  // Extract pattern family for the badge (first/second word)
  const nameParts = name.split(" ");
  const isBrandInName = nameParts[0].toLowerCase() === brandName.toLowerCase();
  const patternFamily = isBrandInName && nameParts.length > 1 ? nameParts[1] : nameParts[0];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-12 lg:mb-16 last:mb-0"
    >
      {/* 
        Main Card Body 
        Uses a light gray background with a subtle shadow.
        Left padding is large to accommodate the overlapping tire image.
      */}
      <div className="relative bg-[#e9e9e9] border border-black/5 flex flex-col md:flex-row shadow-lg ml-0 md:ml-24 lg:ml-32 transition-shadow hover:shadow-xl group">
        
        {/* Top-Left Pattern Tab Decoration (Desktop Only) */}
        <div className="hidden md:block absolute -top-8 left-0 z-10 w-48 h-16 bg-[#e9e9e9] border-t border-l border-black/5"
             style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}>
           <div className="pt-2 pl-4">
             <h4 className="text-xl font-heading font-extrabold italic text-brand-black/20 uppercase tracking-widest">{brandName}</h4>
             <h3 className="text-3xl font-heading font-extrabold italic text-brand-black leading-none uppercase tracking-widest -mt-1">{patternFamily}</h3>
           </div>
        </div>

        {/* Overlapping Tire Image */}
        <div className="relative w-full md:w-auto h-64 md:h-auto md:absolute md:-left-32 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20 pointer-events-none p-4 md:p-0 mt-8 md:mt-0">
          {image ? (
            <div className="relative w-56 h-56 md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          ) : (
             <div className="w-56 h-56 md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full bg-brand-charcoal/5 border-2 border-brand-charcoal/10 flex items-center justify-center">
                <span className="text-brand-gray/50 uppercase font-bold text-xs">No Image</span>
             </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:py-10 md:pr-10 md:pl-[220px] lg:pl-[260px] flex flex-col justify-between">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              {/* Product Title */}
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-brand-black mb-4">
                {name} <span className="align-super text-sm font-bold opacity-60">®</span>
              </h2>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border border-black/10 px-3 py-1.5 text-[10px] md:text-xs font-bold text-brand-black uppercase tracking-wider shadow-sm">
                  {size ? size : "VARIOUS SIZES"}
                </span>
                <span className="bg-white border border-black/10 px-3 py-1.5 text-[10px] md:text-xs font-bold text-brand-black uppercase tracking-wider shadow-sm">
                  PREMIUM QUALITY
                </span>
              </div>
            </div>

            {/* Icons representing features (simulated based on ref image) */}
            <div className="flex items-center gap-3 text-brand-black/70">
               <Settings2 size={22} />
               <Zap size={22} />
               <ShieldCheck size={22} />
               <Sun size={22} />
               {description.toLowerCase().includes("winter") || description.toLowerCase().includes("all season") ? (
                  <Snowflake size={22} />
               ) : null}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-brand-gray/90 leading-relaxed text-sm md:text-base pr-0 md:pr-8">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 border-t border-black/10 pt-6">
            <Link 
               href={`/brands/${brandSlug}/${categorySlug}/${slug}`}
               className="flex items-center gap-2 px-6 py-3 bg-brand-charcoal hover:bg-brand-black text-white font-bold text-xs uppercase tracking-wider transition-colors skew-x-[-10deg]"
            >
               <span className="skew-x-[10deg] flex items-center gap-2">
                  <FileText size={16} />
                  Learn More <ChevronRight size={14} />
               </span>
            </Link>

            <Link 
               href={`/dealers`}
               className="flex items-center gap-2 px-4 py-3 text-brand-black font-bold text-xs uppercase tracking-wider hover:text-brand-yellow-dark transition-colors"
            >
               <MapPin size={16} />
               Find a Dealer <ChevronRight size={14} className="text-brand-yellow-dark" />
            </Link>

          </div>

        </div>
      </div>
    </motion.div>
  );
}
