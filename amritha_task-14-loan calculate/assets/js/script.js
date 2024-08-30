$(document).ready(function() {
  function calculateLoan() {
    let loanAmountValue = $("#loan-amount").val();
    let interestRateValue = $("#interest-rate").val();
    let monthsToPayValue = $("#months-to-pay").val();

    let interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
    let monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    $("#payment").html(`Monthly Payment: $${monthlyPayment}`);
  }

  $(".input").on("change", calculateLoan);
});
