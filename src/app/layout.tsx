import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  },
  twitter: {
    card: 'summary_large_image',
    title: "AgentTag Blog",
    description: "The leading blog on AI agent governance and identity management.",
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
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="https://agenttag.me" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <img src="/logo.png" alt="AgentTag Logo" className="h-7 w-auto" />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">AgentTag</span>
            </a>
            <a 
              href="https://agenttag.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Join Beta
            </a>
          </div>
        </header>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
