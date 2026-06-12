"use client";

import { profile } from "@/data/profile";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Mail,
  MapPin,
  ServerCog
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ParticleTone = "mint" | "cyan" | "signal" | "red" | "white";

type HeroParticle = {
  x: number;
  y: number;
  r: number;
  tone: ParticleTone;
  opacity: number;
  drift: number;
  phase: number;
};

const heroParticles: HeroParticle[] = [
  { x: 48, y: 17, r: 0.36, tone: "signal", opacity: 0.7, drift: 1.2, phase: 0.1 },
  { x: 55, y: 10, r: 0.32, tone: "white", opacity: 0.58, drift: 1, phase: 1.8 },
  { x: 62, y: 18, r: 0.42, tone: "signal", opacity: 0.72, drift: 1.3, phase: 2.7 },
  { x: 57, y: 27, r: 0.28, tone: "cyan", opacity: 0.48, drift: 0.9, phase: 3.2 },
  { x: 67, y: 30, r: 0.3, tone: "signal", opacity: 0.62, drift: 1.1, phase: 4.2 },
  { x: 75, y: 12, r: 0.36, tone: "red", opacity: 0.7, drift: 1.2, phase: 5.1 },
  { x: 83, y: 20, r: 0.3, tone: "signal", opacity: 0.56, drift: 1, phase: 1.1 },
  { x: 91, y: 15, r: 0.26, tone: "white", opacity: 0.42, drift: 0.85, phase: 2.1 },
  { x: 86, y: 34, r: 0.38, tone: "signal", opacity: 0.62, drift: 1.2, phase: 3.7 },
  { x: 94, y: 42, r: 0.27, tone: "cyan", opacity: 0.42, drift: 0.9, phase: 4.6 },
  { x: 79, y: 50, r: 0.28, tone: "red", opacity: 0.54, drift: 1.1, phase: 0.8 },
  { x: 66, y: 59, r: 0.3, tone: "signal", opacity: 0.5, drift: 1, phase: 2.9 },
  { x: 56, y: 73, r: 0.34, tone: "signal", opacity: 0.62, drift: 1.2, phase: 1.5 },
  { x: 47, y: 84, r: 0.28, tone: "cyan", opacity: 0.45, drift: 1, phase: 3.8 },
  { x: 61, y: 88, r: 0.26, tone: "white", opacity: 0.42, drift: 0.9, phase: 4.8 },
  { x: 71, y: 77, r: 0.34, tone: "signal", opacity: 0.58, drift: 1.3, phase: 5.4 },
  { x: 84, y: 72, r: 0.25, tone: "red", opacity: 0.48, drift: 1, phase: 2.2 },
  { x: 93, y: 80, r: 0.3, tone: "signal", opacity: 0.54, drift: 1.1, phase: 3.1 },
  { x: 36, y: 34, r: 0.24, tone: "signal", opacity: 0.42, drift: 0.8, phase: 0.6 },
  { x: 40, y: 43, r: 0.2, tone: "white", opacity: 0.34, drift: 0.7, phase: 2.6 },
  { x: 28, y: 78, r: 0.26, tone: "red", opacity: 0.38, drift: 0.8, phase: 4.1 }
];

const heroParticleLines: Array<[number, number, number]> = [
  [0, 1, 0.28],
  [0, 2, 0.34],
  [0, 3, 0.18],
  [1, 2, 0.24],
  [2, 3, 0.24],
  [2, 4, 0.32],
  [3, 4, 0.2],
  [5, 6, 0.28],
  [5, 8, 0.24],
  [6, 7, 0.2],
  [6, 8, 0.22],
  [7, 9, 0.16],
  [8, 9, 0.22],
  [8, 10, 0.18],
  [10, 11, 0.2],
  [11, 15, 0.18],
  [12, 13, 0.24],
  [12, 14, 0.22],
  [12, 15, 0.2],
  [13, 14, 0.18],
  [15, 16, 0.18],
  [16, 17, 0.2],
  [18, 19, 0.18],
  [13, 20, 0.14]
];

