"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
};

const slides: Slide[] = [
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
    src: "/images/Karan-Bhatia-Dubai-Emcee-3.png",
    alt: "Karan Bhatia hosting 3",
  },
 
];

export default function HeroImageBanner() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [slideAspectRatios, setSlideAspectRatios] = useState<number[]>(
    Array(slides.length).fill(16 / 9)
  );

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
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
                  className="object-contain object-center select-none"
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
    </section>
  );
}

