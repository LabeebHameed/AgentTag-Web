import { BlogsSection, BlogType } from "@/components/blogs-section";
import { getAllPosts } from "@/lib/mdx";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Governance & Identity Blog | AgentTag",
  description: "Learn how to tag, track, and secure AI agents in production. The ultimate resource for Agentic AI governance, identity management, and compliance.",
  alternates: {
    canonical: "https://agenttag.me/blog",
  }
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Map MDX metadata to the BlogType expected by BlogsSection
  const blogs: BlogType[] = posts.map((post) => ({
    title: post.metadata.title,
    date: post.metadata.date,
    description: post.metadata.description,
    category: post.metadata.category,
    author: post.metadata.author,
    href: `/blog/${post.metadata.slug}`,
  }));

  return (
    <main className="min-h-screen bg-background">
      <BlogsSection 
        blogs={blogs} 
        title="AgentTag Blog" 
        description="The practical, opinionated guide to safe, governed AI agents in production." 
      />
    </main>
  );
}
