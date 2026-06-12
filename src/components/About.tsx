import { profile } from "@/data/profile";
import { CheckCircle2, Gamepad2, Layers, Server, TrendingUp } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const focusIcons = [Layers, Server, Gamepad2, TrendingUp, CheckCircle2];

export default function About() {
  return (
    <MotionWrapper id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">
            Practical development for websites, systems, frontend interaction, and business growth.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.focusAreas.map((area, index) => {
              const Icon = focusIcons[index] ?? CheckCircle2;
              return (
                <div key={area} className="glass-card flex gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-mint/25 bg-mint/10 text-mint">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm leading-6 text-slate-200">{area}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
