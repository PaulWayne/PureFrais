
"use client";
import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <main>
            {/* Hero Section */}
            <motion.section
                className="bubble-bg py-16 lg:py-20 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">{service.title}</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">{service.description}</p>
                </div>
            </motion.section>

            {/* Content Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                            />
                        </motion.div>

                        {/* Details */}
                        <motion.div
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">Une propreté sur laquelle vous pouvez compter.</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.longDescription}
                            </p>
                            
                            <motion.ul 
                                className="space-y-3 mb-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {service.benefits.map((benefit, index) => (
                                    <motion.li key={index} variants={itemVariants} className="flex items-center">
                                        <i className="fas fa-check-circle text-brand-green mr-3"></i>
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <Link 
                                    href="/contacts" 
                                    className="inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                                >
                                    Demander un devis
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
