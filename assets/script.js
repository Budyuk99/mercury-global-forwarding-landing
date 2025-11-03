// Находим кнопку и контейнер dropdown
const langBtn = document.querySelector(".lang-dropdown");
const langDropdown = document.querySelector(".lang-dropdown");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

// Открытие/закрытие меню при клике на кнопку
langBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // чтобы клик не срабатывал на документе
    langDropdown.classList.toggle("active");
});

// Закрытие меню при клике вне dropdown
document.addEventListener("click", () => {
    langDropdown.classList.remove("active");
});

// Мобильное меню
mobileMenuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
});

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
    });
});

// Закрытие мобильного меню при ресайзе окна
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mainNav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
    }
});

$(".gallery-slider").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        768: {
            items: 1.2,
            margin: 20,
        },
        1200: {
            items: 1.3,
            margin: 40,
        },
        1600: {
            items: 1.5,
            margin: 60,
        },
    },
});