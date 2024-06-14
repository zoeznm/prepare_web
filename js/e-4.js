$(document).ready(function(){
 $(".subMenu").hide();

 $(".mainMenu").mouseover(function(){
  $(this).find(".subMenu").stop().slideDown(300);
 }).mouseout(function(){
  $(this).find(".subMenu").stop().slideUp(300);
 });

 var imgs = 2;
 var now = 0;
 start();
 function start () {
  $(".slide > a").eq(0).siblings().animate({width:"-1320px"});
  setInterval(function(){
    now = now == imgs ? 0 : now+=1;
    $(".slide > a").eq(now-1).animate({width:"-1320px"});
    $(".slide > a").eq(now).animate({width:"1320px"});
  },3000);
 }

 $(".notice li:first").click(function(){
  $(".modalWrap").addClass('active');
 });
 $(".btn").click(function(){
  $(".modalWrap").removeClass('active');
 });
});