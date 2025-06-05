"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductPreview() {
  const previewItems = [
    "AI-powered speaker matching based on your event's unique DNA",
    "Intelligent agenda optimization for maximum impact",
    "Real-time analytics and audience engagement tracking"
  ];

  return (
    <section className="py-20 bg-[#6B85FE]/[0.03] dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The AI-native conference platform to elevate your event
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-2xl border relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B85FE]/20 to-transparent pointer-events-none"></div>
            <div className="h-[500px] w-full bg-card relative">
              <div className="absolute inset-0 p-6">
                <div className="h-12 border-b flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-[#6B85FE] flex items-center justify-center text-white font-semibold">P</div>
                    <span className="font-semibold">Your Conference Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                  <div className="col-span-1 border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Event Categories</h3>
                    {["Keynotes", "Panels", "Workshops", "Breakouts", "Lightning Talks"].map((category, index) => (
                      <div key={index} className={cn("p-3 rounded-md mb-2 text-sm", 
                        index === 0 ? "bg-[#6B85FE]/20 border-[#6B85FE] border" : "bg-muted"
                      )}>
                        {category}
                      </div>
                    ))}
                  </div>
                  
                  <div className="col-span-2 border rounded-lg p-4 overflow-hidden">
                    <h3 className="font-semibold mb-4">AI-Curated Matches</h3>
                    <div className="space-y-4 overflow-auto h-[calc(100%-2rem)]">
                      {[
                        { name: "Dr. Sarah Chen", role: "AI Ethics Researcher", org: "Stanford AI Lab", match: "98%" },
                        { name: "Michael Rodriguez", role: "Climate Tech Innovator", org: "Breakthrough Energy", match: "95%" },
                        { name: "Dr. Emily Patel", role: "Quantum Computing Expert", org: "IBM Research", match: "93%" },
                        { name: "James Wilson", role: "Future of Work Strategist", org: "McKinsey Digital", match: "91%" }
                      ].map((speaker, index) => (
                        <div key={index} className="border rounded-md p-4 flex gap-4 bg-card/50 dark:bg-white/5 hover:bg-card/80 dark:hover:bg-white/10 transition-colors">
                          <div className="h-12 w-12 rounded-full bg-muted"></div>
                          <div className="flex-1">
                            <h4 className="font-medium">{speaker.name}</h4>
                            <p className="text-sm text-muted-foreground">{speaker.role} at {speaker.org}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs bg-[#6B85FE]/10 text-[#6B85FE] px-2 py-1 rounded-full">{speaker.match} match</span>
                              <span className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-full">Available</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Transform your event planning with AI</h3>
            <p className="text-muted-foreground text-lg">
              Experience the future of conference organization with our intelligent platform that learns and adapts to your unique event needs.
            </p>
            
            <div className="space-y-4">
              {previewItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-[#6B85FE]/10 text-[#6B85FE] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}