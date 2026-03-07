# Personal Portfolio & Blog

A full-stack personal portfolio and blog platform built with SvelteKit and TypeScript.

## Features

- **Portfolio** — Hero, About, Projects, and Contact sections
- **Blog** — Markdown-powered posts with syntax highlighting
- **Admin Panel** — Protected route with Supabase authentication for creating and publishing posts
- **Rich Markdown Editor** — carta-md with slash commands, emoji picker, and shiki syntax highlighting
- **Dark Mode** — Persistent dark/light mode toggle
- **SSR** — Server-side rendered with SvelteKit

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) — Full-stack framework (Svelte 5 runes)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/) — Authentication + PostgreSQL database
- [carta-md](https://github.com/BearToCode/carta) — Markdown editor
- [PaperCSS](https://www.getpapercss.com/) — UI styling
- [Playwright](https://playwright.dev/) — End-to-end testing
- [Vite](https://vitejs.dev/)

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file with your Supabase credentials:

```
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run check     # Type checking
npm run test      # Run e2e tests
```
