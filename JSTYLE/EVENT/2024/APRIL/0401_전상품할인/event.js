// 섹션6
var bullet = ['#데일리캐주얼', '#글램룩', '#프리패스룩', '#니트웨어'];
var swipermain6 = new Swiper('.sec6 .swiper', {
  pagination: {
    el: '.sec6 .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
   autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
});
