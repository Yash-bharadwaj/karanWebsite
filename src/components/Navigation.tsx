"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

// Deprecated in favor of FloatingNav. Keeping the file to avoid import errors if referenced elsewhere.
export function Navigation() {
  return null;
}