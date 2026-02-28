const ADMISSION_DATA = {

  /* ── HERO ── */
  hero: {
    badge: { icon: "fas fa-star", text: "Admissions Open 2025–26" },
    titleHtml: "Begin Your Journey<br>Towards a <em>Brighter</em><br>Tomorrow",
    description: "SRM Trichy Arts and Science welcomes ambitious minds. Explore our comprehensive programmes and take the first step towards an extraordinary academic career.",
    buttons: [
      { label: "Apply Online",  href: "#admission-apply",   icon: "fas fa-edit",        style: "primary" },
      { label: "How to Apply",  href: "#admission-process", icon: "fas fa-play-circle",  style: "outline" }
    ],
    stats: [
      { num: "52K+",     label: "Students Enrolled" },
      { num: "200+",     label: "Programmes Offered" },
      { num: "NAAC A++", label: "Accreditation" },
      { num: "₹50Cr+",   label: "Scholarships Awarded" }
    ],
    quickNavTitle: "Quick <span>Navigation</span>",
    quickLinks: [
      { icon: "fas fa-list-ol",    bg: "rgba(125,31,59,0.15)",  color: "#e07090", label: "Admission Process",  sub: "Step-by-step guide",   href: "#admission-process" },
      { icon: "fas fa-user-check", bg: "rgba(27,123,125,0.15)", color: "#5cc8ca", label: "Eligibility Criteria",sub: "UG, PG & PhD",         href: "#admission-eligibility" },
      { icon: "fas fa-rupee-sign", bg: "rgba(212,165,116,0.15)",color: "#D4A574", label: "Fee Structure",      sub: "Annual fee details",   href: "#admission-fees" },
      { icon: "fas fa-folder-open",bg: "rgba(45,134,89,0.15)",  color: "#5ecc8c", label: "Documents Required", sub: "Checklist & download", href: "#admission-documents" },
      { icon: "fas fa-medal",      bg: "rgba(212,165,116,0.15)",color: "#D4A574", label: "Scholarships",       sub: "Fee concession details",href: "#admission-scholarships" }
    ]
  },

  /* ── ADMISSION PROCESS ── */
  process: {
    tag:      { icon: "fas fa-list-ol", text: "Step by Step" },
    title:    "Admission <span class='admission-accent'>Process</span>",
    subtitle: "Follow these six clear steps to complete your application and secure your seat at SRM IST.",
    steps: [
      {
        num: "01", color: "linear-gradient(135deg,#7D1F3B,#1B7B7D)",
        accentColor: "#7D1F3B", tagBg: "rgba(125,31,59,0.08)", tagColor: "#7D1F3B",
        tag: "Register",
        icon: "fas fa-user-plus", iconColor: "#7D1F3B",
        title: "Create Your Account",
        text: "Visit the official SRM IST admissions portal and register with a valid email address and mobile number. You will receive login credentials to access your application dashboard.",
        bullets: []
      },
      {
        num: "02", color: "linear-gradient(135deg,#2D8659,#1B7B7D)",
        accentColor: "#1B7B7D", tagBg: "rgba(27,123,125,0.08)", tagColor: "#1B7B7D",
        tag: "Application",
        icon: "fas fa-file-alt", iconColor: "#1B7B7D",
        title: "Fill Application Form",
        text: "Complete the online application form with personal, academic, and programme preferences. Ensure all details match your original documents before submission.",
        bullets: []
      },
      {
        num: "03", color: "linear-gradient(135deg,#2D8659,#1B7B7D)",
        accentColor: "#2D8659", tagBg: "rgba(45,134,89,0.08)", tagColor: "#2D8659",
        tag: "Documents",
        icon: "fas fa-upload", iconColor: "#2D8659",
        title: "Upload Documents",
        text: "Upload scanned copies of all required documents including mark sheets, certificates, photo, and ID proof in the prescribed format (JPEG/PDF, max 2 MB each).",
        bullets: []
      },
      {
        num: "04", color: "linear-gradient(135deg,#D4A574,#c7844e)",
        accentColor: "#D4A574", tagBg: "rgba(212,165,116,0.15)", tagColor: "#a0622a",
        tag: "Payment",
        icon: "fas fa-credit-card", iconColor: "#a0622a",
        title: "Pay Application Fee",
        text: "Pay the non-refundable application fee of <strong>₹1,100/-</strong> online via Net Banking, Credit/Debit Card, or UPI. Download the payment receipt for your records.",
        bullets: []
      },
      {
        num: "05", color: "linear-gradient(135deg,#5A1529,#7D1F3B)",
        accentColor: "#5A1529", tagBg: "rgba(90,21,41,0.08)", tagColor: "#5A1529",
        tag: "Entrance / Merit",
        icon: "fas fa-pencil-alt", iconColor: "#5A1529",
        title: "SRMJEEE / JEE / NEET / Merit",
        text: "Appear for SRMJEEE (online) or submit valid scores of JEE Main, NEET, or other national entrance tests applicable to your chosen programme.",
        bullets: [
          "SRMJEEE – Online (Physics, Chemistry, Maths / Biology)",
          "Lateral Entry – Based on diploma / degree marks",
          "PG & PhD – Written test + interview"
        ]
      },
      {
        num: "06", color: "linear-gradient(135deg,#0F5456,#1B7B7D)",
        accentColor: "#0F5456", tagBg: "rgba(15,84,86,0.08)", tagColor: "#0F5456",
        tag: "Enrolment",
        icon: "fas fa-graduation-cap", iconColor: "#0F5456",
        title: "Counselling & Seat Allotment",
        text: "Attend online/offline counselling, select your programme and campus, pay the confirmation fee, and complete physical document verification to confirm your admission.",
        bullets: []
      }
    ]
  },

  /* ── ELIGIBILITY ── */
  eligibility: {
    tag:      { icon: "fas fa-user-check", text: "Who Can Apply" },
    title:    "Eligibility <span class='admission-accent'>Criteria</span>",
    subtitle: "Check the minimum qualification requirements for each programme category below.",
    tabs: [
      {
        id: "ug", label: "Undergraduate (UG)",
        cards: [
          {
            theme: "maroon", icon: "fas fa-microchip",
            title: "B.Tech – Engineering",
            points: ["10+2 or equivalent with PCM (Physics, Chemistry, Maths)","Minimum 60% aggregate in PCM","Valid SRMJEEE / JEE Main score","Age: 17–22 years as on 31 July 2025"]
          },
          {
            theme: "teal", icon: "fas fa-heartbeat",
            title: "MBBS / BDS / B.Pharm",
            points: ["10+2 with Physics, Chemistry & Biology (PCB)","Minimum 50% aggregate in PCB (60% for NRI/OCI)","Valid NEET score mandatory","Age: minimum 17 years"]
          },
          {
            theme: "green", icon: "fas fa-landmark",
            title: "BA / BBA / B.Com / BCA",
            points: ["10+2 or equivalent in any stream","Minimum 50% aggregate marks","English as a compulsory subject","Admission based on merit / aptitude test"]
          }
        ]
      },
      {
        id: "pg", label: "Postgraduate (PG)",
        cards: [
          {
            theme: "maroon", icon: "fas fa-code",
            title: "M.Tech – Engineering",
            points: ["B.Tech / BE in relevant discipline","Minimum 60% aggregate or CGPA 6.5/10","Valid GATE score preferred"]
          },
          {
            theme: "teal", icon: "fas fa-briefcase",
            title: "MBA",
            points: ["Any Bachelor's degree (3 years minimum)","Minimum 50% aggregate","CAT / MAT / XAT / CMAT scores accepted"]
          },
          {
            theme: "green", icon: "fas fa-flask",
            title: "M.Sc – Sciences",
            points: ["B.Sc in relevant specialisation","Minimum 55% aggregate","Entrance test + interview"]
          }
        ]
      },
      {
        id: "phd", label: "Doctoral (PhD)",
        cards: [
          {
            theme: "maroon", icon: "fas fa-microscope",
            title: "Full-Time PhD",
            points: ["Master's degree in relevant discipline","Minimum 55% aggregate or CGPA 5.5/10","Qualified NET / GATE or SRM Research Entrance Test","Research proposal + interview mandatory"]
          },
          {
            theme: "teal", icon: "fas fa-clock",
            title: "Part-Time / Sponsored PhD",
            points: ["Master's degree + minimum 2 years work experience","NOC from current employer required","Research Entrance Test + interview"]
          }
        ]
      },
      {
        id: "lateral", label: "Lateral Entry",
        cards: [
          {
            theme: "maroon", icon: "fas fa-tools",
            title: "Lateral Entry – B.Tech (2nd Year)",
            points: ["Diploma in Engineering (3 years) from state board","Minimum 60% aggregate in diploma","Relevant branch matching B.Tech programme"]
          },
          {
            theme: "teal", icon: "fas fa-laptop-code",
            title: "Lateral Entry – BCA / B.Sc (2nd Year)",
            points: ["PGDCA or B.Sc (CS/IT) first year pass","Minimum 55% aggregate","Based on merit — no entrance test required"]
          }
        ]
      }
    ]
  },

  /* ── FEES ── */
  fees: {
    tag:      { icon: "fas fa-rupee-sign", text: "Fee Structure" },
    title:    "Annual <span class='admission-accent'>Fee Details</span>",
    subtitle: "Transparent fee breakdown for all programmes. All amounts in INR per annum.",
    filters:  ["All Programmes","UG","PG","PhD"],
    note:     "Fees are indicative and subject to revision. Hostel & mess charges are additional (approx. ₹1,20,000–₹1,80,000/year). Refer to the official fee notification for final amounts.",
    columns:  ["Programme","Specialisation","Level","Tuition Fee","Other Fees","Total / Year"],
    rows: [
      { prog: "B.Tech",     spec: "CSE / AI & ML / Data Science",        level: "ug",  tuition: "₹2,80,000", other: "₹35,000", total: "₹3,15,000" },
      { prog: "B.Tech",     spec: "Mechanical / Civil / EEE",             level: "ug",  tuition: "₹2,20,000", other: "₹30,000", total: "₹2,50,000" },
      { prog: "MBBS",       spec: "General Medicine",                     level: "ug",  tuition: "₹22,00,000",other: "₹1,50,000",total: "₹23,50,000"},
      { prog: "BDS",        spec: "Dental Surgery",                       level: "ug",  tuition: "₹8,50,000", other: "₹80,000", total: "₹9,30,000" },
      { prog: "BBA / B.Com",spec: "Business & Commerce",                  level: "ug",  tuition: "₹1,20,000", other: "₹20,000", total: "₹1,40,000" },
      { prog: "BCA",        spec: "Computer Applications",                level: "ug",  tuition: "₹1,50,000", other: "₹25,000", total: "₹1,75,000" },
      { prog: "M.Tech",     spec: "CSE / VLSI / Artificial Intelligence", level: "pg",  tuition: "₹1,80,000", other: "₹25,000", total: "₹2,05,000" },
      { prog: "MBA",        spec: "Business Administration",              level: "pg",  tuition: "₹2,50,000", other: "₹30,000", total: "₹2,80,000" },
      { prog: "M.Sc",       spec: "Physics / Chemistry / Biology",        level: "pg",  tuition: "₹90,000",   other: "₹15,000", total: "₹1,05,000" },
      { prog: "MCA",        spec: "Computer Applications",                level: "pg",  tuition: "₹1,20,000", other: "₹20,000", total: "₹1,40,000" },
      { prog: "PhD",        spec: "Engineering & Technology",             level: "phd", tuition: "₹75,000",   other: "₹15,000", total: "₹90,000"  },
      { prog: "PhD",        spec: "Sciences / Humanities",                level: "phd", tuition: "₹60,000",   other: "₹12,000", total: "₹72,000"  }
    ]
  },

  /* ── DOCUMENTS ── */
  documents: {
    tag:      { icon: "fas fa-folder-open", text: "Documents" },
    title:    "Documents <span class='admission-accent'>Required</span>",
    subtitle: "Prepare all documents in advance to ensure a smooth application and verification process.",
    items: [
      { icon: "fas fa-id-card",     theme: "maroon", title: "10th Mark Sheet & Certificate",   desc: "State Board / CBSE / ICSE passing certificate and mark sheet",               req: "Required" },
      { icon: "fas fa-file-alt",    theme: "teal",   title: "12th / Diploma Mark Sheet",        desc: "All semester/year mark sheets from the qualifying examination",              req: "Required" },
      { icon: "fas fa-scroll",      theme: "green",  title: "Transfer Certificate (TC)",        desc: "From the last attended school or college, duly attested",                   req: "Required" },
      { icon: "fas fa-passport",    theme: "maroon", title: "Government Photo ID",              desc: "Aadhaar / Passport / Voter ID / Driving Licence (any one)",                 req: "Required" },
      { icon: "fas fa-camera",      theme: "teal",   title: "Passport Size Photographs",        desc: "Recent colour photos (white background), 6 copies + digital (JPG ≤ 50 KB)", req: "Required" },
      { icon: "fas fa-star",        theme: "gold",   title: "Entrance Score Card",              desc: "SRMJEEE / JEE Main / NEET / GATE score card as applicable",                 req: "Required" },
      { icon: "fas fa-tags",        theme: "green",  title: "Caste / Category Certificate",     desc: "SC / ST / OBC / EWS certificate from competent authority (for reservation)", req: "If Applicable" },
      { icon: "fas fa-shield-alt",  theme: "maroon", title: "Sports / NCC Certificate",         desc: "Achievement certificates for merit/scholarship under sports or activity quota",req: "If Applicable"},
      { icon: "fas fa-globe",       theme: "teal",   title: "NRI / OCI / PIO Documents",        desc: "Passport copy and relevant NRI/OCI certificates for international applicants", req: "If Applicable"},
      { icon: "fas fa-university",  theme: "gold",   title: "Degree / Provisional Certificate", desc: "For PG and PhD applicants — bachelor's or master's degree certificate",       req: "PG / PhD" },
      { icon: "fas fa-building",    theme: "green",  title: "Experience Certificate",           desc: "For sponsored/part-time PhD — employer letter and experience certificate",   req: "If Applicable" },
      { icon: "fas fa-file-invoice",theme: "maroon", title: "Migration Certificate",            desc: "From previous university (for PG admissions from another university)",       req: "If Applicable" }
    ],
    downloadCta: {
      title:   "Download Complete Document Checklist",
      desc:    "Print and use this checklist to organise all documents before your counselling date.",
      btnText: "Download Checklist (PDF)",
      btnIcon: "fas fa-download",
      href:    "#"
    }
  },

  /* ── APPLY / PROSPECTUS ── */
  apply: {
    tag:      { icon: "fas fa-edit", text: "Apply Now" },
    title:    "Online Application & <span class='admission-accent'>Prospectus</span>",
    subtitle: "Start your application online or download the complete prospectus for detailed programme information.",
    applyCard: {
      icon:       "fas fa-laptop-code",
      title:      "Apply Online",
      description:"Fill out your application from anywhere, anytime. The entire process — registration to payment — is 100% online and paperless.",
      checklist:  [
        "Register & create your portal login",
        "Fill personal & academic details",
        "Upload required documents",
        "Pay application fee online",
        "Submit & download acknowledgement"
      ],
      btnText: "Start Application",
      btnIcon: "fas fa-arrow-right",
      href: "#"
    },
    prospectusCard: {
      icon:        "fas fa-book-open",
      title:       "Download Prospectus",
      description: "Our official prospectus contains detailed information about all programmes, specialisations, campus facilities, faculty, and placement records.",
      btnText:     "Download Full Prospectus",
      btnIcon:     "fas fa-download",
      href:        "#",
      files: [
        { icon: "fas fa-file-pdf", title: "SRM IST Prospectus 2025–26",        desc: "All programmes (PDF, 18 MB)",         href: "#" },
        { icon: "fas fa-file-pdf", title: "B.Tech & Engineering Brochure",      desc: "UG Engineering (PDF, 6 MB)",          href: "#" },
        { icon: "fas fa-file-pdf", title: "Medical & Health Sciences",          desc: "MBBS, BDS, Pharma (PDF, 5 MB)",       href: "#" },
        { icon: "fas fa-file-pdf", title: "PG & Doctoral Programmes",           desc: "M.Tech, MBA, M.Sc, PhD (PDF, 7 MB)", href: "#" }
      ]
    }
  },

  /* ── SCHOLARSHIPS ── */
  scholarships: {
    tag:      { icon: "fas fa-medal", text: "Financial Support" },
    title:    "Scholarships & <span class='admission-accent'>Fee Concessions</span>",
    subtitle: "SRM IST offers generous scholarships to reward academic excellence, talent, and need-based support.",
    cards: [
      { theme:"gold",   icon:"fas fa-trophy",   pct:"100%",     title:"Chancellor's Excellence Scholarship",   desc:"Full tuition waiver for JEE Advanced Top 500 or state toppers with 95%+ in 12th Board.", badge:"Merit Based" },
      { theme:"teal",   icon:"fas fa-star",      pct:"75%",      title:"Vice Chancellor's Merit Scholarship",   desc:"For students with 90%+ in 12th or SRMJEEE rank within top 500. Renewable with 8.0+ CGPA.", badge:"Merit Based" },
      { theme:"green",  icon:"fas fa-book",      pct:"50%",      title:"Academic Achievement Scholarship",      desc:"For students scoring 85–89% in 12th or SRMJEEE rank 501–2000. Continued with 7.5+ CGPA.", badge:"Merit Based" },
      { theme:"maroon", icon:"fas fa-heart",     pct:"50%",      title:"Need-Based Financial Aid",              desc:"For economically weaker sections with annual family income below ₹2.5 lakh.", badge:"Need Based" },
      { theme:"teal",   icon:"fas fa-running",   pct:"25–50%",   title:"Sports Excellence Scholarship",        desc:"For national / international level sports achievers. Certificate from recognised sports body required.", badge:"Sports Quota" },
      { theme:"gold",   icon:"fas fa-users",     pct:"25%",      title:"Sibling / Alumni Concession",          desc:"Concession for siblings of current SRM students or children of SRM alumni.", badge:"Loyalty" },
      { theme:"green",  icon:"fas fa-flag",      pct:"100%",     title:"Defence / Ex-Servicemen Ward",         desc:"Full tuition waiver for wards of serving defence personnel or martyrs. Valid MoD ID required.", badge:"Special Category" },
      { theme:"maroon", icon:"fas fa-landmark",  pct:"Varies",   title:"Govt. & External Scholarships",        desc:"SRM IST facilitates NSP, PFMS, Tamil Nadu Government, and corporate CSR scholarship applications.", badge:"External" }
    ],
    processTitle: "How to Apply for a Scholarship",
    processTitleIcon: "fas fa-route",
    processSteps: [
      { icon: "fas fa-edit",   title: "Apply Online",        desc: "Fill the scholarship form within the admissions portal during registration" },
      { icon: "fas fa-upload", title: "Upload Proofs",        desc: "Submit marks, income certificate, or achievement documents as required" },
      { icon: "fas fa-search", title: "Verification",         desc: "Scholarship committee reviews and verifies submitted credentials" },
      { icon: "fas fa-bell",   title: "Award Notification",   desc: "Approval communicated via email and portal within 15 working days" }
    ]
  },

  /* ── FOOTER CTA ── */
  footerCta: {
    titleHtml:   "Ready to <em>Shape Your Future?</em>",
    description: "Applications for 2025–26 are now open. Join a community of over 52,000 students across our campuses and take the first step today.",
    buttons: [
      { label: "Apply Now",       href: "#",                 icon: "fas fa-edit",      style: "gold" },
      { label: "1800-102-3477",   href: "tel:18001023477",   icon: "fas fa-phone-alt", style: "outline" }
    ]
  }

}; 
const ADMISSION_THEME = {
  maroon: { border:"var(--gradient-primary)", iconBg:"rgba(125,31,59,0.08)", iconColor:"var(--primary-maroon)", headColor:"var(--primary-maroon)", checkColor:"var(--primary-maroon)" },
  teal:   { border:"var(--gradient-secondary)", iconBg:"rgba(27,123,125,0.08)", iconColor:"var(--primary-teal)", headColor:"var(--primary-teal)", checkColor:"var(--primary-teal)" },
  green:  { border:"linear-gradient(135deg,#2D8659,#1B7B7D)", iconBg:"rgba(45,134,89,0.08)", iconColor:"var(--primary-green)", headColor:"var(--primary-green)", checkColor:"var(--primary-green)" },
  gold:   { border:"linear-gradient(135deg,#D4A574,#c7844e)", iconBg:"rgba(212,165,116,0.14)", iconColor:"#a0622a", headColor:"#a0622a", checkColor:"#a0622a" }
};

