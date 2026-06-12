export interface ExperienceItem {
  company: string;
  time: string;
  role: string;
  description: string[];
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Playable Ads Studio UI",
    time: "2026",
    role: "Frontend Product Developer / No-code Playable Ads Builder MVP",
    link: "https://github.com/GnouhPTV/Playable-Ads-Studio-UI",
    description: [
      "Built a local no-code MVP for creating UA playable ad prototypes using Next.js, React, TypeScript, Zustand, Tailwind CSS, Phaser 3, and JSZip.",
      "Created dashboard, template gallery, visual editor, asset manager, scene editor, properties panel, layer management, and phone preview workflow.",
      "Implemented runtime preview concepts for actions, CTA, replay flow, score, timer, scene transitions, and playable template logic.",
      "Added validation and ZIP export workflow with standalone HTML, CSS, JS runtime, assets, project.json, manifest, and export README."
    ]
  },
  {
    company: "UA Playable Games Lab",
    time: "2026",
    role: "Frontend Game Developer / Playable Ads Learning Project",
    link: "https://github.com/GnouhPTV/UA-Playable-games-lab",
    description: [
      "Built four HTML5 playable ad prototypes using Vite, TypeScript, Phaser 3, HTML, CSS, and JavaScript.",
      "Practiced tap interaction, drag control, drag-and-drop merge, collision detection, projectile targeting, enemy HP, rewards, timers, end cards, CTA buttons, and replay flow.",
      "Created a standalone HTML5 ZIP export workflow using JSZip for Tap Monster.",
      "Maintained a clean Git workflow with feature branches, semantic commits, version tags, README, CHANGELOG, docs, and test plan."
    ]
  },
  {
    company: "ECO3D Website / Internal System Developer",
    time: "06/2024 - 03/2025",
    role: "Full-Stack Web Developer",
    link: "https://github.com/GnouhPTV/Eco3d",
    description: [
      "Developed and maintained business websites using .NET MVC, C#, JavaScript, HTML, CSS, and SQL Server.",
      "Deployed websites to VPS servers and configured IIS Manager, application pools, bindings, SSL, and hosting environments.",
      "Managed SQL Server databases, user accounts, backups, restores, domain DNS settings, and server connection issues.",
      "Configured Cloudflare CDN and performance improvements while monitoring VPS CPU, RAM, disk usage, and website availability.",
      "Handled security, access control, maintenance, and troubleshooting for production websites."
    ]
  },
  {
    company: "ECO3D Marketing Websites / WordPress & SEO Technical Lead",
    time: "03/2025 - Present",
    role: "WordPress Developer / Marketing Team Leader",
    link: "https://github.com/GnouhPTV/Eco3d",
    description: [
      "Managed Hostinger hosting, domain DNS, Cloudflare CDN, website security, and WordPress maintenance.",
      "Updated themes, plugins, product pages, SEO content, Flatsome layouts, Elementor sections, WooCommerce pages, PHP, HTML, CSS, JavaScript, and MySQL-based features.",
      "Planned and supervised SEO content, keyword research, backlink strategy, website optimization, and homepage improvement work.",
      "Coordinated marketing and IT requirements while managing interns and assigning website/content tasks.",
      "Created product pages and landing pages for safety equipment, gloves, masks, and industrial products."
    ]
  },
  {
    company: "AutoRok 2023",
    time: "12/2023 - 05/2024",
    role: "Frontend Developer",
    link: "https://github.com/GnouhPTV/autorokwebsite",
    description: [
      "Designed and developed website interfaces using JavaScript, HTML, and CSS.",
      "Used React and i18next to build multilingual user interfaces.",
      "Focused on clean UI, responsive layout, and user experience."
    ]
  },
  {
    company: "Valorant Stats Discord Bot",
    time: "2022 - 2023",
    role: "Discord Bot Developer / Valorant Player Stats Tracker",
    link: "https://github.com/GnouhPTV/valorant-stats",
    description: [
      "Built a Discord bot for Valorant player stat lookup in a gaming community.",
      "Used Node.js, Discord.js, MongoDB, Mongoose, Axios, node-fetch, and REST API data retrieval to display Valorant statistics inside Discord.",
      "Implemented command flows for competitive, unrated, recent match, agent, weapon, and map stats.",
      "Added Discord account to Valorant username linking with MongoDB storage for linked player names."
    ]
  },
  {
    company: "Barbershop Ecommerce Website",
    time: "12/2023",
    role: "Web Developer",
    link: "https://github.com/GnouhPTV/atnshop",
    description: [
      "Developed and maintained an e-commerce website.",
      "Managed product display, customer flow, order handling, and basic SEO.",
      "Worked with payment gateway concepts, order fulfillment, and customer relationship management."
    ]
  },
  {
    company: "Enterprise Management Project",
    time: "03/2023 - 05/2023",
    role: "Full-Stack Developer",
    link: "https://github.com/GnouhPTV/Comp1640",
    description: [
      "Worked in a 6-person team.",
      "Designed UI and connected frontend with backend.",
      "Built employee management, announcements, and social media-style internal communication features."
    ]
  },
  {
    company: "Unity 2D Game Project",
    time: "07/2022 - 10/2022",
    role: "Backend / Game Logic Developer",
    description: [
      "Worked with Unity 2D, C#, and JavaScript.",
      "Configured character animations and game logic.",
      "Completed multiple group projects during training."
    ]
  }
];
