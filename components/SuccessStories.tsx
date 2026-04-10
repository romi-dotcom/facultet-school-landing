"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const stories = [
  {
    name: "Maria Fernandes",
    metaMobile: "🇧🇷 Brazil → Lisbon · Digital Marketing",
    metaDesktop: "Brazil → Lisbon · Digital Marketing",
    quote: "\"I never imagined I'd be working in Lisbon within 3 months. Facultet gave me the skills and the confidence.\"",
    tagsMobile: ["SEO", "Google Ads", "Analytics"],
    tagsDesktop: ["SEO", "Google Ads", "Content Strategy", "Analytics"],
    before: "Freelance designer.\nStudent permit expiring in 3 months.\nNo European credential to show employers.",
    after: "Junior Digital Marketer\nat a Lisbon agency.\n3 campaign portfolio.",
    metric: "3",
    metricLabel: "months\nfrom enrollment to job offer",
    badge: "Hired in 3 months",
    photo: "https://images.unsplash.com/photo-1651107466227-1a7100432973?w=800&q=80",
  },
  {
    name: "Arjun Mehta",
    metaMobile: "🇮🇳 India → Porto · Digital Marketing",
    metaDesktop: "India → Porto · Digital Marketing",
    quote: "\"The visa process seemed impossible until Facultet showed me exactly how to do it step by step.\"",
    tagsMobile: ["Social Media", "CRM", "Branding"],
    tagsDesktop: ["Social Media", "Email Marketing", "CRM", "Branding"],
    before: "IT support in Mumbai.\nNo European work\nexperience.",
    after: "Marketing Specialist\nat a Porto startup.\nEU network built.",
    metric: "4",
    metricLabel: "months\nfrom enrollment to visa approval",
    badge: "Visa approved in 4 months",
    photo: "https://images.unsplash.com/photo-1607710577791-a31393e17748?w=800&q=80",
  },
  {
    name: "Ana L.",
    metaMobile: "🇧🇷 Brazil → Porto · Project Management",
    metaDesktop: "Brazil → Porto · Project Management",
    quote: "\"From marketing assistant to freelance PM with EU clients — Facultet made it real.\"",
    tagsMobile: ["Agile", "Scrum", "Jira"],
    tagsDesktop: ["Agile", "Scrum", "Stakeholder Mgmt", "Jira"],
    before: "Marketing assistant\nin São Paulo. No PM\ncertification.",
    after: "Freelance PM for\n2 EU clients.\nResidency obtained.",
    metric: "4",
    metricLabel: "months\nfrom enrollment to residency",
    badge: "Residency in 4 months",
    photo: "https://images.unsplash.com/photo-1517945577684-acd9255116a7?w=800&q=80",
  },
];

function IconGradCap() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#E85D26" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );
}

