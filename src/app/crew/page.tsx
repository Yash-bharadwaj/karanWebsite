"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function Crew() {
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
              Crew
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the architects behind our extraordinary events. Our talented team 
              brings creativity, expertise, and passion to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Creative Director",
                role: "Vision & Innovation",
                description: "Leading our creative vision and ensuring every event tells a compelling story."
              },
              {
                name: "Event Manager",
                role: "Execution & Coordination",
                description: "Overseeing flawless event execution and managing all operational aspects."
              },
              {
                name: "Technical Director",
                role: "Technology & Production",
                description: "Managing cutting-edge technology and production elements for immersive experiences."
              },
              {
                name: "Client Relations",
                role: "Partnership & Growth",
                description: "Building lasting relationships and understanding client needs and objectives."
              },
              {
                name: "Design Team",
                role: "Visual & Spatial",
                description: "Creating stunning visual concepts and spatial designs that captivate audiences."
              },
              {
                name: "Production Crew",
                role: "Implementation & Support",
                description: "Executing technical setups and providing on-site support during events."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 