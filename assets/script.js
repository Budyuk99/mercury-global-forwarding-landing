// Находим кнопку и контейнер dropdown
const langBtn = document.querySelector('.lang-dropdown');
const langDropdown = document.querySelector('.lang-dropdown');

// Открытие/закрытие меню при клике на кнопку
langBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы клик не срабатывал на документе
    langDropdown.classList.toggle('active');
});

// Закрытие меню при клике вне dropdown
document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
});
