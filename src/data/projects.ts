export type ProjectCategory =
  | "WordPress"
  | "Full-stack"
  | "Internal system"
  | "SEO"
  | "Automation"
  | "Product"
  | "Game"
  | "Frontend";

export interface ProjectPrototype {
  title: string;
  features: string[];
}

export interface ProjectDetail {
  subtitle: string;
  overview: string;
  problem: string;
  prototypes: ProjectPrototype[];
  mechanics: string[];
  exportWorkflow: string[];
  gitWorkflow: string[];
  learned: string;
  disclaimer: string;
}

export interface ProjectItem {
  title: string;
  type: string;
  stack: string[];
  description: string;
  features: string[];
  categories: ProjectCategory[];
  url?: string;
  github?: string;
  aiSpotlight?: boolean;
  featured?: boolean;
  detailHref?: string;
  demoStatus?: string;
  visualTags?: string[];
  detail?: ProjectDetail;
}

export const projectCategories: ProjectCategory[] = [
  "WordPress",
  "Full-stack",
  "Internal system",
  "SEO",
  "Automation",
  "Product",
  "Game",
  "Frontend"
];

export const projects: ProjectItem[] = [
  {
    title: "Playable Ads Studio UI",
    type: "No-code Playable Ads Builder / Frontend Product MVP",
    github: "https://github.com/GnouhPTV/Playable-Ads-Studio-UI",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Phaser 3",
      "JSZip",
      "LocalStorage",
      "Lucide React"
    ],
    categories: ["Product", "Frontend", "Game"],
    featured: true,
    detailHref: "/projects/playable-ads-studio-ui",
    demoStatus: "Live Demo Coming Soon",
    visualTags: ["No-code", "Preview", "Validate", "Export"],
    description:
      "Built a local no-code MVP for creating small UA playable ad prototypes, with a dashboard, template gallery, visual editor, asset manager, runtime preview, validation checklist, video-to-playable workflow, AI builder mock, and standalone ZIP export.",
    features: [
      "No-code playable ads editor",
      "Template gallery and dashboard workflow",
      "Phone preview with safe-area guides",
      "Scene, object, asset, and layer management",
      "Runtime preview for actions and template mechanics",
      "ZIP export with HTML, CSS, JS runtime, assets, and project.json",
      "Video-to-playable MVP route",
      "AI playable builder mock route"
    ],
    detail: {
      subtitle:
        "A local no-code product MVP for building and exporting small UA playable ad prototypes.",
      overview:
        "Playable Ads Studio UI is a frontend product MVP for learning how a playable ads builder could work. It combines a SaaS-style dashboard, template gallery, editor workspace, object and scene management, runtime preview, validation, and ZIP export into one local Next.js application without a backend.",
      problem:
        "After building individual playable prototypes, I wanted to understand the bigger product workflow: how users create projects, choose templates, edit scenes and objects, upload assets, preview interactions, validate playable readiness, and export a standalone package.",
      prototypes: [
        {
          title: "Dashboard and Template Gallery",
          features: [
            "Create and reopen LocalStorage projects",
            "Search and filter templates",
            "Beginner-friendly template selection",
            "Recent project workflow"
          ]
        },
        {
          title: "No-code Visual Editor",
          features: [
            "Phone canvas with grid and safe-area guides",
            "Drag, resize, rotate, duplicate, and delete objects",
            "Scene switching and layer management",
            "Properties and role editing panels"
          ]
        },
        {
          title: "Runtime Preview and Logic",
          features: [
            "Preview scene actions and CTA flow",
            "Score and timer state",
            "Tap Monster, Merge Cannon, Runner Gate, and Gem Collector logic",
            "Reusable runtime helpers"
          ]
        },
        {
          title: "Video and AI MVP Workflows",
          features: [
            "Video-to-playable route with overlays and end card",
            "MP4/WebM preview workflow",
            "Local mock AI JSON generation",
            "Future-ready product exploration"
          ]
        }
      ],
      mechanics: [
        "No-code object editing",
        "Scene-based project structure",
        "Object roles and actions",
        "Condition and validation system",
        "LocalStorage project persistence",
        "Runtime preview",
        "Asset upload and assignment",
        "Video overlay editing",
        "ZIP packaging",
        "Standalone exported playable runtime"
      ],
      exportWorkflow: [
        "Generates a ZIP containing index.html, style.css, playable.js, assets, manifest.json, project.json, and README_EXPORT.txt",
        "Exports project logic config so the standalone package can read object roles, score, timer, scene flow, and template settings",
        "Documents that real ad-network delivery may still require MRAID wrappers, click macros, compression, and QA validation"
      ],
      gitWorkflow: [
        "Maintained as a public GitHub learning project",
        "Documented install, run, product routes, folder structure, core files, and learning exercises in README",
        "Organized code around App Router pages, editor components, Zustand store, runtime helpers, export utilities, validation, and shared types"
      ],
      learned:
        "Through this project, I learned how a frontend product workflow is structured around user projects, editor state, scene data, reusable runtime rendering, validation rules, export packaging, and product documentation. It helped me connect UI development, game interaction logic, local persistence, and no-code builder design.",
      disclaimer:
        "This project is a local educational MVP. It is not an official ad-network tool and does not guarantee production ad-network compliance. Real campaigns may require MRAID integration, click tracking, compression, network presets, and formal QA."
    }
  },
  {
    title: "UA Playable Games Lab",
    type: "HTML5 Game / Playable Ads / Frontend",
    github: "https://github.com/GnouhPTV/UA-Playable-games-lab",
    stack: [
      "Vite",
      "TypeScript",
      "Phaser 3",
      "HTML",
      "CSS",
      "JavaScript",
      "JSZip",
      "Git",
      "GitHub"
    ],
    categories: ["Game", "Frontend"],
    featured: true,
    detailHref: "/projects/ua-playable-games-lab",
    demoStatus: "Live Demo Coming Soon",
    visualTags: ["Tap", "Drag", "Merge", "Export"],
    description:
      "Built a collection of HTML5 playable ad prototypes using Phaser 3 and TypeScript, with tap, drag, merge, collision, projectile, reward, timer, CTA, end-card, and export mechanics.",
    features: [
      "4 playable ad prototypes",
      "Phaser 3 + TypeScript architecture",
      "Shared scene framework and game registry",
      "HTML5 ZIP export workflow",
      "MRAID and ad network documentation",
      "Versioned GitHub release workflow"
    ],
    detail: {
      subtitle:
        "A beginner-friendly HTML5 playable ads learning project built with Vite, TypeScript, and Phaser 3.",
      overview:
        "UA Playable Games Lab is a hands-on learning project where I built multiple HTML5 playable ad prototypes from scratch using Phaser 3 and TypeScript. The goal was to understand the core mechanics behind UA playable ads and build portfolio-ready prototypes with a clean GitHub version workflow.",
      problem:
        "I wanted to move beyond using AI-generated code and understand the actual foundations of playable ads: game loops, scenes, object interaction, timers, collision, rewards, end cards, CTA buttons, and export packaging.",
      prototypes: [
        {
          title: "Tap Monster",
          features: [
            "Tap target",
            "Score system",
            "Timer",
            "Random movement",
            "End card",
            "CTA / Replay"
          ]
        },
        {
          title: "Runner Gate",
          features: [
            "Drag left/right control",
            "Gate choices",
            "Collision detection",
            "Score modifiers"
          ]
        },
        {
          title: "Merge Cannon",
          features: [
            "Drag-and-drop",
            "Cannon merge mechanic",
            "Enemy HP",
            "Auto shooting",
            "Projectiles",
            "Coins/Gems reward system"
          ]
        },
        {
          title: "Gem Collector",
          features: [
            "Collectible objects",
            "Random spawning",
            "Respawn system",
            "Target score",
            "Timer and end card"
          ]
        }
      ],
      mechanics: [
        "Tap interaction",
        "Drag control",
        "Drag-and-drop merge",
        "Collision detection",
        "Enemy HP",
        "Projectile targeting",
        "Reward feedback",
        "Timer",
        "End card",
        "CTA / replay",
        "HTML5 export"
      ],
      exportWorkflow: [
        "Exports Tap Monster as a standalone HTML5 ZIP package",
        "Bundles index.html, style.css, playable.js, and README_EXPORT.txt",
        "Documents packaging expectations for playable ad review"
      ],
      gitWorkflow: [
        "Developed with versioned milestones from v0.1.0 to v1.0.0",
        "Used feature branches for isolated work",
        "Used semantic commit messages",
        "Used Git tags for releases",
        "Maintained README, CHANGELOG, docs, and test plan"
      ],
      learned:
        "Through this project, I learned how to structure Phaser scenes, manage game state, handle user input, create reusable UI helpers, design simple playable ad flows, and maintain a project using feature branches, semantic commits, release tags, README documentation, CHANGELOG, and test plans.",
      disclaimer:
        "This project is for learning and portfolio purposes. It does not use copyrighted assets and is not a production ad network deployment. Real ad network deployment may require MRAID integration, click tracking, file size validation, and network-specific QA."
    }
  },
  {
    title: "ECO3D Admin & SQL Server System",
    type: "ASP.NET MVC + SQL Server Internal System",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "HTML", "CSS", "IIS"],
    categories: ["Full-stack", "Internal system"],
    aiSpotlight: true,
    description:
      "Designed and built a full-stack internal admin system for ECO3D using ASP.NET MVC, C#, and SQL Server. The system turns business data into a structured management interface with authentication, product data handling, MVC views, server deployment, and database-backed workflows.",
    features: [
      "ASP.NET MVC structure with Controllers, Models, Views, and wwwroot assets",
      "C# backend logic for admin and business operations",
      "SQL Server database integration for product and system data",
      "Authentication and role-based access control concepts",
      "Product list, product detail, search, and data management workflows",
      "Responsive admin interface using JavaScript, HTML, and CSS",
      "IIS deployment and hosting environment configuration",
      "Database account, backup, restore, and troubleshooting support"
    ]
  },
  {
    title: "ECO3D Business Website",
    type: "ASP.NET MVC Business / Product Website",
    url: "https://eco3d.vn/",
    github: "https://github.com/GnouhPTV/Eco3d",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "HTML", "CSS", "SEO"],
    categories: ["Full-stack", "SEO"],
    description:
      "Built and maintained the ECO3D business website using ASP.NET MVC, C#, JavaScript, HTML, CSS, and SQL Server. The work combined full-stack development, product data display, SEO page planning, business content, server deployment, and database-backed website operations.",
    features: [
      "ASP.NET MVC website development with C# backend logic",
      "SQL Server product and business data integration",
      "Product page and product category display",
      "SEO page and product content creation",
      "Homepage redesign and UX planning",
      "IIS, VPS, domain, SSL, and hosting configuration",
      "Cloudflare/CDN and performance optimization"
    ]
  },
  {
    title: "Gang Tay Dien Website",
    type: "Niche ecommerce / Product Website",
    url: "https://gangtaydien.com",
    stack: ["WordPress", "Flatsome", "WooCommerce", "SEO"],
    categories: ["WordPress", "SEO"],
    description:
      "Built and improved a WordPress ecommerce-oriented website for electrical safety gloves and protective equipment, with a sales-focused structure, SEO-ready product pages, and responsive layouts.",
    features: [
      "Website structure planning",
      "Product page creation",
      "SEO content writing",
      "Homepage redesign",
      "WordPress and Flatsome customization",
      "Sales-oriented layout"
    ]
  },
  {
    title: "Grippaz Landing Page",
    type: "Product Landing Page",
    url: "https://grippaz.eco3d.vn/",
    stack: ["WordPress", "Hostinger", "Landing Page Design", "SEO"],
    categories: ["WordPress", "SEO"],
    description:
      "Created a WordPress landing page for selling Grippaz multi-purpose gloves. The page was designed around one main product, clear benefits, SEO-friendly content, and conversion-oriented CTA sections.",
    features: [
      "Product introduction",
      "Sales copy",
      "CTA sections",
      "Product benefits",
      "Simple landing page structure"
    ]
  },
  {
    title: "AI Chatbot for Product Consultation",
    type: "Full-stack AI / Customer Support Tool",
    stack: ["WordPress", "PHP", "JavaScript", "OpenAI API", "AI Engine", "Email workflow"],
    categories: ["WordPress", "Full-stack", "Automation"],
    aiSpotlight: true,
    description:
      "Designed and built full-stack chatbot workflows for product consultation and customer support on WordPress. The chatbot helps customers ask product questions, receive buying guidance, view payment instructions, and move from consultation to order support.",
    features: [
      "Self-built product consultation flow",
      "Customer support chatbot on WordPress",
      "Payment instruction and order support flow",
      "Email notification workflow concept",
      "Sales support automation",
      "Prompt and conversation flow design"
    ]
  },
  {
    title: "WordPress Hotel Booking Website",
    type: "Hotel / Booking Website",
    stack: ["WordPress", "Flatsome", "VikBooking", "Elementor", "CSS"],
    categories: ["WordPress", "Frontend"],
    description:
      "Built and customized WordPress hotel booking pages, focusing on booking flow, search room UI, responsive form styling, and clean integration with page builder templates.",
    features: [
      "VikBooking setup planning",
      "Booking form layout adjustment",
      "Elementor template shortcode usage",
      "CSS fixes for input fields and responsive design",
      "Search room page customization"
    ]
  },
  {
    title: "Apartment / Rental Management Website Concept",
    type: "Room Rental Management System",
    stack: ["WordPress", "Flatsome", "PHP", "MySQL concept"],
    categories: ["WordPress", "Internal system", "Full-stack"],
    aiSpotlight: true,
    description:
      "Designed a full-stack WordPress concept for room rental management, turning tenant, room, utility, and payment status data into an easy-to-read operational dashboard.",
    features: [
      "Tenant management",
      "Rental duration tracking",
      "Room status",
      "Utility billing",
      "Monthly payment status",
      "Color indicators for payment status"
    ]
  },
  {
    title: "Internal Inventory / Mini ERP System Concept",
    type: "Inventory / Sales / Quotation System",
    stack: ["WordPress or React", "SQL Server", "PHP or Spring Boot"],
    categories: ["Full-stack", "Internal system"],
    aiSpotlight: true,
    description:
      "Planned a full-stack internal business system for employee management, login, inventory, product groups, import/export stock, quotations, invoices, and SQL Server integration.",
    features: [
      "Employee management",
      "Login and role-based access",
      "Product management",
      "Inventory import/export",
      "Stock tracking",
      "Quotation and invoice concept",
      "SQL Server database integration"
    ]
  },
  {
    title: "Rise of Kingdoms Automation Tool",
    type: "Personal Automation Logic Project",
    stack: ["Python", "PyAutoGUI", "Image detection", "OCR concepts"],
    categories: ["Automation"],
    aiSpotlight: true,
    description:
      "Worked on automation logic for personal task-flow research, image detection, route planning, and configurable behavior. Presented as a personal automation logic project, not a commercial cheating product.",
    features: [
      "Image detection flow",
      "Hotspot route logic",
      "Troop return detection",
      "Coordinate learning concept",
      "Error handling and reconnect logic",
      "Configurable automation behavior",
      "Licensing plan using Cryptolens concept"
    ]
  },
  {
    title: "Valorant Stats Discord Bot",
    type: "Discord Bot / Valorant Player Stats Tracker",
    github: "https://github.com/GnouhPTV/valorant-stats",
    stack: [
      "Node.js",
      "Discord.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "node-fetch",
      "REST API",
      "dotenv"
    ],
    categories: ["Automation", "Full-stack", "Game"],
    description:
      "Built a community Discord bot for Valorant player statistics, focused on retrieving tracker data through Discord commands and presenting competitive, unrated, recent match, agent, weapon, and map stats directly inside a gaming server.",
    features: [
      "Discord command-based Valorant stat lookup",
      "Career stats by competitive and unrated game mode",
      "Recent match summary command",
      "Agent, weapon, and map stat commands",
      "Discord account to Valorant username linking flow",
      "MongoDB storage for linked usernames",
      "HTTP data fetching with Axios and node-fetch",
      "Community bot project maintained on GitHub"
    ]
  },
  {
    title: "Personal Portfolio Website",
    type: "Portfolio",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    categories: ["Frontend", "Full-stack"],
    description:
      "This website itself demonstrates modern frontend skills, animation, responsive design, structured content, and professional presentation.",
    features: [
      "Single-page portfolio layout",
      "Animated dark technology interface",
      "Reusable data-driven components",
      "Responsive navigation and project filtering",
      "Contact form UI and downloadable CV"
    ]
  }
];
