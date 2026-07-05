/* ────────────────────────────────────────────────────────────────
   RENDER — pulls from content.js (the YZA object) into the DOM
   ──────────────────────────────────────────────────────────────── */
function renderContent(){
  // Resume links
  document.getElementById("resumeBtn").href = YZA.resumeUrl;
  document.getElementById("mobileResume").href = YZA.resumeUrl;

  // Skills
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = YZA.skillGroups.map(group => `
    <div class="skill-block ${group.learning ? "is-learning" : ""}">
      <div class="skill-cat">
        ${group.category}
        ${group.learning ? '<span class="learning-badge">Learning</span>' : ""}
      </div>
      <div class="skill-tags">
        ${group.items.map(i => `<span>${i}</span>`).join("")}
      </div>
    </div>
  `).join("");

  // Projects
  const projectsList = document.getElementById("projectsList");
  projectsList.innerHTML = YZA.projects.map(p => `
    <article class="project">
      <div class="project-media">
        <img src="${p.photo}" alt="${p.title} preview" loading="lazy">
      </div>
      <div class="project-copy">
        <span class="project-tag" data-reveal>${p.tag}</span>
        <h3 data-reveal>${p.title}</h3>
        <p data-reveal>${p.desc}</p>
        <div class="project-tags" data-reveal>${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <a class="project-link" href="${p.link}" target="_blank" rel="noopener" data-reveal>View project ↗</a>
      </div>
    </article>
  `).join("");

  // Learning tools (pulled from the Data Analytics skill group so it stays in one place)
  const dataGroup = YZA.skillGroups.find(g => g.learning);
  document.getElementById("learningTools").innerHTML = dataGroup.items.map(t => `<span class="tool">${t}</span>`).join("");

  // Contact links
  document.getElementById("contactLinks").innerHTML = YZA.contactLinks.map(l => `
    <a href="${l.href}" target="_blank" rel="noopener">
      <div class="contact-link">
        <span>${l.label}</span>
        <span class="label">${l.value}</span>
      </div>
    </a>
  `).join("");

  // Footer
  document.getElementById("footerMeta").textContent = YZA.location;
  document.querySelector(".footer-year").textContent = `© ${new Date().getFullYear()} ${YZA.name}`;
}
renderContent();

/* ────────────────────────────────────────────────────────────────
   LOADER — brief page-load moment, then reveal
   ──────────────────────────────────────────────────────────────── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("done");
    document.querySelectorAll(".hero-name .line, .hero-tagline, .hero-cta, .hero-status").forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), i * 90);
    });
    document.querySelector(".hero-name").classList.add("reveal-done");
  }, 650);
});

/* ────────────────────────────────────────────────────────────────
   CUSTOM CURSOR
   ──────────────────────────────────────────────────────────────── */
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

if (window.matchMedia("(hover: hover)").matches) {
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  });
  (function loop(){
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll("a, button, [data-tilt]").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });
}

/* ────────────────────────────────────────────────────────────────
   SCROLL REVEAL
   ──────────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll("[data-reveal]").forEach(el => revealObserver.observe(el));

/* ────────────────────────────────────────────────────────────────
   NAV — sticky border, active-section highlight, mobile menu
   ──────────────────────────────────────────────────────────────── */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileMenu.classList.remove("open"); burger.classList.remove("open");
}));

const navLinks = document.querySelectorAll(".nav-links a");
const sections = ["hero","about","skills","work","learning","contact"]
  .map(id => document.getElementById(id)).filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle("active", a.dataset.nav === id));
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => sectionObserver.observe(s));

/* ────────────────────────────────────────────────────────────────
   SIGNATURE RAIL — scroll progress + current-section label,
   maroon → forest as the page moves from "dev" toward "data"
   ──────────────────────────────────────────────────────────────── */
const railFill = document.querySelector(".rail-fill");
const railLabel = document.getElementById("railLabel");
const labelMap = { hero: "DEV", about: "ABOUT", skills: "SKILLS", work: "DEV", learning: "DATA", contact: "SAY HI" };

function updateRail(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  railFill.style.height = pct + "%";

  let current = "hero";
  for (const s of sections) {
    const rect = s.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.5) current = s.id;
  }
  railLabel.textContent = labelMap[current] || "DEV";
}
window.addEventListener("scroll", updateRail, { passive: true });
updateRail();

/* ────────────────────────────────────────────────────────────────
   CARD TILT — subtle 3D response on hover, for cards marked [data-tilt]
   ──────────────────────────────────────────────────────────────── */
if (window.matchMedia("(hover: hover)").matches) {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll("[data-tilt]").forEach(card => {
      const r = card.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        card.style.transform = "";
        return;
      }
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateZ(4px)`;
    });
  });
}