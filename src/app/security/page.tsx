import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Secure AI Agents in Production | AgentTag Security",
  description:
    "Learn how to secure autonomous AI agents in production: cryptographic identity with Ed25519, policy-gated mandates, hash-chained audit ledgers, and real-time revocation. AgentTag's security model explained.",
  keywords: [
    "how to secure AI agents",
    "AI agent security",
    "AI agent security best practices",
    "MCP server security",
    "AI agent access control",
    "AI agent audit trail",
    "AI agent identity security",
    "Ed25519 AI agent",
    "cryptographic AI agent identity",
    "AI agent revocation",
    "AI agent zero trust",
    "tamper-evident AI audit log",
    "multi-agent security",
    "agentic AI security",
    "AI agent threat model",
    "AI agent least privilege",
    "LangChain security",
    "CrewAI security",
    "Claude Desktop security",
    "autonomous agent security",
  ],
  alternates: { canonical: "https://agenttag.me/security" },
  openGraph: {
    title: "How to Secure AI Agents in Production | AgentTag",
    description:
      "Ed25519 passports, signed mandates, hash-chained audit ledgers, real-time revocation — AgentTag's security architecture for autonomous AI agents explained.",
    url: "https://agenttag.me/security",
    siteName: "AgentTag",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Secure AI Agents in Production | AgentTag",
    description: "AI agent security best practices: cryptographic identity, policy-gated mandates, tamper-evident audit, real-time revocation.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://agenttag.me/security#article",
      headline: "How to Secure AI Agents in Production",
      description:
        "A technical guide to securing autonomous AI agents using cryptographic identity, signed policy mandates, tamper-evident audit ledgers, and real-time revocation.",
      url: "https://agenttag.me/security",
      author: { "@id": "https://agenttag.me/#organization" },
      publisher: { "@id": "https://agenttag.me/#organization" },
      datePublished: "2025-07-14",
      dateModified: "2025-07-14",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://agenttag.me/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/security#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Security", item: "https://agenttag.me/security" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why are AI agents a security risk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agents are a security risk because they typically operate using shared human credentials (API keys, OAuth tokens) that give them unscoped access to production systems. If an agent is compromised through prompt injection or a model error, there is no scoped permission boundary to contain the blast radius, no audit trail attributable to the agent specifically, and no way to revoke just that agent's access without rotating credentials shared with other systems.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest security risk with AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The biggest security risk with AI agents is credential sharing — giving agents human API keys or shared secrets that provide unscoped, unaudited access. A secondary major risk is prompt injection: a malicious instruction that causes an agent to take actions the operator did not intend. AgentTag mitigates both by giving each agent scoped, signed permissions (mandates) that define exactly what it can do, and by requiring step-up human approval for sensitive actions.",
          },
        },
        {
          "@type": "Question",
          name: "How does AgentTag secure AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AgentTag secures AI agents through three layers: (1) Identity — each agent gets an Ed25519 keypair bound to a W3C DID, so every request is cryptographically signed and attributable; (2) Policy — signed mandates define exactly what each agent can do, with spend caps, allowed tools, expiry, and human-approval triggers; (3) Audit — every action is recorded in a SHA-256 hash-chained ledger that is tamper-evident and independently verifiable.",
          },
        },
        {
          "@type": "Question",
          name: "What is a tamper-evident audit ledger for AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A tamper-evident audit ledger is a record of agent actions where each entry includes the SHA-256 hash of the previous entry, forming a chain. Any retroactive modification — deleting, editing, or reordering an entry — breaks every subsequent hash in the chain. AgentTag's audit ledger can be exported and re-verified offline, so you can prove the record has not been altered since it was written.",
          },
        },
        {
          "@type": "Question",
          name: "What is prompt injection and how does AgentTag protect against it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prompt injection is when malicious content in a tool's response (or in a document the agent reads) attempts to override the agent's instructions and cause it to take unintended actions. AgentTag protects against prompt injection by enforcing signed mandates at the policy engine level — even if an injected instruction tells the agent to use a tool or exceed a spend limit, the policy engine rejects the action if the mandate does not permit it. Additionally, configuring mandates to require human step-up approval for sensitive actions ensures an operator can catch anomalous behaviour before it causes damage.",
          },
        },
        {
          "@type": "Question",
          name: "How do I revoke an AI agent's access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With AgentTag, you revoke an agent's access by revoking its mandate from the control plane UI or via CLI: `agenttag passport revoke <did>`. The change takes effect on the next request — no credential rotation, no system restart required. The revocation event is recorded in the audit ledger with a timestamp and reason. You can then issue a new passport for a replacement agent.",
          },
        },
        {
          "@type": "Question",
          name: "What is the principle of least privilege for AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The principle of least privilege for AI agents means giving each agent only the minimum permissions it needs to perform its specific task — no more. In practice this means: specifying exactly which MCP tools the agent may invoke (not all of them), setting a spend cap appropriate for the task, requiring human approval for actions above a risk threshold, and setting a short expiry on the mandate so permissions do not accumulate over time. AgentTag mandates make least-privilege agent permissions explicit and enforceable.",
          },
        },
        {
          "@type": "Question",
          name: "Is MCP (Model Context Protocol) secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MCP itself does not define an authentication or authorisation model — it specifies how clients and servers communicate, not who is allowed to do what. This means MCP servers are only as secure as the access controls put in front of them. AgentTag adds a security layer on top of MCP: each agent must present a signed, policy-checked mandate before any MCP tool call is honoured, and every call is recorded in a tamper-evident ledger.",
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
        <li className="text-white/70" aria-current="page">Security</li>
      </ol>
    </nav>
  );
}

