import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentTag Changelog — Updates & Release Notes",
  description:
    "Track every AgentTag update: new features, integrations, security improvements, and platform changes. Updated regularly.",
  keywords: [
    "AgentTag changelog",
    "AgentTag updates",
    "what is new in AgentTag",
    "AgentTag release notes",
    "AgentTag version history",
  ],
  alternates: { canonical: "https://agenttag.me/changelog" },
  openGraph: {
    title: "AgentTag Changelog — Updates & Release Notes",
    description: "Track every AgentTag update: new features, integrations, security improvements, and platform changes.",
    url: "https://agenttag.me/changelog",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentTag Changelog — Updates & Release Notes",
    description: "Track every AgentTag update: new features, integrations, security improvements, and platform changes.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/changelog",
      url: "https://agenttag.me/changelog",
      name: "AgentTag Changelog — Updates & Release Notes",
      description: "Track every AgentTag update: new features, integrations, security improvements, and platform changes.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/changelog#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/changelog#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Changelog", item: "https://agenttag.me/changelog" },
      ],
    },
  ],
};

const timelineEvents = [
  {
    version: "v0.3.0",
    date: "July 2025",
    title: "Beta Launch & Primitives",
    badge: "Beta Release",
    badgeColor: "monochrome",
    changes: [
      "Agent passport issuance: generates Ed25519 / W3C DID identifiers in < 1 minute.",
      "Signed mandate system: establishes policy-as-code controls with real-time evaluation checks.",
      "Tamper-evident audit ledger: records logs sequentially with SHA-256 chain verification.",
      "Real-time mandate revocation: kill agent credentials and access instantly via CLI or dashboard.",
      "Step-up human approval flows: pauses agents for manual transaction approvals.",
      "Claude Desktop integration: easy configurations via `agenttag mcp add --client claude` command.",
      "Framework support: wrappers for LangChain, LangGraph, and CrewAI pipelines.",
      "Regional residency: choose between US or EU servers for mandate and log storage.",
      "Governance dashboard: interactive UI to manage passports, active mandates, and query audits.",
    ],
  },
  {
    version: "Roadmap",
    date: "Q3 2025",
    title: "Upcoming Integrations & Enterprise Features",
    badge: "Planned",
    badgeColor: "gray",
    changes: [
      "Cursor, Windsurf, Cline, and Continue IDE client integrations.",
      "SOC 2 Type II compliance audit report finalization.",
      "OIDC / SAML SSO operator identity federation for enterprise teams.",
      "Self-hosted deployment options for air-gapped environments.",
      "OpenAI Assistants API proxy integration.",
      "Microsoft AutoGen & Semantic Kernel framework adapters.",
      "Real-time webhook alert webhooks for mandate violation events.",
      "Comprehensive spend analytics dashboard.",
    ],
  },
];

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs text-white/40">
        <li>
          <a href="https://agenttag.me" className="hover:text-white transition-colors">
            Home
          </a>
        </li>
        <li aria-hidden="true">›</li>
        <li className="text-white/70" aria-current="page">
          Changelog
        </li>
      </ol>
    </nav>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            📢 Release Notes
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AgentTag Changelog
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Keep track of every upgrade, integration, patch, and release notes across the AgentTag platform.
          </p>
        </header>

        {/* ── Timeline ────────────────────────────────────────────────────── */}
        <section className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
          {timelineEvents.map((event) => (
            <div key={event.version} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[2.45rem] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-background" />

              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-semibold text-white/40">{event.date}</span>
                <span className="text-xs font-bold font-mono text-zinc-200 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                  {event.version}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded ${
                    event.badgeColor === "monochrome" ? "bg-white/10 text-zinc-200" : "bg-white/10 text-white/50"
                  }`}
                >
                  {event.badge}
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-white/25 transition-all duration-300">
                <h3 className="font-display text-xl font-bold text-white mb-4">{event.title}</h3>
                <ul className="space-y-3">
                  {event.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 sm:p-16 text-center mt-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the beta to get every update first
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Try AgentTag on your local machine and join our community. Free during the public beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://agenttag.me"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-white/90 shadow-md hover:brightness-110 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/50 transition-all hover:scale-105 active:scale-95"
            >
              Get started free
              <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:hello@agenttag.me"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95"
            >
              Subscribe to updates
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
