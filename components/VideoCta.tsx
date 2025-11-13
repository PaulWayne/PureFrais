"use client";
import React from "react";
import { motion } from "framer-motion";

const VideoCta: React.FC = () => {
  return (
    <section
      className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://storage.googleapis.com/aai-web-samples/public/pro-builder/cleaning-video-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <motion.button
        className="relative z-10 w-24 h-24 rounded-full border-2 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="font-semibold text-sm tracking-widest transition-colors group-hover:text-brand-teal">
          LECTURE
        </span>
      </motion.button>
    </section>
  );
};

export default VideoCta;
