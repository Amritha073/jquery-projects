$(document).ready(function() {
  var $btnEl = $(".btn");

  $btnEl.on("mouseover", function(event) {
    var x = event.pageX - $btnEl.offset().left;
    var y = event.pageY - $btnEl.offset().top;

    $btnEl.css("--xPos", x + "px");
    $btnEl.css("--yPos", y + "px");
  });

  $btnEl.on("click", function() {
  });
});
