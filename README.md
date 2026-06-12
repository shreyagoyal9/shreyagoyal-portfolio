# Shreya Goyal — Personal Portfolio

A hand-crafted, artist-meets-engineer portfolio website. Warm beige light mode,
French-navy dark mode, hand-drawn SVG doodles, a bento project grid, and tasteful
micro-animations — built with **pure HTML + CSS + vanilla JavaScript**. No build
step, no frameworks, no external JS libraries.

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
│   ├── images/profile.jpg          # PLACEHOLDER — swap with a real photo
│   ├── doodles/*.svg               # standalone doodle assets
│   └── resume/shreya_goyal_resume.pdf  # PLACEHOLDER — swap with real resume
├── netlify.toml            # Netlify config (no build step)
└── README.md
```

---

## ✦ Things to replace (placeholders)

1. **Profile photo** → replace `assets/images/profile.jpg` (square image works best). See the comment in `index.html` near the hero.
2. **Resume** → replace `assets/resume/shreya_goyal_resume.pdf` with your real PDF.
3. **YouTube link** → update the handle in the Contact section of `index.html` if your channel URL differs from `youtube.com/@shreyagoyal`.

---

## ✦ Run locally

Because it is fully static, just open `index.html` in a browser — or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## ✦ Deploy on Netlify (recommended)

### Option A — Drag & drop (fastest, no Git needed)
1. Go to <https://app.netlify.com/drop>.
2. Drag this **entire project folder** onto the page.
3. Netlify uploads it and gives you a live URL in seconds. Done.

### Option B — Connect a Git repo (auto-deploys on push)
1. Push this folder to a GitHub/GitLab repo.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Build settings: leave **Build command empty**, set **Publish directory** to `.`
   (these are already declared in `netlify.toml`).
4. Click **Deploy**. Every push to the main branch redeploys automatically.

To use a custom domain, go to **Site settings → Domain management** in Netlify.

---

## ✦ Deploy on GitHub Pages (alternative)

Since the site is static, GitHub Pages works too:
1. Push this folder to a repo named e.g. `portfolio`.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then **Save**.
4. Your site appears at `https://<username>.github.io/<repo>/` within a minute.

> Note: on GitHub Pages the site is served from a subpath. All links here are
> relative, so they work without changes.

---

designed & built by Shreya Goyal ✦ 2026
