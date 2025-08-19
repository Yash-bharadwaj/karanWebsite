"use client";

import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type AppleCard = {
  category: string;
  title: string;
  src: string;
  content?: React.ReactNode;
};

export function Card({ card, index }: { card: AppleCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-2xl shadow-lg"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${card.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="text-white/80 text-xs uppercase tracking-wider mb-1">
          {card.category}
        </div>
        <h3 className="text-white text-2xl md:text-4xl font-display font-bold leading-tight">
          {card.title}
        </h3>
      </div>
    </motion.div>
  );
}

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    const id = setInterval(() => emblaApi?.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((node, i) => (
            <div key={i} className="flex-[0_0_85%] md:flex-[0_0_70%] px-3">
              {node}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur border border-slate-200 shadow flex items-center justify-center hover:bg-white"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4 text-slate-700" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 backdrop-blur border border-slate-200 shadow flex items-center justify-center hover:bg-white"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4 text-slate-700" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={`dot-${i}`}
            className={`h-1.5 w-4 rounded-full transition-all ${i === current ? "bg-slate-700 w-6" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

