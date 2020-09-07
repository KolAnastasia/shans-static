
//настройки слайдеров на главной
$(document).ready(function () {
$(".main-page_catalog-szr_slider-wr").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // скрыть стрелки
    nextArrow: $(".catalog-szr_slider-next"),
    prevArrow: $(".catalog-szr_slider-prev"),
})

$(".main-page_catalog-plants_slider-wr").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // скрыть стрелки
    nextArrow: $(".catalog-plants_slider-btn-prev"),
    prevArrow: $(".catalog-plants_slider-btn-next")
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
  centerPadding: 0
});



$('input[type="tel"]').mask("+7 (999) 999-99-99");

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
    let selectItem =  document.querySelectorAll('.header_city_body_item');
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
if ($('div').is(".filter-item-wr")) {
let selectForm = function () {
    let selectHeader = document.querySelector('.filter-item-wr');
    let selectItem =  document.querySelectorAll('.filter-item_body_item');
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

if ($('div').is(".press_filter-item-wr")) {
let filterNews = function () {
  let selectHeader = document.querySelector('.press_filter-item-wr');
  let selectItem =  document.querySelectorAll('.press_filter-item_body_item');
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

});
