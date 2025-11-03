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
  center: true,
  margin: 20, // расстояние между слайдами
  nav: true,
  dots: true,
  smartSpeed: 600,
  responsive: {
    0: {
      items: 1.05, // виден следующий слайд
      stagePadding: 30,
    },
    768: {
      items: 1.05,
      stagePadding: 60,
    },
    1200: {
      items: 1.05,
      stagePadding: 100,
    },
    1600: {
      items: 1.05,
      stagePadding: 140,
    },
  },
});