const particleColors: Record<ParticleTone, string> = {
  mint: "#34d399",
  cyan: "#22d3ee",
  signal: "#f59e0b",
  red: "#ef4444",
  white: "#f8fafc"
};

function actionClasses(kind: "primary" | "secondary" | "ghost") {
  if (kind === "primary") {
    return "border-mint/40 bg-mint text-ink shadow-mint hover:bg-emerald-300";
  }

  if (kind === "secondary") {
    return "border-cyan/35 bg-cyan/10 text-cyan hover:bg-cyan/20";
  }

  return "border-white/10 bg-white/5 text-white hover:border-white/25 hover:bg-white/10";
}

function actionIcon(label: string) {
  if (label.includes("Download")) return <Download size={17} />;
  if (label.includes("Contact")) return <Mail size={17} />;
  if (label.includes("GitHub")) return <Github size={17} />;
  return <ArrowRight size={17} />;
}

function HeroNetworkParticles() {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const particleRefs = useRef<Array<SVGCircleElement | null>>([]);
  const lineRefs = useRef<Array<SVGLineElement | null>>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const positionsRef = useRef(heroParticles.map((particle) => ({
    x: particle.x,
    y: particle.y
  })));

  useEffect(() => {
    const layer = layerRef.current;

    if (!layer) return;

    const boundsElement = layer.closest("section") ?? layer;

    const setStaticPositions = () => {
      heroParticles.forEach((particle, index) => {
        const node = particleRefs.current[index];
        if (!node) return;
        node.setAttribute("cx", particle.x.toString());
        node.setAttribute("cy", particle.y.toString());
      });

      heroParticleLines.forEach(([from, to], index) => {
        const line = lineRefs.current[index];
        if (!line) return;
        line.setAttribute("x1", heroParticles[from].x.toString());
        line.setAttribute("y1", heroParticles[from].y.toString());
        line.setAttribute("x2", heroParticles[to].x.toString());
        line.setAttribute("y2", heroParticles[to].y.toString());
      });
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setStaticPositions();
      return;
    }

    const updateMouse = (event: PointerEvent) => {
      const rect = boundsElement.getBoundingClientRect();
      mouseRef.current = {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100
      };
    };

    const clearMouse = () => {
      mouseRef.current = null;
    };

    let frame = 0;

    const animate = (time: number) => {
      const mouse = mouseRef.current;

      heroParticles.forEach((particle, index) => {
        const idleX =
          Math.sin(time * 0.00045 + particle.phase) * particle.drift;
        const idleY =
          Math.cos(time * 0.00038 + particle.phase * 1.35) * particle.drift;
        let targetX = particle.x + idleX;
        let targetY = particle.y + idleY;

        if (mouse) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const radius = 14;

          if (distance > 0 && distance < radius) {
            const force = Math.pow(1 - distance / radius, 2) * 7;
            targetX += (dx / distance) * force;
            targetY += (dy / distance) * force;
          }
        }

        const current = positionsRef.current[index];
        current.x += (targetX - current.x) * 0.09;
        current.y += (targetY - current.y) * 0.09;

        const node = particleRefs.current[index];
        if (!node) return;
        node.setAttribute("cx", current.x.toFixed(2));
        node.setAttribute("cy", current.y.toFixed(2));
      });

      heroParticleLines.forEach(([from, to], index) => {
        const line = lineRefs.current[index];
        if (!line) return;

        const start = positionsRef.current[from];
        const end = positionsRef.current[to];
        line.setAttribute("x1", start.x.toFixed(2));
        line.setAttribute("y1", start.y.toFixed(2));
        line.setAttribute("x2", end.x.toFixed(2));
        line.setAttribute("y2", end.y.toFixed(2));
      });

      frame = window.requestAnimationFrame(animate);
    };

    boundsElement.addEventListener("pointermove", updateMouse);
    boundsElement.addEventListener("pointerleave", clearMouse);
    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
      boundsElement.removeEventListener("pointermove", updateMouse);
      boundsElement.removeEventListener("pointerleave", clearMouse);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_50%,rgba(220,38,38,0.18),transparent_32%),radial-gradient(circle_at_48%_74%,rgba(245,158,11,0.08),transparent_26%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-75"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="hero-particle-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.65" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {heroParticleLines.map(([from, to, opacity], index) => (
          <line
            key={`${from}-${to}`}
            ref={(node) => {
              lineRefs.current[index] = node;
            }}
            x1={heroParticles[from].x}
            y1={heroParticles[from].y}
            x2={heroParticles[to].x}
            y2={heroParticles[to].y}
            stroke="rgba(248, 250, 252, 0.62)"
            strokeWidth="0.7"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={opacity + 0.14}
          />
        ))}
        {heroParticles.map((particle, index) => (
          <circle
            key={`${particle.x}-${particle.y}`}
            ref={(node) => {
              particleRefs.current[index] = node;
            }}
            cx={particle.x}
            cy={particle.y}
            r={particle.r}
            fill={particleColors[particle.tone]}
            opacity={particle.opacity}
            filter="url(#hero-particle-glow)"
          />
        ))}
      </svg>
    </div>
  );
}

