"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, Users, Calendar, Star, Zap, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Your energy, charm, and engaging style were truly the highlight of our EKAS event",
    author: "Monika Bhatia",
    company: "Emirates Airlines",
  },
  {
    quote: "He made the Doctors laugh and the Doctors dance. Can you believe it?",
    author: "Dr Sanjay Parashar",
    company: "Celebrity Plastic Surgeon",
  },
  {
    quote:
      "You bought energy and vibes and made our wedding incredible; it wouldn't have been same without you",
    author: "Sabby",
    company: "Groom",
  },
];

function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full" setApi={setApi}>
      <CarouselContent>
        {testimonials.map((t, index) => (
          <CarouselItem key={index}>
            <div className="border-l-4 border-red-600 pl-4 py-3 bg-red-50/50 rounded-r-lg">
              <p className="text-lg italic text-slate-700">
                "{t.quote}"<span className="text-sm text-slate-500 ml-2">— {t.author}, {t.company}</span>
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function AboutKaran() {
  return (
    <section id="about" className="py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-red-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Photo Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Karan's Photo */}
              <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-2xl border border-red-200/50 overflow-hidden relative">
                <Image
                  src="/images/Karan-Bhatia-host.webp"
                  alt="Karan Bhatia - Professional Emcee and TV Presenter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-red-200/50"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-red-600" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Professional</p>
                    <p className="text-slate-500">Emcee & TV Presenter</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-0.5 bg-red-600"></div>
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  Meet the Emcee
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-display font-bold text-slate-900"
              >
                Karan{" "}
                <span className="text-red-600">Bhatia</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <p className="text-lg font-medium text-slate-700">
                  Emcee · Comedian · Entertainer
                </p>
              </motion.div>
            </div>

            {/* Main Content - Concise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-4 text-slate-700 leading-relaxed"
            >
              <p className="text-lg leading-relaxed">
                Karan Bhatia is a Dubai-based professional emcee and TV presenter, renowned for his
                <span className="font-semibold text-slate-900"> dynamic stage presence</span> and
                <span className="font-semibold text-slate-900"> exceptional crowd engagement</span>.
                With sharp improv skills and impeccable comic timing, he ensures every audience stays captivated from the first moment to the last.
              </p>

              <p className="text-lg leading-relaxed ">
                Specializing in
                <span className="font-semibold text-slate-900"> corporate events</span>,
                <span className="font-semibold text-slate-900"> weddings</span>,
                <span className="font-semibold text-slate-900"> celebrity events</span>, and
                <span className="font-semibold text-slate-900"> private celebrations</span>, Karan brings a perfect blend of professionalism, humor, and adaptability to every stage.
              </p>
              </motion.div>
              <p className="text-lg leading-relaxed">
                He has been the <span className="font-semibold text-slate-900">trusted host</span> for leading brands such as
                <span className="font-semibold text-slate-900"> Emirates Airlines</span>,
                <span className=" text-slate-900"> DAMAC Properties</span>,
                <span className="text-slate-900"> Al Naboodah Group</span>,
                <span className="font-semibold text-slate-900"> Bank of Singapore</span>,
                <span className="font-semibold text-slate-900"> Emirates NBD</span>,
                <span className=" text-slate-900"> Premier Inn</span>,
                <span className=" text-slate-900"> GEC Media</span>, and
                <span className="font-semibold text-slate-900"> Ethiopian Airlines</span>, delivering events that are not just seamless, but truly memorable.
              </p>
            

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                viewport={{ once: true }}
                className="relative"
              >
                <TestimonialCarousel />
              </motion.div>

            {/* Key Highlights */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { icon: Calendar, label: "Corporate", value: "Events" },
                { icon: Users, label: "Weddings", value: "& Celebrations" },
                { icon: Star, label: "Celebrity", value: "Events" },
                { icon: Zap, label: "TV", value: "Presenter" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                      <p className="text-xs text-slate-600">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 