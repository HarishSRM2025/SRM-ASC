/* ─── ALL DATA AS JSON ─── */
const alumniData = {

  heroStats: [
    { id: "alumni-s1", target: 25000, format: v => Math.floor(v/1000) + 'K+' },
    { id: "alumni-s2", target: 1800,  format: v => Math.floor(v) + '+' },
    { id: "alumni-s3", target: 48,    format: v => Math.floor(v) + '+' },
    { id: "alumni-s4", target: 340,   format: v => Math.floor(v) + '+' }
  ],

  domains: [
    { id: "technology",       label: "Technology",          icon: "fas fa-microchip",      count: 8420, color: "#1B7B7D", bg: "#e8f5f5" },
    { id: "finance",          label: "Finance & FinTech",   icon: "fas fa-chart-pie",      count: 3210, color: "#2D8659", bg: "#eaf5ef" },
    { id: "healthcare",       label: "Healthcare",          icon: "fas fa-stethoscope",    count: 2140, color: "#7D1F3B", bg: "#f8eaee" },
    { id: "entrepreneurship", label: "Entrepreneurship",    icon: "fas fa-rocket",         count: 1870, color: "#D4A574", bg: "#fdf5ec" },
    { id: "academia",         label: "Academia & Research", icon: "fas fa-flask",          count: 1540, color: "#5A1529", bg: "#f5eaed" },
    { id: "consulting",       label: "Consulting",          icon: "fas fa-handshake",      count: 1230, color: "#0F5456", bg: "#e8f2f2" }
  ],

  featured: [
    {
      id: "f1",
      name: "Arjun Mehta",
      role: "Co-Founder & CEO, ZestAI",
      company: "ZestAI",
      batch: "2018",
      domain: "entrepreneurship",
      avatar: "AM",
      avatarGrad: "linear-gradient(135deg,#2D8659,#1B7B7D)",
      tags: ["Forbes 30 Under 30", "Y Combinator W22", "$12M Series A"],
      quote: "Building ZestAI from a dorm-room idea to a funded startup was only possible because of the entrepreneurial mindset instilled during my years here. The professors didn't just teach — they mentored.",
      highlights: [
        { icon: "fas fa-users",   text: "Grown team from 3 to 85 employees in 18 months" },
        { icon: "fas fa-globe",   text: "Product serving 200K+ businesses across 12 countries" },
        { icon: "fas fa-trophy",  text: "Winner: National Startup India Award 2023" }
      ],
      achievement: "Forbes 30 Under 30",
      achievementIcon: "fas fa-award",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      id: "f2",
      name: "Divya Krishnamurthy",
      role: "Principal Engineer, Microsoft",
      company: "Microsoft",
      batch: "2015",
      domain: "technology",
      avatar: "DK",
      avatarGrad: "linear-gradient(135deg,#7D1F3B,#D4A574)",
      tags: ["Patent Holder", "AI/ML Lead", "15+ Publications"],
      quote: "The research culture here is what sets our graduates apart. I published my first paper as an undergraduate — that confidence stayed with me all the way to Seattle.",
      highlights: [
        { icon: "fas fa-code-branch",       text: "Led development of Azure Cognitive Copilot framework" },
        { icon: "fas fa-file-alt",          text: "15 peer-reviewed publications, 3 US patents" },
        { icon: "fas fa-chalkboard-teacher",text: "Mentored 40+ junior engineers across 4 continents" }
      ],
      achievement: "Microsoft Gold Badge",
      achievementIcon: "fas fa-medal",
      socials: { linkedin: "#", github: "#" }
    }
  ],

  alumni: [
    {
      id: "a1",
      name: "Rohan Subramaniam",
      role: "Software Engineer III",
      company: "Google",
      batch: "2022",
      domain: "technology",
      avatar: "RS",
      color: "#1B7B7D",
      quote: "Every hackathon, every all-nighter in the lab — it was all preparing me for exactly the kind of problems I solve at Google every day.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Bangalore, India" },
        { icon: "fas fa-briefcase",      text: "Core Infrastructure" }
      ],
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: "a2",
      name: "Sneha Patel",
      role: "Investment Analyst",
      company: "Goldman Sachs",
      batch: "2021",
      domain: "finance",
      avatar: "SP",
      color: "#2D8659",
      quote: "Finance fundamentals combined with strong quantitative training made the CFA journey much smoother. I cleared all three levels on the first attempt.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Mumbai, India" },
        { icon: "fas fa-certificate",    text: "CFA Charterholder" }
      ],
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      id: "a3",
      name: "Karthik Venkatesh",
      role: "Senior Research Scientist",
      company: "Pfizer",
      batch: "2019",
      domain: "healthcare",
      avatar: "KV",
      color: "#7D1F3B",
      quote: "The multidisciplinary exposure — biology, data science, and engineering — directly shaped my ability to work at the intersection of pharma and AI.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Boston, USA" },
        { icon: "fas fa-dna",            text: "Drug Discovery AI" }
      ],
      socials: { linkedin: "#" }
    },
    {
      id: "a4",
      name: "Meera Nair",
      role: "Founder",
      company: "EduSpark",
      batch: "2020",
      domain: "entrepreneurship",
      avatar: "MN",
      color: "#D4A574",
      quote: "Our college's incubation cell gave us the runway to fail fast, learn, and iterate. EduSpark now serves 2 lakh students across rural Tamil Nadu.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Chennai, India" },
        { icon: "fas fa-users",          text: "200K+ Students Reached" }
      ],
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      id: "a5",
      name: "Anand Rajan",
      role: "Assistant Professor",
      company: "IIT Bombay",
      batch: "2019",
      domain: "academia",
      avatar: "AR",
      color: "#5A1529",
      quote: "My PhD at MIT was built on the research foundation I developed here. I am proud to now give back as faculty at IIT Bombay.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Mumbai, India" },
        { icon: "fas fa-graduation-cap", text: "PhD, MIT" }
      ],
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: "a6",
      name: "Preethi Sundaram",
      role: "Data Science Lead",
      company: "Flipkart",
      batch: "2023",
      domain: "technology",
      avatar: "PS",
      color: "#0F5456",
      quote: "From placement prep to project guidance, the support system here is unmatched. I landed my dream role straight out of campus.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Bangalore, India" },
        { icon: "fas fa-brain",          text: "ML & Recommendations" }
      ],
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      id: "a7",
      name: "Vijay Chandrasekhar",
      role: "Product Manager",
      company: "Amazon",
      batch: "2020",
      domain: "technology",
      avatar: "VC",
      color: "#1B7B7D",
      quote: "The communication workshops and case competition culture trained me for the product management interview loop better than any paid course.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Seattle, USA" },
        { icon: "fas fa-shopping-cart",  text: "Amazon Devices" }
      ],
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: "a8",
      name: "Lakshmi Iyer",
      role: "CFO",
      company: "HealthMint",
      batch: "2017",
      domain: "finance",
      avatar: "LI",
      color: "#2D8659",
      quote: "Being the first CFO under 32 at a Series B startup was daunting. But the strategic finance modules and real consulting projects had already prepared me.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "Hyderabad, India" },
        { icon: "fas fa-coins",          text: "Series B · ₹80Cr raised" }
      ],
      socials: { linkedin: "#" }
    },
    {
      id: "a9",
      name: "Sanjay Krishnan",
      role: "Senior Consultant",
      company: "McKinsey & Co.",
      batch: "2021",
      domain: "consulting",
      avatar: "SK",
      color: "#D4A574",
      quote: "The combination of technical depth and strategic thinking that the curriculum demands is exactly what top consulting firms are looking for.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "New Delhi, India" },
        { icon: "fas fa-briefcase",      text: "Strategy & Operations" }
      ],
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      id: "a10",
      name: "Nithya Ramachandran",
      role: "ML Engineer",
      company: "DeepMind",
      batch: "2022",
      domain: "technology",
      avatar: "NR",
      color: "#7D1F3B",
      quote: "The AI lab on campus gave me access to GPUs and real research problems before most universities even had an AI curriculum. That head-start was everything.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "London, UK" },
        { icon: "fas fa-robot",          text: "Reinforcement Learning" }
      ],
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      id: "a11",
      name: "Arun Balakrishnan",
      role: "Cardiologist",
      company: "AIIMS Delhi",
      batch: "2018",
      domain: "healthcare",
      avatar: "AB",
      color: "#0F5456",
      quote: "Clinical exposure from the second year itself made the real-world transition seamless. I had already seen more cases as a student than many graduates elsewhere.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "New Delhi, India" },
        { icon: "fas fa-heartbeat",      text: "Interventional Cardiology" }
      ],
      socials: { linkedin: "#" }
    },
    {
      id: "a12",
      name: "Pooja Venkataraman",
      role: "Associate Professor",
      company: "Stanford University",
      batch: "2016",
      domain: "academia",
      avatar: "PV",
      color: "#2D8659",
      quote: "Getting into Stanford for a postdoc was my dream. The publications I built during my PhD here opened that door. I'll always be grateful.",
      stats: [
        { icon: "fas fa-map-marker-alt", text: "California, USA" },
        { icon: "fas fa-atom",           text: "Quantum Computing" }
      ],
      socials: { linkedin: "#", github: "#" }
    }
  ]
};

