# NorthWoods Sentinel

Personal publishing platform for essays, experiments, and systems thinking.

## Tech Stack

- **Framework**: Astro 7.x (remark pipeline via `unified()`)
- **Content**: Markdown with Content Collections (glob loaders, `src/content.config.ts`)
- **Styling**: Vanilla CSS (minimal, clean typography)
- **Hosting**: Cloudflare Pages (GitHub Actions deploy on push to main)

## Publishing Workflow

1. **Create Content**: Add markdown files to `src/content/{section}/`
2. **Test Locally**: `bun run dev` to preview
3. **Deploy**: a push to `main` builds and deploys to Cloudflare Pages (`.github/workflows/deploy.yml`)

## Deployment

`.github/workflows/deploy.yml` installs with `bun install --frozen-lockfile` (the only lockfile is `bun.lock`), builds, and deploys `dist` to the `northwoods-sentinel` Cloudflare Pages project.

## Quick Start

```bash
# Setup
bun install --frozen-lockfile

# Development
bun run dev          # Start dev server at localhost:4321

# Production
bun run build        # Build static site
bun run preview      # Preview production build
```

---

## Northwoods Sentinel Labs

Part of the [Northwoods Sentinel Labs](https://northwoodssentinel.com) ecosystem — open-source tools for human-centered AI.

[Blog](https://northwoodssentinel.com) · [Substack](https://substack.com/@chewvala) · [GitHub](https://github.com/NorthwoodsSentinel)
