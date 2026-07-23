"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const vehicleTypes = [
  { name: "Car", image: "/images/vehicles/car.jpg", link: "/brands/yokohama/passenger-car" },
  { name: "SUV", image: "/images/vehicles/suv.avif", link: "/brands/yokohama/suv" },
  { name: "Truck", image: "/images/vehicles/truck.jpg", link: "/brands/goodyear/goodyear-truck" },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-brand-black text-white relative py-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
         <h2 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tighter mb-12 text-center">
            Find Tires For Your Vehicle
         </h2>

         <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={type.link} className="group block relative h-[300px] w-full overflow-hidden" style={{ clipPath: "polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)" }}>
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-yellow/80 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <h3 className="text-3xl font-heading font-extrabold uppercase tracking-widest">{type.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