function Toc() {
  const items = [
    { href: "#why-agents-are-risky", label: "Why AI agents are a security risk" },
    { href: "#how-agenttag-secures-agents", label: "How AgentTag secures agents" },
    { href: "#threat-model", label: "AI agent threat model" },
    { href: "#best-practices", label: "AI agent security best practices" },
    { href: "#faq", label: "Frequently asked questions" },
  ];
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">On this page</p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-sm text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-2 transition-colors">
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
    q: "Why are AI agents a security risk?",
    a: "AI agents typically operate using shared human credentials that give them unscoped access to production systems. If an agent is compromised, there is no permission boundary to contain the damage, no audit trail attributable to the agent, and no way to revoke just that agent's access without rotating shared credentials.",
  },
  {
    q: "What is the biggest security risk with AI agents?",
    a: "Credential sharing — giving agents human API keys or shared secrets that provide unscoped, unaudited access. A secondary major risk is prompt injection: malicious instructions that cause an agent to take actions the operator did not intend. AgentTag mitigates both through scoped signed mandates and step-up human approval for sensitive actions.",
  },
  {
    q: "How does AgentTag secure AI agents?",
    a: "Three layers: (1) Identity — Ed25519 keypair + W3C DID so every request is cryptographically signed and attributable; (2) Policy — signed mandates define exactly what each agent can do; (3) Audit — SHA-256 hash-chained ledger that is tamper-evident and independently verifiable.",
  },
  {
    q: "What is a tamper-evident audit ledger?",
    a: "A ledger where each entry includes the SHA-256 hash of the previous entry. Any retroactive modification breaks every subsequent hash. AgentTag's ledger can be exported and re-verified offline.",
  },
  {
    q: "What is prompt injection and how does AgentTag address it?",
    a: "Prompt injection is when malicious content in a tool's response attempts to override an agent's instructions. AgentTag enforces signed mandates at the policy engine level — even injected instructions can't cause the agent to exceed what the mandate permits. Sensitive actions can require human step-up approval.",
  },
  {
    q: "How do I revoke an AI agent's access?",
    a: "Run `agenttag passport revoke <did>` or revoke from the control plane UI. Takes effect on the next request — no credential rotation or system restart needed. The revocation is recorded in the audit ledger.",
  },
  {
    q: "Is MCP (Model Context Protocol) secure?",
    a: "MCP does not define an authentication or authorisation model — it specifies communication, not permissions. AgentTag adds a security layer: each agent must present a signed, policy-checked mandate before any MCP tool call is honoured, and every call is recorded in a tamper-evident ledger.",
  },
  {
    q: "What is least privilege for AI agents?",
    a: "Giving each agent only the permissions it needs for its specific task: specifying which MCP tools it may call, setting a spend cap, requiring human approval above a risk threshold, and setting a mandate expiry so permissions don't accumulate. AgentTag mandates make least-privilege permissions explicit and enforceable.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Security & Trust Center
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            How to secure AI agents in production
          </h1>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 mb-6">
            <p className="text-white/85 text-lg leading-relaxed">
              Securing an AI agent requires three things that shared API keys cannot provide: a <strong className="text-white">distinct, revocable identity</strong> per agent, <strong className="text-white">scoped permissions</strong> that constrain what it can do, and a <strong className="text-white">verifiable audit trail</strong> of everything it did. AgentTag provides all three as a layer on top of your existing MCP or A2A stack.
            </p>
          </div>
          <p className="text-white/55 text-base leading-relaxed">
            This page explains the AI agent threat model, AgentTag&apos;s security architecture, and best practices for teams deploying autonomous agents in production.
          </p>
        </header>

        <Toc />

        {/* ── Why agents are risky ──────────────────────────────────────── */}
        <section id="why-agents-are-risky" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            Why AI agents are a security risk
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            AI agents are powerful precisely because they can take autonomous action: calling APIs, executing code, managing files, spending money. That autonomy is also what makes them dangerous when access controls are inadequate.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            The core problem is that most agent deployments rely on <strong className="text-white/90">credential sharing</strong> — giving agents a human&apos;s API key or injecting shared secrets into the agent&apos;s environment. This creates three compounding security failures:
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                num: "1",
                heading: "No scope boundary",
                body: "A shared key gives the agent every permission the human has — read, write, delete, spend. There is no way to say \"this agent may only read customer records\" without building a custom permission layer from scratch.",
              },
              {
                num: "2",
                heading: "No attribution",
                body: "When an agent acts with a human's key, the audit log records the human as the actor. In a security incident, you cannot distinguish what the agent did from what a human did — making forensic investigation nearly impossible.",
              },
              {
                num: "3",
                heading: "No targeted revocation",
                body: "If an agent is compromised, revoking its access means rotating the shared key — which breaks every other system and agent using the same key. There is no way to cut off one agent without collateral damage.",
              },
            ].map((item) => (
              <div key={item.num} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-5">
                <div className="shrink-0 h-7 w-7 rounded-full bg-red-900/40 border border-red-500/30 flex items-center justify-center text-xs font-bold text-red-400">{item.num}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.heading}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/10 p-5">
            <p className="text-sm text-amber-200/80 leading-relaxed">
              <strong className="text-amber-300">Prompt injection</strong> compounds these risks: a malicious instruction in a tool response or document the agent reads can cause it to take actions the operator did not intend. Without scoped permissions, the only limit on the damage is what the shared key allows — which is often everything.
            </p>
          </div>
        </section>

        {/* ── How AgentTag secures agents ───────────────────────────────── */}
        <section id="how-agenttag-secures-agents" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            How AgentTag secures AI agents
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            AgentTag is built on three security primitives that compose with any MCP or A2A stack without replacing it:
          </p>
          <div className="space-y-6">
            {[
              {
                tag: "Layer 1 · Identity",
                title: "Ed25519 cryptographic passport per agent",
                body: "Every agent is issued an Ed25519 keypair bound to a W3C Decentralized Identifier (DID). The private key is stored in an isolated vault — it never appears in logs, environment variables, or agent outputs. Every request the agent makes is signed with this key. This creates a cryptographically verifiable chain from each action back to the specific agent that performed it, regardless of what shared infrastructure is involved.",
                detail: "Standard: Ed25519 / W3C DID · Key storage: isolated vault · Attribution: per-request signature",
                color: "emerald",
              },
              {
                tag: "Layer 2 · Policy",
                title: "Signed mandates define exactly what agents can do",
                body: "A mandate is a cryptographically signed JSON document specifying: which MCP tools the agent may invoke, a spend cap, actions that require human step-up approval, and an expiry date. The policy engine evaluates mandates at request time — not at agent startup — so permissions are always current. If a mandate is revoked, the change takes effect on the next request without restarting the agent. Even a successful prompt injection cannot cause the agent to exceed what the mandate permits.",
                detail: "Evaluation: per-request · Revocation: instant · Scope: per-tool, per-spend, per-action",
                color: "monochrome",
              },
              {
                tag: "Layer 3 · Audit",
                title: "Hash-chained tamper-evident ledger",
                body: "Every action an agent takes is recorded as a signed entry in a hash-chained ledger. Each entry includes the SHA-256 hash of the previous entry. Any retroactive modification — deleting, editing, or reordering entries — breaks every subsequent hash in the chain. The integrity of the entire ledger can be verified by anyone with the chain. You can export the full ledger and re-verify it offline at any time, independently of AgentTag's infrastructure.",
                detail: "Hash: SHA-256 · Chain: tamper-evident · Export: full ledger, offline-verifiable",
                color: "teal",
              },
            ].map((layer) => (
              <div key={layer.tag} className={`rounded-2xl border p-8 ${layer.color === "emerald" ? "border-emerald-500/20 bg-emerald-950/10" : layer.color === "monochrome" ? "border-white/10 bg-white/5" : "border-teal-500/20 bg-teal-950/10"}`}>
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${layer.color === "emerald" ? "text-emerald-400" : layer.color === "monochrome" ? "text-zinc-200" : "text-teal-400"}`}>{layer.tag}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{layer.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{layer.body}</p>
                <code className="text-xs text-white/35 font-mono">{layer.detail}</code>
              </div>
            ))}
          </div>
        </section>

        {/* ── Threat model ──────────────────────────────────────────────── */}
        <section id="threat-model" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            AI agent threat model
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            Understanding what AgentTag protects against — and what it does not — is important for designing a complete security posture.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/60 font-semibold text-xs uppercase tracking-wide">Threat</th>
                  <th className="text-left p-4 text-white/60 font-semibold text-xs uppercase tracking-wide">AgentTag protection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Credential theft / shared key leak", "Each agent has its own key. Revoking one passport does not affect others."],
                  ["Agent over-permissioning", "Mandates enforce least-privilege per tool, per spend, per action."],
                  ["Prompt injection causing unintended actions", "Policy engine rejects actions not permitted by the mandate, even if the model requests them."],
                  ["Runaway spend / API abuse", "Spend caps in mandates block charges above the configured threshold."],
                  ["Audit log tampering", "SHA-256 hash chain makes retroactive edits verifiable and detectable."],
                  ["Difficulty revoking a compromised agent", "Single-step mandate revocation, effective on next request, no shared credential rotation needed."],
                  ["Inability to attribute actions to specific agents", "Every action is signed with the agent's Ed25519 key and recorded with its DID."],
                  ["Model hallucination causing harmful actions", "Step-up approval gates require human confirmation before sensitive or high-value actions proceed."],
                ].map(([threat, protection], i) => (
                  <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <td className="p-4 text-white/70 align-top">{threat}</td>
                    <td className="p-4 text-white/55 align-top">{protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Best practices ────────────────────────────────────────────── */}
        <section id="best-practices" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            AI agent security best practices
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            The following practices apply regardless of which governance tooling you use, but AgentTag is built to make all of them easy to enforce:
          </p>
          <ol className="space-y-5">
            {[
              {
                n: "1",
                title: "Give each agent its own identity",
                body: "Never share credentials between agents or between agents and humans. Per-agent identity is the foundation of attribution, scoping, and clean revocation.",
              },
              {
                n: "2",
                title: "Enforce least privilege at the policy layer, not at the application layer",
                body: "Permissions defined in application code can be bypassed by prompt injection. Permissions enforced by a policy engine that evaluates every request cannot be overridden by the model.",
              },
              {
                n: "3",
                title: "Use short-lived mandates",
                body: "Set expiry dates on mandates appropriate to the task duration. A mandate that expires in 1 hour has a bounded blast radius even if the associated passport is compromised.",
              },
              {
                n: "4",
                title: "Require human approval for high-risk actions",
                body: "Configure step-up approval for actions with large blast radius: deleting data, sending external communications, executing code, spending above a threshold. The agent pauses and waits for confirmation.",
              },
              {
                n: "5",
                title: "Export and verify your audit ledger regularly",
                body: "Treat the audit ledger like an append-only log. Regularly export it and verify the hash chain. Any break in the chain is a signal of tampering.",
              },
              {
                n: "6",
                title: "Monitor for mandate violations",
                body: "Policy rejections are signals, not just noise. An agent repeatedly attempting actions outside its mandate is a strong indicator of prompt injection or misbehaviour. Set up alerts.",
              },
            ].map((item) => (
              <li key={item.n} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-5">
                <div className="shrink-0 h-7 w-7 rounded-full bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-400">{item.n}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Compliance strip ──────────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-16">
          <h2 className="font-display text-lg font-bold text-white mb-6">Infrastructure security</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Encryption at rest", value: "AES-256", note: "All data stored at rest is encrypted." },
              { label: "Encryption in transit", value: "TLS 1.3", note: "All connections use TLS 1.3. HSTS enforced. Deprecated cipher suites rejected." },
              { label: "Data residency", value: "US or EU", note: "Choose your region. Data does not cross regional boundaries. Self-hosted option available." },
              { label: "Staff access", value: "Zero standing", note: "No standing access to customer data. All access is logged in the same audit infrastructure." },
              { label: "SOC 2 Type II", value: "In progress", note: "Audit in progress. Report available to enterprise customers on request." },
              { label: "GDPR", value: "Compliant", note: "Data processing agreements, right-to-erasure workflows, and EU data residency in place." },
            ].map((c) => (
              <div key={c.label}>
                <div className="text-xs text-white/40 uppercase tracking-wide mb-1">{c.label}</div>
                <div className="font-semibold text-white text-sm mb-1">{c.value}</div>
                <div className="text-xs text-white/45 leading-relaxed">{c.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            AI agent security — frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 open:border-emerald-500/30 transition-colors">
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

        {/* ── Internal links ────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Related pages</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a href="/about" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">About</div>
              <div className="text-sm font-semibold text-white group-hover:underline">What is AgentTag?</div>
            </a>
            <a href="/support" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">Support</div>
              <div className="text-sm font-semibold text-white group-hover:underline">Common questions</div>
            </a>
            <a href="/privacy" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">Privacy</div>
              <div className="text-sm font-semibold text-white group-hover:underline">How we handle your data</div>
            </a>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-teal-950/20 p-10 sm:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Secure your first agent in five minutes
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            AgentTag is free during the public beta. One CLI command gives any MCP-compatible agent a cryptographic passport, a scoped mandate, and a tamper-evident audit trail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://agenttag.me" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95">
              Get started free
              <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95">
              How AgentTag works →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
