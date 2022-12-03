import Swiper, { Navigation, EffectCoverflow, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,

  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: -30,
    depth: 400,
    slideShadows: false,
    scale: 0.6,
  },

  breakpoints: {
    768: {
      navigation: {
        enabled: true,
      },
    },
  },
});
