$(document).ready(function() {
  var $containerEl = $(".container");

  var careers = [
    "To achieve great things, you have to lose everything - Che Guevara",
    "Politics does not concern itself with who should rule us. It's about what kind of rule people should have - E.V. Ramasamy",
    "No sentence can end with because because, because is a conjunction - C.N. Annadurai",
    "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times - Bruce Lee"
  ];

  var careerIndex = 0;
  var characterIndex = 0;

  function updateText() {
    characterIndex++;
    $containerEl.html(`
      <h1>${careers[careerIndex].slice(0, characterIndex)}</h1>
    `);

    if (characterIndex === careers[careerIndex].length) {
      careerIndex++;
      characterIndex = 0;
    }

    if (careerIndex === careers.length) {
      careerIndex = 0;
    }

    setTimeout(updateText, 150);
  }

  updateText();
});
