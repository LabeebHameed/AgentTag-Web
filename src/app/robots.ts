import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*.mp4',
        '/*.png',
        '/*.svg',
        '/*.jpg',
        '/*.jpeg',
        '/*.gif',
        '/*.ico',
      ],
    },
    sitemap: 'https://agenttag.me/sitemap.xml',
  };
}
