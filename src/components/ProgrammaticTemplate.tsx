import React from 'react';

export interface CompetitorData {
  name: string;
  isApiKeyBased: boolean;
  hasAuditLog: boolean;
  hasSpendLimits: boolean;
  canRevokeWithoutRotation: boolean;
}

interface CompetitorPageProps {
  competitor: CompetitorData;
}

export const CompetitorComparisonPage: React.FC<CompetitorPageProps> = ({ competitor }) => {
  return (
    <div className="aeg-wrap" style={{ paddingTop: "112px", paddingBottom: "96px" }}>
      <header style={{ textAlign: "center", marginBottom: "64px" }}>
        <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: "1.2" }}>
          AgentTag vs <span className="accent-it">{competitor.name}</span>
        </h1>
        <p style={{ maxWidth: "640px", margin: "24px auto 0", fontSize: "18px", color: "var(--ink-soft)" }}>
          Why sharing API keys is a security risk, and how delegated identity solves it.
        </p>
      </header>

      <section className="comparison-table-container" style={{ maxWidth: "800px", margin: "0 auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--paper-2)", borderBottom: "1px solid var(--border)" }}>
              <th style={{ padding: "16px", fontWeight: 600 }}>Feature</th>
              <th style={{ padding: "16px", fontWeight: 600 }}>AgentTag</th>
              <th style={{ padding: "16px", fontWeight: 600, color: "var(--muted)" }}>{competitor.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "16px" }}>Architecture</td>
              <td style={{ padding: "16px", color: "var(--ok)" }}>Delegated Identity</td>
              <td style={{ padding: "16px", color: "var(--crimson)" }}>{competitor.isApiKeyBased ? 'Borrowed API Keys' : 'Unknown'}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "16px" }}>Tamper-Evident Audit Log</td>
              <td style={{ padding: "16px", color: "var(--ok)" }}>Yes (Hash-chained)</td>
              <td style={{ padding: "16px", color: competitor.hasAuditLog ? "var(--ok)" : "var(--crimson)" }}>{competitor.hasAuditLog ? 'Yes' : 'No'}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "16px" }}>Network-Enforced Spend Limits</td>
              <td style={{ padding: "16px", color: "var(--ok)" }}>Yes (Virtual Cards)</td>
              <td style={{ padding: "16px", color: competitor.hasSpendLimits ? "var(--ok)" : "var(--crimson)" }}>{competitor.hasSpendLimits ? 'Yes' : 'No'}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "16px" }}>Revoke Without Rotating Keys</td>
              <td style={{ padding: "16px", color: "var(--ok)" }}>Yes (Instant)</td>
              <td style={{ padding: "16px", color: competitor.canRevokeWithoutRotation ? "var(--ok)" : "var(--crimson)" }}>{competitor.canRevokeWithoutRotation ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

