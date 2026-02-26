// Topbar Component
const topbarHTML = `


 <div class="container">
                <div class="top-header-content">
                    <div class="header-left">
                        <div class="accreditation-badges">
                            <span class="badge">NAAC Accredited</span>
                            <span class="badge">ISO 9001:2015</span>
                            <span class="badge">Affiliated to Bharathidasan University</span>
                        </div>
                    </div>
                    <div class="header-right">
                        <a href="tel:+918939242880" class="header-link">
                            <i class="fas fa-phone"></i> +91 89392 42880
                        </a>
                        <a href="mailto:info@srmtrichy.edu.in" class="header-link">
                            <i class="fas fa-envelope"></i> info@srmtrichy.edu.in
                        </a>
                        <a href="#" class="header-link">
                            <i class="fas fa-map-marker-alt"></i> Mannachanallur, Trichy
                        </a>
                    </div>
                </div>
            </div>
`;

const QuicklinkHTML=`
<div class="container">
    <div class="quick-links">
        <a href="#admissions" class="quick-link"><i class="fas fa-file-alt"></i> Apply Now</a>
        <a href="#" class="quick-link"><i class="fas fa-user"></i> Student Login</a>
        <a href="#" class="quick-link"><i class="fas fa-graduation-cap"></i> Alumni Portal</a>
        <a href="#" class="quick-link"><i class="fas fa-download"></i> Prospectus</a>
        <a href="#" class="quick-link"><i class="fas fa-shield-alt"></i> Anti-Ragging</a>
    </div>
</div>
`
// Navbar Component with Dropdown
const navbarHTML = `

<div class="container">
    <div class="navbar-wrapper">
        <!-- Logo -->
        <a href="#" class="navbar-logo">
            <img src="assets/image/logo.jpg" alt="SRM Trichy Logo">
        </a>
        <!-- Navigation Menu -->
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="active">Home</a></li>
            <li class="has-dropdown">
                <a href="about.html">About <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="about.html#about">About College</a></li>
                    <li><a href="about.html#vision">Vision & Mission</a></li>
                    <li><a href="about.html#accreditation">Accreditation</a></li>
                    <li><a href="about.html#governance">Governance</a></li>
                    <li><a href="about.html#leadership">Leadership</a></li>
                    <li><a href="about.html#milestones">Milestones</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="academics.html">Academics <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="academics.html#departments">Departments</a></li>
                    <li><a href="academics.html#programmes">Programmes Offered</a></li>
                    <li><a href="academics.html#calendar">Calendar</a></li>
                    <li><a href="academics.html#syllabus">Syllabus</a></li>
                    <li><a href="academics.html#faculty">Faculty</a></li>
                    <li><a href="academics.html#exam">Exam</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="admission.html">Admissions <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="admission.html#admission-process">Admission Process</a></li>
                    <li><a href="admission.html#admission-eligibility">Eligibility Criteria</a></li>
                    <li><a href="admission.html#admission-fees">Fee Structure</a></li>
                    <li><a href="admission.html#admission-scholarships">Scholarships</a></li>
                    <li><a href="admission.html#admission-apply">Online Application</a></li>
                </ul>
            </li>
            <li class="has-dropdown">
                <a href="student_corner.html">Students <i class="fas fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="student_corner.html#portal">Student Portal</a></li>
                    <li><a href="student_corner.html#results">Exam Results</a></li>
                    <li><a href="student_corner.html#library">Library</a></li>
                    <li><a href="student_corner.html#clubs">Clubs & Activities</a></li>
                </ul>
            </li>
            <li><a href="infrastructure.html" class="active">Infrastructure</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="newsandevents.html">News & Events</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <!-- Mobile Toggle -->
        <button class="mobile-toggle" id="mobileToggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</div>
`;

// Footer Component
const footerHTML = `

<div class="footer-top">
            <div class="container">
                <div class="footer-grid">
                    <!-- About Column -->
                    <div class="footer-col">
                        <div class="footer-logo">
                            <img src="assets/image/logo.jpg" alt="SRM Trichy Logo">
                        </div>
                        <p>NAAC Accredited institution committed to excellence in education, research, and innovation.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#admissions">Admissions</a></li>
                            <li><a href="#departments">Departments</a></li>
                            <li><a href="#placements">Placements</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Alumni</a></li>
                        </ul>
                    </div>

                    <!-- Important Links -->
                    <div class="footer-col">
                        <h4>Important Links</h4>
                        <ul class="footer-links">
                            <li><a href="#">Student Portal</a></li>
                            <li><a href="#">Faculty Login</a></li>
                            <li><a href="#">Online Fee Payment</a></li>
                            <li><a href="#">Exam Results</a></li>
                            <li><a href="#">Anti-Ragging Cell</a></li>
                            <li><a href="#">Grievance Redressal</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div class="footer-col">
                        <h4>Contact Us</h4>
                        <ul class="contact-info">
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Mannachanallur, Tiruchirappalli<br>Tamil Nadu - 621005, India</span>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <span>+91 89392 42880</span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <span>info@srmtrichy.edu.in</span>
                            </li>
                            <li>
                                <i class="fas fa-clock"></i>
                                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <p>&copy; 2025 SRM Trichy Arts & Science College. All Rights Reserved.</p>
                    <div class="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span>|</span>
                        <a href="#">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
`;

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load Topbar
    const topbarContainer = document.getElementById('topbar-container');
    if (topbarContainer) {
        topbarContainer.innerHTML = topbarHTML;
    }
    
    const Quick_Link = document.getElementById('quicklink');
    if (Quick_Link) {
        Quick_Link.innerHTML = QuicklinkHTML;
    }
    
    // Load Navbar
    const navbarContainer = document.getElementById('mainNavbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
       // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Mobile Dropdown Toggle
    const hasDropdown = document.querySelectorAll('.has-dropdown > a');
    hasDropdown.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && mobileToggle) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });

    // Sticky Navbar
    const navbar = document.getElementById('mainNavbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });
    });

    }
    
    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});