'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { blogs, MESSAGES, PAGINATION_LABELS } from '../../data/blogs';
import BlogPostCard from './BlogCard';
import { getApiBlogs } from '@/app/lib/getNews';
import { BlogPost } from '@/app/interface/blog';
import Image from 'next/image';

const POSTS_PER_PAGE = 6;

export default function BlogListing() {
  const [combinedBlogs, setCombinedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndCombineBlogs = async () => {
      try {
        const apiBlogs = await getApiBlogs();
        setCombinedBlogs([...apiBlogs, ...blogs]);
      } catch (error) {
        console.error("Failed to fetch API blogs:", error);
        setCombinedBlogs([...blogs]);
      } finally {
        setLoading(false);
      }
    };
    fetchAndCombineBlogs();
  }, []);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const sortedBlogs = [...combinedBlogs].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (loading) {
    return <LoadingState />;
  }

  if (combinedBlogs.length === 0) {
    return <NoPostsState />;
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {currentBlogs.map((blog) => (
            <div key={blog.id}>
              <BlogPostCard blog={blog} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
}

// Component helper functions
function LoadingState() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center py-10">
        <Image
          src="/services/amer.webp"
          alt="Loading..."
          width={50}
          height={50}
          className="animate-spin"
        />
      </div>
    </section>
  );
}

function NoPostsState() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xl text-gray-700">{MESSAGES.noPostsFound}</p>
      </div>
    </section>
  );
}

function Pagination({
  currentPage,
  totalPages,
  handlePageChange
}: {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) {
  const getPagesToShow = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {PAGINATION_LABELS.previous}
      </button>

      {/* rest of pagination buttons */}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {PAGINATION_LABELS.next}
      </button>
    </div>
  );
}
