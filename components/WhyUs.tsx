"use client";
import { Picture } from "@/types/picture";
import { HomeTestimonials } from "@/types/testimonial";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type WhyUsProps = {
  image: Picture;
  testimonial: HomeTestimonials;
};

const WhyUs: React.FC<WhyUsProps> = ({ image, testimonial }) => {
  return (
    <motion.section
      className="py-20 lg:py-28 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">
            POURQUOI NOUS ?
          </p>
          <motion.div
            className="w-16 h-1 bg-brand-teal mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              unoptimized
              src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
              alt={"PureFrais Pourquoi-nous?"}
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              width={image.formats.medium.width}
              height={image.formats.medium.height}
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl font-serif text-brand-teal/50 leading-none">
              &ldquo;
            </span>
            <p className="text-lg text-gray-700 italic mb-6">
              {testimonial.testimonials[0].text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={testimonial.testimonials[0].user.firstname}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-brand-dark-blue">
                  {`${testimonial.testimonials[0].user.firstname} ${testimonial.testimonials[0].user.lastname}`}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.testimonials[0].user.job}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
