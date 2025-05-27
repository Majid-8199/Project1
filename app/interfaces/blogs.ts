// interfaces/blogs.ts (or wherever your BlogPost interface is defined)

export interface ContentParagraph {
  paragraph: string;
}

export interface ContentHeading {
  heading: string;
  paragraph?: string; // Optional paragraph for headings that also have a paragraph
}

export interface ContentHeadingWithList {
  heading: string;
  paragraph?: string; // Optional paragraph for headings that also have a paragraph
  list: Array<{
    text: string;
    description: string;
  }>;
}

// Define the type for a single content block
export type ContentBlock = ContentParagraph | ContentHeading | ContentHeadingWithList;

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  content: ContentBlock[]; // This defines 'content' as an array of ContentBlock types
  tags: string[];
}