interface HeroProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const activeRole = profile.roles[roleIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const handleActionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!onNavigate || !href.startsWith("#")) return;

    event.preventDefault();
    onNavigate(href.slice(1));
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[86svh] items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src={`${publicBasePath}/images/developer-workstation.jpg`}
          alt="Dark futuristic developer workstation with code screens"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#030712_0%,rgba(3,7,18,0.90)_34%,rgba(3,7,18,0.64)_67%,rgba(3,7,18,0.86)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-tech-grid bg-[length:40px_40px] opacity-30" />
      <HeroNetworkParticles />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-mint/30 bg-mint/10 px-3 py-2 text-sm font-medium text-mint">
            <MapPin size={16} />
            {profile.location}
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}
          </h1>
          <p className="mt-5 text-balance text-2xl font-semibold text-slate-100 sm:text-3xl">
            {profile.headline}
          </p>

          <div className="mt-5 flex min-h-10 flex-wrap items-center gap-3 text-lg text-slate-200">
            <span className="text-steel">Also focused on</span>
            <span className="relative inline-flex min-w-[16rem] items-center rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-2 text-cyan">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                >
                  {activeRole}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.actions.map((action) => (
              <motion.a
                key={action.label}
                href={action.href}
                download={action.download}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                onClick={(event) => handleActionClick(event, action.href)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition ${actionClasses(
                  action.kind
                )}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {actionIcon(action.label)}
                {action.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <div className="relative ml-auto max-w-lg">
            <div className="absolute inset-0 rounded-xl border border-cyan/20 bg-cyan/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/10 p-5 shadow-glow backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-signal" />
                  <span className="h-3 w-3 rounded-full bg-mint" />
                </div>
                <span className="text-xs text-steel">business-system.ts</span>
              </div>
              <div className="space-y-3 font-mono text-sm leading-7 text-slate-300">
                <p>
                  <span className="text-cyan">const</span>{" "}
                  <span className="text-white">developer</span> ={" "}
                  <span className="text-mint">&quot;Daniel&quot;</span>;
                </p>
                <p>
                  <span className="text-cyan">build</span>
                  <span className="text-slate-500">(</span>
                  <span className="text-mint">WordPress</span>,{" "}
                  <span className="text-mint">SQLServer</span>,{" "}
                  <span className="text-mint">NextJS</span>,{" "}
                  <span className="text-mint">Phaser3</span>
                  <span className="text-slate-500">)</span>;
                </p>
                <p className="text-steel">
                  ship.projects(&quot;web systems + HTML5 playable ads&quot;);
                </p>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  { icon: Code2, label: "Frontend", value: "React / Phaser 3" },
                  { icon: ServerCog, label: "Systems", value: "SQL / IIS / VPS" }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/10 bg-ink/60 p-4"
                    >
                      <Icon className="mb-3 text-mint" size={22} />
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-steel">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
