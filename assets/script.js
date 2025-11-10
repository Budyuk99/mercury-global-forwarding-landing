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
mobileMenuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
    document.body.classList.toggle("menu-open", mainNav.classList.contains("active")); // <--- добавлено

    // Анимация гамбургера
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mainNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.classList.remove('menu-open'); // <--- добавлено
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Закрытие мобильного меню при клике вне его области
document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mainNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.classList.remove('menu-open'); // <--- добавлено
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});


// Закрытие мобильного меню при ресайзе окна
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mainNav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.classList.remove('menu-open'); // <--- добавлено
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
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
