// SLIDES ON CARDS

$(".main__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: true,
  centerMod: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: ".optional__slider",
});

$(".optional__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  asNavFor: ".main__slider",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipe: true,
      },
    },
  ],
});
$(".main__slider1").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  arrows: true,
  centerMod: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: ".optional__slider1",
});

$(".optional__slider1").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  asNavFor: ".main__slider1",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipe: true,
      },
    },
  ],
});

// TIMER
document.addEventListener("DOMContentLoaded", function () {
  const deadline = new Date(2022, 05, 31);
  let timerId = null;
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    $minutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  }
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

// MOBILE TIMER
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var deadline = "july 01 2022 00:00:00 GMT+0300";
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock("countdown", deadline);
