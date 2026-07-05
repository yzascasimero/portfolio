/* ────────────────────────────────────────────────────────────────
   YZA'S PORTFOLIO — CONTENT FILE
   This is the only file you should need to edit day-to-day.
   Change text, links, and projects here — the design stays intact.
   ──────────────────────────────────────────────────────────────── */

const YZA = {

  // ── PERSONAL / LINKS ──────────────────────────────────────────
  name:      "Yza Casimero",
  location:  "Marinduque, Philippines",
  email:     "yzasoliscasimero@gmail.com",
  linkedin:  "https://www.linkedin.com/in/yzacasimero/",
  github:    "https://github.com/yzascasimero",
  resumeUrl: "https://drive.google.com/file/d/1PrAzXAT6Ju7Ivt40v8QKxO2CYovEecSt/view?usp=sharing",

  // ── SKILLS ─────────────────────────────────────────────────────
  // Grouped by category. `learning: true` renders the category with
  // a "learning" tag style instead of a mastered-skill style.
  skillGroups: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "SQL", "Dart"],
    },
    {
      category: "Web Development",
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      category: "Mobile Development",
      items: ["Flutter", "Android Studio"],
    },
    {
      category: "Database",
      items: ["MySQL", "Schema Design"],
    },
    {
      category: "Tools",
      items: ["VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
      category: "Version Control",
      items: ["Git", "GitHub"],
    },
    {
      category: "Data Analytics",
      items: ["Python", "SQL", "Excel", "Power BI", "pandas", "NumPy", "Data Visualization", "Statistics"],
      learning: true,
    },
  ],

  // ── DEV PROJECTS ────────────────────────────────────────────────
  projects: [
    {
      tag:   "Undergraduate Thesis",
      title: "Better-Fly — Automated Caterpillar Rearing System",
      photo: "assets/betterfly-cover.png",
      desc:  "Co-built an automated rearing system for controlled insect research, replacing manual, high-mortality workflows with real-time image monitoring and calibrated climate control. I led the development of the Flutter/Android app and assisted in the Python image-processing pipeline, working alongside two co-researchers to take the project from concept through a hardware prototype that passed defense with no revisions.",
      tags:  ["Python", "Flutter", "Android Studio", "Image Processing"],
      link:  "https://drive.google.com/drive/folders/1K-k6N55upEonS4nFxUIVTdbeCrTno-jG?usp=sharing",
    },
    {
      tag:   "Client Project",
      title: "Casa Faeldo — Resort Ordering System",
      photo: "assets/casa-faeldo-cover.png",
      desc:  "Partnered with a fellow engineer and a web developer to replace a resort's manual order-taking with a full digital platform. I designed and hardened the MySQL schema behind real-time inventory and order processing, then paired it with a clean HTML/CSS interface built for actual front-desk use.",
      tags:  ["MySQL", "Python", "HTML/CSS"],
      link:  "https://drive.google.com/file/d/1Y8ipkVLnqPJG_IrMu57vrDBy086Uhs3t/view?usp=sharing",
    },
  ],

  // ── CONTACT LINKS ───────────────────────────────────────────────
  contactLinks: [
    { label: "Email",    value: "yzasoliscasimero@gmail.com", href: "mailto:yzasoliscasimero@gmail.com" },
    { label: "LinkedIn", value: "in/yzacasimero",              href: "https://www.linkedin.com/in/yzacasimero/" },
    { label: "GitHub",   value: "yzascasimero",                href: "https://github.com/yzascasimero" },
  ],

};