"use client";
import { Service } from "@/types/service";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

type Props = {
  service: Service;
};

export const ServiceDetail = ({ service }: Props) => {
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.3 });

  const imageUrl = service?.image?.formats?.medium?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${service.image.formats.medium.url}`
    : null;

  return (
    <div>
      {/* Header Section */}
      <motion.section
        className="bubble-bg py-16 lg:py-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
            {service.heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            {service.sub_heading}
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -40 }}
              animate={
                imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              {imageUrl ? (
                <Image
                  unoptimized
                  src={imageUrl}
                  alt={service.heading}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                  width={service.image.formats.medium.width}
                  height={service.image.formats.medium.height}
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
                  Image non disponible
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, x: 40 }}
              animate={
                detailsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-brand-dark-blue mb-4">
                Une propreté sur laquelle vous pouvez compter.
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              {service.benefits && (
                <motion.ul
                  className="space-y-3 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={detailsInView ? "visible" : "hidden"}
                >
                  {service.benefits.split(",").map((benefit, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center text-left"
                    >
                      <i className="fas fa-check-circle text-brand-green mr-3"></i>
                      <span className="text-gray-700">{benefit.trim()}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link
                  href="/devis"
                  className="inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
