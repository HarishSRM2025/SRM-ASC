
const SC_DATA = [
  {
    id: "library",
    theme: "sc-t-maroon",
    cardIcon: "fa-solid fa-book-open",
    stripe: "linear-gradient(90deg, #7D1F3B, #1B7B7D)",
    badge: "Open Daily",
    title: "Library",
    subtitle: "Physical & digital learning resources",
    btnLabel: "Access Library Portal",
    btnIcon: "fa-solid fa-arrow-up-right-from-square",
    accentColor: "#7D1F3B",
    accentBg: "rgba(125,31,59,0.1)",
    items: [
      {
        icon: "fa-solid fa-building-columns",
        label: "Library Facilities",
        desc: "Timings, floors, seating & infrastructure overview",
        tag: "Info",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-globe",
        label: "E-Library Portal",
        desc: "Access e-books, research journals & digital databases",
        tag: "Online",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-scroll",
        label: "Library Rules & Policy",
        desc: "Borrowing limits, fine structure & membership terms",
        tag: "PDF",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      },
      {
        icon: "fa-solid fa-magnifying-glass",
        label: "OPAC Catalogue Search",
        desc: "Search physical book inventory by title or author",
        tag: "Live",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-solid fa-id-card",
        label: "Membership Registration",
        desc: "Enrol for borrower card & full library access",
        tag: "Form",
        tagBg: "rgba(212,165,116,0.18)",
        tagColor: "#a57030"
      }
    ]
  },
  {
    id: "clubs",
    theme: "sc-t-teal",
    cardIcon: "fa-solid fa-people-group",
    stripe: "linear-gradient(90deg, #1B7B7D, #2D8659)",
    badge: "4 Active Clubs",
    title: "Clubs & Committees",
    subtitle: "Service, sports & cultural engagement",
    btnLabel: "Join a Club",
    btnIcon: "fa-solid fa-user-plus",
    accentColor: "#1B7B7D",
    accentBg: "rgba(27,123,125,0.1)",
    items: [
      {
        icon: "fa-solid fa-handshake-angle",
        label: "NSS – National Service Scheme",
        desc: "Community service, awareness drives & annual camps",
        tag: "Active",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-solid fa-shield-halved",
        label: "NCC – National Cadet Corps",
        desc: "Discipline, patriotism, cadet ranks & training drills",
        tag: "Enroll",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      },
      {
        icon: "fa-solid fa-trophy",
        label: "Sports Committee",
        desc: "Inter-college tournaments, sports events & fitness",
        tag: "Open",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-music",
        label: "Cultural Club",
        desc: "Dance, music, drama, fine arts & annual college fests",
        tag: "Active",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      }
    ]
  },
  {
    id: "exam",
    theme: "sc-t-navy",
    cardIcon: "fa-solid fa-file-circle-check",
    stripe: "linear-gradient(90deg, #011e44, #7D1F3B)",
    badge: "Mar 2025",
    title: "Examination",
    subtitle: "Schedules, hall tickets & results portal",
    btnLabel: "View Exam Schedule",
    btnIcon: "fa-solid fa-calendar-check",
    accentColor: "#011e44",
    accentBg: "rgba(1,30,68,0.1)",
    items: [
      {
        icon: "fa-solid fa-calendar-week",
        label: "Exam Timetable – Odd Semester",
        desc: "July–November schedule, subject codes & venue",
        tag: "PDF",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-calendar-week",
        label: "Exam Timetable – Even Semester",
        desc: "January–May schedule, subject codes & venue",
        tag: "PDF",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-ticket",
        label: "Hall Ticket Download",
        desc: "Download admit card from student portal before exam",
        tag: "Portal",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-chart-bar",
        label: "Results Link",
        desc: "Check semester-wise marks, grades & arrear status",
        tag: "Live",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-solid fa-phone",
        label: "Exam Cell Contact",
        desc: "examcell@college.edu · Ext 310 · Block A Admin",
        tag: "Contact",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      }
    ]
  },
  {
    id: "econtent",
    theme: "sc-t-green",
    cardIcon: "fa-solid fa-laptop-file",
    stripe: "linear-gradient(90deg, #2D8659, #1B7B7D)",
    badge: "LMS Live",
    title: "E-Content / LMS",
    subtitle: "Online learning & course platforms",
    btnLabel: "Launch E-Learning",
    btnIcon: "fa-solid fa-arrow-up-right-from-square",
    accentColor: "#2D8659",
    accentBg: "rgba(45,134,89,0.1)",
    items: [
      {
        icon: "fa-solid fa-table-columns",
        label: "LMS – Moodle Portal",
        desc: "Course materials, assignments, quizzes & grade tracking",
        tag: "Login",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-brands fa-google",
        label: "Google Classroom",
        desc: "Class-wise assignments, announcements & shared files",
        tag: "G-Suite",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-circle-play",
        label: "NPTEL Video Lectures",
        desc: "Free IIT/IISc video courses by subject & department",
        tag: "Free",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-book-bookmark",
        label: "SWAYAM Platform",
        desc: "MOOCs eligible for academic credit transfer",
        tag: "Credits",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      },
      {
        icon: "fa-solid fa-link",
        label: "Department Resource Hub",
        desc: "Subject-wise notes, past papers & curated reading lists",
        tag: "Shared",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      }
    ]
  },
  {
    id: "placement",
    theme: "sc-t-gold",
    cardIcon: "fa-solid fa-briefcase",
    stripe: "linear-gradient(90deg, #c48a44, #7D1F3B)",
    badge: "95% Placed",
    title: "Placement Cell",
    subtitle: "Career guidance & campus recruitment",
    btnLabel: "Explore Placements",
    btnIcon: "fa-solid fa-arrow-up-right-from-square",
    accentColor: "#a57030",
    accentBg: "rgba(212,165,116,0.15)",
    items: [
      {
        icon: "fa-solid fa-list-check",
        label: "Placement Process",
        desc: "Registration steps, eligibility criteria & offer letter flow",
        tag: "Guide",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-brain",
        label: "Aptitude & Technical Training",
        desc: "Mock tests, quant, verbal, logical reasoning sessions",
        tag: "Enroll",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-microphone-lines",
        label: "Soft Skills & HR Rounds",
        desc: "GD practice, mock interviews, communication workshops",
        tag: "Workshop",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-solid fa-chart-pie",
        label: "Placement Statistics 2024",
        desc: "Company-wise list, CTC offered & branch-wise data",
        tag: "PDF",
        tagBg: "rgba(212,165,116,0.18)",
        tagColor: "#a57030"
      },
      {
        icon: "fa-solid fa-envelope",
        label: "Contact Placement Officer",
        desc: "placement@college.edu · Ext 204 · Block C, Room 12",
        tag: "Contact",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      }
    ]
  },
  {
    id: "scholarship",
    theme: "sc-t-teal2",
    cardIcon: "fa-solid fa-award",
    stripe: "linear-gradient(90deg, #1B7B7D, #43b97f)",
    badge: "Apply Now",
    title: "Scholarships",
    subtitle: "Financial aid & merit-based support",
    btnLabel: "Check Eligibility",
    btnIcon: "fa-solid fa-circle-check",
    accentColor: "#1B7B7D",
    accentBg: "rgba(27,123,125,0.1)",
    items: [
      {
        icon: "fa-solid fa-landmark",
        label: "Govt Scholarships – SC/ST/OBC",
        desc: "National & state portal links with eligibility criteria",
        tag: "Govt",
        tagBg: "rgba(1,30,68,0.1)",
        tagColor: "#011e44"
      },
      {
        icon: "fa-solid fa-star",
        label: "Merit-Based Scholarships",
        desc: "College merit awards for academic excellence",
        tag: "Merit",
        tagBg: "rgba(125,31,59,0.1)",
        tagColor: "#7D1F3B"
      },
      {
        icon: "fa-solid fa-hand-holding-dollar",
        label: "Private & Trust Scholarships",
        desc: "Industry-backed, NGO & foundation scholarship schemes",
        tag: "Apply",
        tagBg: "rgba(45,134,89,0.1)",
        tagColor: "#2D8659"
      },
      {
        icon: "fa-solid fa-file-lines",
        label: "Application Procedure",
        desc: "Required documents, step-by-step guide & deadlines",
        tag: "PDF",
        tagBg: "rgba(27,123,125,0.1)",
        tagColor: "#1B7B7D"
      },
      {
        icon: "fa-solid fa-circle-question",
        label: "Scholarship Helpdesk",
        desc: "scholarships@college.edu · Ext 180 · Admin Block",
        tag: "Support",
        tagBg: "rgba(212,165,116,0.18)",
        tagColor: "#a57030"
      }
    ]
  }
];

