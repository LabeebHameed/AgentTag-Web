import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `https://agenttag.me/blog/${slug}`;

  return {
    title: `${post.metadata.title} | AgentTag Blog`,
    description: post.metadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: url,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

import Link from "next/link";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readTime = Math.ceil(post.content.split(/\s+/).length / 200);

  // Schema.org Article structured data for AEO & SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.metadata.title,
    description: post.metadata.description,
    articleSection: post.metadata.category,
    keywords: ["AI Agents", "AgentTag", "AI Identity", "Agent Governance", post.metadata.category].join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agenttag.me/blog/${slug}`
    },
    author: {
      "@type": "Person",
      name: post.metadata.author,
    },
    datePublished: post.metadata.date,
    dateModified: post.metadata.date,
    publisher: {
      "@type": "Organization",
      name: "AgentTag",
      logo: {
        "@type": "ImageObject",
        url: "https://agenttag.me/logo.png"
      }
    },
  };

  return (
    <main className="min-h-screen bg-background py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <header className="mb-10 text-center">
          <div className="mb-4 font-mono text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {post.metadata.category}
          </div>
          <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {post.metadata.title}
          </h1>
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-display text-xs font-bold">{post.metadata.author.charAt(0)}</span>
              </div>
              <span>{post.metadata.author}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={post.metadata.date}>{post.metadata.date}</time>
            <span>&bull;</span>
            <span>{readTime} min read</span>
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert prose-lg mx-auto max-w-none
          prose-headings:font-display prose-headings:tracking-tight prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border/20 prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-2
          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-1
          prose-p:leading-8 prose-p:mb-5 prose-p:text-muted-foreground
          prose-li:text-muted-foreground prose-li:leading-7
          prose-ul:my-4 prose-ol:my-4
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-border hover:prose-a:decoration-foreground
          prose-code:text-sm prose-code:bg-muted/50 prose-code:text-muted-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border/20 prose-pre:rounded-xl
          prose-blockquote:border-l-border/40 prose-blockquote:text-muted-foreground">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-16 border-t border-border/40 pt-12 mb-24">
          <div className="relative overflow-hidden rounded-2xl p-10 text-center border shadow-sm">
            {/* Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-20 transition-opacity duration-700 hover:opacity-30"
            >
              <source src="/cta-bg.mp4" type="video/mp4" />
            </video>
            
            {/* CTA Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="mb-3 font-display text-2xl font-bold text-foreground">Join the AgentTag Beta</h3>
              <p className="mb-8 max-w-lg text-muted-foreground">
                If you’re building agents that need real credentials, mandates, and audit trails, get early access to our ready-made control plane.
              </p>
              <a 
                href="https://agenttag.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                Join the Beta
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.3)]">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Ready to secure your AI agents?</h4>
            <p className="text-xs text-muted-foreground hidden sm:block">Give your agents real identity and audit trails.</p>
          </div>
          <a 
            href="https://agenttag.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 shadow-sm"
          >
            Join the Beta
          </a>
        </div>
      </div>
    </main>
  );
}
