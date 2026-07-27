"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { branches } from "@/lib/data";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Check,
  Loader2,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-16 relative overflow-hidden">
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
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl"
          >
            Have a question about tyres? Need a quote? Our team is ready to
            help.
          </motion.p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-12 bg-cream relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              href="tel:+923004058489"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-brand-black/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                <Phone size={22} className="text-brand-yellow" />
              </div>
              <h3 className="font-bold text-brand-black mb-1">Call Us</h3>
              <p className="text-sm text-brand-gray">+92 300 4058489</p>
            </motion.a>

            <motion.a
              href="https://wa.me/923004058489"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="group bg-white rounded-2xl p-6 border border-brand-black/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <MessageCircle
                  size={22}
                  className="text-emerald-500"
                />
              </div>
              <h3 className="font-bold text-brand-black mb-1">WhatsApp</h3>
              <p className="text-sm text-brand-gray">
                Quick response guaranteed
              </p>
            </motion.a>

            <motion.a
              href="mailto:yousuf.jamal@jrashid.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-white rounded-2xl p-6 border border-brand-black/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Mail size={22} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-brand-black mb-1">Email</h3>
              <p className="text-sm text-brand-gray">
                yousuf.jamal@jrashid.com
              </p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="group bg-white rounded-2xl p-6 border border-brand-black/5 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Clock size={22} className="text-purple-500" />
              </div>
              <h3 className="font-bold text-brand-black mb-1">
                Business Hours
              </h3>
              <p className="text-sm text-brand-gray">
                Mon-Sat: 9:00 AM - 8:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact form + Branches */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black rounded-2xl p-8 lg:p-12 border border-brand-yellow/30 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-brand-yellow mb-2 text-center">
                Send us a Message
              </h2>
              <p className="text-white/70 mb-10 text-center text-lg">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-yellow/10 flex items-center justify-center mx-auto mb-6 border border-brand-yellow/20">
                    <Check
                      size={40}
                      className="text-brand-yellow"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-yellow mb-3">
                    Message Sent Successfully
                  </h3>
                  <p className="text-white/70 text-lg max-w-md mx-auto">
                    Thank you for contacting us. Our team will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        message: "",
                      });
                    }}
                    className="mt-8 text-brand-yellow font-bold text-lg hover:text-white transition-colors border-b-2 border-brand-yellow hover:border-white pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all text-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all text-lg"
                        placeholder="+92 300 XXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={formState.city}
                        onChange={(e) =>
                          setFormState({ ...formState, city: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all text-lg"
                        placeholder="Lahore, Karachi..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all resize-none text-lg leading-relaxed"
                      placeholder="Tell us how we can help — tyre inquiry, quote request, dealer application..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 font-bold rounded-xl w-full sm:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl text-lg mx-auto sm:mx-0"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={24} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={24} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section - Anarkali Lahore Branch Location */}
      <section className="py-16 bg-white border-t border-brand-black/5">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded bg-brand-black border border-brand-yellow/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
              Main Location
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black">
              Visit Our Main Branch
            </h2>
            <p className="text-brand-gray mt-2 text-sm">
              Circular Rd, Badami Bagh, Qadimi Shehr, Lahore
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-black/10 h-[450px] lg:h-[500px]">
            <iframe
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Sardar%20Enterprises,%20Circular%20Rd,%20Badami%20Bagh,%20Lahore&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="J. Rashid & Sons Anarkali Lahore Location"
              className="w-full h-full filter brightness-95"
            />
            
            {/* Map Info Overlay Card */}
            <div className="absolute bottom-6 left-6 z-10 bg-brand-black/90 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10 max-w-sm hidden sm:block shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-brand-yellow" size={20} />
                <h3 className="font-bold text-white uppercase text-sm tracking-wider">
                  Sardar Enterprises (Main Branch)
                </h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Circular Rd, Badami Bagh, Qadimi Shehr, Lahore
              </p>
              <a
                href="https://maps.app.goo.gl/UjLVkSDqg5ZG8Quy9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-skew-yellow scale-90 -ml-2"
              >
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
