"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Your energy, charm, and engaging style were truly the highlight of our EKAS event.",
    name: "Monika Bhatia",
    title: "Emirates Airlines",
  },
  {
    quote:
      "Hi Karan.. we all enjoyed a lot!! Thanks for making our event so special and accommodating all last minute requests. Everyone at the after party is also praising how you kept everyone engaged and happy! Looking forward to collaborating again, sometime! ✨😊",
    name: "Chanpreet Kaur",
    title: "Indoguna, HR Manager",
  },
  {
    quote: "He made the Doctors laugh and the Doctors dance. Can you believe it?",
    name: "Dr Sanjay Parashar",
    title: "Celebrity Plastic Surgeon",
  },
  {
    quote: "Hands down the best emcee in the game! Electric energy.",
    name: "Simran",
    title: "Bride",
  },
  {
    quote:
      "You brought energy and vibes and made our wedding incredible; it wouldn't have been the same without you.",
    name: "Sabby",
    title: "Groom",
  },
  {
    quote: "This show wouldn’t have been half of what it was without you.",
    name: "Fawaz Roshan",
    title: "Groom",
  },
];

