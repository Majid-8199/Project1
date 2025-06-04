import { notFound } from "next/navigation";
import BlogHeroSection from "./components/HeroSection";
import BlogDetails from "./components/Details";
import RelatedBlogs from "./components/RelatedBlogs";
import { blogs } from "../../data/blogs";
import { type Metadata } from "next";

// 1. Define Promise-compatible types
type PromiseLike<T> = T & Promise<T>;

interface BlogParams {
  slug: string;
}

// 2. Page props with Promise-like structure
interface BlogPageProps {
  params: PromiseLike<BlogParams>;
  searchParams?: PromiseLike<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  return {
    title: blog?.title || "Blog Not Found",
    description: blog?.excerpt,
  };
}

// 3. Component implementation
export default async function BlogPage({ params }: BlogPageProps) {
  const actualParams = await params;
  const blog = blogs.find((b) => b.slug === actualParams.slug);

  if (!blog) {
    notFound();
  }

  // Step 1: Filter related blogs (same category, excluding current)
  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b.slug !== blog.slug
  );

  // Step 2: If related < 3, fill with other blogs not including current or already added
  const relatedSet = new Set(relatedBlogs.map((b) => b.slug));
  const fallbackBlogs = blogs
    .filter((b) => b.slug !== blog.slug && !relatedSet.has(b.slug))
    .slice(0, 3 - relatedBlogs.length);

  // Combine both
  const finalRelatedBlogs = [...relatedBlogs, ...fallbackBlogs].slice(0, 3);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <BlogHeroSection blog={blog} />
      <BlogDetails blog={blog} />
      <RelatedBlogs blogs={finalRelatedBlogs} />
    </main>
  );
}
