"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Calendar, Star, Award, Zap, Mic, Briefcase, PartyPopper, Heart, Crown } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

type HostStyleKey = "corporate" | "wedding" | "celebrity" | "private";

const hostStyles: Array<{
  key: HostStyleKey;
  title: string;
  description: string;
  sampleLine: string;
  icon: React.ComponentType<{ className?: string }>;
  badges: string[];
}> = [
  {
    key: "corporate",
    title: "Corporate & Conferences",
    description:
      "Sharp, on-time, and on-brand. I keep the agenda crisp, transitions seamless, and energy high without missing a beat.",
    sampleLine:
      "Good evening, leaders and innovators — tonight is about ideas that move markets.",
    icon: Briefcase,
    badges: ["Time-Perfect", "Brand-Safe", "C-Suite Friendly"],
  },
  {
    key: "wedding",
    title: "Weddings & Celebrations",
    description:
      "Warm, witty, and heartfelt. I read the room, elevate emotions, and make every moment feel personal.",
    sampleLine:
      "If happiness had a soundtrack, tonight — it’s playing right here for our couple!",
    icon: Heart,
    badges: ["Family-Friendly", "High Energy", "Bilingual Ready"],
  },
  {
    key: "celebrity",
    title: "Celebrity & Awards",
    description:
      "Commanding presence with camera awareness. I balance glam with timing to keep the spotlight exactly where it belongs.",
    sampleLine:
      "Please welcome the star who needs no introduction — but deserves the loudest applause.",
    icon: Crown,
    badges: ["Red-Carpet Poise", "Teleprompter", "Stage Direction"],
  },
  {
    key: "private",
    title: "Private & Brand Nights",
    description:
      "Interactive, improv-heavy, and unforgettable. Games, bits, and banter — tailored to your vibe.",
    sampleLine:
      "Phones down, smiles up — we’re making memories that won’t fit in a caption.",
    icon: PartyPopper,
    badges: ["Interactive", "Improv", "Games & Icebreakers"],
  },
];

const styleColors: Record<HostStyleKey, {
  gradientFrom: string;
  gradientTo: string;
  border: string;
  hoverBorder: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}> = {
  corporate: {
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    border: "border-blue-300/50",
    hoverBorder: "hover:border-blue-400/70",
    chipBg: "bg-blue-600",
    chipBorder: "border-blue-600",
    chipText: "text-white",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
  },
  wedding: {
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-700",
    border: "border-rose-300/50",
    hoverBorder: "hover:border-rose-400/70",
    chipBg: "bg-rose-600",
    chipBorder: "border-rose-600",
    chipText: "text-white",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    badgeBorder: "border-rose-200",
  },
  celebrity: {
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-700",
    border: "border-purple-300/50",
    hoverBorder: "hover:border-purple-400/70",
    chipBg: "bg-purple-600",
    chipBorder: "border-purple-600",
    chipText: "text-white",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    badgeBorder: "border-purple-200",
  },
  private: {
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-700",
    border: "border-amber-300/50",
    hoverBorder: "hover:border-amber-400/70",
    chipBg: "bg-amber-600",
    chipBorder: "border-amber-600",
    chipText: "text-white",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    badgeBorder: "border-amber-200",
  },
};

const quickServices: Array<{
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string;
}> = [
  {
    title: "Script & Flow Design",
    icon: Calendar,
    details:
      "Custom openings, transitions, and closings. I collaborate with your team to lock timing and tone.",
  },
  {
    title: "Audience Engagement",
    icon: Mic,
    details:
      "Smart crowd work, rapid improv, and participation that’s fun — never forced.",
  },
  {
    title: "Award Ceremonies",
    icon: Award,
    details:
      "Name pronunciations, pacing, and presence — the moment feels big and runs smooth.",
  },
  {
    title: "Panel Moderation",
    icon: Users,
    details:
      "Sharp intros, crisp questions, and audience Q&A that stays lively and on-topic.",
  },
  {
    title: "Stage Management",
    icon: Zap,
    details:
      "Backstage coordination with AV cues, last-minute changes, and calm control on the floor.",
  },
  {
    title: "Bilingual Hosting",
    icon: Star,
    details:
      "Seamless switching between tones and languages when your audience is diverse.",
  },
];