const ADMISSION_SCHOLAR_THEME = {
  gold:   { iconBg:"rgba(212,165,116,0.15)", iconColor:"var(--accent-gold)", pctColor:"var(--accent-gold)",  badgeBg:"rgba(212,165,116,0.14)", badgeColor:"var(--accent-gold)" },
  teal:   { iconBg:"rgba(27,123,125,0.15)",  iconColor:"#5cc8ca",            pctColor:"#5cc8ca",              badgeBg:"rgba(27,123,125,0.14)", badgeColor:"#5cc8ca" },
  green:  { iconBg:"rgba(45,134,89,0.15)",   iconColor:"#5ecc8c",            pctColor:"#5ecc8c",              badgeBg:"rgba(45,134,89,0.14)", badgeColor:"#5ecc8c" },
  maroon: { iconBg:"rgba(125,31,59,0.2)",    iconColor:"#e07090",            pctColor:"#e07090",              badgeBg:"rgba(125,31,59,0.14)", badgeColor:"#e07090" }
};


function admissionSectionHeader(tag, title, subtitle) {
  return `<div class="admission-section-header">
    <div class="admission-section-tag"><i class="${tag.icon}"></i>&nbsp; ${tag.text}</div>
    <h2 class="admission-section-title">${title}</h2>
    <p class="admission-section-subtitle">${subtitle}</p>
    <div class="admission-divider"></div>
  </div>`;
}




