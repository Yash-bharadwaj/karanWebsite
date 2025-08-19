"use client";

import { motion } from "framer-motion";
import { Carousel, Card, AppleCard } from "@/components/ui/apple-cards-carousel";
import ColourfulText from "@/components/ui/colourful-text";
import VideoStripSlider from "@/components/VideoStripSlider";

// Grid Card Components
const InnovationCard = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-display mb-2">
        I Don't Follow Scripts
      </h2>
      <p className="text-left text-base/6 text-neutral-200">
        I create moments. Because ordinary is boring. Every event is an opportunity to push boundaries and deliver experiences that leave lasting impressions.
      </p>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-display mb-2">
        I Actually Care
      </h2>
      <p className="text-left text-base/6 text-neutral-200">
        Precision meets creativity. I craft every moment with purpose. Because winging it is so 2010. Your success is my obsession.
      </p>
    </div>
  );
};

const EnergyCard = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-display mb-2">
        I'm Not Boring
      </h2>
      <p className="text-left text-base/6 text-neutral-200">
        My passion ignites the room. Because enthusiasm is contagious. I bring infectious energy that transforms ordinary events into extraordinary moments.
      </p>
    </div>
  );
};

const ImpactCard = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-display mb-2">
        I Make Things Happen
      </h2>
      <p className="text-left text-base/6 text-neutral-200">
        I reject mediocrity. Because routine is boring. Every event creates meaningful impact, leaving audiences inspired and transformed.
      </p>
    </div>
  );
};

const ExcellenceCard = () => {
  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-display mb-2">
        I'm Obsessed
      </h2>
      <p className="text-left text-base/6 text-neutral-200">
        Uncompromising standards. Because details matter. From concept to execution, I maintain excellence in every element.
      </p>
    </div>
  );
};

export function WhatDrivesUs() {
  const cards: AppleCard[] = [
    {
      category: "Corporate",
      title: "Run of show that actually runs",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop",
    },
    {
      category: "Weddings",
      title: "Warm, witty, and wonderfully personal",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
    },
    {
      category: "Awards",
      title: "Pacing, presence, and picture‑perfect moments",
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2400&auto=format&fit=crop",
    },
    {
      category: "Private Nights",
      title: "Interactive fun without the cringe",
      src: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?q=80&w=2400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="stories" className="py-10 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 text-center"
        >
          Don't Belive me just <span className="rainbow-text">watch</span>.
        </motion.h2>

      </div>
      {/* Full-width Video Slider */}
      <div className="w-full mt-4">
        <VideoStripSlider
          videos={[
            { src: "/BigFatWeddingDubaiEmcee.mp4" },
            { src: "/Karan-bhatia-oberioVideo.mp4" },
            { src: "/7StartWedding.mp4" },
            { src: "/ClientCall-Emcee-dubai.mp4" },
            { src: "/Dubai-Haldi-Emcee.mp4" },
                        ]}
        />
      </div>
    </section>
  );
}