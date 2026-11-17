# Kajanika Pulenthiraraj — Portfolio

Personal portfolio website for **Kajanika Pulenthiraraj** ([@kajanika19](https://github.com/kajanika19)), an IT undergraduate at the University of Moratuwa, Sri Lanka.

Built with **React + Vite** and plain modern CSS. There's no UI framework and no icon package to install: the icons are Lucide icons inlined in `src/components/Icon.jsx`.

---

## Project structure

```
kajanika-portfolio/
├── .github/workflows/deploy.yml   # Automatic GitHub Pages deployment
├── public/
│   ├── favicon.svg                # Browser tab icon ("kp" monogram)
│   └── robots.txt
├── src/
│   ├── data/
│   │   └── portfolio.js           # ⭐ ALL CONTENT: text, links, skills, projects
│   ├── components/
│   │   ├── Navbar.jsx / .css      # Floating glass nav + mobile menu
│   │   ├── Hero.jsx / .css        # Intro, CTAs, animated code + UI visual
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Contact.jsx / .css     # Email (with copy button), LinkedIn, GitHub
│   │   ├── Footer.jsx / .css
│   │   ├── SectionHeading.jsx / .css
│   │   └── Icon.jsx               # Lucide-based SVG icons
│   ├── hooks/
│   │   ├── useReveal.js           # Subtle fade-in on scroll
│   │   └── useActiveSection.js    # Highlights the current section in the nav
│   ├── styles/
│   │   └── global.css             # Design tokens (colours, fonts), buttons, glass
│   ├── App.jsx
│   └── main.jsx
├── index.html                     # Page title, SEO meta tags, fonts
├── package.json
└── vite.config.js
```

---

## Run it locally (VS Code + terminal)

**You need:** [Node.js](https://nodejs.org) version 20.19 or newer (the LTS version is fine). Check with `node -v`.

1. Unzip the project and open the `kajanika-portfolio` folder in VS Code (**File → Open Folder…**).
2. Open the terminal in VS Code: **Terminal → New Terminal** (or <kbd>Ctrl</kbd> + <kbd>`</kbd>).
3. Install the dependencies (only needed the first time):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the link shown in the terminal (usually <http://localhost:5173>). The page reloads automatically when you save a file.

To stop the server, click the terminal and press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

To test the production build locally:

```bash
npm run build     # creates the dist/ folder
npm run preview   # serves dist/ at http://localhost:4173
```

---

## Editing your content

Almost everything you'll want to change is in **`src/data/portfolio.js`**:

| What | Where in `portfolio.js` |
| --- | --- |
| **Your email** (placeholder right now) | `profile.email` |
| Hero intro text | `profile.heroIntro` |
| About me paragraphs and quick facts | `about` |
| Skills (add a short note to any skill with `note: '...'`) | `skillGroups` |
| Projects, descriptions, tags, GitHub buttons | `projects` |
| Study period (e.g. `2023 – Present`) | `education[0].period` |
| GitHub / LinkedIn links | `socials` |

Items marked `TODO` in that file are placeholders waiting for your details:

- **Email**: replace `your.email@example.com`.
- **Company Group Project**: replace the placeholder description when you can share more.
- **Personal Portfolio project link**: once this site has its own GitHub repo, set the link to that repo URL.

**Adding a project screenshot:** put the image in `public/projects/` (for example `public/projects/my-project.png`) and set `image: './projects/my-project.png'` on that project. The gradient artwork is replaced by your screenshot.

**Changing colours or fonts:** edit the variables at the top of `src/styles/global.css` (`--indigo`, `--cyan`, `--teal`, `--blue`, `--font-display`, …).

**Page title and search description:** edit the `<title>` and `<meta name="description">` in `index.html`.

---

## Deploy

### Option A: Vercel (easiest)

1. Push this project to a GitHub repository (see "Put the project on GitHub" below).
2. Go to <https://vercel.com>, sign in with GitHub, and click **Add New → Project**.
3. Import your repository. Vercel detects Vite automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live link like `https://kajanika-portfolio.vercel.app`, and every push to GitHub redeploys the site.

### Option B: GitHub Pages (automatic, using the included workflow)

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**, and under **Build and deployment → Source** choose **GitHub Actions**.
3. Push to the `main` branch (or open the **Actions** tab and run "Deploy to GitHub Pages" manually).
4. When the workflow finishes, your site is live at `https://kajanika19.github.io/<repository-name>/`.

> **Tip:** if you name the repository `kajanika19.github.io`, the site is served at `https://kajanika19.github.io/` with no extra path.

### Option C: GitHub Pages (manual, from your computer)

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then in **Settings → Pages**, set the source to **Deploy from a branch → `gh-pages` / root**.

`vite.config.js` uses `base: './'`, so the same build works on Vercel and on GitHub Pages with no changes.

### Put the project on GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kajanika19/<repository-name>.git
git push -u origin main
```

(Create the empty repository on GitHub first, without a README.)

---

## What's included

- Responsive layout for desktop, tablet and mobile (tested at 1440, 820, 390 and 320 px wide)
- Mobile menu that closes with <kbd>Esc</kbd> or after you pick a link
- Smooth scrolling, a load animation in the hero and a subtle fade-in on scroll; all motion is switched off for visitors who set "reduce motion" in their system settings
- Semantic HTML, a "skip to content" link, visible keyboard focus and labels for icon-only buttons
- SEO: page title, meta description, Open Graph tags, `robots.txt`
- All external links open in a new tab with `rel="noopener noreferrer"`
