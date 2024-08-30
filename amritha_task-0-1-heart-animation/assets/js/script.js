$(document).ready(function() {
  $("body").on("mousemove", function(event) {
    var xPos = event.pageX;
    var yPos = event.pageY;
    var $spanEl = $("<span></span>");
    var size = Math.random() * 100;
    $spanEl.css({
      left: xPos + "px",
      top: yPos + "px",
      width: size + "px",
      height: size + "px"
    });
    $("body").append($spanEl);
    setTimeout(function() {
      $spanEl.remove();
    }, 3000);
  });
});
