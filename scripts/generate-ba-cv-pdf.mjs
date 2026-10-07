import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outputPath = resolve(root, "public", "LE-THANH-PHUONG-CV-BA.pdf");
const profileImagePath = resolve(root, "public", "images", "cv-profile-cover.jpg");

const pageWidth = 595;
const pageHeight = 842;

const colors = {
  white: [1, 1, 1],
  ink: [0.06, 0.09, 0.16],
  muted: [0.31, 0.37, 0.46],
  faint: [0.91, 0.95, 0.96],
  line: [0.77, 0.84, 0.86],
  teal: [0.0, 0.48, 0.42],
  darkTeal: [0.01, 0.19, 0.18],
  accent: [0.06, 0.75, 0.62],
  amber: [0.95, 0.63, 0.13],
  sidebar: [0.94, 0.98, 0.97],
  chip: [0.89, 0.97, 0.95]
};

const contact = [
  ["Location", "Da Nang, Vietnam"],
  ["Email", "phuonglt20102001@gmail.com"],
  ["Phone", "+84 911 389 543"],
  ["GitHub", "https://github.com/GnouhPTV"]
];

const skillGroups = [
  ["Business Analysis", "Requirement analysis, stakeholder communication, scope clarification, business process, user flow, sitemap, user journey, acceptance criteria, UAT support"],
  ["Documentation & Handover", "Requirement notes, change requests, UAT notes, handover guidance, website operation notes"],
  ["Web Systems", "WordPress, Flatsome, Elementor, WooCommerce, SEO pages, ASP.NET MVC, SQL Server, website operations"],
  ["Technical Bridge", "HTML, CSS, JavaScript, C#, PHP, MySQL, REST API, IIS, VPS, DNS, SSL, Cloudflare, deployment, GitHub"]
];

const summary =
  "Business Analyst / Technical BA with a web systems background and hands-on experience translating customer requirements into website scope, user flows, product page structures, SEO-ready content, and maintainable web workflows. I have worked directly with clients on WordPress business websites and supported ASP.NET MVC, SQL Server, hosting, DNS, Cloudflare, VPS, IIS, and deployment operations.";

const headerSummary =
  "Business Analyst / Technical BA with a web systems background and hands-on experience translating customer requirements into website scope, user flows, product page structures, SEO-ready content, and maintainable web workflows. I have worked directly with clients on WordPress business websites and supported ASP.NET MVC, SQL Server, hosting, DNS, Cloudflare, VPS, IIS, and deployment operations, which helps me communicate clearly with business stakeholders and technical teams.";

const focusAreas = [
  "Clarify business goals, customer requests, business process, website scope, product groups, and content requirements",
  "Translate requirements into sitemaps, user flows, page structures, SEO-ready content, and delivery tasks",
  "Define acceptance points, support UAT checks, prepare handover notes, and track requested changes",
  "Bridge business, content, design, technical team, hosting, DNS, Cloudflare, IIS, VPS, and database topics"
];

const deliverables = [
  "Requirement Notes",
  "Sitemap",
  "User Flow",
  "Product Page Structure",
  "Acceptance Criteria",
  "UAT Checklist",
  "Handover Document"
];

