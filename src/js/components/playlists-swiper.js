import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.playlists__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.playlists__slider-next',
    prevEl: '.playlists__slider-prev',
  },

  pagination: {
    el: '.playlists__slider-nav',
    type: 'fraction',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },

  a11y: true,
  prevSlideMessage: 'Предыдущий слайд',
  nextSlideMessage: 'Следующий слайд',
  firstSlideMessage: 'Первый слайд',
  lastSlideMessage: 'Последний слайд',
  paginationBulletMessage: 'Перейти к слайду {{index}}',
});
