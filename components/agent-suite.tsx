"use client";

import { motion } from "framer-motion";
import { MagnifyingGlassIcon, UserPlusIcon, ChatBubbleLeftRightIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui/card";

export function AgentSuite() {
  const agents = [
    {
      icon: <MagnifyingGlassIcon className="h-6 w-6 dark:text-[#8B9FFF]" style={{ stroke: "#6B85FE" }} />,
      name: "Match Agent",
      description: "Delivers a ranked shortlist in minutes based on your agenda, audience and slot format.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <UserPlusIcon className="h-6 w-6 dark:text-[#8B9FFF]" style={{ stroke: "#6B85FE" }} />,
      name: "Recruit Agent",
      description: "Continuously scouts and qualifies fresh voices, expanding the speaker database.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 dark:text-[#8B9FFF]" style={{ stroke: "#6B85FE" }} />,
      name: "Feedback Agent",
      description: "Captures ratings and qualitative notes post-event to sharpen future recommendations.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <CalendarIcon className="h-6 w-6 dark:text-[#8B9FFF]" style={{ stroke: "#6B85FE" }} />,
      name: "Agenda Agent",
      description: "Suggests session titles, formats and flow, keeping your entire program cohesive.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
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
    <section className="py-24 bg-[#6B85FE]/[0.03] dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Introducing the Pairlight Agent Suite
          </h2>
          <p className="text-xl text-muted-foreground">
            We're reimagining conference organization for the AI era. Every aspect of event planning, 
            from speaker selection to agenda crafting, is enhanced by intelligent automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="relative h-full p-6 bg-background/90 backdrop-blur-md border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:bg-white/5 dark:border-white/20 dark:shadow-[0_4px_20px_rgba(107,133,254,0.08)] transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center mb-6">
                    {agent.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    {agent.name}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {agent.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="text-sm">
            All agents work in concert to deliver a seamless experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}