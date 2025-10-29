
import BlogHero from '@/components/BlogHero';
import BlogSidebar from '@/components/BlogSidebar';
import { allBlogPosts } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Pagination = () => {
    // This is a static component based on the screenshot.
    // In a real app, this would be dynamic.
    return (
        <div className="flex items-center justify-start space-x-2 mt-12">
            <button className="w-10 h-10 rounded-full bg-brand-dark-blue text-white font-bold" aria-current="page">1</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-bold hover:bg-gray-100" aria-label="Go to page 2">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-bold hover:bg-gray-100" aria-label="Go to page 3">3</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-bold hover:bg-gray-100" aria-label="Go to next page">
                <i className="fas fa-chevron-right text-xs"></i>
            </button>
        </div>
    );
};

const BlogPostItem: React.FC<{post: typeof allBlogPosts[0]}> = ({ post }) => (
  <div className="py-8 first:pt-0 last:pb-0 last:border-b-0 border-b border-gray-200 group">
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="sm:w-1/3 flex-shrink-0">
        <Link href="#">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        </Link>
      </div>
      <div className="sm:w-2/3">
        <p className="text-xs font-bold bg-brand-red text-white inline-block px-2 py-1 rounded mb-3 uppercase tracking-wider">{post.category}</p>
        <h2 className="text-2xl font-bold text-brand-dark-blue mb-3 group-hover:text-brand-teal transition-colors">
          <Link href="#">{post.title}</Link>
        </h2>
        <div className="text-sm text-gray-500 flex items-center flex-wrap gap-x-4 gap-y-1">
          <span>Par <a href="#" className="hover:text-brand-dark-blue">{post.author}</a></span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span>{post.date}</span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span><a href="#" className="hover:text-brand-dark-blue">{post.comments} Commentaires</a></span>
        </div>
      </div>
    </div>
  </div>
);


export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div>
                {allBlogPosts.map((post, index) => (
                  <BlogPostItem key={index} post={post} />
                ))}
              </div>
              <Pagination />
            </div>
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}