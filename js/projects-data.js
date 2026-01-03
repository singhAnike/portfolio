// Projects Data
const projects = [
    {
        id: 1,
        title: "Multi-Channel Inventory & Shipment Automation",
        shortDesc: "Automated inventory synchronization across multiple sales channels and streamlined shipment processing.",
        description: "Developed a custom Odoo module to automate inventory synchronization across Amazon (US & India), Flipkart, WooCommerce, and Shiprocket. The solution eliminated manual data entry, prevented stockouts, and improved order fulfillment efficiency.",
        role: "Odoo Developer & System Architect",
        responsibilities: [
            "Designed and developed custom Odoo module for multi-channel inventory management",
            "Integrated with Amazon FBA, Flipkart, and WooCommerce APIs for real-time inventory sync",
            "Automated inbound/outbound shipment processing with Shiprocket integration",
            "Implemented cron jobs for automated stock updates and order processing",
            "Optimized database queries for better performance with large datasets"
        ],
        technologies: ["Odoo", "Python", "PostgreSQL", "XML", "REST APIs", "Amazon MWS API", "WooCommerce API"],
        challenges: [
            "Ensuring real-time inventory sync across multiple platforms",
            "Handling API rate limits and timeouts",
            "Maintaining data consistency during high transaction volumes"
        ],
        solutions: [
            "Implemented queue-based processing for API calls",
            "Created custom conflict resolution mechanisms",
            "Designed efficient database indexing and caching strategies"
        ],
        results: [
            "Reduced manual inventory management by 90%",
            "Decreased order processing time by 75%",
            "Eliminated stock discrepancies between channels",
            "Improved order fulfillment accuracy to 99.9%"
        ],
        value: "Transformed inventory management from a manual, error-prone process to an automated, efficient system that scales with business growth.",
        image: "images/projects/multi-channel-intigration.jpg",
        tags: ["Odoo", "E-commerce", "Automation", "Integration"]
    },
    {
        id: 2,
        title: "Amazon Ads Campaign Optimization",
        shortDesc: "Automated keyword extraction and bid optimization for Amazon advertising campaigns.",
        description: "Integrated Amazon Ads API to automate keyword extraction and bid optimization for manual campaigns. The solution processed Auto Keyword Campaign Reports to identify high-performing keywords and ASINs for manual targeting, significantly improving ad performance and ROI.",
        role: "Python Developer & Data Analyst",
        responsibilities: [
            "Developed Python scripts to interact with Amazon Ads API",
            "Created data processing pipelines for campaign performance analysis",
            "Implemented bid optimization algorithms based on performance metrics",
            "Automated report generation and data visualization",
            "Reduced manual intervention in campaign management"
        ],
        technologies: ["Python", "Amazon Ads API", "Pandas", "NumPy", "AsyncIO", "PostgreSQL", "REST APIs"],
        challenges: [
            "Handling large volumes of campaign data efficiently",
            "Implementing real-time bid adjustments",
            "Ensuring data accuracy and consistency"
        ],
        solutions: [
            "Implemented asynchronous API calls for better performance",
            "Developed custom algorithms for bid optimization",
            "Created data validation and error handling mechanisms"
        ],
        results: [
            "Improved ad efficiency by 40%",
            "Reduced cost-per-click by 25%",
            "Increased click-through rate by 30%",
            "Automated 90% of routine campaign management tasks"
        ],
        value: "Revolutionized Amazon advertising strategy through data-driven optimization, delivering higher ROI with less manual effort.",
        image: "images/projects/amz_bid_optimizations.jpg",
        tags: ["Digital Marketing", "Automation", "Data Analysis", "Python"]
    },
    {
        id: 3,
        title: "Movie Database Web Application",
        shortDesc: "Interactive web application for browsing and searching movie information.",
        description: "Developed a full-stack web application with Python Flask backend and Angular frontend that allows users to browse, search, and view detailed information about movies from a comprehensive database.",
        role: "Full Stack Developer",
        responsibilities: [
            "Designed and implemented RESTful API endpoints using Flask",
            "Created responsive UI components with Angular",
            "Integrated with movie database API for data retrieval",
            "Implemented search and filtering functionality",
            "Optimized frontend performance for better user experience"
        ],
        technologies: ["Python", "Flask", "Angular", "TypeScript", "REST API", "HTML5", "CSS3", "SQLite"],
        challenges: [
            "Handling large datasets efficiently",
            "Creating a responsive and intuitive user interface",
            "Ensuring smooth data flow between frontend and backend"
        ],
        solutions: [
            "Implemented server-side pagination and filtering",
            "Used Angular Material for responsive UI components",
            "Optimized API responses with proper data serialization"
        ],
        results: [
            "Delivered project 3 days ahead of schedule",
            "Achieved 100% client satisfaction rating",
            "Received 5-star review for code quality and documentation"
        ],
        value: "Delivered a high-quality, user-friendly movie database application that showcases full-stack development skills and attention to client requirements.",
        image: "images/projects/movie.jpg",
        tags: ["Web Development", "Angular", "Flask", "REST API"]
    },
    {
        id: 4,
        title: "Odoo-Razorpay Payment Integration",
        shortDesc: "Fixed and enhanced payment gateway integration for seamless transaction processing.",
        description: "Resolved critical payment processing issues in an Odoo 19 Enterprise e-commerce store by implementing proper Razorpay callback URL configuration and payment verification flow.",
        role: "Odoo Developer & Payment Integration Specialist",
        responsibilities: [
            "Diagnosed and fixed payment callback URL issues",
            "Implemented proper payment verification flow",
            "Ensured secure handling of payment callbacks",
            "Documented the solution for future reference",
            "Performed thorough testing of all payment methods"
        ],
        technologies: ["Odoo 19 Enterprise", "Razorpay API", "Python", "JavaScript", "XML"],
        challenges: [
            "Debugging payment callback issues in production",
            "Ensuring secure handling of payment data",
            "Maintaining compatibility with existing checkout flow"
        ],
        solutions: [
            "Implemented proper callback URL configuration",
            "Added comprehensive error handling and logging",
            "Created test cases for all payment scenarios"
        ],
        results: [
            "Successfully fixed payment processing issues",
            "Achieved 100% successful payment redirections",
            "Received 5-star client review for quick resolution",
            "Provided detailed documentation for future maintenance"
        ],
        value: "Restored critical payment functionality, ensuring smooth and secure transactions for the e-commerce store, directly impacting revenue and customer satisfaction.",
        image: "images/projects/razorpay-intigration.jpg",
        tags: ["E-commerce", "Payment Gateway", "Odoo", "Integration"]
    },
    {
        id: 5,
        title: "Python Script Optimization & Review",
        shortDesc: "Professional code review and optimization for Python scripts.",
        description: "Provided comprehensive code review, debugging, and optimization services for Python scripts, ensuring they are efficient, maintainable, and follow best practices.",
        role: "Python Code Reviewer & Optimizer",
        responsibilities: [
            "Performed detailed code reviews and analysis",
            "Identified and fixed performance bottlenecks",
            "Improved code readability and maintainability",
            "Added comprehensive documentation and comments",
            "Provided recommendations for best practices"
        ],
        technologies: ["Python", "Code Review", "Performance Optimization", "Debugging", "Unit Testing"],
        challenges: [
            "Understanding complex legacy code",
            "Improving performance without breaking functionality",
            "Ensuring backward compatibility"
        ],
        solutions: [
            "Implemented incremental improvements with thorough testing",
            "Added comprehensive test coverage",
            "Documented all changes and recommendations"
        ],
        results: [
            "Improved script execution time by up to 60%",
            "Received 5-star client feedback for code quality",
            "Established long-term collaboration for future projects"
        ],
        value: "Delivered high-quality, optimized Python code that exceeds client expectations, demonstrating expertise in code quality and performance optimization.",
        image: "images/projects/python-script-checker.jpg",
        tags: ["Code Review", "Python", "Optimization", "Best Practices"]
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Freelance Client - Movie App",
        role: "Client, Freelancer.com",
        content: "Aniket delivered a fantastic movie web application using Flask and Angular. His attention to detail and commitment to quality were impressive. He completed the project ahead of schedule and was very responsive to all my requests. The code was clean, well-documented, and followed best practices. I would definitely work with him again!",
        rating: 5,
        project: "Movie Database Web Application"
    },
    {
        id: 2,
        name: "E-commerce Store Owner",
        role: "Client, Freelancer.com",
        content: "Aniket fixed our Odoo-Razorpay integration issue that was causing major problems with our online store. He was extremely professional, understood the problem quickly, and implemented a robust solution. His communication was excellent throughout the project, and he provided detailed documentation. The payment processing is now working flawlessly, and our customers are having a much better experience.",
        rating: 5,
        project: "Odoo-Razorpay Payment Integration"
    },
    {
        id: 3,
        name: "Python Script Client",
        role: "Client, Upwork",
        content: "I had the privilege of collaborating with Aniket Singh as I sought a Python script checker, and I'm thoroughly impressed. Aniket's remarkable patience and expertise made the experience seamless. He meticulously reviewed and tested my Python scripts, ensuring flawless code. What sets him apart is his unwavering patience. He patiently addressed my queries, explained complex concepts in a comprehensible manner, and offered continuous guidance. Aniket's dedication to delivering quality, error-free scripts is exceptional.",
        rating: 5,
        project: "Python Script Optimization & Review"
    }
];

