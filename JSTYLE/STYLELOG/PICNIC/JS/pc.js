swiperSlide();
scrollEvent();

// 스크롤 이벤트
function scrollEvent() {
    $('.stylelog__wrap').scroll(function(s) {
        console.log('스크롤: ' + $('.stylelog__wrap').scrollTop());
        // 섹션1 두번째 이미지 fade-up
        $('.sec01 .posiImg').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 150) {
                $(this).addClass('active');
                console.log('섹션1 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션3 두번째 이미지 scale
        $('.sec03 .posiImg').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 1200) {
                $(this).addClass('scale');
                console.log('섹션3 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('scale');
            }
        });
        // 섹션4 두번째 이미지 fade-up
        $('.sec04 .sec04_txt').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 2000) {
                $(this).addClass('active');
                console.log('섹션4 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션5 첫번째 이미지 컬러 -> 흑백
        $('.sec05 .changeImg').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 2600) {
                $(this).addClass('color');
                console.log('섹션5 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('color');
            }
        });
        // 섹션5 두번째 이미지 scale 2.2 -> 1
        $('.sec05 .posiImg').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 2700) {
                $(this).addClass('scale');
                console.log('섹션5 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('scale');
            }
        });
        // 섹션6 랜딩버튼
        $('.sec06 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 3600) {
                $(this).addClass('active');
                console.log('섹션6 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션8 랜딩버튼
        $('.sec08 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 5300) {
                $(this).addClass('active');
                console.log('섹션8 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션12 posiImg 첫번째 이미지 fade-up
        $('.sec12 .posiImg:nth-child(2)').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 8200) {
                $(this).addClass('active');
                console.log('섹션12 스크롤1: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션12 posiImg 두번째 이미지 fade-up
        $('.sec12 .posiImg:nth-child(3)').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 8300) {
                $(this).addClass('active');
                console.log('섹션12 스크롤2: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션13 랜딩버튼
        $('.sec13 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 8900) {
                $(this).addClass('active');
                console.log('섹션13 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션14 랜딩버튼
        $('.sec14 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 9600) {
                $(this).addClass('active');
                console.log('섹션14 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션17 posiImg 이미지 fade-up
        $('.sec17 .posiImg').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 11400) {
                $(this).addClass('active');
                console.log('섹션17 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션18 랜딩버튼
        $('.sec18 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 12300) {
                $(this).addClass('active');
                console.log('섹션18 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션22 랜딩버튼
        $('.sec22 .landing_wrap li').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 15600) {
                $(this).addClass('active');
                console.log('섹션22 스크롤: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션23 posiImg 첫번째 이미지 fade-up
        $('.sec23 .posiImg.left').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 16000) {
                $(this).addClass('active');
                console.log('섹션23 스크롤1: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
        // 섹션23 posiImg 두번째 이미지 fade-up
        $('.sec23 .posiImg.right').each(function() {
            if ($('.stylelog__wrap').scrollTop() > 16200) {
                $(this).addClass('active');
                console.log('섹션23 스크롤2: ' + $('.stylelog__wrap').scrollTop());
            } else {
                $(this).removeClass('active');
            }
        });
    });
}


// 스와이퍼 슬라이더
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
