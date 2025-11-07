"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cleaniness } from "@/types/cleanliness";

const cleanlinessServices = [
  { icon: "fas fa-pump-soap", title: "Nettoyage en profondeur" },
  { icon: "fas fa-spray-can-sparkles", title: "Désinfection de surfaces" },
  { icon: "fas fa-broom", title: "Nettoyage général" },
  { icon: "fas fa-leaf", title: "Nettoyage écologique" },
];

const CleanlinessCard: React.FC<{
  icon: string;
  title: string;
  delay: number;
}> = ({ icon, title, delay }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <div className="text-5xl text-brand-teal mb-4">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{title}</h3>
    <a
      href="#"
      className="font-semibold text-brand-dark-blue hover:text-brand-teal transition-colors"
    >
      <i className="fas fa-arrow-right"></i>
    </a>
  </motion.div>
);

const CleanlinessSection: React.FC<Cleaniness> = ({
  heading,
  sub_heading,
  description,
  services,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-semibold text-gray-500 tracking-widest mb-2">
              {heading}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-6">
              {sub_heading}
            </h2>
          </div>
          <div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-200 pt-16">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <CleanlinessCard
                icon={service.icon}
                title={service.heading}
                delay={index * 0.15}
              />
              {index < cleanlinessServices.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 h-full w-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanlinessSection;
