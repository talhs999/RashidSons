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
  Store,
  TrendingUp,
  Building2,
  Globe,
  Award,
  Compass,
  Flag,
  Layers,
  ShieldCheck,
  Briefcase,
  Truck,
  Building,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    year: "1948",
    title: "1st Retail Shop",
    description:
      "1st retail shop of J Rashid & Sons opened at Neela Gumbad, Lahore with the import of Firestone Tyres from USA",
    icon: Store,
  },
  {
    year: "1950",
    title: "Wholesale Operations Started",
    description:
      "Wholesale operations started with 2nd retail shop in Bahadur Shah Market, Karachi covering all Pakistan",
    icon: TrendingUp,
  },
  {
    year: "1955",
    title: "3rd Retail Shop",
    description:
      "3rd retail shop opened in Lahore",
    icon: Building2,
  },
  {
    year: "1967",
    title: "Yokohama Import",
    description:
      "Started the import of Yokohama and 4th retail outlet opened in Lahore",
    icon: Globe,
  },
  {
    year: "1970",
    title: "Bridgestone Dealer",
    description:
      "Became Bridgestone's exclusive Commercial and PCR dealer for Punjab, Pakistan",
    icon: Award,
  },
  {
    year: "1982",
    title: "Hankook Import",
    description:
      "Imported Korean Brand \"Hankook\" for the 1st time in Pakistan",
    icon: Compass,
  },
  {
    year: "2002",
    title: "International Operations",
    description:
      "Ventured into international operations with the name of JR Worldwide Ltd, covering South American and Caribbean markets.",
    icon: Globe,
  },
  {
    year: "2005",
    title: "UK & EU Operations",
    description:
      "JR Worldwide UK Ltd. was formed to manage UK & EU operations",
    icon: Flag,
  },
  {
    year: "2008",
    title: "Middle East & Africa",
    description:
      "JR Worldwide FZE Ltd. opened in UAE to manage Middle East & African Markets",
    icon: Layers,
  },
  {
    year: "2012",
    title: "Turkey Operations",
    description:
      "JR Worldwide Ltd. started its operations in Turkey covering sales in Turkey, Iraq & CIS",
    icon: ShieldCheck,
  },
  {
    year: "2015",
    title: "USA & Canada",
    description:
      "JR Worldwide Ltd. USA started its operations to cover USA & Canada",
    icon: Briefcase,
  },
  {
    year: "2018",
    title: "Best Drive Franchise",
    description:
      "Opened the first-ever Store with the Franchise concept \"Best Drive\" in Pakistan",
    icon: Award,
  },
  {
    year: "2020",
    title: "6th Retail Location",
    description:
      "6th retail location was added at Truck Adda Lahore to cover both PCR & TBR sales",
    icon: Truck,
  },
  {
    year: "2021",
    title: "1st Flagship Store",
    description:
      "Proudly opens Pakistan's 1st ever Flagship Tyre Retail Store in Faisal Town, Lahore",
    icon: Store,
  },
  {
    year: "2023",
    title: "2nd Flagship Store",
    description:
      "Proudly opens Pakistan 2nd ever Flagship Tyre Retail Store in DHA - Kamaha Lahore",
    icon: Building,
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
      <section className="py-24 lg:py-36 bg-brand-black text-white relative overflow-hidden border-t border-white/10">
        {/* Animated ambient glowing spheres */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-xs text-brand-yellow uppercase tracking-[0.25em] font-bold mb-4 shadow-[0_0_20px_rgba(255,193,7,0.15)] backdrop-blur-md">
              <Sparkles size={14} className="animate-spin text-brand-yellow" style={{ animationDuration: '4s' }} />
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white uppercase font-heading tracking-tighter">
              A LEGACY OF <span className="text-brand-yellow">EXCELLENCE</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4 font-sans">
              From our humble retail beginnings in 1948 to becoming Pakistan&apos;s leading nationwide tyre conglomerate.
            </p>
          </motion.div>

          <div className="relative">
            {/* Glowing Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-yellow via-brand-yellow/40 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(255,193,7,0.5)] rounded-full" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => {
                const Icon = item.icon || Calendar;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 40, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                  >
                    {/* Center line pulsing dot */}
                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-black border-2 border-brand-yellow items-center justify-center z-20 shadow-[0_0_20px_rgba(255,193,7,0.8)] group-hover:scale-125 transition-transform duration-300">
                      <div className="w-3 h-3 rounded-full bg-brand-yellow animate-ping" />
                      <div className="absolute w-3 h-3 rounded-full bg-brand-yellow" />
                    </div>

                    <div
                      dir="ltr"
                      className={`${isEven ? "lg:text-left" : "lg:col-start-2 lg:text-left"} relative pb-6 lg:pb-12`}
                    >
                      <motion.div 
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/15 hover:border-brand-yellow/60 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden"
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-yellow/15 rounded-full blur-2xl group-hover:bg-brand-yellow/30 transition-all duration-500 pointer-events-none" />

                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow text-brand-black font-extrabold rounded-full text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(255,193,7,0.4)]">
                            <Calendar size={15} className="text-brand-black" />
                            <span>{item.year}</span>
                          </div>
                          
                          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-yellow group-hover:scale-110 group-hover:bg-brand-yellow group-hover:text-brand-black transition-all duration-300 shadow-inner">
                            <Icon size={24} />
                          </div>
                        </div>

                        <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-brand-yellow transition-colors font-heading tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-white/75 leading-relaxed font-sans text-base">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
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
