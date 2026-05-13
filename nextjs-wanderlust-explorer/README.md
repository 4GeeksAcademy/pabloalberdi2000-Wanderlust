## Wanderlust Explorer

Wanderlust Explorer is a travel-tech MVP built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router with src layout)
- TypeScript (strict mode)
- Tailwind CSS v4
- Native React state (`useState`, context, custom hooks)

## Features

- Client-side navigation across Home, Experiences, Experience Detail, Favorites, and Profile.
- Search and stacked filtering by title, category, and destination.
- URL-synced filters with query params for shareable views.
- Shared favorites state with local persistence.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000](http://localhost:3000) after starting the dev server.

## Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Create production build.
- `npm run start`: Run production server.
- `npm run lint`: Run ESLint.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI and state components.
- `src/hooks`: Custom hooks for filtering and URL sync.
- `src/data`: Mock dataset for experiences.
- `src/types`: TypeScript interfaces.

## Design References

- Visual direction: Editorial travel cards + clean SaaS dashboard hierarchy.
- Color system: Teal/Cyan accents over neutral slate surfaces.
- Responsive principles: Mobile-first filter controls, adaptive grid cards, and readable spacing from 320px to desktop.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
