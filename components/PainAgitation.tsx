import FadeUp from "./FadeUp";

const pains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Your visa expires in weeks — and you still have no plan.",
    body: "Every time someone asks about your status, your stomach drops. The uncertainty is exhausting. You've looked into other options but nothing legitimate has come together.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "You've sent 60 CVs. You've had 3 callbacks.",
    body: "It's not your skills — it's your credentials. Portuguese employers see a foreign degree and move on. Years of hard-won experience, invisible on the local market.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Other \"schools\" turned out to be visa factories.",
    body: "You've heard the horror stories. €1,500 for a fake enrollment letter. Documents rejected by immigration. We understand the skepticism. It's earned.",
  },
];

const stats = [
  { value: "100%", label: "AIMA documents accepted" },
  { value: "5", label: "Business days to receive docs" },
  { value: "423", label: "Students supported" },
];

export default function PainAgitation() {
  return (
    <section
      className="py-20 lg:py-[160px]"
      style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="text-center mb-8">
          <h2 className="text-white text-[36px] font-bold leading-[1.2]">
            Does this sound familiar?
          </h2>
        </FadeUp>

        {/* Pain cards */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col gap-4 max-w-[1100px] mx-auto">
            {pains.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-6 rounded-[14px] px-7 py-6"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(232,93,38,0.13)" }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Divider */}
        <div className="max-w-[1100px] mx-auto mt-8 mb-6 h-px bg-white/10" />

        {/* Transition CTA */}
        <FadeUp delay={0.2} className="flex justify-center mb-8">
          <a
            href="#double-value"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-[0_4px_16px_rgba(232,93,38,0.31)]"
          >
            Facultet solves all three. Here&apos;s how
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </FadeUp>

        {/* Outcome strip */}
        <FadeUp delay={0.25}>
          <div
            className="max-w-[1100px] mx-auto flex items-center justify-center gap-12 pt-7 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
          >
            {stats.flatMap(({ value, label }, i) => [
              <div key={value} className="flex flex-col items-center gap-1">
                <span className="text-[#E86339] text-[28px] font-semibold leading-none">{value}</span>
                <span className="text-[#94A3B8] text-xs text-center">{label}</span>
              </div>,
              ...(i < stats.length - 1
                ? [<div key={`s${i}`} className="hidden sm:block w-px h-9 bg-[#334155]" />]
                : []),
            ])}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
