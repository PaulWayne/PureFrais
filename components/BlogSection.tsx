"use client";
import { Article, Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

type Props = {
  post: Article;
};
// FIX: Changed component definition to use React.FC to correctly handle React-specific props like 'key'.
const BlogPostCard: React.FC<Props> = ({ post }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col h-full"
    >
      <Link href="/blog" className="block h-full flex flex-col">
        <div className="relative overflow-hidden h-56">
          {post.image && (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.formats.medium.url}`}
              alt={post.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              width={post.image?.formats.medium.width}
              height={post.image?.formats.medium.height}
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span className="font-semibold bg-brand-green/20 text-brand-dark-blue px-2 py-1 rounded-full text-xs uppercase tracking-wider">
              {post.categories[0].name}
            </span>
            <span>{post.createdAt}</span>
          </div>
          <h3 className="text-xl font-bold text-brand-dark-blue mb-3 group-hover:text-brand-teal transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
          <div className="mt-auto">
            <span className="font-semibold text-brand-dark-blue group-hover:text-brand-teal transition-colors">
              Lire la suite{" "}
              <i className="fas fa-arrow-right ml-1 transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const BlogSection: React.FC<Blog> = ({ sub_heading, heading, articles }) => {
  const posts = articles.slice(0, 3);

  return (
    <motion.section
      className="py-16 lg:py-24 bg-slate-50"
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
        <div className="text-center mb-12">
          <p className="font-semibold text-gray-500 tracking-widest mb-2">
            {heading}
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-dark-blue">
            {sub_heading}
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/blog">
            <motion.button
              className="bg-brand-dark-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark-blue/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir tous les articles
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
