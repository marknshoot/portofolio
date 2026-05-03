# Portfolio Website — Design Specification

## Overview

A Data Science / AI Engineer student portfolio built with **Jekyll on GitHub Pages**, managed through **Obsidian** (Markdown authoring). The site showcases Marcell Hermawan Kristianto's projects, blog posts, and case studies — with a clean editorial aesthetic, dark mode, and smooth animations.

**Goal:** A professional portfolio that a university student can maintain without touching HTML — just write Markdown in Obsidian, push to GitHub, and the site rebuilds automatically.

---

## Site Structure

```
_repo/
├── index.md                    (Jekyll home page — auto-converts to index.html)
├── blog/
│   └── index.md               (Blog listing page)
├── cases/
│   └── index.md               (Case studies listing page)
├── _posts/                    (Blog posts — one .md file per post)
│   ├── 2026-05-01-example-post.md
│   └── ...
├── _cases/                    (Case studies — one .md file per case)
│   ├── 2026-05-01-example-case.md
│   └── ...
├── _layouts/
│   ├── default.html           (Base layout: nav, footer, head)
│   ├── page.html              (Standard page layout)
│   ├── post.html              (Single blog post layout)
│   └── case.html              (Single case study layout)
├── _includes/
│   ├── head.html              (Meta tags, fonts, CSS)
│   ├── nav.html               (Navigation with dark mode toggle)
│   ├── footer.html
│   └── project-card.html      (Reusable project card component)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── DSC2.png
├── _config.yml                (Jekyll configuration)
├── Gemfile                    (Ruby dependencies)
└── 404.md                     (404 error page)
```

---

## Pages

### Home Page (`index.md`)

Sections in order:

1. **Hero** — Name, tagline "Data Science · Aspiring AI Engineer", CTA buttons
2. **About** — Photo (DSC2.png), bio, 3 stats (years studying, ML projects, papers)
3. **Skills** — 6-card grid: ML, Data Analysis, Math & Stats, Data Engineering, Programming, LLMs & NLP
4. **Projects** — 4 project cards with gradient "mockup" backgrounds
5. **Education** — 2 cards: BINUS degree + Certifications
6. **From the Blog** — Latest 2 blog posts as preview cards
7. **Case Studies** — Latest 2 case studies as preview cards
8. **Contact** — Email link, social links (GitHub, LinkedIn, Kaggle)
9. **Footer** — "Designed & Built by Marcell Hermawan Kristianto"

### Blog Index (`blog/index.md`)

- Header: "Blog" title + short description
- Grid of all blog post cards (sorted by date, newest first)
- Each card: title, date, excerpt (first 150 chars), tags, "Read more" link
- Empty state if no posts yet

### Case Studies Index (`cases/index.md`)

- Header: "Case Studies" title + short description
- Grid of all case study cards
- Each card: title, date, project type tag, short summary, "Read case" link
- Empty state if no cases yet

### Individual Blog Post (`_layouts/post.html`)

- Hero: post title, date, reading time, tags
- Body: rendered Markdown content
- Sidebar (desktop): sticky table of contents
- Footer: "Back to Blog" link
- Related posts section (same tags)

### Individual Case Study (`_layouts/case.html`)

- Hero: case study title, date, project type, tech stack tags
- Body: rendered Markdown content (supports images, code blocks, callouts)
- Sections should mirror: Problem → Approach → Results → Key Learnings
- Footer: "Back to Case Studies" link

---

## Enhancements

### Dark Mode
- **Toggle button** in nav (sun/moon icon)
- **Persisted** to localStorage — remembers preference across sessions
- **Smooth transition** — CSS variable swap with 300ms transition
- **System preference** — defaults to OS light/dark preference on first visit

### Page Load Animation
- On first load, elements stagger-fade in with `fadeInUp` animation
- Stagger delay: 100ms between sections
- `prefers-reduced-motion` respected — animation disabled if user prefers

### Project "Mockup" Images
- Each project card has a CSS gradient background (not real images)
- Gradients are domain-specific:
  - ML/Churn: deep blue → purple gradient
  - NLP/Text: teal → cyan gradient
  - Data Viz/Dashboard: orange → amber gradient
  - Computer Vision/CNN: dark green → teal gradient
