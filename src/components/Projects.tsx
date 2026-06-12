"use client";

import {
  ProjectCategory,
  projectCategories,
  projects,
  type ProjectItem
} from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  Boxes,
  Braces,
  CircleArrowRight,
  Database,
  ExternalLink,
  FolderGit2,
  Gamepad2,
  Github,
  LayoutTemplate,
  Package,
  Search,
  ServerCog,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import MotionWrapper from "./MotionWrapper";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

function projectIcon(project: ProjectItem) {
  if (project.categories.includes("Product")) return Boxes;
  if (project.categories.includes("Game")) return Gamepad2;
  if (project.categories.includes("Automation")) return Bot;
  if (project.categories.includes("Internal system")) return Database;
  if (project.categories.includes("SEO")) return Search;
  if (project.categories.includes("WordPress")) return LayoutTemplate;
  if (project.categories.includes("Full-stack")) return ServerCog;
  return FolderGit2;
}

function techIcon(tech: string) {
  if (tech === "TypeScript") return Braces;
  if (tech === "Phaser 3") return Gamepad2;
  if (tech === "Vite" || tech === "Next.js 15") return Zap;
  if (tech === "JSZip") return Package;
  if (tech === "GitHub") return Github;
  return null;
}

function TechBadge({ tech }: { tech: string }) {
  const TechIcon = techIcon(tech);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-200">
      {TechIcon ? <TechIcon size={13} /> : null}
      {tech}
    </span>
  );
}

function ProjectVisual({ project, index }: { project: ProjectItem; index: number }) {
  const Icon = projectIcon(project);
  const isFeatured = project.featured;

  return (
    <div
      className={`relative overflow-hidden rounded-lg border p-5 ${
        isFeatured
          ? "h-48 border-mint/25 bg-[linear-gradient(135deg,rgba(52,211,153,0.2),rgba(34,211,238,0.12)_45%,rgba(245,158,11,0.12))]"
          : "h-48 border-white/10 bg-[linear-gradient(135deg,rgba(52,211,153,0.16),rgba(34,211,238,0.10)_42%,rgba(245,158,11,0.08))]"
      }`}
    >
      <div className="absolute inset-0 bg-tech-grid bg-[length:28px_28px] opacity-30" />
      {isFeatured ? (
        <div className="absolute right-5 top-5 flex items-center gap-2 rounded-lg border border-signal/35 bg-signal/10 px-3 py-1.5 text-xs font-semibold text-signal">
          <BadgeCheck size={14} />
          Featured Project
        </div>
      ) : null}
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-lg border border-mint/30 bg-ink/70 text-mint">
            <Icon size={24} />
          </span>
          {!isFeatured ? (
            <span className="font-mono text-sm text-cyan">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          ) : null}
        </div>
        <div>
          <p className="text-sm text-steel">{project.type}</p>
          <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-white">
            {project.title}
          </h3>
          {isFeatured ? (
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-200 sm:grid-cols-4">
              {(project.visualTags ?? ["Build", "Preview", "Ship", "Learn"]).map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-ink/60 px-2.5 py-2 text-center"
                >
                  {label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const isFeatured = project.featured;

  return (
    <motion.article
      className={`glass-card flex h-full flex-col p-4 ${
        isFeatured
          ? "border-mint/30 bg-[linear-gradient(145deg,rgba(52,211,153,0.12),rgba(255,255,255,0.06)_45%,rgba(34,211,238,0.09))] shadow-mint"
          : ""
      }`}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.28 }}
      whileHover={{ y: -6 }}
    >
      <ProjectVisual project={project} index={index} />

      <div className="flex flex-1 flex-col px-1 pb-2 pt-5">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-lg border border-cyan/20 bg-cyan/10 px-2.5 py-1 text-xs font-medium text-cyan"
            >
              {category}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <ul className="mt-5 space-y-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm leading-6 text-steel">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.detailHref ? (
            <Link
              href={project.detailHref}
              className="inline-flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-3 py-2 text-sm font-semibold text-mint transition hover:bg-mint/15"
            >
              View Details <CircleArrowRight size={15} />
            </Link>
          ) : null}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-3 py-2 text-sm font-semibold text-mint transition hover:bg-mint/15"
            >
              Visit <ExternalLink size={15} />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan/35 hover:text-cyan"
            >
              GitHub Repo <Github size={15} />
            </a>
          ) : null}
          {!project.url && project.demoStatus ? (
            <span className="inline-flex items-center rounded-lg border border-signal/25 bg-signal/10 px-3 py-2 text-sm font-semibold text-signal">
              {project.demoStatus}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

interface ProjectsProps {
  view?: "all" | "featured" | "ai";
}

export default function Projects({ view = "all" }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const aiProjects = projects.filter((project) => project.aiSpotlight);

  return (
    <>
      {view !== "ai" ? (
        <MotionWrapper id="projects" className="section-shell">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker">Featured Projects</p>
              <h2 className="section-title">
                Featured product, game, full-stack, WordPress, SEO, and automation work.
              </h2>
            </div>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:max-w-xl lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`shrink-0 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "border-mint/40 bg-mint text-ink"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan/35 hover:text-cyan"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </MotionWrapper>
      ) : null}

      {view !== "featured" ? (
        <MotionWrapper
          id="ai-tools"
          className={view === "ai" ? "section-shell" : "section-shell pt-0"}
        >
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker">AI / Automation / Internal Tools Projects</p>
            <h2 className="section-title">
              System thinking for internal workflows, data access, and automation logic.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {aiProjects.map((project, index) => {
              const Icon = project.categories.includes("Automation") ? Bot : Boxes;
              return (
                <motion.article
                  key={project.title}
                  className="glass-card p-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-mint/30 bg-mint/10 text-mint">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm text-cyan">
                        {(index + 1).toString().padStart(2, "0")} / {project.type}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.features.slice(0, 5).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </MotionWrapper>
      ) : null}
    </>
  );
}
