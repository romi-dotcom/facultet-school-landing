"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function ApplicationForm() {
  const [form, setForm] = useState({ name: "", email: "", programme: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const trustSignals = [
    "DGERT-licensed institution registered with AIMA",
    "Documents ready in 5 business days",
    "100% document acceptance rate at AIMA",
    "Support throughout the full renewal process",
  ];

  return (
    <section
      id="consult"
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1440&q=60)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.8) 50%, rgba(42,31,26,0.7) 100%)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[160px]">
        <div className="flex flex-col lg:flex-row gap-[120px] justify-center items-start">

          {/* Left */}
          <FadeUp className="flex flex-col gap-6 lg:w-[560px]">
            <h2 className="text-white text-[40px] font-extrabold leading-[1.1] tracking-[-1px]">
              Ready to renew your student permit?
            </h2>

            {/* Trust signals */}
            <div className="flex flex-col gap-3">
              {trustSignals.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <svg className="text-accent flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <p className="text-white/75 text-sm leading-snug">{t}</p>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-4 rounded-2xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex -space-x-2">
                {["#E85D26", "#166534", "#1E3A5F", "#1E293B"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    {["M", "A", "P", "+"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">423 students enrolled</p>
                <p className="text-white/50 text-xs">from 12 countries · Class of 2024–25</p>
              </div>
            </div>

            {/* Urgency */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)" }}
            >
              <svg className="text-red-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <p className="text-red-300 text-sm">Next intake: September 2026 · Limited spots remaining</p>
            </div>
          </FadeUp>

          {/* Right — Form */}
          <FadeUp delay={0.15} className="lg:w-[440px] w-full">
            <div
              className="rounded-[20px] p-8 lg:p-9"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.38)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
              }}
            >
              <h3 className="text-[#1E293B] text-xl font-bold mb-1">Book a Free Consultation</h3>
              <p className="text-[#64748B] text-sm mb-6">No commitment · Response within 1 business day</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Full name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Programme of interest</label>
                  <select
                    value={form.programme}
                    onChange={(e) => setForm({ ...form, programme: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  >
                    <option value="">Select a programme</option>
                    <option>UX / UI Design</option>
                    <option>Digital Marketing</option>
                    <option>Frontend Development</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="+351 XXX XXX XXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1E293B] text-sm placeholder-[#94A3B8] outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-base py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 mt-2"
                >
                  Book My Free Consultation →
                </button>

                <p className="text-[#94A3B8] text-xs text-center">
                  No documents needed to apply · We respond within 1 business day
                </p>
              </form>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
