/* Loading Screen */
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    if(loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1500);
    }
});

/* Parallax Spotlight Effect */
document.addEventListener('mousemove', (e) => {
    const spotlights = document.querySelectorAll('.spotlight');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    spotlights.forEach((spot, i) => {
        const speed = (i + 1) * 20;
        spot.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

/* Smooth Reveal on Scroll */
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

document.querySelectorAll('.skill-category, .timeline-item, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* Typewriter Effect */
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }, 1800);
}

/* Theme Toggle */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    if(themeToggle) themeToggle.textContent = '🌙'; // Switch icon to moon if light mode is active
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
}