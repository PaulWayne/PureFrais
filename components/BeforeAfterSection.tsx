"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { demoData } from "@/constants";
import { Work } from "@/types/demo";
import Image from "next/image";

const BeforeAfterCard: React.FC<{ item: Work }> = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { before, after } = item;
  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPos(percentage);
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchEnd = () => setIsDragging(false);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8">
        <h3 className="text-2xl font-bold text-brand-dark-blue">
          {item.heading}
        </h3>
        <p className="text-sm font-semibold text-gray-500 mt-1 mb-4">
          {item.dateAt}
        </p>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="bg-slate-100 p-3 rounded-md text-sm">
          <span className="font-bold text-brand-dark-blue">Surface:</span>
          <span className="text-gray-700 ml-2">{item.description}</span>
        </div>
      </div>
      <div className="lg:w-1/2 p-4 lg:p-8">
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] select-none rounded-lg overflow-hidden"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <Image
            unoptimized
            src={`${process.env.NEXT_PUBLIC_API_URL}${after.formats.medium.url}`}
            alt={`${item.heading}`}
            width={after.formats.medium.width}
            height={after.formats.medium.height}
            className="absolute w-full h-full object-cover"
            draggable="false"
          />

          <div
            className="absolute w-full h-full object-cover overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              unoptimized
              src={`${process.env.NEXT_PUBLIC_API_URL}${before.formats.medium.url}`}
              alt={`${item.heading}`}
              width={before.formats.medium.width}
              height={before.formats.medium.height}
              className="absolute w-full h-full object-cover"
              draggable="false"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -ml-5 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center pointer-events-none">
              <i className="fas fa-arrows-alt-h text-brand-dark-blue"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
type Props = {
  works: Work[];
};
const BeforeAfterSection: React.FC<Props> = ({ works }) => {
  return (
    <motion.section
      className="py-20 lg:py-28 bg-soft-teal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16">
          {works.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BeforeAfterSection;
