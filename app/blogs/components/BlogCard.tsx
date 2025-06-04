'use client';

import BlogPost from "@/app/interface/blog";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = ({ blog }: { blog: BlogPost }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let href: string = blog.type === 'api' ? blog.link || '#' : blog.slug ? `/blogs/${blog.slug}` : '/blogs';

  return (
    <Link href={href} passHref className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group cursor-pointer border border-gray-100 hover:border-gn">
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.category}
          fill
          className="transition-transform duration-300 group-hover:scale-110 object-cover"
        />
        <div className="absolute top-4 left-4 bg-gn text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {blog.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gn transition-colors duration-200 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>
            By <span className="font-semibold text-green-600">{blog.author}</span>
          </span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
