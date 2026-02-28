const CONTACT_DATA = {

  nav: {
    logoIcon: "fas fa-university",
    logoText: "SRM<span>·</span>IST",
    links: [
      { label:"News",        icon:"fas fa-newspaper",    href:"#contact-news" },
      { label:"Events",      icon:"fas fa-calendar-alt", href:"#contact-events" },
      { label:"Gallery",     icon:"fas fa-images",       href:"#contact-gallery" },
      { label:"Subscribe",   icon:"fas fa-bell",         href:"#", cta:true }
    ]
  },
  news: {
    tag:      { icon:"fas fa-newspaper", text:"News Updates" },
    title:    "Latest <span class='contact-accent'>News</span>",
    subtitle: "Stay up to date with announcements, achievements, research breakthroughs, and campus happenings.",
    filters: [
      { label:"All",         icon:"fas fa-th-large" },
      { label:"Achievement", icon:"fas fa-trophy" },
      { label:"Academic",    icon:"fas fa-graduation-cap" },
      { label:"Placement",   icon:"fas fa-briefcase" },
      { label:"Research",    icon:"fas fa-flask" },
      { label:"Campus",      icon:"fas fa-building" }
    ],
    featured: [
      {
        cat:"Achievement", catIcon:"fas fa-trophy",
        catBg:"rgba(212,165,116,.92)", catColor:"#1A1A1A",
        coverBg:"linear-gradient(135deg,#7D1F3B 0%,#1B7B7D 100%)",
        coverIcon:"fas fa-award", coverLabel:"NIRF 2025",
        authorIcon:"fas fa-user-tie", authorBg:"linear-gradient(135deg,#7D1F3B,#1B7B7D)",
        author:"Admin Office", date:"Nov 12, 2025",
        title:"SRM IST Ranked #1 in Tamil Nadu by NIRF Rankings 2025",
        excerpt:"SRM Institute of Science and Technology has achieved a landmark ranking of #1 in Tamil Nadu and secured an overall national rank of 12 in NIRF Rankings 2025 across all categories.",
        readColor:"var(--primary-maroon)", href:"#", featured:true
      },
      {
        cat:"Placement", catIcon:"fas fa-briefcase",
        catBg:"rgba(45,134,89,.92)", catColor:"#fff",
        coverBg:"linear-gradient(135deg,#2D8659 0%,#1B7B7D 100%)",
        coverIcon:"fas fa-handshake", coverLabel:"Placement",
        authorIcon:"fas fa-building", authorBg:"linear-gradient(135deg,#2D8659,#1B7B7D)",
        author:"Placement Cell", date:"Nov 10, 2025",
        title:"Google Offers 42 Students Campus Placements at ₹28 LPA Average",
        excerpt:"Google's campus recruitment drive saw 42 SRM students receive offer letters with an impressive average package of ₹28 LPA.",
        readColor:"var(--primary-green)", href:"#", featured:false
      }
    ],
    grid: [
      {
        cat:"Research", catIcon:"fas fa-flask",
        catBg:"rgba(27,123,125,.92)", catColor:"#fff",
        coverBg:"linear-gradient(135deg,#1B7B7D 0%,#0F5456 100%)",
        coverIcon:"fas fa-microscope", coverLabel:"Research",
        authorIcon:"fas fa-flask", authorBg:"linear-gradient(135deg,#1B7B7D,#0F5456)",
        author:"Research Cell", date:"Nov 8, 2025",
        title:"SRM Researchers Publish Breakthrough in AI-Based Cancer Detection",
        excerpt:"A team of SRM researchers published a groundbreaking paper on AI-based early cancer detection achieving 97% accuracy.",
        readColor:"var(--primary-teal)", href:"#"
      },
      {
        cat:"Academic", catIcon:"fas fa-graduation-cap",
        catBg:"rgba(212,165,116,.92)", catColor:"#1A1A1A",
        coverBg:"linear-gradient(135deg,#D4A574 0%,#c7844e 100%)",
        coverIcon:"fas fa-atom", coverLabel:"Academic",
        authorIcon:"fas fa-graduation-cap", authorBg:"linear-gradient(135deg,#D4A574,#a0622a)",
        author:"Academic Affairs", date:"Nov 5, 2025",
        title:"New B.Tech Specialisation in Quantum Computing Launched for 2026",
        excerpt:"SRM announces a first-of-its-kind B.Tech programme in Quantum Computing with industry collaboration from IBM.",
        readColor:"#a0622a", href:"#"
      },
      {
        cat:"Campus", catIcon:"fas fa-building",
        catBg:"rgba(125,31,59,.92)", catColor:"#fff",
        coverBg:"linear-gradient(135deg,#7D1F3B 0%,#5A1529 100%)",
        coverIcon:"fas fa-lightbulb", coverLabel:"Campus",
        authorIcon:"fas fa-building", authorBg:"linear-gradient(135deg,#7D1F3B,#5A1529)",
        author:"Campus News", date:"Nov 2, 2025",
        title:"New Innovation & Entrepreneurship Hub Inaugurated on Campus",
        excerpt:"The 60,000 sq. ft. Innovation Hub was inaugurated by the Chancellor, featuring 40 startup incubation bays.",
        readColor:"var(--primary-maroon)", href:"#"
      }
    ]
  },

  events: {
    tag:      { icon:"fas fa-calendar-alt", text:"Event Calendar" },
    title:    "Upcoming <span class='contact-accent'>Events</span>",
    subtitle: "From academic seminars to cultural extravaganzas — never miss a moment at SRM.",
    /* All events with their actual date numbers so the calendar can map them */
    allEvents: [
      // November 2025
      { day:12, month:10, year:2025, mon:"NOV", dateBg:"linear-gradient(135deg,#7D1F3B,#1B7B7D)", title:"International Tech Symposium 2025", type:"Seminar", typeIcon:"fas fa-chalkboard-teacher", typeBg:"rgba(212,165,116,.15)", typeColor:"var(--accent-gold)", desc:"Two-day symposium with keynote speakers from Google, Microsoft, and leading research institutions across the globe.", time:"9:00 AM – 6:00 PM", venue:"Main Auditorium", seats:"500 Seats", regBg:"rgba(212,165,116,.14)", regColor:"var(--accent-gold)", regBorder:"rgba(212,165,116,.3)", href:"#" },
      { day:15, month:10, year:2025, mon:"NOV", dateBg:"linear-gradient(135deg,#2D8659,#1B7B7D)", title:"Annual Blood Donation Drive – NSS", type:"Social Service", typeIcon:"fas fa-hand-holding-heart", typeBg:"rgba(45,134,89,.15)", typeColor:"#5ecc8c", desc:"NSS blood donation drive open to all students, faculty, and staff. Free health check-up and refreshments included.", time:"8:00 AM – 4:00 PM", venue:"SRM Hospital Campus", seats:"Open to All", regBg:"rgba(45,134,89,.14)", regColor:"#5ecc8c", regBorder:"rgba(45,134,89,.3)", href:"#" },
      { day:20, month:10, year:2025, mon:"NOV", dateBg:"linear-gradient(135deg,#1B7B7D,#0F5456)", title:"Hackathon 2025 – Code for Change", type:"Technical", typeIcon:"fas fa-laptop-code", typeBg:"rgba(27,123,125,.15)", typeColor:"#5cc8ca", desc:"36-hour non-stop hackathon with ₹5 lakh prize pool. Problem statements span sustainability, health-tech, and fintech.", time:"10:00 AM (36 hrs)", venue:"Tech Park Block", seats:"300 Seats", regBg:"rgba(27,123,125,.14)", regColor:"#5cc8ca", regBorder:"rgba(27,123,125,.3)", href:"#" },
      // December 2025
      { day:5, month:11, year:2025, mon:"DEC", dateBg:"linear-gradient(135deg,#D4A574,#c7844e)", title:"Google Campus Recruitment Drive", type:"Placement", typeIcon:"fas fa-briefcase", typeBg:"rgba(212,165,116,.15)", typeColor:"var(--accent-gold)", desc:"Google campus recruitment for SWE, SRE, and PM roles. Eligible: B.Tech CSE / IT final year students.", time:"9:00 AM – 5:00 PM", venue:"Placement Block", seats:"150 Shortlisted", regBg:"rgba(212,165,116,.14)", regColor:"var(--accent-gold)", regBorder:"rgba(212,165,116,.3)", href:"#" },
      { day:18, month:11, year:2025, mon:"DEC", dateBg:"linear-gradient(135deg,#5A1529,#7D1F3B)", title:"Winter Convocation Ceremony 2025", type:"Academic", typeIcon:"fas fa-graduation-cap", typeBg:"rgba(125,31,59,.15)", typeColor:"#e07090", desc:"Annual convocation for the graduating batch of 2025. Chief Guest: APJ Abdul Kalam Foundation representative.", time:"10:00 AM – 2:00 PM", venue:"Open Air Theatre", seats:"All Graduates", regBg:"rgba(125,31,59,.14)", regColor:"#e07090", regBorder:"rgba(125,31,59,.3)", href:"#" },
      // January 2026
      { day:18, month:0, year:2026, mon:"JAN", dateBg:"linear-gradient(135deg,#D4A574,#7D1F3B)", title:"Tarang 2026 – National Cultural Festival", type:"Cultural", typeIcon:"fas fa-music", typeBg:"rgba(212,165,116,.15)", typeColor:"var(--accent-gold)", desc:"SRM's flagship 3-day national cultural extravaganza with music, dance, drama, DJ nights, and celebrity performances.", time:"Jan 18–20, All Day", venue:"SRM Main Campus", seats:"10,000+ Expected", regBg:"rgba(212,165,116,.14)", regColor:"var(--accent-gold)", regBorder:"rgba(212,165,116,.3)", href:"#" }
    ]
  },

  gallery: {
    tag:      { icon:"fas fa-images", text:"Photo Gallery" },
    title:    "Campus <span class='contact-accent'>Gallery</span>",
    subtitle: "A visual journey through SRM's vibrant campus life, achievements, events, and milestones.",
    filters: [
      { label:"All",       icon:"fas fa-th-large" },
      { label:"Events",    icon:"fas fa-calendar-star" },
      { label:"Campus",    icon:"fas fa-university" },
      { label:"Sports",    icon:"fas fa-running" },
      { label:"Cultural",  icon:"fas fa-music" },
      { label:"Placement", icon:"fas fa-briefcase" }
    ],
    items: [
      { cat:"Events",    wide:true,  iconBg:"linear-gradient(135deg,#7D1F3B,#1B7B7D)", icon:"fas fa-chalkboard-teacher", alt:"Tech Symposium 2025",       title:"Tech Symposium 2025",       sub:"Nov 2025 · Main Auditorium" },
      { cat:"Cultural",  wide:false, iconBg:"linear-gradient(135deg,#D4A574,#c7844e)", icon:"fas fa-music",              alt:"Tarang Cultural Night",      title:"Tarang Cultural Night",     sub:"Jan 2025 · Open Air" },
      { cat:"Sports",    wide:false, iconBg:"linear-gradient(135deg,#2D8659,#1B7B7D)", icon:"fas fa-trophy",             alt:"National Robotics Win",      title:"National Robotics Win",     sub:"Oct 2025 · New Delhi" },
      { cat:"Campus",    wide:false, iconBg:"linear-gradient(135deg,#1B7B7D,#0F5456)", icon:"fas fa-lightbulb",          alt:"Innovation Hub Launch",      title:"Innovation Hub Launch",     sub:"Nov 2025 · SRM Campus" },
      { cat:"Placement", wide:false, iconBg:"linear-gradient(135deg,#5A1529,#1B7B7D)", icon:"fas fa-handshake",          alt:"Google Placement Drive",     title:"Google Placement Drive",    sub:"Dec 2024 · Placement Block" },
      { cat:"Cultural",  wide:false, iconBg:"linear-gradient(135deg,#D4A574,#2D8659)", icon:"fas fa-guitar",             alt:"Battle of Bands",            title:"Battle of Bands",           sub:"Jan 2025 · Amphitheatre" },
      { cat:"Sports",    wide:true,  iconBg:"linear-gradient(135deg,#2D8659,#5A1529)", icon:"fas fa-futbol",             alt:"Inter-University Football",  title:"Inter-University Football", sub:"Sep 2025 · Sports Ground" },
      { cat:"Events",    wide:false, iconBg:"linear-gradient(135deg,#1B7B7D,#7D1F3B)", icon:"fas fa-flask",              alt:"Research Expo 2025",         title:"Research Expo 2025",        sub:"Oct 2025 · Tech Park" },
      { cat:"Campus",    wide:false, iconBg:"linear-gradient(135deg,#7D1F3B,#D4A574)", icon:"fas fa-seedling",           alt:"Green Campus Initiative",    title:"Green Campus Initiative",   sub:"Aug 2025 · Campus" },
      { cat:"Cultural",  wide:false, iconBg:"linear-gradient(135deg,#0F5456,#7D1F3B)", icon:"fas fa-palette",            alt:"Fine Arts Exhibition",       title:"Fine Arts Exhibition",      sub:"Feb 2025 · Gallery Hall" },
      { cat:"Placement", wide:false, iconBg:"linear-gradient(135deg,#2D8659,#D4A574)", icon:"fas fa-laptop",             alt:"Microsoft PPT Session",      title:"Microsoft PPT Session",     sub:"Nov 2025 · Seminar Hall" },
      { cat:"Events",    wide:false, iconBg:"linear-gradient(135deg,#5A1529,#0F5456)", icon:"fas fa-graduation-cap",     alt:"Convocation 2025",           title:"Convocation 2025",          sub:"Dec 2025 · Open Air" }
    ]
  },

  footerCta: {
    titleHtml: "Never Miss an <em>Update</em>",
    desc: "Subscribe to the SRM newsletter for the latest news, event invites, and campus highlights delivered to your inbox every week.",
    buttons: [
      { label:"Subscribe Newsletter", href:"#", icon:"fas fa-envelope",    style:"gold" },
      { label:"All Events",           href:"#contact-events", icon:"fas fa-calendar-alt", style:"outline" }
    ]
  }
};

