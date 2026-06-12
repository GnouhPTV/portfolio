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
  Gamepad2,
  Github,
  Package,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "UA Playable Games Lab | Le Thanh Phuong Portfolio",
  description:
    "A featured portfolio project about HTML5 playable ad prototypes built with Vite, TypeScript, and Phaser 3."
};

const project = projects.find(
  (item) => item.detailHref === "/projects/ua-playable-games-lab"
);

const sectionLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Prototypes", href: "#prototypes" },
  { label: "Mechanics", href: "#mechanics" },
  { label: "Workflow", href: "#workflow" },
  { label: "Learning", href: "#learning" }
];

export default function UAPLayableGamesLabPage() {
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

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <p className="section-kicker gap-2">
                <BadgeCheck size={16} />
                Featured Project
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

            <div className="relative overflow-hidden rounded-lg border border-mint/25 bg-[linear-gradient(135deg,rgba(52,211,153,0.15),rgba(34,211,238,0.08)_48%,rgba(245,158,11,0.12))] p-5 shadow-mint">
              <div className="absolute inset-0 bg-tech-grid bg-[length:30px_30px] opacity-35" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-between rounded-lg border border-white/10 bg-ink/65 p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan">
                    <Gamepad2 size={16} />
                    Playable Ads Lab
                  </span>
                  <span className="font-mono text-sm text-mint">v1.0.0</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {detail.prototypes.map((prototype, index) => (
                    <div
                      key={prototype.title}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-4"
                    >
                      <p className="font-mono text-xs text-signal">
                        Prototype {(index + 1).toString().padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 text-lg font-semibold text-white">
                        {prototype.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-steel">
                        {prototype.features.slice(0, 3).join(" / ")}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-200">
                  {["Input", "Scene", "Export"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-mint/20 bg-mint/10 px-3 py-2"
                    >
                      {item}
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
            <h2 className="section-title">Tools used to build and package the lab.</h2>
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

        <section id="prototypes" className="section-shell py-12">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Playable Prototypes</p>
            <h2 className="section-title">Four focused playable ad exercises.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {detail.prototypes.map((prototype, index) => (
              <article key={prototype.title} className="glass-card p-6">
                <p className="font-mono text-sm text-cyan">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {prototype.title}
                </h3>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {prototype.features.map((feature) => (
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

        <section id="mechanics" className="section-shell py-12">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="section-kicker">Core Mechanics</p>
              <h2 className="section-title">Interaction patterns behind playable ads.</h2>
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

        <section id="workflow" className="section-shell py-12">
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
                <h2 className="text-2xl font-semibold text-white">Git Version Workflow</h2>
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
                  <Boxes size={20} />
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
