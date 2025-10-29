
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { aboutTeamMembers } from '@/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


const AboutTeamSection: React.FC = () => {
    return (
        <motion.section 
            className="bubble-bg py-20 lg:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div 
                        className="text-center lg:text-left"
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 }}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-semibold text-gray-500 tracking-widest mb-2">NOTRE ÉQUIPE</p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-6">
                            Découvrez nos experts de la <span className="bg-brand-dark-blue text-white px-2 py-1 rounded-md inline-block">Propreté</span>
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                            Notre succès repose sur une équipe de professionnels passionnés et dévoués. Chaque membre est formé pour offrir un service d'excellence et garantir votre entière satisfaction.
                        </p>
                        <button className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            À propos de nous
                        </button>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-2 gap-4"
                        variants={containerVariants}
                    >
                        {aboutTeamMembers.map((member, index) => (
                            <motion.div key={index} variants={itemVariants} className="aspect-square">
                                <img src={member.image} alt={`Membre de l'équipe ${index + 1}`} className="rounded-lg shadow-lg w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};
export default AboutTeamSection;