let student_corner_stats= [
    { value: 54, prefix:"",suffix: "K+", label: "Active Students" },
    { value: 200,  prefix:"", suffix: "+", label: "Clubs & Societies"     },
    { value: 50, prefix:"₹", suffix: "Cr+", label: "Scholarships Given"       },
    { value: 95, prefix:"", suffix: "%",  label: "Placement Rate"      }
  ]


function research_renderStats() {
  document.getElementById('research-hero-stats').innerHTML =
    student_corner_stats.map(s => `
      <div class="research-stat-card">
      
        <span class="research-stat-number" data-prefix="${s.prefix}" data-target="${s.value}" data-suffix="${s.suffix}">0</span>
        <span class="research-stat-label">${s.label}</span>
      </div>`).join('');
}

/* ─── COUNTER ANIMATION ─── */
function research_runCounters() {
  document.querySelectorAll('.research-stat-number[data-target]').forEach(el => {
    const target = +el.dataset.target, suffix = el.dataset.suffix || '', prefix = el.dataset.prefix || '';
    const step = target / (2000 / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = (cur >= target ? prefix : '')+ Math.floor(cur) + (cur >= target ? suffix : '');
      if (cur >= target) clearInterval(t);
    }, 16);
  });}
const research_statsIO = new IntersectionObserver(e => {
  if (e[0].isIntersecting) { setTimeout(research_runCounters, 500); research_statsIO.disconnect(); }
}, { threshold: 0.5 });
const research_statsEl = document.getElementById('research-hero-stats');
if (research_statsEl) research_statsIO.observe(research_statsEl);