/* ═══════════════ HELPERS ═══════════════ */
function secHeader(tag, title, subtitle) {
  return `<div class="contact-section-header">
    <div class="contact-section-tag"><i class="${tag.icon}"></i> ${tag.text}</div>
    <h2 class="contact-section-title">${title}</h2>
    <p class="contact-section-subtitle">${subtitle}</p>
    <div class="contact-divider"></div>
  </div>`;
}

/* Picsum seeds mapped to categories for consistent dummy images */
const _picsumSeeds = {
  'NIRF 2025':   10,  'Placement': 20,  'Research': 30,
  'Academic':    40,  'Campus':    50,  'Achievement': 60,
  'default':     70
};
let _picsumCounter = 100;

/* Renders a real placeholder image with a tinted overlay + icon badge */
function dummyCover(coverBg, coverIcon, coverLabel) {
  const seed = _picsumSeeds[coverLabel] || (_picsumCounter += 7);
  // Use picsum with a unique seed so each card gets a different photo
  const imgUrl = `https://picsum.photos/seed/${seed}/800/400`;
  return `
    <div class="contact-news-cover" style="position:relative;overflow:hidden;width:100%;height:100%;">
      <img src="${imgUrl}" alt="${coverLabel}"
        style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <!-- colour tint overlay -->
      <div style="position:absolute;inset:0;background:${coverBg};opacity:0;pointer-events:none;"></div>
      <!-- dot pattern -->
      <div class="contact-news-cover-pattern" style="position:absolute;inset:0;"></div>
      <!-- icon + label -->
      
      <!-- fallback plain cover (hidden by default) -->
      <div style="display:none;position:absolute;inset:0;background:${coverBg};flex-direction:column;align-items:center;justify-content:center;gap:10px;">
        <div class="contact-news-cover-pattern"></div>
        <div class="contact-news-cover-icon" style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div class="contact-news-cover-icon-circle"><i class="${coverIcon}"></i></div>
          <span class="contact-news-cover-label">${coverLabel}</span>
        </div>
      </div>
    </div>`;
}


