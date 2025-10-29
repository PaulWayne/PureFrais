
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: 25, label: 'Services' },
    { number: 18, label: 'Experts' },
    { number: 10, label: 'Années' },
    { number: 3, label: 'Agences' }
];

const StatBubble: React.FC<{ number: number; label: string; delay: number }> = ({ number, label, delay }) => (
    <motion.div
        className="text-center flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay }}
    >
        <div className="relative">
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
                <div className="text-center">
                    <p className="text-4xl font-bold text-brand-dark-blue">{number}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                </div>
            </div>
            <div className="absolute -inset-2 rounded-full border border-dashed border-gray-300 animate-spin-slow"></div>
        </div>
    </motion.div>
);

const ExpertCleaningSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-28 bg-slate-50/70 bubble-bg">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-brand-teal rounded-lg w-full h-auto p-4">
                            <img src="https://storage.googleapis.com/aai-web-samples/public/pro-builder/cleaning-lady-about.png" alt="Nettoyeur expert" className="rounded-md w-full" />
                        </div>
                        <div className="absolute -bottom-10 right-10 bg-brand-dark-blue text-white p-6 rounded-lg shadow-xl w-60">
                            <h4 className="text-xl font-bold">Nettoyage rapide et professionnel</h4>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-semibold text-gray-500 tracking-widest mb-2">QUI SOMMES-NOUS</p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-6">
                            Un service de nettoyage expert à votre disposition
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Forts de notre expérience, nous nous engageons à fournir des prestations de nettoyage qui dépassent vos attentes, en alliant savoir-faire et technologies de pointe.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-brand-teal mr-3"></i>
                                Des solutions sur mesure pour chaque client
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check text-brand-teal mr-3"></i>
                                Un personnel formé aux techniques les plus récentes
                            </li>
                        </ul>
                        <button className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                            Nos Atouts
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
                    {stats.map((stat, index) => (
                        <StatBubble key={index} number={stat.number} label={stat.label} delay={index * 0.15} />
                    ))}
                </div>
            </div>
             <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default ExpertCleaningSection;