'use client'

import { BlogPost } from "@/app/interfaces/blogs";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  blog: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blogs/${blog.slug}`} passHref className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group cursor-pointer border border-gray-100 hover:border-red-600">
        <div className="relative w-full h-52 overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.imageAlt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {blog.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>By <span className="font-semibold text-green-600">{blog.author}</span></span>
            <span>{formattedDate}</span>
          </div>
        </div>
    </Link>
  );
};

export default BlogPostCard