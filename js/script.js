// Меню бургер при клике присваивается (_active) на .menu_icon и .menu_body
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header-nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    // и добовляет на(body) сласс ('_lock') заприщая прокрутку контента при открытом бургере
    document.body.classList.toggle('_lock');
    // ------------------------------------------------
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}
// Slider-swiper
let myImageSlider = new Swiper('.main-slider', {
  // Стрелки
  navigation: {
    // классы кнопок (вперед назад), можно привизать любые обекты для функции стрелок
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
  autoHeight: true,
  // loop: true,
  spaceBetween: 10,
  speed: 800,
  grabCursor: true,
  // autoplay: {
	// delay: 5000,
	// // Закончить на последнем слайде (при выключонном loop: false)
	// stopOnLastSlide: false,
	// // Отключить после ручного переключения
	// 	disableOnInteraction: true
	// },
});