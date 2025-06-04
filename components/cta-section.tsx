"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 bg-[#6B85FE]/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to fill your lineup?
          </h2>
          
          <Button 
            size="lg" 
            className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
          >
            Get speaker matches
          </Button>
        </motion.div>
      </div>
    </section>
  );
}