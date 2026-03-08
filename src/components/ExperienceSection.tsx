"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ExperienceSection() {
  const { experience, education } = siteData;

  return (
    <section className="py-20 border-t border-white/5" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Experience Timeline */}
        <div>
          <motion.h2
            className="text-3xl font-bold mb-12 flex items-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px flex-1 bg-white/5" />
            Experience
            <span className="h-px flex-1 bg-white/5" />
          </motion.h2>

          <motion.div
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 ml-[19px]" />

            {experience.map((exp) => (
              <motion.div key={exp.dateRange} className="relative pl-12" variants={itemVariants}>
                {/* Dot */}
                <div className="absolute left-0 w-10 h-10 rounded-full glass-card border-white/20 flex items-center justify-center z-10">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? "bg-[#ec5b13]" : "bg-white/40"
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    exp.isCurrent ? "text-[#ec5b13]" : "text-slate-500"
                  }`}
                >
                  {exp.dateRange}
                </span>
                <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{exp.company}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Cards */}
        <div>
          <motion.h2
            className="text-3xl font-bold mb-12 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
            <span className="h-px flex-1 bg-white/5" />
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                className="glass-card p-6 rounded-2xl hover:border-[#ec5b13]/30 transition-colors tilt-effect"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <span
                    className={`font-bold text-xs uppercase ${
                      edu.isCurrent ? "text-[#ec5b13]" : "text-slate-500"
                    }`}
                  >
                    {edu.year}
                  </span>
                </div>
                <p className="text-slate-500 text-sm">{edu.institution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
