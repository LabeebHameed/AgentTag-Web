import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentTag Integrations — Claude, LangChain, CrewAI, MCP & More",
  description:
    "Connect AgentTag to Claude Desktop, LangChain, CrewAI, OpenAI Assistants, AutoGen, and any MCP-compatible client. One CLI command gives every agent a cryptographic identity and signed mandate.",
  keywords: [
    "AgentTag integrations",
    "AgentTag Claude Desktop integration",
    "AgentTag LangChain integration",
    "AgentTag CrewAI integration",
    "AgentTag MCP integration",
    "how to connect AgentTag to Claude",
    "MCP client AgentTag setup",
    "AgentTag A2A integration",
    "AgentTag OpenAI integration",
    "AgentTag custom MCP server",
  ],
  alternates: { canonical: "https://agenttag.me/integrations" },
  openGraph: {
    title: "AgentTag Integrations — Claude, LangChain, CrewAI, MCP & More",
    description:
      "Connect AgentTag to Claude Desktop, LangChain, CrewAI, OpenAI Assistants, AutoGen, and any MCP-compatible client. One CLI command gives every agent a cryptographic identity.",
    url: "https://agenttag.me/integrations",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentTag Integrations — Claude, LangChain, CrewAI, MCP & More",
    description:
      "Connect AgentTag to Claude Desktop, LangChain, CrewAI, OpenAI Assistants, AutoGen, and any MCP-compatible client.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agenttag.me/integrations",
      url: "https://agenttag.me/integrations",
      name: "AgentTag Integrations — Claude, LangChain, CrewAI, MCP & More",
      description: "Connect AgentTag to Claude Desktop, LangChain, CrewAI, OpenAI Assistants, AutoGen, and any MCP-compatible client.",
      isPartOf: { "@id": "https://agenttag.me/#website" },
      breadcrumb: { "@id": "https://agenttag.me/integrations#breadcrumb" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://agenttag.me/integrations#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://agenttag.me" },
        { "@type": "ListItem", position: 2, name: "Integrations", item: "https://agenttag.me/integrations" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I integrate AgentTag with Claude Desktop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To integrate AgentTag with Claude Desktop, run the command `agenttag mcp add --client claude` in your terminal. This command automatically registers an agent passport, defines a mandate, and adds AgentTag as an MCP server configuration inside your `claude_desktop_config.json` file. Once added, Claude Desktop will route tool requests through the AgentTag policy engine.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag work with LangChain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, AgentTag integrates seamlessly with LangChain. You can wrap any LangChain tool or agent using AgentTag's signed mandate checks. This is compatible with both LangChain Python and JavaScript/TypeScript SDKs, ensuring that every action taken by the agent is policy-gated and logged.",
          },
        },
        {
          "@type": "Question",
          name: "How does the CrewAI integration work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For CrewAI, AgentTag allows you to assign a separate cryptographic agent passport and mandate configuration to each individual agent in your Crew. Instead of sharing a single API key, each agent's tool calls are evaluated separately, and actions are logged to a tamper-evident ledger under their respective identities.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to modify my existing MCP servers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, you do not need to modify your existing MCP servers. AgentTag acts as a gateway/policy proxy. It sits in front of your existing MCP servers and intercepts requests to enforce policy mandates, verify credentials, and log actions, then passes valid requests to the underlying servers.",
          },
        },
        {
          "@type": "Question",
          name: "Can I connect AgentTag to OpenAI Assistants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can use AgentTag as a policy and identity layer on top of OpenAI Assistants using function calling. Each assistant is provisioned an agent passport via the AgentTag API, allowing you to govern and limit tool execution and spend limits.",
          },
        },
        {
          "@type": "Question",
          name: "Does AgentTag support IDE agents like Cursor or Cline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, AgentTag officially integrates with developer IDE agents like Cursor, Windsurf, Cline, and Continue. You can configure AgentTag as an MCP tool provider inside these IDEs to govern file operations, terminal execution, and command authorization.",
          },
        },
        {
          "@type": "Question",
          name: "What is an A2A integration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A2A stands for Agent-to-Agent communication. AgentTag enables secure A2A integrations by requiring agents to authenticate and verify mandates before calling tools or services exposed by another agent. This creates a secure, trusted workflow across multi-agent systems.",
          },
        },
        {
          "@type": "Question",
          name: "Can I integrate AgentTag using a REST API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, AgentTag provides a universal REST API that allows you to integrate cryptographic identity, mandate checks, and tamper-evident logging into any custom application or programming language, including Python, Go, Rust, Java, and Node.js.",
          },
        },
      ],
    },
  ],
};

