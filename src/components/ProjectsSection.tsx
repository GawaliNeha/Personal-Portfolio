"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = siteData;

  return (
    <section className="py-20" id="work">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Projects</h2>
        <p className="text-slate-500">
          A showcase of deep-dive case studies and design challenges.
        </p>
      </motion.div>

      <div className="space-y-20">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={project.title}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Image */}
              <div
                className={`${
                  isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                } overflow-hidden rounded-[2.5rem] glass-card p-4 relative tilt-effect`}
              >
                <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`${
                  isReversed
                    ? "lg:col-span-5 lg:order-1 lg:pr-12"
                    : "lg:col-span-5 lg:pl-12"
                } space-y-6`}
              >
                <span className="text-[#ec5b13] font-bold text-sm tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-4xl font-black">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed">{project.description}</p>
                <a
                  href={project.link}
                  className="flex items-center gap-3 font-bold group/btn"
                >
                  View Case Study
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-[#ec5b13] group-hover/btn:border-[#ec5b13] transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
