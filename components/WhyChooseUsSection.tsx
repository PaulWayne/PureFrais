"use client";
import React from "react";
import { features } from "@/constants";
import { motion } from "framer-motion";
import { WhyUse } from "@/types/why-us";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const FeatureCard: React.FC<{
  icon: string;
  heading: string;
  sub_heading: string;
}> = ({ icon, heading, sub_heading }) => (
  <motion.div variants={itemVariants} className="text-center p-6">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-teal text-white text-4xl mx-auto mb-5">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{heading}</h3>
    <p className="text-gray-600">{sub_heading}</p>
  </motion.div>
);

const WhyChooseUsSection: React.FC<WhyUse> = ({
  heading,
  sub_heading,
  items,
}) => {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-2">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {sub_heading}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {items.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
