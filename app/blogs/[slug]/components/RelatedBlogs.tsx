// components/RelatedBlogs.tsx
import React from 'react';
import { BlogPost } from '../../../interfaces/blogs'; // Adjust path if needed
import BlogPostCard from '../../components/BlogCard';


interface RelatedBlogsProps {
  blogs: BlogPost[];
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogs }) => {
  if (blogs.length === 0) return null;

  return (
    <div className="mt-20 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-extrabold text-black text-center mb-10">
        <span className="text-green-600">Related</span>{' '}
        <span className="text-red-600">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogPostCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;