"use client";

import { motion } from "framer-motion";
import { DocumentTextIcon, UserGroupIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function HowItWorks() {
  const steps = [
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Insert your brief",
      description: "Topic, format, goals."
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Live shortlist builds",
      description: "AI streams bios, fees and ratings in real time."
    },
    {
      icon: <PaperAirplaneIcon className="h-8 w-8 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Review and approve",
      description: "Our agents handle outreach and coordination."
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
    <section id="how-it-works" className="py-20 bg-[#6B85FE]/[0.03] dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How it works
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center relative"
            >
              <div className="mb-4 p-4 bg-white dark:bg-background rounded-full shadow-sm border">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                  <div className="h-0.5 w-12 bg-border"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}