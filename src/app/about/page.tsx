import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is AgentTag? AI Agent Identity & Governance Explained",
  description:
    "AgentTag is a control plane that gives every AI agent its own cryptographic identity, signed mandate, and tamper-evident audit ledger — so teams can deploy autonomous agents in production without losing control or auditability.",
  keywords: [
    "what is AgentTag",
    "AgentTag explained",
    "AI agent governance platform",
    "AI agent identity management",
    "how AgentTag works",
    "AgentTag vs API keys",
    "AI agent control plane",
    "autonomous agent governance",
    "MCP governance",
    "agent mandate",
    "AI agent audit trail",
    "AI agent security platform",
    "AI agent access control",
    "agentic AI governance",
    "multi-agent identity",
  ],
  alternates: { canonical: "https://agenttag.me/about" },
  openGraph: {
    title: "What is AgentTag? AI Agent Identity & Governance Explained",
    description:
      "AgentTag gives every AI agent its own cryptographic identity, signed mandate, and tamper-evident audit ledger. Deploy autonomous agents without losing control.",
    url: "https://agenttag.me/about",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is AgentTag? AI Agent Identity & Governance Explained",
    description:
      "AgentTag gives every AI agent its own cryptographic identity and signed mandate. Deploy autonomous agents without losing control.",
  },
  robots: { index: true, follow: true },
};

// ── JSON-LD structured data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://agenttag.me/#organization",
      name: "AgentTag",
      url: "https://agenttag.me",
      logo: "https://agenttag.me/logo.png",
      description:
        "AgentTag is a control plane for AI agent identity and governance. It gives every autonomous AI agent its own cryptographic credentials, signed mandates, and a tamper-evident audit ledger.",
      foundingDate: "2025",
      contactPoint: [
        { "@type": "ContactPoint", email: "contact@agenttag.me", contactType: "customer support" },
        { "@type": "ContactPoint", email: "contact@agenttag.me", contactType: "security" },
      ],
      sameAs: [],
    },
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/about",
      url: "https://agenttag.me/about",
      name: "What is AgentTag? AI Agent Identity & Governance Explained",
      description:
        "AgentTag is a control plane that gives every AI agent its own cryptographic identity, signed mandate, and tamper-evident audit ledger.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      about: { "@id": "https://agenttag.me/#organization" },
      breadcrumb: { "@id": "https://agenttag.me/about#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/about#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://agenttag.me/about" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AgentTag?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag is a control plane for AI agent identity and governance. It gives every autonomous AI agent its own cryptographic keypair (Ed25519), a W3C DID-based identity, a signed mandate defining what it is permitted to do, and a tamper-evident hash-chained audit ledger of every action it takes. Unlike sharing API keys with agents, AgentTag gives each agent a distinct, revocable identity so access can be scoped, monitored, and cut off instantly.",
          },
        },
        {
          "@type": "Question",
          name: "What problem does AgentTag solve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most teams give AI agents access by sharing human API keys or environment variables. This means the agent can do anything the human can do, there is no audit trail attributable to the agent specifically, and revoking access means rotating credentials that other systems depend on. AgentTag solves this by giving each agent its own distinct cryptographic identity with scoped, policy-gated permissions that can be revoked in a single step.",
          },
        },
        {
          "@type": "Question",
          name: "How is AgentTag different from giving an AI agent my API keys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "API keys give an agent broad, unscoped access. AgentTag gives each agent a separate cryptographic identity with a signed mandate that specifies exactly which tools it can use, how much it can spend, when it must ask for human approval, and when access expires. Every action is recorded in a tamper-evident audit ledger — so you know exactly what each agent did and why.",
          },
        },
        {
          "@type": "Question",
          name: "What is an agent passport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An agent passport is a cryptographic identity — an Ed25519 keypair bound to a W3C Decentralized Identifier (DID) — that belongs exclusively to one agent. The private key never leaves the agent runtime. Every request the agent makes is signed with this key, creating a verifiable chain of attribution from each action back to the specific agent that performed it.",
          },
        },
        {
          "@type": "Question",
          name: "What is an agent mandate in AgentTag?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A mandate is a cryptographically signed policy document that defines what an agent is permitted to do: which tools it can invoke, spend caps, escalation triggers (actions that require human approval), and an expiry date. Mandates are evaluated at request time by the policy engine and can be revoked instantly without restarting the agent or rotating shared credentials.",
          },
        },
        {
          "@type": "Question",
          name: "Which AI agent frameworks does AgentTag work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag works with any MCP-compatible client or A2A agent runtime, including Claude Desktop, CrewAI, LangChain, and custom MCP stacks. It sits in front of your existing MCP servers as a policy and identity surface — your existing clients continue to work unchanged.",
          },
        },
        {
          "@type": "Question",
          name: "Is AgentTag free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AgentTag is free during the public beta with generous usage limits. Users who join during the beta will receive founding-user pricing when paid plans launch. You will receive at least 30 days' notice before the beta period ends.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with AgentTag?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run `agenttag mcp add --client claude` to mint your first agent passport and register a mandate. The CLI walks through the rest of setup. You can then manage all agents, mandates, and audit logs from the AgentTag control plane at agenttag.me.",
          },
        },
      ],
    },
  ],
};

