$(document).ready(function(){
// 메인메뉴
  $('.subMenu').hide();
// 마우스오버 메뉴
  $('.mainMenu').mouseover(function(){
    $('.subMenu').stop().slideDown(300);
  }).mouseout(function(){
    $('.subMenu').stop().slideUp(300);
  });
// 이미지 슬라이드
var imgs = 2;
var now = 0;

start();

function start(){
  $(".slide > a").eq(0).siblings().animate({width:"-1200px"});

  setInterval(function(){
    now = now==imgs ? 0 : now+=1;
    $(".slide > a").eq(now-1).animate({width:"-1200px"});
    $(".slide > a").eq(now).animate({width:"1200px"});
  },3000);
}

// modalWrap
$('.notice li:first').click(function(){
  // alert('test');
  $('.modalWrap').addClass('active');
});
$('.btn').click(function(){
  $('.modalWrap').removeClass('active');
});

});