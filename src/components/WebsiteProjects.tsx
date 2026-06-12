"use client";

import { websites } from "@/data/websites";
import { motion } from "framer-motion";
import { ExternalLink, Globe2 } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function WebsiteProjects() {
  return (
    <MotionWrapper id="websites" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">Websites I Have Worked On</p>
        <h2 className="section-title">
          Real production websites covering product pages, SEO, hosting, and maintenance.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {websites.map((website, index) => (
          <motion.article
            key={website.url}
            className="glass-card flex min-h-[330px] flex-col p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -6 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                <Globe2 size={21} />
              </span>
              <a
                href={website.url}
                target="_blank"
                rel="noreferrer noopener"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-steel transition hover:border-mint/35 hover:text-mint"
                aria-label={`Open ${website.name}`}
                title={`Open ${website.name}`}
              >
                <ExternalLink size={16} />
              </a>
            </div>

            <h3 className="text-xl font-semibold text-white">{website.name}</h3>
            <p className="mt-2 text-sm text-cyan">{website.type}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {website.role}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {website.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-2">
              {website.work.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-steel">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </MotionWrapper>
  );
}