/* ═══════════════ NEWS ═══════════════ */
(function(){
  const n = CONTACT_DATA.news;
  const filters = n.filters.map((f,i)=>
    `<button class="contact-news-filter${i===0?' contact-news-filter--active':''}" data-filter="${f.label}">
      <i class="${f.icon}"></i>${f.label}
    </button>`).join('');

  function card(item, featured=false) {
    const h = featured ? '260px':'188px';
    return `<div class="contact-news-card${featured?' contact-news-card--featured':' contact-news-card--std'}"
              data-category="${item.cat}" style="transition-delay:${featured?0:Math.random()*0.15}s">
      <div class="contact-news-img-wrap" style="height:${h};position:relative;overflow:hidden;">
        ${dummyCover(item.coverBg, item.coverIcon, item.coverLabel)}
        <span class="contact-news-badge" style="background:${item.catBg};color:${item.catColor};">
          <i class="${item.catIcon}"></i>${item.cat}
        </span>
        <span class="contact-news-date"><i class="fas fa-calendar-alt"></i>${item.date}</span>
      </div>
      <div class="contact-news-body">
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="contact-news-footer">
          <span class="contact-news-author">
            <span class="contact-news-author-avatar" style="background:${item.authorBg};"><i class="${item.authorIcon}" style="font-size:.6rem;"></i></span>
            ${item.author}
          </span>
          <a href="${item.href}" class="contact-news-read" style="color:${item.readColor};">
            Read More <i class="fas fa-arrow-right" style="font-size:.65rem;"></i>
          </a>
        </div>
      </div>
    </div>`;
  }

  document.getElementById('contactNewsSection').innerHTML =
    secHeader(n.tag, n.title, n.subtitle) +
    `<div class="contact-news-filters">${filters}</div>
    <div class="contact-news-featured">${card(n.featured[0],true)}${card(n.featured[1],false)}</div>
    <div class="contact-news-grid" id="contactNewsGrid">${n.grid.map(i=>card(i)).join('')}</div>`;
})();

