export interface ProfileAction {
  label: string;
  href: string;
  kind: "primary" | "secondary" | "ghost";
  download?: boolean;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface EducationItem {
  school: string;
  major: string;
  time: string;
  meta: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  time?: string;
  note?: string;
  href?: string;
}

export interface DifferentiatorItem {
  title: string;
  text: string;
}

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "Le Thanh Phuong",
  preferredName: "Daniel",
  role: "Full-Stack Web Developer | WordPress Developer | Frontend Game Developer | IT Support",
  headline: "Full-Stack Web Developer & Frontend System Builder",
  location: "Da Nang, Vietnam",
  email: "phuonglt20102001@gmail.com",
  phone: "+84 911 389 543",
  github: "https://github.com/GnouhPTV",
  linkedin: "#",
  summary:
    "I build practical ASP.NET MVC / SQL Server systems, WordPress websites, frontend interfaces, HTML5 playable ad prototypes, no-code builder MVPs, Discord bot/stat tracker projects, AI chatbot workflows, SEO-ready product pages, and automation tools for real business operations. My work connects development, hosting, database, SEO, game interaction logic, and daily website maintenance into usable systems that support sales, learning, and internal teams.",
  roles: [
    "WordPress Developer",
    "Full-Stack Web Developer",
    "Frontend Game Developer",
    "Playable Ads Learner",
    "IT Support Engineer",
    "SQL Server System Developer",
    "Ecommerce Platform Support"
  ],
  actions: [
    { label: "View Projects", href: "#projects", kind: "primary" },
    {
      label: "Download CV",
      href: `${publicBasePath}/LE-THANH-PHUONG-CV-UPDATED.pdf`,
      kind: "secondary",
      download: true
    },
    { label: "Contact Me", href: "#contact", kind: "secondary" },
    { label: "GitHub", href: "https://github.com/GnouhPTV", kind: "ghost" }
  ] satisfies ProfileAction[],
  about: [
    "I am a full-stack web developer with hands-on experience building ASP.NET MVC systems, SQL Server-backed business websites, WordPress websites, e-commerce pages, internal management tools, AI chatbot workflows, HTML5 playable ad prototypes, no-code playable ads builder workflows, and server environments. I do not only create interfaces; I connect pages, content, hosting, database logic, SEO requirements, interaction logic, and business operations so each website or project can support real users.",
    "My experience includes WordPress, Flatsome, Elementor, WooCommerce, PHP, JavaScript, TypeScript, React, Next.js, Zustand, Tailwind CSS, Vite, Phaser 3, JSZip, .NET MVC, C#, SQL Server, MySQL, IIS Manager, VPS servers, Hostinger, DNS configuration, Cloudflare CDN, SEO page planning, product content optimization, and internal system development.",
    "I am currently improving my English and preparing for international IT opportunities where practical system thinking, reliable execution, frontend/game interaction skills, and business-focused web development are valuable. My current English profile is Duolingo English Test 95, presented as IELTS 5.5 equivalent for CV purposes."
  ],
  focusAreas: [
    "ASP.NET MVC, C#, SQL Server, and internal business systems",
    "WordPress websites, product pages, and SEO landing pages",
    "No-code builder MVPs, editor UI, runtime preview, and ZIP export workflows",
    "HTML5 game prototypes, Phaser 3 scenes, and playable ads mechanics",
    "Hosting, DNS, Cloudflare, IIS, and VPS support",
    "AI chatbot, automation, and website support workflows"
  ],
  strengths: [
    "Practical full-stack development experience",
    "Strong WordPress website building and business website operations experience",
    "Able to design frontend product MVP workflows with dashboard, editor, preview, validation, and export",
    "Able to build HTML5 interactive prototypes with TypeScript, Vite, and Phaser 3",
    "Able to connect technical work with SEO pages, product content, and marketing goals",
    "Experience with hosting, DNS, Cloudflare, IIS, VPS, and SQL Server",
    "Fast learner and willing to research new technologies",
    "Able to work independently and manage multiple website tasks",
    "Experience building and supporting real business websites, internal systems, chatbot workflows, and frontend game learning projects"
  ],
  differentiators: [
    {
      title: "Real Business Website Experience",
      text: "I have worked on websites used by real businesses, not only classroom or demo projects. I understand how websites support sales, product content, SEO, customer support, and daily operations."
    },
    {
      title: "Full-Stack + System Support Mindset",
      text: "I can work across frontend, backend, database, deployment, IIS, VPS, DNS, SSL, Cloudflare, and troubleshooting. This helps me solve problems from both the code side and the operation side."
    },
    {
      title: "ASP.NET MVC and SQL Server Practice",
      text: "I have hands-on experience building and maintaining ECO3D systems with ASP.NET MVC, C#, SQL Server, JavaScript, HTML, CSS, IIS, and database-backed workflows."
    },
    {
      title: "WordPress and SEO Execution",
      text: "I can build WordPress websites, landing pages, product pages, and SEO content structures using Flatsome, Elementor, WooCommerce, PHP, CSS, and practical content planning."
    },
    {
      title: "Business-Focused Technical Work",
      text: "I do not only build features. I think about whether a page is useful for customers, clear for sales teams, optimized for search, maintainable for the company, and stable in production."
    },
    {
      title: "Frontend Game and Interaction Learning",
      text: "I have built HTML5 playable ad prototypes with Phaser 3 and TypeScript to understand scenes, input, collision, timers, rewards, end cards, CTA flow, replay logic, and export packaging."
    },
    {
      title: "AI and Automation Direction",
      text: "I have explored chatbot workflows, product consultation flows, automation logic, and internal tool concepts, which helps me bring modern support workflows into web systems."
    }
  ] satisfies DifferentiatorItem[],
  contact: [
    {
      label: "Email",
      value: "phuonglt20102001@gmail.com",
      href: "mailto:phuonglt20102001@gmail.com"
    },
    {
      label: "Phone",
      value: "+84 911 389 543",
      href: "tel:+84911389543"
    },
    {
      label: "GitHub",
      value: "github.com/GnouhPTV",
      href: "https://github.com/GnouhPTV"
    },
    {
      label: "LinkedIn",
      value: "LinkedIn profile placeholder",
      href: "#"
    },
    {
      label: "Location",
      value: "Da Nang, Vietnam",
      href: "#contact"
    }
  ] satisfies ContactItem[]
};

export const education: EducationItem[] = [
  {
    school: "Greenwich University",
    major: "Information Technology",
    time: "09/2019 - 03/2024",
    meta: "GPA 3.38 / 4.0"
  }
];

export const certificates: CertificateItem[] = [
  {
    title: "Became a Fresher",
    issuer: "DevPlus Campus",
    time: "December 24th, 2022"
  },
  {
    title: "Duolingo English Test 95 / IELTS 5.5 equivalent",
    issuer: "Duolingo English Test",
    note: "Current English certificate used for CV/profile presentation.",
    href: `${publicBasePath}/Duolingo-English-Test.pdf`
  }
];

export const seoTopics = [
  "Labor protection equipment market",
  "SEO page structure for WordPress websites",
  "Product landing page planning",
  "Protective eyewear",
  "Safety glasses for dust, chemicals, and UV protection",
  "Gas masks and toxic gas protection",
  "KING PRO HighFlow Mask",
  "Chemical poisoning first aid article",
  "Gloves keyword research for ECO3D",
  "Respiratory protection keyword research",
  "Product content writing",
  "Backlink planning",
  "Homepage redesign and UX audit"
];
