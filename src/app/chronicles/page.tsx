"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function Chronicles() {
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
              Chronicles
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stories, insights, and updates from the world of event management. 
              Discover our latest projects, industry trends, and behind-the-scenes content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Press Coverage",
                description: "Media mentions and press releases about our latest events and achievements."
              },
              {
                title: "Case Studies",
                description: "Detailed analysis of our most successful projects and their impact."
              },
              {
                title: "Industry Insights",
                description: "Expert perspectives on event management trends and innovations."
              },
              {
                title: "Behind the Scenes",
                description: "Exclusive glimpses into our creative process and team dynamics."
              },
              {
                title: "Client Stories",
                description: "Testimonials and success stories from our valued partners."
              },
              {
                title: "Event Updates",
                description: "Latest news and updates about upcoming events and projects."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 