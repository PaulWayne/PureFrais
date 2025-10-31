"use client";
import React from "react";
import { services } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ServiceCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  slug: string;
}> = ({ icon, title, description, slug }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col"
    whileHover={{
      y: -8,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
    }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-5xl text-brand-teal mb-4">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-brand-dark-blue mb-2 flex-grow">
      {title}
    </h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      href={`/services/${slug}`}
      className="font-semibold text-brand-dark-blue hover:text-brand-teal transition-colors mt-auto"
    >
      En savoir plus <i className="fas fa-arrow-right ml-1"></i>
    </Link>
  </motion.div>
);

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      className="py-16 lg:py-24 bg-soft-teal mt-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-2">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services de nettoyage pour
            répondre à tous vos besoins, que ce soit pour votre domicile ou
            votre bureau.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ perspective: 1000 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
