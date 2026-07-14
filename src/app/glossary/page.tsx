import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Governance Glossary — Key Terms Explained | AgentTag",
  description:
    "Definitions of key terms in AI agent governance, identity, and security: agent passport, mandate, tamper-evident ledger, W3C DID, Ed25519, MCP, A2A, prompt injection, least privilege, and more.",
  keywords: [
    "what is an agent passport",
    "what is an AI agent mandate",
    "what is tamper-evident audit log",
    "what is a W3C DID",
    "what is Ed25519",
    "AI agent governance glossary",
    "AI agent identity terms",
    "what is MCP protocol",
    "what is A2A agent protocol",
    "what is prompt injection",
    "what is least privilege for AI agents",
    "AI governance terminology",
  ],
  alternates: { canonical: "https://agenttag.me/glossary" },
  openGraph: {
    title: "AI Agent Governance Glossary — Key Terms Explained",
    description:
      "Definitions of key terms in AI agent governance, identity, and security: agent passport, mandate, tamper-evident ledger, W3C DID, Ed25519, MCP, A2A, prompt injection, least privilege.",
    url: "https://agenttag.me/glossary",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Governance Glossary — Key Terms Explained",
    description:
      "Definitions of key terms in AI agent governance, identity, and security: agent passport, mandate, tamper-evident ledger, W3C DID, Ed25519, MCP, A2A.",
  },
  robots: { index: true, follow: true },
};

