"use client";

import { motion } from "framer-motion";
import { Gauge, CircleDot, Focus, Wind } from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "Wheel Balancing",
    description:
      "Precision computerized wheel balancing for a smoother, safer ride. Eliminates vibrations and extends tyre life.",
    image: "/uploads/services/wheel-balancing.png",
  },
  {
    icon: CircleDot,
    title: "Premium Rims",
    description:
      "Wide selection of alloy and steel rims for all vehicle types. Perfect fitment guaranteed.",
    image: null,
  },
  {
    icon: Focus,
    title: "3D Alignment",
    description:
      "State-of-the-art 3D wheel alignment technology for perfect vehicle handling and even tyre wear.",
    image: "/uploads/services/3d-alignment.png",
  },
  {
    icon: Wind,
    title: "Nitrogen Gas Filling",
    description:
      "Nitrogen-filled tyres maintain pressure longer, improve fuel efficiency, and extend tyre lifespan.",
    image: null,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-3">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-black">
            Professional Tyre Services
          </h2>
          <p className="text-brand-gray mt-4 max-w-xl mx-auto">
            From fitment to maintenance, our expert technicians provide complete
            tyre care at all our service centers.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-brand-black/5 hover:shadow-2xl hover:shadow-brand-black/5 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image / Icon area */}
              <div className="h-48 bg-brand-black relative overflow-hidden flex items-center justify-center">
                {service.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal to-brand-black" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-yellow/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-yellow/30 transition-colors">
                  <service.icon
                    size={32}
                    className="text-brand-yellow"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-yellow-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
