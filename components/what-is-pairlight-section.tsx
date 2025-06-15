'use client';
import React from "react";
import { motion } from "framer-motion";

export function WhatIsPairlightSection() {
  return (
    <section id="what-is-pairlight" className="py-24 md:py-36 bg-[#6B85FE]/[0.03] dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02]">
      <div className="container mx-auto px-2 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="block text-xs font-bold tracking-widest text-[#6B85FE] uppercase mb-4">WHAT IS PAIRLIGHT</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-zinc-900 dark:text-white leading-tight">
            Conference organization, reimagined for the AI era.
          </h2>
          <p className="text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-200 mb-4">
            We believe the next wave of AI will bring people together, not push them apart. As digital content gets automated, live human insight becomes more valuable than ever.
          </p>
          <p className="text-lg md:text-xl font-light text-zinc-700 dark:text-zinc-200">
            Pairlight is the speaker network that connects the right voice with the right room. We use AI to surface talent you wouldn't find otherwise – the practitioners building tomorrow's solutions, the experts with fresh takes, the voices that make audiences lean forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 