const experiences = [
  {
    company: "Freelance / Outsource Website Projects",
    time: "2025 - Present",
    role: "Technical Business Analyst / WordPress Website Coordinator",
    description: [
      "Gathered and clarified external requirements, brand direction, page goals, content needs, and delivery scope for outsource and freelance website projects.",
      "Defined sitemap, user flow, page structure, content layout, responsive behavior, testing points, and handover notes before and during implementation.",
      "Managed end-to-end delivery of complete websites and frontend outputs for hikariulm.com, hachico.com.vn, popa.vn, and AutoRok 2023."
    ]
  },
  {
    company: "Direct Client WordPress Website Systems",
    time: "2024 - Present",
    role: "Website Business Analyst / WordPress System Builder",
    description: [
      "Worked directly with customers to clarify business goals, target users, product categories, page content, website structure, and conversion needs.",
      "Converted customer requests into sitemap, product page structure, SEO-ready content layout, UI direction, acceptance points, testing checks, and handover guidance.",
      "Built and maintained complete WordPress websites: giayantoan.net, kingprosafety.com, gangtaydien.com, gmggloves.com, and promask.vn."
    ]
  },
  {
    company: "ECO3D Marketing Websites / WordPress & SEO",
    time: "06/2024 - Present",
    role: "Technical BA Support / WordPress & SEO Coordinator",
    linkLabel: "Websites",
    link: "kinggoggles.com, vuason.com, scba.vn, sudecons.vn, thamcachdien.vn, popa.vn, hachico.com.vn, gmggloves.com, honeywell-safety.vn, giayantoan.net, gangtaydien.com, kingprosafety.com",
    description: [
      "Analyzed marketing and product requirements for safety equipment websites, SEO landing pages, product content, homepage improvements, and customer-facing pages.",
      "Coordinated marketing and technical tasks by turning website requests into content updates, page revisions, SEO actions, and maintenance work.",
      "Supported WordPress, WooCommerce, Flatsome, Elementor, Hostinger, DNS, Cloudflare CDN, PHP, HTML, CSS, JavaScript, and MySQL-based website operations."
    ]
  },
  {
    company: "Salesoft Online (ECO3D Portal)",
    time: "04/2026 - Present",
    role: "Business Analyst / Technical BA Support",
    description: [
      "Clarified business requirements directly from leadership and marketing for a reseller (CTV) account approval workflow, translating verbal requests into a phased technical implementation plan.",
      "Mapped a 2-stage approval process (Marketing contact/screening, final approval) into system roles, status flows, and acceptance criteria, flagging data-integrity and security risks before implementation.",
      "Analyzed a marketing growth strategy document and produced a feasibility breakdown mapping proposed initiatives to existing system capabilities and required technical work.",
      "Investigated legacy database structures shared with a third-party desktop system to assess reuse risk before proposing new data models.",
      "Prepared stakeholder-facing documentation, process diagrams, and feature summaries (with screenshots) for leadership and marketing review."
    ]
  },
  {
    company: "ECO3D Website / Internal System Developer",
    time: "06/2024 - 03/2025",
    role: "Web System Analyst / Technical BA Support",
    description: [
      "Mapped business data, website needs, and internal workflows into ASP.NET MVC screens, SQL Server structures, admin flows, and maintainable system features.",
      "Communicated technical constraints around database, hosting, deployment, security, and maintenance to support practical business decisions.",
      "Supported VPS, IIS Manager, application pools, SSL, DNS, Cloudflare, backups, restores, access control, and production troubleshooting."
    ]
  },
  {
    company: "Playable Ads Studio UI | Personal Project",
    time: "2026",
    role: "Product Workflow Analyst / Frontend Product Project",
    description: [
      "Designed a no-code builder MVP around user workflows: dashboard, template gallery, visual editor, asset manager, preview, validation, and ZIP export.",
      "Translated product ideas into screens, states, validation checklist behavior, export assets, project.json, manifest, and delivery documentation."
    ]
  },
  {
    company: "UA Playable Games Lab | Personal Project",
    time: "2026",
    role: "Interaction Flow Analyst / HTML5 Prototype Project",
    description: [
      "Built four HTML5 playable ad prototypes while analyzing player journey, interaction rules, CTA flow, replay flow, rewards, timers, win/lose states, and standalone export needs."
    ]
  },
  {
    company: "Valorant Stats Discord Bot",
    time: "2022 - 2023",
    role: "Requirement-to-Feature Data Flow Project",
    description: [
      "Converted gaming community needs into command flows for competitive, unrated, recent match, agent, weapon, and map statistics.",
      "Used Node.js, Discord.js, MongoDB, Mongoose, Axios, node-fetch, REST API data retrieval, and linked player-name storage."
    ]
  },
  {
    company: "Enterprise Management Project",
    time: "03/2023 - 05/2023",
    role: "Student Team Project / System Feature Planning",
    description: [
      "Worked in a 6-person team to translate user needs into screens, feature behavior, implementation tasks, employee management, announcements, and internal communication features."
    ]
  }
];

