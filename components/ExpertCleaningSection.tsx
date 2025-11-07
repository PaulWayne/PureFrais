"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExpertCleaning } from "@/types/expert-cleaning";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: 25, label: "Services" },
  { number: 18, label: "Experts" },
  { number: 10, label: "Années" },
  { number: 3, label: "Agences" },
];

const StatBubble: React.FC<{
  number: number;
  label: string;
  delay: number;
}> = ({ number, label, delay }) => (
  <motion.div
    className="text-center flex justify-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <div className="relative">
      <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
        <div className="text-center">
          <p className="text-4xl font-bold text-brand-dark-blue">{number}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
      <div className="absolute -inset-2 rounded-full border border-dashed border-gray-300 animate-spin-slow"></div>
    </div>
  </motion.div>
);

const ExpertCleaningSection: React.FC<ExpertCleaning> = ({
  heading,
  sub_heading,
  description,
  cardText,
  value,
  stats,
  image,
  tips,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 bg-soft-teal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-brand-teal rounded-lg w-full h-auto p-4">
              <Image
                unoptimized
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.large.url}`}
                alt={`${image.alternativeText}`}
                className="rounded-md shadow-lg w-full h-full object-cover aspect-[5/4]"
                width={image.formats.small.width}
                height={image.formats.small.height}
              />
            </div>
            <div className="absolute -bottom-10 right-10 bg-brand-dark-blue text-white p-6 rounded-lg shadow-xl w-60">
              <h4 className="text-xl font-bold">{cardText}</h4>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold text-gray-500 tracking-widest mb-2">
              {heading}
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue leading-tight mb-6">
              {sub_heading}
            </h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
              {tips.length > 0
                ? tips.map((tip, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="fas fa-check text-brand-teal mr-3"></i>
                      {tip.text}
                    </li>
                  ))
                : null}
            </ul>
            <Link
              href=""
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              {value}
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, index) => (
            <StatBubble
              key={index}
              number={Number(stat.value)}
              label={stat.text}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
      <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
    </section>
  );
};

export default ExpertCleaningSection;
