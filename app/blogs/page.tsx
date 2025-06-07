import HeroSection from './components/HeroSection';
import AllBlogs from './components/AllBlogs';
import { Suspense } from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <>
      <HeroSection />
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <Image
              src="/services/amer.webp"
              alt="Loading..."
              width={50}
              height={50}
              className="animate-spin inline-block"
            />
          </div>
        }
      >
        <AllBlogs />
      </Suspense>
    </>
  );
};

export default Blog;
