# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Eric Irwin (ericirwin.io). Hugo static site using the [hugo-theme-nightfall](https://github.com/lordmathis/hugo-theme-nightfall) dark theme, deployed to GitHub Pages via GitHub Actions.

## Build & Development

```bash
# Local dev server (requires Dart Sass on PATH)
export PATH="$HOME/bin/dart-sass:$PATH"
hugo server -D

# Production build
hugo --minify

# Update theme module
hugo mod get -u
```

**Dart Sass is required.** The Nightfall theme uses SCSS. If `hugo server` fails with a TOCSS error, ensure `sass` is on your PATH. The native Dart Sass binary lives at `~/bin/dart-sass/`.

## Architecture

- **Hugo Modules** — theme is imported via Go modules (`go.mod`), not git submodules
- **Config** — `hugo.toml` (single file, no config directory)
- **Content** — `content/` with markdown files:
  - `_index.md` — homepage
  - `about.md`, `experience.md`, `featured.md` — standalone pages
  - `posts/*.md` — blog posts (sorted newest-first by `date` front matter)
- **Theme overrides** — `layouts/_partials/custom-head.html` (Font Awesome + custom CSS)
- **Static assets** — `static/images/` (headshot, experience logos)
- **Deploy** — `.github/workflows/hugo.yml` builds and deploys on push to `master`

## Key Conventions

- Nav order is controlled by `weight` in `hugo.toml` menu entries. **Weight 0 is treated as unset** — use 1-based weights. The theme renders items left-to-right in weight order.
- Theme partials must go in `layouts/_partials/` (with underscore), not `layouts/partials/`.
- Blog post front matter: `title`, `date` (YYYY-MM-DD), `description`, `tags` (array).
- Custom domain is `ericirwin.io` — `static/CNAME` must exist for GitHub Pages.
- The `public/` directory is gitignored (Hugo build output).
