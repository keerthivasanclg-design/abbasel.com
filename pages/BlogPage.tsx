import React from 'react';
import BlogPostCard from '@/components/BlogPostCardProps'
import logo from "../asserts/logo.jpeg"
import blogimg1 from "../asserts/blogimg1.png"
import blogimg2 from "../asserts/blogimg2.png"


const posts = [
  {
    imageSrc: blogimg1,
    author: 'Abbasel Digital Marketing',
    avatarSrc: logo,
    date: 'Jul 28',
    readTime: '3 min read',
    title: 'Top 10 SEO Trends to Watch in 2025',
    description: 'Rank #1 in 2025 with AI-first SEO, GEO tactics, EEAT trust, and zero-click wins. Abbasel powers your growth with proven AI-optimized SEO strategies. Dominate AI search in 2025 with...',
    views: 10,
    comments: 0,
  },
  {
    imageSrc: blogimg2,
    author: 'Abbasel Digital Marketing',
    avatarSrc: logo,
    date: 'Jul 27',
    readTime: '2 min read',
    title: 'Is SEO Dead? Not Quite – Understanding the Shift in 2025',
    description: "SEO isn't dead in 2025 — it's evolving fast. With AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization), brands must adapt to rank in AI-powered searc...",
    views: 5,
    comments: 0,
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <a href="#" className="py-4 px-1 inline-flex items-center text-sm font-semibold text-blue-600 border-b-2 border-blue-600">
              All Posts
            </a>
           
          </nav>
        </div>

        <h1 className="text-3xl font-bold text-black mb-10">All Posts</h1>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;