/* ─── STATE ─── */
let alumniCurrentFilter = "all";
let alumniCurrentPage   = 1;
const ALUMNI_PER_PAGE   = 6;

/* ─── HERO COUNTERS ─── */
function alumniRunCounters() {
  alumniData.heroStats.forEach((item, i) => {
    setTimeout(() => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const dur = 1800, start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = item.format(item.target * e);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = item.format(item.target);
      })(start);
    }, 600 + i * 160);
  });
}

/* ─── RENDER FEATURED ─── */
function alumniRenderFeatured() {
  document.getElementById('alumni-featured-grid').innerHTML =
    alumniData.featured.map(f => `
      <div class="alumni-featured-card alumni-animate" onclick="alumniOpenModal('${f.id}','featured')">
        <div class="alumni-featured-card-top" style="background:${f.avatarGrad}">
          <div class="alumni-featured-quote-icon">"</div>
          <div class="alumni-featured-avatar">${f.avatar}</div>
          <div class="alumni-featured-name">${f.name}</div>
          <div class="alumni-featured-role">${f.role} &nbsp;·&nbsp; Batch of ${f.batch}</div>
          <div class="alumni-featured-tags">
            ${f.tags.map(t => `<span class="alumni-featured-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="alumni-featured-card-body">
          <p class="alumni-featured-quote">${f.quote}</p>
          <div class="alumni-featured-meta">
            ${f.highlights.slice(0, 2).map(h => `
              <div class="alumni-featured-meta-item">
                <i class="${h.icon}"></i>
                <span>${h.text.split(' ').slice(0, 6).join(' ')}…</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="alumni-featured-card-footer">
          <div class="alumni-achievement-badge">
            <i class="${f.achievementIcon}"></i>
            <span>${f.achievement}</span>
          </div>
          <button class="alumni-connect-btn" onclick="event.stopPropagation()">
            <i class="fab fa-linkedin"></i> Connect
          </button>
        </div>
      </div>
    `).join('');
}

/* ─── RENDER DOMAINS ─── */
function alumniRenderDomains() {
  document.getElementById('alumni-domains-grid').innerHTML =
    alumniData.domains.map(d => `
      <div class="alumni-domain-card" onclick="alumniSetFilterById('${d.id}')">
        <div class="alumni-domain-icon" style="background:${d.bg};color:${d.color}">
          <i class="${d.icon}"></i>
        </div>
        <div class="alumni-domain-count" style="color:${d.color}">${d.count.toLocaleString('en-IN')}</div>
        <div class="alumni-domain-label">${d.label}</div>
      </div>
    `).join('');
}

/* ─── FILTER LOGIC ─── */
function alumniGetFiltered() {
  const search = document.getElementById('alumni-search-box').value.toLowerCase().trim();
  const batch  = document.getElementById('alumni-batch-filter').value;
  return alumniData.alumni.filter(a => {
    if (alumniCurrentFilter !== 'all' && a.domain !== alumniCurrentFilter) return false;
    if (batch !== 'all' && a.batch !== batch) return false;
    if (search && !a.name.toLowerCase().includes(search)
               && !a.company.toLowerCase().includes(search)
               && !a.role.toLowerCase().includes(search)) return false;
    return true;
  });
}

/* ─── RENDER CARDS ─── */
function alumniRenderCards() {
  const filtered = alumniGetFiltered();
  const total    = filtered.length;
  const page     = filtered.slice((alumniCurrentPage - 1) * ALUMNI_PER_PAGE, alumniCurrentPage * ALUMNI_PER_PAGE);

  document.getElementById('alumni-results-count').textContent =
    total === alumniData.alumni.length ? `${total} stories` : `${total} result${total !== 1 ? 's' : ''} found`;

  const grid = document.getElementById('alumni-stories-grid');
  if (!page.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:72px 20px;color:var(--gray)">
        <i class="fas fa-user-graduate" style="font-size:48px;margin-bottom:16px;display:block;opacity:.35"></i>
        <p style="font-size:16px;font-weight:500">No alumni found matching your criteria.</p>
        <p style="font-size:13px;margin-top:8px">Try adjusting the filters or search term.</p>
      </div>`;
  } else {
    grid.innerHTML = page.map((a, i) => `
      <div class="alumni-card alumni-animate" style="animation-delay:${i * 0.07}s"
           onclick="alumniOpenModal('${a.id}','alumni')">
        <div class="alumni-card-header">
          <div class="alumni-avatar" style="background:${a.color}">${a.avatar}</div>
          <div class="alumni-card-info">
            <div class="alumni-card-name">${a.name}</div>
            <div class="alumni-card-role">${a.role}</div>
            <div class="alumni-card-company">
              <i class="fas fa-building" style="font-size:10px"></i>${a.company}
            </div>
          </div>
        </div>
        <div class="alumni-card-body">
          <p class="alumni-card-quote">${a.quote}</p>
          <div class="alumni-card-stats">
            ${a.stats.map(s => `
              <div class="alumni-card-stat">
                <i class="${s.icon}" style="color:${a.color}"></i>${s.text}
              </div>`).join('')}
          </div>
        </div>
        <div class="alumni-card-footer">
          <div class="alumni-card-batch">
            <i class="fas fa-calendar-alt"></i>Batch of ${a.batch}
          </div>
          <div class="alumni-social-links">
            ${a.socials.linkedin ? `<a class="alumni-social-link linkedin" href="${a.socials.linkedin}" onclick="event.stopPropagation()"><i class="fab fa-linkedin-in"></i></a>` : ''}
            ${a.socials.twitter  ? `<a class="alumni-social-link twitter"  href="${a.socials.twitter}"  onclick="event.stopPropagation()"><i class="fab fa-twitter"></i></a>` : ''}
            ${a.socials.github   ? `<a class="alumni-social-link github"   href="${a.socials.github}"   onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }
  alumniRenderPagination(total);
}

/* ─── PAGINATION ─── */
function alumniRenderPagination(total) {
  const pages = Math.ceil(total / ALUMNI_PER_PAGE);
  const el    = document.getElementById('alumni-pagination');
  if (pages <= 1) { el.innerHTML = ''; return; }
  let h = '';
  if (alumniCurrentPage > 1)
    h += `<button class="alumni-page-btn" onclick="alumniGoPage(${alumniCurrentPage - 1})"><i class="fas fa-chevron-left"></i></button>`;
  for (let p = 1; p <= pages; p++)
    h += `<button class="alumni-page-btn${p === alumniCurrentPage ? ' active' : ''}" onclick="alumniGoPage(${p})">${p}</button>`;
  if (alumniCurrentPage < pages)
    h += `<button class="alumni-page-btn" onclick="alumniGoPage(${alumniCurrentPage + 1})"><i class="fas fa-chevron-right"></i></button>`;
  el.innerHTML = h;
}
function alumniGoPage(p) {
  alumniCurrentPage = p;
  alumniRenderCards();
  document.getElementById('alumni-stories').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── FILTER CONTROLS ─── */
function alumniSetFilter(btn, f) {
  document.querySelectorAll('.alumni-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  alumniCurrentFilter = f;
  alumniCurrentPage   = 1;
  alumniRenderCards();
}
function alumniSetFilterById(f) {
  alumniCurrentFilter = f;
  alumniCurrentPage   = 1;
  document.querySelectorAll('.alumni-filter-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.filter === f));
  alumniRenderCards();
  document.getElementById('alumni-stories').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function alumniFilterCards() { alumniCurrentPage = 1; alumniRenderCards(); }

/* ─── MODAL ─── */
function alumniOpenModal(id, type) {
  const data = type === 'featured'
    ? alumniData.featured.find(a => a.id === id)
    : alumniData.alumni.find(a => a.id === id);
  if (!data) return;
  const grad = data.avatarGrad || data.color;
  const highlights = data.highlights
    ? data.highlights.map(h => `<div class="alumni-modal-highlight"><i class="${h.icon}"></i><span>${h.text}</span></div>`).join('')
    : data.stats.map(s  => `<div class="alumni-modal-highlight"><i class="${s.icon}"></i><span>${s.text}</span></div>`).join('');

  document.getElementById('alumni-modal').innerHTML = `
    <div class="alumni-modal-header" style="background:${grad}">
      <button class="alumni-modal-close" onclick="alumniCloseModal()"><i class="fas fa-times"></i></button>
      <div class="alumni-modal-avatar">${data.avatar}</div>
      <div class="alumni-modal-name">${data.name}</div>
      <div class="alumni-modal-role">${data.role} &nbsp;·&nbsp; ${data.company} &nbsp;·&nbsp; Batch ${data.batch}</div>
    </div>
    <div class="alumni-modal-body">
      <div class="alumni-modal-section-title"><i class="fas fa-quote-left" style="margin-right:6px"></i>In Their Words</div>
      <p class="alumni-modal-text">"${data.quote}"</p>
      <div class="alumni-modal-section-title"><i class="fas fa-star" style="margin-right:6px"></i>Highlights</div>
      <div class="alumni-modal-highlights">${highlights}</div>
      ${data.tags ? `
        <div class="alumni-modal-section-title"><i class="fas fa-tag" style="margin-right:6px"></i>Recognitions</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">
          ${data.tags.map(t => `<span style="background:var(--light-gray);padding:5px 14px;border-radius:50px;font-size:12px;font-weight:600;color:var(--dark-gray)">${t}</span>`).join('')}
        </div>` : ''}
      <div style="display:flex;gap:10px;justify-content:flex-end;padding-top:4px">
        ${data.socials?.linkedin ? `<a class="alumni-social-link linkedin" href="${data.socials.linkedin}" style="width:36px;height:36px;font-size:15px"><i class="fab fa-linkedin-in"></i></a>` : ''}
        ${data.socials?.twitter  ? `<a class="alumni-social-link twitter"  href="${data.socials.twitter}"  style="width:36px;height:36px;font-size:15px"><i class="fab fa-twitter"></i></a>` : ''}
        ${data.socials?.github   ? `<a class="alumni-social-link github"   href="${data.socials.github}"   style="width:36px;height:36px;font-size:15px"><i class="fab fa-github"></i></a>` : ''}
      </div>
    </div>
  `;
  document.getElementById('alumni-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function alumniCloseModal(e) {
  if (e && e.target !== document.getElementById('alumni-modal-overlay')) return;
  document.getElementById('alumni-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('alumni-modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ─── INTERSECTION OBSERVER for scroll animations ─── */
const alumniObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      alumniObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function alumniObserveCards() {
  document.querySelectorAll('.alumni-animate').forEach(el => {
    el.style.animationPlayState = 'paused';
    alumniObserver.observe(el);
  });
}

/* ─── INIT ─── */
alumniRenderFeatured();
alumniRenderDomains();
alumniRenderCards();
alumniObserveCards();

/* hero counters on hero visibility */
const alumniHeroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { alumniRunCounters(); alumniHeroObserver.disconnect(); }
}, { threshold: 0.3 });
alumniHeroObserver.observe(document.querySelector('.alumni-hero'));