// Function to initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Initialize projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    // Initialize testimonials
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        testimonials.forEach(testimonial => {
            const testimonialElement = createTestimonial(testimonial);
            testimonialsSlider.appendChild(testimonialElement);
        });
    }
});

// Function to create project card HTML
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.tags.join(' '));
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image || 'images/projects/project-placeholder.jpg'}" alt="${project.title}">
            <div class="project-links">
                <a href="#" class="btn-view" data-project-id="${project.id}" data-title="${project.title}">View Details</a>
            </div>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.shortDesc}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Function to create project details modal
function createProjectDetails(project) {
    const modal = document.createElement('div');
    modal.className = 'project-details';
    modal.id = `project-${project.id}`;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', `project-${project.id}-title`);
    modal.setAttribute('aria-modal', 'true');
    
    modal.innerHTML = `
        <div class="project-details-overlay"></div>
        <div class="project-details-content">
            <button class="btn-close-details" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="project-details-body">
                <h3 id="project-${project.id}-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-section">
                    <h4>My Role & Responsibilities</h4>
                    <ul>
                        ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-section">
                    <h4>Technologies Used</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-section">
                    <h4>Challenges & Solutions</h4>
                    <div class="challenge-solution">
                        <div class="challenges">
                            <h5>Challenges</h5>
                            <ul>
                                ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="solutions">
                            <h5>Solutions</h5>
                            <ul>
                                ${project.solutions.map(solution => `<li>${solution}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="project-section">
                    <h4>Results & Impact</h4>
                    <ul class="results-list">
                        ${project.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-value">
                    <h4>Value Delivered</h4>
                    <p>${project.value}</p>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Function to create testimonial HTML
function createTestimonial(testimonial) {
    const testimonialElement = document.createElement('div');
    testimonialElement.className = 'testimonial';
    
    // Create star rating
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    testimonialElement.innerHTML = `
        <div class="testimonial-content">
            <p>${testimonial.content}</p>
        </div>
        <div class="testimonial-footer">
            <div class="testimonial-rating">${stars}</div>
            <div class="testimonial-author">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
                <p class="testimonial-project">${testimonial.project}</p>
            </div>
        </div>
    `;
    
    return testimonialElement;
}

// Add event delegation for project cards
document.addEventListener('click', function(e) {
    const viewBtn = e.target.closest('.btn-view');
    const closeBtn = e.target.closest('.btn-close-details, .project-details-overlay');
    
    // Handle view details button
    if (viewBtn) {
        e.preventDefault();
        const projectId = viewBtn.dataset.projectId;
        const projectTitle = viewBtn.dataset.title;
        const project = projects.find(p => p.id == projectId);
        
        if (project) {
            // Close any open modals first
            closeAllModals();
            
            // Create and show the modal
            const modal = createProjectDetails(project);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Focus management for accessibility
            setTimeout(() => {
                modal.classList.add('active');
                const closeButton = modal.querySelector('.btn-close-details');
                if (closeButton) closeButton.focus();
            }, 10);
        }
    }
    
    // Handle close details button or overlay click
    if (closeBtn) {
        e.preventDefault();
        const modal = closeBtn.closest('.project-details');
        closeModal(modal);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.project-details.active');
        if (activeModal) {
            e.preventDefault();
            closeModal(activeModal);
        }
    }
});

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    
    // Wait for the fade-out animation to complete before removing
    setTimeout(() => {
        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
        document.body.style.overflow = ''; // Re-enable scrolling
        
        // Focus back to the view button that opened the modal
        const viewBtn = document.activeElement.closest('.project-card')?.querySelector('.btn-view');
        if (viewBtn) viewBtn.focus();
    }, 300); // Match this with your CSS transition duration
}

function closeAllModals() {
    const modals = document.querySelectorAll('.project-details');
    modals.forEach(modal => {
        closeModal(modal);
    });
}
