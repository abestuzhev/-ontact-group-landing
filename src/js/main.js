

const resultsSlider = new Swiper('.results .swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const failSlider = new Swiper('.fail .swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },

});

$(function(){

});
