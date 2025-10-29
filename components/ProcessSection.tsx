"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processSteps = [
  {
    id: 1,
    tab: 'Préparation',
    step: 'ÉTAPE 1',
    title: 'Préparation & Analyse Initiale du Site',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop',
    description: 'Notre équipe effectue une évaluation approfondie de la zone pour définir la meilleure stratégie de nettoyage. Nous préparons toutes les surfaces, protégeons les objets délicats et assurons un environnement de travail sécurisé.'
  },
  {
    id: 2,
    tab: 'Nettoyage',
    step: 'ÉTAPE 2',
    title: 'Nettoyage en Profondeur & Désinfection',
    image: 'https://images.unsplash.com/photo-1628177212439-d33c56e30541?q=80&w=1770&auto=format&fit=crop',
    description: 'À l\'aide de produits écologiques et d\'équipements de pointe, nous procédons à un nettoyage en profondeur. Cela inclut le dépoussiérage, le récurage et la désinfection pour éliminer efficacement la saleté, les germes et les allergènes.'
  },
  {
    id: 3,
    tab: 'Finitions',
    step: 'ÉTAPE 3',
    title: 'Finitions & Touches Finales',
    image: 'https://images.unsplash.com/photo-1541123437800-12e121364094?q=80&w=1770&auto=format&fit=crop',
    description: 'L\'étape finale consiste en une inspection méticuleuse pour garantir que rien n\'est oublié. Nous apportons les touches finales, organisons les objets et laissons votre espace étincelant de propreté, frais et prêt à être apprécié.'
  }
];

const ProcessSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeStep = processSteps.find(step => step.id === activeTab);

  return (
    <motion.section 
      className="py-20 lg:py-28 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">CE QUE NOUS OFFRONS</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">Notre processus en 3 étapes</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-100 rounded-lg p-1.5 space-x-1.5">
            {processSteps.map(step => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`px-8 py-3 font-semibold rounded-md transition-all duration-300 text-sm md:text-base relative ${activeTab === step.id ? 'text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                {activeTab === step.id && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 bg-brand-dark-blue rounded-md z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{step.tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative h-[450px]">
          <AnimatePresence mode="wait">
              {activeStep && (
              <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 absolute inset-0"
              >
                  <motion.div 
                    className="order-2 lg:order-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="font-semibold text-gray-500 tracking-widest mb-2">{activeStep.step}</p>
                    <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-6">{activeStep.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">{activeStep.description}</p>
                  </motion.div>
                  <motion.div 
                    className="order-1 lg:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img 
                        src={activeStep.image} 
                        alt={activeStep.title} 
                        className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[5/4]"
                    />
                  </motion.div>
              </motion.div>
              )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;