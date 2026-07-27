"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { branches, brands } from "@/lib/data";
import {
  Calendar,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";

const timeline = [
  {
    year: "1948",
    title: "The Beginning",
    description:
      "J. Rashid & Sons founded in Lahore's historic Anarkali bazaar, starting as a small tyre trading business.",
  },
  {
    year: "1970s",
    title: "Growth & Expansion",
    description:
      "Expanded operations across Lahore with multiple branches. Established strong relationships with international tyre manufacturers.",
  },
  {
    year: "1990s",
    title: "Official Distributor",
    description:
      "Became the official importer and distributor of Yokohama and Goodyear tyres in Pakistan. A landmark achievement.",
  },
  {
    year: "2000s",
    title: "Nationwide Network",
    description:
      "Built a wholesale dealer network spanning all major cities of Pakistan. Over 200 dealers strong.",
  },
  {
    year: "2020s",
    title: "Premium Multi-Brand",
    description:
      "Added Michelin, Blackarrow & Warrior to the portfolio. Modernized service centers with 3D alignment and advanced equipment.",
  },
  {
    year: "Today",
    title: "Leading the Industry",
    description:
      "70+ years of excellence. 5 global brands, 6 branches, 200+ dealers. Pakistan's most trusted tyre partner.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* CEO Message & Founders Section */}
      <section className="pt-32 md:pt-40 pb-24 lg:pb-32 bg-brand-black text-white relative overflow-hidden">
        {/* Animated ambient background glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-yellow/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-yellow/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10 space-y-24 lg:space-y-32 py-12">
          
          {/* Section 1: Founders */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1 flex gap-6">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-yellow/30"
               >
                 <Image src="/images/founder_final.jpeg" alt="Founder" fill className="object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white font-bold uppercase text-sm tracking-widest bg-brand-yellow/90 text-brand-black py-1 px-2 rounded backdrop-blur">Founder</p>
                 </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-yellow/30 mt-8"
               >
                 <Image src="/images/founder2.png" alt="Founder" fill className="object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white font-bold uppercase text-sm tracking-widest bg-brand-yellow/90 text-brand-black py-1 px-2 rounded backdrop-blur">Founder</p>
                 </div>
               </motion.div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4">
                Our Legacy
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tighter mb-4 leading-none">
                THE <span className="text-brand-yellow">FOUNDERS</span>
              </h2>
              <h3 className="text-xl lg:text-3xl font-heading font-bold text-white uppercase tracking-tight mb-6">
                MOHAMMAD ABDUL RASHID <br className="hidden lg:block"/>& HAJI JAVED RASHID
              </h3>
              <p className="text-white/85 text-lg leading-relaxed font-sans font-normal border-l-2 border-brand-yellow/40 pl-6 py-1">
                The foundation of our company was built on the unwavering dedication and visionary leadership of our founders. Their commitment to excellence and customer satisfaction laid the groundwork for what J. Rashid & Sons is today.
              </p>
            </div>
          </div>

          {/* Section 2: CEO */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Quote size={80} className="absolute -top-6 -left-6 text-white/[0.05] pointer-events-none" />
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4">
                Leadership Vision
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tighter mb-2 leading-none">
                CEO&apos;S <span className="text-brand-yellow">MESSAGE</span>
              </h2>
              <p className="text-brand-yellow font-semibold text-xl lg:text-2xl mb-6 tracking-wide">
                Jawad Rashid
              </p>
              <p className="text-white/85 text-lg leading-relaxed font-sans font-normal border-l-2 border-brand-yellow/40 pl-6 py-1">
                As the CEO of our tyre retail company, I envision a future where we are the go-to destination for drivers seeking unapparelled expertise, convenience and value in tyre purchasing and maintenance. Our vision is to create a seamless omnichannel experience, where customers can get expert advice, browse a wide selection of top-quality tyres, and receive professional installation and maintenance services with ease. We prioritize customer satisfaction, offering personalized recommendations and exceptional service at every touchpoint. Through innovation and a relentless commitment to excellence, we will redefine the tire retail industry, setting new standards for convenience, reliability, and customer care.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-brand-yellow/30"
               >
                 <Image src="/images/ceo_final.jpeg" alt="Jawad Rashid - CEO" fill className="object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold uppercase text-2xl tracking-widest mb-1">Jawad Rashid</p>
                    <p className="text-brand-yellow font-bold uppercase text-sm tracking-widest">Chief Executive Officer</p>
                 </div>
               </motion.div>
            </div>
          </div>

          {/* Section 3: Sales Director */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-white/10"
               >
                 <Image src="/images/sales-director.jpeg" alt="Sales Director" fill className="object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-brand-yellow font-bold uppercase text-sm tracking-widest bg-brand-black/50 py-2 px-4 rounded-xl inline-block backdrop-blur-sm border border-white/10">Sales Director</p>
                 </div>
               </motion.div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4">
                Driving Growth
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tighter mb-4 leading-none text-white">
                SALES <span className="text-brand-yellow">DIRECTOR</span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed font-sans font-normal border-l-2 border-brand-yellow/40 pl-6 py-1">
                Leading our sales initiatives with passion and strategic insight, our Sales Director ensures that our premium tyre offerings reach every corner of the market. Building lasting relationships with our network of dealers and enterprise clients is at the heart of our continued growth and success.
              </p>
            </div>
          </div>

          {/* Section 4: Import Manager */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4">
                Global Sourcing
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tighter mb-4 leading-none text-white">
                IMPORT <span className="text-brand-yellow">MANAGER</span>
              </h2>
              <p className="text-white/85 text-lg leading-relaxed font-sans font-normal border-l-2 border-brand-yellow/40 pl-6 py-1">
                Ensuring a steady and reliable supply chain is critical to our operations. Our Import Manager works tirelessly with international manufacturers and logistics partners to bring the world's best tyre brands to our facilities efficiently, maintaining the high standards of quality our customers expect.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-white/10"
               >
                 <Image src="/images/import-manager.jpeg" alt="Import Manager" fill className="object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-brand-yellow font-bold uppercase text-sm tracking-widest bg-brand-black/50 py-2 px-4 rounded-xl inline-block backdrop-blur-sm border border-white/10">Import Manager</p>
                 </div>
               </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-brand-black overflow-hidden border-t border-white/10">
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
            <div>
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-black border border-brand-yellow/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
                Our Story
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6 font-heading"
              >
                70+ Years of
                <br />
                <span className="text-gradient">Tyre Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed"
              >
                Since 1948, J. Rashid &amp; Sons has been Pakistan&apos;s most
                trusted name in tyres. From our humble beginnings in
                Lahore&apos;s Anarkali bazaar to becoming the official importer
                of the world&apos;s leading tyre brands, our journey is one of
                dedication, quality, and unwavering customer trust.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-brand-yellow/30 shadow-2xl group">
                <img
                  src="/images/showroom.jpg"
                  alt="J. Rashid & Sons Historic Shop 1948"
                  className="w-full h-[400px] lg:h-[450px] object-cover object-center opacity-95 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-yellow rounded-2xl p-6 text-brand-black shadow-2xl">
                <p className="text-4xl font-heading font-extrabold">1948</p>
                <p className="text-sm font-bold uppercase tracking-wider">
                  Established
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-black border border-brand-yellow/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
              Our Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black uppercase font-heading">
              A Legacy of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-black/10 -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    i % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Center line dot */}
                  <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-yellow border-4 border-brand-black z-20 shadow-md" />

                  <div
                    className={`${i % 2 === 0 ? "lg:text-right" : "lg:col-start-2"} relative pb-8 lg:pb-16`}
                  >
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-brand-black/5 hover:shadow-lg transition-shadow">
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-black rounded-lg border border-brand-yellow/20 shadow-sm">
                        <Calendar
                          size={15}
                          className="text-brand-yellow"
                        />
                        <span className="text-sm font-bold text-brand-yellow">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-black mb-2 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-brand-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand partnerships */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-black border border-brand-yellow/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
              Our Partners
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase font-heading">
              Trusted Global Brands
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group block p-6 rounded-2xl bg-brand-yellow border border-brand-yellow hover:bg-white hover:border-white hover:-translate-y-1 hover:shadow-xl transition-all text-center h-[180px] flex flex-col items-center justify-center shadow-lg"
                >
                  <img
                    src={brand.logo_white_url || brand.logo_url}
                    alt={brand.name}
                    className="w-full h-16 md:h-20 object-contain mx-auto brightness-0 group-hover:scale-110 transition-all duration-500 p-1"
                  />
                  <p className="mt-4 text-sm font-bold text-brand-black uppercase tracking-wider">
                    {brand.name}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
