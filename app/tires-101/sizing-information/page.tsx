"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Type,
  Ruler,
  Weight,
  ShieldAlert,
  Image as ImageIcon
} from "lucide-react";

export default function SizingInformationPage() {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-cream min-h-screen font-sans text-brand-black pt-24">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20 lg:py-32 px-4 relative overflow-hidden border-b-8 border-brand-yellow">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto relative z-10 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-brand-yellow/10 border border-brand-yellow/30 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-6">
            Tires 101 Guide
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight mb-6">
            Sizing Information
          </h1>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Sizing information molded on the tire sidewall provides a significant amount of detail about the tire. Once you know how to decode the data, you’ll be able to better understand the tire's intended purpose, dimensions, load capacity, speed and much more.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1000px] mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* 1. Service Type or Size Designation */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Type className="text-brand-yellow-dark" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-tight">
                  Service Type or Size Designation
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  Some tire size designations start with a letter(s) that identify the type of vehicle and/or type of service for which they were designed. The typical letter for passenger and light truck tires would be P, LT, T and C.
                </p>
                <p>
                  Passenger tires that are designed based on the Tire and Rim Association’s (TRA) standard start with the letter P and are known as P-metric size tires. Passenger tires that are designed based on the European Tyre and Rim Technical Organization’s (ETRTO) standard start without any letters. These sizes are known as hard-metric or Euro-metric size tires. Euro-metric sizes are dimensionally equivalent to P-metric sizes, but typically differ subtly in load-carrying capabilities.
                </p>
                <p>
                  Light truck tires that are designed based on the TRA’s standard often start with two letters: LT. LT signifies the tire is a light truck-metric size that was designed to be used on pickup trucks, which have higher cargo carrying and towing capabilities than passenger cars. An example of this type of sizing convention is an LT215/75R15. In older size conventions, the LT designation may be at the end of tire size. Those sizes are known as flotation light truck size. An example of this type of sizing convention is an 35x12.50R17LT.
                </p>
                <p>
                  A tire size that begins with a letter T signifies the tire is a temporary spare or mini-spare. This kind of tire is designed to be used temporarily, only until a flat tire can be repaired or replaced.
                </p>
                <p>
                  A Euro-metric size designed for carrying heavy cargo and/or towing trailers often ends with the letter C. C signified the tire is a commercial tread, intended for vans or delivery trucks that are capable of carrying heavy loads. 195/70R15C is an example of this type of sizing convention.
                </p>
              </div>

              {/* Image Placeholder 1 */}
              <div className="mt-6 w-full aspect-[16/5] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                <ImageIcon size={32} className="mb-2 opacity-50" />
                <p className="font-heading uppercase tracking-widest font-bold text-sm">Image Placeholder 1</p>
                <p className="text-xs mt-1">Upload Size Designation Image Here</p>
              </div>
            </div>
          </motion.div>

          {/* 2. Tire Dimensions */}
          <motion.div variants={fadeUp} className="bg-brand-black text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Ruler className="text-brand-yellow" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-tight text-brand-yellow">
                  Tire Dimensions
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-white/70 leading-relaxed space-y-4">
                <p>
                  The three-digit number identifies the tire’s section width in millimeters. The actual tire may not match perfectly to this, but it is close.
                </p>
                <p>
                  The two-digit number following the section width identifies the tire’s aspect ratio. Aspect ratio is simply identified as a percentage of the section height divided by the section width. In the example below, the aspect ratio of the tire is 70 percent, so the section height of tire will be 129.5mm. The higher the aspect ratio, the taller the tire sidewall.
                </p>
                <p>
                  A letter R following the tire aspect ratio identifies the tire's construction as a radial tire. In rare cases, a D will identify a bias ply construction, where the body plies crisscross on a diagonal. In recent years, ETRTO has adopted F branding standards that allowed tire manufacturers to identify tires with self-supporting, run-flat constructions within the tire size designation.
                </p>
                <p>
                  The last two digits on tire size refer to the rim diameter, or the size of the wheel that the tire is intended to fit.
                </p>
              </div>

              {/* Image Placeholder 2 */}
              <div className="mt-6 w-full aspect-[16/5] bg-white/5 rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-white/40">
                <ImageIcon size={32} className="mb-2 opacity-50" />
                <p className="font-heading uppercase tracking-widest font-bold text-sm">Image Placeholder 2</p>
                <p className="text-xs mt-1">Upload Tire Dimensions Graphic Here</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Service Descriptions */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Weight className="text-brand-yellow-dark" size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-tight">
                  Service Descriptions
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  The two- or three-digits after the rim diameter, along with the letter next to it, are known as service descriptions. Service descriptions show the load index, which defines the maximum loading capacity of a tire, along with the speed rating, which determines the maximum speed allowed.
                </p>

                {/* Image Placeholder 3 */}
                <div className="my-6 w-full aspect-[16/7] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold text-sm">Image Placeholder 3</p>
                  <p className="text-xs mt-1">"This table shows the typical passenger tire load index..."</p>
                </div>

                <p>
                  This table shows the typical passenger tire load index along with the maximum loading capacity. The maximum loading capacity at maximum pressure is also available on the tire sidewall. In this example, a load index of 116 on a P265/70R17 116 will be a maximum of 2,756 pounds of load per tire.
                </p>
                <p>
                  Passenger tires are also identified as light load (LL), standard load (SL) or extra load (XL) on the sidewall. This is the same in both P-metric and Euro-metric sizes, however, the inflation pressure at maximum load slightly varies between the two.
                </p>
                <p>
                  Light truck tires are identified by load range, which vary from load range B to load range F. The majority of tires in the market are load range C, D and E.
                </p>

                {/* Image Placeholder 4 */}
                <div className="my-6 w-full aspect-[16/7] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold text-sm">Image Placeholder 4</p>
                  <p className="text-xs mt-1">"This table shows the load index in the [light truck] tire..."</p>
                </div>

                <p>
                  This table shows the load index in the tire. Each load index in light truck sizes is also identified by two numbers. The first number is the maximum load in single wheel, and the second number is the maximum load in dual-vehicle applications. In this example, 121/118 represents the maximum load of 3,197 pounds in single and 2,910 pounds on a dual application.
                </p>
                <p>
                  A tire’s maximum load is the most weight the tire is designed to carry. Since a tire’s load carrying capacity is related to the tire’s size and how much inflation pressure is actually used, maximum loads are rated with the tire inflated to an industry-assigned inflation pressure. Never exceed the maximum vehicle load limit listed on the vehicle placard or in the owner’s manual. Never exceed the load carrying limits molded into the tire’s sidewall. Maximum load can only be carried at the maximum cold inflation pressure indicated on the tire’s sidewall. Overloading can cause excessive heat buildup, internal structural damage and may cause tire failure.
                </p>

                {/* Image Placeholder 5 */}
                <div className="my-6 w-full aspect-[16/7] bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400">
                  <ImageIcon size={32} className="mb-2 opacity-50" />
                  <p className="font-heading uppercase tracking-widest font-bold text-sm">Image Placeholder 5</p>
                  <p className="text-xs mt-1">"This following table illustrates the speed capability of tires."</p>
                </div>

                <p>
                  This following table illustrates the speed capability of tires. Speed ratings were established to match the speed capability of tires with the top speed of the vehicles to which they are applied. Speed rating does not suggest the speed of the vehicle, and only shows the maximum capability of the tire. Regardless of the speed capability of your tires, never exceed lawful speeds or speeds dictated by driving conditions. Exceeding a tire’s speed capacity could cause overheating and sudden tire failure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Critical Safety Warnings */}
          <motion.div variants={fadeUp} className="bg-red-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden border border-red-100">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-4 border-b border-red-200 pb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 border border-red-200">
                  <ShieldAlert size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-tight text-red-900">
                  Tire Spinning
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-red-900/80 leading-relaxed space-y-4 font-medium">
                <p>
                  Do not allow the reading on the speedometer to exceed 35 mph if tires are spinning because the vehicle becomes stuck in mud, snow, ice, etc. When only one tire on an axle is spinning, its speed can be double what is indicated on the speedometer and can quickly exceed the capability of the tire.
                </p>
                <p>
                  Never allow anyone to stand behind a spinning tire while attempting to push a vehicle. Speed and force can cause a tire to disintegrate and explode and may cause property damage, serious personal injury or death to you or a bystander.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. Inflation Pressure */}
          <motion.div variants={fadeUp} className="bg-red-50 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden border border-red-100">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-4 border-b border-red-200 pb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 border border-red-200">
                  <ShieldAlert size={24} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase tracking-tight text-red-900">
                  Inflation Pressure
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-red-900/80 leading-relaxed space-y-4 font-medium">
                <p>
                  A tire can only do its job of carrying a vehicle load when it’s properly inflated. Vehicle manufacturers assign a tire size with a specific tire pressure to carry the load of the vehicle and passengers, and provide the best balance of handling, traction, fuel efficiency and durability.
                </p>
                <p>
                  This inflation pressure is almost always different from what is indicated on the sidewall. The sidewall indicates the maximum pressure and corresponding load for the tire, but the recommended pressure can always be found in the placard in the driver’s door panel. In case of a tire size change, the proper inflation pressure will be recommended to maintain the same amount of load. Higher inflation pressure provides higher load capacity, which is why light load passenger tires have maximum load pressure of 35/36 psi, while extra load passenger tires have a maximum load pressure of 41/42 psi.
                </p>
                <p className="font-bold">
                  Warning: Underinflation and/or overloading of a tire causes excessive heat build-up and internal structural damage. Overinflation makes it more likely for tires to be cut, punctured or broken by sudden impact. These conditions may cause a tire failure, including a tread/belt separation, even at a later date, which can lead to an accident and serious personal injury or death.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-20 px-4 text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold uppercase text-brand-black mb-6 tracking-tight">
            Ready to find your perfect tyre?
          </h2>
          <p className="text-brand-black/70 mb-10 text-lg font-medium">
            Use our advanced Tyre Finder to browse options tailored to your exact vehicle and needs, or visit a dealer for expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/brands"
              className="w-full sm:w-auto bg-brand-black text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-black/80 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Explore Brands <ArrowRight size={20} />
            </Link>
            <Link 
              href="/dealers"
              className="w-full sm:w-auto bg-white text-brand-black font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2 border border-black/5"
            >
              Find a Dealer
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
