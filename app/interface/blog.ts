interface BlogContentBlock {
  heading?: string;
  paragraph?: string;
  list?: {
    text: string;
    description: string;
  }[];
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  content: BlogContentBlock[];
  tags: string[];
}


export default BlogPost;