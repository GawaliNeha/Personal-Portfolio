"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/portfolio";

export default function Footer() {
  const { footer, socialLinks } = siteData;

  return (
    <footer className="py-20 border-t border-white/5" id="contact">
      {/* CTA Card */}
      <motion.div
        className="glass-card rounded-[3rem] p-12 lg:p-16 text-center space-y-8 relative overflow-hidden border-white/20 tilt-effect"
        style={{
          boxShadow:
            "0 30px 60px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Orange Glow Inside */}
        <div className="absolute inset-0 orange-glow opacity-50 pointer-events-none" />

        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter relative z-10">
          {footer.heading}
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto leading-relaxed relative z-10">
          {footer.subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <a
            href={`mailto:${footer.email}`}
            className="bg-[#ec5b13] text-white px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 transition-all shadow-lg shadow-[#ec5b13]/20 h-[56px] flex items-center justify-center"
          >
            {footer.email}
          </a>
          <div className="flex gap-3">
            {socialLinks.slice(1, 3).map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="glass-card w-[56px] h-[56px] rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10 tilt-effect"
                style={{
                  boxShadow:
                    "0 30px 60px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
                }}
                aria-label={link.platform}
              >
                <span className="material-symbols-outlined text-xl">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
        <p>{footer.copyright}</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#ec5b13] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#ec5b13] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
