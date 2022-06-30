function countdown() {
  let countDownDate = new Date("Dec 26, 2022 00:00:00").getTime();
  let currentDate = new Date().getTime();
  let difference = countDownDate - currentDate;
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(countdown, 1000);
