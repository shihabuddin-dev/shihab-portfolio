
# Shihab Uddin — Portfolio

Professional portfolio showcasing projects, skills, and product-ready web apps.

- Live site: https://shihab-dev.web.app/
- LinkedIn: https://www.linkedin.com/in/shihab-dev

## Overview

This repository contains the source code for a personal portfolio built with the Next.js App Router. The site demonstrates modern frontend practices, accessibility-aware UI, component-driven architecture, and deployment-ready configuration.

## Highlights

- Responsive, accessible UI using Tailwind CSS
- Hybrid client & server components via Next.js App Router
- Optimized images with `next/image` and centralized imports
- SVG icons with `lucide-react`
- Contact form and project showcase with source links

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- lucide-react
- framer-motion (optional)
- Firebase / Vercel for deployment

## Quick Start (local)

Using pnpm (recommended):

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to preview the site.

Build and run production locally:

```bash
pnpm build
pnpm start
```

## Deployment

You can deploy this app to Vercel or Firebase Hosting.

- Vercel: Connect the repository and use the default Next.js settings.
- Firebase: Build the app first and set `firebase.json` `public` field to your output directory before `firebase deploy`.

## Repository Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable UI components
- `utils/IMAGES.ts` — Central image imports for `next/image`
- `public/` — Static assets (robots, images)
- `package.json`, `tsconfig.json`, `next.config.mjs`

## Contributing

Contributions, improvements, and bug reports are welcome. For larger changes, open an issue first to discuss the approach. For small edits, submit a PR.

## Contact

Connect on LinkedIn: https://www.linkedin.com/in/shihab-dev

Visit the live site: https://shihab-dev.web.app/

If you're interested in working together, message me on LinkedIn or use the contact form on the site.

---

_Maintained by Shihab Uddin_
