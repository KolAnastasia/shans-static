
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


$('input[type="tel"]').mask("+7 (999) 999-99-99");

$(".main_trust_content").slick({
        slidesToShow: 1,
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


});