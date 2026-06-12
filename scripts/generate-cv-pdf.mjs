import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outputPath = resolve(root, "public", "LE-THANH-PHUONG-CV-UPDATED.pdf");
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
  ["Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Framer Motion, Vite, Phaser 3"],
  ["Backend / System", "ASP.NET MVC, C#, SQL Server, PHP, MySQL, IIS, VPS hosting, DNS, SSL, Cloudflare"],
  ["WordPress / SEO", "WordPress, Flatsome, Elementor, WooCommerce, SEO content planning, product pages, landing pages"],
  ["Tools / Automation", "Node.js, Discord.js, MongoDB, Mongoose, Axios, REST API, Git, GitHub"]
];

const summary =
  "Full-stack web developer with hands-on experience in ASP.NET MVC, C#, SQL Server, WordPress, SEO-ready business websites, frontend interfaces, HTML5 playable ad prototypes, no-code builder MVPs, Discord bot/stat tracker projects, AI chatbot workflows, hosting, DNS, Cloudflare, IIS, VPS support, and website operations.";

const headerSummary =
  "Hello, I'm Phuong, a full-stack web developer with hands-on experience building ASP.NET MVC, C#, SQL Server, WordPress, SEO-ready business websites, frontend interfaces, HTML5 playable ad prototypes, no-code builder MVPs, Discord stat-tracker bots, and AI chatbot workflows. I work across HTML, CSS, JavaScript, database manipulation, object-oriented programming, hosting, DNS, Cloudflare, VPS servers, IIS Manager, and website operations, with the goal of becoming a reliable contributor and future technical leader over the next 3-5 years.";

const focusAreas = [
  "ASP.NET MVC, C#, SQL Server, and internal business systems",
  "WordPress websites, product pages, SEO landing pages, and hosting support",
  "No-code builder MVPs, editor UI, runtime preview, validation, and ZIP export workflows",
  "HTML5 game prototypes, Phaser 3 scenes, and playable ads mechanics",
  "AI chatbot, automation, Discord bot, and website support workflows"
];

const experiences = [
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

const projects = [
  {
    title: "Playable Ads Studio UI",
    body: "No-code UA playable builder with editor, preview, validation, and ZIP export."
  },
  {
    title: "UA Playable Games Lab",
    body: "HTML5 playable ad prototypes using Vite, TypeScript, Phaser 3, and JSZip."
  },
  {
    title: "Valorant Stats Discord Bot",
    body: "Discord bot for Valorant stat lookup, linked users, and API data fetching."
  },
  {
    title: "ECO3D Admin & SQL Server System",
    body: "ASP.NET MVC + SQL Server admin system with IIS and database workflows."
  },
  {
    title: "Business / WordPress Websites",
    body: "Product pages, landing pages, SEO content, WooCommerce, and hosting support."
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
  text(page, "FULL-STACK WEB DEVELOPER", 216, 763, {
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
  text(page, "Full-Stack Web Developer / WordPress Developer / Frontend System Builder", 228, 817, {
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
  const size = 8.4;
  const lineHeight = 10.3;
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
    flow.y = wrappedText(flow.page, `GitHub: ${item.link}`, flow.x, flow.y, flow.width, {
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

  flow = addSection(flow, pages, "Key Focus");
  focusAreas.forEach((item) => {
    flow = addBullet(flow, pages, item);
  });

  flow.y -= 5;
  flow = addSection(flow, pages, "Experience");
  experiences.forEach((item) => {
    flow = addExperience(flow, pages, item);
  });

  flow = addSection(flow, pages, "Featured Projects");
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
