"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Your energy, charm, and engaging style were truly the highlight of our EKAS event",
    name: "Monika Bhatia",
    company: "Emirates Airlines",
  },
  {
    quote:
      "Hi Karan.. we all enjoyed a lot!! Thanks for making our event so special and accommodating all last minute requests. Everyone at the after party is praising how you kept everyone engaged and happy! Looking forward to collaborating again, sometime!",
    name: "Chanpreet Kaur",
    role: "HR Manager",
    company: "Indoguna",
  },
  {
    quote:
      "He made the Doctors laugh and the Doctors dance. Can you believe it?",
    name: "Dr Sanjay Parashar",
    role: "Celebrity Plastic Surgeon",
  },
  {
    quote: "Hands down the best emcee in the game! Electric energy",
    name: "Simran",
    role: "Bride",
  },
  {
    quote:
      "You brought energy and vibes and made our wedding incredible; it wouldn't have been same without you",
    name: "Sabby",
    role: "Groom",
  },
  {
    quote: "This show wouldn't have been half of what it was without you",
    name: "Fawaz Roshan",
    role: "Groom",
  },
];

export function Testimonials() {
  const items = useMemo(() => {
    const corporates = TESTIMONIALS.filter((t) => t.company);
    const others = TESTIMONIALS.filter((t) => !t.company);
    return [...corporates, ...others];
  }, []);

  const Card = ({ testimonial }: { testimonial: Testimonial }) => {
    const isWide = testimonial.name === "Chanpreet Kaur";
    
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative bg-white dark:bg-neutral-900 rounded-lg border border-slate-200/60 dark:border-neutral-800/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-[200px] p-4 ${
          isWide ? 'min-w-[400px]' : 'min-w-[280px]'
        }`}
      >
        {/* Decorative accent */}
        <div className="absolute top-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-4 right-4" />
        
        {/* Quote */}
        <div className="mb-3 flex-1">
          <svg className="text-slate-300 dark:text-neutral-700 fill-current w-4 h-4 mb-2" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-slate-700 dark:text-neutral-300 font-medium text-sm leading-relaxed line-clamp-4">
            {testimonial.quote}
          </p>
        </div>

        {/* Author info */}
        <div className="border-t border-slate-100 dark:border-neutral-800 pt-2 mt-auto">
          <div className="font-semibold text-slate-900 dark:text-white text-sm">
            {testimonial.name}
          </div>
          {(testimonial.role || testimonial.company) && (
            <div className="text-slate-600 dark:text-neutral-400 text-xs">
              {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
      </motion.article>
    );
  };

  return (
    <section id="clients" className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-display font-semibold text-foreground tracking-tight leading-tight"
          >
            Trusted by teams who value <span className="rainbow-text">engaging events</span>
          </motion.h2>
          <div className="mt-2 h-1 w-16 mx-auto bg-gradient-to-r from-red-500 to-rose-600 rounded-full" />
        </div>

        {/* Horizontal scrollable testimonials */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" id="testimonials-scroll">
            {items.map((testimonial, index) => (
              <Card key={index} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Scroll button positioned on the right */}
          <button
            onClick={() => {
              const container = document.getElementById('testimonials-scroll');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 text-slate-600 dark:text-neutral-400 hover:text-slate-800 dark:hover:text-neutral-200 transition-colors duration-200"
            aria-label="Scroll right to see more testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

