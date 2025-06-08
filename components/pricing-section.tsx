"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GetInTouchModal } from "@/components/get-in-touch-modal";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Custom plans for every event.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-card rounded-xl border shadow-md overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">Talk to us to size your project</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#6B85FE]/10 text-[#6B85FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Custom speaker sourcing for your specific event needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#6B85FE]/10 text-[#6B85FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">AI-powered matching based on your event agenda</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#6B85FE]/10 text-[#6B85FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Priority access to our premium speaker network</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-[#6B85FE]/10 text-[#6B85FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Dedicated support throughout your event planning</p>
              </div>
            </div>
            
            <GetInTouchModal>
              <Button 
                className="w-full bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
              >
                Get in touch
              </Button>
            </GetInTouchModal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}