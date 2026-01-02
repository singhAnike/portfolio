document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-links');
    const backToTopBtn = document.querySelector('.back-to-top');
    const contactForm = document.getElementById('contact-form');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const scrollProgress = document.querySelector('.scroll-progress');

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        });
    }

    // Initialize Typed.js for typewriter effect
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.typewriter', {
            strings: [
                'Full Stack Developer',
                'UI/UX Designer',
                'Problem Solver',
                'Tech Enthusiast'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });
    }

    // Theme Toggle
    function initTheme() {
        // Get theme from localStorage or use system preference
        let currentTheme = localStorage.getItem('theme');
        
        // If no theme is set in localStorage, use system preference
        if (!currentTheme) {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        }
        
        // Apply the theme
        applyTheme(currentTheme);
    }
    
    function applyTheme(theme) {
        // Set the theme attribute on the HTML element
        document.documentElement.setAttribute('data-theme', theme);
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Dispatch a custom event in case other components need to react to theme changes
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // Mobile Navigation Toggle
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && mobileNav) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Custom Cursor
    function initCustomCursor() {
        if (!cursor || !cursorFollower) return;
        
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animate = () => {
            // Easing for cursor
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;
            
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorFollower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Add hover effects
        const hoverElements = ['a', 'button', '.btn', 'input', 'textarea', 'select'];
        hoverElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                    cursorFollower.classList.add('cursor-follower-hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                    cursorFollower.classList.remove('cursor-follower-hover');
                });
            });
        });
    }

    // Scroll Progress Indicator
    function initScrollProgress() {
        if (!scrollProgress) return;
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }

    // Form Submission Handling
    function initContactForm() {
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            try {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate form submission (replace with actual fetch call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('Error submitting form:', error);
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // Show notification
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide and remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Initialize all functions
    function init() {
        initTheme(); // Initialize theme first
        initCustomCursor();
        initScrollProgress();
        initContactForm();
    }

    // Start the application
    init();
});
