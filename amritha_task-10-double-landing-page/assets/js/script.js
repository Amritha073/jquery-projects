$(document).ready(function() {
  const $containerEl = $(".container");
  const $leftEl = $(".left");
  const $rightEl = $(".right");

  $leftEl.on("mouseenter", function() {
    $containerEl.addClass("active-left");
  });

  $leftEl.on("mouseleave", function() {
    $containerEl.removeClass("active-left");
  });

  $rightEl.on("mouseenter", function() {
    $containerEl.addClass("active-right");
  });

  $rightEl.on("mouseleave", function() {
    $containerEl.removeClass("active-right");
  });
});
