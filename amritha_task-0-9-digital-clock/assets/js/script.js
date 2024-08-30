$(document).ready(function() {
  var $hourEl = $("#hour");
  var $minuteEl = $("#minutes");
  var $secondEl = $("#seconds");
  var $ampmEl = $("#ampm");

  function updateClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ampm = "AM";

    if (h > 12) {
      h -= 12;
      ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    $hourEl.text(h);
    $minuteEl.text(m);
    $secondEl.text(s);
    $ampmEl.text(ampm);

    setTimeout(updateClock, 1000);
  }

  updateClock();
});