(function buildHero() {
  const h = ADMISSION_DATA.hero;
  // Left
  document.getElementById('admissionHeroLeft').innerHTML = `
    <div class="admission-hero-badge"><i class="${h.badge.icon}"></i> ${h.badge.text}</div>
    <h1 class="admission-hero-title">${h.titleHtml}</h1>
    <p class="admission-hero-desc">${h.description}</p>
    <div class="admission-hero-actions">
      ${h.buttons.map(b => `<a href="${b.href}" class="btn btn-${b.style}"><i class="${b.icon}"></i> ${b.label}</a>`).join('')}
    </div>
    <div class="admission-hero-stats">
      ${h.stats.map(s => `<div class="admission-hero-stat"><div class="admission-hero-stat-num">${s.num}</div><div class="admission-hero-stat-label">${s.label}</div></div>`).join('')}
    </div>`;
  // Right card
  document.getElementById('admissionHeroCard').innerHTML = `
    <div class="admission-hero-card">
      <div class="admission-hero-card-title">${h.quickNavTitle}</div>
      ${h.quickLinks.map(l => `
        <a href="${l.href}" class="admission-quick-link">
          <div class="admission-quick-link-icon" style="background:${l.bg};color:${l.color};"><i class="${l.icon}"></i></div>
          <div class="admission-quick-link-text"><strong>${l.label}</strong><span>${l.sub}</span></div>
          <i class="fas fa-chevron-right admission-quick-link-arrow"></i>
        </a>`).join('')}
    </div>`;
})();