const integrations = [
  {
    category: "Official Clients & MCP",
    items: [
      {
        name: "Claude Desktop",
        desc: "Anthropic's official desktop app. Registers automatically in your config and handles step-up approvals.",
        cmd: "agenttag mcp add --client claude",
        tags: ["Official", "MCP", "Local"],
      },
      {
        name: "Claude.ai (Web)",
        desc: "Enforce policy mandates for Claude Web settings using a secure remote MCP server configuration.",
        tags: ["Remote", "MCP"],
      },
      {
        name: "OpenAI Assistants",
        desc: "Add a cryptographic layer to OpenAI Assistants via function-calling proxies. Set spend caps and tool limits.",
        tags: ["API", "OpenAI"],
      },
    ],
  },
  {
    category: "Agent Frameworks",
    items: [
      {
        name: "LangChain",
        desc: "Wrap tool execution with signed mandates. Full support for LangChain Python and JavaScript/TypeScript.",
        tags: ["Python", "JS", "Framework"],
      },
      {
        name: "LangGraph",
        desc: "Stateful agent flow governance. Assign specific cryptographic mandates to different nodes in the graph.",
        tags: ["Python", "Graphs"],
      },
      {
        name: "CrewAI",
        desc: "Provision individual passports to agents in a Crew. Track separate metrics, spends, and logs per agent role.",
        tags: ["Python", "Multi-Agent"],
      },
      {
        name: "Microsoft AutoGen",
        desc: "Govern multi-agent conversations. Enforces policy checks at the tool execution level during chat loops.",
        tags: ["Python", "Microsoft"],
      },
      {
        name: "Agno (phidata)",
        desc: "Secure tool-based agents built with Agno using cryptographic identity and transaction-based audit logs.",
        tags: ["Python", "Framework"],
      },
    ],
  },
  {
    category: "Developer Tools & IDEs",
    items: [
      {
        name: "Cursor IDE",
        desc: "Configure AgentTag as an MCP server to manage what tools Cursor's composer can run in your codebase.",
        tags: ["MCP", "IDE"],
      },
      {
        name: "Cline VS Code",
        desc: "Limit VS Code tool executions, file system writes, and terminal commands by connecting AgentTag.",
        tags: ["MCP", "IDE"],
      },
      {
        name: "Windsurf Editor",
        desc: "Integrate as an MCP tool provider to bring unified governance to Windsurf's agentic workflows.",
        tags: ["MCP", "IDE"],
      },
      {
        name: "Continue.dev",
        desc: "Brings mandate-based policy controls to VS Code and JetBrains editors via the Continue MCP client.",
        tags: ["MCP", "IDE"],
      },
    ],
  },
  {
    category: "Infrastructure & Custom Runtimes",
    items: [
      {
        name: "Custom MCP Servers",
        desc: "Acts as a gateway for custom-built MCP servers. Compatible with Python and TypeScript SDKs.",
        tags: ["MCP", "Custom"],
      },
      {
        name: "REST API",
        desc: "Universal HTTP endpoints to check mandates, log events, and verify keys in any programming language.",
        tags: ["API", "Universal"],
      },
      {
        name: "Agent-to-Agent (A2A)",
        desc: "Secure communication between different agents. Require signature validation before handing over tasks.",
        tags: ["A2A", "Security"],
      },
    ],
  },
];