const projects = [
  {
    title: "Direct Client WordPress Websites",
    body: "giayantoan.net, kingprosafety.com, gangtaydien.com, gmggloves.com, promask.vn; requirements, sitemap, product page structure, SEO-ready pages, UAT checks, and handover."
  },
  {
    title: "Outsource / Freelance Websites",
    body: "hikariulm.com, hachico.com.vn, popa.vn, and AutoRok 2023; requirement clarification, responsive page structure, content presentation, testing, and delivery support."
  },
  {
    title: "Internal Business Systems",
    body: "ASP.NET MVC, C#, SQL Server, IIS, VPS, DNS, SSL, Cloudflare, database access, deployment, backup, restore, and production issue analysis."
  },
  {
    title: "Product Workflow Projects",
    body: "Personal projects: no-code playable ads builder and HTML5 prototype lab with user flow, dashboard, editor, preview, validation, export, CTA flow, and replay behavior."
  },
  {
    title: "Automation / Data Flow",
    body: "Valorant Stats Discord Bot with command flow analysis, linked users, REST API data fetching, MongoDB storage, and stat presentation."
  }
];

const education = [
  "Greenwich University | Information Technology | 09/2019 - 03/2024 | GPA 3.38 / 4.0",
  "Duolingo English Test 95 / IELTS 5.5 equivalent",
  "Became a Fresher - DevPlus Campus | December 24th, 2022"
];

function readJpegSize(buffer) {
  let offset = 2;
  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf
  ]);

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    offset += 2;

    if (marker === 0xda || marker === 0xd9) break;
    if (offset + 2 > buffer.length) break;

    const length = buffer.readUInt16BE(offset);
    if (startOfFrameMarkers.has(marker)) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5)
      };
    }

    offset += length;
  }

  return null;
}

function loadJpegImage(path) {
  if (!existsSync(path)) return null;

  const data = readFileSync(path);
  const size = readJpegSize(data);
  if (!size) return null;

  return {
    data,
    ...size
  };
}

const profileImage = loadJpegImage(profileImagePath);

function colorFill(color) {
  return `${color.map((value) => value.toFixed(3)).join(" ")} rg`;
}

function colorStroke(color) {
  return `${color.map((value) => value.toFixed(3)).join(" ")} RG`;
}

function normalizeText(text) {
  return text.replace(/[^\x20-\x7E]/g, " ").replace(/\s+/g, " ").trim();
}

