$(document).ready(function(){
    
    //$(window).width();
    //$(window).height();
    
    //$("section").css( "width", $(window).width() );
    //$("section").css( "height", $(window).height() );
    
    //$(window).resize(function(){
        
        //$("section").css( "width", $(window).width() );
        //$("section").css( "height", $(window).height() );
        
    //});
    
    $(window).scroll(function(){
        
        var scrollTop = $(window).scrollTop();
        
        if ( scrollTop >= 800 ){
            $("header").fadeIn(400);
        } else {
            $("header").fadeOut(400);
        }
        
    });
    
});