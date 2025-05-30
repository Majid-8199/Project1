'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { blogs } from '../../data/blogs';
import BlogPostCard from './BlogCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const POSTS_PER_PAGE = 6;

const AllBlogs = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-black sm:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="text-red-600">Our Latest</span>{' '}
            <span className="text-green-600">Insights</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay informed with our expert articles, guides, and updates on UAE visas,
            business setup, government services, and life in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {currentBlogs.map((blog, index) => (
            <div key={blog.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <BlogPostCard blog={blog} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8" data-aos="fade-up">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  currentPage === index + 1
                    ? 'bg-gn text-white'
                    : 'bg-gray-100 text-black hover:bg-green-100'
                } transition-colors duration-200`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
