This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

## Architect
- TailwindCss for CSS
- Radix-UI for style component: https://www.radix-ui.com/themes/docs/overview/getting-started
- Shacdn-UI for component UI: https://ui.shadcn.com/
- Supabase for authenticate: https://supabase.com/docs/guides/auth/auth-helpers/nextjs
- Nextjs14 using App router: https://nextjs.org/docs

## Setup

- Init project by CLI: `npx create-next-app` (typescript)

### project structure

- `api`: use `Route handler`
- `app`: App Router
- `components`:
  - ui: for import shadcn-ui
  - app components
- `lib`: tailwindcss util for merge utility class
- `utils`:
  - get-item: following `preload` pattern Nextjs for fetch slug item: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preloading-data
  - `supabase`: authenticate https://supabase.com/docs/guides/auth/auth-helpers/nextjs

- `env` file:
  - create `.env`

```dotenv
NEXT_PUBLIC_IMDB_URL=https://www.imdb.com
NEXT_PUBLIC_TMDB_IMAGE_DOMAIN_ORIGINAL=https://image.tmdb.org/t/p/original
NEXT_PUBLIC_TMDB_API_URL_VER_3=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN=<access_token>
NEXT_PUBLIC_SUPABASE_URL=<url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<key>
```


## Deploy on Vercel

Link: https://nextjs-movie-friends.vercel.app/
