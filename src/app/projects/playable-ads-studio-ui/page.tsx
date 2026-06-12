import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Boxes,
  CircleArrowOutUpRight,
  Code2,
  Github,
  LayoutDashboard,
  Package,
  PlaySquare,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "Playable Ads Studio UI | Le Thanh Phuong Portfolio",
  description:
    "A featured portfolio project about a no-code playable ads builder MVP built with Next.js, React, TypeScript, Zustand, Phaser 3, and JSZip."
};

const project = projects.find(
  (item) => item.detailHref === "/projects/playable-ads-studio-ui"
);

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Modules", href: "#modules" },
  { label: "Logic", href: "#logic" },
  { label: "Export", href: "#export" },
  { label: "Learning", href: "#learning" }
];

export default function PlayableAdsStudioUIPage() {
  if (!project?.detail) {
    notFound();
  }

  const { detail } = project;

  return (
    <>
      <main className="min-h-screen">
        <section className="section-shell pb-12 pt-8 sm:pt-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-mint/35 hover:text-mint"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-steel transition hover:border-cyan/35 hover:text-cyan"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <p className="section-kicker gap-2">
                <BadgeCheck size={16} />
                Featured Product MVP
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {detail.subtitle}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-steel">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-4 py-3 text-sm font-semibold text-mint transition hover:bg-mint/15"
                  >
                    GitHub Repo <Github size={16} />
                  </a>
                ) : null}
                <span className="inline-flex items-center rounded-lg border border-signal/25 bg-signal/10 px-4 py-3 text-sm font-semibold text-signal">
                  {project.demoStatus}
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-cyan/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(52,211,153,0.1)_45%,rgba(245,158,11,0.1))] p-5 shadow-glow">
              <div className="absolute inset-0 bg-tech-grid bg-[length:30px_30px] opacity-35" />
              <div className="relative flex h-full min-h-[380px] flex-col justify-between rounded-lg border border-white/10 bg-ink/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan">
                    <LayoutDashboard size={16} />
                    Builder Studio
                  </span>
                  <span className="font-mono text-sm text-mint">v0.5.0</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {detail.prototypes.map((module, index) => (
                    <div
                      key={module.title}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                    >
                      <p className="font-mono text-xs text-signal">
                        Module {(index + 1).toString().padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 text-lg font-semibold text-white">
                        {module.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-steel">
                        {module.features.slice(0, 2).join(" / ")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold text-slate-200">
                  {(project.visualTags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-mint/20 bg-mint/10 px-2 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-mint/30 bg-mint/10 text-mint">
                  <Sparkles size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">Overview</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300">{detail.overview}</p>
            </article>

            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                  <Target size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">Problem / Goal</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300">{detail.problem}</p>
            </article>
          </div>
        </section>

        <section className="section-shell py-12">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Tech Stack</p>
            <h2 className="section-title">A frontend product stack for local builder workflows.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="modules" className="section-shell py-12">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Product Modules</p>
            <h2 className="section-title">Core areas of the builder MVP.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {detail.prototypes.map((module, index) => (
              <article key={module.title} className="glass-card p-6">
                <p className="font-mono text-sm text-cyan">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {module.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-6 text-steel"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="logic" className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">No-code Logic</p>
              <h2 className="section-title">Builder concepts behind the playable workflow.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.mechanics.map((mechanic) => (
                <span
                  key={mechanic}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200"
                >
                  {mechanic}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="export" className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-signal/30 bg-signal/10 text-signal">
                  <Package size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">Export Workflow</h2>
              </div>
              <ul className="space-y-2">
                {detail.exportWorkflow.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-steel">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                  <Workflow size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">Architecture Notes</h2>
              </div>
              <ul className="space-y-2">
                {detail.gitWorkflow.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-steel">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="learning" className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-mint/30 bg-mint/10 text-mint">
                  <Code2 size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">What I Learned</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300">{detail.learned}</p>
            </article>

            <article className="glass-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200">
                  <PlaySquare size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white">Disclaimer</h2>
              </div>
              <p className="text-sm leading-7 text-slate-300">{detail.disclaimer}</p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-mint/35 hover:text-mint"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/15"
              >
                View GitHub <CircleArrowOutUpRight size={16} />
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
