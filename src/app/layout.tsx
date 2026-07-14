import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agenttag.me'),
  title: {
    default: "AgentTag Blog | AI Agent Governance & Identity",
    template: "%s | AgentTag"
  },
  description: "The leading blog on AI agent governance, identity management, and secure production deployment for multi-agent systems.",
  keywords: ["AI agent governance", "AgentTag", "AI identity", "Agentic AI", "AI security", "agent tagging"],
  openGraph: {
    title: "AgentTag Blog",
    description: "The leading blog on AI agent governance, identity management, and secure production deployment.",
    url: 'https://agenttag.me',
    siteName: 'AgentTag',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentTag — AI Agent Governance & Identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AgentTag Blog",
    description: "The leading blog on AI agent governance and identity management.",
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Global JSON-LD: WebSite + Organization — injected on every page
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://agenttag.me/#website",
      "url": "https://agenttag.me",
      "name": "AgentTag",
      "description": "AI agent identity and governance platform",
      "publisher": { "@id": "https://agenttag.me/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://agenttag.me/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://agenttag.me/#organization",
      "name": "AgentTag",
      "url": "https://agenttag.me",
      "logo": "https://agenttag.me/logo.png",
      "description": "AgentTag is a control plane for AI agent identity and governance. It gives every autonomous AI agent its own cryptographic credentials, signed mandates, and a tamper-evident audit ledger.",
      "contactPoint": [
        { "@type": "ContactPoint", "email": "hello@agenttag.me", "contactType": "customer support" },
        { "@type": "ContactPoint", "email": "security@agenttag.me", "contactType": "security" },
        { "@type": "ContactPoint", "email": "privacy@agenttag.me", "contactType": "privacy" }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md mt-auto">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <a href="https://agenttag.me" className="flex items-center gap-2 transition-opacity hover:opacity-70">
                <img src="/logo.png" alt="AgentTag Logo" className="h-6 w-auto" />
                <span className="font-display text-sm font-bold text-foreground">AgentTag</span>
              </a>
              <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <a href="/about" className="text-xs text-white/50 hover:text-white transition-colors">About</a>
                <a href="/security" className="text-xs text-white/50 hover:text-white transition-colors">Security</a>
                <a href="/support" className="text-xs text-white/50 hover:text-white transition-colors">Support</a>
                <a href="/blog" className="text-xs text-white/50 hover:text-white transition-colors">Blog</a>
                <a href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="text-xs text-white/50 hover:text-white transition-colors">Terms</a>
              </nav>
              <p className="text-xs text-white/30">© {new Date().getFullYear()} AgentTag</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
