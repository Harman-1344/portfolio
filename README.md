# Harmanjit Singh — Portfolio

**Live site:** [portfolio-kappa-peach-11.vercel.app](https://portfolio-kappa-peach-11.vercel.app)

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and react-three-fiber.

## Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3 with custom dark/neon theme
- **3D:** react-three-fiber (lazy-loaded, WebGL fallback)
- **Animations:** Framer Motion
- **Email:** Resend (serverless)
- **Deploy:** Vercel

## Local development
```bash
npm install
cp .env.local.example .env.local  # add RESEND_API_KEY
npm run dev
```
Site runs at http://localhost:3000

## Build
```bash
npm run build
npm run start
```

## Deployment
Push to GitHub → Vercel auto-deploys. Add `RESEND_API_KEY` to Vercel environment variables.

## Editing content
All copy lives in `lib/data.ts` — projects, skills, education, certifications, profile info. Edit there, no JSX changes needed.
