$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.navbar').addClass('.bg');
        }
         else{
             $('.navbar').removeClass('.bg');
         }
         
         
        });