"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Slide = {
  src: string;
  alt: string;
  showMessage?: boolean;
};

const slides: Slide[] = [
    {
        src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd.png",
        alt: "Karan engaging the crowd 1",
        showMessage: true,
      },
    {
        src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd2.png",
        alt: "Karan engaging the crowd 2",
        showMessage: true,
      },
    {
        src: "/images/Karan-Bhatia-Dubai-Emcee.png",
        alt: "Karan Bhatia montage",
      },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-1.png",
    alt: "Karan Bhatia hosting 1",
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-2.png",
    alt: "Karan Bhatia hosting 2",
  },
  {
    src: "/images/Karan-Bhatia.png",
    alt: "Karan Bhatia hosting 3",
  },
 
];

export default function HeroImageBanner() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideAspectRatios, setSlideAspectRatios] = useState<number[]>(
    Array(slides.length).fill(16 / 9)
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    const durationsMs = slides.map((s, idx) => (idx <= 1 ? 9000 : 5500));

    const schedule = () => {
      if (!api) return;
      const index = api.selectedScrollSnap();
      setActiveIndex(index);
      const wait = durationsMs[index] ?? 5500;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => api.scrollNext(), wait);
    };

    schedule();
    api.on("select", schedule);
    api.on("reInit", schedule);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      api.off("select", schedule);
      // embla types don't include off("reInit") in the definition in some versions
      try {
        // @ts-ignore
        api.off("reInit", schedule);
      } catch {}
    };
  }, [api]);

  return (
    <section id="hero" className="relative w-full bg-background">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, align: "start", skipSnaps: false }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: slideAspectRatios[index] || 16 / 9 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center select-none"
                  onLoadingComplete={(img) => {
                    const ratio = img.naturalWidth / img.naturalHeight;
                    setSlideAspectRatios((prev) => {
                      const next = [...prev];
                      next[index] = ratio;
                      return next;
                    });
                  }}
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex left-3 md:left-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
        <CarouselNext className="hidden sm:flex right-3 md:right-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
      </Carousel>

      {/* Fixed overlay message visible only for the first two slides */}
      {activeIndex <= 1 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-2 z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
          <div className="relative w-full max-w-6xl text-center rounded-2xl px-5 py-4 sm:px-8 sm:py-6 backdrop-blur-xl shadow-2xl border border-white/20 bg-gradient-to-b from-neutral-900/55 to-neutral-900/35">
            <p className="text-white font-display font-semibold tracking-wide text-base sm:text-xl md:text-3xl lg:text-4xl leading-relaxed">
              <span className="block">Want your next event to be unforgettable?</span>
              <span className="block mt-2">
                <Highlight className="text-white from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 px-2 py-0.5">I’ll keep your crowd engaged, entertained & energized.</Highlight>
                {" "}Just scroll through the photos and videos; you’ll feel the <Highlight className="text-white from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 px-2 py-0.5"> vibe in the smiles & laughter </Highlight>
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

