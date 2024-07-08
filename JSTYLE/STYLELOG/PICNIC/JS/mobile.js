AOS.init();
swiperSlide();
scrollEvent();



function scrollEvent() {
    window.scroll(function(s) {
        document.querySelectorAll('[data-scroll="transform"]').each(function() {
            if (window.scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        
    });
}

function swiperSlide() {
    // 인트로 슬라이더
    var introSwiper = new Swiper('.introSwiper', {
        paceBetween: 30,
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
    
    // 섹션4 슬라이더
    var sec04Swiper = new Swiper('.sec04Swiper', {
        paceBetween: 30,
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // 섹션10 슬라이더
    var sec10Swiper = new Swiper('.sec10Swiper', {
        paceBetween: 30,
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // 섹션13 슬라이더
    var sec13Swiper = new Swiper('.sec13Swiper', {
        paceBetween: 30,
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // 섹션16 슬라이더
    var sec16Swiper = new Swiper('.sec16Swiper', {
        paceBetween: 30,
        loop: true,
        speed: 1000,
        effect: "slide",
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    // 섹션19 슬라이더
    var sec19Swiper = new Swiper('.sec19Swiper', {
        paceBetween: 30,
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // 섹션 에디터 슬라이더
    var editSwiper = new Swiper('.editSwiper', {
        direction: "vertical",
        spaceBetween: -1,
        sliderPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
}
