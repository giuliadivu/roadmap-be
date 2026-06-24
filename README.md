# Backend Roadmap — Approfondimenti

Sito di learning che approfondisce, sezione per sezione, la
[roadmap backend di roadmap.sh](https://roadmap.sh/backend). Per ogni risorsa
gratuita i concetti vengono **spiegati esplicitamente**, non solo linkati.

## Stack

- **Vite + React + TypeScript** (SPA)
- **React Router** (rotte annidate)
- **Tailwind CSS v4** + `@tailwindcss/typography`
- **ESLint + Prettier**
- **Vitest** + Testing Library (ambiente `happy-dom`)

## Script

```bash
pnpm dev          # server di sviluppo
pnpm build        # type-check + build di produzione
pnpm preview      # anteprima della build
pnpm lint         # ESLint
pnpm format       # Prettier (scrive)
pnpm test         # Vitest (watch)
pnpm test:run     # Vitest (una volta)
```

> Nota: Vite 8 consiglia Node 20.19+ o 22.12+.

## Struttura

```
src/
  data/roadmap.ts          # fonte di verità unica: genera rotte, sidebar e home
  router.tsx               # rotte generate dalla config (slug → componente)
  components/
    layout/                # RootLayout, Header, Sidebar
    ContentPage.tsx        # template comune delle pagine
    ResourceList.tsx       # risorse con spiegazione esplicita
    Placeholder.tsx        # contenuto segnaposto dei "gusci"
  pages/
    Home.tsx               # indice delle sezioni
    NotFound.tsx
    sections/              # una cartella/file per sezione e sotto-argomento
```

## Sezioni implementate

- **Introduction** → `/introduction`
- **Frontend Basics** → `/frontend-basics` con `html`, `css`, `javascript`,
  `browsers`

## Aggiungere una sezione

1. Aggiungi una voce in `src/data/roadmap.ts` (sidebar + home si aggiornano da
   sole). Imposta `status: 'available'`.
2. Crea il componente pagina in `src/pages/sections/...`.
3. Registra lo slug in `sectionComponents` / `topicComponents` in
   `src/router.tsx`.
