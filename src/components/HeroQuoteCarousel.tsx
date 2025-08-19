"use client";

import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";
import { LightLine } from "@/components/ui/light-line";
const quotes = [
  {
    text: "Want your event unforgettable? Sure—because people love remembering disasters… unless I’m on the mic.",
    author: "Karan Bhatia",
    highlight: "people love remembering disasters"
  },
  {
    text: "Yes, shocking—apparently the emcee matters more than those heart-stopping PowerPoint animations you slaved over.",
    author: "Karan Bhatia",
    highlight: "emcee matters more"
  },
  {
    text: "I keep audiences awake, laughing, and pretending they’re having the time of their lives—talent, not caffeine.",
    author: "Karan Bhatia",
    highlight: "talent, not caffeine"
  },
  {
    text: "From seamless flow to on-the-spot comebacks, I make silence extinct—because awkward pauses should stay in bad dates.",
    author: "Karan Bhatia",
    highlight: "make silence extinct"
  }
];


export function HeroQuoteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 9000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [scrollNext]);

  const renderQuoteWithHighlight = (quote: typeof quotes[0]) => {
    const parts = quote.text.split(quote.highlight);
    const renderWithBreaks = (text: string) =>
      text.split("\n").flatMap((segment, index) =>
        index === 0 ? [segment] : [<br key={`br-${index}`} />, segment]
      );
    return (
      <>
        {renderWithBreaks(parts[0])}
        <ColourfulText text={quote.highlight} />
        {renderWithBreaks(parts[1])}
      </>
    );
  };

  return (
    <section id="home" className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted/50 via-background to-muted/30">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Light Line Effect */}
          <LightLine />
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {quotes.map((quote, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center px-4"
                  >
                    <div className="max-w-4xl mx-auto">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight mb-2"
                      >
                        <span className="select-none align-middle">&ldquo;</span>
                        {renderQuoteWithHighlight(quote)}
                        <span className="select-none align-middle">&rdquo;</span>
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium"
                      >
                        — {quote.author}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-2 space-x-3">
            {quotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </motion.div>
        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 