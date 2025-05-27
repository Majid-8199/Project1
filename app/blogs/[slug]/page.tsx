// app/blogs/[slug]/page.tsx

import { notFound } from "next/navigation";
import BlogHeroSection from "./components/HeroSection";
import BlogDetails from "./components/Details";
import RelatedBlogs from "./components/RelatedBlogs";
import { blogs } from "../../data/blogs"; // Assuming this path is correct

interface Params {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: Params) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <BlogHeroSection blog={blog} />
      <BlogDetails blog={blog} />
      <RelatedBlogs blogs={relatedBlogs} />
    </main>
  );
};

export default BlogPage;