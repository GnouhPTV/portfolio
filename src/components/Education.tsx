"use client";

import { certificates, education, profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink, GraduationCap } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function Education() {
  return (
    <>
      <MotionWrapper id="education" className="section-shell">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">Education & Certificates</p>
          <h2 className="section-title">
            Academic foundation with practical training and language preparation.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.school}
              className="glass-card p-6 sm:p-8"
              whileHover={{ y: -5 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                <GraduationCap size={23} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.school}
              </h3>
              <p className="mt-2 text-mint">{item.major}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  {item.time}
                </span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  {item.meta}
                </span>
              </div>
            </motion.article>
          ))}

          <motion.article className="glass-card p-6 sm:p-8" whileHover={{ y: -5 }}>
            <span className="grid h-12 w-12 place-items-center rounded-lg border border-mint/25 bg-mint/10 text-mint">
              <Award size={23} />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-white">
              Certificates
            </h3>
            <div className="mt-5 space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-semibold text-slate-100">
                    {certificate.title}
                  </p>
                  <p className="mt-1 text-sm text-steel">
                    {certificate.issuer}
                    {certificate.time ? `, ${certificate.time}` : ""}
                  </p>
                  {certificate.note ? (
                    <p className="mt-3 rounded-lg border border-signal/20 bg-signal/10 px-3 py-2 text-xs leading-5 text-slate-300">
                      {certificate.note}
                    </p>
                  ) : null}
                  {certificate.href ? (
                    <a
                      href={certificate.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan/15"
                    >
                      View certificate <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </MotionWrapper>

      <MotionWrapper id="strengths" className="section-shell pt-0">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">Strengths</p>
          <h2 className="section-title">
            Professional habits built from supporting real websites and systems.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profile.strengths.map((strength, index) => (
            <motion.div
              key={strength}
              className="glass-card flex items-start gap-4 p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -4 }}
            >
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-mint/25 bg-mint/10 text-mint">
                <CheckCircle2 size={18} />
              </span>
              <p className="text-sm leading-6 text-slate-200">{strength}</p>
            </motion.div>
          ))}
        </div>
      </MotionWrapper>
    </>
  );
}
