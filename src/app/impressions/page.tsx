"use client";

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function Impressions() {
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
              Testimonials
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from valued clients about their experiences and the impact 
              Karan has had on their events and audiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Your energy, charm, and engaging style were truly the highlight of our EKAS event",
                author: "Monika Bhatia",
                company: "Emirates Airlines"
              },
              {
                quote: "Hi Karan.. we all enjoyed a lot!! Thanks for making our event so special and accommodating all last minute requests. Everyone at the after party is also praising how you kept everyone engaged and happy! Looking forward to collaborating again, sometime! ✨😊",
                author: "Chanpreet Kaur",
                company: "Indoguna, HR Manager"
              },
              {
                quote: "He made the Doctors laugh and the Doctors dance. Can you believe it?",
                author: "Dr Sanjay Parashar",
                company: "Celebrity Plastic Surgeon"
              },
              {
                quote: "Hands down the best emcee in the game! Electric energy",
                author: "Simran",
                company: "Bride"
              },
              {
                quote: "You bought energy and vibes and made our wedding incredible; it wouldn't have been same without you",
                author: "Sabby",
                company: "Groom"
              },
              {
                quote: "This show wouldn't have been half of what it was without you",
                author: "Fawaz Roshan",
                company: "Groom"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-primary text-2xl">"</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 