"use client";

import { seoTopics } from "@/data/profile";
import { motion } from "framer-motion";
import { ChartNoAxesCombined, FileText, SearchCheck } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const pillars = [
  {
    title: "Content Planning",
    text: "Product pages, SEO articles, keyword-backed topics, and homepage messaging for safety equipment websites.",
    icon: FileText
  },
  {
    title: "Search Optimization",
    text: "Keyword research, page structure, technical fixes, internal links, and content updates tied to business categories.",
    icon: SearchCheck
  },
  {
    title: "Marketing Support",
    text: "Backlink planning, UX audits, conversion sections, and website operations for product-focused teams.",
    icon: ChartNoAxesCombined
  }
];

export default function SEOSection() {
  return (
    <MotionWrapper id="seo" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">SEO & Marketing Work</p>
        <h2 className="section-title">
          Technical website work connected to content, ranking, and sales pages.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.article
              key={pillar.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-mint/30 bg-mint/10 text-mint">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {pillar.text}
              </p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {seoTopics.map((topic, index) => (
          <motion.div
            key={topic}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.025 }}
            whileHover={{ borderColor: "rgba(34, 211, 238, 0.35)", y: -2 }}
          >
            {topic}
          </motion.div>
        ))}
      </div>
    </MotionWrapper>
  );
}
