"use client";
import React from 'react';
import { cleaningTipsPosts } from '@/constants';
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

const TipCard: React.FC<{ post: typeof cleaningTipsPosts[0] }> = ({ post }) => (
    <motion.div variants={itemVariants} className="bg-white rounded-lg overflow-hidden group">
        <div className="overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6 text-left">
            <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">{post.category}</p>
            <h3 className="text-lg font-bold text-brand-dark-blue mb-3 min-h-[3.5rem] group-hover:text-brand-teal transition-colors">
                <a href="#">{post.title}</a>
            </h3>
            <p className="text-sm text-gray-500">{post.date} · {post.comments} Commentaires</p>
        </div>
    </motion.div>
);

const CleaningTipsSection: React.FC = () => {
    return (
        <motion.section
            className="py-20 lg:py-28 bg-slate-50/70"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <p className="font-semibold text-gray-500 tracking-widest mb-2">NOTRE BLOG</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">Conseils de nettoyage</h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                >
                    {cleaningTipsPosts.map((post, index) => (
                        <TipCard key={index} post={post} />
                    ))}
                </motion.div>
                
                <div className="flex justify-center items-center space-x-2 mt-12">
                    <button aria-label="Go to slide 1" className="w-2.5 h-2.5 bg-brand-dark-blue rounded-full"></button>
                    <button aria-label="Go to slide 2" className="w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-brand-dark-blue/80 transition-colors"></button>
                    <button aria-label="Go to slide 3" className="w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-brand-dark-blue/80 transition-colors"></button>
                    <button aria-label="Go to slide 4" className="w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-brand-dark-blue/80 transition-colors"></button>
                </div>
            </div>
        </motion.section>
    );
}

export default CleaningTipsSection;