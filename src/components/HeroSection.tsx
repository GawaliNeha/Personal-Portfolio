"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/portfolio";

export default function HeroSection() {
  const { personal, socialLinks } = siteData;

  return (
    <section className="flex flex-col lg:flex-row gap-16 pt-10 pb-20 lg:pt-16 lg:pb-32 lg:items-center">
      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec5b13]/10 border border-[#ec5b13]/20 text-[#ec5b13] text-xs font-bold tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec5b13] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec5b13]" />
          </span>
          {personal.availableBadge}
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter">
          {personal.heroHeading.line1}{" "}
          <span className="text-gradient">{personal.heroHeading.highlight}</span>{" "}
          {personal.heroHeading.line2}
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
          {personal.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#work"
            className="bg-[#ec5b13] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-[#ec5b13]/25"
          >
            View Portfolio{" "}
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
          </a>
          <a
            href={personal.resumeUrl}
            className="glass-card px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors flex items-center gap-2 border border-white/10"
          >
            Download CV{" "}
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 pt-6 text-slate-500">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="hover:text-[#ec5b13] transition-colors"
              aria-label={link.platform}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Right — Hero Image */}
      <motion.div
        className="flex-1 relative group"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[#ec5b13]/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
        <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl glass-card">
          <Image
            src={personal.heroImage}
            alt={personal.heroImageAlt}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}
