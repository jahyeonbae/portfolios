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

      // $('.ps-top').mouseover(function(){
      //   $(this).children('div').css({display:"block"}).fadeIn()
      //   $('.ps-top').mouseleave(function(){
      //     $(this).children('div').fadeOut()
      //   })
      // })

      $('.ps-sub>ul>li').mouseover(function(){
        $(this).children('div').css({display:"block"}).fadeIn()
        $('.ps-sub>ul>li').mouseleave(function(){
          $(this).children('div').fadeOut()
        })
      })

     var idx = Math.floor(Math.random()*$('.slide li').length);
     var w = $('.slide').width();
     var speed = 3000;

     var call = function(){
       $('.next').trigger('click');
     };

     $('.slide li').eq(idx).addClass('on').find('img').css('display','block');

     var tt = setInterval(call, speed);
     $('.slide li img').mouseleave(function(){
       clearInterval(tt);
     })

     $('.slide li img').mouseleave(function(){
       tt = setInterval(call, speed);
     })

     $('.next').click(function(){
       $('.slide li').eq(idx).removeClass('on').find('img').animate({
        'left': -w
      }).parent().next().addClass('on').find('img').css({
        'display':'block',
        'left': w
      }).stop().animate({
        'left':'0'
      })

      idx++;

      if(idx == $('.slide li').length){
        idx = 0;

        $('.slide li').eq(idx).addClass('on').find('img').css({
          'display' : 'block',
          'left' : w
        }).stop().animate({
          'left' : '0'
        })
      }
      console.log(idx);
    })

    $('.prev').click(function(){
      $('.slide li').eq(idx).removeClass('on').find("img").animate({
        'left': w
      }).parent().prev().addClass('on').find("img").css({
        'display':'block' ,
        'left': -w
      }).stop().animate({
        'left':'0'
      })

      idx--;
      if(idx < 0){
        idx = $('.slide li').length -1;
        $('.slide li').eq(idx).addClass('on').find("img").css({
          'display' : 'block' ,
          'left' : -w
        }).stop().animate({
          'left' : '0'
        });
      }
    })

    $('.slide li a').click(function(){
      idx = $(this).parent().index();
      hisnum = $('.slide li.on').index();
      if(hisnum < idx){
        $('.slide li').eq(hisnum).removeClass('on').find('img').animate({
          'left': -w
        });
        $('.slide li').eq(idx).addClass('on').find('img').css({
          'display' : 'block' ,
          'left' : w
        }).animate({
          'left' : 0
        });
      } else if(hisnum > idx){
        $('.slide li').eq(hisnum).removeClass('on').find('img').animate({
          'left':w
        });
        $('.slide li').eq(idx).addClass('on').find('img').css({
          'display':'block' ,
          'left' : -w
        }).animate({
          'left' : 0
        });
      }
    })










});
