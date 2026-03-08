"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function PublicationsSection() {
  const { publications } = siteData;

  return (
    <section className="py-20 border-t border-white/5" id="publications">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-4 text-center">
          <span className="h-px flex-1 bg-white/5" />
          Publications
          <span className="h-px flex-1 bg-white/5" />
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {publications.map((pub) => (
          <motion.div
            key={pub.title}
            className="glass-card p-8 rounded-3xl group tilt-effect relative overflow-hidden"
            variants={cardVariants}
          >
            <div className="card-accent-glow" />
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-xl flex items-center justify-center text-[#ec5b13]">
                <span className="material-symbols-outlined">{pub.icon}</span>
              </div>
              <span
                className={`font-bold text-xs uppercase tracking-widest ${
                  pub.isCurrent ? "text-[#ec5b13]" : "text-slate-500"
                }`}
              >
                {pub.year}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#ec5b13] transition-colors">
              {pub.title}
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-4 italic">{pub.journal}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{pub.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
