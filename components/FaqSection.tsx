"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

const FaqItem: React.FC<{ faq: Faq; isOpen: boolean; onClick: () => void }> = ({
  faq,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left gap-4"
      >
        <h3
          className={`text-lg font-semibold transition-colors ${
            isOpen ? "text-brand-dark-blue" : "text-gray-700"
          }`}
        >
          {faq.question}
        </h3>
        <div
          className={`text-xl flex-shrink-0 ${
            isOpen ? "text-brand-dark-blue" : "text-gray-500"
          }`}
        >
          {isOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FaqSectionProps {
  subtitle?: string;
  title: string;
  faqs: Faq[];
  image: string;
  stat1: { number: string; text: string; label?: string };
  stat2: { number: string; text: string; label?: string };
}

const FaqSection: React.FC<FaqSectionProps> = ({
  subtitle,
  title,
  faqs,
  image,
  stat1,
  stat2,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-20 lg:py-28 bubble-bg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            {subtitle && (
              <p className="font-semibold text-gray-500 tracking-widest mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-8">
              {title}
            </h2>
            <div>
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <img
              src={image}
              alt="Professionnel du nettoyage au travail"
              className="rounded-lg shadow-2xl w-full"
            />
            <motion.div
              className="absolute -bottom-8 left-8 bg-brand-teal text-white p-6 rounded-lg shadow-lg w-48"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stat1.label && <p className="text-sm">{stat1.label}</p>}
              <span className="text-5xl font-bold">{stat1.number}</span>
              <p className="mt-1 text-sm">{stat1.text}</p>
            </motion.div>
            <motion.div
              className="absolute -top-8 right-8 bg-brand-dark-blue text-white p-6 rounded-lg shadow-lg w-48"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stat2.label && <p className="text-sm">{stat2.label}</p>}
              <span className="text-5xl font-bold">{stat2.number}</span>
              <p className="mt-1 text-sm">{stat2.text}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
