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
          <div className="max-w-4xl">
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
          <div className="max-w-4xl">
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

          {/* Section 4: Import Manager */}
          <div className="max-w-4xl">
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
      <section className="py-24 lg:py-36 bg-white text-brand-black relative overflow-hidden border-t border-black/10">
        {/* Animated 2D Planets & Orbiting Spheres Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Planet 1 - Top Right Gold Ringed Planet */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-6 md:right-24 w-40 h-40 opacity-25 lg:opacity-50 z-0"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-yellow via-amber-400 to-amber-100 shadow-xl mx-auto mt-8 border border-black/10" />
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-brand-black/70 to-transparent -translate-y-1/2 -rotate-12 rounded-full" />
            <div className="absolute top-1/2 -left-4 -right-4 h-2 border-y-2 border-brand-yellow -translate-y-1/2 -rotate-12 rounded-full" />
          </motion.div>

          {/* Planet 2 - Middle Left Dark Orbiting Sphere */}
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -left-12 md:left-12 w-56 h-56 opacity-20 lg:opacity-35 z-0"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-black via-brand-charcoal to-transparent border-4 border-brand-yellow/50 shadow-2xl" />
            <div className="absolute inset-0 border-2 border-dashed border-black/30 rounded-full animate-spin" style={{ animationDuration: '35s' }} />
          </motion.div>

          {/* Planet 3 - Bottom Right Floating 2D Moon */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-10 md:right-16 w-48 h-48 opacity-25 lg:opacity-45 z-0"
          >
            <div className="w-36 h-36 rounded-full bg-gradient-to-tl from-brand-yellow via-yellow-200 to-white border-2 border-black/15 shadow-2xl" />
            {/* Crater details */}
            <div className="absolute top-8 left-10 w-6 h-6 rounded-full bg-black/15" />
            <div className="absolute bottom-12 right-12 w-10 h-10 rounded-full bg-black/15" />
            <div className="absolute top-16 right-10 w-4 h-4 rounded-full bg-black/15" />
          </motion.div>

          {/* Floating geometric stars/particles drifting down */}
          {[...Array(6)].map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: [0, 800, 1600],
                opacity: [0, 0.5, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 18 + idx * 4,
                repeat: Infinity,
                delay: idx * 2.5,
                ease: "linear",
              }}
              className="absolute w-8 h-8 text-brand-yellow/60"
              style={{
                left: `${15 + idx * 15}%`,
                top: 0,
              }}
            >
              <Sparkles size={28} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-brand-black text-xs text-brand-yellow uppercase tracking-[0.25em] font-extrabold mb-4 shadow-lg border border-brand-yellow/30">
              <Sparkles size={14} className="animate-spin text-brand-yellow" style={{ animationDuration: '4s' }} />
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-brand-black uppercase font-heading tracking-tighter">
              A LEGACY OF <span className="bg-brand-yellow text-brand-black px-4 py-1 rounded-2xl shadow-sm inline-block">EXCELLENCE</span>
            </h2>
            <p className="text-brand-gray/80 font-medium text-lg max-w-2xl mx-auto mt-4 font-sans">
              From our humble retail beginnings in 1948 to becoming Pakistan&apos;s leading nationwide tyre conglomerate.
            </p>
          </motion.div>

          <div className="relative">
            {/* Glowing Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-brand-yellow via-brand-black/20 to-transparent -translate-x-1/2 shadow-sm rounded-full" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => {
                const Icon = item.icon || Calendar;
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 50, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                      isEven ? "" : "lg:direction-rtl"
                    }`}
                  >
                    {/* Center line pulsing dot */}
                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-yellow items-center justify-center z-20 shadow-[0_4px_20px_rgba(255,193,7,0.4)] group-hover:scale-125 transition-transform duration-500">
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-black animate-ping" />
                      <div className="absolute w-3.5 h-3.5 rounded-full bg-brand-black" />
                    </div>

                    <div
                      dir="ltr"
                      className={`${isEven ? "lg:text-left" : "lg:col-start-2 lg:text-left"} relative pb-6 lg:pb-12`}
                    >
                      <motion.div 
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl p-8 border-2 border-black/5 hover:border-brand-yellow transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,193,7,0.25)] group relative overflow-hidden text-left z-10"
                      >
                        {/* Decorative top gradient bar */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-black via-brand-yellow to-brand-black opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* 2D Floating mini-orbit inside card on hover */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-brand-yellow/30 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-brand-yellow/15 group-hover:bg-brand-yellow/30 transition-colors duration-500 pointer-events-none" />

                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4 relative z-10">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-black text-brand-yellow font-extrabold rounded-2xl text-sm uppercase tracking-wider shadow-md group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors duration-300">
                            <Calendar size={16} />
                            <span>{item.year}</span>
                          </div>
                          
                          <div className="w-14 h-14 rounded-2xl bg-cream border border-black/5 flex items-center justify-center text-brand-black group-hover:scale-110 group-hover:bg-brand-black group-hover:text-brand-yellow transition-all duration-300 shadow-sm">
                            <Icon size={26} />
                          </div>
                        </div>

                        <h3 className="text-2xl font-extrabold text-brand-black mb-3 transition-colors font-heading tracking-wide relative z-10">
                          {item.title}
                        </h3>
                        <p className="text-brand-gray/90 leading-relaxed font-sans text-base relative z-10 font-medium">
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
