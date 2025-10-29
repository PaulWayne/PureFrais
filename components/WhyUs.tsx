"use client";
import React from 'react';
import { whyUsContent, clients } from '@/constants';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <motion.section
      className="py-20 lg:py-28 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">POURQUOI NOUS ?</p>
           <motion.div
              className="w-16 h-1 bg-brand-teal mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <img src={whyUsContent.image} alt="Notre Équipe" className="rounded-lg shadow-xl w-full"/>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <span className="text-6xl font-serif text-brand-teal/50 leading-none">&ldquo;</span>
                <p className="text-lg text-gray-700 italic mb-6">{whyUsContent.testimonial}</p>
                <div className="flex items-center gap-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt={whyUsContent.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h4 className="font-bold text-brand-dark-blue">{whyUsContent.author}</h4>
                        <p className="text-sm text-gray-500">{whyUsContent.title}</p>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <h4 className="font-bold text-brand-dark-blue whitespace-nowrap">Nous travaillons avec les meilleures marques</h4>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
                {clients.map((client, index) => (
                    <img key={index} src={client.logo} alt={client.name} className="h-5" />
                ))}
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;