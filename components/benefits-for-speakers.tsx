"use client";

import { motion } from "framer-motion";
import { CurrencyDollarIcon, TrophyIcon, ChartBarIcon, UsersIcon, MegaphoneIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JoinSpeakerNetworkModal } from "@/components/join-speaker-network-modal";
import { Button } from "@/components/ui/button";
import React from "react";

export function BenefitsForSpeakers() {
  const benefits = [
    {
      icon: <MegaphoneIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Build your platform",
      description: "Get in front of audiences who matter. Every talk is a chance to expand your reach, attract followers, and establish yourself as the go-to voice in your field."
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Generate real leads",
      description: "Connect with decision-makers and potential clients in the room. Our events attract engaged audiences who are actively looking for solutions you provide."
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Get paid what you're worth",
      description: "Skip the race to the bottom. Our curated network means premium rates for premium speakers. You set your fee, we find events that can meet it."
    },
    {
      icon: <TrophyIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Grow your network status",
      description: "The invite-only badge signals you're part of something exclusive. When organizers see you're Pairlight-vetted, they know you deliver."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="for-speakers" className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-3xl mx-auto lg:mx-0"
          >
            <span className="block text-sm font-semibold text-[#6B85FE] mb-2">For Speakers</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Turn your expertise into opportunity
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              You've done the work. You have insights worth sharing. But finding the right stages shouldn't be a second job.<br /><br />
              Pairlight connects you with events that match your expertise and pay what you're worth. No cold outreach. No RFP maze. Just quality gigs that build your reputation and grow your influence.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <JoinSpeakerNetworkModal>
                <Button 
                  size="lg" 
                  className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white px-8 py-6 text-lg"
                >
                  Apply to the Network
                </Button>
              </JoinSpeakerNetworkModal>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02] dark:border dark:border-[#6B85FE]/[0.1] h-full">
                  <CardHeader className="flex flex-col items-start gap-2 pb-0">
                    <CardTitle className="text-lg font-bold leading-tight mb-0">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}