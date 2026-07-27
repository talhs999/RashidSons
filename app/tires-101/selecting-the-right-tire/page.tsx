"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Ruler,
  CloudSun,
  Car,
  Target,
  ArrowRight,
  Sun,
  CloudRain,
  Snowflake,
  Truck,
  ShieldAlert
} from "lucide-react";

export default function SelectingRightTirePage() {
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
            Selecting the Right Tyre
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            When selecting a tyre, the two main areas you need to consider are the size requirements of your vehicle and the tyre characteristics needed to accommodate your driving style and environment.
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
          {/* 1. Size Requirements */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Ruler className="text-brand-yellow-dark" size={32} />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-4 tracking-tight">
                  1. Size Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The easiest way to determine the correct tyre size for your vehicle is to check the placard located on the driver's side door jamb, or the glove box door. You can also consult your owner's manual.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These sources will provide you with the exact specifications recommended by the vehicle manufacturer to ensure optimal safety and performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Weather Conditions */}
          <motion.div variants={fadeUp} className="bg-brand-black text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
             <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                <CloudSun className="text-brand-yellow" size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-6 tracking-tight text-brand-yellow">
                  2. Weather Conditions
                </h2>
                <p className="text-white/70 leading-relaxed mb-8 max-w-3xl">
                  Where you live and drive significantly dictates the type of tyre you need. Tyres are engineered with specific rubber compounds and tread patterns to handle different climates.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <Sun className="text-brand-yellow mb-4" size={28} />
                    <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Summer Tyres</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Designed primarily for dry and mild wet conditions. They provide excellent grip and handling but are not suitable for near-freezing temperatures or snow.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <CloudRain className="text-blue-400 mb-4" size={28} />
                    <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">All-Season Tyres</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      The most popular choice for year-round driving. They offer a balance of capabilities, performing reasonably well in dry, wet, and light winter conditions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <Snowflake className="text-teal-300 mb-4" size={28} />
                    <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Winter Tyres</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Engineered specifically for freezing temperatures, snow, and ice. Their specialized compounds remain flexible in the cold for maximum traction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Vehicle Type */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gray-50 rounded-tl-[150px] -z-10 transition-transform group-hover:scale-110 duration-500" />
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Car className="text-brand-yellow-dark" size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-4 tracking-tight">
                  3. Vehicle Type
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  The type of vehicle you drive—whether it's a compact car, a luxury sedan, a heavy-duty truck, or a family SUV—plays a critical role in tyre selection.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                       <Car size={20} className="text-brand-black" /> Passenger Cars
                     </h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Focus on ride comfort, low noise, and long tread life. Touring tyres are often the best fit for everyday commuting and highway driving.
                     </p>
                   </div>
                   <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                       <Truck size={20} className="text-brand-black" /> SUVs & Light Trucks
                     </h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                       Require tyres that can handle higher centers of gravity and heavier vehicle weights. Highway Terrain (HT) or All-Terrain (AT) tyres are common.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Specific Requirements */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                <Target className="text-brand-yellow-dark" size={32} />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mb-4 tracking-tight">
                  4. Specific Requirements
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Beyond the basics, your specific driving habits and needs should influence your choice:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="text-brand-yellow mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-brand-black">Heavy Payloads & Towing:</strong>
                      <span className="text-sm text-gray-600">If you frequently haul heavy loads, you'll need Light Truck (LT) tyres with higher load ratings and reinforced sidewalls.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="text-brand-yellow mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-brand-black">Off-Road Driving:</strong>
                      <span className="text-sm text-gray-600">For unpaved, muddy, or rocky terrain, All-Terrain (AT) or Mud-Terrain (MT) tyres offer the necessary aggressive tread blocks and durability.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="text-brand-yellow mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="block text-brand-black">Spirited Performance:</strong>
                      <span className="text-sm text-gray-600">If you enjoy high-speed cornering and aggressive driving, Ultra-High Performance (UHP) tyres deliver maximum grip and steering response.</span>
                    </div>
                  </li>
                </ul>
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
