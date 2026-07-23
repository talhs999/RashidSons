"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  slug: string;
  logo: string;
  description?: string;
  index?: number;
}

export default function BrandCard({
  name,
  slug,
  logo,
  description,
  index = 0,
}: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/brands/${slug}`}
        className="group block relative bg-white rounded-2xl overflow-hidden border border-brand-black/5 hover:shadow-2xl hover:shadow-brand-black/10 hover:-translate-y-2 transition-all duration-500"
      >
        {/* Top section with brand logo */}
        <div className="relative h-56 bg-gradient-to-br from-brand-black to-brand-black flex items-center justify-center p-8 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Logo */}
          <div className="relative z-10 w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Image
              src={logo}
              alt={name}
              width={120}
              height={120}
              className="w-full h-full object-contain filter brightness-0 invert"
            />
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/5 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-yellow-dark transition-colors">
              {name}
            </h3>
            <ArrowRight
              size={18}
              className="text-brand-gray group-hover:text-brand-yellow group-hover:translate-x-1 transition-all"
            />
          </div>
          {description && (
            <p className="text-sm text-brand-gray line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-500" />
      </Link>
    </motion.div>
  );
}
