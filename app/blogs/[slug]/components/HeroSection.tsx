// components/BlogHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { BlogPost } from '../../../interface/blog'; // Adjust path if needed

interface BlogHeroSectionProps {
  blog: BlogPost;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="text-center mb-12">
      <p className="text-sm font-bold uppercase text-green-600 tracking-wider mb-2">
        {blog.category}
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
        {blog.title}
      </h1>
      <div className="flex justify-center items-center text-gray-600 text-sm space-x-4">
        <span>By <span className="font-semibold text-green-700">{blog.author}</span></span>
        <span>•</span>
        <span>{formattedDate}</span>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {blog.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl mt-12">
        <Image
          src={blog.imageUrl}
          alt={blog.category}
          fill
          priority // Prioritize loading for the main blog image
        />
      </div>
    </div>
  );
};

export default BlogHeroSection;