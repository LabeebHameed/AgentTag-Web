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
    default: "AgentTag - Identity for AI agents · Free public beta",
    template: "%s | AgentTag"
  },
  description: "AgentTag is the control plane that gives an autonomous agent its own credentials, inbox, phone, cards, and compute governed by cryptographic mandates.",
  keywords: ["AI agent governance", "AgentTag", "AI identity", "Agentic AI", "AI security", "agent tagging"],
  openGraph: {
    title: "AgentTag - Identity for AI agents",
    description: "The control plane that gives an autonomous agent its own credentials, inbox, phone, cards, and compute governed by cryptographic mandates.",
    url: 'https://agenttag.me',
    siteName: 'AgentTag',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'AgentTag — Identity for AI agents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AgentTag - Identity for AI agents",
    description: "The control plane that gives an autonomous agent its own credentials, inbox, phone, cards, and compute governed by cryptographic mandates.",
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo_bgremoved.png", type: "image/png" }
    ],
    apple: "/logo_bgremoved.png",
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
        { "@type": "ContactPoint", "email": "contact@agenttag.me", "contactType": "customer support" },
        { "@type": "ContactPoint", "email": "contact@agenttag.me", "contactType": "security" },
        { "@type": "ContactPoint", "email": "contact@agenttag.me", "contactType": "privacy" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What exactly is an agent passport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An agent passport is the agent's own cryptographic identity — an Ed25519 keypair bound to a W3C DID. It signs requests and audit entries so permissions can be scoped and revoked cleanly, and so every action is attributable to a specific agent rather than to whoever has your API key."
          }
        },
        {
          "@type": "Question",
          "name": "How is this different from giving an agent my API keys?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "API keys give broad access to whoever has them. AgentTag gives each agent a separate identity with narrow, policy-based permissions — spend caps, allowed tools, expiring scopes — and a signed audit trail you can verify after the fact."
          }
        },
        {
          "@type": "Question",
          "name": "What does 'governed by mandates' mean in practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mandates are signed policy documents that define what an agent can do, how much it can spend, when it must ask for human approval, and when access expires. They are version-controlled, revocable, and evaluated at request time by the policy engine."
          }
        },
        {
          "@type": "Question",
          "name": "How do I install AgentTag for the first time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Run `agenttag mcp add --client claude` to mint a passport and register your first mandate. The CLI walks you through the rest, and you can finish setup from the Setup and CLI tab in the control plane."
          }
        },
        {
          "@type": "Question",
          "name": "Is the audit ledger really tamper-evident?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each entry includes the hash of the previous entry, so the chain is verifiable end-to-end and any retro-edit would break every hash that follows. You can export and re-verify the chain yourself at any time."
          }
        },
        {
          "@type": "Question",
          "name": "What does it cost during the beta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nothing — the public beta is free with generous usage limits. When we move to general availability, you will get 30 days notice and founding-user pricing will be locked in."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to replace my existing MCP clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. AgentTag sits in front of your existing MCP servers as a policy surface — your Claude Desktop, CrewAI, or LangChain clients keep working unchanged, but every request now flows through signed mandates first."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if a passport is compromised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Revoke it. The mandate stops being honored on the next request, in-flight sessions are killed, and the audit ledger records the revocation event with a reason. You can also pre-issue scoped, short-lived passports so a single leak is bounded."
          }
        }
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
                <img src="/favicon.svg" alt="AgentTag Logo" height={24} width={24} style={{ filter: 'invert(1)' }} className="h-6 w-auto" />
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
