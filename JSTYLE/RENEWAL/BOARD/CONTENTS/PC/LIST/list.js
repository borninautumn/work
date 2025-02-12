 
window.addEventListener('load', function () {
    var board_cate = new board_cate_on();
    board_cate.init();
    topSliderFunc();
});
function board_cate_on() {
    this.is_enabled = false;
    this.board_cate_tabs = document.querySelectorAll('.board_cate_tabs');
    this.board_cate_all = document.querySelector('#board_cate_all');
}
board_cate_on.prototype.init = function () {
    this.disabled();
    this.enabled();
    if (!this.is_enabled) {
        this.board_cate_all.classList.add('on');
    }
}
board_cate_on.prototype.get_params = function(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
board_cate_on.prototype.enabled = function () {
    var board_cate = this.get_params('board_cate', location.search);
    for (var i=0; i< this.board_cate_tabs.length; i++) {
        if (this.get_params('board_cate',  this.board_cate_tabs[i]) == board_cate) {
            this.board_cate_tabs[i].classList.add('on');
            this.is_enabled = true;
            return;
        }
    }
}
board_cate_on.prototype.disabled = function () {
    for (var i=0; i< this.board_cate_tabs.length; i++) {
        this.board_cate_tabs[i].classList.remove('on');
    }
}

function topSliderFunc() {
    var swiper = new Swiper('.contentSwiper', {
        loop: true,
        slidesPerView: 2.9,
        spaceBetween: 10,
        freeMode: false,
        centeredSlides: true,
        navigation: {
            nextEl: '.contentSwiper .swiper-button-next',
            prevEl: '.contentSwiper .swiper-button-prev',
        },
    });
}
