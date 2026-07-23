"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dealers, Dealer } from "@/lib/data";
import {
  Search,
  MapPin,
  Phone,
  Navigation,
  Building2,
  X,
  MapPinOff,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function DealersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDealer, setActiveDealer] = useState<Dealer | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "wholesale" | "retail">("all");

  const hasSearched = searchQuery.trim().length > 0;

  const filteredDealers = useMemo(() => {
    if (!hasSearched) return [];
    const query = searchQuery.toLowerCase().trim();
    return dealers.filter(
      (dealer) =>
        dealer.name.toLowerCase().includes(query) ||
        dealer.city.toLowerCase().includes(query) ||
        dealer.address.toLowerCase().includes(query) ||
        dealer.region.toLowerCase().includes(query)
    );
  }, [searchQuery, hasSearched]);

  // Determine map location target for iframe embed so Google Maps shows exact red location pins
  const mapSrc = useMemo(() => {
    if (activeDealer) {
      // Direct pin on active dealer address
      return `https://maps.google.com/maps?q=${encodeURIComponent(activeDealer.name + ', ' + activeDealer.address + ', ' + activeDealer.city + ' Pakistan')}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }
    if (hasSearched && filteredDealers.length > 0) {
      // Pin on first matched dealer address or city
      const first = filteredDealers[0];
      return `https://maps.google.com/maps?q=${encodeURIComponent(first.address + ', ' + first.city + ' Pakistan')}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }
    if (hasSearched && filteredDealers.length === 0) {
      return `https://maps.google.com/maps?q=${encodeURIComponent(searchQuery + ' Pakistan')}&t=&z=10&ie=UTF8&iwloc=&output=embed`;
    }
    // Default overview
    return `https://maps.google.com/maps?q=${encodeURIComponent('Anarkali Bazaar Lahore Pakistan Tyre Dealer')}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
  }, [searchQuery, hasSearched, filteredDealers, activeDealer]);

  const quickCities = [
    "Lahore",
    "Gujranwala",
    "Islamabad",
    "Sialkot",
    "Peshawar",
    "Faisalabad",
    "Sargodha",
    "Multan",
    "Karachi",
    "Sukkur",
    "Hyderabad",
    "Rahim Yar Khan",
    "Haripur",
    "Mardan",
  ];

  return (
    <div className="bg-white min-h-screen pt-24 font-sans">
      {/* Top Header Strip (Yokohama Style) */}
      <section className="bg-brand-black py-3.5 border-b border-white/10 text-white text-xs uppercase font-extrabold tracking-widest px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-brand-yellow">OUR WHOLESALE DEALERS</span>
        </div>
        <div className="text-white/70 hidden sm:block">PAKISTAN DISTRIBUTOR NETWORK</div>
      </section>

      {/* Main Split Screen Container */}
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-130px)]">
        
        {/* LEFT PANEL: Yokohama Style Search Sidebar (~38% Width) */}
        <div className="w-full lg:w-[38%] bg-white border-r border-gray-200 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto max-h-[calc(100vh-130px)]">
          <div>
            {/* Main Heading */}
            <h1 className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-black uppercase tracking-tight mb-4">
              Our Whole Sale Dealers
            </h1>

            {/* Search Input Box */}
            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Enter City or Area (e.g. Lahore, Karachi, Islamabad)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveDealer(null);
                }}
                className="w-full pl-4 pr-12 py-3.5 border-b-2 border-gray-300 focus:border-brand-black text-brand-black placeholder:text-gray-400 focus:outline-none transition-all text-sm font-semibold"
              />
              {searchQuery ? (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveDealer(null);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-black p-1"
                >
                  <X size={18} />
                </button>
              ) : (
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-yellow-dark p-1">
                  <Search size={20} />
                </button>
              )}
            </div>



            {/* Status Indicator Bar */}
            <div className="pb-3 border-b border-gray-200 mb-6 flex items-center justify-between text-xs text-gray-500 font-bold">
              <span>
                {hasSearched ? `Showing ${filteredDealers.length} results` : "Enter city name to search dealers"}
              </span>
              {hasSearched && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveDealer(null);
                  }}
                  className="text-brand-black underline hover:text-brand-yellow-dark"
                >
                  Clear
                </button>
              )}
            </div>

            {/* RESULTS LIST AREA */}
            <div className="space-y-6">
              
              {/* DEFAULT STATE: No search query entered yet */}
              {!hasSearched && (
                <div className="py-8 bg-cream/70 rounded-2xl p-6 border border-brand-black/5 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-brand-yellow/30 text-brand-black flex items-center justify-center mx-auto mb-3">
                    <Search size={22} />
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-brand-black uppercase tracking-tight mb-2">
                    Search Dealers Near You
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Type a city name in the search bar above to locate authorized dealers and point pins on the live map.
                  </p>


                </div>
              )}

              {/* SEARCHED STATE: Dealer Cards List (Yokohama Style with Skewed Red/Yellow CTA) */}
              {hasSearched && filteredDealers.length > 0 && (
                <div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {filteredDealers.map((dealer, i) => (
                      <motion.div
                        key={dealer.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => setActiveDealer(dealer)}
                        className={`pb-6 border-b border-gray-200 transition-all cursor-pointer group ${
                          activeDealer?.id === dealer.id ? "bg-yellow-50/50 p-4 rounded-xl border border-brand-yellow" : ""
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-heading font-extrabold text-lg text-brand-black uppercase tracking-tight group-hover:text-brand-yellow-dark transition-colors">
                            {dealer.name}
                          </h3>
                          <span className="text-xs font-bold text-gray-400">
                            {dealer.city}
                          </span>
                        </div>

                        <div className="flex items-start gap-2 text-xs text-gray-700 mb-2">
                          <MapPin size={14} className="text-brand-black flex-shrink-0 mt-0.5" />
                          <span>{dealer.address}</span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-700 mb-4">
                          <Phone size={14} className="text-brand-black flex-shrink-0" />
                          <span>{dealer.phone}</span>
                        </div>

                        {/* Yokohama Style Skewed CTA Button */}
                        <div className="flex items-center gap-3">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dealer.address + ' ' + dealer.city)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-brand-yellow text-brand-black font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 skew-x-[-15deg] inline-flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-md"
                          >
                            <span className="skew-x-[15deg] flex items-center gap-1">
                              DIRECTIONS <ChevronRight size={14} />
                            </span>
                          </a>

                          <a
                            href={`tel:${dealer.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-brand-black text-white font-extrabold text-xs uppercase tracking-wider px-6 py-2.5 skew-x-[-15deg] inline-flex items-center gap-2 hover:bg-brand-charcoal transition-colors shadow-md"
                          >
                            <span className="skew-x-[15deg] flex items-center gap-1">
                              CALL <Phone size={12} />
                            </span>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {/* EMPTY STATE: 0 Results Found */}
              {hasSearched && filteredDealers.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 px-6 text-center bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto mb-3">
                    <MapPinOff size={24} />
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-brand-black uppercase tracking-tight mb-1">
                    No Dealers Found in &quot;{searchQuery}&quot;
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    No authorized dealer found in this area. Try searching another city like Lahore, Karachi, Islamabad, or Faisalabad.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveDealer(null);
                    }}
                    className="w-full py-2.5 bg-brand-black text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-brand-charcoal transition-colors"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}

            </div>
          </div>

          {/* Footer copyright */}
          <div className="pt-6 border-t border-gray-200 text-[11px] text-gray-400 flex items-center justify-between">
            <span>Official Importer &amp; Distributor Network</span>
            <span>J. Rashid &amp; Sons © 1948</span>
          </div>
        </div>

        {/* RIGHT PANEL: Full Live Interactive Map with Pin Points (~62% Width) */}
        <div className="w-full lg:w-[62%] bg-gray-100 relative min-h-[450px] lg:min-h-full">
          
          {/* Top Map Header Badge */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md border border-gray-200 text-xs font-bold text-brand-black flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
            <span>
              {activeDealer
                ? `Pin Point: ${activeDealer.name} (${activeDealer.city})`
                : hasSearched
                  ? `Map Pin Centered on "${searchQuery}"`
                  : "Live Map Location Locator"}
            </span>
          </div>

          {/* Google Map Embedded Iframe pointing pins */}
          <iframe
            key={mapSrc}
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Yokohama Style Map Pin Locator"
            className="w-full h-full min-h-[450px] lg:min-h-full filter brightness-95"
          />
        </div>

      </div>
    </div>
  );
}
