"use client";

export default function BackToTop() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="flex items-center justify-center"
      style={{ background: "#F8FAFC", padding: "24px 0" }}
    >
      <button
        onClick={scrollTop}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "10px 20px", borderRadius: 100,
          border: "1px solid #E2E8F0", background: "#F8FAFC",
          cursor: "pointer",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
        </svg>
        <span style={{ color: "#64748B", fontSize: 13, fontWeight: 500 }}>Back to Top</span>
      </button>
    </div>
  );
}