function escapePdfText(text) {
  return normalizeText(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function rect(page, x, y, width, height, color) {
  page.push(`q ${colorFill(color)} ${x} ${y} ${width} ${height} re f Q`);
}

function line(page, x1, y1, x2, y2, color, width = 0.6) {
  page.push(`q ${colorStroke(color)} ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
}

function image(page, name, x, y, width, height) {
  page.push(`q ${width} 0 0 ${height} ${x} ${y} cm /${name} Do Q`);
}

function roundedRectPath(x, y, width, height, radius) {
  const c = radius * 0.55228475;
  const x2 = x + width;
  const y2 = y + height;

  return [
    `${(x + radius).toFixed(2)} ${y.toFixed(2)} m`,
    `${(x2 - radius).toFixed(2)} ${y.toFixed(2)} l`,
    `${(x2 - radius + c).toFixed(2)} ${y.toFixed(2)} ${x2.toFixed(2)} ${(y + radius - c).toFixed(2)} ${x2.toFixed(2)} ${(y + radius).toFixed(2)} c`,
    `${x2.toFixed(2)} ${(y2 - radius).toFixed(2)} l`,
    `${x2.toFixed(2)} ${(y2 - radius + c).toFixed(2)} ${(x2 - radius + c).toFixed(2)} ${y2.toFixed(2)} ${(x2 - radius).toFixed(2)} ${y2.toFixed(2)} c`,
    `${(x + radius).toFixed(2)} ${y2.toFixed(2)} l`,
    `${(x + radius - c).toFixed(2)} ${y2.toFixed(2)} ${x.toFixed(2)} ${(y2 - radius + c).toFixed(2)} ${x.toFixed(2)} ${(y2 - radius).toFixed(2)} c`,
    `${x.toFixed(2)} ${(y + radius).toFixed(2)} l`,
    `${x.toFixed(2)} ${(y + radius - c).toFixed(2)} ${(x + radius - c).toFixed(2)} ${y.toFixed(2)} ${(x + radius).toFixed(2)} ${y.toFixed(2)} c`,
    "h"
  ].join(" ");
}

function roundedRect(page, x, y, width, height, radius, color) {
  page.push(`q ${colorFill(color)} ${roundedRectPath(x, y, width, height, radius)} f Q`);
}

function roundedImage(page, name, x, y, width, height, radius) {
  page.push(`q ${roundedRectPath(x, y, width, height, radius)} W n ${width} 0 0 ${height} ${x} ${y} cm /${name} Do Q`);
}

function text(page, value, x, y, options = {}) {
  const {
    font = "F1",
    size = 9,
    color = colors.ink,
    charSpace = 0
  } = options;
  page.push(
    `BT /${font} ${size} Tf ${colorFill(color)} ${charSpace} Tc ${x.toFixed(2)} ${y.toFixed(2)} Td (${escapePdfText(value)}) Tj ET`
  );
}

function wrapText(value, width, size) {
  const words = normalizeText(value).split(/\s+/).filter(Boolean);
  const maxChars = Math.max(18, Math.floor(width / (size * 0.5)));
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}

function wrappedText(page, value, x, y, width, options = {}) {
  const {
    font = "F1",
    size = 9,
    color = colors.ink,
    lineHeight = 11,
    indent = 0
  } = options;
  const lines = wrapText(value, width - indent, size);

  lines.forEach((lineValue, index) => {
    text(page, lineValue, x + (index > 0 ? indent : 0), y, { font, size, color });
    y -= lineHeight;
  });

  return y;
}

function sectionHeading(page, title, x, y, width) {
  text(page, title.toUpperCase(), x, y, {
    font: "F2",
    size: 10.5,
    color: colors.teal,
    charSpace: 0.7
  });
  line(page, x, y - 5, x + width, y - 5, colors.line, 0.55);
}

function drawFirstPageChrome(page) {
  rect(page, 0, 642, pageWidth, 200, colors.darkTeal);
  rect(page, 0, 642, pageWidth, 5, colors.accent);
  rect(page, 36, 58, 168, 552, colors.sidebar);
  rect(page, 36, 58, 4, 552, colors.accent);
  roundedRect(page, 28, 670, 158, 136, 16, [0.02, 0.27, 0.25]);

  if (profileImage) {
    roundedImage(page, "Im1", 28, 670, 158, 136, 16);
  }

  text(page, "LE THANH PHUONG", 214, 789, {
    font: "F2",
    size: 26,
    color: colors.white
  });
  text(page, "BUSINESS ANALYST / TECHNICAL BA", 216, 763, {
    font: "F2",
    size: 10.5,
    color: [0.42, 0.9, 0.39],
    charSpace: 0.55
  });
  wrappedText(page, headerSummary, 216, 738, 332, {
    size: 8.7,
    lineHeight: 11.2,
    color: [0.9, 0.96, 0.95]
  });
}

function drawContinuationChrome(page) {
  rect(page, 0, 800, pageWidth, 42, colors.darkTeal);
  rect(page, 0, 800, pageWidth, 3, colors.accent);
  text(page, "LE THANH PHUONG (DANIEL)", 46, 817, {
    font: "F2",
    size: 11.5,
    color: colors.white
  });
  text(page, "Business Analyst / Technical BA / Web Systems Coordinator", 228, 817, {
    size: 8.2,
    color: [0.82, 0.92, 0.91]
  });
}

function sideSection(page, title, y) {
  text(page, title.toUpperCase(), 54, y, {
    font: "F2",
    size: 8.2,
    color: colors.teal,
    charSpace: 0.8
  });
  line(page, 54, y - 5, 184, y - 5, colors.line, 0.45);
  return y - 18;
}

function drawSidebar(page) {
  let y = 594;

  y = sideSection(page, "Contact", y);
  contact.forEach(([label, value]) => {
    text(page, label, 54, y, { font: "F2", size: 7.2, color: colors.muted });
    y = wrappedText(page, value, 54, y - 9, 124, {
      size: 7.8,
      lineHeight: 9,
      color: colors.ink
    });
    y -= 6;
  });

  y -= 2;
  y = sideSection(page, "Core Skills", y);
  skillGroups.forEach(([label, value]) => {
    text(page, label, 54, y, { font: "F2", size: 7.5, color: colors.ink });
    y = wrappedText(page, value, 54, y - 9, 126, {
      size: 7.2,
      lineHeight: 8.5,
      color: colors.muted
    });
    y -= 8;
  });

  y = sideSection(page, "Education", y);
  text(page, "Greenwich University", 54, y, { font: "F2", size: 7.8, color: colors.ink });
  y = wrappedText(page, "Information Technology | 09/2019 - 03/2024 | GPA 3.38 / 4.0", 54, y - 9, 126, {
    size: 7.3,
    lineHeight: 8.5,
    color: colors.muted
  });

  y -= 8;
  y = sideSection(page, "Certificates", y);
  education.slice(1).forEach((item) => {
    y = wrappedText(page, item, 54, y, 126, {
      size: 7.4,
      lineHeight: 8.8,
      color: colors.ink
    });
    y -= 7;
  });
}

function createFirstPage(pages) {
  const page = [];
  drawFirstPageChrome(page);
  drawSidebar(page);
  pages.push(page);
  return {
    page,
    x: 224,
    y: 610,
    width: 326
  };
}

function createContinuationPage(pages) {
  const page = [];
  drawContinuationChrome(page);
  pages.push(page);
  return {
    page,
    x: 46,
    y: 770,
    width: 503
  };
}

function ensureSpace(flow, pages, height) {
  if (flow.y - height < 58) {
    return createContinuationPage(pages);
  }
  return flow;
}

function addSection(flow, pages, title) {
  flow = ensureSpace(flow, pages, 34);
  sectionHeading(flow.page, title, flow.x, flow.y, flow.width);
  flow.y -= 22;
  return flow;
}

function addParagraph(flow, pages, value, options = {}) {
  const size = options.size ?? 8.8;
  const lineHeight = options.lineHeight ?? 11;
  const lines = wrapText(value, flow.width, size);
  flow = ensureSpace(flow, pages, lines.length * lineHeight + 8);
  flow.y = wrappedText(flow.page, value, flow.x, flow.y, flow.width, {
    size,
    lineHeight,
    color: options.color ?? colors.ink
  });
  flow.y -= options.after ?? 8;
  return flow;
}

function addBullet(flow, pages, value) {
  const size = 8.15;
  const lineHeight = 9.75;
  const lines = wrapText(value, flow.width - 15, size);
  flow = ensureSpace(flow, pages, lines.length * lineHeight + 5);
  rect(flow.page, flow.x, flow.y - 4.3, 3.2, 3.2, colors.accent);
  lines.forEach((lineValue, index) => {
    text(flow.page, lineValue, flow.x + 13, flow.y, {
      size,
      color: colors.ink
    });
    flow.y -= lineHeight;
    if (index === 0 && lines.length > 1) {
      line(flow.page, flow.x + 1.5, flow.y + 5, flow.x + 1.5, flow.y - (lines.length - 1) * 3.5, colors.line, 0.4);
    }
  });
  flow.y -= 3;
  return flow;
}

function addExperience(flow, pages, item) {
  flow = ensureSpace(flow, pages, 58);
  const titleWidth = flow.width - 112;
  const titleLines = wrapText(item.company, titleWidth, 9.8);
  titleLines.forEach((lineValue, index) => {
    text(flow.page, lineValue, flow.x, flow.y, {
      font: "F2",
      size: 9.8,
      color: colors.ink
    });
    if (index === 0) {
      text(flow.page, item.time, flow.x + flow.width - 92, flow.y, {
        font: "F2",
        size: 8,
        color: colors.teal
      });
    }
    flow.y -= 11.2;
  });
  flow.y -= 1.3;
  flow.y = wrappedText(flow.page, item.role, flow.x, flow.y, flow.width, {
    font: "F2",
    size: 7.8,
    lineHeight: 9.5,
    color: colors.muted
  });
  if (item.link) {
    flow.y = wrappedText(flow.page, `${item.linkLabel ?? "Link"}: ${item.link}`, flow.x, flow.y, flow.width, {
      size: 7.1,
      lineHeight: 8.3,
      color: colors.teal
    });
  }
  flow.y -= 2;
  item.description.forEach((description) => {
    flow = addBullet(flow, pages, description);
  });
  flow.y -= 4;
  return flow;
}

function addProject(flow, pages, item) {
  const size = 7.8;
  const lineHeight = 9.4;
  const value = `${item.title}: ${item.body}`;
  const lines = wrapText(value, flow.width - 15, size);
  flow = ensureSpace(flow, pages, lines.length * lineHeight + 8);
  rect(flow.page, flow.x, flow.y - 4.2, 3.2, 3.2, colors.accent);
  lines.forEach((lineValue) => {
    text(flow.page, lineValue, flow.x + 13, flow.y, {
      size,
      color: colors.ink
    });
    flow.y -= lineHeight;
  });
  flow.y -= 3;
  return flow;
}

function buildPages() {
  const pages = [];
  let flow = createFirstPage(pages);

  flow = addSection(flow, pages, "Business Analyst Focus");
  focusAreas.forEach((item) => {
    flow = addBullet(flow, pages, item);
  });

  flow.y -= 3;
  flow = addSection(flow, pages, "BA Deliverables");
  flow = addParagraph(flow, pages, deliverables.join(" | "), {
    size: 8.3,
    lineHeight: 10,
    after: 5
  });

  flow.y -= 3;
  flow = addSection(flow, pages, "Experience");
  experiences.forEach((item) => {
    flow = addExperience(flow, pages, item);
  });

  flow = addSection(flow, pages, "Website & BA Portfolio");
  projects.forEach((item) => {
    flow = addProject(flow, pages, item);
  });

  pages.forEach((page, index) => {
    const pageNumber = `${index + 1} / ${pages.length}`;
    line(page, 46, 38, 549, 38, colors.line, 0.45);
    text(page, "LE THANH PHUONG (DANIEL)", 46, 24, {
      size: 7.2,
      color: colors.muted
    });
    text(page, `Page ${pageNumber}`, 502, 24, {
      size: 7.2,
      color: colors.muted
    });
  });

  return pages;
}

function contentStream(page) {
  return page.join("\n");
}

function makeImageObject(imageData) {
  return Buffer.concat([
    Buffer.from(
      `<< /Type /XObject /Subtype /Image /Width ${imageData.width} /Height ${imageData.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageData.data.length} >>\nstream\n`,
      "ascii"
    ),
    imageData.data,
    Buffer.from("\nendstream", "ascii")
  ]);
}

function objectToBuffer(object) {
  return Buffer.isBuffer(object) ? object : Buffer.from(object, "ascii");
}

function makePdf() {
  const pages = buildPages();
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"
  ];

  let profileImageObjectId = null;
  if (profileImage) {
    profileImageObjectId = objects.length + 1;
    objects.push(makeImageObject(profileImage));
  }

  const pageIds = [];

  pages.forEach((page, index) => {
    const pageId = objects.length + 1;
    const contentId = objects.length + 2;
    const stream = contentStream(page, index + 1, pages.length);
    const xObjectResources = profileImageObjectId ? `/XObject << /Im1 ${profileImageObjectId} 0 R >>` : "";
    pageIds.push(pageId);

    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> ${xObjectResources} >> /Contents ${contentId} 0 R >>`);
    objects.push(`<< /Length ${Buffer.byteLength(stream, "ascii")} >>\nstream\n${stream}\nendstream`);
  });

  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  const chunks = [Buffer.from("%PDF-1.4\n", "ascii")];
  const offsets = [0];
  let cursor = chunks[0].length;

  objects.forEach((object, index) => {
    const id = index + 1;
    const header = Buffer.from(`${id} 0 obj\n`, "ascii");
    const body = objectToBuffer(object);
    const footer = Buffer.from("\nendobj\n", "ascii");

    offsets[id] = cursor;
    chunks.push(header, body, footer);
    cursor += header.length + body.length + footer.length;
  });

  const xrefOffset = cursor;
  let xref = `xref\n0 ${objects.length + 1}\n`;
  xref += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i += 1) {
    xref += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  chunks.push(Buffer.from(xref, "ascii"));

  return Buffer.concat(chunks);
}

writeFileSync(outputPath, makePdf());
console.log(`Updated ${outputPath}`);
