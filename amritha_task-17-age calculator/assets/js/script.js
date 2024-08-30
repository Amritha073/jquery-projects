$(document).ready(function() {
  $('#btn').click(function() {
    const birthdayValue = $('#birthday').val();
    if (birthdayValue === "") {
      alert("Please enter your birthday");
    } else {
      const age = getAge(birthdayValue);
      $('#result').html(`Your age is <span class="age">${age}</span> ${age > 1 ? "years" : "year"} old`);
      $('.age').css('transform', 'scale(1.2)').delay(300).css('transform', 'scale(1)');
    }
  });

  function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
      age--;
    }

    return age;
  }
});
