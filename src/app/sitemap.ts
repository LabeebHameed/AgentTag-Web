import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  // If you are merging this into the main agenttag.me sitemap,
  // simply copy this block into your existing sitemap.ts
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://agenttag.me/${post.metadata.slug}`,
    lastModified: new Date(post.metadata.date).toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://agenttag.me/',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
      priority: 1,
    },
    ...blogUrls,
  ];
}
