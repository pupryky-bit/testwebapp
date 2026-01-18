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

// Счетчик скачиваний
const downloadCounter = document.getElementById('downloadCounter');
let count = 12847;
setInterval(() => {
    // Случайное увеличение счетчика
    count += Math.floor(Math.random() * 3);
    downloadCounter.textContent = count.toLocaleString('ru-RU');
}, 30000);

// Анимация при наведении на кнопку скачивания
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
});
downloadBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
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
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .gallery-item, .download-card').forEach(el => {
    observer.observe(el);
});

// Загрузка
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
