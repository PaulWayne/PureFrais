"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "@/types/service";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

type ServicesOfferProps = {
  data: ServicesOfferData;
};

type ServicesOfferData = {
  documentId: string;
  heading: string;
  sub_heading: string;
  description: string;
  services: Service[];
};

const ServicesOffer: React.FC<ServicesOfferProps> = ({ data }) => {
  const { heading, sub_heading, description, services } = data;

  return (
    <motion.section
      className="py-20 lg:py-28 bg-slate-50/70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-blue mb-2">
            Nos Services
          </h2>
          <motion.div
            className="w-16 h-1 bg-brand-teal mx-auto mt-2 mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          >
            <p className="font-semibold text-gray-500 tracking-widest uppercase">
              {heading}
            </p>
            <h3 className="text-4xl font-extrabold text-brand-dark-blue leading-tight">
              {sub_heading}
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
          </motion.div>

          {/* Right Content: Services Grid */}
          <motion.div
            variants={containerVariants}
            className="
              grid 
              grid-cols-2 sm:grid-cols-3 
              gap-x-8 gap-y-10 
              justify-items-center
            "
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <Link
                  href={`/our-services/${service.slug}`}
                  className="flex flex-col items-center group"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm mb-4 transition-all duration-300 group-hover:bg-brand-teal group-hover:scale-105">
                    <i
                      className={`${service.icon} text-3xl text-brand-teal transition-colors duration-300 group-hover:text-white`}
                    ></i>
                  </div>
                  <h4 className="font-semibold text-brand-dark-blue group-hover:text-brand-teal transition-colors duration-300">
                    {service.heading}
                  </h4>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesOffer;
