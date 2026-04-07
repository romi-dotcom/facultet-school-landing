import FadeUp from "./FadeUp";

const signals = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: "DGERT Licensed",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: "423 Students",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: "5.0 ★ 47 Reviews",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    label: "3 Programmes",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: "AIMA Renewal Documents",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px] py-8">
        <FadeUp>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            {signals.flatMap(({ icon, label }, i) => [
              <div key={label} className="flex items-center gap-2">
                <span className="text-accent flex-shrink-0">{icon}</span>
                <span className="text-[#1E293B] text-sm font-bold">{label}</span>
              </div>,
              ...(i < signals.length - 1
                ? [<div key={`div-${i}`} className="hidden lg:block w-px h-6 bg-[#E2E8F0]" />]
                : []),
            ])}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
