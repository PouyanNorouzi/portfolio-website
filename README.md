# Personal Portfolio Website

My portfolio and blog, built with Nuxt 4, Vue 3 and Tailwind CSS. The site is styled as a spy "case file": a dossier of my skills, projects and background, plus a blog.

## Features

- **Case-file theme**: dossier sections, redacted text, stamps and a polygraph, with animations that respect reduced-motion preferences
- **Blog**: Markdown posts powered by Nuxt Content
- **Responsive**: works from mobile to desktop
- **Dark/Light Mode**: dark by default
- **SEO**: per-page Open Graph and Twitter tags and canonical links

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **UI Library**: [Nuxt UI 4](https://ui.nuxt.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: [Nuxt Content 3](https://content.nuxt.com/)
- **Icons, images, fonts**: Nuxt Icon, Nuxt Image and Nuxt Fonts
- **Testing**: Vitest with `@nuxt/test-utils`, and Playwright

## Setup

Install dependencies with [pnpm](https://pnpm.io/):

```bash
pnpm install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

Other useful scripts:

```bash
pnpm lint        # ESLint
pnpm typecheck   # vue-tsc via nuxt typecheck
pnpm test        # Vitest (unit and Nuxt environment)
pnpm test:e2e    # Playwright (builds the production output first)
```

The scripts set `TZ=UTC` so blog dates keep their day on any machine. Keep it if you run the tools directly.

## Building for Production

Generate the static site into `.output/public`:

```bash
pnpm generate
```

Or build the Nitro server and preview it:

```bash
pnpm build
pnpm preview
```

## Customization

- Site content (career, skills, projects, socials, about copy) lives in `app/utils/constants/`
- Pages are in `app/pages/` (`index`, `about`, `projects`, `blog/`)
- Blog posts are Markdown files in `content/blog/`; the frontmatter schema is in `content.config.ts`
- Set `NUXT_PUBLIC_SITE_URL` to change the base URL used in canonical and Open Graph links

## Contact

Feel free to reach out with any questions or feedback!

- **Email**: [pouyannorouzii@gmail.com](mailto:pouyannorouzii@gmail.com)
- **LinkedIn**: [linkedin.com/in/pouyan-norouzi](https://www.linkedin.com/in/pouyan-norouzi/)
- **Portfolio**: [pouyannorouzi.com](https://pouyannorouzi.com)

I'm always open to interesting projects and collaboration opportunities.
