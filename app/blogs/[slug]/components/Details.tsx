import React, { JSX } from 'react';
import { BlogPost } from '../../../interface/blog';
import Link from 'next/link';
import { FaLinkedin, FaFacebook } from 'react-icons/fa6';

interface BlogDetailsProps {
  blog: BlogPost;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  const renderContent = () => {
    return blog?.content?.map((block, index) => {
      // Use the 'type' property as a discriminant to correctly narrow down the block type
      switch (block.type) {
        case 'paragraph':
          // TypeScript now knows 'block' is { type: 'paragraph'; text: string }
          // The 'text' property holds the paragraph content.
          return <p key={index} dangerouslySetInnerHTML={{ __html: block.text }} />;

        case 'heading':
          // TypeScript now knows 'block' is { type: 'heading'; level: number; text: string }
          // Dynamically determine the heading tag (h1, h2, h3, etc.) based on 'level'
          const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
          return (
            <div key={index}>
              <HeadingTag className="text-2xl font-bold mt-8 mb-4">{block.text}</HeadingTag>
              {/* Note: The original type 'BlogContentBlock' for 'heading' does not include a 'paragraph' property.
                  If you need a paragraph associated with a heading, the 'BlogContentBlock' type would need to be updated. */}
            </div>
          );

        case 'list':
          // TypeScript now knows 'block' is { type: 'list'; items: string[] }
          return (
            <div key={index}>
              {/* Note: The original type 'BlogContentBlock' for 'list' does not include 'heading' or 'paragraph' properties.
                  If you need a heading or paragraph for a list, the 'BlogContentBlock' type would need to be updated. */}
              {block.items && (
                <ul className="list-disc list-inside ml-4 mt-2">
                  {block.items.map((item, liIndex) => (
                    // The 'items' in your BlogContentBlock list type are simple strings, not objects with text and description.
                    // So, we render the item directly. If you need text and description, the type needs modification.
                    <li key={liIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );

        default:
          // Fallback for any unknown block types (shouldn't happen if union is exhaustive)
          console.warn('Unknown blog content block type:', block);
          return null;
      }
    });
  };

  // Construct the full URL for sharing, assuming 'yourwebsite.com' is the base
  const currentUrl = `https://yourwebsite.com/blogs/${blog.slug}`;

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
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          <FaFacebook className='mr-2'/>
          Facebook
        </Link>
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`}
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
