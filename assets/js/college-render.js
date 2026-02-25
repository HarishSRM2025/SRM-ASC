/* =========================================
   SRM TRICHY - SECTION RENDER FUNCTIONS
========================================= */

function renderHero() {
    const heroContainer = document.getElementById("hero-section");

    let slidesHTML = collegeData.hero.slides.map(slide => `
        <div class="swiper-slide">
            <div class="hero-slide" style="background-image:url('${slide.image}')">
                <div class="hero-overlay"></div>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">${slide.title}</h1>
                        <p class="hero-subtitle">${slide.subtitle}</p>
                        <a class="btn btn-primary">${slide.btn1}</a>
                        <a class="btn btn-secondary">${slide.btn2}</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    heroContainer.innerHTML = `
        <section class="hero-slider">
            <div class="swiper hero-swiper">
                <div class="swiper-wrapper">
                    ${slidesHTML}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>
    `;
}


function renderAbout() {
    const container = document.getElementById("about-section");

    container.innerHTML = `
        <section class="section about-snapshot">
            <div class="container">
                <div class="snapshot-grid">
                    <div class="snapshot-image">
                        <img src="${collegeData.about.image}" alt="About SRM">
                    </div>
                    <div class="snapshot-content">
                        <span class="section-tag">${collegeData.about.tag}</span>
                        <h2 class="section-title">${collegeData.about.title}</h2>
                        <p>${collegeData.about.description1}</p>
                        <p>${collegeData.about.description2}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}


function renderWhyChoose() {
    const container = document.getElementById("why-section");

    let features = collegeData.whyChoose.map(item => `
        <div class="feature-box">
            <div class="feature-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section greyBg">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Why SRM Trichy</span>
                    <h2 class="section-title">Why Choose Us</h2>
                    <p class="section-subtitle">Key features that make us the preferred choice</p>
                </div>

                <div class="features-grid">
                    ${features}
                </div>
            </div>
        </section>
    `;
}


function renderPlacements() {
    const container = document.getElementById("placements-section");

    let statsHTML = collegeData.placements.stats.map(stat => `
        <div class="stat-box">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join("");

    let recruitersHTML = collegeData.placements.recruiters.map(name => `
        <div class="recruiter-logo">
            <div class="logo-placeholder">${name}</div>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section recruiters-section">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Our Pride</span>
                    <h2 class="section-title">Top Recruiters & Placement Partners</h2>
                    <p class="section-subtitle">Our students are placed in leading companies across industries</p>
                </div>
                <div class="placement-stats">
                    ${statsHTML}
                </div>
                <marquee behavior="alternate" scrolldelay="200">
                    <div class="recruiters-grid">
                        ${recruitersHTML}
                    </div>
                </marquee>
            </div>
        </section>
    `;
}


function renderPrograms() {
    const container = document.getElementById("programs-section");

    let programsHTML = collegeData.programs.map(program => `
        <div class="program-card">
            <div class="program-icon">
                <i class="fas ${program.icon}"></i>
            </div>
            <h3>${program.title}</h3>
            <p>${program.category}</p>
            <a href="#bca" class="btn btn-outline">Learn More</a>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section greyBg">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Our Programs</span>
                    <h2 class="section-title">Course Offered</h2>
                    <p class="section-subtitle">Choose from our wide range of industry-relevant courses</p>
                </div>
                <div class="programs-grid">
                    ${programsHTML}
                </div>
            </div>
        </section>
    `;
}

function renderLeadership() {
    const container = document.getElementById("leadership-section");

    let leadersHTML = collegeData.leadership.map(leader => `
        <div class="leader-card">
            <div class="leader-image">
                <img src="${leader.image}" alt="${leader.name}">
            </div>
            <div class="leader-content">
                <h3>${leader.name}</h3>
                <span class="leader-designation">${leader.designation}</span>
                <p>${leader.message}</p>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section leadership-preview">
            <div class="container3">
                 <div class="section-header text-center">
                    <span class="section-tag">Our Leadership</span>
                    <h2 class="section-title">Visionary Leadership</h2>
                    <p class="section-subtitle">Guiding the institution towards excellence and innovation</p>
                </div>

                <div class="leadership-grid">
                    ${leadersHTML}
                </div>
            </div>
        </section>
    `;
}

function renderNews() {
    const container = document.getElementById("news-section");

    let newsHTML = collegeData.news.map(item => `
        <div class="swiper-slide">
            <div class="event-item">
                <div class="event-date">
                    <span class="date-day">${item.day}</span>
                    <span class="date-month">${item.month}</span>
                </div>
                <div class="event-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="event-content">
                    <span class="event-category">${item.category}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section news-events greyBg">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Stay Updated</span>
                    <h2 class="section-title">News & Events</h2>
                    <p class="section-subtitle">Latest happenings at our campus</p>
                </div>

                <div class="swiper newsSwiper">
                    <div class="swiper-wrapper">
                        ${newsHTML}
                    </div>
                </div>

            </div>
        </section>
    `;

    // Initialize Swiper
    
}

function renderTestimonials() {
    const container = document.getElementById("testimonials-section");

    let testimonialHTML = collegeData.testimonials.map(item => {

    let profileContent = item.image === "noImg"
        ? `<div class="profile-placeholder">
                ${item.name.charAt(0).toUpperCase()}
           </div>`
        : `<img src="${item.image}" alt="${item.name}">`;

        return `
            <div class="swiper-slide">
                <div class="testimonial-card">
                    <p class="testimonial-text">"${item.message}"</p>

                    <div class="testimonial-author">
                        ${profileContent}

                        <div class="author-details">
                            <h4>${item.name}</h4>
                            <p>${item.course}</p>
                        </div>
                    </div>

                    <br>

                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Success Stories</span>
                    <h2 class="section-title">What Our Students Say</h2>
                    <p class="section-subtitle">Hear from our successful alumni and current students</p>
                </div>

                <div class="swiper testimonials-swiper">
                    <div class="swiper-wrapper">
                        ${testimonialHTML}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
    `;
}

function renderQuickLinks() {
    const container = document.getElementById("quick-links-section");

    let linksHTML = collegeData.quickLinks.map(link => `
        <a href="${link.link}" class="quick-link-card">
            <span>${link.title}</span>
        </a>
    `).join("");

    container.innerHTML = `
        <section class="section quick-links-section">
            <div class="container2">
                <div class="section-header text-center">
                    <h2 class="section-title">Quick Links</h2>
                </div>
                <div class="quick-links-grid">
                    ${linksHTML}
                </div>
            </div>
        </section>
    `;
}
function renderCampusLife() {
    const container = document.getElementById("campus-life-section");
    if (!container) return;

    let campusHTML = collegeData.campusLife.map(item => `
        <div class="campus-card">
            <img src="${item.image}" alt="${item.title}">
            <div class="campus-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <section class="section campus-life-section greenBg">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-tag">Campus Life</span>
                    <h2 class="section-title">Campus Life at SRM Trichy</h2>
                    <p class="section-subtitle">A vibrant and dynamic campus environment that nurtures academic excellence, creativity, and leadership.</p>
                </div>

                <div class="campus-grid">
                    ${campusHTML}
                </div>
            </div>
        </section>
    `;
}