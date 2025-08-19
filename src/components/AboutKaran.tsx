"use client";

import { motion } from "framer-motion";
import { Award, Users, Calendar, Star, Zap, CheckCircle } from "lucide-react";

export function AboutKaran() {
  return (
    <section id="about" className="py-10 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-red-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Photo Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Photo Container */}
            <div className="relative">
              {/* Karan's Photo */}
              <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl shadow-2xl border border-red-200/50 overflow-hidden">
                <img 
                  src="/images/Karan-Bhatia-host.png" 
                  alt="Karan Bhatia - Professional Emcee and TV Presenter"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-red-200/50"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-red-600" />
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Professional</p>
                    <p className="text-slate-500">Emcee & TV Presenter</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-0.5 bg-red-600"></div>
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  Meet the Emcee
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-display font-bold text-slate-900"
              >
                Karan{" "}
                <span className="text-red-600">Bhatia</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <p className="text-lg font-medium text-slate-700">
                  Emcee · Comedian · Entertainer
                </p>
              </motion.div>
            </div>

            {/* Main Content - Concise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-4 text-slate-700"
            >
              <p className="text-lg leading-relaxed">
                Dubai‑based professional emcee and TV presenter — known for
                <span className="font-semibold text-slate-900"> dynamic stage presence</span> and
                <span className="font-semibold text-slate-900"> exceptional crowd engagement</span>.
                Sharp improv and impeccable comic timing keep audiences awake for the right reasons.
              </p>

              <p className="text-lg leading-relaxed">
                Specialised in
                <span className="font-semibold text-slate-900"> corporate events</span>,
                <span className="font-semibold text-slate-900"> weddings</span>,
                <span className="font-semibold text-slate-900"> celebrity events</span>, and
                <span className="font-semibold text-slate-900"> private celebrations</span> —
                think tight show flow, smart humour, and zero awkward pauses.
              </p>

              <div className="border-l-4 border-red-600 pl-4 py-3 bg-red-50/50 rounded-r-lg">
                <p className="text-lg italic text-slate-700">
                  "Your energy, charm, and engaging style were truly the highlight of our EKAS event" 
                  <span className="text-sm text-slate-500 ml-2">— Monika Bhatia, Emirates Airlines</span>
                </p>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { icon: Calendar, label: "Corporate", value: "Events" },
                { icon: Users, label: "Weddings", value: "& Celebrations" },
                { icon: Star, label: "Celebrity", value: "Events" },
                { icon: Zap, label: "TV", value: "Presenter" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.label}</p>
                      <p className="text-xs text-slate-600">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 