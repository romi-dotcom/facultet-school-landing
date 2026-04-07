"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* §00 Top Utility Bar */}
      <div className="bg-[#1E293B] h-9 hidden sm:flex items-center">
        <div className="max-w-[1440px] mx-auto px-10 w-full flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <svg className="text-accent w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
            </svg>
            <span className="text-white/60 text-[11px] font-medium">DGERT Licensed Institution</span>
          </div>
          <div className="w-px h-3.5 bg-white/15" />
          <div className="flex items-center gap-1.5">
            <svg className="text-white/50 w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.34a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-white/60 text-[11px]">+351 XXX XXX XXX</span>
          </div>
          <div className="w-px h-3.5 bg-white/15" />
          <div className="flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span className="text-white/60 text-[11px]">WhatsApp</span>
          </div>
        </div>
      </div>

      {/* §01 Main Navigation */}
      <nav className="bg-white border-b border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.08)] h-16 flex items-center">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 w-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <span className="text-[#1E293B] text-xl font-bold">facultet</span>
            <span className="text-accent text-xl font-normal">.school</span>
          </a>

          {/* Nav Center — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programmes" className="text-[#374151] text-sm font-medium hover:text-accent transition-colors">
              Programmes ▾
            </a>
          </div>

          {/* Nav Right */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#374151] p-2 hover:text-accent transition-colors md:hidden"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
            <a
              href="#consult"
              className="bg-accent hover:bg-accent-hover text-white text-sm font-bold px-6 py-2.5 rounded-md transition-colors"
            >
              Apply Now →
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E2E8F0] shadow-lg px-5 py-4 space-y-3 md:hidden">
            <a href="#programmes" onClick={() => setMenuOpen(false)} className="block text-[#374151] text-sm font-medium py-2 hover:text-accent">Programmes</a>
            <a href="#visa-steps" onClick={() => setMenuOpen(false)} className="block text-[#374151] text-sm font-medium py-2 hover:text-accent">Visa Process</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-[#374151] text-sm font-medium py-2 hover:text-accent">FAQ</a>
          </div>
        )}
      </nav>
    </header>
  );
}
