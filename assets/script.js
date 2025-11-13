// Находим кнопку и контейнер dropdown
const langBtn = document.querySelector(".lang-dropdown");
const langDropdown = document.querySelector(".lang-dropdown");

// Открытие/закрытие меню при клике на кнопку
langBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // чтобы клик не срабатывал на документе
    langDropdown.classList.toggle("active");
});

// Закрытие меню при клике вне dropdown
document.addEventListener("click", (e) => {
    if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove("active");
    }
});

// Закрытие меню при изменении ориентации экрана
window.addEventListener('orientationchange', () => {
    langDropdown.classList.remove("active");
});

// Закрытие меню при скролле
window.addEventListener('scroll', () => {
    langDropdown.classList.remove("active");
});

$(".gallery-slider").owlCarousel({
  loop: true,
  center: true,
  margin: 20,
  nav: true,
  dots: true,
  smartSpeed: 600,
  responsive: {
    0: {
      items: 1.05,
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

document.querySelectorAll('.toggle-text-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = this.closest('.content-block_item-text');
    const fullText = parent.querySelector('.full-text');
    const isExpanded = parent.classList.contains('expanded');

    if (!isExpanded) {
      // 🔽 Плавное открытие
      parent.classList.add('expanded');
      fullText.style.maxHeight = fullText.scrollHeight + "px";
      this.textContent = "Скрыть";
    } else {
      // 🔼 Плавное закрытие
      fullText.style.maxHeight = fullText.scrollHeight + "px"; // зафиксировать текущую высоту
      requestAnimationFrame(() => {
        fullText.style.maxHeight = "0";
      });

      fullText.addEventListener('transitionend', function handler() {
        parent.classList.remove('expanded');
        fullText.removeEventListener('transitionend', handler);
      });

      this.textContent = "Узнать больше";
    }
  });
});


// Мессенджер кнопка
const messengerBtn = document.querySelector('.messenger-btn');
const messengerWrapper = document.querySelector('.messenger-wrapper');

if (messengerBtn && messengerWrapper) {
    messengerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        messengerWrapper.classList.toggle('active');
    });

    // Закрытие при клике вне области
    document.addEventListener('click', (e) => {
        if (!messengerWrapper.contains(e.target)) {
            messengerWrapper.classList.remove('active');
        }
    });

    // Закрытие при клике на иконку мессенджера (опционально)
    document.querySelectorAll('.messenger-option').forEach(option => {
        option.addEventListener('click', () => {
            setTimeout(() => {
                messengerWrapper.classList.remove('active');
            }, 300);
        });
    });
}
