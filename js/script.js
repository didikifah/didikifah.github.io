// date
var countDownDate = new Date("Nov 5, 2023 10:00:00").getTime();

// count down
var x = setInterval(function () {
  // todays date and time
  var now = new Date().getTime();
  // distance between now and the count down date
  var distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // put it in an element with its id
  document.getElementById("time").innerHTML = "<div class='tc'>" + days + " Days</div>" + "<div class='tc'>" + hours + " Hours</div>" + "<div class='tc'>" + minutes + " Minutes</div>" + "<div class='tc'>" + seconds + " Seconds</div>";

  // finish
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
  }
}, 1000);
