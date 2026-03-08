"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/portfolio";

export default function LanguagesSection() {
  const { languages, testimonial } = siteData;

  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Languages */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold">Languages &amp; Proficiencies</h3>
        <div className="space-y-6">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-slate-500">
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#ec5b13] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        className="glass-card rounded-2xl p-8 border-[#ec5b13]/20 tilt-effect relative overflow-hidden"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-accent-glow" />
        <p className="italic text-lg text-slate-300 mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ec5b13]/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[#ec5b13]">person</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">{testimonial.author}</h4>
            <p className="text-xs text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
