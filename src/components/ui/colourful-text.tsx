"use client";

import React from "react";
import { motion } from "framer-motion";

interface ColourfulTextProps {
  text: string;
  className?: string;
}

export default function ColourfulText({ text, className = "" }: ColourfulTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-red-500 to-pink-500 bg-clip-text text-transparent font-bold ${className}`}
    >
      {text}
    </span>
  );
} 