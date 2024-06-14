$(document).ready(function(){
  $('.mainMenu').mouseover(function(){
	  $(this).find('.subMenu').stop().slideDown(500);
  }).mouseout(function(){
	  $(this).find('.subMenu').stop().slideUp(500);
  });

  $('.slide a:gt(0)').hide();

  setInterval(function(){
	$('.slide a:first-child').fadeOut()
	   .next('a').fadeIn()
	   .end().appendTo('.slide');},3000);

  $(".notice li:first").click(function(){
    $(".modalWrap").addClass('active');
  });
  $(".btn").click(function(){
    $(".modalWrap").removeClass('active');
  });
});