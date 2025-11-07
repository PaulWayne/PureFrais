"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-100"
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-cyan-500">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 22.8436 43.8991 21.7056 43.7071 20.5925"
                  stroke="#86D5CB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M34.5 13.5L32.25 18.75"
                  stroke="#86D5CB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M30 11.25L28.5 15"
                  stroke="#86D5CB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-brand-dark-blue tracking-wide">
                Purefrais
              </span>
              <span className="block text-xs font-semibold text-gray-500 tracking-widest">
                NETTOYAGE PRO
              </span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-dark-blue font-semibold hover:text-cyan-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-brand-dark-blue text-2xl"
              aria-label="Open menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-50 p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-cyan-500">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 22.8436 43.8991 21.7056 43.7071 20.5925"
                      stroke="#86D5CB"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34.5 13.5L32.25 18.75"
                      stroke="#86D5CB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 11.25L28.5 15"
                      stroke="#86D5CB"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-bold text-brand-dark-blue tracking-wide">
                    Purefrais
                  </span>
                  <span className="block text-xs font-semibold text-gray-500 tracking-widest">
                    NETTOYAGE PRO
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-dark-blue text-3xl"
                aria-label="Close menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <nav className="flex flex-col items-center space-y-8 mt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl text-brand-dark-blue font-semibold hover:text-cyan-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
