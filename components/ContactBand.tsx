"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactBand() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/80" />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Ready to Find Your{" "}
            <span className="text-gradient">Perfect Tyre?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg mb-10"
          >
            Contact our experts for personalized recommendations and the best
            prices on premium tyres.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/923004058489"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-lg"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a href="tel:+923004058489" className="btn-secondary rounded-lg">
              <Phone size={18} />
              Call +92 300 4058489
            </a>
            <Link href="/contact" className="btn-secondary rounded-lg">
              Contact Form
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
