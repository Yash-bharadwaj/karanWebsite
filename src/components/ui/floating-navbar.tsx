"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [activeHref, setActiveHref] = useState<string>(navItems?.[0]?.link ?? "");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = navItems
      .map((n) => (n.link.startsWith("#") ? n.link.slice(1) : ""))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY + 140; // account for navbar height
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= scrollY) current = `#${id}`;
      }
      if (current && current !== activeHref) setActiveHref(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navItems]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 supports-[backdrop-filter]:bg-white/55 bg-white/80 dark:supports-[backdrop-filter]:bg-[#0B0B0C]/55 dark:bg-[#0B0B0C]/80 backdrop-blur-xl border-b border-white/30 dark:border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center leading-none select-none">
            <Image
              src="/KaranLogo.png"
              alt="Karan Bhatia Logo"
              width={180}
              height={78}
              className="h-8 sm:h-18 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="relative hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item, idx) => {
              const isActive = activeHref === item.link;
              return (
                <a
                  key={`${item.name}-${idx}`}
                  href={item.link}
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-3 py-1.5 text-[0.95rem] sm:text-base font-semibold tracking-[0.01em] transition-colors duration-200",
                    isActive
                      ? "text-red-600 dark:text-red-400"
                      : "text-slate-800 dark:text-neutral-200 hover:text-red-600 dark:hover:text-red-400"
                  )}
                >
                  <span className="sm:hidden">{item.icon}</span>
                  <span className="hidden sm:inline">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute left-2 right-2 -bottom-[6px] h-[2px] bg-red-600 dark:bg-red-500"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {!isActive && (
                    <span className="pointer-events-none absolute left-2 right-2 -bottom-[6px] h-[2px] bg-red-500/0 group-hover:bg-red-500/60 transition-colors" />
                  )}
                </a>
              );
            })}
          </div>
          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-800 dark:text-neutral-200 hover:text-red-600 focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-1 overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/85 dark:bg-[#0B0B0C]/85 backdrop-blur-xl"
          >
            <ul className="py-2">
              {navItems.map((item, idx) => {
                const isActive = activeHref === item.link;
                return (
                  <li key={`m-${item.name}-${idx}`}>
                    <a
                      href={item.link}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 text-base",
                        isActive ? "text-red-600" : "text-slate-800 dark:text-neutral-200 hover:text-red-600"
                      )}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

