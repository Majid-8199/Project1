'use client';

import { Suspense } from 'react';
import AllBlogs from './AllBlogs';

const AllBlogsWrapper = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading blogs...</div>}>
      <AllBlogs />
    </Suspense>
  );
};

export default AllBlogsWrapper;
