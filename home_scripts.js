
$(document).ready(function(){

    $("#banner-text-2").hide();
    $("#banner-text-3").hide();
    $("#banner-text-2").css({top:'270px'});	
    $("#banner-text-3").css({top:'0px'});	
    $("#banner-text-1").animate({top: '350px'},700);
    $("#banner-text-1").fadeIn().animate({top: '20px',fontSize:'40px'},700); //to bounce back
    $("#banner-text-2").show();
    $("#banner-text-2").animate({top: '50px'},700);
    $("#banner-text-3").show();
    $("#banner-text-3").animate({top: '50px'},700);
    
    
    $(".first-banner").mouseenter(function(){
        $("#banner-text-2").hide();
        $("#banner-text-3").hide();
        $("#banner-text-2").css({top:'270px'});
        $("#banner-text-3").css({top:'0px'});
        $("#banner-text-1").css({fontSize:'32px'});
        $("#banner-text-1").animate({top: '350px'},700);
        $("#banner-text-1").fadeIn().animate({top: '20px',fontSize:'40px'},700);
        $("#banner-text-2").show();
        $("#banner-text-2").animate({top: '50px'},700);
        $("#banner-text-3").show();
        $("#banner-text-3").animate({top: '50px'},700);
    
    });
    
    });