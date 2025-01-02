$(document).ready(function () {
  AOS.init({
    once: true // animate once
  });

  $(window).on("scroll", function () {
    AOS.init();
  });

  window.addEventListener('resize', () => {
    AOS.refresh();
  });

  // var elms1 = document.querySelector("#tab-nonCustomer .splide");
  // var elms2 = document.querySelector("#tab-customer .splide");

  var option = {
    perPage: 1,
    drag: false,
    gap: 0,
    breakpoints: {
      768: {
        perPage: 1,
        padding: {
          left: "0",
          right: "0",
        },
        gap: "0",
      },
      // 425: {
      //   perPage: 1,
      //   padding: {
      //     left: "2em",
      //     right: "2em",
      //   },
      //   gap: "2em",
      // },
      // 375: {
      //   perPage: 1,
      //   padding: {
      //     left: "0em",
      //     right: "0em",
      //   },
      //   gap: "2em",
      // },
    },
    type: "loop",
    arrows: true,
    pagination: false,
  };

  // 翻卡片
  $('.crossbank-card__card-item').click(function() {
    $(this).toggleClass('is-flipped');
  });

  // SLIDER
  // ------------------------
  var elms = document.getElementsByClassName('splide');
  var sliders = [];
  var sliderTab;

  for (var i = 0, len = elms.length; i < len; i++) {

    var options = {
      perPage: 1,
      arrows: true,
      pagination: false,
      gap: "0",
    };

    // 跨行理財 Slider
    if (elms[i].classList.contains('slider-crossbank')) {
      options.perPage = 3;
      options.gap = "0";
      options.breakpoints = {
        1024: {
          perPage: 3,
          gap: "0",
        },
        768: {
          width: "95%",
          perPage: 1,
          gap: "0",
        },
        475: {
          width: "100%",
          perPage: 1,
          gap: "0",
        }
      }
    }
    // 獨家優勢 Slider
    else if (elms[i].classList.contains('slider-exclusive')) {
      options.perPage = 3;
      options.gap = "0";
      options.breakpoints = {
        768: {
          width: "95%",
          perPage: 1,
          gap: 0,
        },
      }
    }

    sliders[i] = new Splide(elms[i], options).mount();

    if (elms[i].classList.contains('date-tab')) {
      sliderTab = sliders[i];
    }
  }

  // Resize
  function sliderResize() {
    for (var i = 0; i < sliders.length; i++) {
      sliders[i].emit('resize');
    }
  }

  // TAB
  // ------------------------
  $('.tabs_btn').click(function () {
    var tabId = $(this).data('tab');
    $('.tabs_btn, .table__con').removeClass('active');

    $(this).addClass('active');
    $('#' + tabId).addClass('active').fadeIn("slow");
    sliderResize();
  });


  // Navbar
  // ------------------------
  $(".nav__trigger").on("click", function () {
    var $nav = $(".nav");
    var $body = $("body");

    if (!$nav.hasClass("nav--active")) {
      $nav.addClass("nav--active");
      $body.addClass("scroll-fixed");
    } else {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");
    }

    $(".nav__link").on("click", function () {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");

    });

    $(".nav__overlay").on("click", function () {
      $nav.removeClass("nav--active");
      $body.removeClass("scroll-fixed");
    });

  });

  // Scroll 到區塊時 Navbar選單加上active
  // ------------------------
  $(window).on('scroll', function() {
    var scrollPos = $(this).scrollTop();

    $('section').each(function() {
      var sectionTop = $(this).offset().top - 100;
      if (scrollPos >= sectionTop) {
        var sectionId = $(this).attr('id');
        $('.nav__link').removeClass('active');
        $('.nav__link[href="#' + sectionId + '"]').addClass('active');
      }
    });
  });
});
