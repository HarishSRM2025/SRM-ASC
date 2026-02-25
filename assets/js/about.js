document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Centralized Data Object ---
    const pageData = {
        hero: {
            title: "About Us",
            subtitle: "SRM Trichy Arts and Science College — Where Tradition Meets Innovation.",
            breadcrumb: "About Us"
        },
        overview: {
            tag: "OUR JOURNEY",
            title: "A Glorious History of 50+ Years",
            description1: "SRM Trichy Arts and Science College, affiliated to Bharathidasan University, Tiruchirappalli was started in the academic year 2018-2019. The college is in continuous pursuit of educational excellence by providing a holistic learning environment for students with state of the art infrastructure & facilities.",
            description2: "The Trichy Campus, established in 2007, flourished into a multidisciplinary hub. In 2018, the Arts and Science College was launched to provide world-class humanities and science education in the heart of Tamil Nadu.",
            timeline: [
                { year: "1969", text: "Founding of SRM Group" },
                { year: "2007", text: "Launch of SRM Trichy Campus" },
                { year: "2018", text: "Inauguration of Arts & Science College" }
            ],
            detailedAboutTitle: "More About Our Institution",
            detailedAboutText: "SRM Trichy Arts and Science College is committed to nurturing intellectual growth and professional skills. Our campus provides a vibrant atmosphere where students from diverse backgrounds come together to achieve academic excellence. With a focus on research, innovation, and placement, we ensure our graduates are ready to lead in the global market.",
            // This will fuel the 2x2 grid in the first row
            highlights: [
                { count: "50+", label: "Academic Programs" },
                { count: "5000+", label: "Students Enrolled" },
                { count: "200+", label: "Industry Partners" },
                { count: "15+", label: "Sports Facilities" }
            ],
            vision: "To foster excellence in arts and sciences by cultivating a vibrant academic environment that promotes innovation, interdisciplinary research, critical inquiry, and academic integrity. We aspire to empower students to become intellectually competent, socially responsible, and globally competitive leaders who contribute meaningfully to society.",
            mission: "To provide transformative and inclusive education in arts and sciences through learner-centered pedagogy, research-driven curriculum, and experiential learning opportunities. We are committed to nurturing analytical thinking, creativity, ethical values, and lifelong learning skills while fostering holistic development and community engagement.",
            vmtag: "Our Philosophy",
            vmtitle: "Vision & Mission",
            vmsubtitle: "Shaping intellectually empowered and socially responsible graduates.",
        },
        stats: [
            { label: "Acres Campus", target: 130, suffix: "+" },
            { label: "Expert Faculty", target: 40, suffix: "+" },
            { label: "% Placement Guidance", target: 100, suffix: "%" },
            { label: "Institutions in Group", target: 27, suffix: "+" }
        ],
        accreditations: {
            tag: "Accreditation & Affiliation",
            title: "Recognition & Approvals",
            subtitle: "Recognized and affiliated with reputed statutory bodies, ensuring academic credibility, quality standards, and excellence in higher education.",
            items: [
                { img: "assets/image/aff/1.jfif", title: "Affiliated to Bharathidasan University" },
                { img: "assets/image/aff/2.png", title: "NAAC Accredited Institution" },
                { img: "assets/image/aff/3.png", title: "ISO 9001:2015 Certified" }
            ]
        },
        leadership: {
            tag: "Our Leadership",
            title: "Visionary Leadership",
            subtitle: "Guiding the institution towards excellence and innovation",
            founder: {
                name: "Dr. T. R. Paarivendhar",
                role: "Founder Chairman",
                img: "assets/image/leaders/1.png",
                quote: "Education is the most powerful weapon which you can use to change the world. At SRM, we don't just teach; we transform lives and build a nation."
            },
            team: [
                { 
                    name: "Dr. R. Shivakumar", 
                    role: "Chairman", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Our goal is to create an ecosystem where curiosity meets opportunity, ensuring every student is future-ready." 
                },
                { 
                    name: "Mr. S. Niranjan", 
                    role: "Co-Chairman", 
                    img: "assets/image/leaders/1.png", 
                    quote: "We bridge the gap between academic theory and industry reality through our unique VAT sessions." 
                },
                { 
                    name: "Dr. N. Sethuraman", 
                    role: "Chief Director", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Discipline and excellence are the pillars of our institution." 
                },
                { 
                    name: "Dr. M.S.R. Mariyappan", 
                    role: "Principal", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Welcome to a journey of discovery. We are committed to your holistic development." 
                }
            ],
            team2:[
                  { 
                    name: "Dr. M.S.R. Mariyappan", 
                    role: "Principal", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Welcome to a journey of discovery. We are committed to your holistic development." 
                },
                { 
                    name: "Dr. N. Sethuraman", 
                    role: "Chief Director", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Discipline and excellence are the pillars of our institution." 
                },
                { 
                    name: "Dr. M.S.R. Mariyappan", 
                    role: "Principal", 
                    img: "assets/image/leaders/1.png", 
                    quote: "Welcome to a journey of discovery. We are committed to your holistic development." 
                }
            ]
        }
    };

    // --- 2. Rendering Logic ---

    // Render Hero
    const heroSection = document.getElementById('about-hero-section');
    if (heroSection) {
        heroSection.innerHTML = `
            <section class="breadcrum-hero">
                <div class="breadcrum-hero-overlay"></div>
                <div class="breadcrum-hero-content">
                    <h1>${pageData.hero.title}</h1>
                    <p class="fade-up-delay">${pageData.hero.subtitle}</p>
                </div>
                <div class="breadcrumb">
                    <a href="index.html"><i class="fas fa-home"></i> Home</a>
                    <span class="separator">›</span>
                    <span class='active'>${pageData.hero.breadcrumb}</span>
                </div>
            </section>`;
    }

    const overviewSection = document.getElementById('about-overview-section');
    if (overviewSection) {
        overviewSection.innerHTML = `
            <section class="overview-section container">
                <div class="overview-main-grid">
                    <div class="overview-content-left">
                        <div class="overview-image-wrapper">
                            <img src="assets/image/about_left2.jpg" alt="SRM Trichy Campus" class="side-img-alt">
                        </div>
                        
                    </div>

                    <div class="overview-visual-right">
                        <span class="sub-title">${pageData.overview.tag}</span>
                        <h2>${pageData.overview.title}</h2>
                        <p>${pageData.overview.description1}</p>
                        <p>${pageData.overview.description2}</p>
                       
                        <div class="highlights-mini-grid">
                            ${pageData.overview.highlights.map(item => `
                                <div class="highlight-card">
                                    <h4>${item.count}</h4>
                                    <p>${item.label}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="overview-detailed-row">
                    <hr class="section-divider">
                    <div class="detailed-text-box">
                        <h3>${pageData.overview.detailedAboutTitle}</h3>
                        <p>${pageData.overview.detailedAboutText}</p>
                    </div>
                </div>
            </section>

            <section class="stats-counter-bar">
                <div class="container stats-flex">
                    ${pageData.stats.map(stat => `
                        <div class="stat-box">
                            <h3 class="counter" data-target="${stat.target}" data-suffix="${stat.suffix}">0</h3>
                            <p>${stat.label}</p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="vm-focus-section">
                <div class="section-header text-center">
                    <span class="section-tag">${pageData.overview.vmtag}</span>
                    <h2 class="section-title">${pageData.overview.vmtitle}</h2>
                    <p class="section-subtitle">${pageData.overview.vmsubtitle}</p>
                </div>
                <div class="container">
                    <div class="vm-grid">
                        <div class="vm-card vision">
                            <div class="icon-circle"><i class="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>${pageData.overview.vision}</p>
                        </div>
                        <div class="vm-card mission">
                            <div class="icon-circle"><i class="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>${pageData.overview.mission}</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Render Accreditations
    const accreditationSection = document.createElement('div');
    accreditationSection.id = 'accreditation-section';
    accreditationSection.className='greyBg';
    if(overviewSection) overviewSection.after(accreditationSection);
    accreditationSection.innerHTML = `
        <section class="accreditation-area container">
            <div class="section-header text-center">
                <span class="section-tag">${pageData.accreditations.tag}</span>
                <h2 class="section-title">${pageData.accreditations.title}</h2>
                <p class="section-subtitle">${pageData.accreditations.subtitle}</p>
            </div>
            <div class="acc-grid">
                ${pageData.accreditations.items.map(item => `
                    <div class="acc-card">
                        <img src="${item.img}" alt="${item.title}">
                        <h4>${item.title}</h4>
                    </div>
                `).join('')}
            </div>
        </section>`;

    // Render Leadership
    const leadershipSection = document.getElementById('leadership-section');
    if (leadershipSection) {
        leadershipSection.innerHTML = `
            <section class="leadership-messages container">
                <div class="section-header text-center">
                    <span class="section-tag">${pageData.leadership.tag}</span>
                    <h2 class="section-title">${pageData.leadership.title}</h2>
                    <p class="section-subtitle">${pageData.leadership.subtitle}</p>
                </div>
                <div class="leadership-slider">
                    <div class="message-card main-leader">
                        <div class="leader-img-box"><img src="${pageData.leadership.founder.img}" alt="Founder"></div>
                        <div class="message-content">
                            <h3>${pageData.leadership.founder.name}</h3>
                            <span class="designation">${pageData.leadership.founder.role}</span>
                            <p>"${pageData.leadership.founder.quote}"</p>
                        </div>
                    </div>
                    <div class="secondary-leaders-grid">
                        ${pageData.leadership.team.map(leader => `
                            <div class="s-leader">
                                <div class='leaderImg'><img src="${leader.img}" alt="${leader.name}"></div>
                                <h4>${leader.name}</h4>
                                <span>${leader.role}</span>
                                <p>"${leader.quote}"</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="secondary-leaders-grid2">
                        ${pageData.leadership.team2.map(leader => `
                            <div class="s-leader">
                                <div class='leaderImg'><img src="${leader.img}" alt="${leader.name}"></div>
                                <h4>${leader.name}</h4>
                                <span>${leader.role}</span>
                                <p>"${leader.quote}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>`;
    }

    // --- 3. Animation Logic (Remains unchanged but re-triggered) ---

    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Check if this specific entry contains counters
                const counters = entry.target.querySelectorAll('.counter');
                if(counters.length > 0) {
                    counters.forEach(counter => startCounter(counter));
                }
            }
        });
    }, observerOptions);

    // Select elements after they are injected into DOM
    document.querySelectorAll('section, .vm-card, .s-leader, .stats-counter-bar').forEach(el => observer.observe(el));

    function startCounter(counter) {
        if (counter.classList.contains('counted')) return; // Prevent double counting
        counter.classList.add('counted');
        
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || "+";
        const speed = 100; 
        const inc = target / speed;

        const update = () => {
            const count = +counter.innerText.replace(/[^0-9]/g, '');
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(update, 20);
            } else {
                counter.innerText = target + suffix;
            }
        };
        update();
    }
});