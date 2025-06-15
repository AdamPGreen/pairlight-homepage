'use client';
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const organizers = [
  { label: "Internal comms leads", details: "Drive engagement and alignment through speakers who actually move the needle." },
  { label: "Event managers", details: "Deliver flawless events without the usual speaker sourcing headaches." },
  { label: "Marketing and brand teams", details: "Book speakers who amplify your message and elevate your brand." },
  { label: "Agency producers", details: "Impress clients with premium talent that makes you look like a hero." },
];

const speakers = [
  { label: "Thought leaders", details: "Shape conversations around where your industry is heading." },
  { label: "Subject matter experts", details: "Share deep knowledge that audiences can't get anywhere else." },
  { label: "Frontline practitioners", details: "Tell the real story of what's working (and what isn't) right now." },
  { label: "Strategic storytellers", details: "Turn your leadership lessons into narratives that stick." },
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
                  <div key={org.label} className="flex flex-col items-start gap-1 py-2">
                    <span className="text-base font-semibold text-[#6B85FE]">{org.label}</span>
                    <p className="text-sm text-muted-foreground mt-1">{org.details}</p>
                  </div>
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
                  <div key={sp.label} className="flex flex-col items-start gap-1 py-2">
                    <span className="text-base font-semibold text-[#6B85FE]">{sp.label}</span>
                    <p className="text-sm text-muted-foreground mt-1">{sp.details}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 