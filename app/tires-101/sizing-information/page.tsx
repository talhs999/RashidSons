"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

export default function SizingInformationPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-brand-black pt-24">
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
      <section className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        <div className="prose prose-lg lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
          
          <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase text-brand-black mt-16 mb-6 border-l-4 border-brand-yellow pl-4">Service Type or Size Designation</h2>
          <p>Some tire size designations start with a letter(s) that identify the type of vehicle and/or type of service for which they were designed. The typical letter for passenger and light truck tires would be P, LT, T and C.</p>
          <p>Passenger tires that are designed based on the Tire and Rim Association’s (TRA) standard start with the letter P and are known as P-metric size tires. Passenger tires that are designed based on the European Tyre and Rim Technical Organization’s (ETRTO) standard start without any letters. These sizes are known as hard-metric or Euro-metric size tires. Euro-metric sizes are dimensionally equivalent to P-metric sizes, but typically differ subtly in load-carrying capabilities.</p>
          <p>Light truck tires that are designed based on the TRA’s standard often start with two letters: LT. LT signifies the tire is a light truck-metric size that was designed to be used on pickup trucks, which have higher cargo carrying and towing capabilities than passenger cars. An example of this type of sizing convention is an LT215/75R15. In older size conventions, the LT designation may be at the end of tire size. Those sizes are known as flotation light truck size. An example of this type of sizing convention is an 35x12.50R17LT.</p>
          <p>A tire size that begins with a letter T signifies the tire is a temporary spare or mini-spare. This kind of tire is designed to be used temporarily, only until a flat tire can be repaired or replaced.</p>
          <p>A Euro-metric size designed for carrying heavy cargo and/or towing trailers often ends with the letter C. C signified the tire is a commercial tread, intended for vans or delivery trucks that are capable of carrying heavy loads. 195/70R15C is an example of this type of sizing convention.</p>

          <div className="my-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
            <img src="/images/sizing-1.jpg" alt="Size Designation" className="w-full h-auto object-contain" />
          </div>

          <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase text-brand-black mt-16 mb-6 border-l-4 border-brand-yellow pl-4">Tire Dimensions</h2>
          <p>The three-digit number identifies the tire’s section width in millimeters. The actual tire may not match perfectly to this, but it is close.</p>
          <p>The two-digit number following the section width identifies the tire’s aspect ratio. Aspect ratio is simply identified as a percentage of the section height divided by the section width. In the example below, the aspect ratio of the tire is 70 percent, so the section height of tire will be 129.5mm. The higher the aspect ratio, the taller the tire sidewall.</p>
          <p>A letter R following the tire aspect ratio identifies the tire's construction as a radial tire. In rare cases, a D will identify a bias ply construction, where the body plies crisscross on a diagonal. In recent years, ETRTO has adopted F branding standards that allowed tire manufacturers to identify tires with self-supporting, run-flat constructions within the tire size designation.</p>
          <p>The last two digits on tire size refer to the rim diameter, or the size of the wheel that the tire is intended to fit.</p>

          <div className="my-12 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-[#111111]">
            <img src="/images/sizing-2.jpg" alt="Tire Dimensions" className="w-full h-auto object-contain" />
          </div>

          <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase text-brand-black mt-16 mb-6 border-l-4 border-brand-yellow pl-4">Service Descriptions</h2>
          <p>The two- or three-digits after the rim diameter, along with the letter next to it, are known as service descriptions. Service descriptions show the load index, which defines the maximum loading capacity of a tire, along with the speed rating, which determines the maximum speed allowed.</p>
          
          <div className="my-12 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <img src="/images/sizing-3.jpg" alt="Typical passenger tire load index table" className="w-full h-auto object-contain" />
          </div>

          <p>This table shows the typical passenger tire load index along with the maximum loading capacity. The maximum loading capacity at maximum pressure is also available on the tire sidewall. In this example, a load index of 116 on a P265/70R17 116 will be a maximum of 2,756 pounds of load per tire.</p>
          <p>Passenger tires are also identified as light load (LL), standard load (SL) or extra load (XL) on the sidewall. This is the same in both P-metric and Euro-metric sizes, however, the inflation pressure at maximum load slightly varies between the two.</p>
          <p>Light truck tires are identified by load range, which vary from load range B to load range F. The majority of tires in the market are load range C, D and E.</p>

          <div className="my-12 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <img src="/images/sizing-4.jpg" alt="Load index in the light truck tire table" className="w-full h-auto object-contain" />
          </div>

          <p>This table shows the load index in the tire. Each load index in light truck sizes is also identified by two numbers. The first number is the maximum load in single wheel, and the second number is the maximum load in dual-vehicle applications. In this example, 121/118 represents the maximum load of 3,197 pounds in single and 2,910 pounds on a dual application.</p>
          <p>A tire’s maximum load is the most weight the tire is designed to carry. Since a tire’s load carrying capacity is related to the tire’s size and how much inflation pressure is actually used, maximum loads are rated with the tire inflated to an industry-assigned inflation pressure. Never exceed the maximum vehicle load limit listed on the vehicle placard or in the owner’s manual. Never exceed the load carrying limits molded into the tire’s sidewall. Maximum load can only be carried at the maximum cold inflation pressure indicated on the tire’s sidewall. Overloading can cause excessive heat buildup, internal structural damage and may cause tire failure.</p>

          <div className="my-12 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <img src="/images/sizing-5.jpg" alt="Speed capability table" className="w-full h-auto object-contain" />
          </div>

          <p>This following table illustrates the speed capability of tires. Speed ratings were established to match the speed capability of tires with the top speed of the vehicles to which they are applied. Speed rating does not suggest the speed of the vehicle, and only shows the maximum capability of the tire. Regardless of the speed capability of your tires, never exceed lawful speeds or speeds dictated by driving conditions. Exceeding a tire’s speed capacity could cause overheating and sudden tire failure.</p>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 my-16 shadow-lg shadow-red-900/5">
            <div className="flex items-center gap-4 mb-4">
               <ShieldAlert className="text-red-500" size={32} />
               <h2 className="text-2xl font-bold text-red-900 m-0">Tire Spinning</h2>
            </div>
            <p className="text-red-900/80 mb-4 font-medium">Do not allow the reading on the speedometer to exceed 35 mph if tires are spinning because the vehicle becomes stuck in mud, snow, ice, etc. When only one tire on an axle is spinning, its speed can be double what is indicated on the speedometer and can quickly exceed the capability of the tire.</p>
            <p className="text-red-900 font-bold m-0">Never allow anyone to stand behind a spinning tire while attempting to push a vehicle. Speed and force can cause a tire to disintegrate and explode and may cause property damage, serious personal injury or death to you or a bystander.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 my-16 shadow-lg shadow-red-900/5">
            <div className="flex items-center gap-4 mb-4">
               <ShieldAlert className="text-red-500" size={32} />
               <h2 className="text-2xl font-bold text-red-900 m-0">Inflation Pressure</h2>
            </div>
            <p className="text-red-900/80 mb-4 font-medium">A tire can only do its job of carrying a vehicle load when it’s properly inflated. Vehicle manufacturers assign a tire size with a specific tire pressure to carry the load of the vehicle and passengers, and provide the best balance of handling, traction, fuel efficiency and durability.</p>
            <p className="text-red-900/80 mb-4 font-medium">This inflation pressure is almost always different from what is indicated on the sidewall. The sidewall indicates the maximum pressure and corresponding load for the tire, but the recommended pressure can always be found in the placard in the driver’s door panel. In case of a tire size change, the proper inflation pressure will be recommended to maintain the same amount of load. Higher inflation pressure provides higher load capacity, which is why light load passenger tires have maximum load pressure of 35/36 psi, while extra load passenger tires have a maximum load pressure of 41/42 psi.</p>
            <p className="text-red-900 font-bold m-0">Warning: Underinflation and/or overloading of a tire causes excessive heat build-up and internal structural damage. Overinflation makes it more likely for tires to be cut, punctured or broken by sudden impact. These conditions may cause a tire failure, including a tread/belt separation, even at a later date, which can lead to an accident and serious personal injury or death.</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-yellow py-20 px-4 text-center">
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
