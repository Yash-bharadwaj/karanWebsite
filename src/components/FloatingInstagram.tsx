"use client";

import { motion } from "framer-motion";
import { Instagram, MessageSquare } from "lucide-react";

export default function FloatingInstagram() {
  function toggleLeadModal() {
    if (typeof window !== "undefined") {
      const ev = new CustomEvent("lead-modal:toggle");
      window.dispatchEvent(ev);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
      <motion.button
        type="button"
        onClick={toggleLeadModal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-colors flex items-center justify-center"
        title="Send me a message — I don't bite (usually)."
        aria-label="Open enquiry form"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </motion.button>

      <motion.a
        href="https://www.instagram.com/bhatia.karan/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 transition-colors flex items-center justify-center"
        aria-label="Follow on Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}

