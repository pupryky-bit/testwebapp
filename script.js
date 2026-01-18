// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Счетчик установок
const downloadCounter = document.getElementById('downloadCounter');
let count = 5248;

// Анимация счетчика при загрузке
window.addEventListener('load', () => {
    let targetCount = count + Math.floor(Math.random() * 50);
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 50);
    
    const counterInterval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(counterInterval);
        }
        downloadCounter.textContent = currentCount.toLocaleString('ru-RU');
    }, 30);
});

// Анимация при наведении на кнопку скачивания
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.background = 'linear-gradient(135deg, #333333, #666666)';
});
downloadBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.background = 'linear-gradient(135deg, #222222, #444444)';
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Параллакс эффект для фона
document.addEventListener('mousemove', (e) => {
    const cubes = document.querySelectorAll('.cube');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cubes.forEach((cube, index) => {
        const speed = 0.05 * (index + 1);
        const x = (mouseX - 0.5) * 50 * speed;
        const y = (mouseY - 0.5) * 50 * speed;
        
        cube.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animated');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .gallery-item, .download-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Добавляем эффект загрузки
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Анимация логотипа
    const logo = document.querySelector('.logo-img');
    if (logo) {
        logo.style.animation = 'logo-appear 0.8s ease forwards';
    }
});

// Добавляем стиль для анимации логотипа
const style = document.createElement('style');
style.textContent = `
    @keyframes logo-appear {
        0% {
            opacity: 0;
            transform: scale(0.8) rotate(-10deg);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }
`;
document.head.appendChild(style);