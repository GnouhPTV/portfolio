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
  role: "IT / Technology Professional | Full-Stack Web Developer",
  headline: "IT / Technology Professional",
  subheadline: "Full-Stack Development | Systems | Database | Deployment",
  location: "Da Nang, Vietnam",
  email: "phuonglt20102001@gmail.com",
  phone: "+84 911 389 543",
  github: "https://github.com/GnouhPTV",
  summary:
    "IT graduate with hands-on experience building and running business systems and production websites: a sales portal (Spring Boot, React, SQL Server), an internal admin system (ASP.NET MVC, C#, IIS), and 13 company websites (WordPress, PHP, JavaScript). I work across frontend, backend, databases, and deployment, fix issues in live systems, and pick up new tools quickly.",
  roles: [
    "Full-Stack Web Developer",
    "Software / Systems Developer",
    "IT / Technology",
    "Database / SQL Server",
    "IT / Technical Support",
    "Implementation / Deployment",
    "Frontend Developer",
    "WordPress Developer"
  ],
  actions: [
    { label: "View Projects", href: "#projects", kind: "primary" },
    {
      label: "Download CV",
      href: `${publicBasePath}/LE-THANH-PHUONG-CV-IT.pdf`,
      kind: "secondary",
      download: true
    },
    { label: "Contact Me", href: "#contact", kind: "secondary" },
    { label: "GitHub", href: "https://github.com/GnouhPTV", kind: "ghost" }
  ] satisfies ProfileAction[],
  about: [
    "I am an IT graduate with hands-on experience across frontend, backend, databases, deployment, hosting, and production website operations.",
    "At ECO3D, I built and maintained Salesoft Online, a business portal for internal staff and resellers using Java Spring Boot, React, and SQL Server. It includes REST APIs, role-based access, a two-stage approval workflow, and sales dashboards. I also developed an internal admin system using ASP.NET MVC, C#, and SQL Server, and have worked on 13 production company websites.",
    "On the operations side, I have deployed applications to VPS servers with IIS, managed DNS, Cloudflare, and SSL, handled SQL Server backups and restores, and diagnosed and fixed problems in live systems.",
    "Full-stack web development is my main strength, while my experience also covers systems, databases, deployment, and technical support. I am comfortable learning new tools and adapting to different business domains, and I am open to suitable IT, systems, implementation, technical support, database, or development opportunities."
  ],
  focusAreas: [
    "Business systems with Spring Boot, React, ASP.NET MVC, and SQL Server",
    "Servers and deployment: IIS, VPS, DNS, SSL, and Cloudflare",
    "Databases: SQL Server and MySQL, including backup and restore",
    "13 production company websites built on WordPress, PHP, and JavaScript",
    "Troubleshooting live systems and learning new tools independently"
  ],
  strengths: [
    "Full-stack development: React, Next.js, Spring Boot, ASP.NET MVC, C#, and PHP",
    "Databases and APIs: SQL Server, MySQL, MongoDB, REST APIs, and stored procedures",
    "Business systems: user login, role-based access, approval workflows, and dashboards",
    "Servers and deployment: IIS, VPS, Hostinger, DNS, SSL, Cloudflare, and database backup / restore",
    "Troubleshooting live systems and learning new tools independently",
    "Documenting for non-technical readers and coordinating tasks and interns"
  ],
  differentiators: [
    {
      title: "Real Production Experience",
      text: "I have built and maintained systems that real people use every day: a sales portal for staff and resellers, an internal admin system, and 13 live company websites, not only classroom or demo projects."
    },
    {
      title: "Full-Stack + Operations",
      text: "I can work across frontend, backend, database, deployment, and troubleshooting, so I can follow a problem from the screen a user sees down to the server it runs on."
    },
    {
      title: "Systems & Database",
      text: "Hands-on work with Spring Boot, React, ASP.NET MVC, C#, and SQL Server, including user login, role-based access, approval workflows, and reporting."
    },
    {
      title: "Deployment & Technical Support",
      text: "I have deployed applications on IIS and VPS servers and managed hosting, DNS, SSL, and Cloudflare to keep business websites online and working."
    },
    {
      title: "Business-Focused Technical Work",
      text: "I turn business requests into technical tasks, write documentation, and explain technical work in a way that non-technical colleagues can follow."
    },
    {
      title: "Continuous Self-Learning",
      text: "I taught myself Next.js, TypeScript, Phaser 3, and other tools by building my own projects, and I am comfortable picking up new technologies when the work needs them."
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
