"use client";

import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Gamepad2,
  Globe,
  ServerCog,
  ShieldCheck,
  Target,
  Wrench
} from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const icons = [
  Code2,
  Gamepad2,
  Wrench,
  Database,
  Globe,
  ServerCog,
  Target,
  ShieldCheck
];

export default function Skills() {
  return (
    <MotionWrapper id="skills" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Technical Skills</p>
        <h2 className="section-title">
          A full-stack toolkit for business websites, internal systems, and interactive frontend projects.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <motion.article
              key={category.title}
              className="glass-card group min-h-[280px] p-6"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:border-mint/40 group-hover:text-mint">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-steel">
                    {category.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.025 }}
                    whileHover={{ y: -2, borderColor: "rgba(52, 211, 153, 0.45)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </MotionWrapper>
  );
}
