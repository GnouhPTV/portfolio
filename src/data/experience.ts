import { eco3dSites } from "./websites";

export interface ExperienceItem {
  company: string;
  time: string;
  role: string;
  description: string[];
  kind: "work" | "project";
  link?: string;
  linkLabel?: string;
  websites?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Salesoft Online (ECO3D Portal)",
    time: "04/2026 - Present",
    role: "Full-Stack Web Developer | Java Spring Boot, React (Vite), SQL Server",
    kind: "work",
    link: "https://banggia.eco3d.vn/",
    linkLabel: "Website",
    description: [
      "Built and maintained Salesoft Online, ECO3D's business portal for internal staff and external resellers (CTV), using Java Spring Boot, React (Vite), and SQL Server.",
      "Implemented role-based access and a two-stage approval workflow for reseller accounts, so Marketing staff screen applicants and Approvers make the final decision.",
      "Diagnosed and fixed a Spring Security authentication issue (@AuthenticationPrincipal) where logged-in non-employee accounts were silently not recognised across multiple parts of the system.",
      "Prevented employee and reseller accounts from being mixed up in a database table shared with an older desktop sales (POS) system, by designing a safe ID-namespacing scheme.",
      "Added Google reCAPTCHA v2 to block spam on a public stock-check page, and switched stock figures to an existing stored procedure, replacing an inaccurate workaround.",
      "Built a sales dashboard and reseller login analytics showing orders and revenue per reseller, using existing order data without adding new database tables.",
      "Wrote technical documentation, process diagrams, and feature summaries so management and other teams could review new features."
    ]
  },
  {
    company: "ECO3D Web Development (WordPress / PHP)",
    time: "06/2024 - Present",
    role: "Full-Stack Web Developer / Technical Lead",
    kind: "work",
    websites: eco3dSites,
    description: [
      "Developed custom features and maintained 13 live websites for ECO3D's safety-equipment and industrial-product brands, using WordPress, PHP, JavaScript, and MySQL.",
      "Wrote custom plugins and shortcodes to add features the standard platform lacked: product catalogs, instant search and filtering (AJAX), product detail pages, and dynamic page components.",
      "Connected the websites to product and business data through REST APIs and database queries, and added user login and access control to custom features.",
      "Extended WooCommerce (online store), Flatsome, and Elementor with custom PHP and JavaScript where built-in features were not enough.",
      "Kept all sites running: managed hosting, domains (DNS), Cloudflare, SSL certificates, and security, fixed production issues, and improved website performance.",
      "Turned business and marketing requests into technical tasks and coordinated website and content tasks with interns."
    ]
  },
  {
    company: "ECO3D Internal Admin System (ASP.NET MVC)",
    time: "06/2024 - 03/2025",
    role: "Full-Stack Web Developer | ASP.NET MVC, C#, SQL Server, IIS",
    kind: "work",
    link: "https://eco3d.vn/",
    linkLabel: "Website",
    description: [
      "Developed an internal admin system and business websites with ASP.NET MVC, C#, and SQL Server, including user login, access control, product data management, and an admin interface.",
      "Deployed the applications to VPS servers and configured the IIS web server (application pools, bindings, SSL) so they could run in production.",
      "Managed SQL Server databases: user accounts, backups, restores, and connection problems.",
      "Set up Cloudflare and DNS, monitored server health (CPU, RAM, disk, uptime), and fixed production issues to keep the websites available."
    ]
  },
  {
    company: "Freelance & Client WordPress Websites",
    time: "2024 - Present",
    role: "WordPress Developer / Website Support",
    kind: "work",
    websites: ["hikariulm.com", "clearsimulations.com"],
    description: [
      "Built a WordPress brand website with responsive layouts, and provided hosting, DNS, and troubleshooting support to keep client sites running."
    ]
  },
  {
    company: "AutoRok 2023",
    time: "12/2023 - 05/2024",
    role: "Frontend Developer | React, i18next, JavaScript",
    kind: "work",
    link: "https://github.com/GnouhPTV/autorokwebsite",
    description: [
      "Developed responsive website interfaces with React, JavaScript, HTML, and CSS, including multilingual support with i18next."
    ]
  },
  {
    company: "Playable Ads Studio UI",
    time: "2026",
    role: "Self-built project | Next.js, React, TypeScript, Zustand, Phaser 3",
    kind: "project",
    link: "https://github.com/GnouhPTV/Playable-Ads-Studio-UI",
    description: [
      "Built a no-code editor for creating interactive mobile ad prototypes without programming, using Next.js, React, TypeScript, Zustand, Tailwind CSS, and Phaser 3.",
      "Developed the editor interface (templates, visual scene editor, layers, asset manager, phone preview), a live preview of ad behaviour, project validation, and ZIP export to a standalone HTML5 package."
    ]
  },
  {
    company: "UA Playable Games Lab",
    time: "2026",
    role: "Self-learning project | Vite, TypeScript, Phaser 3",
    kind: "project",
    link: "https://github.com/GnouhPTV/UA-Playable-games-lab",
    description: [
      "Built four HTML5 mini-game ad prototypes covering tap and drag controls, merging, collision detection, targeting, rewards, timers, end screens, and replay flow.",
      "Packaged a game as a standalone ZIP with JSZip, and used a structured Git workflow with feature branches, version tags, a CHANGELOG, and a test plan."
    ]
  },
  {
    company: "Valorant Stats Discord Bot",
    time: "2022 - 2023",
    role: "Personal project | Node.js, Discord.js, MongoDB, Mongoose, Axios",
    kind: "project",
    link: "https://github.com/GnouhPTV/valorant-stats",
    description: [
      "Built a Discord bot that pulls Valorant player statistics from a REST API, with commands for match, agent, weapon, and map stats, and account linking stored in MongoDB."
    ]
  },
  {
    company: "Enterprise Management Project",
    time: "03/2023 - 05/2023",
    role: "Team project | Full-Stack Developer, 6-person team",
    kind: "project",
    link: "https://github.com/GnouhPTV/Comp1640",
    description: [
      "Designed the UI and connected frontend with backend for employee management, announcements, and internal social-feed features."
    ]
  },
  {
    company: "Unity 2D Game Project",
    time: "07/2022 - 10/2022",
    role: "Training project | Unity 2D, C#",
    kind: "project",
    description: [
      "Implemented game logic and character animations in Unity 2D with C# and JavaScript across multiple team projects."
    ]
  }
];
