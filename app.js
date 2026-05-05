/* ============================================================
   DATA
   ============================================================ */
const tSkills = [
  { n: "HTML5",               l: 95, c: "#E44D26", e: "🌐" },
  { n: "CSS3 / SASS",         l: 90, c: "#1572B6", e: "🎨" },
  { n: "JavaScript (ES6+)",   l: 88, c: "#F7DF1E", e: "⚡" },
  { n: "TypeScript",          l: 80, c: "#3178C6", e: "🔷" },
  { n: "React.js",            l: 87, c: "#61DAFB", e: "⚛️" },
  { n: "Next.js",             l: 83, c: "#7c6fff", e: "▲"  },
  { n: "Node.js / Express",   l: 80, c: "#68A063", e: "🟢" },
  { n: "MongoDB / PostgreSQL",l: 76, c: "#47a248", e: "🗄️" },
];

const softSk = [
  { n: "Problem Solving",   l: 93, e: "🧠" },
  { n: "Communication",     l: 88, e: "💬" },
  { n: "Team Collaboration",l: 90, e: "🤝" },
  { n: "Adaptability",      l: 87, e: "🔄" },
];

const cChips = [
  "React","Next.js","Node.js","TypeScript",
  "Tailwind CSS","MongoDB","PostgreSQL","Git",
  "Docker","Vercel","AWS","REST APIs",
];

const eChips = [
  "Redis","GraphQL","Prisma","Jest","CI/CD",
  "Linux","Nginx","WebSockets","Figma",
];

const projs = [
  {
    id:"ec", ti:"E-Commerce Platform",
    desc:"Full-featured store with cart, Stripe payments & admin dashboard.",
    lng:"Comprehensive e-commerce with product catalog, filters, cart management, Stripe payments, and order tracking.",
    pr:"Small businesses needed affordable scalable storefronts without expensive SaaS fees.",
    so:"Built a custom Next.js platform with SSR, Stripe payments, Prisma ORM, and admin CMS.",
    tc:["Next.js","TypeScript","Tailwind","Stripe","Prisma","PostgreSQL"],
    fe:["Product catalog with filtering","Persistent cart & wishlist","Stripe secure checkout","Order tracking dashboard","Admin CMS panel","Mobile-first responsive"],
    li:"#",gh:"#",co:"#7c6fff",em:"🛍️",ca:"Full Stack",
  },
  {
    id:"tm", ti:"Task Manager App",
    desc:"Real-time Kanban board with drag-and-drop and team collaboration.",
    lng:"Productivity app with real-time updates, drag-and-drop Kanban boards, and team workspaces.",
    pr:"Teams needed a fast lightweight alternative to bloated project management tools.",
    so:"Built with React, Firebase real-time DB, and smooth DnD interactions.",
    tc:["React","Firebase","TypeScript","Tailwind"],
    fe:["Drag-and-drop Kanban","Real-time sync","Team workspaces","Due dates & priority","Activity feed","Offline support"],
    li:"#",gh:"#",co:"#34d399",em:"📋",ca:"Frontend",
  },
  {
    id:"bl", ti:"Developer Blog Platform",
    desc:"MDX-powered blog with CMS, syntax highlighting, and full-text search.",
    lng:"Developer-focused blog with MDX support, syntax highlighted code blocks, and headless CMS.",
    pr:"Developers wanted a fast, beautiful blog without WordPress overhead.",
    so:"Built with Next.js static generation, MDX, Contentlayer, and Algolia search.",
    tc:["Next.js","MDX","Contentlayer","Algolia","Tailwind"],
    fe:["MDX custom components","Syntax highlighting","Table of contents","Algolia full-text search","RSS feed","Reading time"],
    li:"#",gh:"#",co:"#f59e0b",em:"✍️",ca:"Full Stack",
  },
  {
    id:"ap", ti:"REST API Backend",
    desc:"Scalable Node.js REST API with auth, rate limiting, and OpenAPI docs.",
    lng:"Production-ready Node.js REST API with JWT auth, role-based access, caching, and Swagger docs.",
    pr:"Mobile app needed a robust, well-documented backend with security best practices.",
    so:"Built with Express, PostgreSQL, Redis caching, JWT auth, and automated OpenAPI docs.",
    tc:["Node.js","Express","PostgreSQL","Redis","JWT","Swagger"],
    fe:["JWT authentication","Role-based access control","Rate limiting","Redis caching","Swagger docs","Input validation"],
    li:"#",gh:"#",co:"#ef4444",em:"🔌",ca:"Backend",
  },
  {
    id:"wt", ti:"Weather Dashboard",
    desc:"Real-time weather with location detection, charts, and 7-day forecasts.",
    lng:"Beautiful weather dashboard using OpenWeatherMap API with Chart.js visualizations.",
    pr:"Existing weather apps were cluttered with ads and poor data visualization.",
    so:"Built a clean data-rich app with Chart.js charts and smooth CSS animations.",
    tc:["React","TypeScript","Chart.js","OpenWeatherMap"],
    fe:["GPS auto-detection","7-day forecast","Hourly temperature chart","Animated weather icons","City search","UV index & wind data"],
    li:"#",gh:"#",co:"#38bdf8",em:"🌤️",ca:"Frontend",
  },
  {
    id:"pf", ti:"This Portfolio",
    desc:"Built with HTML, Tailwind CSS & JS — you're looking at it!",
    lng:"Modern developer portfolio showcasing projects and skills with smooth animations and clean design.",
    pr:"Needed a portfolio that looks professional, loads fast, and shows off skills impressively.",
    so:"Designed with editorial aesthetics, attention to typography, spacing, and motion.",
    tc:["HTML5","CSS3","Tailwind CSS","JavaScript"],
    fe:["Dark / light mode","Scroll reveal animations","⌘K command palette","Project detail modals","Contact form validation","Fully responsive"],
    li:"#",gh:"#",co:"#a78bfa",em:"🎯",ca:"Frontend",
  },
];