// ── Sub-components ───────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-xs text-white/40">
        <li><a href="https://agenttag.me" className="hover:text-white transition-colors">Home</a></li>
        <li aria-hidden="true">›</li>
        <li className="text-white/70" aria-current="page">About</li>
      </ol>
    </nav>
  );
}

function Toc() {
  const items = [
    { href: "#what-is-agenttag", label: "What is AgentTag?" },
    { href: "#the-problem", label: "The problem AgentTag solves" },
    { href: "#how-it-works", label: "How AgentTag works" },
    { href: "#who-is-it-for", label: "Who is it for?" },
    { href: "#faq", label: "Frequently asked questions" },
  ];
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12 not-prose">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">On this page</p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-sm text-zinc-200 hover:text-zinc-300 hover:underline underline-offset-2 transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const faqItems = [
  {
    q: "What is AgentTag?",
    a: "AgentTag is a control plane for AI agent identity and governance. It gives every autonomous AI agent its own cryptographic keypair (Ed25519), a W3C DID-based identity, a signed mandate defining what it is permitted to do, and a tamper-evident hash-chained audit ledger of every action it takes.",
  },
  {
    q: "What problem does AgentTag solve?",
    a: "Most teams give AI agents access by sharing human API keys or environment variables. This means the agent can do anything the human can do, there's no audit trail attributable to the agent specifically, and revoking access means rotating credentials other systems depend on. AgentTag solves this by giving each agent its own distinct cryptographic identity with scoped, revocable permissions.",
  },
  {
    q: "How is AgentTag different from giving an AI agent my API keys?",
    a: "API keys give an agent broad, unscoped access. AgentTag gives each agent a separate cryptographic identity with a signed mandate specifying exactly which tools it can use, spend limits, human-approval triggers, and expiry. Every action is recorded in a tamper-evident audit ledger.",
  },
  {
    q: "What is an agent passport?",
    a: "An agent passport is an Ed25519 keypair bound to a W3C DID that belongs exclusively to one agent. The private key never leaves the agent runtime. Every request the agent makes is signed with this key, creating verifiable attribution from each action back to the specific agent.",
  },
  {
    q: "Which AI frameworks does AgentTag work with?",
    a: "AgentTag works with any MCP-compatible client or A2A runtime: Claude Desktop, CrewAI, LangChain, and custom MCP stacks. It sits in front of your existing MCP servers — your clients continue to work unchanged.",
  },
  {
    q: "Is AgentTag free?",
    a: "Yes — free during the public beta with generous limits. Founding users lock in pricing when paid plans launch. You will get at least 30 days' notice before the beta ends.",
  },
  {
    q: "How do I install AgentTag?",
    a: "Run `agenttag mcp add --client claude` to mint your first agent passport and register a mandate. Setup takes under five minutes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Public Beta · Free to use
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            What is AgentTag?
          </h1>
          {/* Definition box — optimised for featured snippet extraction */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
            <p className="text-white/85 text-lg leading-relaxed">
              <strong className="text-white">AgentTag</strong> is a control plane that gives every autonomous AI agent its own cryptographic identity (an Ed25519 keypair bound to a W3C DID), a signed mandate that defines what it is permitted to do, and a tamper-evident hash-chained audit ledger of every action it takes — so teams can deploy agents in production without losing visibility or control.
            </p>
          </div>
          <p className="text-white/55 text-base leading-relaxed">
            Instead of giving agents shared API keys, AgentTag gives each agent a distinct, revocable identity. Access can be scoped to specific tools, capped at a spend limit, and cut off in a single step — with a signed audit trail proving what happened.
          </p>
        </header>

        <Toc />

        {/* ── The problem ───────────────────────────────────────────────── */}
        <section id="the-problem" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            The problem: why AI agents need their own identity
          </h2>
          <p className="text-white/65 leading-relaxed mb-5">
            Today, giving an AI agent access to a system means one of two things: handing it a human's API key, or injecting credentials into the agent's environment. Both approaches have the same three failure modes:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: "⚠️",
                title: "No scope",
                body: "An agent given a human's key can do everything that human can do. There is no way to say \"this agent may only read, not write\" or \"this agent's spend is capped at $50.\"",
              },
              {
                icon: "🔍",
                title: "No attribution",
                body: "When an agent acts with a shared key, the logs say the human did it. You cannot distinguish which agent took an action from the audit trail.",
              },
              {
                icon: "🔄",
                title: "No clean revocation",
                body: "Revoking a compromised agent means rotating credentials that every other agent and system depends on. There is no targeted revocation.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-white/65 leading-relaxed">
            AgentTag is built on the opposite principle: <strong className="text-white/90">delegation, not impersonation</strong>. Each agent has its own identity. The human doesn't lend the agent a borrowed key — the human signs a mandate granting specific, bounded authority.
          </p>
        </section>

        {/* ── How it works ──────────────────────────────────────────────── */}
        <section id="how-it-works" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            How AgentTag works
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            AgentTag is composed of three primitives that work together: an <strong className="text-white/90">identity layer</strong>, a <strong className="text-white/90">policy layer</strong>, and an <strong className="text-white/90">audit layer</strong>.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Mint an agent passport",
                body: "Run `agenttag mcp add --client claude`. The CLI generates an Ed25519 keypair and binds it to a W3C DID — the agent's permanent cryptographic identity. The private key is stored in an isolated vault; it never appears in logs or environment variables.",
                tags: ["Ed25519", "W3C DID", "< 1 min"],
              },
              {
                step: "2",
                title: "Issue a signed mandate",
                body: "Define what the agent is allowed to do in a mandate: which MCP tools it may call, its spend cap, which actions require step-up approval, and when the mandate expires. The mandate is cryptographically signed by the operator and evaluated at request time — not at agent startup.",
                tags: ["Policy-as-code", "Runtime enforcement", "Revocable"],
              },
              {
                step: "3",
                title: "Every action is recorded",
                body: "When the agent acts, the action is signed with its passport and appended to the audit ledger. Each entry includes the SHA-256 hash of the previous entry — making the chain tamper-evident. Any retroactive edit breaks every subsequent hash.",
                tags: ["SHA-256", "Hash-chained", "Exportable"],
              },
              {
                step: "4",
                title: "Revoke or re-scope instantly",
                body: "If an agent is compromised or a mandate needs to be updated, revoke it from the control plane or via CLI. The change takes effect on the next request — no credential rotation, no system restart, no blast radius beyond the single agent.",
                tags: ["Instant revocation", "No restart", "Bounded blast radius"],
              },
            ].map((item) => (
              <li key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-7 flex gap-6">
                <div className="font-display text-3xl font-bold text-white/10 shrink-0 leading-none pt-1">{item.step}</div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{item.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-zinc-200">{t}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Who is it for ─────────────────────────────────────────────── */}
        <section id="who-is-it-for" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            Who is AgentTag for?
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            AgentTag is for any team that deploys autonomous AI agents with access to real systems. Specifically:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "Engineering & platform teams",
                body: "Teams shipping multi-agent pipelines to production who need audit trails, access controls, and revocation without rebuilding authentication from scratch.",
              },
              {
                title: "Security & compliance teams",
                body: "Teams that need to answer \"what did that agent do, and who authorised it?\" — with cryptographic proof, not just application logs.",
              },
              {
                title: "AI / LLM developers",
                body: "Developers building on Claude Desktop, CrewAI, LangChain, or custom MCP stacks who want to give their agents least-privilege access to tools and APIs.",
              },
              {
                title: "Enterprise operators",
                body: "Organisations deploying agent fleets that need OIDC federation, region-scoped data residency, and a tamper-evident ledger they can export and verify independently.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="text-white/55 text-sm">
            AgentTag works with any <strong className="text-white/80">MCP-compatible client</strong> or <strong className="text-white/80">A2A agent runtime</strong> — Claude Desktop, CrewAI, LangChain, and custom stacks — without changes to existing clients.
            See also: <a href="/security" className="text-zinc-200 hover:underline">how AgentTag secures agents</a> · <a href="/support" className="text-zinc-200 hover:underline">common questions</a>.
          </p>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently asked questions about AgentTag
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 open:border-white/10 transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                  <h3 className="font-semibold text-white text-sm leading-snug">{item.q}</h3>
                  <span className="shrink-0 text-white/30 group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
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
            Start governing your agents today
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            AgentTag is free during the public beta. Add it to any MCP-compatible agent in under five minutes — no infrastructure changes required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://agenttag.me" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-white/90 shadow-md hover:brightness-110 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/50 transition-all hover:scale-105 active:scale-95">
              Join the beta — it&apos;s free
              <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="/security" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95">
              How AgentTag secures agents →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
