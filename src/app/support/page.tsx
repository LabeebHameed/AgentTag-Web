import { Metadata } from "next";
import SupportPage from "./SupportClient";

export const metadata: Metadata = {
  title: "Support & FAQ | AgentTag",
  description: "Get answers to frequently asked questions about AI agent passports, mandates, and the AgentTag control plane.",
  alternates: {
    canonical: "https://agenttag.me/support",
  },
  openGraph: {
    title: "Support & FAQ | AgentTag",
    description: "Get answers to frequently asked questions about AI agent passports, mandates, and the AgentTag control plane.",
    url: "https://agenttag.me/support",
    siteName: "AgentTag",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "AgentTag Support & FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & FAQ | AgentTag",
    description: "Get answers to frequently asked questions about AI agent passports, mandates, and the AgentTag control plane.",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return <SupportPage />;
}
