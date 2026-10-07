export interface SkillCategory {
  title: string;
  summary: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    summary: "User interfaces, dashboards, and interactive web pages.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "AJAX",
      "Vite",
      "Phaser 3"
    ]
  },
  {
    title: "Backend & Database",
    summary: "Business logic, APIs, and the databases behind them.",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "ASP.NET MVC",
      "C#",
      "PHP",
      "Node.js",
      "SQL Server",
      "MySQL",
      "MongoDB",
      "REST API"
    ]
  },
  {
    title: "Business Systems",
    summary: "Who can log in, who can do what, and what managers see.",
    skills: [
      "Authentication",
      "Role-based access",
      "Approval workflows",
      "Dashboards / reporting",
      "User management"
    ]
  },
  {
    title: "Servers & Deployment",
    summary: "Putting applications online and keeping them running.",
    skills: [
      "IIS",
      "VPS",
      "Hostinger",
      "Cloudflare",
      "DNS",
      "SSL",
      "Database backup / restore",
      "Git",
      "GitHub"
    ]
  },
  {
    title: "WordPress / CMS",
    summary: "Building and customizing company websites beyond standard themes.",
    skills: [
      "WordPress",
      "WooCommerce",
      "Flatsome",
      "Elementor",
      "Custom plugins",
      "Custom shortcodes"
    ]
  },
  {
    title: "Additional Strengths",
    summary: "Working habits from supporting real systems and teams.",
    skills: [
      "Troubleshooting live systems",
      "Learning new tools independently",
      "Technical documentation",
      "Explaining technical work to non-technical users",
      "Coordinating technical tasks"
    ]
  }
];