/* ═══════════════ CALENDAR (fully interactive) ═══════════════ */
(function(){
  const ev = CONTACT_DATA.events;
  const allEvents = ev.allEvents;

  // Calendar state — default to current month
  const _now = new Date();
  let calYear = _now.getFullYear(), calMonth = _now.getMonth();

  // Month names
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  // Get events for a given month/year
  function eventsForMonth(y, m) {
    return allEvents.filter(e => e.year === y && e.month === m);
  }

  // Get event days for a month (just day numbers)
  function eventDaysForMonth(y, m) {
    return eventsForMonth(y, m).map(e => e.day);
  }

  // Today
  const todayObj = new Date();
  const todayDay = todayObj.getDate();
  const todayMonth = todayObj.getMonth();
  const todayYear = todayObj.getFullYear();

  let selectedDay = null;
  let selectedMonth = null;
  let selectedYear = null;

  function buildCalendar() {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const totalDays = new Date(calYear, calMonth + 1, 0).getDate();
    const eventDays = eventDaysForMonth(calYear, calMonth);

    let dates = '';
    for (let i = 0; i < firstDay; i++) dates += `<div class="contact-mini-cal-d is-empty"></div>`;
    for (let d = 1; d <= totalDays; d++) {
      let cls = 'contact-mini-cal-d';
      const isToday = d === todayDay && calMonth === todayMonth && calYear === todayYear;
      const isSelected = d === selectedDay && calMonth === selectedMonth && calYear === selectedYear;
      if (isToday) cls += ' is-today';
      if (eventDays.includes(d)) cls += ' has-event';
      if (isSelected) cls += ' is-selected';
      dates += `<div class="${cls}" data-day="${d}">${d}</div>`;
    }

    return `
      <div class="contact-mini-cal">
        <div class="contact-mini-cal-head">
          <div class="contact-mini-cal-title"><i class="fas fa-calendar"></i>${MONTHS[calMonth]} ${calYear}</div>
          <div class="contact-mini-cal-nav">
            <button class="contact-mini-cal-btn" id="calPrev" title="Previous Month"><i class="fas fa-chevron-left"></i></button>
            <button class="contact-mini-cal-btn" id="calNext" title="Next Month"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <div class="contact-mini-cal-days">${DAY_NAMES.map(d=>`<div class="contact-mini-cal-dn">${d}</div>`).join('')}</div>
        <div class="contact-mini-cal-dates" id="calDates">${dates}</div>
        <div class="contact-mini-cal-legend">
          <div class="contact-mini-cal-legend-item"><div class="contact-mini-cal-legend-dot" style="background:linear-gradient(135deg,#D4A574,#c7844e);box-shadow:0 0 6px rgba(212,165,116,.6);border-radius:3px;width:14px;height:7px;"></div><span>Event Date</span></div>
          <div class="contact-mini-cal-legend-item"><div class="contact-mini-cal-legend-dot" style="background:rgba(212,165,116,.35);border:1px solid rgba(212,165,116,.5);"></div><span>Today</span></div>
          <div class="contact-mini-cal-legend-item"><div class="contact-mini-cal-legend-dot" style="background:var(--primary-teal);"></div><span>Selected</span></div>
        </div>
      </div>`;
  }

  function buildEventList(filterDay=null, filterMonth=null, filterYear=null) {
    // Group events by display month label
    // If a day is selected, show only events for that day
    let filteredEvents = allEvents;
    if (filterDay !== null) {
      filteredEvents = allEvents.filter(e => e.day === filterDay && e.month === filterMonth && e.year === filterYear);
    }

    if (filteredEvents.length === 0) {
      return `<div class="contact-events-list">
        <div class="contact-no-events" style="display:flex;">
          <i class="fas fa-calendar-xmark"></i>
          <span>No events on this date. <button onclick="window._calClearFilter()" style="background:none;border:none;color:var(--accent-gold);cursor:pointer;font-family:inherit;font-size:inherit;font-weight:700;">Show all events</button></span>
        </div>
      </div>`;
    }

    // Group by month label
    const groups = {};
    const groupOrder = [];
    filteredEvents.forEach(e => {
      const key = `${e.mon} ${e.year}`;
      if (!groups[key]) { groups[key] = []; groupOrder.push(key); }
      groups[key].push(e);
    });

    let html = `<div class="contact-events-list" id="contactEventsList">`;
    if (filterDay !== null) {
      html += `<div style="margin-bottom:8px;">
        <button onclick="window._calClearFilter()" style="background:rgba(212,165,116,.12);border:1px solid rgba(212,165,116,.3);color:var(--accent-gold);cursor:pointer;font-family:inherit;font-size:.73rem;font-weight:700;padding:5px 14px;border-radius:50px;display:inline-flex;align-items:center;gap:6px;transition:all .3s;">
          <i class="fas fa-times"></i> Clear filter
        </button>
      </div>`;
    }

    groupOrder.forEach(key => {
      html += `<div class="contact-events-month"><i class="fas fa-calendar-week" style="font-size:.65rem;"></i>${key}</div>`;
      groups[key].forEach(e => {
        html += `
          <div class="contact-event-card contact-event-card--visible">
            <div class="contact-event-dateblock" style="background:${e.dateBg};">
              <div class="contact-event-dateblock-day">${String(e.day).padStart(2,'0')}</div>
              <div class="contact-event-dateblock-mon">${e.mon}</div>
            </div>
            <div class="contact-event-body">
              <div class="contact-event-top">
                <h4>${e.title}</h4>
                <span class="contact-event-typebadge" style="background:${e.typeBg};color:${e.typeColor};"><i class="${e.typeIcon}"></i>${e.type}</span>
              </div>
              <p>${e.desc}</p>
              <div class="contact-event-meta">
                <span class="contact-event-metaitem"><i class="fas fa-clock"></i>${e.time}</span>
                <span class="contact-event-metaitem"><i class="fas fa-map-marker-alt"></i>${e.venue}</span>
                <span class="contact-event-metaitem"><i class="fas fa-users"></i>${e.seats}</span>
              </div>
            </div>
            <a href="${e.href}" class="contact-event-register"
              style="background:${e.regBg};color:${e.regColor};border:1px solid ${e.regBorder};">
              Register <i class="fas fa-arrow-right"></i>
            </a>
          </div>`;
      });
    });

    html += `</div>`;
    return html;
  }

  function renderAll() {
    const calEl = document.getElementById('contactCalInner');
    if (!calEl) return;
    calEl.innerHTML =
      `<div class="contact-cal-layout">
        <div id="calMini">${buildCalendar()}</div>
        <div id="calEvents">${buildEventList(selectedDay, selectedMonth, selectedYear)}</div>
      </div>`;
    attachCalListeners();
  }

  function attachCalListeners() {
    document.getElementById('calPrev')?.addEventListener('click', () => {
      calMonth--;
      if (calMonth < 0) { calMonth = 11; calYear--; }
      renderAll();
    });
    document.getElementById('calNext')?.addEventListener('click', () => {
      calMonth++;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      renderAll();
    });
    document.getElementById('calDates')?.addEventListener('click', e => {
      const dayEl = e.target.closest('.contact-mini-cal-d:not(.is-empty)');
      if (!dayEl) return;
      const day = parseInt(dayEl.dataset.day);
      if (selectedDay === day && selectedMonth === calMonth && selectedYear === calYear) {
        // Toggle off
        selectedDay = null; selectedMonth = null; selectedYear = null;
      } else {
        selectedDay = day; selectedMonth = calMonth; selectedYear = calYear;
      }
      renderAll();
    });
  }

  // Global clear filter for the inline button
  window._calClearFilter = function() {
    selectedDay = null; selectedMonth = null; selectedYear = null;
    renderAll();
  };

  // Initial render
  const calSection = document.getElementById('contactCalSection');
  calSection.innerHTML =
    secHeader(ev.tag, ev.title, ev.subtitle) +
    `<div id="contactCalInner"></div>`;
  renderAll();
})();