function IconCheck({ size = 16, color = "#16A34A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

function IconChevronLeft() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function IconChevronRight({ color = "white" }: { color?: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section id="success-stories" className="bg-[#F8FAFC]">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-6 pt-10 pb-10">

        {/* Header */}
        <div className="flex flex-col gap-2 px-5">
          <h2 className="text-[#1E293B] font-bold leading-[1.2]" style={{ fontSize: 22 }}>
            From Zero to Career in 3–5 Months
          </h2>
          <p className="text-[#64748B] leading-[1.5]" style={{ fontSize: 14 }}>
            How 3 students transformed their careers in Portugal
          </p>
        </div>

        {/* Scroll cards */}
        <div
          className="flex gap-3 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: 20, WebkitOverflowScrolling: "touch", paddingLeft: 20, paddingRight: 20 }}
        >
          {stories.map(({ name, metaMobile, quote, tagsMobile, metric, metricLabel, badge, photo }) => (
            <article
              key={name}
              className="flex-shrink-0 flex flex-col overflow-hidden rounded-[20px] bg-white"
              style={{ width: 315, height: 480, border: "1px solid #E2E8F0", boxShadow: "0 4px 16px rgba(0,0,0,0.10)", scrollSnapAlign: "start" }}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo} alt="" className="w-full object-cover flex-shrink-0" style={{ height: 180 }} />

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-5 overflow-hidden">
                <div>
                  <p className="text-[#1E293B] font-bold" style={{ fontSize: 17 }}>{name}</p>
                  <p className="text-[#64748B]" style={{ fontSize: 12 }}>{metaMobile}</p>
                </div>
                <p className="text-[#374151] leading-[1.5] italic" style={{ fontSize: 13 }}>{quote}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tagsMobile.map(t => (
                    <span key={t} className="rounded-full bg-[#F1F5F9] px-2.5 py-1 font-semibold text-[#475569]" style={{ fontSize: 11 }}>
                      {t}
                    </span>
                  ))}
                </div>
                {/* Bottom row */}
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col gap-0">
                    <span className="text-[#E85D26] font-extrabold leading-none" style={{ fontSize: 28 }}>{metric}</span>
                    <span className="text-[#64748B]" style={{ fontSize: 11 }}>{metricLabel.split("\n")[1]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-[#DCFCE7]">
                    <IconCheck size={12} color="#16A34A" />
                    <span className="text-[#16A34A] font-semibold" style={{ fontSize: 12 }}>{badge}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="rounded-full bg-[#E85D26]" style={{ width: 20, height: 6 }} />
          <div className="rounded-full bg-[#CBD5E1]" style={{ width: 6, height: 6 }} />
          <div className="rounded-full bg-[#CBD5E1]" style={{ width: 6, height: 6 }} />
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block py-20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-[160px]">

          {/* Title row */}
          <FadeUp>
            <div className="flex items-start gap-4 mb-4">
              <h2 className="text-[#1E293B] font-extrabold leading-[1.1]" style={{ fontSize: 40, letterSpacing: -1 }}>
                From Zero to Career<br />in 3–5 Months
              </h2>
              <div className="flex items-center gap-1.5 rounded-full mt-2 px-4 py-2" style={{ background: "#FFF7ED", border: "1px solid #FDBA74" }}>
                <IconTrophy />
                <span className="text-[#E85D26] font-bold" style={{ fontSize: 13 }}>Success Rate 94%</span>
              </div>
            </div>
            <p className="text-[#64748B] mb-12" style={{ fontSize: 18 }}>
              How 3 students transformed their careers in Portugal
            </p>
          </FadeUp>

          {/* Card */}
          <FadeUp delay={0.1}>
            <div
              className="flex rounded-[20px] overflow-hidden border border-[#E2E8F0]"
              style={{ height: 480, boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
            >
              {/* Photo */}
              <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 360 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={story.photo} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.25) 100%)" }} />
              </div>

              {/* Content panel */}
              <div
                className="flex flex-1 flex-col justify-between p-8"
                style={{ background: "rgba(255,255,255,0.93)", borderLeft: "1px solid rgba(255,255,255,0.5)" }}
              >
                {/* Top: name + before/after */}
                <div className="flex flex-col gap-3.5">
                  <div>
                    <h3 className="text-[#1E293B] font-bold" style={{ fontSize: 22, letterSpacing: -0.5 }}>{story.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <IconGradCap />
                      <span className="text-[#64748B]" style={{ fontSize: 13, fontWeight: 500 }}>{story.metaDesktop}</span>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-1.5" style={{ width: 160 }}>
                      <div className="flex items-center gap-1.5">
                        <div className="rounded-full bg-[#EF4444] flex-shrink-0" style={{ width: 10, height: 10 }} />
                        <span className="text-[#64748B] font-bold" style={{ fontSize: 11 }}>BEFORE</span>
                      </div>
                      <p className="text-[#1E293B] leading-snug whitespace-pre-line" style={{ fontSize: 13 }}>{story.before}</p>
                    </div>
                    <div className="flex flex-1 items-center mt-1.5">
                      <div className="h-0.5 flex-1" style={{ background: "linear-gradient(90deg, #EF4444, #22C55E)" }} />
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1.5" style={{ width: 160 }}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#64748B] font-bold" style={{ fontSize: 11 }}>AFTER</span>
                        <div className="rounded-full bg-[#22C55E] flex-shrink-0" style={{ width: 10, height: 10 }} />
                      </div>
                      <p className="text-[#1E293B] leading-snug whitespace-pre-line" style={{ fontSize: 13 }}>{story.after}</p>
                    </div>
                  </div>
                </div>

                {/* Middle: quote + skills */}
                <div className="flex flex-col gap-3">
                  <p className="text-[#475569] leading-relaxed italic" style={{ fontSize: 14 }}>{story.quote}</p>
                  <div className="flex flex-wrap gap-2">
                    {story.tagsDesktop.map(t => (
                      <span key={t} className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[#64748B]" style={{ fontSize: 12 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: metric + badge */}
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#E85D26] font-extrabold leading-none" style={{ fontSize: 48 }}>{story.metric}</span>
                    <span className="text-[#64748B] font-semibold whitespace-pre-line" style={{ fontSize: 12 }}>{story.metricLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full px-4 py-2.5 bg-[#F0FDF4]">
                    <IconCheck size={16} color="#16A34A" />
                    <span className="text-[#16A34A] font-semibold" style={{ fontSize: 14 }}>{story.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Nav row */}
          <FadeUp delay={0.15} className="flex items-center gap-6 mt-8">
            <button
              onClick={() => setActive((active - 1 + stories.length) % stories.length)}
              className="w-11 h-11 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-md transition-all"
            >
              <IconChevronLeft />
            </button>

            <div className="flex items-center gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === active ? 10 : 8,
                    height: i === active ? 10 : 8,
                    background: i === active ? "#E85D26" : "#CBD5E1",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((active + 1) % stories.length)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
              style={{ background: "#E85D26", boxShadow: "0 2px 8px rgba(232,93,38,0.30)" }}
            >
              <IconChevronRight />
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
