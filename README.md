# Le Thanh Phuong Portfolio

Personal portfolio website for **Le Thanh Phuong (Daniel)**, a full-stack web developer focused on ASP.NET MVC, SQL Server, WordPress, SEO-ready business websites, frontend systems, HTML5 playable ad prototypes, no-code builder MVPs, Discord bot/stat tracker work, AI chatbot workflows, hosting, DNS, Cloudflare, IIS, and VPS support.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Highlights

- Interactive hero with dark technical visual style and subtle network particle motion.
- Compact right-side quick navigation for all portfolio sections.
- Data-driven sections for About, Why Me, Skills, Experience, Projects, Websites, AI Tools, SEO, Education, Contact, and Footer.
- Featured project views for Playable Ads Studio UI and UA Playable Games Lab.
- Downloadable CV PDF and Duolingo English Test certificate.
- Static export ready for GitHub Pages.

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run typecheck
npm run build
```

This project uses `output: "export"` in `next.config.ts`, so `npm run build` generates a static `out/` folder. The `out/` folder is intentionally ignored in Git.

For GitHub Pages deployment, use `npm run build:pages` so local-only files are removed from `out/` after export.

## GitHub Pages Build

For the repository `GnouhPTV/portfolio`, GitHub Pages will usually be served from:

```text
https://gnouhptv.github.io/portfolio/
```

Build with the repository base path:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm.cmd run build:pages
```

The static site will be generated in:

```text
out/
```

## What To Commit

Commit source code, config, package files, and required public assets:

- `src/`
- `public/LE-THANH-PHUONG-CV-UPDATED.pdf`
- `public/Duolingo-English-Test.pdf`
- `public/images/cv-profile-cover.jpg`
- `public/images/developer-workstation.jpg`
- `scripts/generate-cv-pdf.mjs`
- `scripts/clean-pages-output.mjs`
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `.gitignore`
- `README.md`

Do not commit generated or local-only files:

- `.next/`
- `node_modules/`
- `out/`
- `dist/`
- `*.tsbuildinfo`
- `.env*`
- `public/LE-THANH-PHUONG-CV-UPDATED.html`
- `public/images/cv-profile-header.jpg`

## Where To Edit Content

- Profile, hero copy, contact info, education, certificates, strengths, and SEO topics: `src/data/profile.ts`
- Skills: `src/data/skills.ts`
- Experience timeline: `src/data/experience.ts`
- Projects and categories: `src/data/projects.ts`
- Website project grid: `src/data/websites.ts`
- Hero and background interaction: `src/components/Hero.tsx`
- Right-side navigation and section shell: `src/components/PortfolioShell.tsx`
- CV PDF generator: `scripts/generate-cv-pdf.mjs`

## CV

The portfolio download button points to:

```text
public/LE-THANH-PHUONG-CV-UPDATED.pdf
```

To regenerate the PDF locally:

```bash
node scripts/generate-cv-pdf.mjs
```

## Upload To GitHub

This folder is not initialized as a Git repository yet. Use these commands when ready:

```bash
git init
git branch -M main
git remote add origin https://github.com/GnouhPTV/portfolio.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

To deploy the generated `out/` folder to a `gh-pages` branch without committing `out/` to `main`, build first and then use:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
npm.cmd run build:pages
npx gh-pages -d out
```

Then set GitHub Pages source to the `gh-pages` branch in repository settings.

## Notes

- No backend or database is included.
- The contact form is currently frontend UI only.
- No GitHub workflow is included.
