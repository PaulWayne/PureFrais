"use client";
import React from 'react';
import { servicesOffered } from '@/constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const ServicesOffer: React.FC = () => {
  return (
    <motion.section
      className="py-20 lg:py-28 bg-slate-50/70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-2">Nos Services</h2>
          <motion.div
              className="w-16 h-1 bg-brand-teal mx-auto mt-2 mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-5 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <p className="font-semibold text-gray-500 tracking-widest mb-2">CE QUE NOUS OFFRONS</p>
                <h3 className="text-4xl font-extrabold text-brand-dark-blue leading-tight mb-4">Des services pour toute occasion</h3>
                <p className="text-gray-600">Que ce soit pour un entretien régulier ou un nettoyage en profondeur, nous avons la solution adaptée à vos besoins pour garantir un environnement sain et impeccable.</p>
            </motion.div>

            {/* Right Content - Services Grid */}
            <motion.div 
              className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {servicesOffered.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-4 group"
                >
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white border border-gray-200/80 shadow-sm mb-4 transition-all duration-300 group-hover:bg-brand-teal group-hover:text-white group-hover:scale-105">
                      <i className={`${service.icon} text-4xl text-brand-teal transition-colors duration-300 group-hover:text-white`}></i>
                  </div>
                  <h4 className="font-bold text-brand-dark-blue">{service.name}</h4>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesOffer;