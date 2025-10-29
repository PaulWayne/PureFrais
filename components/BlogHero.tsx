
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero: React.FC = () => {
    return (
        <motion.section 
            className="bubble-bg py-16 lg:py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">Blog</h1>
                <div className="text-gray-500 mt-2">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </motion.section>
    );
};

export default BlogHero;