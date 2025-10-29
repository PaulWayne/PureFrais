"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ImpeccableCtaSection: React.FC = () => {
  return (
    <motion.section 
      className="bg-brand-teal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Nous créons une propreté impeccable
          </h2>
          <motion.a 
            href="/about-us" 
            className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-teal transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            À propos de nous
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default ImpeccableCtaSection;