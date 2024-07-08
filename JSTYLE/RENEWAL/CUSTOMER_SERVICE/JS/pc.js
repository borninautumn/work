faqToggle()

function faqToggle() {
    $(".slide-click.fir").toggle(function () {    
       $("#faqWrap #faqTable tr.slide-hide.fir").css('display', 'block');
    }, function() {
       $("#faqWrap #faqTable tr.slide-hide.fir").css('display', 'none');
    });
    
    $(".slide-click.sec").toggle(function () {    
       $("#faqWrap #faqTable tr.slide-hide.sec").css('display', 'block');
    }, function() {
       $("#faqWrap #faqTable tr.slide-hide.sec").css('display', 'none');
    });
    
    
    $(".slide-click.thi").toggle(function () {    
       $("#faqWrap #faqTable tr.slide-hide.thi").css('display', 'block');
    }, function() {
       $("#faqWrap #faqTable tr.slide-hide.thi").css('display', 'none');
    });
    
    $(".slide-click.fou").toggle(function () {    
       $("#faqWrap #faqTable tr.slide-hide.fou").css('display', 'block');
    }, function() {
       $("#faqWrap #faqTable tr.slide-hide.fou").css('display', 'none');
    });
    
    $(".slide-click.fif").toggle(function () {    
       $("#faqWrap #faqTable tr.slide-hide.fif").css('display', 'block');
    }, function() {
       $("#faqWrap #faqTable tr.slide-hide.fif").css('display', 'none');
    });
}
