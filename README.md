# Shreya Goyal — Personal Portfolio

A hand-crafted, artist-meets-engineer portfolio website. Warm beige light mode,
French-navy dark mode, hand-drawn SVG doodles, a bento project grid, and tasteful
micro-animations — built with **pure HTML + CSS + vanilla JavaScript**. No build
step, no frameworks, no external JS libraries.

**Live site:** <https://shreyagoyal9.github.io/shreyagoyal-portfolio/>

---

## ✦ Features

- Light (beige) / dark (navy) themes with a sun/moon doodle toggle that **persists in `localStorage`**
- Typewriter hero, hand-drawn name highlight, and mouse-parallax doodles
- Scroll-reveal animations via the **Intersection Observer API** (no libraries)
- Active-section highlighting in the navbar as you scroll
- Bento-grid projects section, doodle skill badges, shimmer certification cards
- Custom paintbrush cursor over art-related zones (desktop)
- Fully responsive: 320px → 768px → 1024px → 1440px
- Accessible: semantic landmarks, `aria-label`s, focus-visible styles, reduced-motion support

---

## ✦ Project structure

```
.
├── index.html              # all sections, inline SVG doodles
├── css/
│   ├── themes.css          # light/dark colour variables ONLY
│   ├── style.css           # layout, components, typography
│   ├── animations.css      # keyframes + scroll-reveal states
│   └── responsive.css      # all media queries
├── js/
│   ├── theme.js            # dark/light toggle + persistence
│   ├── typewriter.js       # hero role typewriter
│   ├── parallax.js         # hero doodle mouse parallax
│   ├── animations.js       # Intersection Observer reveals
│   └── main.js             # navbar, active link, menu, cursor
├── assets/
│   ├── images/profile.jpg          # hero profile photo
│   ├── doodles/*.svg               # standalone doodle assets
│   └── resume/shreya_goyal_resume.pdf  # downloadable resume
├── netlify.toml            # optional Netlify config (no build step)
└── README.md
```

---

## ✦ Run locally

Because it is fully static, just open `index.html` in a browser — or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## ✦ Deployment (GitHub Pages)

This site is deployed with **GitHub Pages** from the `main` branch:

1. Repo **Settings → Pages → Build and deployment**
2. **Source:** Deploy from a branch
3. **Branch:** `main`, folder `/ (root)` → **Save**

It goes live at <https://shreyagoyal9.github.io/shreyagoyal-portfolio/>.
Every push to `main` redeploys automatically within a minute or two. All asset
paths are relative, so the site works correctly from the repo subpath.

To update the live site after editing:

```bash
git add -A
git commit -m "Describe your change"
git push
```

---

## ✦ Alternative: deploy on Netlify

A `netlify.toml` is included for anyone who prefers Netlify (no build step needed).
Drag the project folder onto <https://app.netlify.com/drop>, or connect the repo via
**Add new site → Import an existing project** with the build command left empty and the
publish directory set to `.`.

---

designed & built by Shreya Goyal ✦ 2026
