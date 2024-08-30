const $containerEl = $(".container");

for (let index = 0; index < 30; index++) {
  const $colorContainerEl = $("<div></div>").addClass("color-container");
  $containerEl.append($colorContainerEl);
}

const $colorContainerEls = $(".color-container");

generateColors();

function generateColors() {
  $colorContainerEls.each(function () {
    const newColorCode = randomColor();
    $(this).css("background-color", "#" + newColorCode);
    $(this).text("#" + newColorCode);
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
