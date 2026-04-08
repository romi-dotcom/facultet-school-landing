import FadeUp from "./FadeUp";

const cards = [
  {
    bg: "#FFF1EC",
    iconBg: "#E85D26",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "My student permit is expiring",
    desc: "Need to renew before the deadline.\nOne document from Facultet — and AIMA renews it.",
    btnText: "How renewal works",
    href: "#visa-steps",
  },
  {
    bg: "#D0ECE3",
    iconBg: "#166534",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "My CV doesn't\nwork here",
    desc: "Experience from home doesn't count. Need a European credential.",
    btnText: "View programmes",
    href: "#programmes",
  },
  {
    bg: "#D0DFF0",
    iconBg: "#1E3A5F",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "I need both — status and career",
    desc: "One enrolment. Annual permit renewal + marketable European credential.",
    btnText: "How it works",
    href: "#double-value",
  },
];

export default function AudienceSelect() {
  return (
    <section id="audience" className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <FadeUp className="text-center mb-10">
          <h2 className="text-[#1E293B] text-[36px] font-bold leading-[1.2]">
            Is this your situation?
          </h2>
          <p className="text-[#64748B] text-base mt-3">
            Which of these sounds like you?
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ bg, iconBg, icon, title, desc, btnText, href }, i) => (
            <FadeUp key={title} delay={i * 0.1}>
              <div
                className="flex flex-col items-center gap-6 rounded-[20px] p-10 h-full justify-between"
                style={{ backgroundColor: bg }}
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: iconBg }}
                  >
                    {icon}
                  </div>

                  <h3 className="text-[#1E293B] text-[22px] font-bold leading-tight whitespace-pre-line">
                    {title}
                  </h3>

                  <p className="text-[#64748B] text-[15px] leading-[1.6] whitespace-pre-line">
                    {desc}
                  </p>
                </div>

                <a
                  href={href}
                  className="flex items-center justify-center gap-2 bg-white text-[#1E293B] text-sm font-semibold px-7 py-3.5 rounded-full hover:shadow-md transition-all w-full max-w-[280px]"
                >
                  {btnText} →
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
