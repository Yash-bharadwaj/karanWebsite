"use client";

import React from "react";
import { motion } from "framer-motion";

export function LightLine() {
  return (
    <motion.div
      initial={{ width: "0rem", opacity: 0 }}
      whileInView={{ width: "40rem", opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="absolute -top-9 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent z-10 shadow-[0_0_20px_rgba(239,68,68,0.6)]"
    />
  );
} 