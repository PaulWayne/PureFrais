"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  heading: string;
  sub_heading: string;
};
const DemoHero: React.FC<Props> = ({ heading, sub_heading }) => {
  return (
    <motion.section
      className="bubble-bg py-16 lg:py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
          {heading}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          {sub_heading}
        </p>
      </div>
    </motion.section>
  );
};

export default DemoHero;