- Geometric SVG overlays add texture without real images

### Sticky Compact Nav
- On scroll past hero: nav background becomes solid, nav shrinks in height
- Transition: 200ms ease
- Nav links always visible; logo on left, dark mode toggle on right

### Contact Form
- **NOT** a backend form — uses `mailto:` protocol
- Clicking "Send Message" opens default mail client with:
  - To: marcell.hermawan@email.com (placeholder — user fills in real email)
  - Subject pre-filled: "Portfolio Inquiry"
- Social links open in new tab

---

## Typography & Colors

### Font Stack
- **Headings:** Playfair Display (serif) — Google Fonts
- **Body:** Inter (sans-serif) — Google Fonts
- **Code:** JetBrains Mono — for code blocks in posts

### Light Mode Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#faf9f7` | Page background |
| `--bg-secondary` | `#f0ede8` | Card backgrounds |
| `--bg-dark` | `#1a1a1a` | Footer, contact section |
| `--text-primary` | `#1a1a1a` | Body text |
| `--text-secondary` | `#6b6560` | Captions, secondary text |
| `--accent` | `#2563eb` | Links, highlights, accents |
| `--accent-hover` | `#1d4ed8` | Hover states |
| `--border` | `#e0dbd4` | Borders, dividers |

### Dark Mode Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#0f0f0f` | Page background |
| `--bg-secondary` | `#1a1a1a` | Card backgrounds |
| `--bg-dark` | `#000000` | Footer, contact section |
| `--text-primary` | `#f5f5f5` | Body text |
| `--text-secondary` | `#9ca3af` | Captions, secondary text |
| `--accent` | `#60a5fa` | Links, highlights |
| `--accent-hover` | `#93c5fd` | Hover states |
| `--border` | `#2d2d2d` | Borders, dividers |

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px – 1024px
- **Desktop:** > 1024px

---

## Jekyll Configuration

### _config.yml
```yaml
title: Marcell Hermawan Kristianto
description: Data Science student and aspiring AI Engineer
url: "https://marcellhk.com"  # or your GitHub Pages URL
baseurl: ""
theme: null  # custom CSS, no theme gem
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
  syntax_highlighter_opts:
    css_class: 'highlight'

# GitHub Pages build settings
safe: false
lsi: false
```

### Post Front Matter (example)
```yaml
---
title: "Sentiment Analysis on Indonesian Product Reviews"
date: 2026-05-01
categories: [NLP, Machine Learning]
tags: [Python, Transformers, IndoBERT]
excerpt: "Building a sentiment classifier for Indonesian e-commerce reviews using fine-tuned IndoBERT."
image: /assets/images/posts/sentiment-analysis.jpg  # optional
---
```

### Case Study Front Matter (example)
```yaml
---
title: "Customer Churn Prediction for Telecom"
date: 2026-05-01
category: Machine Learning
tags: [Python, XGBoost, MLflow]
summary: "End-to-end ML pipeline predicting customer churn with 89% accuracy."
tech_stack: [Python, XGBoost, Scikit-learn, MLflow, Docker]
status: published
---
```

---

## Deployment

### GitHub Pages Setup
1. Create a GitHub repo (e.g., `portfolio`)
2. Push the Jekyll site to the `main` branch
3. Enable GitHub Pages in repo Settings → Pages
4. Site auto-builds on every push to `main`

### Custom Domain (optional)
- Add `CNAME` file to repo root with domain name
- Configure DNS on your domain registrar

### Posting Workflow
```
1. Open Obsidian
2. Create/edit .md file in _posts/ or _cases/
3. Write content in Markdown
4. Push to GitHub (Obsidian Git plugin or manual git push)
5. GitHub Pages rebuilds (~1-2 min)
6. Post is live
```

---

## Self-Review Checklist

Before implementation, verify:
- [ ] Every section in spec maps to a file/component
- [ ] Dark mode covers ALL color variables (no hardcoded colors)
- [ ] Responsive breakpoints handle mobile nav properly
- [ ] Blog/case study Markdown files render correctly via Jekyll
- [ ] All enhancements work without JavaScript (CSS-only fallbacks)
- [ ] GitHub Pages build succeeds with provided _config.yml