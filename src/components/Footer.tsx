"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top grid */}
       

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
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
            className="text-sm text-slate-600 dark:text-neutral-300 flex items-center justify-center"
          >
            Crafted with
            <span aria-label="love" role="img" className="mx-1 inline-flex">
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                </defs>
                <path fill="url(#goldGradient)" d="M12 21s-6.297-4.35-9.09-7.143c-2.8-2.8-2.8-7.337 0-10.137 2.4-2.4 6.3-2.4 8.7 0L12 4.414l.39-.39c2.4-2.4 6.3-2.4 8.7 0 2.8 2.8 2.8 7.337 0 10.137C18.297 16.65 12 21 12 21z" />
              </svg>
            </span>
            by
            <a
              href="https://linktr.ee/yashwanthbharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <b> Yashwanth Bharadwaj </b>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

