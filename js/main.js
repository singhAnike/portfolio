/**
 * Portfolio Website - Main JavaScript
 * Handles interactivity, animations, and dynamic content
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const body = document.body;
    const header = document.querySelector('header');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.querySelector('.theme-toggle');
    const backToTopBtn = document.querySelector('.back-to-top');
    const contactForm = document.querySelector('.contact-form');
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');
    const experienceTabs = document.querySelectorAll('.experience-tab');
    const experienceContents = document.querySelectorAll('.experience-content');
    const skillBars = document.querySelectorAll('.skill-progress');
    const loader = document.querySelector('.loader');
    const scrollProgress = document.querySelector('.scroll-progress');
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Initialize page loader
    function initLoader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger initial animations after load
                    animateOnScroll();
                }, 500);
            }, 1000);
        });
    }

    // Navigation toggle for mobile
    function initMobileNav() {
        if (!navToggle) return;
        
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', 
                navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });

        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Theme toggle functionality
    function initThemeToggle() {
        if (!themeToggle) return;
        
        // Check for saved user preference, if any, on load
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            themeToggle.setAttribute('aria-label', 
                savedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
            themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
        }

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            themeToggle.setAttribute('aria-label', 
                newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
            themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Back to top button
    function initBackToTop() {
        if (!backToTopBtn) return;
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Experience tabs functionality
    function initExperienceTabs() {
        if (experienceTabs.length === 0) return;
        
        experienceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                experienceTabs.forEach(t => t.classList.remove('active'));
                experienceContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const target = tab.getAttribute('data-tab');
                document.getElementById(target).classList.add('active');
            });
        });
        
        // Activate first tab by default
        if (experienceTabs.length > 0) {
            experienceTabs[0].click();
        }
    }

    // Project modals
    function initProjectModals() {
        if (projectItems.length === 0) return;
        
        projectItems.forEach(project => {
            project.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = project.getAttribute('data-project');
                const projectData = getProjectData(projectId);
                
                if (projectData) {
                    openModal(projectData);
                }
            });
        });

        // Close modal when clicking the close button or outside the modal
        if (closeModal) {
            closeModal.addEventListener('click', closeProjectModal);
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeProjectModal();
                }
            });
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }
    
    function openModal(project) {
        if (!modal || !modalContent) return;
        
        // Populate modal with project data
        modalContent.innerHTML = `
            <div class="modal-header">
                <h3>${project.title}</h3>
                <button class="close-modal" aria-label="Close project details">&times;</button>
            </div>
            <div class="modal-body">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-details">
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn" target="_blank" rel="noopener">View Live</a>` : ''}
                        ${project.codeUrl ? `<a href="${project.codeUrl}" class="btn btn-outline" target="_blank" rel="noopener">View Code</a>` : ''}
        }
    });
}
    
function openModal(project) {
    if (!modal || !modalContent) return;
    
    // Populate modal with project data
    modalContent.innerHTML = `
        <div class="modal-header">
            <h3>${project.title}</h3>
            <button class="close-modal" aria-label="Close project details">&times;</button>
        </div>
        <div class="modal-body">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-details">
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn" target="_blank" rel="noopener">View Live</a>` : ''}
                    ${project.codeUrl ? `<a href="${project.codeUrl}" class="btn btn-outline" target="_blank" rel="noopener">View Code</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    // Add event listener to the new close button
    const newCloseBtn = modalContent.querySelector('.close-modal');
    if (newCloseBtn) {
        newCloseBtn.addEventListener('click', closeProjectModal);
    }
    
    // Show the modal
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
}

function closeProjectModal() {
    if (!modal) return;
    
    document.body.style.overflow = '';
    modal.classList.remove('active');
}

// Mock function to get project data - replace with actual data source
function getProjectData(projectId) {
    // This is a placeholder - replace with your actual project data
    const projects = {
        'project1': {
            title: 'Project One',
            description: 'A detailed description of Project One. Explain what the project does, the problems it solves, and the technologies used.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            image: 'images/projects/project1.jpg',
            liveUrl: '#',
            codeUrl: '#'
        },
        'project2': {
            title: 'Project Two',
            description: 'A detailed description of Project Two. Explain what the project does, the problems it solves, and the technologies used.',
            technologies: ['Node.js', 'Express', 'MongoDB'],
            image: 'images/projects/project2.jpg',
            liveUrl: '#',
            codeUrl: '#'
        },
        // Add more projects as needed
    };
    
    return projects[projectId];
}

// Animate skill bars on scroll
function initSkillAnimations() {
    if (skillBars.length === 0) return;
    
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.width = level;
                skillBar.style.opacity = 1;
                observer.unobserve(skillBar);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Scroll progress indicator
function initScrollProgress() {
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Custom cursor
function initCustomCursor() {
    if (!cursor || !cursorFollower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Add a slight delay to the follower for a trailing effect
        setTimeout(() => {
            cursorFollower.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        }, 100);
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = ['a', 'button', '.btn', 'input', 'textarea', 'select', 'label[for]'];
    
    interactiveElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-follower-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-follower-hover');
            });
        });
    });
}

// Form submission handling
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        try {
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Replace with your form submission logic
            // Example with fetch API:
            /*
            const response = await fetch('your-form-endpoint', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } else {
                throw new Error('Network response was not ok');
            }
            */
            
            // For demo purposes, simulate a successful submission
            setTimeout(() => {
                showNotification('Message sent successfully! (Demo)', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }, 1000);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('Failed to send message. Please try again.', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}
    
// Show notification message
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

// Animate elements on scroll
function animateOnScroll() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const animate = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(animate, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}
            observer.observe(element);
        });
    }

    // Initialize all functionality
    function init() {
        initLoader();
        initMobileNav();
        initThemeToggle();
        initSmoothScrolling();
        initBackToTop();
        initExperienceTabs();
        initProjectModals();
        initSkillAnimations();
        initScrollProgress();
        initCustomCursor();
        initContactForm();
        
        // Initialize animations for elements already in view
        animateOnScroll();
        
        // Log a welcome message
        console.log('%c👋 Hello! Thanks for checking out my portfolio.', 'font-size: 16px; color: #4a6cf7;');
        console.log('%c🔍 Feel free to explore the code on GitHub!', 'font-size: 14px; color: #6c757d;');
    }

    // Start the application
    init();
});

// Add a simple typewriter effect for the hero subtitle
function initTypewriter() {
    const typewriterElement = document.querySelector('.hero-subtitle');
    if (!typewriterElement) return;
    
    const words = JSON.parse(typewriterElement.getAttribute('data-words') || '[]');
    if (words.length === 0) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 50;
        } else {
            charIndex++;
            typingSpeed = 100;
        }
        
        typewriterElement.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start the typewriter effect after a delay
    setTimeout(type, 1000);
}

// Initialize typewriter effect when the page loads
window.addEventListener('DOMContentLoaded', initTypewriter);