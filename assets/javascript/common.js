$(function(){

      $('.slide>ul>li').mouseover(function(){
         $(this).children('div').stop().slideDown()
       })
      $('.slide>ul>li').mouseleave(function(){
        $(this).children('div').stop().slideUp()
      })

      $('.menu').mouseover(function(){
        $(this).children('.bar').stop().css({display:"block"}).animate({
          left:"30px"
        })
      $('.menu').mouseleave(function(){
        $(this).children('.bar').stop().animate({
          left:"-100px"}).css('display','none')
       })
      })

      $('.navi').click(function(){
        $(this).next('div').stop().slideDown()
       })
      $('.')




});
