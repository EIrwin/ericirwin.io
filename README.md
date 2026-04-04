# ericirwin.io

Personal website built with [Hugo](https://gohugo.io/) and the [Nightfall](https://github.com/lordmathis/hugo-theme-nightfall) theme. Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions.

## Develop

Start the local dev server (requires [Dart Sass](https://sass-lang.com/install/)):

```bash
hugo server -D
```

Site will be available at http://localhost:1313/.

## Build

```bash
hugo --minify
```

## Deploy

Pushes to `master` automatically build and deploy via the GitHub Actions workflow.
