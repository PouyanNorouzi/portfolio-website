# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (pinned in `packageManager`; `buildspec.yml` must stay in step with it). Every script that builds, runs the dev server or tests sets `TZ=UTC` on purpose: blog dates are parsed from frontmatter, and a non-UTC build machine would shift them by a day. Keep `TZ=UTC` if you invoke tools directly.

- `pnpm dev`: dev server on :3000
- `pnpm generate`: static build into `.output/public` (what CI deploys)
- `pnpm build` / `pnpm preview`: Nitro server build and preview
- `pnpm lint`: ESLint (`@nuxt/eslint` flat config)
- `pnpm typecheck`: `nuxt typecheck` (vue-tsc)
- `pnpm test`: Vitest, which has two projects: `unit` (`tests/unit/**`, node env) and `nuxt` (`tests/nuxt/**`, Nuxt runtime env)
- Single test: `pnpm test -- tests/unit/foo.test.ts`, or `pnpm test -- --project unit -t "name"`
- `pnpm test:e2e`: Playwright (`tests/e2e`, chromium and a Pixel 7 mobile project). It builds and serves the production output by default, so it is slow. Set `dev: true` in the `nuxt` option of `playwright.config.ts` to iterate faster.

`tests/unit`, `tests/nuxt` and `tests/e2e` are currently empty (the setup is new), and `passWithNoTests` is on.

## Architecture

Nuxt 4 app (`app/` is the source dir) using Nuxt UI 4, Tailwind 4 and Nuxt Content 3. There is no backend: the site is statically generated and deployed through AWS CodeBuild (`buildspec.yml`), with an optional PM2 cluster config (`ecosystem.config.cjs`) for serving `.output/server`.

**Theme.** The whole UI is styled as a spy "case file" (dossier, declassify, redacted, stamps, polygraph, transmissions). Components are grouped by that metaphor: `components/case-file/*`, `components/polygraph/*`, plus `app/` (shell: Atmosphere, Header, Footer). Components are auto-imported with path-prefixed names, e.g. `components/app/Header.vue` is `<AppHeader>`. Animated effects live in `composables/` (`useScramble`, `useTypewriter`, `useRevealQueue`, `useDeclassified`, `useInView`) and respect `utils/prefersReducedMotion.ts`.

**Content is data in `app/utils/constants/*.ts`.** Career, skills, projects, socials, resume and about copy are typed constants, with their types declared globally in `shared/types/*.d.ts` (no imports needed). To change site content, edit the constants rather than the components.

**Blog** is Nuxt Content: `content/blog/*.md`, schema in `content.config.ts` (zod). Every field except `pinned` is required, including `num`, `image` and `to` (e.g. `to: /blog/2`). Frontmatter `date` is a bare `2026, 7, 14` value, which is why the UTC handling above matters. Custom MDC prose components are in `app/components/content/` (`ProseP`, `ProseImg`, and so on). The `Ballet` font is declared in `nuxt.config.ts` because the font scanner can't see it used in markdown.

**Routing and transitions.** Pages are `index`, `about`, `projects` and `blog/[id]`. The global `middleware/transition.global.ts` picks a `slide-left` or `slide-right` page transition from the ordering in `utils/constants/pages.ts`, so a new top-level page must be added there (pages don't opt in). The animation is in `main.css` and differs per theme: a paper slide and tilt in light mode, a `clip-path` wipe in dark mode. A missing blog post renders `error.vue` without leaving the site.

**SEO.** Every page should call `usePageSeo({ title, description, image?, type? })`, which sets og/twitter tags and a canonical link from `runtimeConfig.public.siteUrl` (env `NUXT_PUBLIC_SITE_URL`, default `https://pouyannorouzi.com`). The default og image `public/og-image.png` is rendered from `scripts/og-image.html` at 1200x630.

## Notes

- `better-sqlite3` is needed by Nuxt Content's local database. Native build scripts are allowlisted in `pnpm-workspace.yaml` (`allowBuilds`), so add new native deps there.
