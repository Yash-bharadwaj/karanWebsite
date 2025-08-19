"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-slate-600 dark:text-neutral-300"
        >
          © {new Date().getFullYear()} All rights reserved. @karanbhatia
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-sm text-slate-600 dark:text-neutral-300 flex items-center"
        >
          Desinged & Developed with
          <motion.span
            aria-label="love"
            role="img"
            className="mx-1"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ❤️
          </motion.span>
          by
          <a
            href="https://linktr.ee/yashwanthbharadwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
          <b>  Yashwanth Bharadwaj </b>
          </a>
          
        </motion.div>
      </div>
    </footer>
  );
}

