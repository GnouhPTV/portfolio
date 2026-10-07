"use client";

import { experience, type ExperienceItem } from "@/data/experience";
import { motion } from "framer-motion";
import { ExternalLink, Milestone } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const workItems = experience.filter((item) => item.kind === "work");
const projectItems = experience.filter((item) => item.kind === "project");

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-mint to-transparent md:block" />
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.time}`}
            className="relative md:pl-12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            <span className="absolute left-0 top-6 hidden h-8 w-8 place-items-center rounded-lg border border-mint/40 bg-ink text-mint shadow-mint md:grid">
              <Milestone size={17} />
            </span>
            <div className="glass-card p-6 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan">{item.time}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-mint">{item.role}</p>
                  {item.websites ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.websites.map((site) => (
                        <a
                          key={site}
                          href={`https://${site}/`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 transition hover:border-mint/35 hover:text-mint"
                        >
                          {site} <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan/40 hover:text-cyan"
                  >
                    {item.linkLabel ?? "GitHub"} <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>

              <ul className="mt-5 space-y-3">
                {item.description.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <MotionWrapper id="experience" className="section-shell">
      <div className="mb-12 max-w-3xl">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">
          Business systems and production websites I have built, deployed, and maintained.
        </h2>
      </div>

      <Timeline items={workItems} />

      <div className="mb-10 mt-16 max-w-3xl">
        <p className="section-kicker">Personal & Training Projects</p>
        <p className="mt-3 text-base leading-8 text-slate-300">
          Self-built and training projects that show how I learn new tools and
          turn them into working products.
        </p>
      </div>

      <Timeline items={projectItems} />
    </MotionWrapper>
  );
}
