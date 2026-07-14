import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentTag Use Cases — AI Agent Governance in Production | AgentTag",
  description:
    "Discover when and why teams use AgentTag: securing LLM agents in production, governing multi-agent pipelines, enforcing spend limits, audit compliance, and more.",
  keywords: [
    "AI agent governance use cases",
    "when to use AgentTag",
    "AI agent use cases for governance",
    "enterprise AI agent deployment",
    "AI agent security use case",
    "governing production AI agents",
    "multi-agent governance",
    "AI agents in production",
  ],
  alternates: { canonical: "https://agenttag.me/use-cases" },
  openGraph: {
    title: "AgentTag Use Cases — AI Agent Governance in Production",
    description:
      "Discover when and why teams use AgentTag: securing LLM agents in production, governing multi-agent pipelines, enforcing spend limits, audit compliance.",
    url: "https://agenttag.me/use-cases",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentTag Use Cases — AI Agent Governance in Production",
    description:
      "Discover when and why teams use AgentTag: securing LLM agents in production, governing multi-agent pipelines, enforcing spend limits.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/use-cases",
      url: "https://agenttag.me/use-cases",
      name: "AgentTag Use Cases — AI Agent Governance in Production | AgentTag",
      description: "Discover when and why teams use AgentTag: securing LLM agents in production, governing multi-agent pipelines, enforcing spend limits, audit compliance.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/use-cases#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/use-cases#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://agenttag.me/use-cases" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When should I use AgentTag for my AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should use AgentTag when your AI agents have write access to databases, file systems, internal APIs, or financial transactional tools. It is also highly recommended when deploying multi-agent systems where credentials cannot easily be shared or segmented, or when you require strict compliance audits.",
          },
        },
        {
          "@type": "Question",
          name: "How does AgentTag defend against prompt injection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag defends against prompt injection by enforcing constraints at the policy engine proxy level. Even if an injection attack compromises the agent's LLM context and commands it to run unauthorized tools or spend money, the request is intercepted and denied by AgentTag's signed mandate checks.",
          },
        },
        {
          "@type": "Question",
          name: "Can AgentTag manage spending caps for purchasing agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can configure hard spend limits inside an agent's mandate. Any tool execution that attempts to charge above the limit is rejected, or paused to await manual step-up human approval.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag help with SOC 2 compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. By providing a tamper-evident, SHA-256 hash-chained audit ledger of every agent action, AgentTag provides the cryptographically verifiable evidence reports that compliance auditors require for AI system oversight.",
          },
        },
        {
          "@type": "Question",
          name: "When is AgentTag not the right fit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag is not necessary if you are running simple read-only queries locally, prototyping simple conversational models without external tool access, or if you do not have production deployments containing sensitive systems.",
          },
        },
      ],
    },
  ],
};

const audiences = [
  {
    role: "Engineering Teams",
    desc: "Deploying multi-agent pipelines to production who need granular access controls, rate limiting, and instant revocation.",
  },
  {
    role: "Security & Compliance",
    desc: "Answering 'what did the AI do and who authorized it?' with cryptographically signed logs rather than raw text files.",
  },
  {
    role: "AI & LLM Developers",
    desc: "Building with Claude, LangChain, or custom MCP servers who want to limit the blast radius of experimental tool usage.",
  },
  {
    role: "Enterprise Operators",
    desc: "Overseeing fleet-wide deployments with SAML authentication, region residency limits, and offline log verification.",
  },
];

