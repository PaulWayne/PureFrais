"use client";
import React from 'react';
import { testimonials } from '@/constants';
import { motion } from 'framer-motion';

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


const TestimonialCard: React.FC<{ quote: string; name: string; title: string; image: string; isHighlighted: boolean; }> = ({ quote, name, title, image, isHighlighted }) => (
    <motion.div 
      variants={itemVariants}
      className={`p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full transform hover:-translate-y-2 transition-transform duration-300 ${isHighlighted ? 'bg-brand-red text-white' : 'bg-white text-gray-700'}`}
    >
        <span className={`text-6xl font-serif leading-none mb-4 ${isHighlighted ? 'text-white/50' : 'text-brand-red/50'}`}>&ldquo;</span>
        <p className="italic mb-6 flex-grow">
            {quote}
        </p>
        <div className="flex flex-col items-center mt-auto">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-white/50" />
            <h4 className={`font-bold text-lg ${isHighlighted ? 'text-white' : 'text-brand-dark-blue'}`}>{name}</h4>
            <p className={`text-sm ${isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>{title}</p>
        </div>
    </motion.div>
);


const TestimonialsSection: React.FC = () => {
  return (
    <motion.section 
      className="bubble-bg py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">TÉMOIGNAGES</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">Ce que disent nos clients</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} isHighlighted={index === 1} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;