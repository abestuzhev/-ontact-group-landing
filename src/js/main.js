
const collectionSlideResult = document.querySelectorAll('.fail-slider-img__item');
const collectionSlide = document.querySelectorAll('.fail-slider-img__item');



const resultsSlider = new Swiper('.results .swiper-container', {
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



const failSlider = new Swiper('.fail .swiper-container', {
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
      const activeIndex = this.activeIndex;
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

const teamSlider = new Swiper('.team-mobile .swiper-container', {
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


const windowWidth = (window.innerWidth); // вся ширина окна
const documentWidth = (document.documentElement.clientWidth); // ширина минус прокрутка


window.onscroll = function() {stickyHeader()};

const header = document.querySelector(".section-header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$(function () {

  const $html = $('html');
  const $header = $('.header-layout');

  $('.js-phone-mask').mask('+7(000)000-00-00', {clearIfNotMatch: true});

  function showPopup(icon, popup) {
    $(document).on('click', icon, function (e) {

      e.preventDefault();
      $(popup).addClass('is-visible');
      $('.mfp-bg').addClass('is-visible');


      $html.addClass('blocked');
      // $('body').addClass('blocked');

      const widthScroll = windowWidth - documentWidth;
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

    const parentModal = $(this).parents('.mfp-wrap');
    if (parentModal.data('save')) {
      onPopupClose(parentModal);
    }
  });

  showPopup(".js-show-consultation", '.popup-auth');


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


  $('.header-menu__link').on('click', function(event) {
    event.preventDefault();

      // Store hash
      const hash = this.hash;
      const heightHeader = $('.section-header').height();
      const heightHash = $(hash).offset().top - heightHeader ;


      $('html, body').animate({

        scrollTop: heightHash

      }, 800);

  });




});
