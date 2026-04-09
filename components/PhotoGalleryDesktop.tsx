import FadeUp from "./FadeUp";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1360&q=80",
    big: true,
    caption: "Lisbon Classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=504&q=80",
    big: false,
    caption: "Porto Campus",
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=504&q=80",
    big: false,
    caption: "Study Hall",
  },
  {
    url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=504&q=80",
    big: false,
    caption: "Faculty Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=504&q=80",
    big: false,
    caption: "Student Life",
  },
];

export default function PhotoGalleryDesktop() {
  return (
    <section className="hidden md:block bg-white" style={{ padding: "80px 160px" }}>

      {/* Title row */}
      <FadeUp>
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-[#1E293B] text-[32px] font-bold leading-tight">
            Real Photos of Our Campuses
          </h2>
          <div
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border"
            style={{ background: "#FFF7ED", borderColor: "#FDBA74" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <span className="text-[#E85D26] text-[12px] font-semibold">24 photos</span>
          </div>
        </div>

        {/* Fix: gap was 12px, should be 32px per Pencil design */}
        <p className="text-[#64748B] text-[16px] leading-relaxed" style={{ marginBottom: 32 }}>
          No stock photos. These are our actual classrooms, students, and faculty.
        </p>
      </FadeUp>

      {/* Photo grid */}
      <FadeUp delay={0.1}>
        <div className="flex gap-4" style={{ height: 500 }}>
          {/* Big left photo */}
          <div
            className="flex-shrink-0 relative overflow-hidden rounded-xl"
            style={{
              width: "57%",
              height: "100%",
              backgroundImage: `url(${photos[0].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)" }} />
            <div style={{ position: "absolute", bottom: 20, left: 20 }}>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, fontWeight: 600, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                {photos[0].caption}
              </span>
            </div>
          </div>

          {/* Right 2×2 grid */}
          <div
            className="flex-1 grid gap-4"
            style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
          >
            {photos.slice(1).map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  backgroundImage: `url(${photo.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 8,
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 12 }}>
                  <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 600, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Arrow row */}
      <FadeUp delay={0.15}>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center border transition-all hover:bg-slate-100"
            style={{ background: "#F1F5F9", borderColor: "#E2E8F0" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-80"
            style={{ background: "#1E293B" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </FadeUp>

    </section>
  );
}
