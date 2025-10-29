"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fullTeamMembers, clients } from '@/constants';
import Link from 'next/link';

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


const OurTeamSection: React.FC = () => {
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
                {/* Team Info */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                    <motion.div 
                        className="text-center lg:text-left"
                        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 }}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-semibold text-gray-500 tracking-widest mb-2">NOTRE ÉQUIPE</p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-6">
                            Découvrez nos experts qui <span className="bg-brand-dark-blue text-white px-2 py-1 rounded-md inline-block">prennent soin</span> de vos espaces
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
                        {fullTeamMembers.map((member, index) => (
                            <motion.div key={index} variants={itemVariants} className="aspect-square">
                                <Link href={`/team/${member.id}`} className="group relative block w-full h-full">
                                    <img src={member.image} alt={member.name} className="rounded-lg shadow-lg w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-brand-dark-blue/70 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-xl font-bold">{member.name}</h3>
                                        <p className="text-brand-teal text-sm font-semibold">{member.title}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                {/* Clients */}
                <motion.div 
                    className="flex items-center justify-center flex-wrap gap-x-12 sm:gap-x-16 gap-y-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="font-bold text-lg text-brand-dark-blue mr-4">Nos Clients</span>
                    <hr className="w-16 border-gray-300 hidden sm:block" />
                    {clients.map((client, index) => (
                        <img key={index} src={client.logo} alt={client.name} className="h-5 sm:h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};
export default OurTeamSection;