const faqs = [
  {
    q: "How do I integrate AgentTag with Claude Desktop?",
    a: "To integrate AgentTag with Claude Desktop, simply run `agenttag mcp add --client claude` in your terminal. This command mints a new agent passport, registers a default mandate, and appends the AgentTag server to your `claude_desktop_config.json`. Claude will automatically start checking policies on subsequent tool calls.",
  },
  {
    q: "Does AgentTag work with LangChain?",
    a: "Yes. You can wrap any LangChain tool definition with AgentTag's SDK client. Before a tool executes, the wrapper signs the payload with the agent's passport and validates the action against the policy engine. If allowed, the tool runs as normal.",
  },
  {
    q: "How does the CrewAI integration work?",
    a: "In CrewAI, you can define different passports for different crew members. For example, a 'research_agent' and a 'writer_agent' get separate passports and distinct spend limits. When they invoke tools, their actions are logged and scoped independently instead of using a shared, broad credential.",
  },
  {
    q: "Do I need to modify my existing MCP servers?",
    a: "No. AgentTag is a transparent proxy layer. It sits between the MCP client (like Claude) and the MCP server. It handles authorization and signing without requiring code changes to the underlying tools.",
  },
  {
    q: "Can I connect AgentTag to OpenAI Assistants?",
    a: "Yes. In function-calling models like OpenAI Assistants, you call the AgentTag authorization API inside your tool execution code. This verifies that the assistant's passport has an active, valid mandate for that specific tool and parameters.",
  },
  {
    q: "Does AgentTag support IDE agents like Cursor or Cline?",
    a: "Yes. By adding AgentTag as an MCP provider inside Cursor or VS Code, you can restrict write access to specific files, block running dangerous terminal commands, or enforce a spend limit on LLM tools.",
  },
  {
    q: "What is an A2A integration?",
    a: "Agent-to-Agent (A2A) integration enables one agent to securely call another agent. The calling agent signs the request with its cryptographic passport. The receiving agent validates the signature and mandate before executing the requested task.",
  },
  {
    q: "Can I integrate AgentTag using a REST API?",
    a: "Yes. AgentTag provides standard REST endpoints for checking mandates, logging audit trail records, and verifying keys. You can integrate it with any language (Python, Node.js, Go, Rust, Java, etc.) and any custom agent pipeline.",
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
          Integrations
        </li>
      </ol>
    </nav>
  );
}

