function init() {
    clickToggle();
    swiperSlide();
}

function clickToggle() {
    $('.menu-click.fir').toggle(function() {
        $('.menu-hide.fir').css('display', 'block');
        $('.menu-click.fir img').css('transform', 'rotate(-180deg)');
    }, function() {
        $('.menu-hide.fir').css('display', 'none');
        $('.menu-click.fir img').css('transform', 'rotate(0deg)');
    });
    
    $('.menu-click.sec').toggle(function() {
        $('.menu-hide.sec').css('display', 'block');
        $('.menu-click.sec img').css('transform', 'rotate(-180deg)');
    }, function() {
        $('.menu-hide.sec').css('display', 'none');
        $('.menu-click.sec img').css('transform', 'rotate(0deg)');
    });
}

function swiperSlide() {
    // 자주묻는 질문 스와이퍼
    var faqSwiper = new Swiper('.faqSwiper', {
        loop: false,
        slidesPerView: 1.8,
        spaceBetween: 10,
        centeredSlides: false,
        slideToClickedSlide : true,
    });
}

init();
