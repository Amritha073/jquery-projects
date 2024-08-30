$(document).ready(function() {
  const $searchBarContainerEl = $(".search-bar-container");
  const $magnifierEl = $(".magnifier");

  $magnifierEl.on("click", function() {
    $searchBarContainerEl.toggleClass("active");
  });
});
