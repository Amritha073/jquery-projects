$(document).ready(function() {
  var $imageContainerEl = $(".image-container");
  var $btnEl = $(".btn");

  $btnEl.on("click", function() {
    var imageNum = 10;
    addNewImages();
  });

  function addNewImages() {
    for (var index = 0; index < 10; index++) {
      var $newImgEl = $("<img>");
      $newImgEl.attr("src", "https://picsum.photos/300?random=" + Math.floor(Math.random() * 2000));
      $imageContainerEl.append($newImgEl);
    }
  }
});
