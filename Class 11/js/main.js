$(function(){
// PRE LOADER //


$(window).on("load", function(){
    $("#loading").delay(500) .fadeOut(2000)
});
// back  top //
$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 400){
        $(".backtop a").fadeIn(800);
    }
    else{
        $(".backtop a").fadeOut(800);
    } 
});

$(".backtop").click(function(){
    $('html, body').animate({scrollTop:0}, 800);
});




























    
});