function Toc() {
  const items = [
    { href: "#supported-frameworks", label: "Supported frameworks & clients" },
    { href: "#mcp-connection", label: "How to connect any MCP client" },
    { href: "#what-happens", label: "What happens when connected?" },
    { href: "#faq", label: "Frequently asked questions" },
  ];
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">On this page</p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-sm text-zinc-200 hover:text-zinc-300 hover:underline underline-offset-2 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function IntegrationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32 pt-12">
        <Breadcrumb />

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/50 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            Integrations Hub
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            AgentTag integrations — connect any AI agent framework
          </h1>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
            <p className="text-white/85 text-lg leading-relaxed">
              AgentTag connects directly to any <strong className="text-white">MCP-compatible client</strong> or{" "}
              <strong className="text-white">A2A agent runtime</strong>. Adding AgentTag to an existing agent takes a single
              CLI command and does not require modifying your existing MCP servers or custom client configurations.
            </p>
          </div>
          <p className="text-white/55 text-base leading-relaxed">
            By acting as a proxy gateway, AgentTag brings cryptographic identity, signed policy mandates, and tamper-evident
            audit logging to all popular LLM tool-calling systems.
          </p>
        </header>

        <Toc />

        {/* ── Frameworks ────────────────────────────────────────────────── */}
        <section id="supported-frameworks" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Supported AI agent frameworks and clients
          </h2>

          <div className="space-y-12">
            {integrations.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-6 border-b border-white/5 pb-2">
                  {cat.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/10 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <h4 className="font-display text-base font-bold text-white group-hover:text-zinc-300 transition-colors">
                            {item.name}
                          </h4>
                          <div className="flex gap-1">
                            {item.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-white/55 leading-relaxed mb-4">{item.desc}</p>
                      </div>
                      {item.cmd && (
                        <div className="mt-2 font-mono text-[10px] bg-black/40 border border-white/5 rounded px-2.5 py-1.5 text-white/50 break-all select-all">
                          {item.cmd}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Connection Tutorial ────────────────────────────────────────── */}
        <section id="mcp-connection" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            How to connect AgentTag to any MCP client
          </h2>
          <p className="text-white/65 leading-relaxed mb-8">
            Integrating AgentTag into your tool-calling client is designed to take less than five minutes. Here is the standard
            setup flow:
          </p>

          <ol className="space-y-4">
            {[
              {
                step: "01",
                title: "Install the AgentTag CLI",
                body: "Open your terminal and run `npm install -g agenttag`. The CLI handles passport creation, certificate exchange, and server settings configuration.",
              },
              {
                step: "02",
                title: "Mint a passport and configure the client",
                body: "Run `agenttag mcp add --client <your-client>` where `<your-client>` is 'claude', 'cursor', 'windsurf', 'cline', 'continue', or 'zed'. The CLI registers the passport on your machine and generates configuration configurations automatically.",
              },
              {
                step: "03",
                title: "Set up your agent mandate",
                body: "Configure spend caps, tool restrictions, and human step-up approvals for your agent inside the AgentTag control plane. The client immediately enforces these constraints.",
              },
              {
                step: "04",
                title: "Run the agent",
                body: "Start your agent or client. It connects to AgentTag's policy gateway, verifying signatures on every single tool execution request. No further changes to your code or tools are required.",
              },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex gap-5">
                <div className="font-display text-xl font-bold text-zinc-200 shrink-0 leading-none pt-1">{s.step}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── What Happens ──────────────────────────────────────────────── */}
        <section id="what-happens" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
            What happens when AgentTag is connected?
          </h2>
          <p className="text-white/65 leading-relaxed mb-6">
            Once connected, AgentTag wraps all tool executions in a zero-trust envelope. Before any MCP tool (like database
            access, Slack messaging, or terminal commands) runs:
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "🛡️",
                title: "Policy evaluation",
                body: "The policy engine checks the agent's signature and verifies that the requested action matches the allowed tools, parameters, and spend limits in its active mandate.",
              },
              {
                icon: "⚡",
                title: "Real-time action",
                body: "Authorized actions run with low latency. Actions exceeding the mandate are blocked. Actions needing authorization trigger an approval modal on the human's dashboard.",
              },
              {
                icon: "📜",
                title: "Cryptographic logging",
                body: "The action's parameters, execution status, and signatures are chained to the audit ledger using SHA-256. This creates a permanent, tamper-evident log.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-white/65 leading-relaxed">
            If you need to revoke an agent, simply run <code className="text-xs bg-black/45 px-1.5 py-0.5 rounded">agenttag passport revoke &lt;did&gt;</code> or click &apos;Revoke&apos; in the dashboard. The
            agent is cut off immediately, without requiring you to rotate API keys shared by other clients.
          </p>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
            Frequently asked questions about AgentTag integrations
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

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/30 p-10 sm:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Connect your first agent in under five minutes
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            AgentTag is completely free during the public beta. No credit card required. Get started with Claude Desktop, Cursor, or
            any custom python/TS agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://agenttag.me"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-white/90 shadow-md hover:brightness-110 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/50 transition-all hover:scale-105 active:scale-95"
            >
              Join the beta — it&apos;s free
              <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/security"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-semibold text-white/80 transition-all hover:scale-105 active:scale-95"
            >
              Read the security overview →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
