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

      $('.r_slide').click(function(){
        $(this).stop().slideUp()
      })

      $('.ve').mouseover(function(){
        $(this).children('img').stop().css({display:'block'}).fadeIn('slow')
        $('.ve').mouseleave(function(){
          $(this).children('img').stop().fadeOut()
        })
      })

      $('.fr').mouseover(function(){
        $(this).children('img').stop().css({display:'block'}).fadeIn()
        $('.fr').mouseleave(function(){
          $(this).children('img').stop().fadeOut()
        })
      })

      $('.si').mouseover(function(){
        $(this).children('img').stop().css({display:'block'}).fadeIn()
        $('.si').mouseleave(function(){
          $(this).children('img').stop().fadeOut()
        })
      })

      $('.pr').mouseover(function(){
        $(this).children('img').stop().css({display:"block"}).fadeIn()
        $('.pr').mouseleave(function(){
          $(this).children('img').stop().fadeOut()
         })
      })

      $('.ps-top').mouseover(function(){
        $(this).children('div').css({display:"block"}).fadeIn()
        $('.ps-top').mouseleave(function(){
          $(this).children('div').fadeOut()
        })
      })









});
