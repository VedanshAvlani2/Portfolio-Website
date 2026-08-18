# Vedansh Avlani — Portfolio

An interactive 3D portfolio built with Next.js, showcasing my work across machine
learning, analytics, and full-stack development.

**Live:** https://portfolio-website-two-pied-86.vercel.app

## Features

- **Interactive 3D skills keyboard** — a Spline-built keyboard where each keycap is a
  tool I work with; hover to reveal what I use it for.
- **Live presence** — Socket.IO powers real-time visitor cursors and an ambient chat,
  so you can see who else is browsing.
- **Motion-first UI** — GSAP and Framer Motion drive scroll, hover, and reveal
  animations; Lenis handles smooth scrolling.
- **Project deep-dives** — each project has its own page with a screenshot carousel,
  feature breakdown, and the full tech stack.
- **Fully responsive** and dark/light themed.

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, shadcn/ui, Aceternity UI, Sass |
| 3D & Motion | Spline, Three.js, GSAP, Framer Motion, Lenis |
| Realtime | Socket.IO (client + standalone server) |
| Email | Resend, Zod |
| Hosting | Vercel |

## Getting Started

Requires Node.js 18+.

```bash
git clone https://github.com/VedanshAvlani2/Portfolio-Website.git
cd Portfolio-Website
npm install
cp .env.example .env.local   # then fill in your keys
```

Run the Next.js app and the Socket.IO server together:

```bash
npm run dev:all
```

Or separately:

```bash
npm run dev      # Next.js on http://localhost:3000
npm run socket   # Socket.IO on http://localhost:3001
```

Open http://localhost:3000.

## Environment Variables

See `.env.example`. Both are required for full functionality — the site still renders
without them, but the contact form and live presence features will be inactive.

## Project Structure

```
src/
├── app/          # App Router pages (home, about, projects, contact, blog, api)
├── components/   # UI, sections, header/footer, realtime, preloader
├── data/
│   ├── config.ts     # site metadata, SEO, social links
│   ├── constants.ts  # skills shown on the 3D keyboard
│   └── projects.tsx  # every project entry lives here
└── contexts/     # Socket.IO context
public/assets/
└── projects-screenshots/  # one folder per project
```

To add a project: drop screenshots into `public/assets/projects-screenshots/<Name>/`
and add an entry to `src/data/projects.tsx`.

## Deployment

Deployed on Vercel. The Socket.IO server (`server.js`) runs separately — Vercel's
serverless functions can't hold persistent connections, so host it somewhere that
supports long-lived processes (Railway, Render, Fly.io) and point `NEXT_PUBLIC_WS_URL`
at it. Remember to add your production domain to the CORS allowlist in `server.js`.

## Credits

Built on the excellent open-source portfolio template by
[Naresh Khatri](https://github.com/Naresh-Khatri/Portfolio), heavily customized.

## License

[MIT](LICENSE)
