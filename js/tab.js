$(document).ready(function(){
  $(function(){
    $('.tabMenu>li>a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
       return false;
      });
    });
});