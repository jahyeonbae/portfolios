$(function(){

<<<<<<< HEAD
      $('.menu').mouseover(function(){
         $('.slide').stop().slideDown();
         console.log('ahajear')
      })

});
      // $('.slide').mouseover(function(){
      //    $('.slide').css('');
      //    console.log('agaeh')


    //  $('.navi').mouseover(function(){
    //      $('.navi>span').animate('transform-origin','50%');
    //  })
=======
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
       },function(){
        $(this).next('div').stop().slideUp()

 })





});
>>>>>>> eeeacdfa614afcfe5f64904c66f42899681367d1
