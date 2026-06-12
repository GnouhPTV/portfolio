"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Differentiator from "@/components/Differentiator";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar, { type NavigationItem } from "@/components/Navbar";
import Projects from "@/components/Projects";
import SEOSection from "@/components/SEOSection";
import Skills from "@/components/Skills";
import WebsiteProjects from "@/components/WebsiteProjects";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  BriefcaseBusiness,
  GraduationCap,
  Globe2,
  LayoutGrid,
  Mail,
  Search,
  Sparkles,
  Target,
  User,
  Wrench
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";

interface PortfolioSection extends NavigationItem {
  component: ComponentType;
}

const sections: PortfolioSection[] = [
  { id: "hero", label: "Home", component: Hero, icon: Sparkles },
  { id: "about", label: "About", component: About, icon: User },
  { id: "different", label: "Why Me", component: Differentiator, icon: Target },
  { id: "skills", label: "Skills", component: Skills, icon: Wrench },
  {
    id: "experience",
    label: "Experience",
    component: Experience,
    icon: BriefcaseBusiness
  },
  {
    id: "projects",
    label: "Projects",
    component: () => <Projects view="featured" />,
    icon: LayoutGrid
  },
  {
    id: "websites",
    label: "Websites",
    component: WebsiteProjects,
    icon: Globe2
  },
  {
    id: "ai-tools",
    label: "AI Tools",
    component: () => <Projects view="ai" />,
    icon: Bot
  },
  { id: "seo", label: "SEO", component: SEOSection, icon: Search },
  {
    id: "education",
    label: "Education",
    component: Education,
    icon: GraduationCap
  },
  { id: "contact", label: "Contact", component: Contact, icon: Mail }
];

export default function PortfolioShell() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [loadingLabel, setLoadingLabel] = useState<string | null>(null);
  const scrollPanelRef = useRef<HTMLDivElement | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const clearTimeoutRef = useRef<number | null>(null);

  const activeEntry =
    sections.find((section) => section.id === activeSection) ?? sections[0];
  const ActiveComponent = activeEntry.component;
  const navigationItems = sections.map(({ id, label, icon }) => ({
    id,
    label,
    icon
  }));

  useEffect(() => {
    scrollPanelRef.current?.scrollTo({ top: 0, left: 0 });
  }, [activeSection]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }

      if (clearTimeoutRef.current) {
        window.clearTimeout(clearTimeoutRef.current);
      }
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (sectionId === activeSection || loadingLabel) return;

    const target = sections.find((section) => section.id === sectionId);
    if (!target) return;

    setLoadingLabel(target.label);

    transitionTimeoutRef.current = window.setTimeout(() => {
      setActiveSection(sectionId);
    }, 360);

    clearTimeoutRef.current = window.setTimeout(() => {
      setLoadingLabel(null);
    }, 620);
  };

  return (
    <div className="relative h-svh overflow-hidden bg-ink">
      <Navbar
        activeSection={activeSection}
        sections={navigationItems}
        onNavigate={navigateToSection}
      />

      <main className="h-svh overflow-hidden pt-16">
        <section className="relative h-[calc(100svh-4rem)] overflow-hidden">
          <div
            ref={scrollPanelRef}
            className="h-full overflow-y-auto overscroll-contain scroll-smooth lg:pr-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                className="min-h-full"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                {activeEntry.id === "hero" ? (
                  <Hero onNavigate={navigateToSection} />
                ) : (
                  <ActiveComponent />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {loadingLabel ? (
              <motion.div
                key={loadingLabel}
                className="pointer-events-none absolute inset-0 z-40 overflow-hidden bg-ink/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16 }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 w-full border-x border-red-400/25 bg-[linear-gradient(90deg,rgba(3,7,18,0.96),rgba(127,29,29,0.62),rgba(3,7,18,0.96))] shadow-[0_0_80px_rgba(239,68,68,0.22)]"
                  initial={{ x: "-105%" }}
                  animate={{ x: "105%" }}
                  exit={{ x: "105%" }}
                  transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
                />
                <div className="absolute inset-0 grid place-items-center px-4">
                  <motion.div
                    className="rounded-lg border border-white/10 bg-ink/80 px-5 py-4 text-center shadow-glow backdrop-blur-2xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs font-semibold uppercase text-red-300">
                      Loading {loadingLabel}...
                    </p>
                    <div className="mt-3 h-1 w-40 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-red-400 via-signal to-mint"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 0.55,
                          ease: "easeInOut",
                          repeat: 1
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
