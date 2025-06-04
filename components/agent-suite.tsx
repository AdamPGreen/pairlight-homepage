"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, MessageSquare, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AgentSuite() {
  const agents = [
    {
      icon: <Search className="h-6 w-6" style={{ stroke: "#6B85FE" }} />,
      name: "Match Agent",
      description: "Delivers a ranked shortlist in minutes based on your agenda, audience and slot format.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <UserPlus className="h-6 w-6" style={{ stroke: "#6B85FE" }} />,
      name: "Recruit Agent",
      description: "Continuously scouts and qualifies fresh voices, expanding the speaker database.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <MessageSquare className="h-6 w-6" style={{ stroke: "#6B85FE" }} />,
      name: "Feedback Agent",
      description: "Captures ratings and qualitative notes post-event to sharpen future recommendations.",
      gradient: "from-[#6B85FE] to-[#8B9FFF]"
    },
    {
      icon: <Calendar className="h-6 w-6" style={{ stroke: "#6B85FE" }} />,
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
    <section className="py-24 bg-[#6B85FE]/[0.03] dark:bg-[#6B85FE]/[0.02] overflow-hidden">
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
              <Card className="relative h-full p-6 bg-background/80 backdrop-blur-sm border-2 border-transparent hover:border-[#6B85FE]/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient}`} />
                </div>
                
                <div className="relative">
                  <div className="mb-6">
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${agent.gradient} p-[1px] overflow-hidden`}>
                      <div className="absolute inset-0 bg-background/90 rounded-[11px] m-[1px]" />
                      <div className="relative flex items-center justify-center h-full">
                        {agent.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors duration-300">
                    {agent.name}
                  </h3>
                  
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
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