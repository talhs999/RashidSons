"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBrandBySlug,
  getCategoryBySlug,
  getProductsByCategory,
  brands,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";

export default function CategoryProductsPage() {
  const params = useParams();
  const brandSlug = params.slug as string;
  const categorySlug = params.categorySlug as string;

  const brand = getBrandBySlug(brandSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!brand || !category || category.brand_id !== brand.id) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 flex-wrap"
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
            <span className="text-xs text-brand-yellow uppercase tracking-wider font-semibold">
              {category.name}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            {brand.name} {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg"
          >
            Showing {categoryProducts.length} product
            {categoryProducts.length !== 1 ? "s" : ""} in this category
          </motion.p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product, i) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  brandName={brand.name}
                  brandSlug={brand.slug}
                  categorySlug={category.slug}
                  size={product.size}
                  image={product.images[0]}
                  price={product.price}
                  stockStatus={product.stock_status}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-gray text-lg">
                No products available in this category yet.
              </p>
              <Link
                href={`/brands/${brand.slug}`}
                className="inline-flex items-center gap-2 mt-4 text-brand-yellow-dark font-semibold hover:text-brand-yellow"
              >
                Back to {brand.name}
                <ChevronRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
