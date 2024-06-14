$(document).ready(function(){

$(".subMenu").hide()

  $(".mainMenu").mouseover(function(){
   $(".subMenu").stop().slideDown(300);
  });
  $(".mainMenu").mouseout(function(){
    $(".subMenu").stop().slideUp(300);
  });

  $(".slide div:gt(0)").hide();
  setInterval(function(){
    $(".slide div:first-child").fadeOut()
    .next('div').fadeIn()
    .end().appendTo(".slide");
    
  },3000);

  $(".notice li:first").click(function(){
    $(".modalWrap").addClass('active');
  })
  $(".btn").click(function(){
    $(".modalWrap").removeClass('active');
  });
});