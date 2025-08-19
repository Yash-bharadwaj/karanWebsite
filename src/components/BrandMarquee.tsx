"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BrandItem = { name: string };

export function BrandMarquee({
  items,
  className,
  speed = "normal",
}: {
  items: BrandItem[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    const children = Array.from(scrollerRef.current.children);
    for (const child of children) {
      scrollerRef.current.appendChild(child.cloneNode(true));
    }
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "slow" ? "60s" : "35s";
      containerRef.current.style.setProperty("--animation-duration", duration);
      containerRef.current.style.setProperty("--animation-direction", "forwards");
    }
    setStart(true);
  }, [speed]);

  return (
    <section className={cn("py-10 sm:py-14 bg-gradient-to-b from-white to-slate-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900">
            Preferred by <span className="text-red-600">Iconic Brands</span>
          </h3>
          <div className="mt-2 h-1 w-28 rounded-full bg-gradient-to-r from-red-500 to-red-700" />
        </div>


        <div
          ref={containerRef}
          className={cn(
            "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-3 sm:gap-4 py-2",
              start && "animate-scroll",
            )}
          >
            {items.map((item, i) => (
              <li
                key={`${item.name}-${i}`}
                className="h-11 sm:h-14 w-[140px] sm:w-[180px] flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 text-sm sm:text-base font-medium shadow-sm"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

