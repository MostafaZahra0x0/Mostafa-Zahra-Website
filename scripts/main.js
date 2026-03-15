document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initFormHandling();
});

function initThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!navToggle || !mobileMenu) return;
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');
    const statusEl = contactForm.querySelector('.form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput?.value.trim() || '';
        const email = emailInput?.value.trim() || '';
        const message = messageInput?.value.trim() || '';

        function clearValidationState() {
            [nameInput, emailInput, messageInput].forEach(el => {
                el?.classList.remove('invalid');
            });
            if (statusEl) {
                statusEl.textContent = '';
                statusEl.classList.remove('form-status-error');
            }
        }

        clearValidationState();

        const missing = [];
        if (!name) missing.push({ field: 'Name', el: nameInput });
        if (!email) missing.push({ field: 'Email', el: emailInput });
        if (!message) missing.push({ field: 'Message', el: messageInput });

        if (missing.length > 0) {
            const summary = 'Please fill in: ' + missing.map(m => m.field).join(', ');
            if (statusEl) {
                statusEl.textContent = summary;
                statusEl.classList.add('form-status-error');
            }
            missing.forEach(({ el }) => el?.classList.add('invalid'));
            missing[0].el?.focus();
            return;
        }

        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mostafazahra1000@gmail.com&su=${subject}&body=${body}`;

        const popup = window.open(gmailUrl, '_blank');

        if (popup) {
            contactForm.reset();
            if (statusEl) statusEl.textContent = '';
        } else {
            if (statusEl) {
                statusEl.textContent = 'Popup blocked. Opening Gmail in this tab.';
                statusEl.classList.add('form-status-error');
            }
            window.location.href = gmailUrl;
        }
    });
}
