"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function SkillsSection() {
  const { skills, tools } = siteData;

  return (
    <section className="py-20 border-t border-white/5" id="skills">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
          <p className="text-slate-500 max-w-md">
            Mastering the tools and methodologies required to build world-class products.
          </p>
        </motion.div>

        {/* Tool Icons */}
        <div className="flex gap-2">
          {tools.map((tool) => (
            <div key={tool.name} className="glass-card p-3 rounded-lg" title={tool.name}>
              <Image
                src={tool.iconUrl}
                alt={tool.name}
                width={32}
                height={32}
                className="opacity-70"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Skill Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            className="glass-card p-8 rounded-2xl hover:border-[#ec5b13]/40 transition-colors group tilt-effect relative overflow-hidden"
            variants={cardVariants}
          >
            <div className="card-accent-glow" />
            <span className="material-symbols-outlined text-[#ec5b13] mb-4 text-3xl group-hover:scale-110 transition-transform inline-block">
              {skill.icon}
            </span>
            <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
