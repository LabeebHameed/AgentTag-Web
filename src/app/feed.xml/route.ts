import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();
  const blogItems = posts
    .map((post) => `
      <item>
        <title>${escapeXml(post.metadata.title)}</title>
        <link>https://agenttag.me/blog/${post.metadata.slug}</link>
        <description>${escapeXml(post.metadata.description)}</description>
        <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
        <guid>https://agenttag.me/blog/${post.metadata.slug}</guid>
        <category>${escapeXml(post.metadata.category)}</category>
        <author>hello@agenttag.me (${escapeXml(post.metadata.author)})</author>
      </item>
    `).join('');

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AgentTag Blog</title>
    <link>https://agenttag.me/blog</link>
    <description>The practical guide to safe, governed AI agents in production.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://agenttag.me/feed.xml" rel="self" type="application/rss+xml" />
    ${blogItems}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { 
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate'
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
