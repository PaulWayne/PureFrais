"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SideBar: React.FC = () => {
    return (
        <motion.div 
            className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block rounded-l-md overflow-hidden shadow-lg"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <div className="flex flex-col">
                <a href="#" className="bg-brand-red text-white w-12 h-12 flex items-center justify-center hover:bg-red-700 transition-colors">
                    <i className="fas fa-calendar-alt"></i>
                </a>
                <a href="#" className="bg-brand-red text-white w-12 h-12 flex items-center justify-center hover:bg-red-700 transition-colors border-y border-white/20">
                    <i className="fas fa-tag"></i>
                </a>
                <a href="#" className="bg-brand-red text-white w-12 h-12 flex items-center justify-center hover:bg-red-700 transition-colors">
                    <i className="fas fa-file-alt"></i>
                </a>
            </div>
        </motion.div>
    );
}

export default SideBar;
