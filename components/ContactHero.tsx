"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactHero: React.FC = () => {
  return (
    <motion.section
      className="bubble-bg py-8 lg:py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
          Nous sommes à votre écoute
        </h1>
        <div className="text-gray-500 mt-2">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactHero;
