# NorthWoods Sentinel

Personal publishing platform for essays, experiments, and systems thinking.

## Tech Stack

- **Framework**: Astro 5.x
- **Content**: Markdown/MDX with Content Collections
- **Styling**: Vanilla CSS (minimal, clean typography)
- **Hosting**: Netlify (recommended)

## Publishing Workflow

1. **Create Content**: Add markdown files to `src/content/{section}/`
2. **Test Locally**: `npm run dev` to preview
3. **Deploy**: `git push` triggers auto-deployment on Netlify

## Deployment to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure custom domain `northwoodssentinel.com`
4. Auto-deploy on every push to main

## Quick Start

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Production
npm run build        # Build static site
npm run preview      # Preview production build
```

---

Built with Astro • Deployed on Netlify • Publishing velocity optimized
