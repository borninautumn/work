function scrollEvent() {
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
}
