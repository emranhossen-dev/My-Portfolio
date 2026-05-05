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
    id:"ec", ti:"Iron Locker - Cloud Storage Vault",
    desc:"Cloud storage locker for secure uploads of images, certificates, documents, and links.",
    lng:"Secure cloud storage vault where users can freely upload and organize their images, certificates, documents, and important links with easy access and management.",
    pr:"Users needed a secure, simple personal cloud vault to store and organize their important files, certificates, and links in one place.",
    so:"Built a full-stack application with Next.js, TypeScript, secure file upload system, and organized cloud storage management.",
    tc:["Next.js","TypeScript","Tailwind","Node.js","MongoDB","File Upload"],
    fe:["Secure file upload","Image gallery","Certificate storage","Link management","Organized vault system","Download & share options"],
    img:"https://i.ibb.co.com/BVhZqtj9/Whats-App-Image-2026-05-06-at-3-12-49-AM.jpg",
    li:"https://ironlocker.vercel.app",gh:"https://github.com/emranhossen-dev/Iron-Locker",co:"#7c6fff",ca:"Full Stack",
  },
  {
    id:"tm", ti:"Luminous Skill Center LMS",
    desc:"Learning management system for skill development and online courses.",
    lng:"Comprehensive LMS platform with course management, student progress tracking, and interactive learning modules.",
    pr:"Educational institutions needed an affordable platform for online learning and skill development.",
    so:"Built with modern web stack featuring course management, real-time progress tracking, and interactive modules.",
    tc:["React","TypeScript","Tailwind","Node.js","MongoDB"],
    fe:["Course management dashboard","Student progress tracking","Interactive learning modules","Quiz & assessments","Real-time notifications","Mobile responsive"],
    img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    li:"https://luminous-centre.vercel.app",gh:"https://github.com/emranhossen-dev/Luminous-Centre",co:"#34d399",ca:"Full Stack",
  },
  {
    id:"bl", ti:"Memory Game - Swap Puzzle",
    desc:"Interactive puzzle game based on event bubbling concept with memory challenges.",
    lng:"Engaging swap puzzle game that tests memory and pattern recognition with smooth animations and interactive gameplay.",
    pr:"Players wanted an entertaining puzzle game that challenges memory with engaging visuals and smooth interactions.",
    so:"Built with vanilla JavaScript using event delegation and bubbling for efficient DOM handling and game logic.",
    tc:["JavaScript","HTML5","CSS3","Event Handling"],
    fe:["Memory card matching","Swap puzzle mechanics","Score tracking","Difficulty levels","Timer challenges","Sound effects"],
    img:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    li:"https://memorypro.vercel.app",gh:"https://github.com/emranhossen-dev/memory-game",co:"#f59e0b",ca:"Frontend",
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
        <div class="pc-vis" style="background-image:url('${p.img}');background-size:cover;background-position:center">
          <div class="pc-overlay"></div>
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