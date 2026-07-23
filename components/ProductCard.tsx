"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye, MessageCircle, Package, Ruler } from "lucide-react";

interface ProductCardProps {
  name: string;
  slug: string;
  brandName: string;
  brandSlug: string;
  categorySlug: string;
  size?: string;
  image?: string;
  price?: number | null;
  stockStatus: "in_stock" | "out_of_stock" | "on_order";
  index?: number;
}

const stockLabels = {
  in_stock: { text: "In Stock", color: "bg-emerald-500" },
  out_of_stock: { text: "Out of Stock", color: "bg-red-500" },
  on_order: { text: "On Order", color: "bg-brand-yellow" },
};

export default function ProductCard({
  name,
  slug,
  brandName,
  brandSlug,
  categorySlug,
  size,
  image,
  price,
  stockStatus,
  index = 0,
}: ProductCardProps) {
  const stock = stockLabels[stockStatus];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-brand-black/5 hover:shadow-2xl hover:shadow-brand-black/10 hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image area */}
      <div className="relative h-52 bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center p-6 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-24 h-24 rounded-2xl bg-brand-black/5 flex items-center justify-center">
            <Package size={40} className="text-brand-gray/30" />
          </div>
        )}

        {/* Stock badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white ${stock.color}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            {stock.text}
          </span>
        </div>

        {/* Brand badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-brand-black text-white uppercase tracking-wider">
            {brandName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-brand-black mb-1 group-hover:text-brand-yellow-dark transition-colors line-clamp-1">
          {name}
        </h3>
        {size && (
          <div className="flex items-center gap-1.5 text-brand-gray mb-3">
            <Ruler size={13} />
            <span className="text-xs font-medium">{size}</span>
          </div>
        )}
        {price && (
          <p className="text-lg font-bold text-brand-yellow-dark mb-3">
            PKR {price.toLocaleString()}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Link
            href={`/brands/${brandSlug}/${categorySlug}/${slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-brand-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
          >
            <Eye size={14} />
            Details
          </Link>
          <a
            href={`https://wa.me/923004058489?text=${encodeURIComponent(`Hi, I'm interested in ${name} (${size || ""}). Please provide a quote.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-brand-yellow text-brand-black text-xs font-semibold uppercase tracking-wider hover:bg-brand-yellow transition-colors"
          >
            <MessageCircle size={14} />
            Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
}
