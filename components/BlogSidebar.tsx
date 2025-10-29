
import React from 'react';
import { allBlogPosts } from '@/constants';
import Link from 'next/link';

const SearchWidget = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200/80">
    <form className="flex items-center border border-gray-200 rounded-md overflow-hidden">
      <input 
        type="text" 
        placeholder="Rechercher" 
        className="w-full px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button type="submit" className="px-4 text-gray-500 hover:text-brand-dark-blue">
        <i className="fas fa-search"></i>
      </button>
    </form>
  </div>
);

const RecentPostsWidget = () => {
  const recentPosts = allBlogPosts.slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200/80">
      <h3 className="text-xl font-bold text-brand-dark-blue pb-4 border-b border-gray-200">Articles Récents</h3>
      <div className="space-y-4 mt-4">
        {recentPosts.map((post, index) => (
          <Link key={index} href="#" className="flex items-center gap-4 group">
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{post.date.split(',')[0]}</p>
              <h4 className="font-bold text-brand-dark-blue leading-tight group-hover:text-brand-teal transition-colors">
                {post.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BlogSidebar: React.FC = () => {
  return (
    <aside className="space-y-8 sticky top-28">
      <SearchWidget />
      <RecentPostsWidget />
    </aside>
  );
};

export default BlogSidebar;