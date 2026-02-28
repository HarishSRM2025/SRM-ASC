const DATA = {
    
    nav: [
        { label: "Departments", href: "#departments", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
        { label: "Programmes Offered", href: "#programmes", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
        { label: "Academic Calendar", href: "#calendar", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
        { label: "Syllabus & Curriculum", href: "#syllabus", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>' },
        { label: "Faculty Profiles", href: "#faculty", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
        { label: "Examination Cell", href: "#exam", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' }
    ],
    departments: {
        subtitle: "SRM University houses 18 departments spanning engineering, sciences, humanities, management, and law — each committed to producing industry-ready graduates and pioneering researchers.",
        list: [
            { icon: "fa-solid fa-laptop-code", short: "CSE", name: "Computer Science & Engineering", faculty: 92, programs: 14 },
            { icon: "fa-solid fa-bolt", short: "EEE", name: "Electrical & Electronics Engineering", faculty: 68, programs: 8 },
            { icon: "fa-solid fa-gears", short: "MECH", name: "Mechanical Engineering", faculty: 74, programs: 9 },
            { icon: "fa-solid fa-building", short: "CIVIL", name: "Civil Engineering", faculty: 56, programs: 7 },
            { icon: "fa-solid fa-flask", short: "CHEM", name: "Chemical Engineering", faculty: 44, programs: 5 },
            { icon: "fa-solid fa-dna", short: "BIOTECH", name: "Biotechnology & Bioinformatics", faculty: 38, programs: 6 },
            { icon: "fa-solid fa-microchip", short: "ECE", name: "Electronics & Communication Engineering", faculty: 82, programs: 10 },
            { icon: "fa-solid fa-atom", short: "SCI", name: "Physics, Chemistry & Mathematics", faculty: 60, programs: 12 },
            { icon: "fa-solid fa-capsules", short: "PHARM", name: "Pharmacy", faculty: 34, programs: 4 },
            { icon: "fa-solid fa-user-doctor", short: "MED", name: "Medicine & Health Sciences", faculty: 120, programs: 18 },
            { icon: "fa-solid fa-chart-line", short: "MGMT", name: "Management & Business Administration", faculty: 55, programs: 8 },
            { icon: "fa-solid fa-scale-balanced", short: "LAW", name: "School of Law", faculty: 26, programs: 4 },
        ]
    },
    programmes: {
        subtitle: "From undergraduate specialisations to doctoral research, our programme portfolio is designed to align with global industry demands and academic frontiers.",
        categories: [
            {
                label: "UG Programmes",
                rows: [
                    { name: "B.Tech Computer Science & Engineering", duration: "4 Years", mode: "Full-time", intake: 240, status: "Open" },
                    { name: "B.Tech AI & Machine Learning", duration: "4 Years", mode: "Full-time", intake: 120, status: "Open" },
                    { name: "B.Tech Electronics & Communication", duration: "4 Years", mode: "Full-time", intake: 180, status: "Open" },
                    { name: "B.Tech Mechanical Engineering", duration: "4 Years", mode: "Full-time", intake: 120, status: "Open" },
                    { name: "B.Tech Civil Engineering", duration: "4 Years", mode: "Full-time", intake: 90, status: "Open" },
                    { name: "B.Sc Physics / Chemistry / Mathematics", duration: "3 Years", mode: "Full-time", intake: 60, status: "Open" },
                    { name: "B.Pharm", duration: "4 Years", mode: "Full-time", intake: 60, status: "Waitlist" },
                    { name: "BBA – General Management", duration: "3 Years", mode: "Full-time", intake: 90, status: "Open" },
                ]
            },
            {
                label: "PG Programmes",
                rows: [
                    { name: "M.Tech Computer Science & Engineering", duration: "2 Years", mode: "Full-time", intake: 60, status: "Open" },
                    { name: "M.Tech VLSI & Embedded Systems", duration: "2 Years", mode: "Full-time", intake: 30, status: "Open" },
                    { name: "MBA – General Management", duration: "2 Years", mode: "Full-time", intake: 120, status: "Open" },
                    { name: "MBA – Business Analytics", duration: "2 Years", mode: "Full-time", intake: 60, status: "Open" },
                    { name: "M.Sc Data Science", duration: "2 Years", mode: "Full-time", intake: 45, status: "Open" },
                    { name: "M.Pharm – Pharmaceutics", duration: "2 Years", mode: "Full-time", intake: 15, status: "Limited" },
                    { name: "LLM – Corporate Law", duration: "1 Year", mode: "Full-time", intake: 20, status: "Open" },
                ]
            },
            {
                label: "Doctoral",
                rows: [
                    { name: "Ph.D Computer Science", duration: "3–5 Years", mode: "Full / Part-time", intake: 20, status: "Rolling" },
                    { name: "Ph.D Biotechnology", duration: "3–5 Years", mode: "Full / Part-time", intake: 12, status: "Rolling" },
                    { name: "Ph.D Management Studies", duration: "3–5 Years", mode: "Full / Part-time", intake: 15, status: "Rolling" },
                    { name: "Ph.D Physics", duration: "3–5 Years", mode: "Full / Part-time", intake: 10, status: "Rolling" },
                    { name: "Ph.D Law", duration: "3–5 Years", mode: "Part-time", intake: 8, status: "Limited" },
                ]
            }
        ]
    },
    calendar: {
        subtitle: "Stay aligned with academic milestones, examination schedules, holidays, and important institutional events across the academic year 2026–2027.",
        year: "2026–27",
        quickLinks: ["Odd Semester Schedule", "Even Semester Schedule", "Exam Timetables", "Holiday List", "Event Calendar"],
        semesters: [
            {
                label: "Odd Semester",
                badge: "Jul – Nov 2026",
                events: [
                    { date: "July 14, 2026", name: "Commencement of Odd Semester Classes", type: "event" },
                    { date: "Aug 07, 2026", name: "Independence Day – Holiday", type: "holiday" },
                    { date: "Sep 08–13, 2026", name: "Internal Assessment Test – I (IAT 1)", type: "exam" },
                    { date: "Sep 29, 2026", name: "Last Date for Practical Record Submission", type: "deadline" },
                    { date: "Oct 02, 2026", name: "Gandhi Jayanti – Holiday", type: "holiday" },
                    { date: "Oct 20–25, 2026", name: "Internal Assessment Test – II (IAT 2)", type: "exam" },
                    { date: "Nov 10, 2026", name: "Last Instructional Day – Odd Semester", type: "deadline" },
                    { date: "Nov 17–Dec 05, 2026", name: "End Semester Examinations", type: "exam" },
                ]
            },
            {
                label: "Even Semester",
                badge: "Jan – May 2027",
                events: [
                    { date: "Jan 05, 2027", name: "Commencement of Even Semester Classes", type: "event" },
                    { date: "Jan 26, 2027", name: "Republic Day – Holiday", type: "holiday" },
                    { date: "Feb 16–21, 2027", name: "Internal Assessment Test – I (IAT 1)", type: "exam" },
                    { date: "Mar 10–14, 2027", name: "SRM Cultural & Sports Fest", type: "event" },
                    { date: "Apr 06–11, 2027", name: "Internal Assessment Test – II (IAT 2)", type: "exam" },
                    { date: "Apr 20, 2027", name: "Last Date for Project Submission", type: "deadline" },
                    { date: "Apr 30, 2027", name: "Last Instructional Day – Even Semester", type: "deadline" },
                    { date: "May 04–22, 2027", name: "End Semester Examinations", type: "exam" },
                ]
            },
             {
                label: "Exam Timetable",
                badge: "Jul – Nov 2026",
                events: [
                    { date: "July 14, 2026", name: "Commencement of Odd Semester Classes", type: "event" },
                    { date: "Aug 07, 2026", name: "Independence Day – Holiday", type: "holiday" },
                    { date: "Sep 08–13, 2026", name: "Internal Assessment Test – I (IAT 1)", type: "exam" },
                    { date: "Sep 29, 2026", name: "Last Date for Practical Record Submission", type: "deadline" },
                    { date: "Oct 02, 2026", name: "Gandhi Jayanti – Holiday", type: "holiday" },
                    { date: "Oct 20–25, 2026", name: "Internal Assessment Test – II (IAT 2)", type: "exam" },
                    { date: "Nov 10, 2026", name: "Last Instructional Day – Odd Semester", type: "deadline" },
                    { date: "Nov 17–Dec 05, 2026", name: "End Semester Examinations", type: "exam" },
                ]
            },
            {
                label: "Holiday List",
                badge: "Jan – May 2027",
                events: [
                    { date: "Jan 05, 2027", name: "Commencement of Even Semester Classes", type: "event" },
                    { date: "Jan 26, 2027", name: "Republic Day – Holiday", type: "holiday" },
                    { date: "Feb 16–21, 2027", name: "Internal Assessment Test – I (IAT 1)", type: "exam" },
                    { date: "Mar 10–14, 2027", name: "SRM Cultural & Sports Fest", type: "event" },
                    { date: "Apr 06–11, 2027", name: "Internal Assessment Test – II (IAT 2)", type: "exam" },
                    { date: "Apr 20, 2027", name: "Last Date for Project Submission", type: "deadline" },
                    { date: "Apr 30, 2027", name: "Last Instructional Day – Even Semester", type: "deadline" },
                    { date: "May 04–22, 2027", name: "End Semester Examinations", type: "exam" },
                ]
            },
             {
                label: "Event Calendar",
                badge: "Jul – Nov 2026",
                events: [
                    { date: "July 14, 2026", name: "Commencement of Odd Semester Classes", type: "event" },
                    { date: "Aug 07, 2026", name: "Independence Day – Holiday", type: "holiday" },
                    { date: "Sep 08–13, 2026", name: "Internal Assessment Test – I (IAT 1)", type: "exam" },
                    { date: "Sep 29, 2026", name: "Last Date for Practical Record Submission", type: "deadline" },
                    { date: "Oct 02, 2026", name: "Gandhi Jayanti – Holiday", type: "holiday" },
                    { date: "Oct 20–25, 2026", name: "Internal Assessment Test – II (IAT 2)", type: "exam" },
                    { date: "Nov 10, 2026", name: "Last Instructional Day – Odd Semester", type: "deadline" },
                    { date: "Nov 17–Dec 05, 2026", name: "End Semester Examinations", type: "exam" },
                ]
            }
        ]
    },
    syllabus: {
        subtitle: "Access updated syllabi and curriculum documents for all programmes. All documents are reviewed annually in alignment with industry and regulatory requirements.",
        items: [
            { dept: "Computer Science & Engineering", prog: "B.Tech / M.Tech", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "AI & Machine Learning", prog: "B.Tech", year: "Revised 2024–25", degree: "UG" },
            { dept: "Electronics & Communication", prog: "B.Tech / M.Tech", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "Mechanical Engineering", prog: "B.Tech", year: "Revised 2024–25", degree: "UG" },
            { dept: "Civil Engineering", prog: "B.Tech", year: "Revised 2024–25", degree: "UG" },
            { dept: "Management Studies", prog: "BBA / MBA", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "Data Science", prog: "M.Sc", year: "Revised 2024–25", degree: "PG" },
            { dept: "Biotechnology", prog: "B.Tech / Ph.D", year: "Revised 2024–25", degree: "UG/PhD" },
            { dept: "Physics, Chemistry & Mathematics", prog: "B.Sc / M.Sc", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "Pharmacy", prog: "B.Pharm / M.Pharm", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "School of Law", prog: "LLB / LLM", year: "Revised 2024–25", degree: "UG/PG" },
            { dept: "Chemical Engineering", prog: "B.Tech", year: "Revised 2024–25", degree: "UG" },
        ]
    },
    faculty: {
        subtitle: "Our faculty are accomplished researchers, industry veterans, and dedicated educators who bring real-world insight into every classroom.",
        profiles: [
            { name: "Dr. Priya Ramasubramanian", role: "Professor & HoD", dept: "Computer Science & Engineering", initials: "PR", areas: ["AI/ML", "Deep Learning", "Computer Vision"] },
            { name: "Dr. Aravind Krishnamurthy", role: "Associate Professor", dept: "Electronics & Communication", initials: "AK", areas: ["VLSI", "Embedded Systems"] },
            { name: "Dr. Meena Sundarajan", role: "Professor", dept: "Biotechnology", initials: "MS", areas: ["Genomics", "Proteomics", "Drug Design"] },
            { name: "Dr. Rajesh Venkataraman", role: "Professor & HoD", dept: "Mechanical Engineering", initials: "RV", areas: ["Thermodynamics", "CFD", "Robotics"] },
            { name: "Dr. Kavitha Annamalai", role: "Assistant Professor", dept: "Management Studies", initials: "KA", areas: ["Strategy", "Analytics", "Finance"] },
            { name: "Dr. Suresh Natarajan", role: "Professor & Dean", dept: "Physics", initials: "SN", areas: ["Quantum Physics", "Nano Materials"] },
            { name: "Dr. Lakshmi Prabha", role: "Associate Professor", dept: "Chemical Engineering", initials: "LP", areas: ["Process Simulation", "Green Chemistry"] },
            { name: "Dr. Anand Balakumar", role: "Professor", dept: "Civil Engineering", initials: "AB", areas: ["Structural Engineering", "Smart Infrastructure"] },
        ]
    },
    exam: {
        subtitle: "The Examination Cell oversees all aspects of student assessment — from scheduling and conduct to result declaration and grievance redressal.",
        guidelines: [
            "Students must carry their Hall Ticket and valid ID to every examination hall.",
            "Use of electronic devices, notes, or unfair means will result in immediate disqualification.",
            "Reporting time is 15 minutes before the scheduled examination commencement.",
            "Requests for re-evaluation must be submitted within 5 working days of result declaration.",
            "Medical certificates for examination postponement must be submitted within 48 hours.",
            "All practical examinations are scheduled and notified at least 10 days in advance.",
            "Students appearing for arrear papers must pre-register through the student portal."
        ],
        cards: [
               { 
                    icon: "fa-solid fa-id-card", 
                    title: "Hall Ticket Download", 
                    desc: "Download your examination hall ticket from the student portal 7 days before exam commencement." 
                },
                { 
                    icon: "fa-solid fa-square-poll-vertical", 
                    title: "Result Declaration", 
                    desc: "End semester results are typically declared within 30 working days after the last examination." 
                },
                { 
                    icon: "fa-solid fa-rotate", 
                    title: "Re-Evaluation & Recount", 
                    desc: "Apply for re-evaluation or photocopy of answer scripts through the student services portal." 
                }
        ],
        contact: {
            controller: "Dr. T. Ramachandran",
            phone: "+91-44-2745 5510",
            email: "examcell@srmist.edu.in",
            hours: "Mon–Fri, 9:00 AM – 5:00 PM",
            location: "Admin Block, Room No. 214, Kattankulathur Campus"
        }
    }
};



function renderDepts(){
    document.getElementById('dept-subtitle').textContent = DATA.departments.subtitle;
    document.getElementById('dept-grid').innerHTML = DATA.departments.list.map(d=>`
        <div class="dept-card reveal">
            <div class="dept-icon"><i class='${d.icon}'></i></div>
            <div class="dept-short">${d.short}</div>
            <div class="dept-name">${d.name}</div>
            <div class="dept-meta">
                <div class="dept-meta-item"><strong>${d.faculty}</strong> Faculty</div>
                <div class="dept-meta-item"><strong>${d.programs}</strong> Programmes</div>
            </div>
        </div>`).join('');
}

const statusBadge = s => {
    const map = { Open:'badge-green', Waitlist:'badge-gold', Limited:'badge-maroon', Rolling:'badge-teal' };
    return `<span class="badge ${map[s]||'badge-teal'}">${s}</span>`;
};

function renderProgrammes(){
    document.getElementById('prog-subtitle').textContent = DATA.programmes.subtitle;
    const tabs = document.getElementById('prog-tabs');
    const panels = document.getElementById('prog-panels');
    DATA.programmes.categories.forEach((cat, i) => {
        tabs.innerHTML += `<button class="prog-tab-btn${i===0?' active':''}" data-idx="${i}">${cat.label}</button>`;
        panels.innerHTML += `<div class="prog-panel${i===0?' active':''}" data-panel="${i}">
            <div class="prog-table-wrap">
                <table class="prog-table">
                    <thead><tr><th>Programme Name</th><th>Duration</th><th>Mode</th><th>Intake</th><th>Status</th></tr></thead>
                    <tbody>
                        ${cat.rows.map(r=>`<tr><td>${r.name}</td><td>${r.duration}</td><td>${r.mode}</td><td>${r.intake}</td><td>${statusBadge(r.status)}</td></tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>`;
    });
    tabs.querySelectorAll('.prog-tab-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
            tabs.querySelectorAll('.prog-tab-btn').forEach(b=>b.classList.remove('active'));
            panels.querySelectorAll('.prog-panel').forEach(p=>p.classList.remove('active'));
            btn.classList.add('active');
            panels.querySelector(`[data-panel="${btn.dataset.idx}"]`).classList.add('active');
        });
    });
}

const typeLabel = t => ({ exam:'Examination', holiday:'Holiday', event:'Event', deadline:'Deadline' }[t]||t);
const typeCls = t => ({ exam:'type-exam', holiday:'type-holiday', event:'type-event', deadline:'type-deadline' }[t]||'type-event');

function renderCalendar(){
    document.getElementById('cal-subtitle').textContent = DATA.calendar.subtitle;
    const card = document.getElementById('cal-year-card');
    card.innerHTML = `
        <div class="cal-year-label">Academic Year</div>
        <div class="cal-year">${DATA.calendar.year}</div>
        <ul class="cal-quick-links">
            ${DATA.calendar.quickLinks.map(l=>`<li>${l}<span>→</span></li>`).join('')}
        </ul>
        <button class="cal-download-btn">⬇ Download Full Calendar (PDF)</button>`;
    document.getElementById('cal-events').innerHTML =
        DATA.calendar.semesters.map(sem=>`
            <div class="semester-block reveal">
                <div class="semester-header">${sem.label}<span class="sem-badge">${sem.badge}</span></div>
                ${sem.events.map(ev=>`
                    <div class="event-row">
                        <span class="event-date">${ev.date}</span>
                        <span class="event-name">${ev.name}</span>
                        <span class="event-type ${typeCls(ev.type)}">${typeLabel(ev.type)}</span>
                    </div>`).join('')}
            </div>`).join('');
}

function renderSyllabus(){
    document.getElementById('syl-subtitle').textContent = DATA.syllabus.subtitle;
    document.getElementById('syllabus-grid').innerHTML = DATA.syllabus.items.map(s=>`
        <div class="syllabus-card reveal" data-degree="${s.degree}">
            <div class="syllabus-dept">${s.dept}</div>
            <div class="syllabus-prog">${s.prog}</div>
            <div class="syllabus-year">${s.year}</div>
            <div class="syllabus-footer">
                <a class="syllabus-download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                </a>
            </div>
        </div>`).join('');
}

function renderFaculty(){
    document.getElementById('fac-subtitle').textContent = DATA.faculty.subtitle;
    const render = (list) => {
        document.getElementById('faculty-grid').innerHTML = list.map(f=>`
            <div class="faculty-card reveal">
                <div class="faculty-cover"><div class="faculty-cover-pattern"></div></div>
                <div class="faculty-avatar-wrap"><div class="faculty-avatar">${f.initials}</div></div>
                <div class="faculty-body">
                    <div class="faculty-name">${f.name}</div>
                    <div class="faculty-role">${f.role}</div>
                    <div class="faculty-dept">${f.dept}</div>
                    <div class="faculty-tags">${f.areas.map(a=>`<span class="faculty-tag">${a}</span>`).join('')}</div>
                    <div class="faculty-contact">
                        <a>Profile</a>
                        <a>Research</a>
                        <a>Contact</a>
                    </div>
                </div>
            </div>`).join('');
    };
    render(DATA.faculty.profiles);
    
}

function renderExam(){
    document.getElementById('exam-subtitle').textContent = DATA.exam.subtitle;
    const c = DATA.exam.contact;
    document.getElementById('exam-layout').innerHTML = `
        <div>
            <div class="exam-info-block reveal">
                <div class="exam-info-title">
                    <i class="fa-solid fa-file-lines"></i> Examination Guidelines
                </div>
                <ul class="exam-list">
                    ${DATA.exam.guidelines.map(g=>`<li>${g}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="exam-cards-col">
            ${DATA.exam.cards.map(card=>`
                <div class="exam-card reveal">
                    <div class="exam-card-icon"><i class='${card.icon}'></i></div>
                    <div>
                        <div class="exam-card-title">${card.title}</div>
                        <div class="exam-card-desc">${card.desc}</div>
                        <a class="exam-card-link">Access Portal →</a>
                    </div>
                </div>`).join('')}
            <div class="exam-contact-card reveal">
                <h3>Controller of Examinations</h3>
                <p>Reach out for queries related to exams, results, and certifications.</p>
                <div class="exam-contact-detail">
                    <div class="ecd-row"><span class="ecd-label">Name</span><span class="ecd-value">${c.controller}</span></div>
                    <div class="ecd-row"><span class="ecd-label">Phone</span><span class="ecd-value">${c.phone}</span></div>
                    <div class="ecd-row"><span class="ecd-label">Email</span><span class="ecd-value">${c.email}</span></div>
                    <div class="ecd-row"><span class="ecd-label">Hours</span><span class="ecd-value">${c.hours}</span></div>
                    <div class="ecd-row"><span class="ecd-label">Where</span><span class="ecd-value">${c.location}</span></div>
                </div>
            </div>
        </div>`;
}

// ─── SCROLL REVEAL ───
function initReveal(){
    const obs = new IntersectionObserver(entries=>{
        entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

// ─── ACTIVE NAV ───
function initActiveNav(){
    const sections = document.querySelectorAll('section[id]');
    const tabs = document.querySelectorAll('.nav-tab');
    window.addEventListener('scroll', ()=>{
        let cur = '';
        sections.forEach(s=>{ if(window.scrollY >= s.offsetTop - 120) cur = s.id; });
        tabs.forEach(t=>{ t.classList.toggle('active', t.getAttribute('href')==='#'+cur); });
    });
}

// ─── INIT ───
renderDepts();
renderProgrammes();
renderCalendar();
renderSyllabus();
renderFaculty();
renderExam();

setTimeout(()=>{
    initReveal();
    initActiveNav();
}, 50);