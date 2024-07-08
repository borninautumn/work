function init() {
    swiperSlide();
}

function swiperSlide() {
    // 인트로 슬라이더
    var introSwiper = new Swiper('.introSwiper', {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 25,
        centeredSlides: true,
        slideToClickedSlide : true,
        speed: 2000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    // 힙 스와이퍼1
    var hipSwiper = new Swiper('.hipSwiper', {
        loop: true,
        slideToClickedSlide : false,
        speed: 1500,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        effect: 'fade',
    });
    // 힙 스와이퍼2
    var hipSwiper = new Swiper('.rockSwiper', {
        loop: true,
        slideToClickedSlide : false,
        speed: 1500,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        effect: 'fade',
    });
}

init();
