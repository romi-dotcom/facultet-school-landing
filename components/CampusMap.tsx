import FadeUp from "./FadeUp";

const LISBON_IMG = "https://images.unsplash.com/photo-1733487266358-6582842194d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const PORTO_IMG = "https://images.unsplash.com/photo-1705668598333-866ce19cd816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

function CampusCard({
  img,
  city,
  address,
  metro,
  size,
}: {
  img: string;
  city: string;
  address: string;
  metro: string;
  size: "mobile" | "desktop";
}) {
  const h = size === "desktop" ? 340 : 240;
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        height: h,
        width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexShrink: 0,
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #00000010 0%, #00000040 40%, #000000CC 100%)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: size === "desktop" ? 10 : 8,
          padding: size === "desktop" ? "24px 28px" : 20,
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: size === "desktop" ? 32 : 24,
            fontWeight: 800,
            letterSpacing: -0.5,
          }}
        >
          {city}
        </span>
        <div className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{address}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{metro}</span>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.20)",
            backdropFilter: "blur(12px)",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.30)",
            padding: size === "desktop" ? "10px 20px" : "8px 16px",
            width: "fit-content",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{ color: "white", fontSize: 13, fontWeight: 500 }}>View on map</span>
        </div>
      </div>
    </div>
  );
}

export default function CampusMap() {
  return (
    <section className="bg-white">
      {/* Mobile */}
      <div className="md:hidden" style={{ padding: "48px 20px" }}>
        <FadeUp>
          <h2 style={{ color: "#1E293B", fontSize: 24, fontWeight: 800, letterSpacing: -0.5, textAlign: "center", marginBottom: 8 }}>
            Here&apos;s where we are
          </h2>
          <p style={{ color: "#64748B", fontSize: 14, textAlign: "center", marginBottom: 28 }}>
            Evening classes in Lisbon and Porto — same programme, same quality.
          </p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="flex flex-col gap-4">
            <CampusCard img={LISBON_IMG} city="Lisbon" address="Rua [Placeholder], Lisbon" metro="5 min from metro" size="mobile" />
            <CampusCard img={PORTO_IMG} city="Porto" address="Rua [Placeholder], Porto" metro="5 min from metro" size="mobile" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <a
            href="#consult"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              width: "100%", height: 52, borderRadius: 12, marginTop: 28,
              background: "#E85D26", boxShadow: "0 4px 16px #E85D2640",
              color: "white", fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Schedule a Campus Visit
          </a>
        </FadeUp>
      </div>

      {/* Desktop */}
      <div className="hidden md:block" style={{ padding: "60px 160px" }}>
        <FadeUp>
          <h2 style={{ color: "#1E293B", fontSize: 40, fontWeight: 800, letterSpacing: -1, textAlign: "center", marginBottom: 8 }}>
            Here&apos;s where we are
          </h2>
          <p style={{ color: "#64748B", fontSize: 16, textAlign: "center", marginBottom: 40 }}>
            Evening classes in Lisbon and Porto — same programme, same quality.
          </p>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="flex gap-6 justify-center">
            <div style={{ width: 580 }}>
              <CampusCard img={LISBON_IMG} city="Lisbon" address="Rua [Placeholder], Lisbon" metro="5 min from metro" size="desktop" />
            </div>
            <div style={{ width: 580 }}>
              <CampusCard img={PORTO_IMG} city="Porto" address="Rua [Placeholder], Porto" metro="5 min from metro" size="desktop" />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex justify-center mt-10">
            <a
              href="#consult"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "16px 36px", borderRadius: 12,
                background: "#E85D26", boxShadow: "0 4px 16px #E85D2640",
                color: "white", fontSize: 16, fontWeight: 700, textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a Campus Visit
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
