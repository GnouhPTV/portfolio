export interface WebsiteItem {
  name: string;
  url: string;
  type: string;
  role: string;
  technologies: string[];
  work: string[];
}

export const websites: WebsiteItem[] = [
  {
    name: "ECO3D",
    url: "https://eco3d.vn/",
    type: "ASP.NET MVC Business / Product Website",
    role: "Full-Stack .NET MVC Developer / SQL Server & SEO Support",
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "IIS", "Cloudflare", "SEO"],
    work: [
      "Built and maintained the ECO3D website using ASP.NET MVC and C#",
      "Integrated SQL Server data for product and business workflows",
      "Created SEO-ready product pages and business content",
      "Managed IIS, VPS, DNS, Cloudflare, SSL, and performance issues"
    ]
  },
  {
    name: "Gang Tay Dien",
    url: "https://gangtaydien.com/",
    type: "WordPress Niche Ecommerce Website",
    role: "WordPress Developer / SEO Product Page Builder",
    technologies: ["WordPress", "Flatsome", "WooCommerce", "SEO", "Responsive UI"],
    work: [
      "Built WordPress ecommerce pages for electrical safety gloves",
      "Created SEO product pages and category content",
      "Planned sales-focused homepage and landing sections",
      "Optimized layout for mobile and customer conversion"
    ]
  },
  {
    name: "HIKARI ULM",
    url: "https://hikariulm.com/",
    type: "WordPress Japanese Restaurant / Brand Website",
    role: "WordPress Developer / Brand Website Builder",
    technologies: ["WordPress", "Responsive UI", "Hosting", "Content Layout", "SEO Page"],
    work: [
      "Built the WordPress website for brand presentation",
      "Implemented homepage layout and visual content sections",
      "Structured pages for restaurant information and search visibility",
      "Styled responsive pages for desktop and mobile"
    ]
  },
  {
    name: "Giay An Toan",
    url: "https://giayantoan.net/",
    type: "WordPress Safety Product Website",
    role: "WordPress Developer / SEO Content Builder",
    technologies: ["WordPress", "SEO", "Product Content", "Responsive UI"],
    work: [
      "Built and maintained WordPress product pages",
      "Created SEO content for safety footwear topics",
      "Improved content structure and internal page flow",
      "Supported ongoing website updates and UX cleanup"
    ]
  },
  {
    name: "Promask",
    url: "https://promask.vn/",
    type: "WordPress Respiratory Protection Website",
    role: "WordPress Developer / SEO Page Builder",
    technologies: ["WordPress", "WooCommerce", "SEO", "Product Content"],
    work: [
      "Built and updated WordPress product pages",
      "Planned SEO pages for masks and respiratory protection",
      "Created content structure for product education",
      "Managed page content and product information updates"
    ]
  },
  {
    name: "Clear Simulations",
    url: "https://clear-simulations.com/",
    type: "WordPress Business Website",
    role: "WordPress Developer / Website Support",
    technologies: ["WordPress", "Hosting", "DNS", "Website Maintenance"],
    work: [
      "Supported WordPress website maintenance",
      "Handled hosting checks and DNS support",
      "Troubleshot technical website issues",
      "Improved stability for business website operations"
    ]
  },
  {
    name: "GMG Gloves",
    url: "https://gmgGloves.com/",
    type: "WordPress Gloves Product Website",
    role: "WordPress Developer / SEO Product Page Builder",
    technologies: ["WordPress", "SEO", "Product Content", "Landing Page"],
    work: [
      "Built WordPress product and landing pages",
      "Prepared SEO content for gloves-related keywords",
      "Reviewed landing page structure for sales clarity",
      "Maintained page content and website updates"
    ]
  },
  {
    name: "KingPro Safety",
    url: "https://kingprosafety.com/",
    type: "WordPress Safety Equipment Website",
    role: "WordPress Developer / Performance & SEO Support",
    technologies: ["WordPress", "WooCommerce", "Cloudflare", "SEO", "Cache"],
    work: [
      "Built and improved WordPress product pages",
      "Troubleshot cache, image loading, and CDN issues",
      "Configured Cloudflare support for performance",
      "Created SEO page and article support for safety products"
    ]
  },
  {
    name: "Grippaz ECO3D",
    url: "https://grippaz.eco3d.vn/",
    type: "WordPress Product Landing Page",
    role: "WordPress Landing Page Developer / SEO Page Builder",
    technologies: ["WordPress", "Hostinger", "Landing Page Design", "SEO", "Sales Copy"],
    work: [
      "Built a WordPress landing page for a focused product campaign",
      "Created product introduction and benefits sections",
      "Structured CTA sections for customer conversion",
      "Prepared SEO-friendly content and sales copy"
    ]
  }
];