const cmds = [
  { g:"Navigation", l:"Go to Home",     i:"🏠", a:()=>goTo("home")     },
  { g:"Navigation", l:"Go to About",    i:"👤", a:()=>goTo("about")    },
  { g:"Navigation", l:"Go to Skills",   i:"⚡", a:()=>goTo("skills")   },
  { g:"Navigation", l:"Go to Projects", i:"🔨", a:()=>goTo("projects") },
  { g:"Navigation", l:"Go to GitHub",   i:"📊", a:()=>goTo("github")   },
  { g:"Navigation", l:"Go to Contact",  i:"✉️", a:()=>goTo("contact")  },
  { g:"Links", l:"Open GitHub",   h:"github.com/emranhossen",      i:"⌥", a:()=>window.open("https://github.com","_blank") },
  { g:"Links", l:"Open LinkedIn", h:"linkedin.com/in/emranhossen", i:"💼", a:()=>window.open("https://linkedin.com","_blank") },
  { g:"Actions", l:"Download Resume", h:"PDF",         i:"⬇", a:()=>window.open("#","_blank") },
  { g:"Actions", l:"Toggle Theme",    h:"dark / light",i:"🌙",a:()=>toggleTheme() },
];

/* ============================================================
   THEME
   ============================================================ */
let theme = localStorage.getItem("theme") || "dark";

function applyTheme(t) {
  theme = t;
  document.documentElement.setAttribute("data-theme", t);
  document.getElementById("themeBtn").textContent = t === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", t);
}

function toggleTheme() {
  applyTheme(theme === "dark" ? "light" : "dark");
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);
applyTheme(theme);

/* ============================================================
   TYPEWRITER
   ============================================================ */
const roles = [
  "I am a Frontend Developer",
  "I also knows Backend technologies",
  "I Want to be a Full Stack Developer",
  "I am a MERN Stack Developer",
  "I am a Software Engineer",
  "I am an UI/UX Enthusiast",
];

let ri = 0, ci = 0, del = false;
const tel = document.getElementById("typed");

function tw() {
  const w = roles[ri];
  if (!del) {
    tel.textContent = w.slice(0, ++ci);
    if (ci === w.length) { del = true; setTimeout(tw, 1900); return; }
    setTimeout(tw, 68);
  } else {
    tel.textContent = w.slice(0, --ci);
    if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(tw, 320); return; }
    setTimeout(tw, 36);
  }
}
setTimeout(tw, 900);

/* ============================================================
   NAV
   ============================================================ */
function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMob();
}

let mobOpen = false;
document.getElementById("mobToggle").addEventListener("click", () => {
  mobOpen = !mobOpen;
  document.getElementById("mobMenu").classList.toggle("open", mobOpen);
});

function closeMob() {
  mobOpen = false;
  document.getElementById("mobMenu").classList.remove("open");
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").replace("#", "");
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); closeMob(); }
  });
});

