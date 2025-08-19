"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Collaborate() {
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
              Contact
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to make your next event truly unforgettable? Let's discuss your 
              vision and explore how I can bring it to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">karan@karanbhatia.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+971 50 XXX XXXX</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Dubai, UAE<br />
                    Available for events worldwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-muted/30 p-8 rounded-lg"
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Book Karan
              </h3>
              <p className="text-muted-foreground mb-6">
                Tell me about your event vision and I'll create a custom hosting plan 
                tailored to your needs.
              </p>
              <Button className="w-full">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 