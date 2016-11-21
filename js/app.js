$(document).ready(function(){

  $("#typer").typed({
    strings: ["Riccardo M. Cefal&#224; "],
    typeSpeed: 0,
    startDelay: 1000
  });

  $("#front").delay(3000).fadeTo("slow", 0, function(){
    $("#front").remove();
  });

  $('.i-link')
    .mouseenter(function(){
      var type = $(this).data('icon');
      var name = ('#icon-' + type);
      $(name).fadeTo(200, 0.3);
    })
    .mouseleave(function(){
      var type = $(this).data('icon');
      var name = ('#icon-' + type);
      $(name).fadeOut(200);
    });


// END
});
