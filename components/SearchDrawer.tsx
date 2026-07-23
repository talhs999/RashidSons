"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Search as SearchIcon, SlidersHorizontal } from "lucide-react";

// Mock data for search
const mockTires = [
  { id: 1, name: "Yokohama Advan dB V552 245-45-R18", price: "Rs 54,000", image: "/images/hero-bg.jpg", brand: "Yokohama" },
  { id: 2, name: "Yokohama Advan dB V553 225-55-R18", price: "Rs 52,000", image: "/images/hero-bg.jpg", brand: "Yokohama" },
  { id: 3, name: "Yokohama Advan dB V553 225-55-R19", price: "Rs 63,000", image: "/images/hero-bg.jpg", brand: "Yokohama" },
  { id: 4, name: "Yokohama Advan dB V553 205-55-R16", price: "Rs 41,000", image: "/images/hero-bg.jpg", brand: "Yokohama" },
  { id: 5, name: "Yokohama Bluearth ES32 215-50-R17", price: "Rs 38,000", image: "/images/hero-bg.jpg", brand: "Yokohama" },
  { id: 6, name: "Michelin Pilot Sport 4 225-45-R17", price: "Rs 45,000", image: "/images/hero-bg.jpg", brand: "Michelin" },
  { id: 7, name: "Michelin Defender LTX 265-70-R17", price: "Rs 58,000", image: "/images/hero-bg.jpg", brand: "Michelin" },
  { id: 8, name: "Goodyear Eagle F1 235-40-R18", price: "Rs 49,000", image: "/images/hero-bg.jpg", brand: "Goodyear" },
  { id: 9, name: "Continental ExtremeContact 245-35-R19", price: "Rs 61,000", image: "/images/hero-bg.jpg", brand: "Continental" },
];

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const filteredTires = mockTires.filter((tire) => {
    const matchesQuery = tire.name.toLowerCase().includes(query.toLowerCase()) || tire.brand.toLowerCase().includes(query.toLowerCase());
    return matchesQuery;
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
          <h2 className="text-xl font-heading font-bold text-brand-black uppercase tracking-wider">Search</h2>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-black transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Search Input Area */}
        <div className="p-6 border-b border-brand-gray/10">
          <div className="flex items-center bg-brand-light rounded-md border border-brand-gray/20 focus-within:border-brand-yellow transition-colors overflow-hidden">
            <div className="pl-3 text-brand-gray">
              <SearchIcon size={18} />
            </div>
            <input 
              type="text" 
              placeholder="e.g. yokohama..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none py-3 px-3 text-brand-black placeholder:text-brand-gray"
              autoFocus
            />
            <div className="border-l border-brand-gray/20">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-transparent border-none outline-none py-3 px-3 text-brand-gray text-sm cursor-pointer"
              >
                <option>All categories</option>
                <option>Passenger Car</option>
                <option>SUV / 4x4</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {query.length > 0 ? (
            <div className="space-y-6">
              {filteredTires.length > 0 ? (
                filteredTires.map((tire) => (
                  <div key={tire.id} className="flex items-center gap-4 group cursor-pointer border-b border-brand-gray/10 pb-6 last:border-0">
                    {/* Image Container with Yellow Theme */}
                    <div className="w-20 h-20 bg-brand-yellow rounded-md flex-shrink-0 flex items-center justify-center p-2 relative overflow-hidden">
                      <Image 
                        src={tire.image} 
                        alt={tire.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-300 mix-blend-multiply" 
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-brand-black font-semibold text-sm group-hover:text-brand-yellow transition-colors leading-snug">
                        {tire.name}
                      </h3>
                      <p className="text-brand-gray text-sm mt-1">{tire.price}</p>
                    </div>

                    {/* Action Icon */}
                    <div className="text-brand-gray group-hover:text-brand-yellow transition-colors">
                      <SlidersHorizontal size={20} />
                    </div>
                  </div>
                ))
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

        {/* Footer */}
        {query.length > 0 && filteredTires.length > 0 && (
          <div className="p-6 bg-brand-light border-t border-brand-gray/10">
            <Link href={`/search?q=${query}`} onClick={onClose} className="btn-skew-black w-full flex justify-center">
              <span>View All Results</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
