swiperSlide();
clickOpen();
scrollEvent();

// AOS.init({
//     duration: 600,
//     offset: 50,
// });

// 스크롤 이벤트
function scrollEvent() {
    $(window).scroll(function (s) {
        $('[data-scroll="transform"]').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('[data-scroll="transform2"]').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('[data-scroll="scroll"]').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('scroll');
            } else {
                $(this).removeClass('scroll');
            }
        });
        $('.sec_06 .posiImg.mood').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.sec_09 .posiImg').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.9)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.sec_12 .posiImg').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.1)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.sec_15 .posiImg').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.9)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.sec_18 .posiImg').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.4)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('.product-add li').each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.2)) {
                $(this).addClass('scroll');
            } else {
                $(this).removeClass('scroll');
            }
        });

        // 색 변화
        $('[data-scroll="opacity"').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.9)) {
                $(this).addClass('opacity');
            } else {
                $(this).removeClass('opacity');
            }
        });
        $('[data-scroll="opacity2"').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.9)) {
                $(this).addClass('opacity');
            } else {
                $(this).removeClass('opacity');
            }
        });
    });
}

// 클릭하면 유의사항 오픈
function clickOpen() {
    const targetImg = $(".stylelog-wrap img.listImg01");
    const targetContent = $("[class^='content'] img");

    $(".stylelog-wrap .link-box a.link_btn_1").click(function () {
        let target = $(this).parent();
        let targetImgHeight01 = target.next().children("img").outerHeight();

        target.toggleClass("act");

        if (target.hasClass("act")) {
            target.next().css("height", targetImgHeight01 + "px");
        } else {
            target.next().css("height", "0px");
        }
    });

    targetContent.click(function () {
        $(this).next().toggleClass('act');
    });
}
// 스와이프 슬라이더
function swiperSlide() {
    // 첫번째 섹션 페이드 스와이프 슬라이더
    var swiper1 = new Swiper('.sec01Swiper', {
        paceBetween: 30,
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
    // 세번째 섹션 pager 있는 스와이프 슬라이더
    var swiper2 = new Swiper('.sec03Swiper', {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    });
    // 마지막 섹션 에디터 부분 스와이프 슬라이더
    var swiper = new Swiper('.secLastSwiper', {
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
