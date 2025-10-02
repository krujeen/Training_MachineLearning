// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navigation
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation item based on scroll position
    function highlightActiveNav() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightActiveNav);
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.info-card, .agenda-item, .concept-card, .type-card, .step-item, .metric-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    // Add initial animation class
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Interactive hover effects for cards
    const cards = document.querySelectorAll('.info-card, .type-card, .step-item, .metric-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Floating animation for hero icon
    const heroIcon = document.querySelector('.hero-icon');
    if (heroIcon) {
        setInterval(() => {
            heroIcon.style.transform = `translateY(${Math.sin(Date.now() * 0.003) * 5}px)`;
        }, 16);
    }
    
    // Interactive confusion matrix cells
    const matrixCells = document.querySelectorAll('.tp, .tn, .fp, .fn');
    
    matrixCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Progress indicator for page scroll
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 4px;
                background: linear-gradient(90deg, #2196f3, #21cbf3);
                z-index: 9999;
                transition: width 0.3s ease;
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // Mobile menu toggle (if needed for smaller screens)
    function createMobileMenu() {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.navigation');
            const navMenu = document.querySelector('.nav-menu');
            
            if (!document.querySelector('.mobile-menu-btn')) {
                const menuBtn = document.createElement('button');
                menuBtn.className = 'mobile-menu-btn';
                menuBtn.innerHTML = '☰';
                menuBtn.style.cssText = `
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    padding: 10px;
                    cursor: pointer;
                    display: none;
                `;
                
                nav.querySelector('.container').prepend(menuBtn);
                
                menuBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('mobile-open');
                });
            }
        }
    }
    
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
    
    // Add typing animation to hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        
        typing();
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.section, .info-card, .agenda-item, .concept-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        background: rgba(255,255,255,0.3);
        transform: translateY(-2px);
    }
    
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block !important;
        }
        
        .nav-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(30, 60, 114, 0.98);
            padding: 20px;
        }
        
        .nav-menu.mobile-open {
            display: flex;
        }
    }
`;
document.head.appendChild(style);