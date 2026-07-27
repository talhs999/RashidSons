"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Info,
  Type,
  Ruler,
  Weight,
  Gauge,
  ShieldAlert,
  Image as ImageIcon
} from "lucide-react";

export default function SizingInformationPage() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-cream min-h-screen font-sans text-brand-black pt-24">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20 lg:py-32 px-4 relative overflow-hidden border-b-8 border-brand-yellow">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto relative z-10 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-brand-yellow/10 border border-brand-yellow/30 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-6">
            Tires 101 Guide
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight mb-6">
            Sizing Information
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Sizing information molded on the tyre sidewall provides a significant amount of detail. Once you decode this data, you'll understand the tyre's intended purpose, dimensions, load capacity, and speed rating.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1200px] mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* 1. Service Type or Size Designation */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Type className="text-brand-yellow-dark" size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-4 tracking-tight">
                  1. Service Type / Size Designation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  Some tyre size designations start with a letter(s) that identify the type of vehicle and/or type of service for which they were designed (typically P, LT, T, and C).
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2">P-Metric (Passenger)</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Sizes starting with <strong>P</strong> are passenger tyres designed to US TRA standards. Sizes without a starting letter are Euro-metric, dimensionally equivalent but differ slightly in load capacity.
                     </p>
                   </div>
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2">LT (Light Truck)</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Sizes starting with <strong>LT</strong> are designed for pickup trucks with higher cargo and towing capacities (e.g., LT215/75R15).
                     </p>
                   </div>
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2">T (Temporary)</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Sizes starting with <strong>T</strong> signify a temporary spare or mini-spare, used only until a flat tyre is repaired.
                     </p>
                   </div>
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2">C (Commercial)</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Euro-metric sizes ending in <strong>C</strong> indicate a commercial tread intended for vans or delivery trucks carrying heavy loads.
                     </p>
                   </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon size={48} className="mb-4 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold">Image Placeholder</p>
                  <p className="text-sm mt-2">Upload Size Designation Diagram Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Tire Dimensions */}
          <motion.div variants={fadeUp} className="bg-brand-black text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
             <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                <Ruler className="text-brand-yellow" size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-6 tracking-tight text-brand-yellow">
                  2. Tyre Dimensions
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Section Width</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        A three-digit number identifying the tyre’s section width in millimeters (e.g., <strong>265</strong>).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Aspect Ratio</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        The two-digit number following the width. It is the percentage of the section height divided by the width (e.g., <strong>70</strong> means height is 70% of width).
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Construction</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        A letter identifying construction. <strong>R</strong> means Radial. <strong>D</strong> means bias ply (diagonal). <strong>F</strong> identifies run-flat construction.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Rim Diameter</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        The last two digits refer to the wheel diameter the tyre is intended to fit (e.g., <strong>17</strong> inches).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-white/5 rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-white/40">
                  <ImageIcon size={48} className="mb-4 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold">Image Placeholder</p>
                  <p className="text-sm mt-2">Upload Tyre Dimensions Diagram Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Service Descriptions */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Weight className="text-brand-yellow-dark" size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-4 tracking-tight">
                  3. Service Descriptions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  The digits and letter after the rim diameter represent the Load Index (maximum loading capacity) and Speed Rating (maximum speed allowed).
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                       <Weight size={20} className="text-brand-black" /> Load Index
                     </h3>
                     <p className="text-sm text-gray-600 leading-relaxed mb-4">
                       Defines maximum load per tyre (e.g., 116 = 2,756 lbs). Passenger tyres may be Light Load (LL), Standard Load (SL), or Extra Load (XL). Light truck tyres use load ranges (B to F, typically C, D, E) and often show two numbers (e.g., 121/118) for single and dual applications.
                     </p>
                     <p className="text-xs text-red-600 font-bold uppercase tracking-wider">
                       Never exceed the maximum vehicle load limit. Overloading causes structural damage.
                     </p>
                  </div>
                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                       <Gauge size={20} className="text-brand-black" /> Speed Rating
                     </h3>
                     <p className="text-sm text-gray-600 leading-relaxed mb-4">
                       Matches the speed capability of tyres to the top speed of vehicles. It does not suggest the actual driving speed but shows the maximum capacity.
                     </p>
                     <p className="text-xs text-red-600 font-bold uppercase tracking-wider">
                       Exceeding a tyre’s speed capacity can cause overheating and sudden failure.
                     </p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon size={48} className="mb-4 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold">Image Placeholder</p>
                  <p className="text-sm mt-2">Upload Load Index / Speed Rating Table Here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Critical Safety Warnings */}
          <motion.div variants={fadeUp} className="bg-red-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden border border-red-100">
            <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 border border-red-200">
                <ShieldAlert size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-6 tracking-tight text-red-900">
                  Critical Safety Information
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-red-800">Tyre Spinning</h3>
                    <p className="text-red-900/80 leading-relaxed mb-2">
                      Do not allow the reading on the speedometer to exceed 35 mph if tyres are spinning (e.g., stuck in mud, snow, ice). When only one tyre on an axle is spinning, its actual speed can be double the speedometer reading.
                    </p>
                    <p className="text-red-900/80 leading-relaxed font-bold">
                      Never allow anyone to stand behind a spinning tyre. Centrifugal force can cause the tyre to explode, resulting in severe injury or death.
                    </p>
                  </div>
                  
                  <div className="w-full h-px bg-red-200" />

                  <div>
                    <h3 className="font-bold text-xl mb-3 text-red-800">Inflation Pressure</h3>
                    <p className="text-red-900/80 leading-relaxed mb-2">
                      A tyre can only carry its load when properly inflated. Always use the recommended pressure found on the <strong>vehicle placard (driver's door panel)</strong>, not the maximum pressure molded on the tyre sidewall.
                    </p>
                    <p className="text-red-900/80 leading-relaxed font-bold">
                      Warning: Underinflation causes excessive heat build-up. Overinflation makes tyres susceptible to impact damage. Both can lead to catastrophic tread separation and tyre failure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-20 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold uppercase text-brand-black mb-6 tracking-tight">
            Ready to find your perfect tyre?
          </h2>
          <p className="text-brand-black/70 mb-10 text-lg font-medium">
            Use our advanced Tyre Finder to browse options tailored to your exact vehicle and needs, or visit a dealer for expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/brands"
              className="w-full sm:w-auto bg-brand-black text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-black/80 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Explore Brands <ArrowRight size={20} />
            </Link>
            <Link 
              href="/dealers"
              className="w-full sm:w-auto bg-white text-brand-black font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2 border border-black/5"
            >
              Find a Dealer
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
