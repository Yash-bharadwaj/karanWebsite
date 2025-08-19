"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function Spectrum() {
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
              Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my diverse range of emcee services and event hosting expertise 
              that can make your next event truly unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Corporate Events",
              "Weddings & Celebrations",
              "Product Launches",
              "Conferences & Seminars",
              "Celebrity Events",
              "Private Parties"
            ].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <p className="text-muted-foreground">
                  Professional emcee services and engaging hosting for {category.toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 