// Active nav highlight on scroll
const secs = ["home","about","skills","projects","github","contact"];
window.addEventListener("scroll", () => {
  // Solid nav after 28px
  document.getElementById("nav").classList.toggle("solid", window.scrollY > 28);

  // Active section
  let cur = "home";
  secs.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) cur = id;
  });
  document.querySelectorAll(".nav-links a, .mob-menu a").forEach(a => {
    a.classList.toggle("active",
      (a.dataset.s || a.getAttribute("href").replace("#","")) === cur
    );
  });
}, { passive: true });

/* ============================================================
   RENDER SKILLS
   ============================================================ */
(function renderSkills() {
  // Technical bars
  const t = document.getElementById("techSk");
  tSkills.forEach(s => {
    t.innerHTML += `
      <div class="sk-item">
        <div class="sk-row">
          <div class="sk-name"><span>${s.e}</span>${s.n}</div>
          <span class="sk-pct">${s.l}%</span>
        </div>
        <div class="sk-bar">
          <div class="sk-fill" data-w="${s.l}" style="background:${s.c}"></div>
        </div>
      </div>`;
  });

  // Core chips
  const cc = document.getElementById("coreChips");
  cChips.forEach(c => cc.innerHTML += `<span class="chip">${c}</span>`);

  // Soft skill bars
  const sf = document.getElementById("softSk");
  softSk.forEach(s => {
    sf.innerHTML += `
      <div class="soft-item">
        <div class="soft-ic">${s.e}</div>
        <div class="soft-inf">
          <div class="soft-n">${s.n}</div>
          <div class="soft-bar"><div class="soft-fill" data-w="${s.l}"></div></div>
        </div>
        <span class="sk-pct" style="flex-shrink:0">${s.l}%</span>
      </div>`;
  });

  // Extra chips
  const ec = document.getElementById("extraChips");
  eChips.forEach(c => ec.innerHTML += `<span class="chip">${c}</span>`);
})();

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
(function renderProjects() {
  const g = document.getElementById("projGrid");
  projs.forEach((p, i) => {
    g.innerHTML += `
      <div class="pc rv" style="transition-delay:${(i % 3) * .1}s" onclick="openModal('${p.id}')">
        <div class="pc-bar" style="background:${p.co}"></div>
        <div class="pc-vis" style="background:radial-gradient(circle at 50% 60%,${p.co}18,transparent 70%)">
          <span style="filter:drop-shadow(0 4px 12px ${p.co}50)">${p.em}</span>
          <span class="pc-cat">${p.ca}</span>
        </div>
        <div class="pc-body">
          <div class="pc-title">${p.ti}</div>
          <div class="pc-desc">${p.desc}</div>
          <div class="pc-stack">
            ${p.tc.slice(0,4).map(t => `<span class="stag">${t}</span>`).join("")}
            ${p.tc.length > 4 ? `<span class="stag">+${p.tc.length - 4}</span>` : ""}
          </div>
        </div>
        <div class="pc-foot">
          <button class="pbtn pbtn-p" onclick="event.stopPropagation();window.open('${p.li}','_blank')">↗ Live</button>
          <button class="pbtn pbtn-g" onclick="event.stopPropagation();window.open('${p.gh}','_blank')">⌥ Code</button>
        </div>
      </div>`;
  });
})();

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function openModal(id) {
  const p = projs.find(x => x.id === id);
  if (!p) return;
  document.getElementById("mBar").style.background   = p.co;
  document.getElementById("mEm").textContent         = p.em;
  document.getElementById("mTi").textContent         = p.ti;
  document.getElementById("mCa").textContent         = p.ca;
  document.getElementById("mOv2").textContent        = p.lng;
  document.getElementById("mPr").textContent         = p.pr;
  document.getElementById("mSo").textContent         = p.so;
  document.getElementById("mFe").innerHTML           = p.fe.map(f => `<div class="m-feat"><div class="m-ck">✓</div>${f}</div>`).join("");
  document.getElementById("mSt").innerHTML           = p.tc.map(t => `<span class="m-chip">${t}</span>`).join("");
  document.getElementById("mLi").href               = p.li;
  document.getElementById("mGh").href               = p.gh;
  document.getElementById("mOv").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("mOv").classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   CMD PALETTE
   ============================================================ */
let fCmds = cmds, selI = 0;

function renderCmd(list) {
  const gs = [...new Set(list.map(c => c.g))];
  document.getElementById("cmdList").innerHTML = gs.map(g =>
    `<div class="cmd-glbl">${g}</div>` +
    list
      .filter(c => c.g === g)
      .map(c => {
        const gi = list.indexOf(c);
        return `<div class="cmd-it${gi === selI ? " sel" : ""}"
                  onmouseenter="selI=${gi};renderCmd(fCmds)"
                  onclick="runCmd(${cmds.indexOf(c)})">
                  <span class="cmd-it-ic">${c.i}</span>
                  <span class="cmd-it-l">${c.l}</span>
                  ${c.h ? `<span class="cmd-it-h">${c.h}</span>` : ""}
                </div>`;
      }).join("")
  ).join("");
}

function filterCmd(q) {
  selI = 0;
  fCmds = q
    ? cmds.filter(c =>
        c.l.toLowerCase().includes(q.toLowerCase()) ||
        (c.h || "").toLowerCase().includes(q.toLowerCase())
      )
    : cmds;
  renderCmd(fCmds);
}

function openCmd() {
  fCmds = cmds; selI = 0;
  renderCmd(fCmds);
  document.getElementById("cmdOv").classList.add("open");
  setTimeout(() => document.getElementById("cmdIn").focus(), 50);
  document.body.style.overflow = "hidden";
}

function closeCmd() {
  document.getElementById("cmdOv").classList.remove("open");
  document.getElementById("cmdIn").value = "";
  fCmds = cmds; selI = 0;
  document.body.style.overflow = "";
}

function runCmd(i) {
  cmds[i].a();
  closeCmd();
}

function cmdKey(e) {
  if (e.key === "Escape")   { closeCmd(); return; }
  if (e.key === "ArrowDown") { selI = Math.min(selI + 1, fCmds.length - 1); renderCmd(fCmds); }
  if (e.key === "ArrowUp")   { selI = Math.max(selI - 1, 0);                renderCmd(fCmds); }
  if (e.key === "Enter" && fCmds[selI]) { fCmds[selI].a(); closeCmd(); }
}

window.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); openCmd(); }
  if (e.key === "Escape") { closeModal(); closeCmd(); }
});

