
//настройки слайдеров на главной
$(document).ready(function () {
  $(".main-page_catalog-szr_slider-wr").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // скрыть стрелки
    nextArrow: $(".catalog-szr_slider-next"),
    prevArrow: $(".catalog-szr_slider-prev"),
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  })


  $(".main-page_catalog-plants_slider-wr").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // скрыть стрелки
    nextArrow: $(".catalog-plants_slider-btn-prev"),
    prevArrow: $(".catalog-plants_slider-btn-next"),
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  })

  $(".main-slider-wr").slick({
    nextArrow: $(".main-slider_btn-prev"),
    prevArrow: $(".main-slider_btn-next")

  })


  $('.photo-gallery').fancybox({

  })


  $('.product-card_szr_view_photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-card_szr_top_view_nav'
  });

  $('.product-card_szr_top_view_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-card_szr_view_photo',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
  });




  $(".main_trust_content").slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    appendArrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false, // показывать `точки`
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0",
        },
      }
    ]
  })

  $(".inner-news_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".inner-news_slider_next"),
    prevArrow: $(".inner-news_slider_prev")
  })

  if ($('div').is(".header_city_header")) {
    let select = function () {
      let selectHeader = document.querySelector('.header_city_header');
      let selectItem = document.querySelectorAll('.header_city_body_item');
      selectHeader.addEventListener("click", function () {
        selectToggle();
        document.querySelector('.header_number_link').classList.toggle('hidden')
      });
      selectItem.forEach(function (item) {
        item.addEventListener("click", function () {
          selectChoose(item);
        });
      });
      function selectToggle() {
        document.querySelector('.header_city').classList.toggle('active');
      }
      function selectChoose(option) {
        let selectedText = option.innerText
        document.querySelector('.select__current').innerText(selectedText);
        selectToggle();
      }
    };
    select();
  }
  if ($('div').is(".about-history-wr")) {

    $('.about-history_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      centerMode: true,
      asNavFor: '.about-history_slider-nav'
    });

    $('.about-history_slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.about-history_slider',
      dots: false,
      focusOnSelect: true,
      nextArrow: $('.about-history_slider-btn-next'),
      prevArrow: $('.about-history_slider-btn-prev'),
      centerPadding: 0,
    });

  }

  $('.about-mission_slider').slick({
    nextArrow: $('.about-mission_slider-arr-next'),
    prevArrow: $('.about-mission_slider-arr-prev'),
  })

  $('.about-production_slider').slick({
    nextArrow: $('.about-production_slider-arr-next'),
    prevArrow: $('.about-production_slider-arr-prev'),
  })


  if ($('div').is(".filter-item-wr")) {
    let selectForm = function () {
      let selectHeader = document.querySelector('.filter-item-wr');
      let selectItem = document.querySelectorAll('.filter-item_body_item');
      selectHeader.addEventListener("click", function () {
        selectToggle();
      });
      selectItem.forEach(function (item) {
        item.addEventListener("click", function () {
          selectChoose(item);
        });
      });
      function selectToggle() {
        document.querySelector('.filter-item').classList.toggle('active');
      }
      function selectChoose(option) {
        let selectedText = option.innerText
        document.querySelector('.select__current').innerText(selectedText);
        selectToggle();
      }
    };
    selectForm();
  }

  $('.tabs-dots li').click(function (event) {
    $('.tabs-details').removeClass('active');
    $('.tabs-dots li').removeClass('is-active');
    var num = $(this).attr('data-n');
    $('#tabs-details' + num).addClass('active');
    $(this).addClass('is-active');
  });

  if ($('div').is(".inner-gallery_slider")) {
    $('.inner-gallery_slider').slick({
      nextArrow: $('.inner-gallery_slider-arr-next'),
      prevArrow: $('.inner-gallery_slider-arr-prev')

    })
  }

  if ($('div').is("#about-geography_map")) {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("about-geography_map", {
        center: [55.030199, 82.92043],
        zoom: 4,
      }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div></div>'
        ),
        myPlacemarkWithContent = new ymaps.Placemark([55.030199, 82.92043], {

          hintContent: '<div style="background: #78BE20; color: #ffffff; padding: 14px; max-width: 140px"> <div style="text-transform: uppercase; font-weight: bold;"> Волгоград </div>  </br> пр-т Университетский, 64, оф 207</div>',
        },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../img/map-icon.svg',
            iconImageSize: [18, 23],
            iconImageOffset: [-20, -15],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
          }
        );
      myMap.geoObjects
        .add(myPlacemarkWithContent);

      myMap.setType('yandex#map');


    }
  }


  if ($('div').is("#contacts-map")) {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("contacts-map", {
        center: [51.67347848805412, 39.252679558197],
        zoom: 17,
      }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div></div>'
        ),
        myPlacemarkWithContent = new ymaps.Placemark([51.67347848805412, 39.252679558197], {

        },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../img/contacts-mapIcon.svg',
            iconImageSize: [32, 38],
            iconImageOffset: [-20, -15],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
          }
        );
      myMap.geoObjects
        .add(myPlacemarkWithContent);

      myMap.setType('yandex#map');
    }
  }




  if ($('div').is(".press_filter-item-wr")) {
    let filterNews = function () {
      let selectHeader = document.querySelector('.press_filter-item-wr');
      let selectItem = document.querySelectorAll('.press_filter-item_body_item');
      selectHeader.addEventListener("click", function () {
        selectToggle();
      });
      selectItem.forEach(function (item) {
        item.addEventListener("click", function () {
          selectChoose(item);
        });
      });
      function selectToggle() {
        document.querySelector('.press_filter-item').classList.toggle('active');
      }
      function selectChoose(option) {
        let selectedText = option.innerText
        document.querySelector('.select__current').innerText(selectedText);
        selectToggle();
      }
    };
    filterNews();
  }

  if ($('div').is(".contacts-where_filter-item-wr")) {
    let filterWhere = function () {
      let selectHeader = document.querySelector('.contacts-where_filter-item-wr');
      let selectItem = document.querySelectorAll('.contacts-where_filter-item_body_item');
      selectHeader.addEventListener("click", function () {
        selectToggle();
      });
      selectItem.forEach(function (item) {
        item.addEventListener("click", function () {
          selectChoose(item);
        });
      });
      function selectToggle() {
        document.querySelector('.contacts-where_filter-item').classList.toggle('active');
      }
      function selectChoose(option) {
        let selectedText = option.innerText
        document.querySelector('.select__current').innerText(selectedText);
        selectToggle();
      }
    };
    filterWhere();
  }

  if ($('div').is(".feedback-theme-wr")) {

    let feedbackTheme = function () {
      let selectHeader = document.querySelector('.feedback-theme_header');
      let selectItem = document.querySelectorAll('.feedback-theme_body_item');
      selectHeader.addEventListener("click", function () {
        selectToggle();
      });
      selectItem.forEach(function (item) {
        item.addEventListener("click", function () {
          selectChoose(item);
        });
      });
      function selectToggle() {
        document.querySelector('.feedback-theme').classList.toggle('active');
      }
      function selectChoose(option) {
        let selectedText = option.innerText
        document.querySelector('.select__current').innerText(selectedText);
        selectToggle();
      }
    };

    feedbackTheme();
  }


  if ($('div').is("#where-map")) {
    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("where-map", {
        center: [53.373799, 83.662384],
        zoom: 17,
      }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div></div>'
        ),
        myPlacemarkWithContent = new ymaps.Placemark([53.373799, 83.662384], {

        },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../img/contacts-mapIcon.svg',
            iconImageSize: [32, 38],
            iconImageOffset: [-20, -15],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
          }
        );
      myMap.geoObjects
        .add(myPlacemarkWithContent);

      myMap.setType('yandex#map');
    }
  }


  $('.inform-cultures_inner_aside_menu li').click(function (event) {
    $('.inform-cultures_inner_content-wr').removeClass('active');
    $('.inform-cultures_inner_aside_menu li').removeClass('is-active');
    var num = $(this).attr('data-n');
    $('#tabs-details' + num).addClass('active');
    $(this).addClass('is-active');
  });

  $('input[type="tel"]').mask("+7 (999) 999-99-99");



  (function () {
    var d = document,
      accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
      setAria,
      setAccordionAria,
      switchAccordion,
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window);

   var skipClickDelay = function (e) {
      e.preventDefault();
      e.target.click();
    }

    var setAriaAttr = function (el, ariaType, newProperty) {
      el.setAttribute(ariaType, newProperty);
    };
    var setAccordionAria = function (el1, el2, expanded) {
      switch (expanded) {
        case "true":
          setAriaAttr(el1, 'aria-expanded', 'true');
          setAriaAttr(el2, 'aria-hidden', 'false');
          break;
        case "false":
          setAriaAttr(el1, 'aria-expanded', 'false');
          setAriaAttr(el2, 'aria-hidden', 'true');
          break;
        default:
          break;
      }
    };

    //function
    var switchAccordion = function (e) {
      console.log("triggered");
      e.preventDefault();
      var thisAnswer = e.target.parentNode.nextElementSibling;
      var thisQuestion = e.target;
      if (thisAnswer.classList.contains('is-collapsed')) {
        setAccordionAria(thisQuestion, thisAnswer, 'true');
      } else {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
      }
      thisQuestion.classList.toggle('is-collapsed');
      thisQuestion.classList.toggle('is-expanded');
      thisAnswer.classList.toggle('is-collapsed');
      thisAnswer.classList.toggle('is-expanded');

      thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
      if (touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if (pointerSupported) {
        accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
  })();

  
  $('.fav-btn-dots ').click(function (event) {
    $('.fav-wr').removeClass('active');
    $('.fav-btn-dots').removeClass('active');
    var type = $(this).attr('data-n');
    $('.fav-' + type).addClass('active');
    $(this).addClass('active');
  });

  $('.mob-menu_icon').click(function() {
    $('.mob-menu_icon').toggleClass('active');
    $('.mob-menu_container').toggleClass('active');
    $('main').toggleClass('fixed');
    $('.footer').toggleClass('fixed');
  })

  $('.main-page_filter-open').click(function() {
    $('.catalog-szr-wrap_filters-wrap').toggleClass('active')
  })

});

