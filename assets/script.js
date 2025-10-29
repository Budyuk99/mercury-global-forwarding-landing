// Находим кнопку и контейнер dropdown
const langBtn = document.querySelector(".lang-dropdown");
const langDropdown = document.querySelector(".lang-dropdown");

// Открытие/закрытие меню при клике на кнопку
langBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // чтобы клик не срабатывал на документе
    langDropdown.classList.toggle("active");
});

// Закрытие меню при клике вне dropdown
document.addEventListener("click", () => {
    langDropdown.classList.remove("active");
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
            items: 1.2, // немного выглядывает
            margin: 20,
        },
        1200: {
            items: 1.3, // ещё чуть больше выглядывают
            margin: 40,
        },
        1600: {
            items: 1.5, // при Full HD видно соседние
            margin: 60,
        },
    },
});
