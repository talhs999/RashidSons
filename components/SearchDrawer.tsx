"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { products, brands, categories } from "@/lib/data";

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const getBrandName = (id: number) => brands.find(b => b.id === id)?.name || "Brand";
  const getBrandSlug = (id: number) => brands.find(b => b.id === id)?.slug || "";
  const getCategorySlug = (id: number) => categories.find(c => c.id === id)?.slug || "";

  // Get unique category names for the dropdown
  const categoryNames = Array.from(new Set(categories.map(c => c.name)));

  const filteredProducts = products.filter((product) => {
    const brandName = getBrandName(product.brand_id);
    const categoryName = categories.find(c => c.id === product.category_id)?.name || "";
    
    const matchesQuery = 
      product.name.toLowerCase().includes(query.toLowerCase()) || 
      brandName.toLowerCase().includes(query.toLowerCase()) ||
      (product.size && product.size.toLowerCase().includes(query.toLowerCase()));
      
    const matchesCategory = categoryFilter === "All categories" || categoryName === categoryFilter;

    return matchesQuery && matchesCategory;
  });

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-brand-light border-b border-brand-gray/10">
          <h2 className="text-xl font-heading font-bold text-brand-black uppercase tracking-wider">Search Tyres</h2>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-black transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Search Input Area */}
        <div className="p-6 border-b border-brand-gray/10">
          <div className="flex flex-col gap-3 bg-brand-light rounded-md border border-brand-gray/20 focus-within:border-brand-yellow transition-colors overflow-hidden p-1">
            <div className="flex items-center w-full">
              <div className="pl-3 text-brand-gray">
                <SearchIcon size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Brand, size, or model..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none py-3 px-3 text-brand-black placeholder:text-brand-gray"
                autoFocus
              />
            </div>
            <div className="border-t border-brand-gray/10 pt-1 w-full">
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent border-none outline-none py-2 px-3 text-brand-gray text-sm cursor-pointer w-full"
              >
                <option>All categories</option>
                {categoryNames.map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {query.length > 0 ? (
            <div className="space-y-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const bSlug = getBrandSlug(product.brand_id);
                  const cSlug = getCategorySlug(product.category_id);
                  const href = `/brands/${bSlug}/${cSlug}/${product.slug}`;

                  return (
                    <Link href={href} onClick={onClose} key={product.id} className="flex items-center gap-4 group cursor-pointer border-b border-brand-gray/10 pb-6 last:border-0 block w-full">
                      {/* Image Container */}
                      <div className="w-20 h-20 bg-brand-light rounded-md flex-shrink-0 flex items-center justify-center p-2 relative overflow-hidden">
                        <Image 
                          src={product.images[0]} 
                          alt={product.name} 
                          fill 
                          className="object-contain p-2 group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-brand-black font-semibold text-sm group-hover:text-brand-yellow transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-brand-gray text-xs mt-1 uppercase font-bold tracking-wider">{getBrandName(product.brand_id)}</p>
                        {product.size && (
                          <p className="text-brand-gray text-xs mt-1">{product.size}</p>
                        )}
                      </div>

                      {/* Action Icon */}
                      <div className="text-brand-gray group-hover:text-brand-yellow transition-colors">
                        <SlidersHorizontal size={20} />
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="text-center text-brand-gray py-10">
                  <p>No tires found for "{query}"</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-brand-gray py-10">
              <p>Type a brand or size to start searching.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
