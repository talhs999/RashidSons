"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import HorizontalProductCard from "@/components/HorizontalProductCard";
import { ChevronRight } from "lucide-react";

export default function CategoryProductsPage() {
  const params = useParams();
  const brandSlug = params.slug as string;
  const categorySlug = params.categorySlug as string;

  const [brand, setBrand] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/brands/${brandSlug}/${categorySlug}`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.brand);
        setCategory(data.category);
        setCategoryProducts(data.products || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [brandSlug, categorySlug]);

  if (loading) {
    return (
      <section className="bg-brand-black pt-32 md:pt-40 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-white/50 text-lg">Loading...</div>
      </section>
    );
  }

  if (!brand || !category) {
    notFound();
  }

  // Extract unique tire families from products
  const families = Array.from(new Set(categoryProducts.map((p: any) => {
    const parts = p.name.split(" ");
    const isBrand = parts[0].toLowerCase() === brand.name.toLowerCase();
    return isBrand && parts.length > 1 ? parts[1] : parts[0];
  })));

  const filteredProducts = activeFamily 
    ? categoryProducts.filter((p: any) => {
        const parts = p.name.split(" ");
        const isBrand = parts[0].toLowerCase() === brand.name.toLowerCase();
        const f = isBrand && parts.length > 1 ? parts[1] : parts[0];
        return f === activeFamily;
      })
    : categoryProducts;

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

      {/* Main Content Area: Sidebar + Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left Sidebar Filter */}
            <aside className="w-full lg:w-64 flex-shrink-0">
               <div className="sticky top-32 border border-black/10 shadow-sm rounded-t-sm overflow-hidden">
                  <div className="bg-brand-black text-brand-yellow p-4 border-b border-brand-yellow/20">
                     <h3 className="text-lg font-semibold tracking-wide uppercase">Tire Family</h3>
                  </div>
                  <ul className="bg-white max-h-[60vh] overflow-y-auto custom-scrollbar">
                     <li 
                        className={`cursor-pointer px-5 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors ${!activeFamily ? 'font-bold bg-gray-50 border-l-4 border-brand-yellow' : 'border-l-4 border-l-transparent text-gray-700'}`}
                        onClick={() => setActiveFamily(null)}
                     >
                        All Families
                     </li>
                     {families.map((family) => (
                        <li 
                           key={family}
                           className={`cursor-pointer px-5 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors ${activeFamily === family ? 'font-bold bg-gray-50 border-l-4 border-brand-yellow' : 'border-l-4 border-l-transparent text-gray-700'}`}
                           onClick={() => setActiveFamily(family)}
                        >
                           {family}
                        </li>
                     ))}
                  </ul>
               </div>
            </aside>

            {/* Right Side Products */}
            <div className="flex-1 min-w-0 pt-4 lg:pt-0">
              {filteredProducts.length > 0 ? (
                <div className="flex flex-col">
                  {filteredProducts.map((product: any, i: number) => (
                    <HorizontalProductCard
                      key={product.slug}
                      name={product.name}
                      slug={product.slug}
                      brandName={brand.name}
                      brandSlug={brand.slug}
                      categorySlug={category.slug}
                      size={product.size}
                      image={product.images[0]}
                      description={product.description}
                      index={i}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 border border-black/5">
                  <p className="text-brand-gray text-lg">
                    No products found for this family.
                  </p>
                  <button
                    onClick={() => setActiveFamily(null)}
                    className="inline-flex items-center gap-2 mt-4 text-brand-yellow-dark font-semibold hover:underline"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
