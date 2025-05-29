import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import BlogPost from '../interface/blog';


const BlogsCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="relative w-full max-w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-md group"
    >
      {/* Image Wrapper with Zoom Effect */}
      <div className="relative w-[280px] lg:w-[250px] xl:w-[280px] h-[320px] overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.imageAlt}
          fill
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-[120%]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text & Icon */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white">
        <h6 className="text-2xl font-extrabold mt-2">{blog.title}</h6>
        <div className="flex justify-between">
          <div className='bg-gn flex items-center p-2 rounded-full text-xs'>{blog.category}</div>
          <div className="bg-white text-black h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gn group-hover:text-white">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
