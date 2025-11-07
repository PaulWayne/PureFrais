"use client";
import { HomeTestimonials, Testimonial } from "@/types/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  isHighlighted: boolean;
}> = ({ testimonial, isHighlighted }) => (
  <motion.div
    variants={itemVariants}
    className={`p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-full transform hover:-translate-y-2 transition-transform duration-300 ${
      isHighlighted ? "bg-brand-red text-white" : "bg-white text-gray-700"
    }`}
  >
    <span
      className={`text-6xl font-serif leading-none mb-4 ${
        isHighlighted ? "text-white/50" : "text-brand-red/50"
      }`}
    >
      &ldquo;
    </span>
    <p className="italic mb-6 flex-grow">{testimonial.text}</p>
    <div className="flex flex-col items-center mt-auto">
      <Image
        unoptimized
        src={`${process.env.NEXT_PUBLIC_API_URL}${testimonial.user.image.url}`}
        alt={testimonial.user.firstname}
        className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-white/50"
        width={testimonial.user.image.width}
        height={testimonial.user.image.height}
      />
      <h4
        className={`font-bold text-lg ${
          isHighlighted ? "text-white" : "text-brand-dark-blue"
        }`}
      >
        {`${testimonial.user.firstname} ${testimonial.user.lastname}`}
      </h4>
      <p
        className={`text-sm ${
          isHighlighted ? "text-white/80" : "text-gray-500"
        }`}
      >
        {testimonial.user.job}
      </p>
    </div>
  </motion.div>
);

const TestimonialsSection: React.FC<HomeTestimonials> = ({
  heading,
  sub_heading,
  testimonials,
}) => {
  return (
    <motion.section
      className=" py-16 lg:py-24"
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
        <div className="text-center mb-16">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">
            {heading}
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
            {sub_heading}
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isHighlighted={index === 1}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
