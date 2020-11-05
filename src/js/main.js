
var collectionSlideResult = document.querySelectorAll('.fail-slider-img__item');
var collectionSlide = document.querySelectorAll('.fail-slider-img__item');



var resultsSlider = new Swiper('.results .swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var failSlider = new Swiper('.fail .swiper-container', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  effect: 'fade',
  autoHeight: true,
  // calculateHeight:true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,

  },

  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex;
      collectionSlide.forEach(function (elem) {
        elem.classList.remove('active');
      });
      // collectionSlide[activeIndex].style.zIndex = String(collectionSlide[activeIndex]);

      collectionSlide[activeIndex].classList.add('active');
      collectionSlide[activeIndex - 1].classList.add('visited');

      if (collectionSlide[activeIndex].classList.contains('visited')) {
        collectionSlide[activeIndex].style.zIndex = String((activeIndex - 1) * 2);
        console.log('visited', activeIndex + 20);
        collectionSlide[activeIndex].classList.remove('visited');
      } else {
        collectionSlide[activeIndex].style.zIndex = String(activeIndex * 6);
      }
    },
  }
});

var teamSlider = new Swiper('.team-mobile .swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener('click', function (event) {

  if (event.target.dataset.show === 'consultation') {
    event.preventDefault()
    console.log('consultation');
  }
});


var windowWidth = (window.innerWidth); // вся ширина окна
var documentWidth = (document.documentElement.clientWidth); // ширина минус прокрутка
//
//
window.onscroll = function() {stickyHeader()};

var header = document.querySelector(".section-header");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



/****************************************************************/
/****************************************************************/
/****************************************************************/


(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:1000px)' );

  // keep track of swiper instances to destroy later
  let costSwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( costSwiper !== undefined ) costSwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    costSwiper = new Swiper ('.cost .swiper-container', {

      loop: false,
      direction: 'horizontal',
      autoHeight: true,

      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'fraction',
      // },

      // slidesPerView: 'auto',
      //
      // centeredSlides: true,
      //
      // a11y: true,
      // keyboardControl: true,
      // grabCursor: true,

      // pagination
      pagination: '.swiper-pagination',
      paginationClickable: true,

    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})(); /* IIFE end */
/****************************************************************/
/****************************************************************/
/****************************************************************/



$(function () {

  var $html = $('html');
  var $header = $('.header-layout');
  //
  $('.js-phone-mask').mask('+7(000)000-00-00', {clearIfNotMatch: true});

  function showPopup(icon, popup) {
    $(document).on('click', icon, function (e) {

      e.preventDefault();
      $(popup).addClass('is-visible');
      $('.mfp-bg').addClass('is-visible');


      $html.addClass('blocked');
      // $('body').addClass('blocked');

      var widthScroll = windowWidth - documentWidth;
      console.log('widthScroll: ' + widthScroll);
      if (windowWidth > documentWidth) {
        $html.css({
          'margin-right': widthScroll
        });
        $header.css({
          'padding-right': widthScroll
        });
        // $('.mfp-wrap').css({
        //     'overflow-y':'scroll'
        // });
        // console.log('Есть полоса прокрутки');
      } else {
        // console.log('Нет полосы прокрутки');
      }
    });
  }

  $(document).on('click', '.js-popup-close', function (e) {
    e.preventDefault();
    $(this).parents('.mfp-wrap').removeClass('is-visible');
    $('.mfp-bg').removeClass('is-visible');
    $html.css({
      'margin-right': '0'
    }).removeClass('blocked');

    $header.css({
      'padding-right': '0'
    });

    var parentModal = $(this).parents('.mfp-wrap');
    if (parentModal.data('save')) {
      onPopupClose(parentModal);
    }
  });

  showPopup(".js-show-consultation", '.popup-auth');
  showPopup(".js-show-email", '.popup-email');


  $(document).on('click', '.js-show-menu', function (e) {
    e.preventDefault();
    $('.menu-mobile').toggleClass('is-visible');
  });

  $(document).on('click', '.js-show-efficiency', function (e) {
    e.preventDefault();
    $('.efficiency-popup').toggleClass('is-visible');
  });

  $(document).on('click', '.menu-mobile__close', function (e) {
    e.preventDefault();
    $('.menu-mobile').removeClass('is-visible');
  });
  //
  //
  $('.header-menu__link, .banner-arrow__icon').on('click', function(event) {
    event.preventDefault();

      // Store hash
      var hash = this.hash;
      var heightHeader = $('.section-header').height();
      var heightHash = $(hash).offset().top - heightHeader ;


      $('html, body').animate({

        scrollTop: heightHash

      }, 800);

  });
  //
  //
  // /*простые табы*/
  $(document).on('click', '.tabs-menu a', function(event) {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let tab = $(this).attr("href");
    $('.tab').find(".tab-content").not(tab).css("display", "none");
    // $(this).parents('.tabs-menu').parent().siblings('.tab').find(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });


});
