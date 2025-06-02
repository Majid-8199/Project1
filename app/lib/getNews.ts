import { ApiBlog } from "../interface/ApiBlog";
import BlogPost from "../interface/blog";

export async function getApiBlogs() {
  const cacheKey = 'cached-api-blogs';

  // Check if data exists in sessionStorage
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData) as BlogPost[];
  }

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
  const res = await fetch(
    `https://api.worldnewsapi.com/search-news?source-country=ae&text=uae&api-key=${apiKey}&language=en`
  );

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "No response body");
    console.error(`API Fetch Error: Status ${res.status}`, `Response: ${errorBody}`);
    throw new Error(`Failed to fetch news: Status ${res.status}`);
  }

  const data = await res.json();
  const apiBlogs: BlogPost[] = data.news.map((item: ApiBlog) => ({
    id: item.id,
    link: item.url,
    title: item.title,
    category: 'News',
    date: item.publish_date || new Date().toISOString(),
    author: item.author || 'News Source',
    imageUrl: item.image || '/default-blog.jpg',
    tags: item.keywords || ['UAE', 'News'],
    type: "api",
    excerpt: item.text
  }));

  // Store in sessionStorage before returning
  sessionStorage.setItem(cacheKey, JSON.stringify(apiBlogs));

  return apiBlogs;
}