/* ═══════════════ GALLERY ═══════════════ */
(function(){
  const g = CONTACT_DATA.gallery;
  const filters = g.filters.map((f,i)=>
    `<button class="contact-gallery-filter${i===0?' contact-gallery-filter--active':''}" data-filter="${f.label}">
      <i class="${f.icon}"></i>${f.label}
    </button>`).join('');

  const items = g.items.map((item,idx)=>{
    // Each gallery item gets a unique picsum image (seed 200+idx*13 for variety)
    const seed = 200 + idx * 13;
    const imgUrl = `https://picsum.photos/seed/${seed}/700/420`;
    return `
      <div class="contact-gallery-item${item.wide?' contact-gallery-item--wide':''}"
           data-cat="${item.cat}" data-idx="${idx}">
        <div class="contact-gallery-imgbox" style="position:relative;overflow:hidden;">
          <!-- real placeholder photo -->
          <img src="${imgUrl}" alt="${item.alt}"
            style="width:100%;height:100%;object-fit:cover;display:block;transition:transform .48s ease;position:absolute;inset:0;"
            onerror="this.style.display='none';"
            class="contact-gallery-real-img"
          />
          <!-- gradient tint so icon + text remain readable -->
          <div style="position:absolute;inset:0;background:${item.iconBg};opacity:0.42;pointer-events:none;transition:opacity .3s;"></div>
          <!-- dot texture -->
          <div class="contact-gallery-cover-pattern" style="position:absolute;inset:0;"></div>
          <!-- centre icon -->
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;z-index:2;">
            <div class="contact-gallery-cover-ring"><i class="${item.icon}"></i></div>
            <span class="contact-gallery-cover-label">${item.alt}</span>
          </div>
        </div>
        <div class="contact-gallery-overlay">
          <div class="contact-gallery-overlay-title">${item.title}</div>
          <div class="contact-gallery-overlay-sub"><i class="fas fa-calendar-alt"></i>${item.sub}</div>
        </div>
        <div class="contact-gallery-zoom"><i class="fas fa-expand-alt"></i></div>
      </div>`;
  }).join('');

  document.getElementById('contactGallerySection').innerHTML =
    secHeader(g.tag, g.title, g.subtitle) +
    `<div class="contact-gallery-filters">${filters}</div>
    <div class="contact-gallery-grid" id="contactGalleryGrid">${items}</div>
    <div class="contact-gallery-loadmore">
      <button class="contact-btn contact-btn--teal contact-btn--sm">
        <i class="fas fa-images"></i> Load More Photos
      </button>
    </div>`;
})();

