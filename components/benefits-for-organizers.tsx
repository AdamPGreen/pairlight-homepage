"use client";

import { motion } from "framer-motion";
import { ClockIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GetInTouchModal } from "@/components/get-in-touch-modal";

export function BenefitsForOrganizers() {
  const benefits = [
    {
      icon: <ClockIcon className="h-6 w-6 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Instant shortlist",
      description: "Get matched speakers in minutes. You focus on the vision, we handle the hunt."
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Premium network",
      description: "Access speakers you won't find anywhere else. Curated talent that makes your event stand out."
    },
    {
      icon: <StarIcon className="h-6 w-6 text-[#6B85FE] dark:text-[#8B9FFF]" />,
      title: "Built on trust",
      description: "Every speaker rated by real organizers. No guesswork, just proven performers."
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
    <section id="for-organizers" className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <span className="block text-sm font-semibold text-[#6B85FE] mb-2">For Organizers</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              You know what makes a great event. We help you find the people who can deliver it.
            </h2>
            <p className="text-xl text-muted-foreground">
              Finding the right speakers shouldn't be your most time-consuming task. Skip the endless Google searches and cold emails. Get a curated shortlist in minutes, not weeks.
            </p>
            <div className="mt-6">
              <GetInTouchModal>
                <Button 
                  className="bg-[#6B85FE] hover:bg-[#5A73EB] text-white"
                >
                  Learn More
                </Button>
              </GetInTouchModal>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gradient-to-br dark:from-[#6B85FE]/[0.08] dark:via-[#6B85FE]/[0.05] dark:to-[#6B85FE]/[0.02] dark:border dark:border-[#6B85FE]/[0.1]">
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