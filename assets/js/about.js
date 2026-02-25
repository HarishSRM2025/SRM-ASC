document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Section with Animated Background
    const heroSection = document.getElementById('about-hero-section');
    if (heroSection) {
        heroSection.innerHTML = `
            <section class="breadcrum-hero">
                <div class="breadcrum-hero-overlay"></div>
                <div class="breadcrum-hero-content">
                    <h1>About Us</h1>
                    <p class="fade-up-delay">SRM Trichy Arts and Science College — Where Tradition Meets Innovation.</p>
                </div>
                <div class="breadcrumb">
                    <a href="index.html"><i class="fas fa-home"></i> Home</a>
                    <span class="separator">›</span>
                    <span class='active'>About Us</span>
                </div>
            </section>
          
        `;
    }

    // 2. History Timeline & Overview
    const overviewSection = document.getElementById('about-overview-section');
    if (overviewSection) {
        overviewSection.innerHTML = `
            <section class="overview-section container">
                <div class="overview-grid">
                    <div class="overview-content">
                        <span class="sub-title">OUR JOURNEY</span>
                        <h2>A Glorious History of 50+ Years</h2>
                        <p>The legacy of SRM Group began in 1969 with the SRM Nightingale School. After half a century of academic service, SRM has established one of India's largest educational conglomerates.</p>
                        <p>The Trichy Campus, established in 2007, flourished into a multidisciplinary hub. In 2018, the Arts and Science College was launched to provide world-class humanities and science education in the heart of Tamil Nadu.</p>
                        
                        <div class="timeline">
                            <div class="time-item"><span>1969</span><p>Founding of SRM Group</p></div>
                            <div class="time-item"><span>2007</span><p>Launch of SRM Trichy Campus</p></div>
                            <div class="time-item"><span>2018</span><p>Inauguration of Arts & Science College</p></div>
                        </div>
                    </div>
                    <div class="vision-mission-container">
                        <div class="vm-card vision">
                            <div class="icon-circle"><i class="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To emerge as a world-class hub of knowledge and research, fostering innovation and leadership to serve society.</p>
                        </div>
                        <div class="vm-card mission">
                            <div class="icon-circle"><i class="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To provide high-quality education through a rigorous curriculum, state-of-the-art facilities, and a focus on holistic development.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="stats-counter-bar">
                <div class="container stats-flex">
                    <div class="stat-box"><h3 class="counter" data-target="130">0</h3><p>Acres Campus</p></div>
                    <div class="stat-box"><h3 class="counter" data-target="40">0</h3><p>Expert Faculty</p></div>
                    <div class="stat-box"><h3 class="counter" data-target="100">0</h3><p>% Placement Guidance</p></div>
                    <div class="stat-box"><h3 class="counter" data-target="27">0</h3><p>Institutions in Group</p></div>
                </div>
            </section>
        `;
    }

    // 3. Accreditation & Affiliation
    const accreditationSection = document.createElement('div');
    accreditationSection.id = 'accreditation-section';
    overviewSection.after(accreditationSection);
    accreditationSection.innerHTML = `
        <section class="accreditation-area container">
            <div class="section-header text-center">
                <span class="section-tag">Accreditation & Affiliation</span>
                <h2 class="section-title">Recognition & Approvals</h2>
                <p class="section-subtitle">
                    Recognized and affiliated with reputed statutory bodies, 
                    ensuring academic credibility, quality standards, and excellence in higher education.
                </p>
            </div>
            <div class="acc-grid">
                <div class="acc-card">
                    <img src="assets/image/aff/1.jfif" alt="University">
                    <h4>Affiliated to Bharathidasan University</h4>
                </div>
                <div class="acc-card">
                    <img src="assets/image/aff/2.png"  alt="NAAC">
                    <h4>NAAC Accredited Institution</h4>
                </div>
                <div class="acc-card">
                    <img src="assets/image/aff/3.png" alt="ISO">
                    <h4>ISO 9001:2015 Certified</h4>
                </div>
            </div>
        </section>
    `;

    // 4. Detailed Leadership Messages
    const leadershipSection = document.getElementById('leadership-section');
    if (leadershipSection) {
        leadershipSection.innerHTML = `
            <section class="leadership-messages container">
                <div class="section-header text-center">
                    <span class="section-tag">Our Leadership</span>
                    <h2 class="section-title">Visionary Leadership</h2>
                    <p class="section-subtitle">
                        Guiding the institution towards excellence and innovation
                    </p>
                </div>
                <div class="leadership-slider">
                    <div class="message-card main-leader">
                        <div class="leader-img-box">
                        <img src="assets/image/leaders/1.png" alt="Founder"></div>
                        <div class="message-content">
                            <h3>Dr. T. R. Paarivendhar</h3>
                            <span class="designation">Founder Chairman</span>
                            <p>"Education is the most powerful weapon which you can use to change the world. At SRM, we don't just teach; we transform lives and build a nation."</p>
                        </div>
                    </div>

                    <div class="secondary-leaders-grid">
                        <div class="s-leader">
                            <div class='leaderImg'>
                                <img src="assets/image/leaders/1.png" alt="Founder">
                            </div>
                            <h4>Dr. R. Shivakumar</h4>
                            <span>Chairman</span>
                            <p>"Our goal is to create an ecosystem where curiosity meets opportunity, ensuring every student is future-ready."</p>
                        </div>
                        <div class="s-leader">
                            <div class='leaderImg'>
                                <img src="assets/image/leaders/1.png" alt="Founder">
                            </div>
                            <h4>Mr. S. Niranjan</h4>
                            <span>Co-Chairman</span>
                            <p>"We bridge the gap between academic theory and industry reality through our unique VAT sessions."</p>
                        </div>
                        <div class="s-leader">
                            <div class='leaderImg'>
                                <img src="assets/image/leaders/1.png" alt="Founder">
                            </div>
                            <h4>Dr. N. Sethuraman</h4>
                            <span>Chief Director</span>
                            <p>"Discipline and excellence are the pillars of our institution."</p>
                        </div>
                         <div class="s-leader">
                            <div class='leaderImg'>
                                <img src="assets/image/leaders/1.png" alt="Founder">
                            </div>
                            <h4>Dr. M.S.R. Mariyappan</h4>
                            <span>Principal</span>
                            <p>"Welcome to a journey of discovery. We are committed to your holistic development."</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // 5. Governance & Organizational Chart
    const orgSection = document.getElementById('org-structure-section');
    if(orgSection) {
        orgSection.innerHTML = `
            <section class="governance-container container">
                <div class="section-header text-center">
                    <span class="section-tag">Institutional Framework</span>
                    <h2 class="section-title">Governance & Structure</h2>
                    <p class="section-subtitle">
                        A transparent and well-defined administrative structure 
                        ensuring academic excellence and effective leadership.
                    </p>
                </div>
                
                <div class="org-chart-wrapper">
                    
                    <div class="chart-visual">
                        <div class="chart-node level-1">Founder Chairman</div>
                        <div class="chart-line"></div>
                        <div class="chart-node level-2">Chairman / Co-Chairman</div>
                        <div class="chart-line"></div>
                        <div class="chart-node-row">
                            <div class="chart-node level-3">Chief Director</div>
                            <div class="chart-node level-3">Campus Director</div>
                        </div>
                        <div class="chart-line"></div>
                        <div class="chart-node level-4">Principal</div>
                        <div class="chart-line"></div>
                        <div class="chart-node level-5">HODs & Faculty</div>
                    </div>
                </div>
            </section>
        `;
    }

    // --- Utility Functions ---

    // Intersection Observer for Animations
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                if(entry.target.querySelector('.counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .vm-card, .leader-card').forEach(el => observer.observe(el));

    function startCounter(parent) {
        const counters = parent.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200;
            const inc = target / speed;
            const update = () => {
                const count = +counter.innerText;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(update, 15);
                } else {
                    counter.innerText = target + (target === 100 ? "%" : "+");
                }
            };
            update();
        });
    }
});