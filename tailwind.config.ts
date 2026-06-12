import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030712",
        panel: "#07111f",
        line: "rgba(148, 163, 184, 0.18)",
        mint: "#34d399",
        cyan: "#22d3ee",
        steel: "#94a3b8",
        signal: "#f59e0b"
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.16)",
        mint: "0 0 34px rgba(52, 211, 153, 0.18)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
