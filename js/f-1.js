$(document).ready(function(){

  $(".subMenu").hide();
  $(".mainMenu").mouseover(function(){
    $(this).find(".subMenu").stop().slideDown(300);
  }).mouseout(function(){
    $(this).find(".subMenu").stop().slideUp(300);
  });

  $(".slide div:gt(0)").hide();

  setInterval(function(){
    $(".slide div:first-chlid").fadeOut()
    .next('div').fadeIn()
    .end().appendTo(".slide");
  },3000);


});