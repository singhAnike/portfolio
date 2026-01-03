document.addEventListener('DOMContentLoaded', function() {
    // Three dot menu functionality
    const menuDots = document.querySelector('.menu-dots');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (menuDots && dropdownMenu) {
        menuDots.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            dropdownMenu.classList.toggle('show');
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuDots.contains(e.target) && !dropdownMenu.contains(e.target)) {
                menuDots.classList.remove('active');
                dropdownMenu.classList.remove('show');
                menuDots.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close dropdown when clicking on a link
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuDots.classList.remove('active');
                dropdownMenu.classList.remove('show');
                menuDots.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close dropdown on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && dropdownMenu.classList.contains('show')) {
                menuDots.classList.remove('active');
                dropdownMenu.classList.remove('show');
                menuDots.setAttribute('aria-expanded', 'false');
                menuDots.focus();
            }
        });
    }
});
