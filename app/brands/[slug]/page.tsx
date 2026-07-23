"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getBrandBySlug,
  getCategoriesByBrand,
  getProductsByBrand,
  brands,
} from "@/lib/data";
import { ArrowRight, Package, Grid3X3 } from "lucide-react";

export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandCategories = getCategoriesByBrand(brand.id);
  const brandProducts = getProductsByBrand(brand.id);

  return (
    <>
      {/* Brand hero */}
      <section className="relative bg-brand-black pt-32 md:pt-40 pb-24 overflow-hidden">
        {/* Background pattern */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <Link
                  href="/brands"
                  className="text-xs text-white/40 uppercase tracking-wider hover:text-brand-yellow transition-colors"
                >
                  Brands
                </Link>
                <span className="text-white/20">/</span>
                <span className="text-xs text-brand-yellow uppercase tracking-wider font-semibold">
                  {brand.name}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                {brand.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg leading-relaxed mb-8"
              >
                {brand.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <Grid3X3 size={18} className="text-brand-yellow" />
                  <span className="text-sm text-white/60">
                    <strong className="text-white">
                      {brandCategories.length}
                    </strong>{" "}
                    Categories
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Package size={18} className="text-brand-yellow" />
                  <span className="text-sm text-white/60">
                    <strong className="text-white">
                      {brandProducts.length}
                    </strong>{" "}
                    Products
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Brand logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-12">
                <Image
                  src={brand.logo_url}
                  alt={brand.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-black">
              {brand.name} Tyre Categories
            </h2>
            <p className="text-brand-gray mt-2">
              Browse our complete range of {brand.name} tyres by category
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandCategories.map((category, i) => {
              const catProducts = brandProducts.filter(
                (p) => p.category_id === category.id
              );
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/brands/${brand.slug}/${category.slug}`}
                    className="group block relative bg-white rounded-2xl overflow-hidden border border-brand-black/5 hover:shadow-2xl hover:shadow-brand-black/10 hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Category header */}
                    <div className="h-44 bg-gradient-to-br from-brand-charcoal to-brand-black relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                      </div>
                      <div className="relative z-10 text-center">
                        <Grid3X3
                          size={40}
                          className="text-brand-yellow/50 mx-auto mb-3"
                        />
                        <p className="text-xs text-white/30 uppercase tracking-wider">
                          {catProducts.length} Products
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/5 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-brand-yellow uppercase tracking-widest font-semibold mb-1">
                            {brand.name}
                          </p>
                          <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-yellow-dark transition-colors">
                            {category.name}
                          </h3>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-brand-gray group-hover:text-brand-yellow group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-yellow group-hover:w-full transition-all duration-500" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
