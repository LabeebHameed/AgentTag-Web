import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentTag vs Shared API Keys — Why AI Agents Need Their Own Identity",
  description:
    "Comparing AgentTag agent passports to shared API keys: scope, attribution, revocation, audit, and blast radius. Why giving AI agents shared credentials is a security anti-pattern.",
  keywords: [
    "AgentTag vs API keys",
    "AI agent identity vs shared credentials",
    "why not give agents API keys",
    "AgentTag alternative",
    "AI agent governance comparison",
    "agent passport vs API key",
    "cryptographic agent identity benefits",
  ],
  alternates: { canonical: "https://agenttag.me/compare" },
  openGraph: {
    title: "AgentTag vs Shared API Keys — Why AI Agents Need Their Own Identity",
    description:
      "Comparing AgentTag agent passports to shared API keys: scope, attribution, revocation, audit, and blast radius.",
    url: "https://agenttag.me/compare",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentTag vs Shared API Keys — Why AI Agents Need Their Own Identity",
    description:
      "Comparing AgentTag agent passports to shared API keys: scope, attribution, revocation, audit, and blast radius.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/compare",
      url: "https://agenttag.me/compare",
      name: "AgentTag vs Shared API Keys — Why AI Agents Need Their Own Identity",
      description: "Comparing AgentTag agent passports to shared API keys: scope, attribution, revocation, audit, and blast radius.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/compare#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/compare#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://agenttag.me/compare" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is giving an agent my API key unsafe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Giving an AI agent a shared API key grants it broad, unscoped access. If the agent misbehaves due to model error or prompt injection, it has full permissions to execute any commands the key allows. It also makes auditing impossible, as all actions show up in logs as if they were done by you.",
          },
        },
        {
          "@type": "Question",
          name: "What is an agent passport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An agent passport is a cryptographic identity (Ed25519 keypair bound to a W3C DID) issued specifically to one agent. Every action is signed using this key, providing verifiable attribution and isolation.",
          },
        },
        {
          "@type": "Question",
          name: "How does AgentTag enforce scope constraints?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag enforces constraints using signed mandates. A mandate dictates what tools, parameters, spending thresholds, and expiry dates apply to the agent, checking every request in real time.",
          },
        },
        {
          "@type": "Question",
          name: "Is mandate revocation instant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Since mandates are evaluated at request time, revoking a mandate in the control plane invalidates permissions instantly. You do not need to restart the agent or rotate keys.",
          },
        },
        {
          "@type": "Question",
          name: "What is the performance latency with AgentTag?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag's policy engine checks mandates with a latency of less than 50 milliseconds, adding virtually zero noticeable overhead to model response times.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag see our raw application data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AgentTag only processes and logs execution metadata (timestamps, tool names, mandate IDs, status codes). We do not record or view the raw contents of requests or responses.",
          },
        },
      ],
    },
  ],
};

const compareData = [
  {
    feature: "Identity Type",
    shared: "Shared (impersonates human credentials)",
    passport: "Cryptographic (Ed25519 Keypair + W3C DID per agent)",
    status: "positive",
  },
  {
    feature: "Attribution & Auditing",
    shared: "Indistinguishable (logs register human operator)",
    passport: "Attributable (every action signed by specific agent)",
    status: "positive",
  },
  {
    feature: "Permission Scope",
    shared: "Broad/Unscoped (accesses everything key allows)",
    passport: "Least Privilege (tool, parameter, spend, and time caps)",
    status: "positive",
  },
  {
    feature: "Revocation Process",
    shared: "Collateral (requires rotating key used by others)",
    passport: "Targeted (revoke single mandate in real time)",
    status: "positive",
  },
  {
    feature: "Blast Radius",
    shared: "Unlimited",
    passport: "Bounded by active mandate scope",
    status: "positive",
  },
  {
    feature: "Prompt Injection Defence",
    shared: "None (executes whatever model requests)",
    passport: "Policy Gate (blocks out-of-mandate operations)",
    status: "positive",
  },
];

