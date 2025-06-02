export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: number; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  
  id: number;
  type: string
  slug?: string;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  excerpt?: string;
  content?: BlogContentBlock[];
  tags: string[];
  metaData?: {
    title: string;
    description: string;
    keywords: string;
  };
  link?: string
}

export default BlogPost;
