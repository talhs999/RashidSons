"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function SizingInformationPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-brand-black pt-24">
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
            Sizing information molded on the tire sidewall provides a significant amount of detail about the tire. Once you know how to decode the data, you’ll be able to better understand the tire's intended purpose, dimensions, load capacity, speed and much more.
          </p>
        </motion.div>
      </section>

      {/* Content Blocks */}
      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-24 space-y-16 lg:space-y-24">
        
        {/* Section 1 */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-heading font-extrabold uppercase text-brand-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center text-sm">1</span>
                Size Designation
              </h2>
              <p>Some tire size designations start with a letter(s) that identify the type of vehicle and/or type of service for which they were designed. The typical letter for passenger and light truck tires would be P, LT, T and C.</p>
              <ul className="space-y-2 mt-4 list-none pl-0">
                <li className="flex gap-2"><CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20}/> <span><strong>P:</strong> Passenger tires designed based on TRA standards.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20}/> <span><strong>Euro-metric:</strong> Designed based on ETRTO without letters.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20}/> <span><strong>LT:</strong> Light truck-metric sizes designed for pickups.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20}/> <span><strong>T:</strong> Temporary spare or mini-spare.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="text-brand-yellow shrink-0 mt-1" size={20}/> <span><strong>C:</strong> Commercial tread for heavy vans/trucks.</span></li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <img src="/images/sizing-1.jpg" alt="Size Designation" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            <div className="lg:w-1/2 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-heading font-extrabold uppercase text-brand-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-sm">2</span>
                Tire Dimensions
              </h2>
              <p>The three-digit number identifies the tire’s section width in millimeters. The two-digit number following the section width identifies the tire’s aspect ratio (percentage of the section height divided by the section width).</p>
              <p>A letter R following the tire aspect ratio identifies the tire's construction as a radial tire. The last two digits on tire size refer to the rim diameter, or the size of the wheel that the tire is intended to fit.</p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-[#111111]">
                <img src="/images/sizing-2.jpg" alt="Tire Dimensions" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Tables Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-extrabold uppercase text-brand-black mb-4">
              Service Descriptions
            </h2>
            <p className="text-lg text-gray-600">
              Service descriptions show the load index (maximum loading capacity) and the speed rating (maximum speed allowed).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Table 1 */}
            <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-full max-w-[320px] rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
                  <img src="/images/sizing-3.jpg" alt="Passenger Load Index" className="w-full h-auto object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 text-center">Passenger Load Index</h3>
              <p className="text-gray-600 text-sm text-center">
                Shows typical passenger tire load index and maximum capacity. e.g. an index of 116 = 2,756 lbs per tire.
              </p>
            </div>

            {/* Table 2 */}
            <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-full max-w-[350px] rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
                  <img src="/images/sizing-4.jpg" alt="Light Truck Load Index" className="w-full h-auto object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 text-center">Light Truck Load Index</h3>
              <p className="text-gray-600 text-sm text-center">
                Varies from load range B to F. First number is max load single, second is max load dual application.
              </p>
            </div>

            {/* Table 3 */}
            <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-6 flex justify-center">
                <div className="w-full max-w-[320px] rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
                  <img src="/images/sizing-5.jpg" alt="Speed Capability" className="w-full h-auto object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 text-center">Speed Capability</h3>
              <p className="text-gray-600 text-sm text-center">
                Established to match the speed capability of tires with the top speed of vehicles. Exceeding capacity causes sudden failure.
              </p>
            </div>

          </div>
        </div>

        {/* Warnings Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-red-50 border-t-4 border-red-500 rounded-b-2xl p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <ShieldAlert className="text-red-500/10 absolute -right-4 -top-4 w-32 h-32 transform group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
               <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                 <ShieldAlert className="text-red-500" size={24} /> Tire Spinning
               </h2>
               <p className="text-red-900/80 mb-4 font-medium text-sm">Do not allow speedometer to exceed 35 mph if tires are spinning (mud, snow, etc). Spinning tire speed can double and quickly exceed limits.</p>
               <p className="text-red-900 font-bold text-sm">Never allow anyone to stand behind a spinning tire. Disintegrating tires can cause severe damage or injury.</p>
            </div>
          </div>

          <div className="bg-red-50 border-t-4 border-red-500 rounded-b-2xl p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <ShieldAlert className="text-red-500/10 absolute -right-4 -top-4 w-32 h-32 transform group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
               <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                 <ShieldAlert className="text-red-500" size={24} /> Inflation Pressure
               </h2>
               <p className="text-red-900/80 mb-4 font-medium text-sm">Recommended pressure is found in the driver's door panel placard, NOT the maximum pressure on the sidewall.</p>
               <p className="text-red-900 font-bold text-sm">Warning: Underinflation/overloading causes internal damage. Overinflation makes tires prone to puncture or sudden impact breaks.</p>
            </div>
          </div>
        </div>

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