const faqs = [
  {
    q: "Why is giving an agent my API key unsafe?",
    a: "It gives the agent broad, unscoped access. If the agent misbehaves due to model error or prompt injection, it has full permissions to execute any commands the key allows. It also makes auditing impossible, as all actions show up in logs as if they were done by you.",
  },
  {
    q: "What is an agent passport?",
    a: "An agent passport is a cryptographic identity (Ed25519 keypair bound to a W3C DID) issued specifically to one agent. Every action is signed using this key, providing verifiable attribution and isolation.",
  },
  {
    q: "How does AgentTag enforce scope constraints?",
    a: "AgentTag enforces constraints using signed mandates. A mandate dictates what tools, parameters, spending thresholds, and expiry dates apply to the agent, checking every request in real time.",
  },
  {
    q: "Is mandate revocation instant?",
    a: "Yes. Since mandates are evaluated at request time, revoking a mandate in the control plane invalidates permissions instantly. You do not need to restart the agent or rotate keys.",
  },
  {
    q: "What is the performance latency with AgentTag?",
    a: "AgentTag's policy engine checks mandates with a latency of less than 50 milliseconds, adding virtually zero noticeable overhead to model response times.",
  },
  {
    q: "Does AgentTag see our raw application data?",
    a: "No. AgentTag only processes and logs execution metadata (timestamps, tool names, mandate IDs, status codes). We do not record or view the raw contents of requests or responses.",
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
          Compare
        </li>
      </ol>
    </nav>
  );
}

export default function ComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            ⚖️ Architecture Comparison
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AgentTag vs shared API keys — why AI agents need their own identity
          </h1>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
            <p className="text-white/85 text-lg leading-relaxed">
              Most AI agent deployments give agents shared human API keys or environment-variable credentials.{" "}
              <strong className="text-white">AgentTag</strong> replaces this pattern with per-agent cryptographic identities,
              signed mandates, and tamper-evident audit trails — giving teams scope, attribution, and clean revocation that
              shared credentials cannot provide.
            </p>
          </div>
        </header>

        {/* ── Comparison Table ────────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">At a glance comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="text-left p-4 text-white font-semibold text-xs uppercase tracking-wider">Security Dimension</th>
                  <th className="text-left p-4 text-red-400 font-semibold text-xs uppercase tracking-wider bg-red-950/10">
                    Shared API Keys
                  </th>
                  <th className="text-left p-4 text-emerald-400 font-semibold text-xs uppercase tracking-wider bg-emerald-950/10">
                    Agent Passport
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareData.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="p-4 text-white/80 font-medium align-middle">{row.feature}</td>
                    <td className="p-4 text-red-300/80 align-middle bg-red-950/5">{row.shared}</td>
                    <td className="p-4 text-emerald-300/90 align-middle bg-emerald-950/5 font-medium">{row.passport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Failure Modes ──────────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            The three failure modes of shared credentials
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1. The Scope Vulnerability",
                body: "When an agent uses a shared API key, it has broad, unchecked permissions. An autonomous coding agent compromised via malicious repository code could delete files, download secrets, or purchase paid SaaS upgrades because the shared credential lacks parameter-level boundaries.",
              },
              {
                title: "2. The Attribution Void",
                body: "Audit logs from your cloud providers and tools will record all actions as having been performed by the account owner. You cannot separate actions initiated by human operators from actions run by the LLM agent — rendering incident investigation impossible.",
              },
              {
                title: "3. The Cascade Revocation Problem",
                body: "If a single agent's access token is leaked or its execution logic is hijacked, disabling the access key breaks every other agent and automated workflow sharing that token. The resulting downtime causes teams to delay revoking access, compounding the breach duration.",
              },
            ].map((mode) => (
              <div key={mode.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">{mode.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{mode.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">Frequently asked questions</h2>
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

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 sm:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Switch from API keys to agent passports
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Protect your production integrations using cryptographic identity and mandates. Free during public beta.
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
              href="/security"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95"
            >
              Read the security guide →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
