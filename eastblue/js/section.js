$(document).ready(function(){
    
    $("header").addClass("sel");
    
    $(".content.marketing .tab").click(function(){
        
        var tn = $(this).index();
    
        $(".content.marketing .tab.sel").removeClass("sel");
        $(this).addClass("sel");

        $(".content.marketing .tview.sel").removeClass("sel");
        $(".content.marketing .tview").eq( tn ).addClass("sel");
    
    });
    
    $(".content.marketing .tab-menu").height( parseInt( $(".content.marketing .tview").css("top") ) + $(".content.marketing .tview").height() + 170 );

});