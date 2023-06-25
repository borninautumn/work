$(document).ready(function(){
    
    $("header").load("header.html", function(){
        
        //$(".hambuger").click(function(){
            //$(".drawer").fadeIn(200);
        //});
        
        //$(".drawer .close").click(function(){
            //$(".drawer").fadeOut(200);
        //});
        
        $(".hambuger").click(function(){
            $(".drawer").fadeIn(400);
        });
        
        $(".drawer .close").click(function(){
            $(".drawer").fadeOut(400);
        });
        
    });
    
    $("footer").load("footer.html", function(){
        
        $("footer .fgnb:nth-child(1)").click(function(){
            
            $(".bg-wrap").fadeIn(400);
            $(".popup-wrap").fadeIn(400);
            
        });
        
        $(".popup-wrap .popup .close").click(function(){
            
            $(".bg-wrap").fadeOut(400);
            $(".popup-wrap").fadeOut(400);
            
        });
        
    });
    
    
    
    
});