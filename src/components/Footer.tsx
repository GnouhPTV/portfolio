import { profile } from "@/data/profile";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright 2026 {profile.name}. Built with Next.js, TypeScript,
          Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-mint/35 hover:text-mint"
            aria-label="Email"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan/35 hover:text-cyan"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
