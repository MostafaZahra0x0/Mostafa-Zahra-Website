document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    protectDesignSystem();
});

function protectDesignSystem() {
    const style = document.createElement('style');
    style.id = 'darkreader-protection';
    style.textContent = `
        html, body, body * {
            forced-color-adjust: none !important;
            -webkit-force-color-adjust: none !important;
            color-scheme: normal !important;
        }
        html, body {
            filter: none !important;
        }
        svg[data-darkreader], #darkreader-shadow-document {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    
    const removeInjectedStyles = () => {
        document.querySelectorAll('#darkreader-ui, #darkreader-shadow-document, [data-darkreader-match]').forEach(el => el.remove());
        document.querySelectorAll('svg[style*="position: fixed"]').forEach(el => {
            if (el.innerHTML.includes('feColorMatrix') || el.innerHTML.includes('feGaussianBlur')) {
                el.remove();
            }
        });
    };
    
    const observer = new MutationObserver(removeInjectedStyles);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    
    window.addEventListener('load', removeInjectedStyles);
    
    const darkReaderInterval = setInterval(() => {
        const shadowHost = document.querySelector('#darkreader-shadow-document');
        if (shadowHost) {
            const shadowRoot = shadowHost.shadowRoot || shadowHost;
            shadowRoot.innerHTML = '';
        }
    }, 100);
    
    setTimeout(() => clearInterval(darkReaderInterval), 3000);
}

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
