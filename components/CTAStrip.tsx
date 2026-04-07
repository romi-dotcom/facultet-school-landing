interface CTAStripProps {
  heading: string;
  sub: string;
  btnText: string;
  trust?: string;
}

export default function CTAStrip({ heading, sub, btnText, trust }: CTAStripProps) {
  return (
    <section
      className="py-12 px-5 lg:px-20"
      style={{ background: "linear-gradient(180deg, #1E293B 0%, #2A1F1A 100%)" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 text-center">
        <h2 className="text-white text-[28px] font-bold">{heading}</h2>
        <p
          className="text-white/85 text-base max-w-[600px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sub }}
        />
        <a
          href="#consult"
          className="mt-2 inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold text-[15px] px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          {btnText}
        </a>
        {trust && (
          <p className="text-white/50 text-sm">{trust}</p>
        )}
      </div>
    </section>
  );
}
