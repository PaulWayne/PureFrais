"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface VideoCTAProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc: string;
  posterSrc?: string;
  reversed?: boolean;
  variant?: "split" | "overlay";
}

export default function VideoCTA({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoSrc,
  posterSrc,
  reversed = false,
  variant = "split",
}: VideoCTAProps) {
  // --- 🎥 OVERLAY VARIANT ---
  if (variant === "overlay") {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden rounded-2xl"
      >
        {/* --- VIDEO BACKGROUND with cinematic animation --- */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.05, filter: "blur(8px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>

        {/* --- Overlay gradient --- */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* --- TEXT CONTENT --- */}
        <div className="relative z-10 flex min-h-[65vh] flex-col items-center justify-center px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-5xl"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl text-lg text-gray-200"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-200"
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // --- 🧩 SPLIT VARIANT ---
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row ${
          reversed ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* VIDEO BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-2xl shadow-lg md:w-1/2"
        >
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
            className="h-auto w-full object-cover"
            initial={{ scale: 1.05, filter: "blur(6px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex w-full flex-col items-start justify-center md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-gray-600 md:text-lg">{subtitle}</p>
          )}

          <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
            <Button asChild size="lg" className="rounded-full">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
