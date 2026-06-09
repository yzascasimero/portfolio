// ============================================================
//  script.js — Yza Casimero Portfolio
//  Renders everything from content.js. Don't touch this file.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── RENDER CONTENT ────────────────────────────────────────

  // Logo
  document.querySelectorAll('.js-logo').forEach(el => el.textContent = YZA.name.split(' ')[0].toUpperCase() + '.DEV');

  // Nav name
  const navName = document.getElementById('nav-name');
  if (navName) navName.textContent = YZA.name;

  // Hero eyebrow
  const eyebrow = document.getElementById('hero-eyebrow');
  if (eyebrow) eyebrow.textContent = (YZA.available ? 'Available · ' : '') + YZA.location;

  // Hero name
  const nameEl = document.getElementById('hero-name');
  if (nameEl && YZA.heroLines) {
    nameEl.innerHTML = `
      <div class="line1">${YZA.heroLines[0]}</div>
      <div class="line2">${YZA.heroLines[1]}</div>
      <div class="line3">${YZA.heroLines[2]}</div>
    `;
  }

  // Hero tagline
  const tagline = document.getElementById('hero-tagline');
  if (tagline) tagline.textContent = YZA.heroTagline;

  // Status pill
  const statusPill = document.getElementById('status-pill');
  if (statusPill) {
    statusPill.style.display = YZA.available ? 'flex' : 'none';
  }

  // Hero buttons
  const heroBtns = document.getElementById('hero-btns');
  if (heroBtns) {
    heroBtns.innerHTML = `
      <a href="#projects" class="btn btn-lime">See my work →</a>
      <a href="#contact" class="btn btn-outline">Get in touch</a>
    `;
  }

  // About
  const aboutFrame = document.getElementById('about-frame');
  if (aboutFrame) {
    if (YZA.about.photo) {
      aboutFramme.style.backgroundImage = `url(${YZA.about.photo})`;
      aboutFrame.style.backgroundSize = 'cover';
      aboutFrame.style.backgroundPosition = 'center top';
    }
    aboutFrame.querySelector('.badge').textContent = YZA.about.badge;
  }
  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle && YZA.about.title) {
    aboutTitle.innerHTML = YZA.about.title.map((line, i) =>
      i === 1 ? `<span class="lime">${line}</span>` : line
    ).join('<br>');
  }
  const aboutBody = document.getElementById('about-body');
  if (aboutBody) {
    aboutBody.innerHTML = YZA.about.paragraphs.map(p => `<p class="about-body">${p}</p>`).join('');
  }
  const devCard = document.getElementById('about-dev-card');
  if (devCard) {
    devCard.querySelector('.dual-card-icon').textContent = YZA.about.devCard.icon;
    devCard.querySelector('.dual-card-title').textContent = YZA.about.devCard.title;
    devCard.querySelector('.dual-card-body').textContent = YZA.about.devCard.body;
  }
  const dataCard = document.getElementById('about-data-card');
  if (dataCard) {
    dataCard.querySelector('.dual-card-icon').textContent = YZA.about.dataCard.icon;
    dataCard.querySelector('.dual-card-title').textContent = YZA.about.dataCard.title;
    dataCard.querySelector('.dual-card-body').textContent = YZA.about.dataCard.body;
  }

  // Skills
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    skillsGrid.innerHTML = YZA.skills.map(s => `
      <div class="skill-tile" style="--pct:${s.pct}%">
        <span class="skill-tile-icon">${s.icon}</span>
        <div class="skill-tile-name">${s.name}</div>
        <div class="skill-tile-desc">${s.desc}</div>
        <div class="skill-bar-track"><div class="skill-bar-fill"></div></div>
      </div>
    `).join('');

    // Re-observe skill tiles after render
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('animated'); skillObs.unobserve(e.target); }
      });
    }, { threshold: 0.3 });
    skillsGrid.querySelectorAll('.skill-tile').forEach(t => skillObs.observe(t));
  }

  // Dev projects
  const devGrid = document.getElementById('dev-grid');
  if (devGrid) {
    const colorMap = { green: 'vc-green', blue: 'vc-blue', purple: 'vc-purple' };
    devGrid.innerHTML = YZA.devProjects.map((p, i) => `
      <div class="dev-card ${p.size}">
        <div class="dev-card-visual ${colorMap[p.color] || 'vc-green'}">
          <span>${p.emoji}</span>
          <div class="dev-card-visual-num">0${i + 1}</div>
        </div>
        <div class="dev-card-body">
          <div class="dev-card-tag">${p.tag}</div>
          <div class="dev-card-title">${p.title}</div>
          <p class="dev-card-desc">${p.desc}</p>
          <div class="chip-row">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
          <a href="${p.link}" class="card-link">View project →</a>
        </div>
      </div>
    `).join('');
    addTilt();
  }

  // Data projects
  const dataGrid = document.getElementById('data-grid');
  if (dataGrid) {
    dataGrid.innerHTML = YZA.dataProjects.map((p, i) => `
      <div class="data-row">
        <div class="data-num">0${i + 1}</div>
        <div>
          <div class="data-type">${p.type}</div>
          <div class="data-title">${p.title}</div>
          <div class="data-desc">${p.desc}</div>
        </div>
        <div class="data-chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        <a href="${p.link}" class="data-action" title="View project">↗</a>
      </div>
    `).join('');
  }

  // Contact
  const contactSub = document.getElementById('contact-sub');
  if (contactSub) contactSub.textContent = YZA.contactTagline;

  const contactLinks = document.getElementById('contact-links');
  if (contactLinks) {
    const links = [
      { label: 'Email',    val: YZA.email,    href: `mailto:${YZA.email}`,   arrow: '→' },
      { label: 'LinkedIn', val: 'LinkedIn',    href: YZA.linkedin,            arrow: '→', target: '_blank' },
      { label: 'GitHub',   val: 'GitHub',      href: YZA.github,              arrow: '→', target: '_blank' },
      { label: 'Resume',   val: 'Download PDF',href: YZA.resumeUrl,           arrow: '↓' },
    ];
    contactLinks.innerHTML = links.map(l => `
      <a href="${l.href}" class="contact-link" ${l.target ? `target="${l.target}"` : ''}>
        <div>
          <div class="contact-link-label">${l.label}</div>
          <div class="contact-link-val">${l.val}</div>
        </div>
        <span class="contact-link-arrow">${l.arrow}</span>
      </a>
    `).join('');
    addHoverListeners();
  }

  // Footer
  document.querySelectorAll('.js-footer-name').forEach(el => el.textContent = YZA.name);
  document.querySelectorAll('.js-footer-location').forEach(el => el.textContent = YZA.location);

  // ── CURSOR ────────────────────────────────────────────────
  const dot  = document.getElementById('curDot');
  const ring = document.getElementById('curRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function animRing() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  function addHoverListeners() {
    document.querySelectorAll('a, button, .dev-card, .data-row, .dual-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
  }
  addHoverListeners();

  // ── THEME TOGGLE ──────────────────────────────────────────
  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;
  themeBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // ── PROJECT TABS ──────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });

  // ── 3D CARD TILT ──────────────────────────────────────────
  function addTilt() {
    document.querySelectorAll('.dev-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) translateZ(4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateZ(0)';
      });
    });
  }

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

});
