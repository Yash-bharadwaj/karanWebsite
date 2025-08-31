"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M380.9 97.1C339 55.2 283.2 32 224.3 32 119.4 32 32 119.5 32 224.5c0 40.2 10.6 79.5 30.9 114L32 458.1l121.6-32.3c33.4 18.2 71.2 27.7 110.7 27.7 104.9 0 192.3-87.4 192.3-192.3 0-58.5-23-113.7-64.7-155.6zM224.3 432c-34.6 0-68.6-9.3-98-26.8l-7-4.2-72.6 19 19.4-70.3-4.6-7.2C41.9 318.7 31.6 283 31.6 246.7 31.6 140.7 117.7 54.6 223.7 54.6c51.3 0 99.6 20 135.9 56.4 36.3 36.3 56.3 84.6 56.3 135.9 0 106-86.1 192.1-191.6 192.1zM329 293.3c-5.7-2.9-33.8-16.7-39.1-18.6-5.3-1.9-9.1-2.9-13 2.9-3.9 5.7-14.9 18.6-18.3 22.4-3.4 3.8-6.7 4.3-12.4 1.4-33.7-16.8-55.8-30.1-78.1-68-5.9-10.1 5.9-9.4 16.8-31.2 1.9-3.8.9-7.1-.5-10-1.4-2.9-13-31.4-17.8-43-4.6-11.1-9.3-9.6-13-9.8-3.4-.2-7.3-.2-11.2-.2-3.9 0-10.2 1.4-15.5 7.1-5.3 5.7-20.3 19.8-20.3 48.3s20.8 56 23.6 59.9c2.9 3.8 40.9 62.4 99.1 87.4 13.9 6 24.8 9.6 33.2 12.3 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.7 33.8-13.8 38.6-27.1 4.8-13.3 4.8-24.8 3.4-27.1-1.4-2.3-5.3-3.8-11-6.7z"/>
    </svg>
  );
}

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
        className="w-12 h-12 rounded-full shadow-lg bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#2fe073] hover:to-[#0e7b70] transition-colors flex items-center justify-center"
        title="WhatsApp me — Get in touch"
        aria-label="Open enquiry form via WhatsApp style"
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
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

