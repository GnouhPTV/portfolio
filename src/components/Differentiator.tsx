"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  Database,
  Gamepad2,
  Globe,
  ServerCog,
  Target
} from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const icons = [
  BriefcaseBusiness,
  ServerCog,
  Database,
  Globe,
  Target,
  Gamepad2,
  Bot
];

export default function Differentiator() {
  return (
    <MotionWrapper id="different" className="section-shell pt-0">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">What Makes Me Different</p>
        <h2 className="section-title">
          I bring real work experience from business websites, systems, SEO, support, and interactive frontend learning.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          My advantage is practical execution. I have worked with real website
          operations, database-backed systems, hosting issues, SEO pages, product
          content, frontend interaction logic, and business support workflows.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {profile.differentiators.map((item, index) => {
          const Icon = icons[index] ?? Target;
          return (
            <motion.article
              key={item.title}
              className="glass-card group p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-mint/30 bg-mint/10 text-mint transition group-hover:border-cyan/40 group-hover:text-cyan">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </MotionWrapper>
  );
}
