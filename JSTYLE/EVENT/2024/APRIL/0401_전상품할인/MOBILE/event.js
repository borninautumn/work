//
 // 스페셜 
 $(document).ready(function() {
     // 240401 추가함 (유의사항 토글)
     $(".arrowBox01").click(function () {
        let height = $(".arrowBox02 img").innerHeight();

        $(".arrowBox01 .arrow").toggleClass("active");
        $(".arrowBox02").toggleClass("active");

        if ($(".arrowBox01 .arrow").hasClass("active")) {
            $(".arrowBox02").css("height", height + "px");
        } else {
            $(".arrowBox02").css("height", "0px");
        }
    });
 
    // 240329 추가함
    // 엠디추천 스와이퍼
    var swiper4 = new Swiper('.sec04 .sec04swiper', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    
    var listBoxSwiper = new Swiper("#sec02 .listBoxSwiper", {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: "auto",
    });
    var productSwiper = new Swiper("#sec02 .productSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 10,
        breakpoints: {
            280: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
        },
    });
    
    var listBoxSwiper2 = new Swiper("#sec03 .listBoxSwiper", {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: "auto",
    });
    var productSwiper2 = new Swiper("#sec03 .productSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 10,
        breakpoints: {
            280: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
        },
        
    });

    $("#sec02 .listBoxSwiper ol li").click(function () {
        let target = $(this);
        let tabTarget = $("#sec02 .listBoxSwiper ol li");
        let slideTarget = $("#sec02 .productBox > div");
        let index = target.index();

       console.log(index);

       tabTarget.removeClass("act").eq(index).addClass("act");
        slideTarget.removeClass("act").eq(index).addClass("act");
    });
    
    $("#sec03 .listBoxSwiper ol li").click(function () {
        let target = $(this);
        let tabTarget = $("#sec03 .listBoxSwiper ol li");
        let slideTarget = $("#sec03 .productBox > div");
        let index = target.index();

       console.log(index);

       tabTarget.removeClass("act").eq(index).addClass("act");
        slideTarget.removeClass("act").eq(index).addClass("act");
    });
});













    
    

    
    
    





    function get_main_list(_t_name, _page, _element, _page_html, _row) {
        if ($(_element).length > 0) {
            $.ajax({
                url: '/m/product_list.action.html?r=' + Math.random(),
                type: 'GET',
                dataType: 'json',
                data: {
                    action_mode: 'GET_MAIN_PRODUCT_LIST',
                    tag_name: _t_name,
                    page: _page
                },  
                success: function(res) {

                    var dom = $('<div>').html(res.html);
                    if ($('ul.items:only-child', $(_element)).length == 0) {
                        $(_element).append($('<ul class="items"></ul>'));
                    }

                    $('ul.items', _element).append($('ul.items', dom).html());

                    if (res.is_page_end == true) {
                        $('.' + _page_html).hide();
                    } else {
                        _page++;
                        $('.' + _page_html + ' > a').prop('href', "javascript:get_main_list('"+_t_name+"', " + _page + ", '" + _element + "', '" + _page_html + "', '" + _row + "');");
                    }   
                    dom = null;    
                }
        });
    }
    
}

jQuery(document).ready(function () {
    setTimeout(function(){
        calcList();
    }, 80)
    
});


function calcList() {
    // m
    const targetLi = jQuery(".items");
    console.log(targetLi);

    targetLi.each(function (index) {
        if (targetLi.eq(index).find(".consumer").length == 2) {
            targetLi.eq(index).find(".listDiscount").css("display", "none");
        };

        if (targetLi.eq(index).find(".dc_perc").length == 1) {
            let text01 = targetLi.eq(index).find(".dc_info").text();
            let text02 = targetLi.eq(index).find(".dc_perc").text();

            let regex = /[^0-9]/g;

            let result01 = text01.replace(regex, "");
            let result02 = text02.replace(regex, "");

            let textNumber = Number(result01) + Number(result02);

            targetLi.eq(index).find(".dc_info").text(textNumber + "%");
            targetLi.eq(index).find(".dc_perc").css("display", "none");
        }
    })
}




jQuery(function () {
    $('.btn_stoplive').click(function() {
        $('.live_wrapper').remove();        
    });
});



