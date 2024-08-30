$(document).ready(function() {
  var $textareaEl = $("#textarea");
  var $totalCounterEl = $("#total-counter");
  var $remainingCounterEl = $("#remaining-counter");

  $textareaEl.on("keyup", function() {
    updateCounter();
  });

  updateCounter();

  function updateCounter() {
    var totalLength = $textareaEl.val().length;
    var maxLength = $textareaEl.attr("maxLength");
    $totalCounterEl.text(totalLength);
    $remainingCounterEl.text(maxLength - totalLength);
  }
});
