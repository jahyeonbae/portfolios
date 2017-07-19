$(function(){

      $('.slide').mouseover(function(){
         $('.slide').css('');
         console.log('agaeh')
     });

     $('.navi').mouseover(function(){
         $('.navi>span').animate('transform-origin','50%');
         console.log('agaha')
     })


})
