"use client";

import { Scale, CircleDashed, Crosshair, Wind } from "lucide-react";

const services = [
  { name: "3D ALIGNMENT", icon: Crosshair },
  { name: "NITRO GAS", icon: Wind },
  { name: "WHEEL BALANCING", icon: Scale },
  { name: "RIMS", icon: CircleDashed },
];

export default function ServicesSection() {
  return (
    <section className="bg-brand-black py-20 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex items-center gap-6 group cursor-pointer">
                {/* Icon Container */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-brand-yellow/30 flex items-center justify-center text-white/70 group-hover:bg-brand-yellow group-hover:border-brand-yellow group-hover:text-brand-black transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                {/* Text */}
                <h3 className="text-xl lg:text-2xl font-heading font-extrabold text-white uppercase tracking-wider group-hover:text-brand-yellow transition-colors duration-300">
                  {service.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
