import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AgentTag AI Agent Governance Platform",
  description:
    "AgentTag Terms of Service — the agreement governing your use of the AgentTag AI agent identity and governance platform. Includes beta terms, acceptable use, intellectual property, and liability.",
  keywords: [
    "AgentTag terms of service",
    "AgentTag terms",
    "AgentTag user agreement",
    "AgentTag beta terms",
    "AI governance platform terms",
    "AgentTag acceptable use",
  ],
  alternates: { canonical: "https://agenttag.me/terms" },
  openGraph: {
    title: "Terms of Service | AgentTag",
    description: "The agreement governing your use of the AgentTag AI agent governance platform.",
    url: "https://agenttag.me/terms",
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
      "@id": "https://agenttag.me/terms",
      url: "https://agenttag.me/terms",
      name: "Terms of Service | AgentTag",
      description: "The agreement governing your use of the AgentTag AI agent identity and governance platform.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/terms#breadcrumb" },
      inLanguage: "en-US",
      dateModified: "2025-07-14",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/terms#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Terms", item: "https://agenttag.me/terms" },
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
        <li className="text-white/70" aria-current="page">Terms of Service</li>
      </ol>
    </nav>
  );
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    content: [
      "By accessing or using the AgentTag platform, you agree to be bound by these Terms of Service. These Terms apply to all users: individual developers, teams, and organisations.",
      "If you are using AgentTag on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.",
    ],
  },
  {
    id: "what-agenttag-is",
    title: "2. What AgentTag is",
    content: [
      "AgentTag provides an identity and governance platform for autonomous AI agents. The platform includes: cryptographic agent passports (Ed25519 keypairs bound to W3C DIDs), signed mandate-based policy management, a tamper-evident hash-chained audit ledger, a control plane for real-time monitoring and revocation, and integrations with MCP-compatible clients and A2A agent runtimes.",
      "AgentTag is a governance tool — it gives you visibility and controls to detect and respond to agent behaviour. You remain responsible for the behaviour of agents you deploy.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts & access",
    items: [
      "Provide accurate information when creating an account and keep it up to date",
      "Keep your account credentials secure — you are responsible for all activity under your account",
      "Notify us immediately at security@agenttag.me if you detect unauthorised use of your account",
      "Do not share account credentials or use another person's account",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable use",
    content: ["You may use AgentTag only for lawful purposes. You may not:"],
    items: [
      "Deploy agents that perform actions prohibited by applicable law",
      "Attempt to reverse-engineer, decompile, or extract source code from the platform",
      "Use the platform to attack, probe, or circumvent the security of other systems",
      "Resell or white-label the platform without prior written consent",
      "Circumvent usage limits, rate limits, or access controls",
      "Upload or transmit malicious code or disruptive payloads",
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual property",
    content: [
      "AgentTag and its licensors own all right, title, and interest in the platform, including all software, APIs, documentation, and trademarks.",
      "You retain ownership of your data — agent configurations, mandate definitions, and audit ledger entries. By using the platform, you grant AgentTag a limited licence to store, process, and display your data solely to provide the service.",
    ],
  },
  {
    id: "beta",
    title: "6. Beta terms",
    content: ["AgentTag is currently offered as a free public beta. During the beta period:"],
    items: [
      "The platform is provided 'as-is' without SLA or uptime guarantees",
      "Features may be added, modified, or removed",
      "We will provide at least 30 days' notice before introducing paid plans",
      "Founding-user pricing will be honoured for users who join during the beta",
      "Your agents, mandates, and audit ledger history carry over to paid plans",
    ],
  },
  {
    id: "disclaimers",
    title: "7. Disclaimers & limitation of liability",
    content: [
      "THE AGENTTAG PLATFORM IS PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGENTTAG SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.",
    ],
  },
  {
    id: "termination",
    title: "8. Termination",
    content: [
      "Either party may terminate the service relationship at any time. You may delete your account from the settings page. We may suspend or terminate access if you violate these Terms.",
      "Upon termination, your right to access the platform ceases. We provide a 30-day window to export your data before deletion.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to these terms",
    content: [
      "We may update these Terms from time to time. When we make material changes, we will notify you by email and update the date on this page. Continued use after changes take effect constitutes acceptance.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    content: ["Questions about these Terms: legal@agenttag.me"],
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            These Terms govern your use of the AgentTag platform. They define what you can do, what we&apos;re responsible for, and how the relationship between us works.
          </p>
        </header>

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

        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-8 scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-white mb-5">{s.title}</h2>

              {"content" in s && s.content && (
                <div className="space-y-4">
                  {s.content.map((p, i) => (
                    <p key={i} className={`text-sm leading-relaxed ${p.length > 60 && p === p.toUpperCase() ? "text-white/35 font-mono text-xs" : "text-white/60"}`}>{p}</p>
                  ))}
                </div>
              )}

              {"items" in s && s.items && (
                <ul className="mt-4 space-y-2">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Questions about these terms?</h2>
          <p className="text-white/55 mb-6">Contact us at <a href="mailto:legal@agenttag.me" className="text-zinc-200 hover:underline">legal@agenttag.me</a></p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://agenttag.me" className="inline-flex items-center gap-2 rounded-full hover:brightness-110 px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95" style={{ background: 'linear-gradient(177deg, var(--crimson-br), var(--crimson))' }}>
              Back to AgentTag
            </a>
            <a href="/privacy" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95">
              Privacy Policy →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