const usecases = [
  {
    id: "uc-1",
    title: "Securing LLM agents with production system access",
    body: "When an AI agent has write permissions to databases, internal directories, or deployment APIs, a single model drift or instruction error can cause data loss. AgentTag scopes the agent's permissions down to least privilege per-tool parameters, logging all commands.",
  },
  {
    id: "uc-2",
    title: "Enforcing spend limits on autonomous purchasing agents",
    body: "Agents tasked with purchasing SaaS tools, calling paid external APIs, or sending transactions need strict financial guardrails. AgentTag mandates enforce spend limits at the policy layer and request manual human authorization above thresholds.",
  },
  {
    id: "uc-3",
    title: "Multi-agent pipeline governance",
    body: "In multi-agent loops, credentials must be isolated. AgentTag provisions separate passports for separate roles. If one sub-agent is compromised, you can revoke its specific mandate instantly without disrupting the remaining pipeline.",
  },
  {
    id: "uc-4",
    title: "Audit compliance in regulated industries",
    body: "Regulated fields (healthcare, legal, banking) require immutable verification logs. AgentTag's SHA-256 hash-chained ledger ensures that audit trails cannot be altered retroactively. Logs are exportable for offline compliance verification.",
  },
  {
    id: "uc-5",
    title: "Developer tooling governance (IDE agents)",
    body: "IDE coding assistants have broad terminal and repository access. Connect AgentTag to IDE clients like Cursor, Cline, or Windsurf to restrict write scopes to specific folders, block dangerous commands, and audit edits.",
  },
  {
    id: "uc-6",
    title: "Prompt injection containment",
    body: "Agents interacting with untrusted web content can fall victim to prompt injection. AgentTag's policy engine intercepts and blocks unauthorized calls at the gateway, preventing prompt-injected commands from reaching backend APIs.",
  },
  {
    id: "uc-7",
    title: "Enterprise agent fleet management",
    body: "Monitor and govern your entire enterprise agent fleet from a single control pane. Review active mandates, inspect real-time audit ledger entries, configure SSO authentication, and revoke passports in one step.",
  },
  {
    id: "uc-8",
    title: "Safe R&D and sandbox testing",
    body: "Allows research and development teams to run live experiments with agent tool usage inside safe boundaries. Set strict spend limits and restrict network tools to prevent sandboxed models from causing external issues.",
  },
];

const faqs = [
  {
    q: "When should I use AgentTag for my AI agents?",
    a: "You should use AgentTag when your AI agents have write access to databases, file systems, internal APIs, or financial transactional tools. It is also highly recommended when deploying multi-agent systems where credentials cannot easily be shared or segmented, or when you require strict compliance audits.",
  },
  {
    q: "How does AgentTag defend against prompt injection?",
    a: "AgentTag defends against prompt injection by enforcing constraints at the policy engine proxy level. Even if an injection attack compromises the agent's LLM context and commands it to run unauthorized tools or spend money, the request is intercepted and denied by AgentTag's signed mandate checks.",
  },
  {
    q: "Can AgentTag manage spending caps for purchasing agents?",
    a: "Yes, you can configure hard spend limits inside an agent's mandate. Any tool execution that attempts to charge above the limit is rejected, or paused to await manual step-up human approval.",
  },
  {
    q: "Does AgentTag help with SOC 2 compliance?",
    a: "Yes. By providing a tamper-evident, SHA-256 hash-chained audit ledger of every agent action, AgentTag provides the cryptographically verifiable evidence reports that compliance auditors require for AI system oversight.",
  },
  {
    q: "When is AgentTag not the right fit?",
    a: "AgentTag is not necessary if you are running simple read-only queries locally, prototyping simple conversational models without external tool access, or if you do not have production deployments containing sensitive systems.",
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
          Use Cases
        </li>
      </ol>
    </nav>
  );
}

export default function UseCasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            🎯 Production Deployment
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AgentTag use cases — governing AI agents in production
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            AgentTag is built for engineering teams, security officers, and AI builders deploying autonomous agents into
            sensitive environments.
          </p>
        </header>

        {/* ── Audiences ─────────────────────────────────────────────────── */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {audiences.map((aud) => (
            <div key={aud.role} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/10 transition-all duration-300">
              <h3 className="font-display text-base font-bold text-white mb-2">{aud.role}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </section>

        {/* ── Use Cases List ────────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">Common use cases</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {usecases.map((uc) => (
              <div
                key={uc.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/10 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                  {uc.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{uc.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Honest Section (When not to use) ────────────────────────────── */}
        <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-display text-lg font-bold text-white mb-4">When is AgentTag not the right fit?</h2>
          <div className="space-y-4 text-sm text-white/55 leading-relaxed">
            <p>
              AgentTag is designed to add cryptographic governance to production-grade agents. You likely do not need
              AgentTag if:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are building simple read-only bots (e.g. conversational search bots that cannot alter system states).</li>
              <li>You are in early prototyping stages and running models locally without connecting them to active APIs.</li>
              <li>You do not have a need for spend caps, granular tool security, or attributable audit ledger histories.</li>
            </ul>
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
            Secure your agent fleet today
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Deploy autonomous agents with confidence, governed by cryptographic mandates. Free during public beta.
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
              href="/integrations"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95"
            >
              Explore integrations →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