(function buildProcess() {
  const p = ADMISSION_DATA.process;
  const stepsHtml = p.steps.map(s => `
    <div class="admission-step">
      <div class="admission-step-num" style="background:${s.color};">${s.num}</div>
      <div class="admission-step-body" style="--step-accent:${s.accentColor};">
        <style>.admission-step-body[style*='${s.accentColor}']::before{background:${s.accentColor};}</style>
        <span class="admission-step-tag" style="background:${s.tagBg};color:${s.tagColor};">${s.tag}</span>
        <h3><i class="${s.icon}" style="color:${s.iconColor};margin-right:7px;"></i>${s.title}</h3>
        <p>${s.text}</p>
        ${s.bullets.length ? `<ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    </div>`).join('');
  document.getElementById('admissionProcessSection').innerHTML =
    admissionSectionHeader(p.tag, p.title, p.subtitle) +
    `<div class="admission-steps-list"><div class="admission-steps-list-line"></div>${stepsHtml}</div>`;
})();


(function buildEligibility() {
  const e = ADMISSION_DATA.eligibility;
  const tabBtns = e.tabs.map((t,i) =>
    `<button class="admission-tab${i===0?' admission-tab--active':''}" data-tab="${t.id}">${t.label}</button>`).join('');
  const tabPanels = e.tabs.map((t,i) => {
    const cards = t.cards.map(c => {
      const th = ADMISSION_THEME[c.theme];
      return `<div class="admission-eli-card" style="--eli-border:${th.border};">
        <style>.admission-eli-card:has(.admission-eli-card-icon[data-theme="${c.theme}-${t.id}-${c.title.slice(0,5)}"]) { }
        </style>
        <div class="admission-eli-card-icon" style="background:${th.iconBg};color:${th.iconColor};"><i class="${c.icon}"></i></div>
        <h4 style="color:${th.headColor};">${c.title}</h4>
        ${c.points.map(pt=>`<div class="admission-eli-item"><i class="fas fa-check-circle" style="color:${th.checkColor};"></i><span>${pt}</span></div>`).join('')}
      </div>`;
    }).join('');
    // inject the ::after gradient via inline style trick
    const cardsWithBorder = t.cards.map(c => {
      const th = ADMISSION_THEME[c.theme];
      return `<div class="admission-eli-card" style="position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${th.border};border-radius:4px 4px 0 0;"></div>
        <div class="admission-eli-card-icon" style="background:${th.iconBg};color:${th.iconColor};margin-top:12px;"><i class="${c.icon}"></i></div>
        <h4 style="color:${th.headColor};">${c.title}</h4>
        ${c.points.map(pt=>`<div class="admission-eli-item"><i class="fas fa-check-circle" style="color:${th.checkColor};"></i><span>${pt}</span></div>`).join('')}
      </div>`;
    }).join('');
    return `<div class="admission-tab-panel${i===0?' admission-tab-panel--active':''}" id="admission-tab-${t.id}">
      <div class="admission-eligibility-grid">${cardsWithBorder}</div>
    </div>`;
  }).join('');
  document.getElementById('admissionEligibilitySection').innerHTML =
    admissionSectionHeader(e.tag, e.title, e.subtitle) +
    `<div class="admission-tabs">${tabBtns}</div>${tabPanels}`;
})();


(function buildFees() {
  const f = ADMISSION_DATA.fees;
  const levelLabel = { ug:'UG', pg:'PG', phd:'PhD' };
  const levelClass = { ug:'admission-fee-badge--ug', pg:'admission-fee-badge--pg', phd:'admission-fee-badge--phd' };
  const filters = f.filters.map((fl,i) =>
    `<button class="admission-fee-filter${i===0?' admission-fee-filter--active':''}" data-fee="${fl==='All Programmes'?'all':fl.toLowerCase()}">${fl}</button>`).join('');
  const thead = `<thead><tr>${f.columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead>`;
  const tbody = `<tbody>${f.rows.map(r=>`<tr data-level="${r.level}">
    <td><strong style="color:var(--white);">${r.prog}</strong></td>
    <td>${r.spec}</td>
    <td><span class="admission-fee-badge ${levelClass[r.level]}">${levelLabel[r.level]}</span></td>
    <td>${r.tuition}</td><td>${r.other}</td>
    <td class="admission-fee-amount">${r.total}</td>
  </tr>`).join('')}</tbody>`;
  document.getElementById('admissionFeesSection').innerHTML =
    admissionSectionHeader(f.tag, f.title, f.subtitle) +
    `<div class="admission-fee-filters">${filters}</div>
    <div class="admission-fee-table-wrap"><table class="admission-fee-table" id="admissionFeeTable">${thead}${tbody}</table></div>
    <p class="admission-fee-note"><i class="fas fa-info-circle"></i> ${f.note}</p>`;
})();


(function buildDocs() {
  const d = ADMISSION_DATA.documents;
  const iconTheme = { maroon:'rgba(125,31,59,0.08)|var(--primary-maroon)', teal:'rgba(27,123,125,0.08)|var(--primary-teal)', green:'rgba(45,134,89,0.08)|var(--primary-green)', gold:'rgba(212,165,116,0.14)|#a0622a' };
  const isRequired = r => r === 'Required';
  const cards = d.items.map(item => {
    const [bg, color] = iconTheme[item.theme].split('|');
    return `<div class="admission-doc-card">
      <div class="admission-doc-icon" style="background:${bg};color:${color};"><i class="${item.icon}"></i></div>
      <div class="admission-doc-body"><h4>${item.title}</h4><p>${item.desc}</p></div>
      <span class="admission-doc-required ${isRequired(item.req)?'admission-doc-required--yes':'admission-doc-required--opt'}">${item.req}</span>
    </div>`;
  }).join('');
  const cta = d.downloadCta;
  document.getElementById('admissionDocsSection').innerHTML =
    admissionSectionHeader(d.tag, d.title, d.subtitle) +
    `<div class="admission-docs-grid">${cards}</div>
    <div class="admission-docs-cta">
      <div><h3>${cta.title}</h3><p>${cta.desc}</p></div>
      <a href="${cta.href}" class="admission-btn admission-btn--gold"><i class="${cta.btnIcon}"></i> ${cta.btnText}</a>
    </div>`;
})();


(function buildApply() {
  const a = ADMISSION_DATA.apply;
  const ac = a.applyCard, pc = a.prospectusCard;
  const primaryCard = `<div class="admission-apply-card admission-apply-card--primary">
    <div class="admission-apply-card-icon"><i class="${ac.icon}"></i></div>
    <h3>${ac.title}</h3><p>${ac.description}</p>
    <ul class="admission-apply-checklist">
      ${ac.checklist.map(item=>`<li><i class="fas fa-check"></i> ${item}</li>`).join('')}
    </ul>
    <a href="${ac.href}" class="admission-btn admission-btn--white"><i class="${ac.btnIcon}"></i> ${ac.btnText}</a>
    <div class="admission-apply-card-deco"></div><div class="admission-apply-card-deco-2"></div>
  </div>`;
  const files = pc.files.map(f=>`
    <a href="${f.href}" class="admission-prospectus-item">
      <div class="admission-prospectus-item-left"><i class="${f.icon}"></i><div><strong>${f.title}</strong><span>${f.desc}</span></div></div>
      <i class="fas fa-download admission-prospectus-item-arrow"></i>
    </a>`).join('');
  const secondaryCard = `<div class="admission-apply-card admission-apply-card--secondary">
    <div class="admission-apply-card-icon"><i class="${pc.icon}"></i></div>
    <h3>${pc.title}</h3><p>${pc.description}</p>
    <a href="${pc.href}" class="admission-btn admission-btn--teal" style="margin-bottom:6px;"><i class="${pc.btnIcon}"></i> ${pc.btnText}</a>
    <div class="admission-prospectus-list">${files}</div>
  </div>`;
  document.getElementById('admissionApplySection').innerHTML =
    admissionSectionHeader(a.tag, a.title, a.subtitle) +
    `<div class="admission-apply-grid">${primaryCard}${secondaryCard}</div>`;
})();


(function buildScholarships() {
  const s = ADMISSION_DATA.scholarships;
  const cards = s.cards.map(c => {
    const th = ADMISSION_SCHOLAR_THEME[c.theme];
    return `<div class="admission-scholar-card">
      <div class="admission-scholar-card-top">
        <div class="admission-scholar-card-icon" style="background:${th.iconBg};color:${th.iconColor};"><i class="${c.icon}"></i></div>
        <div class="admission-scholar-pct" style="color:${th.pctColor};">${c.pct}</div>
      </div>
      <h4 style="color:${th.pctColor};">${c.title}</h4>
      <p style="color:rgba(255,255,255,0.58);">${c.desc}</p>
      <span class="admission-scholar-badge" style="background:${th.badgeBg};color:${th.badgeColor};">${c.badge}</span>
    </div>`;
  }).join('');
  const steps = s.processSteps.map(st=>`
    <div class="admission-scholar-step">
      <div class="admission-scholar-step-icon"><i class="${st.icon}"></i></div>
      <h5>${st.title}</h5><p>${st.desc}</p>
    </div>`).join('');
  document.getElementById('admissionScholarSection').innerHTML =
    admissionSectionHeader(s.tag, s.title, s.subtitle) +
    `<div class="admission-scholar-grid">${cards}</div>
    <div class="admission-scholar-process">
      <h3><i class="${s.processTitleIcon}" style="color:var(--accent-gold);margin-right:10px;"></i>${s.processTitle}</h3>
      <div class="admission-scholar-steps-grid">${steps}</div>
    </div>`;
})();


(function buildFooterCta() {
  const fc = ADMISSION_DATA.footerCta;
  const btns = fc.buttons.map(b =>
    `<a href="${b.href}" class="admission-btn admission-btn--${b.style}"><i class="${b.icon}"></i> ${b.label}</a>`).join('');
  document.getElementById('admissionFooterCta').innerHTML = `
    <div class="admission-footer-cta-inner">
      <h2>${fc.titleHtml}</h2>
      <p>${fc.description}</p>
      <div class="admission-footer-cta-btns">${btns}</div>
    </div>`;
})();


// Nav scroll + active link
// const admissionNav = document.getElementById('admissionNav');
const admissionScrollTopBtn = document.getElementById('admissionScrollTop');
window.addEventListener('scroll', () => {
  admissionScrollTopBtn.classList.toggle('admission-scroll-top--visible', window.scrollY > 400);
//   let current = '';
//   document.querySelectorAll('section[id]').forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
//   document.querySelectorAll('.admission-nav-link').forEach(a => {
//     a.classList.toggle('admission-nav-link--active', a.getAttribute('href') === '#' + current);
//   });
});

// // Hamburger
// document.getElementById('admissionHamburger').addEventListener('click', () => {
//   document.getElementById('admissionNavLinks').classList.toggle('admission-nav-links--open');
// });

// Scroll top
admissionScrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Eligibility tabs (delegated)
document.getElementById('admissionEligibilitySection').addEventListener('click', e => {
  const btn = e.target.closest('.admission-tab');
  if (!btn) return;
  document.querySelectorAll('.admission-tab').forEach(b => b.classList.remove('admission-tab--active'));
  document.querySelectorAll('.admission-tab-panel').forEach(p => p.classList.remove('admission-tab-panel--active'));
  btn.classList.add('admission-tab--active');
  document.getElementById('admission-tab-' + btn.dataset.tab).classList.add('admission-tab-panel--active');
});

// Fee filter (delegated)
document.getElementById('admissionFeesSection').addEventListener('click', e => {
  const btn = e.target.closest('.admission-fee-filter');
  if (!btn) return;
  document.querySelectorAll('.admission-fee-filter').forEach(b => b.classList.remove('admission-fee-filter--active'));
  btn.classList.add('admission-fee-filter--active');
  const level = btn.dataset.fee;
  document.querySelectorAll('#admissionFeeTable tbody tr').forEach(row => {
    row.style.display = (level === 'all' || row.dataset.level === level) ? '' : 'none';
  });
});

// Scroll-trigger animations
const admissionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    setTimeout(() => {
      if (el.classList.contains('admission-step'))         el.classList.add('admission-step--visible');
      if (el.classList.contains('admission-doc-card'))     el.classList.add('admission-doc-card--visible');
      if (el.classList.contains('admission-scholar-card')) el.classList.add('admission-scholar-card--visible');
    }, i * 75);
  });
}, { threshold: 0.1 });

// Observe after render
setTimeout(() => {
  document.querySelectorAll('.admission-step, .admission-doc-card, .admission-scholar-card').forEach(el => admissionObserver.observe(el));
}, 100);