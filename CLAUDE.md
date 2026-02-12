# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for BangVPN (bangvpn.com). No build system, no framework, no package manager — files are served directly via GitHub Pages.

## Development

There are no build, lint, or test commands. The site is plain HTML/CSS/JS with no compilation step. To preview locally, serve the root directory with any static file server (e.g., `python3 -m http.server`).

## Deployment

Pushing to the `main` branch on GitHub auto-deploys to bangvpn.com via GitHub Pages. The `CNAME` file configures the custom domain.

## Architecture

- **Pages**: `index.html` (homepage), `about.html` (about), `privacy.html` (privacy policy) — each is a standalone HTML file with identical header/nav, footer, cookie banner, and script blocks duplicated across all three
- **Styling**: `css/styles.css` — single stylesheet using CSS custom properties for theming (primary: `#00B097`, secondary: `#B0DCD5`, font: Inter via Google Fonts). Responsive breakpoints at 768px and 480px.
- **Cookie Consent**: `cookies.js` — simple consent banner with two levels (`essential` or `all`), persisted in localStorage under key `bangvpn_cookie_consent`. The `loadAnalytics()` function is a placeholder — no analytics scripts are wired up yet.
- **Assets**: `images/` for logos (PNG and SVG); favicons and PWA icons in root; `site.webmanifest` for PWA config

## Key Patterns

- Navigation and footer HTML are duplicated across all pages (no templating). When updating shared elements (nav links, footer content, cookie banner markup), **all three HTML files must be edited**.
- Each page marks its own nav link with `class="active"` for the current-page underline indicator.
- Mobile navigation uses an inline `<script>` hamburger toggle at the bottom of each page (before `cookies.js`).
- Cookie banner shows for all visitors who haven't made a choice; consent preferences stored in localStorage.