/* ═══════════════ FOOTER CTA ═══════════════ */
(function(){
  const fc = CONTACT_DATA.footerCta;
  document.getElementById('contactFooterCta').innerHTML =
    `<div class="contact-footer-cta-inner">
      <h2>${fc.titleHtml}</h2><p>${fc.desc}</p>
      <div class="contact-footer-cta-btns">
        ${fc.buttons.map(b=>`<a href="${b.href}" class="contact-btn contact-btn--${b.style}"><i class="${b.icon}"></i>${b.label}</a>`).join('')}
      </div>
    </div>`;
})();

/* ═══════════════ INTERACTIONS ═══════════════ */
const cNav = document.getElementById('contactNav');
const cScrollTop = document.getElementById('contactScrollTop');

window.addEventListener('scroll', () => {
  cScrollTop.classList.toggle('contact-scroll-top--visible', scrollY > 400);
  let cur = '';

});



cScrollTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* News filter */
document.getElementById('contactNewsSection').addEventListener('click', e => {
  const btn = e.target.closest('.contact-news-filter');
  if (!btn) return;
  document.querySelectorAll('.contact-news-filter').forEach(b => b.classList.remove('contact-news-filter--active'));
  btn.classList.add('contact-news-filter--active');
  const f = btn.dataset.filter;
  document.querySelectorAll('.contact-news-featured .contact-news-card, #contactNewsGrid .contact-news-card').forEach(c => {
    c.style.display = (f==='All'||c.dataset.category===f) ? '' : 'none';
  });
});

