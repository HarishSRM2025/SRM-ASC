const contactData = [
    {
        icon: 'fas fa-building-columns',
        title: 'Main Campus',
        lines: ['No. 1, College Road, Trichy - 620 001', 'Tamil Nadu, India'],
        badge: 'Head Office',
        link: null
    },
    {
        icon: 'fas fa-phone-volume',
        title: 'Telephone',
        lines: ['<a href="tel:+914312345678">+91 431 234 5678</a>', '<a href="tel:+914312345679">+91 431 234 5679</a>'],
        badge: 'Mon – Sat, 9am – 5pm',
        link: null
    },
    {
        icon: 'fas fa-envelope-open-text',
        title: 'Email',
        lines: ['<a href="mailto:info@college.edu.in">info@college.edu.in</a>', '<a href="mailto:admissions@college.edu.in">admissions@college.edu.in</a>'],
        badge: 'Response within 24 hrs',
        link: null
    },
    {
        icon: 'fas fa-fax',
        title: 'Fax & Helpline',
        lines: ['Fax: +91 431 234 5680', 'Helpline: 1800-123-4567 (Toll Free)'],
        badge: 'Available 24/7',
        link: null
    },
    {
        icon: 'fas fa-globe',
        title: 'Website & Social',
        lines: ['<a href="#">www.college.edu.in</a>', 'Follow us on @CollegeOfficial'],
        badge: 'Stay Connected',
        link: null
    },
    {
        icon: 'fas fa-clock',
        title: 'Office Hours',
        lines: ['Monday – Friday: 9:00 AM – 5:30 PM', 'Saturday: 9:00 AM – 1:00 PM'],
        badge: 'Sunday Closed',
        link: null
    }
];

const mapData = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7!2d78.6869!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI2LjAiTiA3OMKwNDEnMTMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    address: 'No. 1, College Road, Trichy - 620 001, Tamil Nadu',
    phone: '+91 431 234 5678',
    transport: 'NH 45, Central Bus Stand 2km, Trichy Jn 5km',
    landmark: 'Opposite District Collectorate'
};

const departments = ['General Enquiry', 'Admissions', 'Academic Affairs', 'Examination', 'Hostel', 'Placement', 'Research & Development', 'Scholarships', 'Fee & Finance', 'Other'];

// ============ RENDERERS ============
function renderContactCards() {
    const container = document.getElementById('contact-cards-container');
    container.innerHTML = contactData.map(c => `
        <div class="contact-card">
            <div class="card-icon"><i class="${c.icon}"></i></div>
            <h3>${c.title}</h3>
            <p>${c.lines.join('<br>')}</p>
            <span class="contact-badge">${c.badge}</span>
        </div>
    `).join('');

    // animate
    setTimeout(() => {
        container.querySelectorAll('.contact-card').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80);
        });
    }, 100);
}

function renderMap() {
    const container = document.getElementById('map-container');
    container.innerHTML = `
        <div class="map-header">
            <h3><i class="fas fa-map-pin"></i> Campus Location</h3>
            <span class="map-label"><i class="fas fa-directions"></i> Get Directions</span>
        </div>
        <iframe class="map-frame"
            src="${mapData.src}"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="map-overlay-info">
            <div class="map-info-item"><i class="fas fa-location-dot"></i><div><strong>Address</strong><br>${mapData.address}</div></div>
            <div class="map-info-item"><i class="fas fa-phone"></i><div><strong>Phone</strong><br>${mapData.phone}</div></div>
            <div class="map-info-item"><i class="fas fa-bus"></i><div><strong>Transport</strong><br>${mapData.transport}</div></div>
            <div class="map-info-item"><i class="fas fa-landmark"></i><div><strong>Landmark</strong><br>${mapData.landmark}</div></div>
        </div>
    `;
}

function renderForm() {
    const container = document.getElementById('form-container');
    container.innerHTML = `
        <div class="form-header">
            <h2>Enquiry Form</h2>
            <p>All fields marked with * are required. We value your privacy.</p>
        </div>
        <div class="form-body">
            <form id="enquiryForm" novalidate>
                <div class="form-row">
                    <div class="form-group">
                        <label>First Name <span>*</span></label>
                        <input type="text" id="firstName" placeholder="Enter first name" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name <span>*</span></label>
                        <input type="text" id="lastName" placeholder="Enter last name" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Email Address <span>*</span></label>
                        <input type="email" id="email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-group">
                        <label>Phone Number <span>*</span></label>
                        <input type="tel" id="phone" placeholder="+91 00000 00000" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Department / Enquiry Type <span>*</span></label>
                        <select id="department" required>
                            <option value="" disabled selected>Select a department</option>
                            ${departments.map(d => `<option value="${d}">${d}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Preferred Contact Mode</label>
                        <select id="contactMode">
                            <option value="email">Email</option>
                            <option value="phone">Phone Call</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                </div>
                <div class="form-group full">
                    <label>Subject <span>*</span></label>
                    <input type="text" id="subject" placeholder="Brief subject of your enquiry" required>
                </div>
                <div class="form-group full">
                    <label>Message <span>*</span></label>
                    <textarea id="message" placeholder="Describe your enquiry in detail..." required></textarea>
                </div>
                <div class="form-footer">
                    <p class="form-note"><i class="fas fa-shield-halved"></i> Your data is secure and will not be shared.</p>
                    <button type="submit" class="btn-submit">
                        <i class="fas fa-paper-plane"></i> Submit Enquiry
                    </button>
                </div>
            </form>
        </div>
    `;

    document.getElementById('enquiryForm').addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
        showToast();
        e.target.reset();
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Enquiry';
            btn.disabled = false;
        }, 3000);
    }, 1800);
}

function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
}

// ============ TABS ============
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

const rendered = {};

function activateTab(id) {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    tabContents.forEach(c => c.classList.toggle('active', c.id === 'tab-' + id));

    if (!rendered[id]) {
        rendered[id] = true;
        if (id === 'map') renderMap();
        if (id === 'form') renderForm();
    }
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// ============ INIT ============
renderContactCards();
rendered['details'] = true;