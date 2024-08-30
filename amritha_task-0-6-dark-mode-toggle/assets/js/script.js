$(document).ready(function() {
  var $inputEl = $(".input");
  var $bodyEl = $("body");

  $inputEl.prop("checked", JSON.parse(localStorage.getItem("mode")));

  updateBody();

  function updateBody() {
    if ($inputEl.is(":checked")) {
      $bodyEl.css("background", "black");
    } else {
      $bodyEl.css("background", "white");
    }
  }

  $inputEl.on("input", function() {
    updateBody();
    updateLocalStorage();
  });

  function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify($inputEl.is(":checked")));
  }
});
