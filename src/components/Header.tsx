"use client";

import { useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/portfolio";

export default function Header() {
  const { personal, navLinks } = siteData;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-8 border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold tracking-tighter">{personal.name}</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-[#ec5b13] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-[#ec5b13] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-[#ec5b13]/20"
        >
          Contact Me
        </a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 glass-card border-t border-white/10 p-6 flex flex-col gap-4 z-50 mobile-menu-enter md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#ec5b13] transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#ec5b13] text-white px-6 py-2.5 rounded-xl text-sm font-bold text-center hover:brightness-110 transition-all shadow-lg shadow-[#ec5b13]/20"
            onClick={() => setMobileOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
