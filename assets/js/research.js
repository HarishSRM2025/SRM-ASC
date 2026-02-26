
const RESEARCH_DATA = {

  /* Hero stats */
  stats: [
    { value: 340, suffix: "+", label: "Publications (2024)" },
    { value: 47,  suffix: "+", label: "Funded Projects"     },
    { value: 62,  suffix: "+", label: "Industry MoUs"       },
    { value: 18,  suffix: "",  label: "Patents Granted"      }
  ],

  /* Research Policies */
  policies: [
    {
      title: "Research Ethics Policy",
      desc:  "Comprehensive guidelines governing ethical conduct, informed consent, data privacy, and responsible research practices for all faculty, students, and collaborators.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    {
      title: "Intellectual Property & Patents",
      desc:  "Clear ownership frameworks for inventions, software, creative works, and data arising from university-affiliated research, including commercialization protocols.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    },
    {
      title: "Funding & Grant Management",
      desc:  "Guidelines for applying, receiving, and managing external research grants from government agencies, international bodies, and industry sponsors.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
    },
    {
      title: "Lab Safety & Biosafety",
      desc:  "Mandatory safety protocols, equipment handling procedures, and biosafety regulations for all laboratory research involving biological, chemical, or radioactive materials.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0H5m4 0h4m6-6v6m0 0h-4m4 0h2"/><path d="M3 9h18M9 21H5a2 2 0 0 1-2-2v-4m6 6h10a2 2 0 0 0 2-2v-4"/></svg>`
    },
    {
      title: "Open Access & Data Sharing",
      desc:  "Policies promoting open dissemination of research findings, datasets, and software to maximise societal impact and comply with funder mandates.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`
    },
    {
      title: "Conflict of Interest Policy",
      desc:  "Transparent disclosure and management procedures for financial interests, personal relationships, or affiliations that may influence research objectivity.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
    }
  ],

  /* Publication filter tabs */
  pubFilters: [
    { label: "All",        value: "all"        },
    { label: "Journals",   value: "journal"    },
    { label: "Conferences",value: "conference" },
    { label: "Books",      value: "book"       }
  ],

  /* Publications */
  publications: [
    {
      category: "journal", label: "Journal",
      title:   "Deep Learning-Based Predictive Analytics for Early Detection of Diabetic Retinopathy",
      authors: "Dr. Priya Subramaniam, Rajan K., Meena S.",
      venue:   "Nature Scientific Reports", year: "2024", extra: "IF: 4.6",
      abstract:"A novel convolutional neural network architecture achieves 94.7% accuracy in grading diabetic retinopathy severity using fundus images from a multi-centre clinical dataset of 18,000 patients.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"DOI"
    },
    {
      category: "conference", label: "Conference",
      title:   "Adaptive Federated Learning for Privacy-Preserving Smart Grid Optimisation",
      authors: "Dr. Arvind Krishnamurthy, Lakshmi V., Sankar P.",
      venue:   "IEEE ICASSP 2024", year: "2024", extra: "Seoul",
      abstract:"A federated learning framework for real-time energy demand forecasting reduces communication overhead by 38% while maintaining accuracy comparable to centralised approaches.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"IEEE Xplore"
    },
    {
      category: "journal", label: "Journal",
      title:   "Nanostructured ZnO-TiO₂ Composite Catalysts for Enhanced Photocatalytic Degradation",
      authors: "Prof. Kamala Devi, Dr. Senthil R.",
      venue:   "Applied Catalysis B", year: "2024", extra: "IF: 22.1",
      abstract:"Novel ZnO-TiO₂ nanocomposites demonstrate a 3.2× improvement in visible-light photocatalytic activity for pharmaceutical micropollutant removal from wastewater streams.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"DOI"
    },
    {
      category: "book", label: "Book",
      title:   "Foundations of Quantum Computing: Algorithms, Circuits & Applications",
      authors: "Dr. Ramesh Natarajan, Dr. Usha Balaji",
      venue:   "Springer Nature", year: "2024", extra: "ISBN: 978-3-031-XY",
      abstract:"A graduate-level textbook bridging quantum theory and practical algorithm design, covering Shor's, Grover's, and variational quantum eigensolvers with hands-on Qiskit implementations.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"Buy"
    },
    {
      category: "conference", label: "Conference",
      title:   "Transformer-Based Multilingual Sentiment Analysis for Low-Resource Indian Languages",
      authors: "Dr. Anitha Chellamani, Mohan V. (PG Scholar)",
      venue:   "ACL 2024", year: "2024", extra: "Bangkok",
      abstract:"Fine-tuned mBERT variants for Tamil, Telugu, and Kannada achieve state-of-the-art F1 scores via a novel cross-lingual data augmentation strategy for low-resource settings.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"Code"
    },
    {
      category: "journal", label: "Journal",
      title:   "Genomic Markers for Predicting Treatment Response in Triple-Negative Breast Cancer",
      authors: "Dr. Vidya Chandrasekaran, Dr. Gopal S., Nisha M. (PhD)",
      venue:   "Cancer Research", year: "2023", extra: "IF: 12.7",
      abstract:"Whole-exome sequencing of 412 TNBC patients identified a 17-gene prognostic signature correlating significantly with pathological complete response rates following neoadjuvant chemotherapy.",
      pdfUrl:"#", doiUrl:"#", doiLabel:"PubMed"
    }
  ],

  /* Funded Projects */
  projects: [
    {
      colorClass: "research-project-top-1",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7D1F3B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      funding: "DST-SERB | ₹1.2 Cr",
      name:    "Explainable AI Systems for Clinical Decision Support in Rural Healthcare",
      pi:      "Dr. Priya Subramaniam | Dept. of CSE",
      desc:    "Developing interpretable machine learning models for diagnosing tuberculosis and malaria in resource-constrained settings using mobile imaging and federated data from 50+ rural clinics.",
      progress: 68, duration: "2022 – 2025", status: "Active", output: "12 Papers, 2 Patents"
    },
    {
      colorClass: "research-project-top-2",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2D8659" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      funding: "DST Indo-Germany | ₹2.4 Cr",
      name:    "Next-Generation Perovskite Solar Cell Architectures for Tropical Climates",
      pi:      "Prof. Kamala Devi | Dept. of Chemistry",
      desc:    "Collaborative research with Karlsruhe Institute of Technology on humidity-stable perovskite compositions and encapsulation strategies targeting 25%+ efficiency for Indian rooftop deployment.",
      progress: 45, duration: "2023 – 2026", status: "Active", output: "8 Papers, 1 Patent"
    },
    {
      colorClass: "research-project-top-3",
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      funding: "ISRO | ₹3.8 Cr",
      name:    "Autonomous Navigation & Terrain Mapping for Lunar Micro-Rovers",
      pi:      "Dr. Suresh Kannan | Dept. of Aerospace Engg.",
      desc:    "Design and validation of SLAM-based autonomous navigation algorithms, lightweight structural composites, and power management systems for 2kg-class lunar surface exploration rovers.",
      progress: 32, duration: "2024 – 2028", status: "Active", output: "3 Papers, Filing"
    }
  ],

  /* MoU tabs */
  mouTabs: ["Industry Partners", "University Partners"],

  /* MoUs */
  mous: [
    {
      tab: "Industry Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      org: "Tata Consultancy Services", type: "Technology & AI",
      details: "Collaboration on AI/ML research, student placement programs, and co-development of industry-specific curriculum modules with joint publication on enterprise NLP systems.",
      since: "2019"
    },
    {
      tab: "Industry Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
      org: "Cipla Ltd.", type: "Pharmaceutical",
      details: "Research partnership in drug delivery nanoformulations, clinical trial data analysis, and sponsored PhD scholarships in pharmaceutical chemistry and biomedical engineering.",
      since: "2021"
    },
    {
      tab: "Industry Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      org: "Siemens India", type: "Industrial Automation",
      details: "Establishment of Siemens Centre of Excellence for smart manufacturing, Industry 4.0 curriculum development, and internship pipeline for engineering students.",
      since: "2020"
    },
    {
      tab: "Industry Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      org: "DRDO – CAIR", type: "Defence Research",
      details: "Collaborative research on autonomous systems, signal processing, and embedded AI for defence applications with joint training for final-year B.Tech and M.Tech students.",
      since: "2022"
    },
    {
      tab: "University Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      org: "National University of Singapore", type: "Research Collaboration",
      details: "Faculty and student exchange programs, joint research in computational biology and smart materials, and co-supervised PhD programs in engineering and life sciences.",
      since: "2018"
    },
    {
      tab: "University Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      org: "TU Munich (TUM)", type: "Academic Exchange",
      details: "Dual-degree programs in robotics and mechanical engineering, faculty sabbaticals, summer schools, and joint grant applications under EU Horizon and DAAD frameworks.",
      since: "2020"
    },
    {
      tab: "University Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      org: "University of Tokyo", type: "Science & Technology",
      details: "Joint research centres in materials science and quantum technologies with annual symposia and MEXT-funded student mobility grants.",
      since: "2019"
    },
    {
      tab: "University Partners",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B7B7D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      org: "IIT Madras", type: "National Collaboration",
      details: "Inter-institutional research consortia in AI, clean energy, and biomedical devices with shared access to HPC clusters and nano-fabrication facilities.",
      since: "2017"
    }
  ]
};

/* ─── SVG icon snippets reused in rendering ─── */
const IC = {
  arrowRight: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  book:       `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  calendar:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  tag:        `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  pdf:        `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  link:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  user:       `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  plus:       `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check:      `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

/* ─── RENDERERS ─── */

function research_renderStats() {
  document.getElementById('research-hero-stats').innerHTML =
    RESEARCH_DATA.stats.map(s => `
      <div class="research-stat-card">
        <span class="research-stat-number" data-target="${s.value}" data-suffix="${s.suffix}">0</span>
        <span class="research-stat-label">${s.label}</span>
      </div>`).join('');
}

function research_renderPolicies() {
  document.getElementById('research-policies-grid').innerHTML =
    RESEARCH_DATA.policies.map(p => `
      <div class="research-policy-card">
        <div class="research-policy-icon-wrap">${p.icon}</div>
        <div class="research-policy-name">${p.title}</div>
        <p class="research-policy-desc">${p.desc}</p>
        <a href="#" class="research-policy-link">Read Policy ${IC.arrowRight}</a>
      </div>`).join('');
}

function research_renderPubFilters() {
  document.getElementById('research-pub-filters').innerHTML =
    RESEARCH_DATA.pubFilters.map((f, i) => `
      <button class="research-filter-btn${i === 0 ? ' research-active' : ''}"
        onclick="research_filterPubs('${f.value}', this)">${f.label}</button>`).join('');
}

function research_renderPubs(filter) {
  const list = filter === 'all'
    ? RESEARCH_DATA.publications
    : RESEARCH_DATA.publications.filter(p => p.category === filter);
  document.getElementById('research-pub-grid').innerHTML = list.map(p => `
    <div class="research-pub-card" data-category="${p.category}">
      <span class="research-pub-type-badge rt-${p.category}">${IC.tag} ${p.label}</span>
      <h3 class="research-pub-title">${p.title}</h3>
      <div class="research-pub-authors">${p.authors}</div>
      <div class="research-pub-meta">
        <span class="research-pub-meta-item">${IC.book} ${p.venue}</span>
        <span class="research-pub-meta-item">${IC.calendar} ${p.year}</span>
        <span class="research-pub-meta-item">${IC.tag} ${p.extra}</span>
      </div>
      <p class="research-pub-abstract">${p.abstract}</p>
      <div class="research-pub-actions">
        <a href="${p.pdfUrl}" class="research-pub-btn research-pub-btn-solid">${IC.pdf} PDF</a>
        <a href="${p.doiUrl}" class="research-pub-btn research-pub-btn-outline-sm">${IC.link} ${p.doiLabel}</a>
      </div>
    </div>`).join('');
}

function research_filterPubs(filter, btn) {
  document.querySelectorAll('.research-filter-btn').forEach(b => b.classList.remove('research-active'));
  btn.classList.add('research-active');
  research_renderPubs(filter);
}

function research_renderProjects() {
  document.getElementById('research-projects-grid').innerHTML =
    RESEARCH_DATA.projects.map(p => `
      <div class="research-project-card">
        <div class="research-project-top ${p.colorClass}">
          <div class="research-project-icon-wrap">${p.icon}</div>
          <div class="research-funding-badge">${IC.plus} ${p.funding}</div>
          <h3 class="research-project-name">${p.name}</h3>
        </div>
        <div class="research-project-body">
          <div class="research-project-pi">${IC.user} ${p.pi}</div>
          <p class="research-project-desc">${p.desc}</p>
          <div class="research-progress-area">
            <div class="research-progress-label"><span>Progress</span><span>${p.progress}%</span></div>
            <div class="research-progress-bar">
              <div class="research-progress-fill" style="width:0%" data-width="${p.progress}%"></div>
            </div>
          </div>
          <div class="research-project-meta">
            <div class="research-meta-item"><span class="research-meta-lbl">Duration</span><span class="research-meta-val">${p.duration}</span></div>
            <div class="research-meta-item"><span class="research-meta-lbl">Status</span><span class="research-meta-val rv-green">● ${p.status}</span></div>
            <div class="research-meta-item"><span class="research-meta-lbl">Output</span><span class="research-meta-val">${p.output}</span></div>
          </div>
        </div>
      </div>`).join('');
}

let research_activeTab = "Industry Partners";

function research_renderMouTabs() {
  document.getElementById('research-mou-tabs').innerHTML =
    RESEARCH_DATA.mouTabs.map(t => `
      <button class="research-tab-btn${t === research_activeTab ? ' research-active' : ''}"
        onclick="research_switchTab('${t}', this)">${t}</button>`).join('');
}

function research_renderMous(tab) {
  const list = RESEARCH_DATA.mous.filter(m => m.tab === tab);
  document.getElementById('research-mou-grid').innerHTML = list.map(m => `
    <div class="research-mou-card">
      <div class="research-mou-icon-wrap">${m.icon}</div>
      <div class="research-mou-org">${m.org}</div>
      <span class="research-mou-type-badge">${m.type}</span>
      <p class="research-mou-details">${m.details}</p>
      <div class="research-mou-footer">
        <span class="research-mou-year">Since ${m.since}</span>
        <span class="research-mou-status">${IC.check} Active</span>
      </div>
    </div>`).join('');
}

function research_switchTab(tab, btn) {
  research_activeTab = tab;
  document.querySelectorAll('.research-tab-btn').forEach(b => b.classList.remove('research-active'));
  btn.classList.add('research-active');
  research_renderMous(tab);
}

/* ─── BOOT ─── */
(function research_init() {
  research_renderStats();
  research_renderPolicies();
  research_renderPubFilters();
  research_renderPubs('all');
  research_renderProjects();
  research_renderMouTabs();
  research_renderMous(research_activeTab);
})();

/* ─── SCROLL REVEAL ─── */
const research_revealIO = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${i * 0.07}s`;
      e.target.classList.add('research-visible');
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.research-reveal').forEach(el => research_revealIO.observe(el));

/* ─── COUNTER ANIMATION ─── */
function research_runCounters() {
  document.querySelectorAll('.research-stat-number[data-target]').forEach(el => {
    const target = +el.dataset.target, suffix = el.dataset.suffix || '';
    const step = target / (2000 / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur) + (cur >= target ? suffix : '');
      if (cur >= target) clearInterval(t);
    }, 16);
  });
}
const research_statsIO = new IntersectionObserver(e => {
  if (e[0].isIntersecting) { setTimeout(research_runCounters, 500); research_statsIO.disconnect(); }
}, { threshold: 0.5 });
const research_statsEl = document.getElementById('research-hero-stats');
if (research_statsEl) research_statsIO.observe(research_statsEl);

/* ─── PROGRESS BARS ─── */
const research_progressIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.research-progress-fill').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.width; }, 200);
      });
    }
  });
}, { threshold: 0.3 });
setTimeout(() => {
  document.querySelectorAll('.research-project-card').forEach(c => research_progressIO.observe(c));
}, 100);

