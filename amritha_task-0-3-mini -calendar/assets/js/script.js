$(document).ready(function() {
  var $monthNameEl = $("#month-name");
  var $dayNameEl = $("#day-name");
  var $dayNumEl = $("#day-number");
  var $yearEl = $("#year");
  var $quoteEl = $("#quote");

  var date = new Date();

  $monthNameEl.text(date.toLocaleString("en", { month: "long" }));
  $dayNameEl.text(date.toLocaleString("en", { weekday: "long" }));
  $dayNumEl.text(date.getDate());
  $yearEl.text(date.getFullYear());

  var quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your time is limited, don't waste it living someone else's life.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying."
  ];

  function updateQuote() {
    $quoteEl.text(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  updateQuote();
  
  setInterval(updateQuote, 10000);
});
