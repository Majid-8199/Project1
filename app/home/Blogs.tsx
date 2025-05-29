'use client';

import React, { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blogs } from '../data/blogs';
import BlogsCard from './BlogsCard';

const Blogs = () => {
  const selectedBlogs = blogs.slice(0, 4);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <div
          className="flex flex-col gap-4 text-center sm:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-2xl font-bold">
            Helpful <span className="text-gn">Insights</span> & <span className="text-rd">Updates</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
            Stay informed with tips, updates, and guides on UAE government processes.
          </h2>
          <div className="relative group cursor-pointer flex items-center w-fit">
            <Link href="/" className="inline-block pb-1 text-gn transition-colors duration-300">
              <p className='flex items-center text-sm gap-1 pl-1'>
                Know More <FaChevronRight />
              </p>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
          data-aos="fade-up"
        >
          {selectedBlogs.map((blog, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <BlogsCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
