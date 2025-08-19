"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WhatDrivesUs } from "@/components/WhatDrivesUs";
import { HeroQuoteCarousel } from "@/components/HeroQuoteCarousel";
import HeroImageBanner from "@/components/HeroImageBanner";
import { OurProcess } from "@/components/OurProcess";
import { AboutKaran } from "@/components/AboutKaran";
import { Mic, Zap, Users, CheckCircle, Calendar, Mail, Loader2 } from "lucide-react";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";
import { FAQ } from "@/components/FAQ";
import { BrandMarquee } from "@/components/BrandMarquee";

export default function Home() {
  const [inlineForm, setInlineForm] = useState({ name: "", whatsapp: "", eventDate: "", details: "" });
  const [inlineSubmitting, setInlineSubmitting] = useState(false);
  const [inlineSent, setInlineSent] = useState(false);
  const [inlineError, setInlineError] = useState<string | null>(null);

  async function submitInlineLead(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New event enquiry from ${inlineForm.name}`;
    const body = `Name: ${inlineForm.name}\nWhatsApp: ${inlineForm.whatsapp}\nEvent Date: ${inlineForm.eventDate}\n\nDetails:\n${inlineForm.details}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=karanhbh@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  }
  return (
    <Layout>
      {/* FloatingNav provided globally in Layout */}
      {/* Premium Hero Image Banner */}
      <HeroImageBanner />

      {/* About Karan Section */}
      <AboutKaran />

      {/* Brand marquee between About and Stories */}
      <BrandMarquee
        items={[
          { name: "Emirates" },
          { name: "DAMAC" },
          { name: "Al Naboodah" },
          { name: "Bank of Singapore" },
          { name: "Emirates NBD" },
          { name: "Premier Inn" },
          { name: "GEC Media" },
          { name: "Ethiopian Airlines" },
        ]}
      />

      {/* What Drives Us Section (Stories That Stick) */}
      <WhatDrivesUs />

      {/* Clients Section */}
      <section id="clients" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-3"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Trusted by people who hate boring events
            </h2>
          </motion.div>
        </div>
        <InfiniteMovingCardsDemo />
      </section>

      {/* Our Process Section (More Than a Mic) */}
      <OurProcess />

   

      {/* Creative Proof Section (temporarily hidden as requested)
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              No Boring Moments. <span className="rainbow-text">Guaranteed.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stagecraft, timing and humor tuned to your audience — not a script.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Stagecraft", desc: "Tight flow, crisp cues, handcrafted transitions.", Icon: Mic },
              { title: "Energy That Lands", desc: "Humor and improv calibrated to your crowd.", Icon: Zap },
              { title: "Audience‑Obsessed", desc: "Engagement without cringe; real participation.", Icon: Users },
              { title: "Stress‑Proof", desc: "Run of show stays calm even when plans change.", Icon: CheckCircle },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 rainbow-bar" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg rainbow-bar text-white flex items-center justify-center">
                      <item.Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

   {/* FAQ Section */}
      <FAQ />

      {/* Quote Carousel (moved below FAQ) */}
      <HeroQuoteCarousel />
      {/* Conversion Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Let’s Not <span className="text-red-600">Bore Your Guests</span>
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                Book me and I’ll keep the room awake, the run of show tight, and the client convinced it was their idea.
              </p>
              <ul className="space-y-3">
                {[
                  "No awkward pauses — just well‑timed chaos.",
                  "Crowd work that won’t get HR (too) nervous.",
                  "Timing so tight even the AV team smiles.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-foreground/90">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-500 to-red-700" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Plan an unforgettable event</h3>
                    <p className="text-sm text-muted-foreground"></p>
                    <p className="text-xs text-muted-foreground italic mt-1">Send me a message — I don't bite (usually).</p>
                  </div>
                </div>
                {!inlineSent ? (
                  <form onSubmit={submitInlineLead} className="space-y-4">
                    <div>
                      <label className="block text-sm mb-1">Name</label>
                      <input
                        required
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">WhatsApp number</label>
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        value={inlineForm.whatsapp}
                        onChange={(e) => setInlineForm({ ...inlineForm, whatsapp: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g. +971 55 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Event date</label>
                      <input
                        required
                        type="date"
                        value={inlineForm.eventDate}
                        onChange={(e) => setInlineForm({ ...inlineForm, eventDate: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Tell us about the event</label>
                      <textarea
                        required
                        rows={4}
                        value={inlineForm.details}
                        onChange={(e) => setInlineForm({ ...inlineForm, details: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Date, location, size, vibe—anything helpful"
                      />
                    </div>
                    {inlineError && (
                      <p className="text-sm text-red-600">{inlineError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={inlineSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white px-4 py-2.5 hover:from-red-600 hover:to-red-800 transition disabled:opacity-60"
                    >
                      {inlineSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                      Send Message
                    </button>
                    <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                      We’ll share a quick outline and hosting ideas within 24 hours — tailored to your event.
                    </div>
                  </form>
                ) : (
                  <div className="py-10 text-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: [0.6, 1.1, 1], opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="mb-3 flex justify-center"
                    >
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lg font-semibold"
                    >
                      Message received
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-muted-foreground mt-1"
                    >
                      Karan’s team will get back to you shortly.
                    </motion.p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
