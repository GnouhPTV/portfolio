export interface SkillCategory {
  title: string;
  summary: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    summary: "Responsive product interfaces, dashboards, animated UI, and interaction-heavy frontend work.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Zustand",
      "LocalStorage",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "No-code editor UI",
      "UX/UI Design"
    ]
  },
  {
    title: "HTML5 Game / Playable Ads",
    summary: "Mobile-style playable ad prototypes and lightweight game interaction mechanics.",
    skills: [
      "Phaser 3",
      "Vite",
      "TypeScript",
      "HTML5 playable ads",
      "Scene architecture",
      "Tap interaction",
      "Drag controls",
      "Collision detection",
      "Projectiles",
      "Reward feedback",
      "End cards",
      "HTML5 ZIP export",
      "Video-to-playable MVP"
    ]
  },
  {
    title: "Backend",
    summary: "Business logic, WordPress extensions, and practical API integration.",
    skills: [
      "PHP",
      "WordPress Plugin Development",
      ".NET MVC",
      "C#",
      "Spring Boot basics",
      "REST API basics"
    ]
  },
  {
    title: "Database",
    summary: "SQL Server and MySQL operations for product, account, and internal data.",
    skills: [
      "SQL Server",
      "MySQL",
      "Database design",
      "SQL queries",
      "Backup and restore",
      "Data connection troubleshooting"
    ]
  },
  {
    title: "WordPress / CMS",
    summary: "Production website maintenance, customization, WooCommerce, and page building.",
    skills: [
      "WordPress",
      "Flatsome Theme",
      "UX Builder",
      "Elementor",
      "WooCommerce",
      "Custom Shortcodes",
      "Plugin customization",
      "Theme customization",
      "LiteSpeed Cache"
    ]
  },
  {
    title: "Server / DevOps / IT",
    summary: "Hosting, deployment, DNS, performance, and operational troubleshooting.",
    skills: [
      "IIS Manager",
      "VPS management",
      "Hostinger hosting",
      "DNS configuration",
      "Cloudflare CDN",
      "SSL setup",
      "Windows Server basics",
      "Website deployment",
      "Website maintenance",
      "Performance optimization",
      "Security monitoring"
    ]
  },
  {
    title: "Marketing / SEO",
    summary: "Content and technical SEO work connected to business website outcomes.",
    skills: [
      "SEO content writing",
      "Keyword research",
      "Product page optimization",
      "Backlink planning",
      "Website analytics",
      "Content management",
      "Landing page optimization"
    ]
  },
  {
    title: "Tools",
    summary: "Daily tools for coding, debugging, database work, and communication.",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "SSMS",
      "Figma basics",
      "Postman basics",
      "Microsoft Office"
    ]
  }
];
