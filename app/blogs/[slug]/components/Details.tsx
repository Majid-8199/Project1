// components/BlogDetails.tsx
import React from 'react';
import { BlogPost, ContentParagraph, ContentHeading, ContentHeadingWithList } from '../../../interfaces/blogs'; // Adjust path if needed
import Link from 'next/link';
import { FaLinkedin, FaFacebook } from 'react-icons/fa6';

interface BlogDetailsProps {
  blog: BlogPost;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  const renderContent = () => {
    return blog.content.map((block, index) => {
      // Type guards to narrow down the block type
      if ('paragraph' in block && !('heading' in block)) { // This specifically handles ContentParagraph
        const paragraphBlock = block as ContentParagraph;
        return <p key={index} dangerouslySetInnerHTML={{ __html: paragraphBlock.paragraph }} />;
      } else if ('heading' in block && 'list' in block) { // This handles ContentHeadingWithList
        const listBlock = block as ContentHeadingWithList;
        return (
          <div key={index}>
            <h3 className="text-2xl font-bold mt-8 mb-4">{listBlock.heading}</h3>
            {listBlock.paragraph && <p dangerouslySetInnerHTML={{ __html: listBlock.paragraph }} />}
            {listBlock.list && (
              <ul className="list-disc list-inside ml-4 mt-2">
                {listBlock.list.map((item, liIndex) => (
                  <li key={liIndex}>
                    <strong>{item.text}</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      } else if ('heading' in block) { // This handles ContentHeading (which might have an optional paragraph)
        const headingBlock = block as ContentHeading;
        return (
          <div key={index}>
            <h3 className="text-2xl font-bold mt-8 mb-4">{headingBlock.heading}</h3>
            {headingBlock.paragraph && <p dangerouslySetInnerHTML={{ __html: headingBlock.paragraph }} />}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <>
      {/* Blog Content */}
      <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed blog-content">
        {renderContent()}
      </div>

      {/* Share Buttons */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-4">
        <span className="font-semibold text-black">Share this article:</span>
        <Link
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://yourwebsite.com/blogs/${blog.slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          <FaFacebook className='mr-2'/>
          Facebook
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourwebsite.com/blogs/${blog.slug}`)}&title=${encodeURIComponent(blog.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-200"
        >
          <FaLinkedin className='mr-2'/>
          LinkedIn
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;