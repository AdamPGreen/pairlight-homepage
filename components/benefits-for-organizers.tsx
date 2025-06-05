"use client";

import { motion } from "framer-motion";
import { ClockIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BenefitsForOrganizers() {
  const benefits = [
    {
      icon: <ClockIcon className="h-8 w-8 text-[#6B85FE]" />,
      title: "Instant shortlist",
      description: "Skip weeks of outreach."
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-[#6B85FE]" />,
      title: "Premium network",
      description: "Invite-only talent keeps sessions fresh and on-trend."
    },
    {
      icon: <StarIcon className="h-8 w-8 text-[#6B85FE]" />,
      title: "Built on trust",
      description: "Every speaker graded by real event feedback."
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
    <section id="for-organizers" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Benefits for Organizers
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-[#6B85FE]/10">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}