const glossaryTerms = [
  {
    term: "A2A (Agent-to-Agent)",
    slug: "a2a",
    def: "A communication standard that enables AI agents to call other AI agents directly, forming multi-agent pipelines. A2A defines how agents exchange task requests, status updates, and results. AgentTag governs A2A calls by enforcing mandate checks on each inter-agent request.",
  },
  {
    term: "Agent Passport",
    slug: "agent-passport",
    def: "An agent passport is a cryptographic identity issued to a single AI agent: an Ed25519 keypair bound to a W3C Decentralized Identifier (DID). The passport's private key is stored in an isolated vault and never exposed in logs or environment variables. Every action the agent takes is signed with this key, creating a verifiable chain of attribution. Contrast with shared API keys, which cannot distinguish between agents.",
  },
  {
    term: "Audit Ledger",
    slug: "audit-ledger",
    def: "A sequential, cryptographically linked record of every action an AI agent takes. In AgentTag, each ledger entry includes the SHA-256 hash of the previous entry, making the chain tamper-evident: any retroactive modification breaks every subsequent hash. The ledger can be exported and independently verified without relying on AgentTag's infrastructure.",
  },
  {
    term: "Blast Radius",
    slug: "blast-radius",
    def: "The maximum scope of damage that can result from a security incident involving an AI agent. Blast radius is bounded by the agent's permissions: an agent with a narrow mandate that expires in one hour has a much smaller blast radius than an agent given full human API key access. Reducing blast radius is a core goal of AgentTag's mandate system.",
  },
  {
    term: "Credential Sharing",
    slug: "credential-sharing",
    def: "The practice of giving AI agents access to systems using credentials (API keys, tokens, passwords) that belong to a human or are shared between multiple agents. Credential sharing is the primary security anti-pattern that AgentTag is designed to replace: it prevents scoped access, clean attribution, and targeted revocation.",
  },
  {
    term: "Cryptographic Identity",
    slug: "cryptographic-identity",
    def: "An identity that is proven by a cryptographic keypair rather than by a password or secret. In AgentTag, each agent's identity is its Ed25519 keypair — possession of the private key proves identity. Cryptographic identity cannot be stolen by reading a log file or environment variable the way a shared API key can.",
  },
  {
    term: "DID (Decentralized Identifier)",
    slug: "did",
    def: "A W3C standard for identifiers that do not depend on a central authority to be valid. AgentTag binds each agent passport to a DID — a string like did:key:z6Mk... — that uniquely identifies the agent and can be resolved to its public key. DIDs are the foundation of self-sovereign identity for AI agents.",
  },
  {
    term: "Ed25519",
    slug: "ed25519",
    def: "An elliptic-curve digital signature algorithm used by AgentTag to generate agent passports. Ed25519 produces compact, fast, and highly secure keypairs. The private key signs each request the agent makes; the public key (embedded in the agent's DID) allows anyone to verify the signature. Ed25519 is used by SSH, Signal, and many modern cryptographic systems.",
  },
  {
    term: "Escalation",
    slug: "escalation",
    def: "The process by which an AI agent pauses and requests human approval before proceeding with an action. Escalation is triggered when an agent's mandate specifies a step-up condition — for example, spend above $100, deleting data, or sending external communications. The agent waits for a cryptographically signed approval from the operator before continuing.",
  },
  {
    term: "Governance (AI Agent)",
    slug: "governance",
    def: "The set of policies, controls, and audit mechanisms that constrain and record what AI agents can do in production. AI agent governance includes: identity (who is the agent?), policy (what is it allowed to do?), audit (what did it do?), and revocation (how is access removed?). AgentTag provides all four as a unified control plane.",
  },
  {
    term: "Hash Chain",
    slug: "hash-chain",
    def: "A sequence of data entries where each entry includes the cryptographic hash of the previous entry. Hash chains are tamper-evident: modifying any entry changes its hash, which no longer matches the reference stored in the next entry, breaking the chain from that point forward. AgentTag's audit ledger is a hash chain using SHA-256.",
  },
  {
    term: "Identity (AI Agent)",
    slug: "identity",
    def: "The mechanism by which an AI agent is uniquely identified in a system. In AgentTag, identity is cryptographic: each agent has its own Ed25519 keypair and W3C DID. Identity is distinct from authentication (proving identity) and authorisation (determining what an identity may do).",
  },
  {
    term: "Least Privilege",
    slug: "least-privilege",
    def: "A security principle stating that any entity (agent, user, process) should have only the minimum permissions required to perform its specific task. In AgentTag, least privilege is enforced through mandates: each mandate specifies exactly which tools an agent may invoke, its spend cap, and its expiry — no more access than the task requires.",
  },
  {
    term: "Mandate",
    slug: "mandate",
    def: "A cryptographically signed policy document that defines what a specific AI agent is permitted to do. A mandate specifies: allowed MCP tools, spend cap, step-up approval triggers, and an expiry date. Mandates are evaluated by the policy engine at request time (not at agent startup) and can be revoked instantly without restarting the agent.",
  },
  {
    term: "MCP (Model Context Protocol)",
    slug: "mcp",
    def: "An open standard developed by Anthropic that defines how AI language models communicate with external tools and data sources. MCP separates the AI client (e.g. Claude Desktop) from MCP servers (tools, APIs, databases). AgentTag adds an identity and policy layer on top of MCP — every MCP tool call is authenticated, policy-checked, and recorded before it reaches the server.",
  },
  {
    term: "MCP Server",
    slug: "mcp-server",
    def: "A process that exposes tools and resources to MCP-compatible AI clients via the Model Context Protocol. AgentTag sits in front of MCP servers as a policy surface: agents must present a valid, in-scope mandate before any tool call is forwarded to the underlying MCP server.",
  },
  {
    term: "Multi-Agent System",
    slug: "multi-agent-system",
    def: "A system in which multiple AI agents work together to complete complex tasks, with agents orchestrating other agents or calling specialized sub-agents. Multi-agent systems amplify the importance of identity and governance: each agent in the pipeline needs its own revocable identity so a single compromise does not cascade.",
  },
  {
    term: "Policy Engine",
    slug: "policy-engine",
    def: "The component of AgentTag that evaluates mandates at request time to decide whether an agent's action should be allowed, denied, or escalated for human approval. The policy engine runs on every tool call, checking the agent's mandate against the requested action, spend amount, and tool name.",
  },
  {
    term: "Prompt Injection",
    slug: "prompt-injection",
    def: "An attack in which malicious instructions embedded in a tool's response, document, or web page cause an AI agent to take actions the operator did not intend. Prompt injection is the primary AI-specific attack vector. AgentTag mitigates it by enforcing signed mandates at the policy engine level: even if an injected prompt instructs the agent to exceed its permissions, the policy engine blocks the action.",
  },
  {
    term: "Revocation",
    slug: "revocation",
    def: "The act of immediately invalidating an agent's mandate or passport, cutting off its access to all permitted tools. In AgentTag, revocation takes effect on the next request with no credential rotation or system restart required. The revocation event is recorded in the audit ledger with a timestamp and reason.",
  },
  {
    term: "SHA-256",
    slug: "sha-256",
    def: "A cryptographic hash function used by AgentTag's audit ledger to chain entries together. SHA-256 produces a fixed 256-bit digest for any input; changing even one bit of the input produces a completely different digest. This property makes SHA-256 hash chains tamper-evident.",
  },
  {
    term: "Step-Up Approval",
    slug: "step-up-approval",
    def: "A mechanism in which an AI agent pauses mid-task and sends a signed approval request to the human operator before proceeding with a sensitive action. The operator reviews the request and responds with a cryptographically signed approval or denial. Step-up approval is configured per-action in the mandate.",
  },
  {
    term: "Tamper-Evident",
    slug: "tamper-evident",
    def: "A property of a record or ledger that makes any modification detectable. AgentTag's audit ledger is tamper-evident because each entry contains the SHA-256 hash of the previous entry: altering any entry breaks the hash chain from that point forward, and the break is detectable by anyone who verifies the chain.",
  },
  {
    term: "Vault",
    slug: "vault",
    def: "An isolated secure storage component used by AgentTag to hold agent private keys. The vault ensures that private keys never appear in logs, environment variables, or network traffic. The vault signs requests on behalf of the agent; the key itself never leaves the vault.",
  },
  {
    term: "Zero Standing Access",
    slug: "zero-standing-access",
    def: "A security posture in which no person or process has permanent, always-on access to a sensitive system. Access is granted only when needed, logged, and time-limited. AgentTag's mandate system enforces zero standing access for AI agents: mandates have expiry dates, and revocation is instant.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/glossary",
      url: "https://agenttag.me/glossary",
      name: "AI Agent Governance Glossary — Key Terms Explained | AgentTag",
      description: "Definitions of key terms in AI agent governance, identity, and security.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/glossary#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/glossary#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://agenttag.me/glossary" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: glossaryTerms.map((t) => ({
        "@type": "Question",
        name: `What is ${t.term}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: t.def,
        },
      })),
    },
  ],
};

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
          Glossary
        </li>
      </ol>
    </nav>
  );
}

export default function GlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            📚 Reference Resource
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AI Agent Governance Glossary
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Definitions of every key term in AI agent identity, governance, and security — from agent passports to tamper-evident audit ledgers.
          </p>
        </header>

        {/* Alphabetical index / jump links */}
        <nav aria-label="Glossary index" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Jump to term</p>
          <div className="flex flex-wrap gap-2">
            {glossaryTerms.map((t) => (
              <a
                key={t.slug}
                href={`#${t.slug}`}
                className="text-xs border border-white/10 bg-white/5 rounded px-2.5 py-1 text-white/70 hover:border-white/30 hover:text-white transition-all"
              >
                {t.term}
              </a>
            ))}
          </div>
        </nav>

        {/* Glossary Terms List */}
        <div className="space-y-6">
          {glossaryTerms.map((t) => (
            <section
              key={t.slug}
              id={t.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 scroll-mt-24 hover:border-white/10 transition-all duration-300"
            >
              <h2 className="font-display text-xl font-bold text-white mb-3">
                {t.term}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">
                {t.def}
              </p>
            </section>
          ))}
        </div>

        {/* ── Related Resources ───────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Related resources</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <a href="/about" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">About</div>
              <div className="text-sm font-semibold text-white group-hover:underline">What is AgentTag?</div>
            </a>
            <a href="/security" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">Security</div>
              <div className="text-sm font-semibold text-white group-hover:underline">Security Architecture</div>
            </a>
            <a href="/integrations" className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 transition-colors group">
              <div className="text-xs text-zinc-200 mb-1">Integrations</div>
              <div className="text-sm font-semibold text-white group-hover:underline">Framework Connections</div>
            </a>
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 sm:p-16 text-center mt-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Govern your first agent in under five minutes
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            Create agent passports, establish mandates, and audit activity on your own terms. Free during the public beta.
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
              Security best practices →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
