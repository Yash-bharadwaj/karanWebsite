"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="white"
        d="M19.9 17.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.8.2-.9 1-1.1 1.2-.4.2-.7.1-1.4-.5-2.7-1.6c-1-.9-1.6-2-1.8-2.4s0-.5.1-.6l.5-.6c.2-.2.3-.4.4-.6s0-.4 0-.6c0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.4.3-1.3 1.2-1.3 2.9s1.3 3.4 1.5 3.6c.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.7.2-1.8 0-.1-.2-.2-.5-.4z"
      />
      <path
        fill="white"
        d="M26.5 5.5A11.9 11.9 0 0016 2 12 12 0 006 21.2L4.5 27l5.9-1.5A12 12 0 1026.5 5.5zm-10.5 20a9.7 9.7 0 01-4.9-1.3l-.3-.2-3.5.9.9-3.4-.2-.3a9.8 9.8 0 1118.6-4.5 9.8 9.8 0 01-9.5 8.8z"
      />
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
        title="WhatsApp me — I don't bite (usually)."
        aria-label="Open enquiry form via WhatsApp style"
      >
        <WhatsAppIcon className="h-6 w-6" />
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

