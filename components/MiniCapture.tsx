"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

export default function MiniCapture() {
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");

  return (
    <section
      className="hidden md:flex items-center justify-center"
      style={{ background: "#1A1A2E", padding: "64px 0" }}
    >
      <FadeUp>
        <div
          className="flex items-center gap-12"
          style={{ width: 1120, maxWidth: "100%" }}
        >
          {/* Left col */}
          <div className="flex flex-col gap-0" style={{ flex: 1 }}>
            <h3
              style={{
                color: "#FFFFFF", fontSize: 32, fontWeight: 400, lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Ready to sort out your student permit?
            </h3>
            <p style={{ color: "#94A3B8", fontSize: 16, lineHeight: 1.5, marginBottom: 24 }}>
              Fill in two fields — your coordinator will call back within 2 hours. No paperwork needed at this stage.
            </p>
            <div className="flex gap-4">
              <span style={{ color: "#CBD5E1", fontSize: 13 }}>✓ Free</span>
              <span style={{ color: "#CBD5E1", fontSize: 13 }}>✓ No commitment</span>
              <span style={{ color: "#CBD5E1", fontSize: 13 }}>✓ 2h response</span>
            </div>
          </div>

          {/* Right col — form card */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 16,
              padding: 28,
              width: 480,
              flexShrink: 0,
            }}
          >
            <div className="flex flex-col gap-1" style={{ marginBottom: 12 }}>
              <label style={{ color: "#64748B", fontSize: 12 }}>Your name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Maria Silva"
                style={{
                  height: 46, borderRadius: 8, border: "1px solid #E2E8F0",
                  padding: "12px 16px", fontSize: 14, outline: "none",
                  background: "#FFFFFF", color: "#1E293B",
                }}
              />
            </div>
            <div className="flex flex-col gap-1" style={{ marginBottom: 16 }}>
              <label style={{ color: "#64748B", fontSize: 12 }}>WhatsApp</label>
              <input
                type="text"
                value={wa}
                onChange={e => setWa(e.target.value)}
                placeholder="+351 912 345 678"
                style={{
                  height: 46, borderRadius: 8, border: "1px solid #E2E8F0",
                  padding: "12px 16px", fontSize: 14, outline: "none",
                  background: "#FFFFFF", color: "#1E293B",
                }}
              />
            </div>
            <button
              style={{
                width: "100%", height: 50, borderRadius: 8,
                background: "#E86339", color: "white",
                fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              Get My Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <p style={{ color: "#64748B", fontSize: 12, textAlign: "center", marginTop: 10 }}>
              AIMA processing times vary. We provide the documents — AIMA makes the decision.
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
