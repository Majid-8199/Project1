'use client';

import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { blogs } from '../data/blogs';
import BlogsCard from './BlogsCard';
import BlogPost from '../interface/blog';
import { getApiBlogs } from '../lib/getNews';
import { blogSectionContent } from '../data/home';

const Blogs = () => {
  const [combinedBlogs, setCombinedBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchAndCombineBlogs = async () => {
      try {
        const apiBlogs = await getApiBlogs();
        setCombinedBlogs(apiBlogs.concat(blogs));
      } catch (error) {
        console.error("Failed to fetch API blogs:", error);
        setCombinedBlogs(blogs);
      }
    };
    fetchAndCombineBlogs();
  }, []);

  return (
    <section className="bg-gray-100 w-full py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {blogSectionContent.headingParts.map((part, i) => (
              <span key={i} className={part.className}>
                {part.text}
              </span>
            ))}
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
            {blogSectionContent.subheading}
          </h2>
          <div className="relative group cursor-pointer flex items-center w-fit">
            <Link href={blogSectionContent.cta.href} className="inline-block pb-1 text-gn transition-colors duration-300">
              <p className='flex items-center text-sm gap-1 pl-1'>
                {blogSectionContent.cta.text} <FaChevronRight />
              </p>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
        >
          {combinedBlogs.slice(0, 4).map((blog, i) => (
            <div key={blog.id || blog.slug || i}>
              <BlogsCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;


