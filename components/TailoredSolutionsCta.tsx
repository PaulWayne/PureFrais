
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TailoredSolutionsCta: React.FC = () => {
  return (
    <motion.section 
      className="bg-brand-teal text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <p className="font-semibold tracking-widest mb-2">À PROPOS DE NOUS</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold max-w-3xl mx-auto mb-4">
            Des solutions sur mesure pour vos besoins uniques : notre équipe expérimentée garantit un nettoyage impeccable
        </h2>
        <p className="font-semibold">Pierre Bowman</p>
        <p className="text-sm opacity-80">PDG de Purefrais</p>
      </div>
    </motion.section>
  );
};

export default TailoredSolutionsCta;