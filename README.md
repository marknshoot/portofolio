# Marcell Hermawan Kristianto — Portfolio

A Data Science / AI Engineer portfolio built with Jekyll and hosted on GitHub Pages. Content is managed through Obsidian — just write Markdown, push to GitHub, and the site updates automatically.

## Quick Start

### 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it `portfolio` (or `marcellhk.github.io` if using a custom domain)
4. Keep it public, don't initialize with README
5. Click **Create Repository**

### 2. Push This Project to GitHub

Open terminal/command prompt in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repo name.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and **/ (root)**
5. Click **Save**

Wait 2-3 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### 4. Connect to Obsidian

1. Install [Obsidian](https://obsidian.md/) if you haven't
2. Open Obsidian → **Open folder as vault**
3. Select this project folder
4. Install the **Obsidian Git** community plugin (Settings → Community Plugins → search "Obsidian Git")
5. Enable the plugin and set up git sync (auto-sync every 30 minutes recommended)

---

## How to Post Content

### Writing a Blog Post

1. In Obsidian, go to the `_posts/` folder
2. Create a new Markdown file with the naming format:
   ```
   YYYY-MM-DD-your-post-title.md
   ```
   Example: `2026-05-15-my-first-post.md`
3. Add this front matter at the top:

```yaml
---
title: "Your Post Title"
date: 2026-05-15
categories: [Category1, Category2]
tags: [Tag1, Tag2, Tag3]
excerpt: "A brief one-sentence description for the card preview."
---
```

4. Write your content in Markdown below the front matter
5. Save the file
6. Sync via Obsidian Git (or manually push to GitHub)

Your post will appear on the blog listing page and at `/blog/YYYY/MM/DD/your-post-title/`

### Writing a Case Study

1. In Obsidian, go to the `_cases/` folder
2. Create a new Markdown file with the naming format:
   ```
   YYYY-MM-DD-your-case-title.md
   ```
   Example: `2026-05-15-plant-disease-detection.md`
3. Add this front matter:

```yaml
---
title: "Your Case Study Title"
date: 2026-05-15
category: Machine Learning
summary: "A brief summary of the project for the card preview."
tech_stack: [Python, TensorFlow, Flask]
tags: [Computer Vision, CNN, Flask]
---
```

4. Write your case study content in Markdown
5. Sync/push to GitHub

Your case study will appear on the cases listing page.

---

## Updating Profile Information

Edit these files to update content:

| What | File |
|------|------|
| Name, tagline, bio | `index.md` |
| Skills | `index.md` (Skills section) |
| Projects | `index.md` (Projects section) |
| Education | `index.md` (Education section) |
| Contact email/links | `index.md` (Contact section) |
| Social links | `blog/index.md`, `index.md` (social links section) |

---

## Local Development (Optional)

If you want to preview changes locally before pushing:

1. Install Ruby (macOS/Linux: `brew install ruby`)
2. Install Bundler: `gem install bundler`
3. In this folder, run: `bundle install`
4. Run: `bundle exec jekyll serve`
5. Open `http://localhost:4000`

Changes will auto-reload as you edit files.

---

## Custom Domain (Optional)

1. Create a file named `CNAME` in the root folder with your domain:
   ```
   yourdomain.com
   ```
2. In your domain DNS settings, add:
   - A record pointing to `185.199.108.153` (GitHub Pages IP)
   - OR CNAME record pointing to `YOUR-USERNAME.github.io`

---

## Tech Stack

- **Jekyll** — static site generator
- **GitHub Pages** — free hosting with auto-deploy
- **Obsidian** — Markdown editor for content
- **Google Fonts** — Playfair Display + Inter typography
- **CSS Variables** — dark/light mode with smooth transitions

---

Built with ❤️ by Marcell Hermawan Kristianto