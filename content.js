
const YZA = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  name:       "Yza Casimero",
  role:       "Data Analyst & Software Developer",
  location:   "Marinduque, Philippines",
  available:  true,           // shows the green "Available now" dot
  email:      "yzasoliscasimero@gmail.com",
  linkedin:   "https://www.linkedin.com/in/yzacasimero/",
  github:     "https://github.com/yzascasimero",
  resumeUrl:  "https://drive.google.com/file/d/1cXHl9471GbcwkufUo7dUtziszu3TdN23/view?usp=sharing",

  // ── HERO LINES ───────────────────────────────────────────
  heroLines: [
    "Data mind.",
    "Dev roots.",       // ← this line gets the lime underline
    "Ready now.",       // ← this line is italic/secondary
  ],

  // ── HERO TAGLINE ──────────────────────────────────────────
  heroTagline: "Fresh graduate with strong skills in Python, SQL, and data analysis — and a software background that makes me think differently.",

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    initials:  "YC",
    badge:     "Class of '26",
    photo:  "[profile.jpg]",  
    title:     ["Builder.", "Analyst.", "Curious mind."],  // 3 lines, middle gets lime color
    paragraphs: [
      "Fresh CS graduate with strong chops in <strong>software development</strong> and a growing obsession with <strong>data</strong>. I'm the person who'll clean your messy dataset at 2am and actually enjoy it.",
      "My LinkedIn attracts data roles on its own — which tells me something about where I naturally land.",
    ],
    devCard: {
      icon:  "⌨️",
      title: "Dev Track",
      body:  "Prioritizing utility and system performance in every build.",
    },
    dataCard: {
      icon:  "📊",
      title: "Data Track",
      body:  "Technical data analysis and systems management via Python, SQL, and Pandas.",
    },
  },

  // ── SKILLS ────────────────────────────────────────────────
  // pct: fill level for the bar (0–100)
  skills: [
    { icon: "🐍", name: "Python",       desc: "Pipelines, automation, analysis, scripting",  pct: 85 },
    { icon: "🗄️", name: "SQL",          desc: "Complex queries, joins, schema design",        pct: 80 },
    { icon: "🐼", name: "pandas",       desc: "Wrangling, cleaning, exploratory analysis",    pct: 82 },
    { icon: "📊", name: "Excel",        desc: "Pivot tables, formulas, dashboards",           pct: 90 },
    { icon: "💻", name: "Software Dev", desc: "OOP, algorithms, clean code",                  pct: 72 },
    { icon: "🔬", name: "Research",     desc: "Analysis, documentation, structured thinking", pct: 78 },
  ],

  // ── DEV PROJECTS (Web / App) ──────────────────────────────
  // size: "large" (takes 4 cols) | "small" (takes 2 cols)
  // color: "green" | "blue" | "purple"
  devProjects: [
    {
      size:  "large",
      color: "green",
      emoji: "🚀",
      tag:   "Featured Project",
      title: "Your Best App / Website",
      desc:  "What did you build? Who was it for? What problem did it solve? One punchy paragraph that proves you can ship.",
      tags:  ["Python", "JavaScript", "SQL"],
      link:  "#",
    },
    {
      size:  "small",
      color: "blue",
      emoji: "🛠",
      tag:   "Project 02",
      title: "Second Dev Project",
      desc:  "Short and specific — what makes it interesting?",
      tags:  ["Python", "SQL"],
      link:  "#",
    },
    {
      size:  "small",
      color: "purple",
      emoji: "⚙️",
      tag:   "Project 03",
      title: "Third Dev Project",
      desc:  "A tool, a system, a side project — whatever you built for fun.",
      tags:  ["OOP", "Algorithms"],
      link:  "#",
    },
  ],

  // ── DATA PROJECTS (Analytics) ─────────────────────────────
  dataProjects: [
    {
      type:  "Data Analysis",
      title: "Your Best Data Project",
      desc:  "What dataset did you work with? What insight did you surface? What decision did it inform?",
      tags:  ["Python", "pandas", "Matplotlib", "SQL"],
      link:  "#",
    },
    {
      type:  "Dashboard / Viz",
      title: "Second Data Project",
      desc:  "A dashboard, a report, or an exploratory analysis — show what you found.",
      tags:  ["Excel", "SQL", "pandas"],
      link:  "#",
    },
    {
      type:  "Research / Analysis",
      title: "Third Data Project",
      desc:  "Thesis, capstone, or personal project. If the data told a story, write it here.",
      tags:  ["Python", "Research", "Excel"],
      link:  "#",
    },
  ],

  // ── CONTACT SECTION TAGLINE ───────────────────────────────
  contactTagline: "Open to data roles, software positions, and interesting projects. Fast learner, quick replier.",

};
