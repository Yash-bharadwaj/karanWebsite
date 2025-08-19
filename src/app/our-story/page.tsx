"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function OurStory() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              About Karan
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the journey, passion, and expertise that make Karan Bhatia 
              one of Dubai's most sought-after emcees and TV presenters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
                My Philosophy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe that every event is an opportunity to create something extraordinary. 
                My philosophy centers around energy, humor, and unwavering audience engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I transform ordinary events into memorable experiences, ensuring that each 
                moment reflects the unique personality of the occasion while keeping 
                everyone entertained and engaged.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From corporate events to celebrity gatherings, I've built a reputation 
                for delivering exceptional experiences. My journey has taken me from 
                local events to international stages, working with leading brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 