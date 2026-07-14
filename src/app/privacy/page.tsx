import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — What Data AgentTag Collects & Why | AgentTag",
  description:
    "AgentTag collects minimal data to operate the AI agent governance platform. We do not sell personal data, do not use advertising trackers, and store agent data only in your chosen region (US or EU). Full details here.",
  keywords: [
    "AgentTag privacy policy",
    "what data does AgentTag collect",
    "AgentTag GDPR",
    "AgentTag data storage",
    "AI agent platform privacy",
    "AgentTag data protection",
    "AgentTag EU data residency",
  ],
  alternates: { canonical: "https://agenttag.me/privacy" },
  openGraph: {
    title: "Privacy Policy — What Data AgentTag Collects & Why",
    description: "AgentTag does not sell personal data, does not use advertising trackers, and stores agent data only in your chosen region.",
    url: "https://agenttag.me/privacy",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 14, 2025";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/privacy",
      url: "https://agenttag.me/privacy",
      name: "Privacy Policy — What Data AgentTag Collects & Why",
      description: "AgentTag collects minimal data to operate the AI agent governance platform. No data selling, no advertising trackers, region-scoped storage.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/privacy#breadcrumb" },
      inLanguage: "en-US",
      dateModified: "2025-07-14",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/privacy#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Privacy", item: "https://agenttag.me/privacy" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What data does AgentTag collect?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag collects: (1) account information you provide when registering (name, email, organisation); (2) agent metadata — DID identifiers, mandate configurations, and request counts needed to populate the audit ledger; (3) standard server logs including IP address, browser type, and pages visited, retained for 90 days; (4) no payment information during the free beta. AgentTag does not collect the content of requests your agents make to external services — only metadata (timestamps, tool names, response codes).",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag sell personal data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AgentTag does not sell personal data to any third party. We do not share your data with advertising networks, data brokers, or analytics companies.",
          },
        },
        {
          "@type": "Question",
          name: "Where does AgentTag store data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag stores your data in the region you select — US or EU. Data does not cross regional boundaries without your explicit instruction. Enterprise customers can also deploy AgentTag on their own infrastructure so all data stays within their environment.",
          },
        },
        {
          "@type": "Question",
          name: "Is AgentTag GDPR compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AgentTag offers EU data residency, data processing agreements, right-to-erasure workflows, and access request handling within 30 days. Contact contact@agenttag.me to exercise your rights.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag see the content of my agents' requests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AgentTag records metadata about agent actions — timestamps, tool names, mandate IDs, response codes — but does not store or process the content of requests your agents make to downstream services.",
          },
        },
      ],
    },
  ],
};

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs text-white/40">
        <li><a href="https://agenttag.me" className="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true">›</li>
        <li className="text-white/70" aria-current="page">Privacy Policy</li>
      </ol>
    </nav>
  );
}