/* ─── RENDER CARDS ─── */
function scRenderCards() {
    research_renderStats()
  const grid = document.getElementById('student-grid');
  grid.innerHTML = SC_DATA.map(c => `
    <div class="student-card ${c.theme}">
      <div class="student-card-stripe" style="background:${c.stripe}"></div>
      <div class="student-card-header">
        <div class="student-card-icon">
          <i class="${c.cardIcon}"></i>
        </div>
        <div class="student-card-info">
          <h3>${c.title}</h3>
          <p>${c.subtitle}</p>
        </div>
        <span class="student-card-badge">${c.badge}</span>
      </div>
      
      <div class="student-card-footer">
        <button class="student-card-btn" onclick="scOpenModal('${c.id}')">
          ${c.btnLabel}
          <i class="${c.btnIcon}"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/* ─── MODAL ─── */
function scOpenModal(id) {
  const d = SC_DATA.find(c => c.id === id);
  if (!d) return;

  document.getElementById('sc-m-stripe').style.background = d.stripe;

  const iconEl = document.getElementById('sc-m-icon');
  iconEl.style.background = d.accentBg;
  iconEl.style.color = d.accentColor;
  iconEl.innerHTML = `<i class="${d.cardIcon}"></i>`;

  document.getElementById('sc-m-title').textContent = d.title;
  document.getElementById('sc-m-sub').textContent = d.subtitle;

  document.getElementById('sc-m-list').innerHTML = d.items.map(item => `
    <a href="#" class="student-modal-item" onclick="return false;">
      <div class="student-modal-item-icon" style="background:${item.tagBg};color:${item.tagColor}">
        <i class="${item.icon}"></i>
      </div>
      <div class="student-modal-item-body">
        <span>${item.label}</span>
        <small>${item.desc}</small>
      </div>
      <span class="student-modal-item-tag" style="background:${item.tagBg};color:${item.tagColor}">${item.tag}</span>
      <span class="student-modal-item-arr"><i class="fa-solid fa-chevron-right"></i></span>
    </a>
  `).join('');

  document.getElementById('student-overlay').classList.add('open');
}

function scClose() {
  document.getElementById('student-overlay').classList.remove('open');
}
function scCloseOutside(e) {
  if (e.target === document.getElementById('student-overlay')) scClose();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') scClose(); });

/* ─── INIT ─── */
scRenderCards();
