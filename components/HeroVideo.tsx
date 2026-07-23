"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TireFinder from "./TireFinder";

export default function HeroVideo() {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/1-Opening-homepage-video-banner_2_CQ30.webm" type="video/webm" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 lg:px-6 mt-16">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 uppercase tracking-tighter"
          >
            Make Every Drive A Performance.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl font-medium mb-10 max-w-lg"
          >
            There&apos;s a lot riding on your tires. That&apos;s why J. Rashid &amp; Sons is dedicated to delivering the ultimate tires for your car, truck or SUV.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/brands" className="btn-skew-yellow">
              <span>
                Discover More
                <ChevronRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
