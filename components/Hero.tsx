"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Hero as HeroType } from "@/types/hero";
import Link from "next/link";

const Hero: React.FC<HeroType> = ({ heading, sub_heading, CTAs, image }) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [10, -10]);
  const rotateY = useTransform(x, [0, 400], [-10, 10]);

  function handleMouse(event: React.MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const title = "Un nettoyage impeccable, rapide et efficace !";
  const titleWords = heading.split(" ");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bubble-bg overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold text-brand-dark-blue tracking-widest mb-3">
              {sub_heading}
            </p>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-brand-dark-blue leading-tight mb-8"
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={titleWordVariants}
                  className="inline-block mr-3"
                >
                  {word === "impeccable," ? (
                    <span className="relative inline-block">
                      <span className="text-brand-green z-10 relative px-1">
                        impeccable,
                      </span>
                      <span className="absolute left-0 -bottom-1 w-full h-3.5 bg-brand-green/80 z-0"></span>
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>
            <Link href={CTAs[0].URL}>
              <motion.button
                className="bg-brand-teal text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {CTAs[0].text}
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouse}
            style={{ perspective: 800 }}
          >
            <motion.div className="relative" style={{ rotateX, rotateY }}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${image.formats.medium.url}`}
                alt="Nettoyeur professionnel souriant"
                className="relative w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              />
              {/* Floating Cards */}
              <motion.div
                className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl flex items-center gap-4 animate-float"
                style={{
                  z: 20,
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transition: "transform 0.1s",
                }}
              >
                <div className="text-3xl text-cyan-500">
                  <i className="fas fa-wand-sparkles"></i>
                </div>
                <div>
                  <p className="font-bold text-lg text-brand-dark-blue">
                    20 Ans
                  </p>
                  <p className="text-sm text-gray-500">d'Expérience</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute top-16 -right-16 bg-[#C34A36] text-white p-4 rounded-lg shadow-xl animate-float"
                style={{
                  animationDelay: "0.5s",
                  z: 20,
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transition: "transform 0.1s",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-amber-400 p-3 rounded-md">
                    <i className="fas fa-medal text-xl text-white"></i>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Service</p>
                    <p className="text-sm text-gray-200">Professionnel</p>
                  </div>
                </div>
                <div className="mt-2 text-left flex items-center">
                  <i className="fas fa-star text-amber-400"></i>
                  <span className="font-bold ml-1">4.9</span>
                  <span className="text-sm text-gray-200 ml-2">
                    (7.8k avis)
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