// Quick-answer cards shown above the full policy
const quickAnswers = [
  { q: "Do you sell my data?", a: "Never." },
  { q: "Do you use advertising trackers?", a: "No." },
  { q: "Where is my data stored?", a: "US or EU — your choice." },
  { q: "Do you see my agents' request contents?", a: "No — only metadata." },
];

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: [
      "AgentTag (\"AgentTag\", \"we\", \"us\", or \"our\") operates the AgentTag platform — an AI agent identity and governance service. This Privacy Policy explains what information we collect, why we collect it, how we use it, and your rights regarding that information.",
      "By creating an account or using the AgentTag platform, you agree to the terms of this Privacy Policy.",
    ],
  },
  {
    id: "what-we-collect",
    title: "2. What data AgentTag collects",
    subsections: [
      {
        title: "Account & contact information",
        body: "When you register, we collect your name, email address, and any organisation details you provide. This is used to authenticate your account and contact you about the service.",
      },
      {
        title: "Agent metadata",
        body: "We collect information about the agents you register: their DID identifiers, mandate configurations, and request counts needed to populate the audit ledger. We do not collect the contents of requests your agents make to external services — only metadata (timestamps, tool names, response codes).",
      },
      {
        title: "Audit ledger entries",
        body: "Every action recorded in your audit ledger is stored in your chosen region (US or EU). You own this data. We do not analyse it for advertising or third-party purposes.",
      },
      {
        title: "Server log data",
        body: "Standard web server logs including IP addresses, browser type, referring URLs, and pages visited. Retained for up to 90 days for security and debugging purposes.",
      },
      {
        title: "Payment information",
        body: "AgentTag is free during the public beta. When paid plans launch, payment processing will be handled by a PCI-compliant third-party processor. AgentTag will not store raw card numbers.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "3. How we use your data",
    items: [
      "Provide, operate, and improve the AgentTag platform",
      "Authenticate your identity and manage your account",
      "Populate and maintain tamper-evident audit ledgers for your agents",
      "Send transactional emails (security alerts, account notices, billing updates)",
      "Send product updates you can unsubscribe from at any time",
      "Detect, investigate, and prevent security incidents or abuse",
      "Meet legal obligations and respond to lawful requests from authorities",
    ],
    footer: "We do not sell your personal information to third parties. We do not use your data for advertising.",
  },
  {
    id: "data-storage",
    title: "4. Data storage & retention",
    content: [
      "Account data and audit ledger entries are stored in your chosen region (US or EU). We use AES-256 encryption at rest and TLS 1.3 in transit.",
      "We retain your data for as long as your account is active. If you delete your account, we delete or anonymise your personal data within 30 days, except where retention is required by law.",
    ],
  },
  {
    id: "third-parties",
    title: "5. Third-party processors",
    content: [
      "We share data only with trusted processors needed to operate the platform: cloud infrastructure providers (hosting and storage) and email delivery services (transactional email). We maintain data processing agreements with all sub-processors.",
      "We do not share your personal data with analytics companies, advertisers, or data brokers.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your rights",
    items: [
      "Access — request a copy of all personal data we hold about you",
      "Correction — ask us to correct inaccurate information",
      "Deletion — request deletion of your personal data",
      "Portability — receive your data in a machine-readable format",
      "Objection — object to processing based on legitimate interest",
      "Restriction — ask us to limit how we use your data while a dispute is resolved",
    ],
    footer: "To exercise any of these rights, email contact@agenttag.me. We respond within 30 days.",
  },
  {
    id: "cookies",
    title: "7. Cookies",
    content: [
      "AgentTag uses only cookies strictly necessary for authentication (session tokens) and preferences (theme settings). We do not use advertising or third-party tracking cookies.",
    ],
  },
  {
    id: "changes",
    title: "8. Changes to this policy",
    content: [
      "When we update this Privacy Policy, we will update the date below and notify registered users by email if the changes are material.",
    ],
  },
  {
    id: "contact",
    title: "9. Contact",
    content: [
      "Questions about this Privacy Policy or how we handle your data: contact@agenttag.me",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            Last updated: {lastUpdated}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            We built AgentTag to give you control over AI agents — that commitment extends to how we handle your own data. Here is exactly what we collect and why.
          </p>
        </header>

        {/* Quick-answer cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {quickAnswers.map((qa) => (
            <div key={qa.q} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xs text-white/45 mb-2">{qa.q}</p>
              <p className="font-bold text-white text-sm">{qa.a}</p>
            </div>
          ))}
        </div>

        {/* Jump nav */}
        <nav aria-label="Page sections" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Jump to section</p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-zinc-200 hover:text-zinc-300 hover:underline underline-offset-2 transition-colors">{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-8 scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-white mb-5">{s.title}</h2>

              {"content" in s && s.content && (
                <div className="space-y-4">
                  {s.content.map((p, i) => (
                    <p key={i} className="text-sm text-white/60 leading-relaxed">{p}</p>
                  ))}
                </div>
              )}

              {"subsections" in s && s.subsections && (
                <div className="space-y-5">
                  {s.subsections.map((sub, i) => (
                    <div key={i}>
                      <h3 className="text-sm font-semibold text-white/85 mb-1">{sub.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{sub.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {"items" in s && s.items && (
                <>
                  <ul className="space-y-2 mb-4">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"footer" in s && s.footer && (
                    <p className="text-sm text-white/40 leading-relaxed border-t border-white/10 pt-4 mt-4">{s.footer}</p>
                  )}
                </>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Questions about your data?</h2>
          <p className="text-white/55 mb-6">Email <a href="mailto:contact@agenttag.me" className="text-zinc-200 hover:underline">contact@agenttag.me</a> — we respond within 30 days.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://agenttag.me" className="inline-flex items-center gap-2 rounded-full hover:brightness-110 px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(177deg, var(--crimson-br), var(--crimson))' }}>
              Back to AgentTag
            </a>
            <a href="/security" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95">
              Security overview →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