/* ============================================================
   SCROLL REVEAL + SKILL BAR ANIMATION
   ============================================================ */
const rvEls = document.querySelectorAll(".rv,.rvl,.rvr");

function checkRv() {
  // Reveal elements
  rvEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add("v");
    }
  });
  // Animate skill bars when visible
  document.querySelectorAll(".sk-fill[data-w],.soft-fill[data-w]").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 20 && !el.dataset.done) {
      el.dataset.done = "1";
      setTimeout(() => { el.style.width = el.dataset.w + "%"; }, 200);
    }
  });
}

window.addEventListener("scroll", checkRv, { passive: true });
setTimeout(checkRv, 120);

/* ============================================================
   CONTACT FORM
   ============================================================ */
document.getElementById("ctForm").addEventListener("submit", async e => {
  e.preventDefault();
  const fn = document.getElementById("fn");
  const fe = document.getElementById("fe");
  const fm = document.getElementById("fm");

  let ok = true;

  function setErr(el, eid, bad) {
    el.classList.toggle("err", bad);
    document.getElementById(eid).classList.toggle("show", bad);
    if (bad) ok = false;
  }

  setErr(fn, "fne", !fn.value.trim());
  setErr(fe, "fee", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fe.value));
  setErr(fm, "fme", fm.value.length < 10);

  if (!ok) return;

  const btn = document.getElementById("fsb");
  const lbl = document.getElementById("fsl");
  btn.disabled = true;
  lbl.textContent = "Sending...";

  // Simulate network request
  await new Promise(r => setTimeout(r, 1400));

  btn.classList.add("ok");
  lbl.textContent = "✓ Message Sent!";

  // Clear form
  fn.value = "";
  fe.value = "";
  document.getElementById("fs").value = "";
  fm.value = "";

  setTimeout(() => {
    btn.classList.remove("ok");
    btn.disabled = false;
    lbl.textContent = "Send Message ✦";
  }, 4000);
});


/* ============================================================
   GITHUB REAL-TIME DATA
   ============================================================ */
async function updateGitHubStats() {
  const username = "emranhossen"; // Your GitHub username
  const apiBase = `https://api.github.com/users/${username}`;

  try {
    const res = await fetch(apiBase);
    const data = await res.json();

    if (data && !data.message) {
      // Select the stat cards based on their order in your HTML
      const statCards = document.querySelectorAll("#github .gh-v");

      // 1. Update Repositories (First Card)
      if (statCards[0]) statCards[0].textContent = data.public_repos;

      // 2. Update Followers (Fourth Card)
      if (statCards[3]) statCards[3].textContent = data.followers;

      // Optional: Log success for debugging
      console.log("GitHub stats updated successfully!");
    }
  } catch (err) {
    console.error("Could not fetch GitHub data:", err);
  }
}

// Run the function when the page loads
updateGitHubStats();