// Light, colorful gradients for Quick Services cards
const serviceGradients: Array<{
  from: string;
  to: string;
  border: string;
  iconFrom: string;
  iconTo: string;
}> = [
  { from: "from-blue-50", to: "to-blue-100", border: "border-blue-200/70", iconFrom: "from-blue-500", iconTo: "to-blue-600" },
  { from: "from-amber-50", to: "to-orange-100", border: "border-amber-200/70", iconFrom: "from-amber-500", iconTo: "to-orange-600" },
  { from: "from-purple-50", to: "to-indigo-100", border: "border-purple-200/70", iconFrom: "from-purple-500", iconTo: "to-indigo-600" },
  { from: "from-emerald-50", to: "to-teal-100", border: "border-emerald-200/70", iconFrom: "from-emerald-500", iconTo: "to-teal-600" },
  { from: "from-rose-50", to: "to-pink-100", border: "border-rose-200/70", iconFrom: "from-rose-500", iconTo: "to-pink-600" },
  { from: "from-sky-50", to: "to-cyan-100", border: "border-sky-200/70", iconFrom: "from-sky-500", iconTo: "to-cyan-600" },
];

// Light themed palettes for the corporate/wedding gallery
const galleryPalettes: Record<"corporate" | "wedding", { from: string; to: string; border: string; chip: string; chipText: string; } > = {
  corporate: { from: "from-blue-50", to: "to-blue-100", border: "border-blue-200", chip: "bg-blue-600", chipText: "text-white" },
  wedding: { from: "from-rose-50", to: "to-pink-100", border: "border-rose-200", chip: "bg-rose-600", chipText: "text-white" },
};

// Content that changes with Corporate/Wedding mode
const modeContent: Record<"corporate" | "wedding", {
  title: string;
  bullets: string[];
  testimonial: { text: string; source: string; chip: string };
}> = {
  corporate: {
    title: "Why Book Me for Corporate",
    bullets: [
      "Agenda discipline — on-time sessions, clean handoffs, and polished intros/outros.",
      "Brand-safe humor — professional, witty, and never off-message.",
      "Executive comfort — C‑suite briefings, teleprompter, and panel steering handled.",
      "Crisis-ready — last‑minute pivots absorbed without breaking flow.",
    ],
    testimonial: {
      text: "He aligned the stage tone perfectly with our brand — sleek, precise, engaging.",
      source: "— Marketing Head, Fortune 500 Summit",
      chip: "Flawless run of show",
    },
  },
  wedding: {
    title: "Why Book Me for Weddings",
    bullets: [
      "Heartfelt hosting — warmth, humor, and personal moments that feel yours.",
      "Family‑friendly fun — interactive bits guests enjoy without cringe.",
      "Photogenic timing — entrances, games, and cues synced with photo/video.",
      "Smooth flow — delays covered with charm, not awkward pauses.",
    ],
    testimonial: {
      text: "Guests felt included without it ever getting cheesy — warm, witty, beautifully paced.",
      source: "— Bride & Groom, Dubai",
      chip: "Seamless, heartfelt flow",
    },
  },
};

