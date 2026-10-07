export interface WebsiteItem {
  name: string;
  url: string;
  type: string;
  role: string;
  technologies: string[];
  work: string[];
}

// The ECO3D company and brand websites I develop and maintain (matches the CV)
export const eco3dSites: string[] = [
  "kinggoggles.com",
  "vuason.com",
  "scba.vn",
  "sudecons.vn",
  "thamcachdien.vn",
  "popa.vn",
  "hachico.com.vn",
  "gmggloves.com",
  "honeywell-safety.vn",
  "giayantoan.net",
  "gangtaydien.com",
  "kingprosafety.com",
  "promask.vn"
];

type SiteCard = Omit<WebsiteItem, "url">;

// Site-specific cards where the work is documented; the rest use the shared ECO3D card
const eco3dSiteCards: Record<string, SiteCard> = {
  "promask.vn": {
    name: "Promask",
    type: "WordPress Respiratory Protection Website",
    role: "WordPress Developer / Product Pages",
    technologies: ["WordPress", "WooCommerce", "Product Content"],
    work: [
      "Built and updated WordPress product pages",
      "Created content structure for product education",
      "Managed page content and product information updates"
    ]
  },
  "gmggloves.com": {
    name: "GMG Gloves",
    type: "WordPress Gloves Product Website",
    role: "WordPress Developer / Product & Landing Pages",
    technologies: ["WordPress", "Product Content", "Landing Page"],
    work: [
      "Built WordPress product and landing pages",
      "Reviewed landing page structure for sales clarity",
      "Maintained page content and website updates"
    ]
  },
  "giayantoan.net": {
    name: "Giay An Toan",
    type: "WordPress Safety Product Website",
    role: "WordPress Developer / Product Website Maintenance",
    technologies: ["WordPress", "Product Content", "Responsive UI"],
    work: [
      "Built and maintained WordPress product pages",
      "Improved content structure and internal page flow",
      "Supported ongoing website updates and UX cleanup"
    ]
  },
  "gangtaydien.com": {
    name: "Gang Tay Dien",
    type: "WordPress Niche Ecommerce Website",
    role: "WordPress Developer / Product Website Builder",
    technologies: ["WordPress", "Flatsome", "WooCommerce", "Responsive UI"],
    work: [
      "Built WordPress ecommerce pages for electrical safety gloves",
      "Created product pages and category structure",
      "Planned sales-focused homepage and landing sections",
      "Optimized layout for mobile users"
    ]
  },
  "kingprosafety.com": {
    name: "KingPro Safety",
    type: "WordPress Safety Equipment Website",
    role: "WordPress Developer / Performance & Cloudflare Support",
    technologies: ["WordPress", "WooCommerce", "Cloudflare", "Cache"],
    work: [
      "Built and improved WordPress product pages",
      "Troubleshot cache, image loading, and CDN issues",
      "Configured Cloudflare support for performance",
      "Maintained the site in production"
    ]
  }
};

export const eco3dWebsites: WebsiteItem[] = eco3dSites.map((site) => ({
  url: `https://${site}/`,
  ...(eco3dSiteCards[site] ?? {
    name: site,
    type: "ECO3D Company Website / WordPress",
    role: "WordPress Developer / Maintenance & Hosting",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    work: [
      "Developed custom WordPress features",
      "Managed hosting, DNS, Cloudflare, and SSL",
      "Handled security, maintenance, and production troubleshooting"
    ]
  })
}));

// ECO3D main site, a product landing page, and freelance / client websites
export const websites: WebsiteItem[] = [
  {
    name: "ECO3D",
    url: "https://eco3d.vn/",
    type: "ASP.NET MVC Business / Product Website",
    role: "Full-Stack Developer (ASP.NET MVC, SQL Server) / Deployment",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "IIS", "Cloudflare"],
    work: [
      "Built and maintained the ECO3D website using ASP.NET MVC and C#",
      "Integrated SQL Server data for product and business workflows",
      "Created product pages and business content backed by the database",
      "Managed IIS, VPS, DNS, Cloudflare, SSL, and performance issues"
    ]
  },
  {
    name: "Grippaz ECO3D",
    url: "https://grippaz.eco3d.vn/",
    type: "WordPress Product Landing Page",
    role: "WordPress Landing Page Developer",
    technologies: ["WordPress", "Hostinger", "Landing Page Design"],
    work: [
      "Built a WordPress landing page for a focused product campaign",
      "Created product introduction and benefits sections",
      "Structured CTA sections for customer conversion"
    ]
  },
  {
    name: "Clear Simulations",
    url: "https://clearsimulations.com/",
    type: "WordPress Business Website",
    role: "Website Support / Troubleshooting",
    technologies: ["WordPress", "Hosting", "DNS", "Website Maintenance"],
    work: [
      "Supported WordPress website maintenance",
      "Handled hosting checks and DNS support",
      "Troubleshot technical website issues",
      "Improved stability for business website operations"
    ]
  },
  {
    name: "HIKARI ULM",
    url: "https://hikariulm.com/",
    type: "WordPress Japanese Restaurant / Brand Website",
    role: "WordPress Developer / Brand Website Builder",
    technologies: ["WordPress", "Responsive UI", "Hosting", "Content Layout"],
    work: [
      "Built the WordPress website for brand presentation",
      "Implemented homepage layout and visual content sections",
      "Structured pages for restaurant information",
      "Styled responsive pages for desktop and mobile"
    ]
  }
];
