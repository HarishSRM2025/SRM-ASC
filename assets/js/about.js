    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.07 });
    sections.forEach(s => observer.observe(s));

    // Active section nav highlighting
    const sectionNavLinks = document.querySelectorAll('.section-nav a');
    const sectionIds = ['snapshot','history','vision','accreditation','governance','orgchart','leadership','milestones'];
    const sectionEls = sectionIds.map(id => document.getElementById(id));

    window.addEventListener('scroll', () => {
        let current = '';
        sectionEls.forEach((el, i) => {
            if (el && window.scrollY >= el.offsetTop - 120) {
                current = sectionIds[i];
            }
        });
        sectionNavLinks.forEach(link => {
            link.style.color = '';
            link.style.borderBottomColor = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--primary-maroon)';
                link.style.borderBottomColor = 'var(--primary-maroon)';
            }
        });
    });

    