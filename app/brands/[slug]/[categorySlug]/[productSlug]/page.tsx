"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBrandBySlug,
  getCategoryBySlug,
  getProductBySlug,
  brands,
} from "@/lib/data";
import {
  ChevronRight,
  MessageCircle,
  Phone,
  Package,
  Ruler,
  Check,
  AlertTriangle,
  Clock,
  ArrowLeft,
  Share2,
} from "lucide-react";

const stockConfig = {
  in_stock: {
    icon: Check,
    text: "In Stock",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  out_of_stock: {
    icon: AlertTriangle,
    text: "Out of Stock",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  on_order: {
    icon: Clock,
    text: "On Order",
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10",
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const brandSlug = params.slug as string;
  const categorySlug = params.categorySlug as string;
  const productSlug = params.productSlug as string;

  const brand = getBrandBySlug(brandSlug);
  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(productSlug);

  if (!brand || !category || !product) {
    notFound();
  }

  const stock = stockConfig[product.stock_status];
  const StockIcon = stock.icon;

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-6">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 flex-wrap"
          >
            <Link
              href="/brands"
              className="text-xs text-white/40 uppercase tracking-wider hover:text-brand-yellow transition-colors"
            >
              Brands
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <Link
              href={`/brands/${brand.slug}`}
              className="text-xs text-white/40 uppercase tracking-wider hover:text-brand-yellow transition-colors"
            >
              {brand.name}
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <Link
              href={`/brands/${brand.slug}/${category.slug}`}
              className="text-xs text-white/40 uppercase tracking-wider hover:text-brand-yellow transition-colors"
            >
              {category.name}
            </Link>
            <ChevronRight size={12} className="text-white/20" />
            <span className="text-xs text-brand-yellow uppercase tracking-wider font-semibold">
              {product.name}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Product detail */}
      <section className="bg-brand-black pb-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Product image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-charcoal to-brand-black rounded-3xl p-12 lg:p-16 border border-white/5">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <div className="w-full aspect-square flex items-center justify-center">
                    <Package
                      size={120}
                      className="text-white/10"
                    />
                  </div>
                )}
              </div>

              {/* Brand badge on image */}
              <div className="absolute top-6 left-6">
                <div className="bg-brand-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <Image
                    src={brand.logo_url}
                    alt={brand.name}
                    width={60}
                    height={24}
                    className="h-5 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Product info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Brand + Category */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-brand-yellow/10 text-brand-yellow uppercase tracking-wider">
                  {brand.name}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-white/5 text-white/50 uppercase tracking-wider">
                  {category.name}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>

              {/* Size + Stock */}
              <div className="flex items-center gap-4 mb-6">
                {product.size && (
                  <div className="flex items-center gap-2 text-white/60">
                    <Ruler size={16} className="text-brand-yellow" />
                    <span className="text-sm font-medium">{product.size}</span>
                  </div>
                )}
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${stock.bg}`}
                >
                  <StockIcon size={14} className={stock.color} />
                  <span className={`text-xs font-semibold ${stock.color}`}>
                    {stock.text}
                  </span>
                </div>
              </div>

              {/* Price */}
              {product.price && (
                <p className="text-2xl font-bold text-brand-yellow mb-6">
                  PKR {product.price.toLocaleString()}
                </p>
              )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">
                  Description
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs table */}
              <div className="mb-8 border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3 text-xs text-white/40 uppercase tracking-wider">
                        Brand
                      </td>
                      <td className="px-4 py-3 text-sm text-white font-medium">
                        {brand.name}
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-4 py-3 text-xs text-white/40 uppercase tracking-wider">
                        Category
                      </td>
                      <td className="px-4 py-3 text-sm text-white font-medium">
                        {category.name}
                      </td>
                    </tr>
                    {product.size && (
                      <tr className="border-b border-white/5">
                        <td className="px-4 py-3 text-xs text-white/40 uppercase tracking-wider">
                          Size
                        </td>
                        <td className="px-4 py-3 text-sm text-white font-medium">
                          {product.size}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-4 py-3 text-xs text-white/40 uppercase tracking-wider">
                        Availability
                      </td>
                      <td className="px-4 py-3 text-sm text-white font-medium">
                        {stock.text}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={`https://wa.me/923004058489?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (${product.size || ""}). Please provide a quote and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-6 py-3 font-bold rounded-xl flex-1 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={18} />
                  Get a Quote on WhatsApp
                </a>
                <a
                  href="tel:+923004058489"
                  className="bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10 px-6 py-3 font-bold rounded-xl flex-1 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>

              {/* Back link */}
              <Link
                href={`/brands/${brand.slug}/${category.slug}`}
                className="flex items-center gap-2 text-sm text-white/40 hover:text-brand-yellow transition-colors mt-6"
              >
                <ArrowLeft size={16} />
                Back to {category.name}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