/* Gallery filter + lightbox */
let lbIdx = 0;
document.getElementById('contactGallerySection').addEventListener('click', e => {
  const fb = e.target.closest('.contact-gallery-filter');
  if (fb) {
    document.querySelectorAll('.contact-gallery-filter').forEach(b => b.classList.remove('contact-gallery-filter--active'));
    fb.classList.add('contact-gallery-filter--active');
    const f = fb.dataset.filter;
    document.querySelectorAll('#contactGalleryGrid .contact-gallery-item').forEach(i => {
      i.style.display = (f==='All'||i.dataset.cat===f) ? '' : 'none';
    });
    return;
  }
  const gi = e.target.closest('.contact-gallery-item');
  if (gi) openLb(parseInt(gi.dataset.idx));
});

function openLb(idx) {
  lbIdx = idx;
  const item = CONTACT_DATA.gallery.items[idx];
  const total = CONTACT_DATA.gallery.items.length;
  const seed = 200 + idx * 13;
  const imgUrl = `https://picsum.photos/seed/${seed}/1200/700`;
  document.getElementById('contactLbInner').innerHTML = `
    <div class="contact-lightbox-imgbox" style="position:relative;overflow:hidden;background:${item.iconBg};">
      <img src="${imgUrl}" alt="${item.alt}"
        style="width:100%;height:100%;object-fit:cover;display:block;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <!-- tint -->
      <div style="position:absolute;inset:0;background:${item.iconBg};opacity:0.35;pointer-events:none;"></div>
      <!-- fallback icon -->
      <div style="display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
        <i class="${item.icon}" style="font-size:5rem;color:rgba(255,255,255,.7);filter:drop-shadow(0 6px 24px rgba(0,0,0,.5));"></i>
        <span style="font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.4);">${item.alt}</span>
      </div>
    </div>
    <div class="contact-lightbox-title">${item.title}</div>
    <div class="contact-lightbox-sub"><i class="fas fa-map-marker-alt"></i>${item.sub}</div>
    <div class="contact-lightbox-nav">
      <button class="contact-lightbox-nav-btn" id="lbPrev"><i class="fas fa-chevron-left"></i></button>
      <span style="color:rgba(255,255,255,.4);font-size:.78rem;align-self:center;">${idx+1} / ${total}</span>
      <button class="contact-lightbox-nav-btn" id="lbNext"><i class="fas fa-chevron-right"></i></button>
    </div>`;
  document.getElementById('contactLightbox').classList.add('contact-lightbox--open');
  document.getElementById('lbPrev').onclick = () => openLb((idx-1+total)%total);
  document.getElementById('lbNext').onclick = () => openLb((idx+1)%total);
}
document.getElementById('contactLbClose').addEventListener('click', () =>
  document.getElementById('contactLightbox').classList.remove('contact-lightbox--open'));
document.getElementById('contactLightbox').addEventListener('click', e => {
  if (e.target===document.getElementById('contactLightbox'))
    document.getElementById('contactLightbox').classList.remove('contact-lightbox--open');
});
document.addEventListener('keydown', e => {
  const lb = document.getElementById('contactLightbox');
  if (!lb.classList.contains('contact-lightbox--open')) return;
  const t = CONTACT_DATA.gallery.items.length;
  if (e.key==='ArrowLeft')  openLb((lbIdx-1+t)%t);
  if (e.key==='ArrowRight') openLb((lbIdx+1)%t);
  if (e.key==='Escape')     lb.classList.remove('contact-lightbox--open');
});

/* Scroll-triggered reveals */
const obs = new IntersectionObserver((entries) => {
  entries.forEach((en, i) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    setTimeout(() => {
      el.classList.contains('contact-news-card')    && el.classList.add('contact-news-card--visible');
      el.classList.contains('contact-gallery-item') && el.classList.add('contact-gallery-item--visible');
    }, i * 72);
  });
}, { threshold: 0.08 });

setTimeout(() => {
  document.querySelectorAll('.contact-news-card, .contact-gallery-item').forEach(el => obs.observe(el));
}, 200);