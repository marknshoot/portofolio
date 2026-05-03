# Portfolio Jekyll Site — Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development for implementation.

**Goal:** A fully functional Jekyll portfolio on GitHub Pages, managed via Obsidian Markdown files.

**Architecture:** Jekyll static site with GitHub Pages deployment. Blog posts and case studies are Markdown files — no HTML authoring needed for content.

**Tech Stack:** Jekyll, GitHub Pages, Obsidian (content), Markdown, HTML/CSS/JS (templates).

---

## File Structure

```
portfolio/
├── index.md
├── blog/index.md
├── cases/index.md
├── _posts/
│   └── 2026-05-03-welcome.md
├── _cases/
│   └── 2026-05-03-customer-churn.md
├── _layouts/
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   └── case.html
├── _includes/
│   ├── head.html
│   ├── nav.html
│   ├── footer.html
│   ├── project-card.html
│   ├── post-card.html
│   └── case-card.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/DSC2.png
├── _config.yml
├── Gemfile
└── 404.md
```

---

## Tasks

### Task 1: Create _config.yml and Gemfile

**Files:**
- Create: `_config.yml`
- Create: `Gemfile`

```yaml
# _config.yml
title: Marcell Hermawan Kristianto
description: Data Science student and aspiring AI Engineer based in Jakarta.
url: "https://marcellhk.github.io"
baseurl: ""
permalink: /blog/:year/:month/:day/:title/
timezone: Asia/Jakarta
collections:
  posts:
    output: true
    permalink: /blog/:path/
  cases:
    output: true
    permalink: /cases/:path/
markdown: kramdown
kramdown:
  syntax_highlighter: rouge
```

```ruby
# Gemfile
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

---

### Task 2: Create base layouts and includes

**Files:**
- Create: `_layouts/default.html` — base HTML shell (head, nav, footer)
- Create: `_layouts/page.html` — standard page (extends default)
- Create: `_layouts/post.html` — blog post layout
- Create: `_layouts/case.html` — case study layout
- Create: `_includes/head.html` — meta, fonts, CSS link
- Create: `_includes/nav.html` — nav with dark mode toggle
- Create: `_includes/footer.html` — footer
- Create: `assets/css/style.css` — all styles (light + dark mode)
- Create: `assets/js/main.js` — dark mode, nav scroll, animations

---

### Task 3: Create homepage (index.md)

**Files:**
- Create: `index.md` — home page with all sections (hero, about, skills, projects, education, blog preview, cases preview, contact)
- Create: `assets/images/DSC2.png` (copy from ../DSC2.png)

**Sections:**
- Hero with name, tagline, CTAs
- About with profile photo and stats
- Skills 6-card grid
- Projects 4-card grid
- Education 2-card grid
- Blog preview (latest 2 posts)
- Case studies preview (latest 2 cases)
- Contact with mailto form

---

### Task 4: Create blog pages

**Files:**
- Create: `blog/index.md` — blog listing page
- Create: `_posts/2026-05-03-welcome.md` — sample blog post

---

### Task 5: Create case study pages

**Files:**
- Create: `cases/index.md` — case studies listing
- Create: `_cases/2026-05-03-customer-churn.md` — sample case study (based on portfolio project)

---

### Task 6: Create reusable card components

**Files:**
- Create: `_includes/post-card.html` — blog post card (title, date, excerpt, tags)
- Create: `_includes/case-card.html` — case study card (title, category, summary, tech tags)
- Create: `_includes/project-card.html` — homepage project card (gradient mockup, title, tags)

---

### Task 7: Create 404 page and favicon

**Files:**
- Create: `404.md` — 404 error page
- Create: `assets/images/favicon.svg` — simple "MHK" or code icon

---

### Task 8: Create GitHub repo setup instructions

**Files:**
- Create: `README.md` — setup instructions for Obsidian + GitHub Pages workflow
- Create: `.gitignore` — ignore _site/, .DS_Store, etc.

---

## Implementation Order

1. _config.yml + Gemfile
2. Base CSS (style.css) — all variables, dark mode, responsive, animations
3. Base layouts (default → page → post/case)
4. Nav + footer includes
5. Homepage (index.md with all sections)
6. Blog index + sample post
7. Cases index + sample case
8. Card includes (post-card, case-card, project-card)
9. JavaScript (dark mode, scroll nav, animations)
10. 404 page + favicon + README + gitignore
11. Copy DSC2.png to assets/images/

## Verification

After building, test:
- `bundle exec jekyll serve` — site runs locally
- `open http://localhost:4000` — all pages render
- Dark mode toggle works and persists
- Mobile responsive (resize browser)
- Nav sticky behavior works
- Blog and case study cards link correctly