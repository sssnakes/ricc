$(document).ready(function(){

  $("#typer").typed({
    strings: ["Riccardo M. Cefal&#224; "],
    typeSpeed: 0,
    startDelay: 1000
  });

  // $("#front").delay(3000).fadeTo("slow", 0, function(){
  //   $("#front").remove();
  // });

  $("#marathon").hover(function(){
      $(".sun").fadeOut(200);
      $(".icon-bike").fadeIn(200);
  },function(){
      $(".sun").fadeIn(200);
      $(".icon-bike").fadeOut(200);
  });

});
