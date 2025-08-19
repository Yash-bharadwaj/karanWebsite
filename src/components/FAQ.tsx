"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What kinds of events do you host?",
    answer:
      "Corporate conferences, award nights, product launches, weddings, celebrity shows, and private brand nights — tailored tone for each audience.",
  },
  {
    question: "Do you travel internationally?",
    answer:
      "Yes. Dubai‑based but available worldwide. Travel and accommodation are coordinated upfront with the client or agency.",
  },
  {
    question: "How do you handle last‑minute changes?",
    answer:
      "With a calm cue‑sheet mindset. I re‑sequence on the fly, adjust intros/outros, and keep the room confident while backstage pivots happen.",
  },
  {
    question: "Can you host bilingual shows?",
    answer:
      "Yes — English with Hindi/Urdu as needed. The switch is audience‑aware and keeps brand tone intact.",
  },
  {
    question: "How do we book you?",
    answer:
      "Share the date, venue, audience profile, and agenda. We do a quick discovery call, align on flow and deliverables, and sign off.",
  },
  {
    question: "What about pricing?",
    answer:
      "Rates depend on event type, prep, travel, and show duration. You’ll get a clear all‑in quote with scope before confirmation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-5 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-8 text-center"
        >
          Frequently Asked <span className="text-red-600">Questions</span>
        </motion.h2>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

