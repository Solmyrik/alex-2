const cardsSlider1 = new Swiper(".product__slider-1", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  mousewheel: false,
  speed: 800,
  autoplay: {
    delay: 6000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  navigation: {
    nextEl: ".product__arrow_next",
    prevEl: ".product__arrow_prev",
  },
  autoplay: false,
});