export function OurProcess() {
  const [activeStyle, setActiveStyle] = useState<HostStyleKey>("corporate");
  const [sectionMode, setSectionMode] = useState<"corporate" | "wedding">("corporate");
  // No carousel; using BentoGrid for premium layout

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-100 via-red-50 to-slate-200 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-300/30 to-slate-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-400/20 to-slate-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            className={`sm:text-center text-left mb-16 ${sectionMode === "corporate" ? "text-blue-950" : "text-rose-950"}`}
        >
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${sectionMode === "corporate" ? "from-blue-200 to-blue-100 border-blue-300 text-blue-800" : "from-rose-200 to-pink-100 border-rose-300 text-rose-800"} border rounded-full text-sm font-medium mb-6 cursor-pointer`}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
              Not Just 'Wing It'
          </motion.div>
          
          <div className="flex flex-col items-start sm:items-center gap-4 mb-2">
            <motion.h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold sm:text-center text-left ${sectionMode === "corporate" ? "text-slate-900" : "text-slate-900"}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              More Than a <span className={`${sectionMode === "corporate" ? "text-blue-600" : "text-rose-600"}`}>Mic</span>
            </motion.h2>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full p-1">
              <button
                onClick={() => setSectionMode("corporate")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${sectionMode === "corporate" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                Corporate
              </button>
              <button
                onClick={() => setSectionMode("wedding")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${sectionMode === "wedding" ? "bg-rose-600 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                Weddings
              </button>
            </div>
          </div>
          </motion.div>

          {/* Persuasive Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{modeContent[sectionMode].title}</h3>
                <ul className="space-y-4">
                  {modeContent[sectionMode].bullets.map((b, i) => (
                    <li key={`b-${i}`} className="flex items-start gap-3 text-left">
                      <CheckCircle className={`w-5 h-5 ${sectionMode === "corporate" ? "text-blue-600" : "text-rose-600"} mt-0.5`} />
                      <p className="text-slate-700">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-br ${sectionMode === "corporate" ? "from-blue-50 to-blue-100 border-blue-200" : "from-rose-50 to-pink-100 border-rose-200"} rounded-2xl p-6 sm:p-8 border shadow-sm`}>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Client words, not mine</h4>
                <p className="italic text-slate-700 leading-relaxed">
                  {modeContent[sectionMode].testimonial.text}
                </p>
                <p className="text-sm text-slate-500 mt-3">{modeContent[sectionMode].testimonial.source}</p>
                <div className="mt-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border ${sectionMode === "corporate" ? "border-blue-200" : "border-rose-200"} text-slate-800 text-sm shadow-sm`}>
                    <CheckCircle className={`w-4 h-4 ${sectionMode === "corporate" ? "text-blue-600" : "text-rose-600"}`} />
                    {modeContent[sectionMode].testimonial.chip}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        {/* Premium Bento Grid under heading; reacts to toggle above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {(() => {
            const palette = galleryPalettes[sectionMode];
            const items = (sectionMode === "corporate"
              ? ["Keynotes", "Product Launch", "Panel & Q&A", "Awards Night", "Town Hall", "Expo Stage", "Leadership Retreat"]
              : ["Sangeet", "Engagement", "Reception", "Haldi", "Cocktail Night", "After Party", "Mehendi"]) as string[];
            return (
              <div className={`rounded-2xl border ${palette.border} bg-gradient-to-br ${palette.from} ${palette.to} p-4 shadow-lg`}> 
                <BentoGrid className="max-w-7xl mx-auto">
                  {items.map((label, i) => (
                    <BentoGridItem
                      key={`${sectionMode}-bento-${i}`}
                      title={label}
                      description={sectionMode === "corporate" ? "Premium stage moments engineered for impact." : "Heartfelt, high‑energy moments guests remember."}
                      header={<div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-white/80 border border-white shadow-sm" />}
                      className={i % 5 === 0 ? "md:col-span-2" : ""}
                    />
                  ))}
                </BentoGrid>
              </div>
            );
          })()}
        </motion.div>

        {/* Interactive Host Styles (commented out as requested)
        <div className="relative space-y-10">
          ... Pick Your Host Style controls and content ...
        </div>
        */}

          {/* Quick Services - Bento Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-display font-bold text-slate-900 mb-4"
            >
              Quick Services
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickServices.map((svc, idx) => {
                const Icon = svc.icon;
                const g = serviceGradients[idx % serviceGradients.length];
                return (
                  <motion.div
                    key={`${svc.title}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-xl border ${g.border} bg-gradient-to-br ${g.from} ${g.to} shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${g.iconFrom} ${g.iconTo} text-white flex items-center justify-center shadow`}> 
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-semibold text-slate-900">{svc.title}</h4>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {svc.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
    </section>
  );
} 