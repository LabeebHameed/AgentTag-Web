import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentTag Pricing — Free During Public Beta",
  description:
    "AgentTag is completely free during the public beta. No credit card required. Founding users lock in discounted pricing when paid plans launch. See what is included.",
  keywords: [
    "AgentTag pricing",
    "AgentTag cost",
    "AgentTag free",
    "AgentTag beta pricing",
    "AgentTag plans",
    "how much does AgentTag cost",
    "AgentTag founding user pricing",
  ],
  alternates: { canonical: "https://agenttag.me/pricing" },
  openGraph: {
    title: "AgentTag Pricing — Free During Public Beta",
    description:
      "AgentTag is completely free during the public beta. No credit card required. Founding users lock in discounted pricing when paid plans launch.",
    url: "https://agenttag.me/pricing",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentTag Pricing — Free During Public Beta",
    description:
      "AgentTag is completely free during the public beta. No credit card required. Founding users lock in discounted pricing.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/pricing",
      url: "https://agenttag.me/pricing",
      name: "AgentTag Pricing — Free During Public Beta",
      description: "AgentTag is completely free during the public beta. No credit card required. Founding users lock in discounted pricing when paid plans launch.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/pricing#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/pricing#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://agenttag.me/pricing" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is AgentTag really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AgentTag is completely free during our public beta phase. You get access to all features, including unlimited passports, unlimited mandates, real-time revocation, and the tamper-evident audit ledger, without any subscription fee.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to enter a credit card to join the beta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, you do not need to enter a credit card to sign up and use AgentTag during the public beta. There are no surprise bills or hidden fees.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to my data and configuration when the beta ends?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When the beta ends and we transition to paid plans, all your configurations, agent passports, mandates, and audit ledger history will carry over seamlessly. There will be no migration work required on your end.",
          },
        },
        {
          "@type": "Question",
          name: "What is founding user pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Founding users are developers and teams who join AgentTag during the public beta. When paid plans are introduced, founding users will lock in a permanently discounted pricing structure to thank them for their early adoption and feedback.",
          },
        },
        {
          "@type": "Question",
          name: "Will there be a free tier after the beta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We plan to keep a generous free tier for individual developers, hobbyists, and local-only testing. Paid tiers will target teams and enterprises requiring self-hosting, advanced compliance, and large fleets.",
          },
        },
        {
          "@type": "Question",
          name: "How much notice will I get before paid plans start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We will provide at least 30 days' advance notice via email and dashboard announcements before introducing any paid plans, giving you plenty of time to choose the plan that is right for you.",
          },
        },
      ],
    },
  ],
};

const pricingFeatures = [
  "Unlimited agent passports (Ed25519 / W3C DID)",
  "Unlimited signed mandates & real-time updates",
  "Tamper-evident, hash-chained audit ledger",
  "Instant mandate revocation (no agent restarts)",
  "Step-up human approval authorization loops",
  "Official Claude Desktop configuration installer",
  "LangChain, LangGraph, CrewAI & AutoGen wrappers",
  "US or EU regional data residency options",
  "Full audit logs export (JSON / CSV)",
  "Founding-user lifetime discount eligibility",
];

const faqs = [
  {
    q: "Is AgentTag really free?",
    a: "Yes. There are no fees or usage billing during the public beta. You can set up as many agents and mandates as your projects require.",
  },
  {
    q: "Do I need a credit card?",
    a: "No. You can sign up with your email or GitHub account. We do not collect billing info during the public beta.",
  },
  {
    q: "What happens to my data if I don't upgrade?",
    a: "Nothing. We will offer a robust free tier for individual developers. If you choose not to subscribe to a paid tier, your account will downgrade to the free tier, and we will never charge you without your consent.",
  },
  {
    q: "When will paid plans launch?",
    a: "Paid plans are slated for release in late 2025. We will notify all users via email and in-dashboard notifications at least 30 days in advance.",
  },
  {
    q: "What will AgentTag cost after the beta?",
    a: "While final pricing is not yet set, we plan to keep our developer plan highly affordable, with a free tier always available. Professional and Team plans will scale based on agent concurrency and log volume.",
  },
  {
    q: "Is there a free tier after the beta?",
    a: "Yes, we are committed to keeping a permanent free tier for hobbyist projects, local developers, and open-source integrations.",
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
          Pricing
        </li>
      </ol>
    </nav>
  );
}

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Public Beta · No credit card required
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AgentTag pricing — free during the public beta
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            AgentTag is currently in free public beta. Get access to our entire suite of identity and governance tools
            without entering a credit card.
          </p>
        </header>

        {/* ── Pricing Card ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/30 via-white/5 to-zinc-950/20 p-8 sm:p-12 max-w-2xl mx-auto relative overflow-hidden">
            {/* Spotlight decoration */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
              <div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs font-medium text-zinc-200 uppercase tracking-wider">
                  Beta Plan
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">All Features Included</h3>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-display text-5xl font-bold text-white">$0</div>
                <div className="text-xs text-white/40 mt-1">Free during public beta</div>
              </div>
            </div>

            <h4 className="text-sm font-semibold text-white/95 mb-4">What is included:</h4>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {pricingFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-white/65">
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="16"
                    className="text-emerald-400 mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="https://agenttag.me"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-white/90 shadow-md hover:brightness-110 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Join the beta — free
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-[11px] text-white/45 mt-3">No credit card required · Instant setup</p>
            </div>
          </div>
        </section>

        {/* ── What happens when beta ends ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            What happens when the beta ends?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "📅",
                title: "30-day notice",
                body: "We will notify you at least 30 days before transitioning to paid plans. No surprise billing or sudden service cuts.",
              },
              {
                icon: "💎",
                title: "Founding user discount",
                body: "All public beta participants lock in a lifetime discount on post-beta paid plans to thank you for testing early.",
              },
              {
                icon: "🔄",
                title: "Zero migration work",
                body: "All of your agent passports, mandates, DIDs, and audit history carry over seamlessly. No redeployments needed.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Enterprise Strip ───────────────────────────────────────────── */}
        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-200 uppercase tracking-wider">
                Enterprise
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-2">Need self-hosting or compliance?</h3>
              <p className="text-sm text-white/55 mt-1">
                For teams requiring SAML SSO, SOC 2 reports, strict SLA uptime guarantees, and self-hosted environments.
              </p>
            </div>
            <a
              href="mailto:contact@agenttag.me"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95"
            >
              Contact enterprise
            </a>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Frequently asked questions about pricing
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/5 open:border-white/10 transition-colors"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                  <h3 className="font-semibold text-white text-sm leading-snug">{item.q}</h3>
                  <span className="shrink-0 text-white/30 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm text-white/60 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
