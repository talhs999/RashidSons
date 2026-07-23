"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Award, Clock, Truck, Users, Wrench } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const features = [
  {
    icon: Shield,
    title: "Authorized Importer",
    description:
      "Official distributor of Yokohama, Goodyear & Michelin tyres in Pakistan. Guaranteed genuine products.",
  },
  {
    icon: Award,
    title: "70+ Years of Excellence",
    description:
      "Established in 1948, we are one of Pakistan's oldest and most trusted tyre companies.",
  },
  {
    icon: Clock,
    title: "Expert Service",
    description:
      "Professional wheel balancing, 3D alignment, and nitrogen filling at all our service centers.",
  },
  {
    icon: Truck,
    title: "Nationwide Network",
    description:
      "200+ wholesale dealers across Pakistan. Find quality tyres wherever you are.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description:
      "From individual car owners to major fleet operators, trusted across Pakistan for decades.",
  },
  {
    icon: Wrench,
    title: "Complete Tyre Solutions",
    description:
      "From sales to service — we handle everything. Rims, balancing, alignment & more.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black relative overflow-hidden">
      {/* Subtle background pattern */}
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              The Tyre Experts
              <br />
              <span className="text-gradient">Pakistan Trusts</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg leading-relaxed mb-10"
            >
              J. Rashid &amp; Sons has been the flagship tyre destination in
              Pakistan since 1948. From our showroom in Lahore&apos;s historic
              Anarkali to 200+ wholesale dealers nationwide, we deliver
              world-class tyres with unmatched service.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: 70, suffix: "+", label: "Years" },
                { value: 5, suffix: "", label: "Brands" },
                { value: 6, suffix: "", label: "Branches" },
                { value: 200, suffix: "+", label: "Dealers" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-brand-yellow">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[11px] text-white/30 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-yellow/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-yellow/10 flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                  <feature.icon
                    size={20}
                    className="text-brand-yellow"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
