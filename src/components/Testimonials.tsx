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

  // Get specific testimonials for custom layout
  const hrManager = items.find(t => t.role?.includes("HR Manager"));
  const monika = items.find(t => t.name === "Monika Bhatia");
  const sanjay = items.find(t => t.name === "Dr Sanjay Parashar");
  const remaining = items.filter(t => ![hrManager, monika, sanjay].includes(t));

  const Card = ({ testimonial, className = "" }: { testimonial: Testimonial; className?: string }) => {
    const isCompact = className.includes('compact');
    
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative bg-white dark:bg-neutral-900 rounded-lg border border-slate-200/60 dark:border-neutral-800/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col ${
          isCompact 
            ? 'p-2' 
            : 'p-3'
        } ${className}`}
      >
        {/* Decorative accent */}
        <div className={`absolute top-0 h-0.5 bg-gradient-to-r from-red-500 to-rose-600 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isCompact ? 'left-2 right-2' : 'left-3 right-3'
        }`} />
        
        {/* Quote */}
        <div className={`mb-2 flex-1 ${isCompact ? 'mb-1' : 'mb-2'}`}>
          <svg className={`text-slate-300 dark:text-neutral-700 fill-current ${
            isCompact ? 'w-3 h-3 mb-1' : 'w-4 h-4 mb-1'
          }`} viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className={`text-slate-700 dark:text-neutral-300 font-medium ${
            isCompact ? 'text-xs leading-relaxed' : 'text-sm leading-relaxed'
          }`}>
            {testimonial.quote}
          </p>
        </div>

        {/* Author info */}
        <div className={`border-t border-slate-100 dark:border-neutral-800 pt-1 mt-auto`}>
          <div className={`font-semibold text-slate-900 dark:text-white ${
            isCompact ? 'text-xs' : 'text-sm'
          }`}>
            {testimonial.name}
          </div>
          {(testimonial.role || testimonial.company) && (
            <div className={`text-slate-600 dark:text-neutral-400 ${
              isCompact ? 'text-[8px]' : 'text-xs'
            }`}>
              {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
      </motion.article>
    );
  };

  return (
    <section id="clients" className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Custom layout for top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4">
          {/* Left: HR Manager - full height */}
          {hrManager && (
            <div className="lg:row-span-2">
              <Card testimonial={hrManager} className="h-full" />
            </div>
          )}
          
          {/* Right: Monika and Sanjay stacked */}
          <div className="grid grid-rows-2 gap-2">
            {monika && <Card testimonial={monika} className="compact" />}
            {sanjay && <Card testimonial={sanjay} className="compact" />}
          </div>
        </div>

        {/* Bottom row with remaining testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {remaining.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

