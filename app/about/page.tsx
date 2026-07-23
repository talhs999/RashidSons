"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { branches, brands } from "@/lib/data";
import {
  Calendar,
  MapPin,
  Phone,
  Award,
  Globe,
  Truck,
  Users,
  ArrowRight,
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

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 relative">
              <Quote size={140} className="absolute -top-10 -left-6 text-white/[0.03] pointer-events-none" />
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold uppercase text-xs tracking-widest mb-4">
                  Leadership Vision
                </div>

                <h2 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tighter mb-2 leading-none">
                  CEO&apos;S <span className="text-brand-yellow">MESSAGE</span>
                </h2>
                <p className="text-brand-yellow font-semibold text-lg lg:text-xl mb-6 tracking-wide">
                  Tariq Javed Rashid
                </p>

                <p className="text-white/85 text-base lg:text-lg leading-relaxed mb-8 font-sans font-normal border-l-2 border-brand-yellow/40 pl-6 py-1">
                  As the CEO of our tyre retail company, I envision a future where we are the go-to destination for drivers seeking unapparelled expertise, convenience and value in tyre purchasing and maintenance. Our vision is to create a seamless omnichannel experience, where customers can expert advice and browse a range of wide selection of top-quality tyres and receive a professional installation and maintenance services with ease. We will prioritize customer satisfaction, offering personalized recommendations and exceptional service at every touchpoint. Through innovation and a relentless commitment to excellence we will redefine the tire retail industry, setting new standards for convenience, reliability, and customer care.
                </p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="pt-6 border-t border-white/10"
                >
                  <h3 className="text-brand-yellow font-heading font-bold uppercase tracking-wider text-lg lg:text-xl mb-2">
                    FOUNDERS:
                  </h3>
                  <h4 className="text-xl lg:text-3xl font-heading font-extrabold text-white uppercase tracking-tight leading-snug">
                    MOHAMMAD ABDUL RASHID AND HAJI JAVED RASHID
                  </h4>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Overlapping Images */}
            <div className="lg:col-span-5 relative min-h-[440px] md:min-h-[500px] flex items-center justify-center">
              <div className="relative w-full h-[420px] md:h-[480px]">
                
                {/* Main CEO Image (Top Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.7 }}
                  className="absolute top-0 right-0 w-[70%] h-[78%] rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-yellow/30 z-10 group"
                >
                  <Image
                    src="/images/ceo-tariq.jpeg"
                    alt="Tariq Javed Rashid - CEO"
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-brand-yellow">
                    CEO Tariq Javed Rashid
                  </div>
                </motion.div>

                {/* Younger CEO Image (Bottom Left Overlapping) */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute bottom-0 left-0 w-[64%] h-[72%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-brand-black z-20 group"
                >
                  <Image
                    src="/images/ceo-young.jpg"
                    alt="J. Rashid & Sons Leadership"
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-white">
                    Executive Leadership
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-brand-black overflow-hidden">
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
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                70+ Years of
                <br />
                <span className="text-gradient">Tyre Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-lg leading-relaxed"
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
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/showroom.jpg"
                  alt="J. Rashid & Sons Showroom"
                  className="w-full h-[400px] lg:h-[450px] object-cover"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black">
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
                      <h3 className="text-xl font-bold text-brand-black mb-2">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Trusted Global Brands
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  className="group block p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-brand-yellow hover:bg-white/10 transition-all text-center h-[180px] flex flex-col items-center justify-center shadow-lg"
                >
                  <img
                    src={brand.logo_white_url || brand.logo_url}
                    alt={brand.name}
                    className="w-full h-20 md:h-24 object-contain mx-auto group-hover:scale-110 transition-transform duration-500 p-2"
                  />
                  <p className="mt-2 text-sm font-bold text-white group-hover:text-brand-yellow transition-colors uppercase tracking-wider">
                    {brand.name}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-black border border-brand-yellow/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
              Visit Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black">
              Our Branches
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-cream border border-brand-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={18}
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-black mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-brand-gray mb-2">
                      {branch.address}
                    </p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-brand-black hover:text-red-600 transition-colors"
                    >
                      <Phone size={13} className="text-red-500" />
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
