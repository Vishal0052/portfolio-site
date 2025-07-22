// Global variables
let currentApp = 'programming-buddy';

// Screenshots data
const screenshots = {
    'programming-buddy': [
        {
            src: 'attached_assets/Screenshot_20250613_103346_1753175831707.png',
            alt: 'Programming Buddy Home Screen'
        },
        {
            src: 'attached_assets/Screenshot_20250613_104904_1753175831706.png',
            alt: 'Programming Languages Selection'
        },
        {
            src: 'attached_assets/Screenshot_20250613_114249_1753175831706.png',
            alt: 'Interview Topics Overview'
        },
        {
            src: 'attached_assets/Screenshot_20250613_115857_1753175831705.png',
            alt: 'Java Topics List'
        }
    ],
    'quizillo': [
        {
            src: 'https://techuntried.com/images/quiz1.png',
            alt: 'Quizillo Home'
        },
        {
            src: 'https://techuntried.com/images/quiz2.png',
            alt: 'Quizillo Categories'
        },
        {
            src: 'https://techuntried.com/images/quiz3.png',
            alt: 'Quizillo Quiz'
        }
    ],
    'bike-game': [
        {
            src: 'https://play-lh.googleusercontent.com/kQRXbbZcZpysR8B3qPLZS0eklLpjcP_VawVsL94LBseIyVcnKkJEHUg7U3lTPFLHqjYv=w526-h296-rw',
            alt: 'Bike Game Home'
        },
        {
            src: 'https://play-lh.googleusercontent.com/NUesDcilXMMD2hkFpXYYlulUv4Re0aWyYdq853qwA8OpTuCvQ54HJmSKSJc9E0Eliw=w526-h296-rw',
            alt: 'Cheat Codes List'
        },
        {
            src: 'https://play-lh.googleusercontent.com/ilJpkB60OJgdaPxzUckr7MtijdUp7I2I-UDi8Pdj5AezPcmRF_VMNJDLGxWnuH4OulU=w526-h296-rw',
            alt: 'Vehicle Codes'
        }
    ]
};

// Navigation functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    mobileMenu.classList.toggle('active');
    
    // Toggle icon
    if (mobileMenu.classList.contains('active')) {
        menuBtn.className = 'fas fa-times';
    } else {
        menuBtn.className = 'fas fa-bars';
    }
}

// Screenshots section functions
function switchApp(appId) {
    currentApp = appId;
    
    // Update active tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update screenshots
    updateScreenshots();
}

function updateScreenshots() {
    const screenshotsGrid = document.getElementById('screenshotsGrid');
    const appScreenshots = screenshots[currentApp];
    
    // Clear current screenshots
    screenshotsGrid.innerHTML = '';
    
    // Add new screenshots
    appScreenshots.forEach(screenshot => {
        const screenshotItem = document.createElement('div');
        screenshotItem.className = 'screenshot-item';
        screenshotItem.innerHTML = `
            <div class="screenshot-frame">
                <img src="${screenshot.src}" alt="${screenshot.alt}">
            </div>
        `;
        screenshotsGrid.appendChild(screenshotItem);
    });
}

// FAQ functions
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItem = faqItems[index];
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = question.querySelector('i');
    
    // Toggle active state
    const isActive = question.classList.contains('active');
    
    if (isActive) {
        question.classList.remove('active');
        answer.classList.remove('active');
        icon.className = 'fas fa-plus';
    } else {
        question.classList.add('active');
        answer.classList.add('active');
        icon.className = 'fas fa-minus';
    }
}

// Toast notification function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        app: formData.get('app'),
        message: formData.get('message')
    };
    
    // Show success message
    showToast('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Initialize page
function initializePage() {
    // Set up contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Set up scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initialize with Programming Buddy screenshots
    updateScreenshots();
    
    // Add fade-in classes to elements for animation
    const animatedElements = document.querySelectorAll('.app-card, .feature-item, .testimonial-card, .faq-item');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Trigger initial animation check
    handleScrollAnimations();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (!mobileMenu.contains(event.target) && 
            !menuBtn.contains(event.target) && 
            mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Handle window resize
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuBtn.className = 'fas fa-bars';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});