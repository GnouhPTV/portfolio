"use client";

import { profile } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Github,
  type LucideIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  X
} from "lucide-react";
import { useState } from "react";

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface NavbarProps {
  activeSection: string;
  sections: NavigationItem[];
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({
  activeSection,
  sections,
  onNavigate
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cvAction = profile.actions.find((action) =>
    action.label.includes("Download")
  );
  const hasGitHub = profile.github && profile.github !== "#";
  const phoneHref = `tel:${profile.phone.replace(/[^\d+]/g, "")}`;
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0
  );
  const progress =
    sections.length > 0 ? ((activeIndex + 1) / sections.length) * 100 : 0;

  const handleNavigate = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/85 shadow-glow backdrop-blur-2xl transition-colors duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] origin-left bg-gradient-to-r from-mint via-cyan to-signal"
          style={{ scaleX: progress / 100, width: "100%" }}
        />
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => handleNavigate("hero")}
            className="group flex min-w-0 items-center gap-3 text-left"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-mint/35 bg-mint/10 text-sm font-semibold text-mint shadow-mint">
              DP
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-white">
                {profile.name}
              </span>
              <span className="hidden max-w-[22rem] truncate text-xs text-steel md:block">
                {profile.headline}
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 xl:inline-flex">
              <MapPin size={15} className="text-red-300" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
              aria-label="Email"
              title={profile.email}
            >
              <Mail size={17} />
            </a>
            <a
              href={phoneHref}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
              aria-label="Phone"
              title={profile.phone}
            >
              <Phone size={17} />
            </a>
            {hasGitHub ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={17} />
              </a>
            ) : null}
            {cvAction ? (
              <a
                href={cvAction.href}
                download={cvAction.download}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-cyan/35 bg-cyan/10 px-3 text-sm font-semibold text-cyan transition hover:bg-cyan/20"
              >
                <Download size={16} />
                CV
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => handleNavigate("contact")}
              className="inline-flex h-10 items-center rounded-lg border border-mint/35 bg-mint/10 px-3 text-sm font-semibold text-mint transition hover:bg-mint/15"
            >
              Contact Me
            </button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-cyan/50 hover:text-cyan lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="border-t border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-2xl lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
                {sections.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.id)}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-3 text-left text-sm transition ${
                        activeSection === item.id
                          ? "border-red-400/45 bg-red-500/10 text-red-200"
                          : "border-white/10 bg-white/5 text-slate-200 hover:border-mint/45 hover:bg-mint/10 hover:text-white"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>

      <motion.nav
        aria-label="Quick section navigation"
        className="fixed right-7 top-1/2 z-[100] hidden max-h-[80vh] w-[64px] -translate-y-1/2 flex-col items-center gap-3 overflow-y-auto rounded-full border border-white/10 bg-ink/75 p-2.5 shadow-glow backdrop-blur-2xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex"
        initial={{ opacity: 0, x: 18, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
      >
        {sections.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              aria-label={item.label}
              title={item.label}
              className={`group relative grid h-11 w-11 place-items-center rounded-full border text-sm transition ${
                isActive
                  ? "border-red-400/55 bg-red-500/15 text-red-300 shadow-[0_0_24px_rgba(239,68,68,0.24)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
              }`}
              whileHover={{ scale: 1.08, x: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Icon size={20} />
              <span className="pointer-events-none absolute right-full mr-3 translate-x-2 whitespace-nowrap rounded-lg border border-white/10 bg-ink/90 px-2.5 py-1 text-xs font-semibold text-slate-100 opacity-0 shadow-glow transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </motion.nav>
    </>
  );
}
