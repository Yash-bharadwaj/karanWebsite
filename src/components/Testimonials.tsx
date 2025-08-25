"use client";

import { useEffect, useMemo, useRef } from "react";
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
    quote: "This show wouldn’t have been half of what it was without you",
    name: "Fawaz Roshan",
    role: "Groom",
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const loopItems = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS],
    []
  );
  const isPausedRef = useRef(false);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    let raf = 0;
    let last = performance.now();
    const speedPxPerMs = 0.06; // adjust smoothness/speed

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!isPausedRef.current) {
        node.scrollLeft += speedPxPerMs * dt;
      }
      const resetPoint = node.scrollWidth / 3; // because we duplicated items thrice
      if (node.scrollLeft >= resetPoint) {
        node.scrollLeft = node.scrollLeft - resetPoint;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="clients" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-display font-semibold text-foreground tracking-tight leading-tight"
          >
            Trusted by teams who value <span className="rainbow-text">engaging events</span>
          </motion.h2>
          {/* <div className="mt-3 mx-auto h-1.5 w-28 bg-gradient-to-r from-red-500 to-red-700 rounded-full" /> */}
        </div>

        {/* Horizontal carousel, single row */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
            className="flex gap-4 sm:gap-6 overflow-hidden pb-2 pr-2"
          >
            {loopItems.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="flex-none w-[85vw] sm:w-[420px] lg:w-[560px] rounded-2xl border border-red-100 bg-gradient-to-br from-white via-red-50 to-red-100 p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="italic text-base sm:text-lg text-foreground leading-relaxed">{t.quote}</p>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  {(t.role || t.company) && (
                    <div className="text-sm text-muted-foreground">{[t.role, t.company].filter(Boolean).join(" · ")}</div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* subtle gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

