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
  mobileSrc?: string;
  alt: string;
  showMessage?: boolean;
};

const slides: Slide[] = [
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-1.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-1m.png",
    alt: "Karan engaging the crowd 1",
    showMessage: true,
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-2.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-2m.png",
    alt: "Karan engaging the crowd 2",
    showMessage: true,
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-3.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-3m.png",
    alt: "Karan Bhatia montage",
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-4.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-4m.png",
    alt: "Karan Bhatia hosting 1",
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-5.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-5m.png",
    alt: "Karan Bhatia hosting 2",
  },
  {
    src: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-6.png",
    mobileSrc: "/images/Karan-Bhatia-Dubai-Emcee-Crowd-6m.png",
    alt: "Karan Bhatia hosting 3",
  },
  
];

export default function HeroImageBanner() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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
                className="relative w-full overflow-hidden aspect-[5/4] sm:aspect-[16/9] lg:aspect-[21/9]"
              >
                {/* Mobile crop */}
                <Image
                  src={slide.mobileSrc ?? slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, 0px"
                  className="object-cover object-center select-none sm:hidden"
                  draggable={false}
                />
                {/* Desktop/Tablet crop */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 0px, 100vw"
                  className="object-cover object-center select-none hidden sm:block"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex left-3 md:left-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
        <CarouselNext className="hidden sm:flex right-3 md:right-6 bg-white/70 backdrop-blur hover:bg-white text-black border-0" />
      </Carousel>

      {/* Main question in the middle of the carousel - only for first slide */}
      {activeIndex === 0 && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
          <div className="inline-block text-center rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 bg-black/80 backdrop-blur-sm shadow-lg">
            <p className="text-white font-display font-bold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight mb-2">
              Want your next event to be unforgettable?
            </p>
            <p className="text-white font-display font-semibold tracking-wide text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              <Highlight className="text-white from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 px-1 py-0">I'll keep your crowd engaged, entertained & energized.</Highlight>
              {" "}Just scroll through the photos and videos; you'll feel the <Highlight className="text-white from-red-500 to-rose-600 dark:from-red-600 dark:to-rose-700 px-1 py-0"> vibe in the smiles & laughter </Highlight>
            </p>
          </div>
        </div>
      )}


    </section>
  );
}

