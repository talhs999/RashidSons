"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TireFinder() {
  const [activeTab, setActiveTab] = useState<"vehicle" | "size">("size");

  return (
    <div className="bg-brand-black w-full max-w-4xl shadow-2xl relative overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 60px) 100%, 0 100%)" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 p-8 lg:p-10 lg:pr-24">
        {/* Nice Heading */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-white uppercase tracking-tighter mb-2">
            FIND YOUR TIRES
          </h2>
          <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm">
            Search by vehicle or size
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab("vehicle")}
            className={`pb-4 text-sm lg:text-base font-heading font-bold uppercase tracking-wider transition-colors relative ${
              activeTab === "vehicle" ? "text-white" : "text-white/40 hover:text-white/80"
            }`}
          >
            Vehicle
            {activeTab === "vehicle" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("size")}
            className={`pb-4 text-sm lg:text-base font-heading font-bold uppercase tracking-wider transition-colors relative ${
              activeTab === "size" ? "text-white" : "text-white/40 hover:text-white/80"
            }`}
          >
            Tire Size
            {activeTab === "size" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-yellow" />
            )}
          </button>
        </div>

        {/* Content */}
        {activeTab === "size" ? (
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Width</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Width</option>
                <option className="bg-brand-black text-white" value="195">195</option>
                <option className="bg-brand-black text-white" value="205">205</option>
                <option className="bg-brand-black text-white" value="215">215</option>
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Aspect Ratio</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Ratio</option>
                <option className="bg-brand-black text-white" value="55">55</option>
                <option className="bg-brand-black text-white" value="60">60</option>
                <option className="bg-brand-black text-white" value="65">65</option>
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Diameter</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Diameter</option>
                <option className="bg-brand-black text-white" value="15">15</option>
                <option className="bg-brand-black text-white" value="16">16</option>
                <option className="bg-brand-black text-white" value="17">17</option>
              </select>
            </div>
            
            <button className="text-white hover:text-brand-yellow transition-colors p-2 mb-1">
              <ChevronRight size={24} />
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 items-end">
             <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Year</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Year</option>
                <option className="bg-brand-black text-white" value="2024">2024</option>
                <option className="bg-brand-black text-white" value="2023">2023</option>
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Make</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Make</option>
                <option className="bg-brand-black text-white" value="toyota">Toyota</option>
                <option className="bg-brand-black text-white" value="honda">Honda</option>
              </select>
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs font-semibold text-white/50 uppercase mb-2">Model</label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-brand-yellow text-lg">
                <option className="bg-brand-black text-white" value="">Model</option>
              </select>
            </div>
            
            <button className="text-white hover:text-brand-yellow transition-colors p-2 mb-1">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className="mt-8 flex gap-6 justify-end">
           <button className="text-[11px] font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors">
              Clear Filters
           </button>
           <Link href="/brands" className="text-[11px] font-bold text-white uppercase tracking-widest hover:text-brand-yellow transition-colors">
              View All Tires
           </Link>
        </div>
      </div>
    </div>
  );
}
