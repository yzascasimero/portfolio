# Yza Casimero — Portfolio

A clean, maintainable portfolio with dark/light mode, dual Dev + Data sections,
3D tilt cards, custom cursor, and scroll animations.

---

## 📁 File Structure

```
yza-portfolio/
├── index.html     ← HTML structure (don't touch)
├── style.css      ← All styling (don't touch)
├── script.js      ← All interactions (don't touch)
└── content.js     ← ✏️ YOUR FILE — edit everything here
```

**You only ever need to open `content.js`.**

---

## ✏️ How to Edit Your Content

Open `content.js` and update any field. Changes show up instantly when you refresh.

### Adding / Editing a Dev Project
```js
devProjects: [
  {
    size:  "large",           // "large" = wide card | "small" = narrow card
    color: "green",           // "green" | "blue" | "purple"
    emoji: "🚀",
    tag:   "Featured Project",
    title: "My Cool App",
    desc:  "What it does and why it matters.",
    tags:  ["Python", "React", "SQL"],
    link:  "https://github.com/yza/my-cool-app",
  },
  // add more objects here...
]
```

### Adding / Editing a Data Project
```js
dataProjects: [
  {
    type:  "Data Analysis",
    title: "Sales Dashboard",
    desc:  "Built an interactive dashboard to track KPIs.",
    tags:  ["Python", "pandas", "Excel"],
    link:  "https://github.com/yza/sales-dashboard",
  },
  // add more objects here...
]
```

### Adding / Editing a Skill
```js
skills: [
  { icon: "🐍", name: "Python", desc: "Pipelines, automation", pct: 85 },
  // pct = bar fill percentage (0–100)
]
```

---

## 🚀 How to Put It Live (Free)

### Option A — GitHub Pages (recommended)
1. Create a GitHub account at github.com
2. Create a new repo named: `your-username.github.io`
3. Upload all 4 files (`index.html`, `style.css`, `script.js`, `content.js`)
4. Go to repo **Settings → Pages → Source → main branch**
5. Your site is live at `your-username.github.io` in ~1 minute

**To update:** Edit `content.js` directly on GitHub → commit → live in seconds.

### Option B — Netlify Drop (30 seconds)
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the entire `yza-portfolio` folder onto the page
3. Get a live URL instantly (e.g. `yza-casimero.netlify.app`)
4. To update: drag the folder again

### Option C — Vercel
1. Push your folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import repo → Deploy
3. Auto-deploys every time you push to GitHub

---

## 🎨 Quick Style Tweaks (in style.css)

Change the lime green color in dark mode:
```css
[data-theme="dark"] {
  --lime: #CCFF00;   ← change this hex
}
```

Change the lime green in light mode:
```css
[data-theme="light"] {
  --lime: #7EAF00;   ← change this hex
}
```

---

## 💡 Tips

- Keep project descriptions to **2–3 sentences max** — recruiters skim
- Use `link: "https://github.com/..."` to point to your actual repos
- Put your resume PDF in the same folder and set `resumeUrl: "resume.pdf"`
- Set `available: false` once you land a job
