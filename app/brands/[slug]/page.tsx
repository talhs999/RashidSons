"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Package, Grid3X3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [brand, setBrand] = useState<any>(null);
  const [brandCategories, setBrandCategories] = useState<any[]>([]);
  const [brandProducts, setBrandProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/brands/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.brand);
        setBrandCategories(data.categories || []);
        setBrandProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="relative bg-brand-black pt-32 md:pt-40 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-white/50 text-lg">Loading...</div>
      </section>
    );
  }

  if (!brand) {
    notFound();
  }

  return (
    <>
      {/* Brand hero */}
      <section className="relative bg-brand-black pt-32 md:pt-40 pb-24 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image fading on the right */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 opacity-30 lg:opacity-60">
          <Image
            src={brand.tire_image || brand.logo_url}
            alt={brand.name}
            fill
            className="object-cover lg:object-contain object-right"
            priority
          />
          {/* Gradient fade from left to right to blend with the black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10 w-full">
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
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

            {/* Brand Logo replacing text heading if available, else text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 h-16 lg:h-24 relative"
            >
              <Image 
                src={brand.logo_white_url || brand.logo_url}
                alt={brand.name}
                fill
                className="object-contain object-left filter brightness-0 invert"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              {brand.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Grid3X3 size={20} className="text-brand-yellow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-none mb-1">
                    {brandCategories.length}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">Categories</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Package size={20} className="text-brand-yellow" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-none mb-1">
                    {brandProducts.length}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">Products</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Brand Section */}
      {brand.about && (
        <section className="py-16 lg:py-24 bg-white border-b border-brand-black/5">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left: Heading & Stats */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl lg:text-4xl font-bold text-brand-black mb-8 uppercase">
                    {brand.about.heading || `About ${brand.name}`}
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {brand.about.founder && (
                      <div className="bg-brand-black/5 p-4 rounded-xl border border-brand-black/10">
                        <p className="text-xs text-brand-gray uppercase tracking-wider font-bold mb-1">Founder</p>
                        <p className="text-sm font-semibold text-brand-black">{brand.about.founder}</p>
                      </div>
                    )}
                    {brand.about.founded_year && (
                      <div className="bg-brand-yellow/20 p-4 rounded-xl border border-brand-yellow/30">
                        <p className="text-xs text-brand-gray uppercase tracking-wider font-bold mb-1">Founded In</p>
                        <p className="text-sm font-semibold text-brand-black">{brand.about.founded_year}</p>
                      </div>
                    )}
                    {brand.about.headquarters && (
                      <div className="col-span-2 bg-brand-black/5 p-4 rounded-xl border border-brand-black/10">
                        <p className="text-xs text-brand-gray uppercase tracking-wider font-bold mb-1">Headquarters</p>
                        <p className="text-sm font-semibold text-brand-black">{brand.about.headquarters}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Right: History Text */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="prose prose-lg max-w-none prose-p:text-brand-gray prose-p:leading-relaxed"
                >
                  <p className="text-lg lg:text-xl text-brand-black font-medium leading-relaxed mb-6">
                    {brand.about.history}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

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
            {brandCategories.map((category: any, i: number) => {
              const catProducts = brandProducts.filter(
                (p: any) => p.category_id === category.id
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
                    <div className="p-6 group-hover:bg-brand-yellow transition-colors duration-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="mb-2">
                            <span className="text-[10px] bg-brand-black text-brand-yellow px-2 py-1 rounded uppercase tracking-widest font-semibold inline-block">
                              {brand.name}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-black transition-colors">
                            {category.name}
                          </h3>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-brand-gray group-hover:text-brand-black group-hover:translate-x-1 transition-all"
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
