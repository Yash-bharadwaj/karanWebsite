"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, X } from "lucide-react";

type FormState = {
  name: string;
  whatsapp: string;
  eventDate: string;
  details: string;
};

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", whatsapp: "", eventDate: "", details: "" });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000);
    const toggle = () => setIsOpen((v) => !v);
    window.addEventListener("lead-modal:toggle", toggle as EventListener);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("lead-modal:toggle", toggle as EventListener);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSent(false);
      setIsSubmitting(false);
      setError(null);
      setForm({ name: "", whatsapp: "", eventDate: "", details: "" });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New event enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nWhatsApp: ${form.whatsapp}\nEvent Date: ${form.eventDate}\n\nDetails:\n${form.details}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=karanhbh@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="pointer-events-auto absolute right-4 bottom-20 sm:bottom-20 w-[min(92vw,520px)] rounded-2xl overflow-hidden border border-white/10 bg-white/90 dark:bg-neutral-950/80 backdrop-blur-xl shadow-2xl"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 p-2 rounded-full bg-white/60 dark:bg-black/40 hover:bg-white/80 dark:hover:bg-black/60 transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSent ? (
              <div className="p-6 sm:p-7">
                <div className="mb-5">
                  <h3 className="text-xl font-semibold">Plan an unforgettable event</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    
                  </p>
                  <p className="text-xs text-muted-foreground italic mt-1">
                    Send me a message — I don't bite (usually).
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">WhatsApp number</label>
                    <input
                      required
                      type="tel"
                      inputMode="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. +971 55 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Event date</label>
                    <input
                      required
                      type="date"
                      value={form.eventDate}
                      onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Tell us about the event</label>
                    <textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Date, location, size, vibe—anything helpful"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white px-4 py-2.5 hover:from-[#2fe073] hover:to-[#0e7b70] transition disabled:opacity-60"
                  >
                    {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true" focusable="false"><path fill="white" d="M19.9 17.6c-.3-.2-1.8-.9-2.1-1s-.5-.2-.8.2-.9 1-1.1 1.2-.4.2-.7.1-1.4-.5-2.7-1.6c-1-.9-1.6-2-1.8-2.4s0-.5.1-.6l.5-.6c.2-.2.3-.4.4-.6s0-.4 0-.6c0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.4.3-1.3 1.2-1.3 2.9s1.3 3.4 1.5 3.6c.2.2 2.6 4 6.3 5.5.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.7.2-1.8 0-.1-.2-.2-.5-.4z"/><path fill="white" d="M26.5 5.5A11.9 11.9 0 0016 2 12 12 0 006 21.2L4.5 27l5.9-1.5A12 12 0 1026.5 5.5zm-10.5 20a9.7 9.7 0 01-4.9-1.3l-.3-.2-3.5.9.9-3.4-.2-.3a9.8 9.8 0 1118.6-4.5 9.8 9.8 0 01-9.5 8.8z"/></svg>
                    Send message
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: [0.6, 1.1, 1], opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-3"
                >
                  <CheckCircle className="h-14 w-14 text-green-500" />
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="text-lg font-semibold"
                >
                  Message received
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="text-sm text-muted-foreground mt-1"
                >
                  Karan’s team will get back to you shortly.
                </motion.p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

