'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const organizers = [
  { label: "Internal comms leads", color: "bg-[#6B85FE]/10 text-[#6B85FE]", details: "Drive communication strategy and employee engagement within organizations." },
  { label: "Event managers", color: "bg-[#6B85FE]/10 text-[#6B85FE]", details: "Plan, coordinate, and execute impactful events from start to finish." },
  { label: "Marketing and brand teams", color: "bg-[#6B85FE]/10 text-[#6B85FE]", details: "Shape brand perception and amplify event reach through creative campaigns." },
  { label: "Agency producers", color: "bg-[#6B85FE]/10 text-[#6B85FE]", details: "Deliver seamless event experiences for clients, managing logistics and talent." },
];

const speakers = [
  { label: "Experienced practitioners and domain experts", color: "bg-[#6B85FE]/10 text-[#6B85FE]" },
  { label: "Rising voices with a strong point of view", color: "bg-[#6B85FE]/10 text-[#6B85FE]" },
  { label: "People who've done the work and have something real to share", color: "bg-[#6B85FE]/10 text-[#6B85FE]" },
];

export function WhoWeWorkWithSection() {
  return (
    <section id="who-we-work-with" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-14 text-center text-animated-gradient"
          style={{ fontFamily: 'Satoshi-Variable, Satoshi, sans-serif' }}
        >
          Who we work with
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Organizers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="h-full border-none shadow-xl bg-gradient-to-br from-[#6B85FE]/[0.07] via-white to-[#D47AFF]/[0.04] dark:from-[#6B85FE]/[0.12] dark:to-[#D47AFF]/[0.08] backdrop-blur-md">
              <CardHeader className="pb-2">
                <h3 className="text-2xl font-semibold mb-1">Organizers</h3>
                <span className="text-muted-foreground text-sm">For those who shape the experience</span>
              </CardHeader>
              <CardContent className="pt-2 space-y-4">
                {organizers.map((org, i) => (
                  <HoverCard key={org.label}>
                    <HoverCardTrigger asChild>
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <Badge className={`rounded-lg px-3 py-2 font-medium text-base ${org.color} group-hover:scale-105 transition-transform duration-200`}>
                          {org.label}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <span className="text-base font-semibold text-[#6B85FE]">{org.label}</span>
                      <p className="text-sm text-muted-foreground mt-2">{org.details}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          {/* Speakers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="h-full border-none shadow-xl bg-gradient-to-br from-[#D47AFF]/[0.07] via-white to-[#6B85FE]/[0.04] dark:from-[#D47AFF]/[0.12] dark:to-[#6B85FE]/[0.08] backdrop-blur-md">
              <CardHeader className="pb-2">
                <h3 className="text-2xl font-semibold mb-1">Speakers</h3>
                <span className="text-muted-foreground text-sm">For those who move the room</span>
              </CardHeader>
              <CardContent className="pt-2 space-y-4">
                {speakers.map((sp, i) => (
                  <HoverCard key={sp.label}>
                    <HoverCardTrigger asChild>
                      <div className="flex items-center gap-3 cursor-pointer group">
                        <Badge className={`rounded-lg px-3 py-2 font-medium text-base ${sp.color} group-hover:scale-105 transition-transform duration-200`}>
                          {sp.label}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <span className="text-base font-semibold text-[#6B85FE]">{sp.label}</span>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 