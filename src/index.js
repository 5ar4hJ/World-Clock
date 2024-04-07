function updateTime() {
  let vancityElement = document.querySelector("#vancity");
  let vancityDateElement = vancityElement.querySelector(".date");
  let vancityTimeElement = vancityElement.querySelector(".time");
  let vancityTime = moment().tz("America/Vancouver");

  vancityDateElement.innerHTML = vancityTime.format("MMMM Do YYYY");
  vancityTimeElement.innerHTML = vancityTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );

  let reykjavikElement = document.querySelector("#reykjavik");
  let reykjavikDateElement = reykjavikElement.querySelector(".date");
  let reykjavikTimeElement = reykjavikElement.querySelector(".time");
  let reykjavikTime = moment().tz("Atlantic/Reykjavik");

  reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM Do YYYY");
  reykjavikTimeElement.innerHTML = reykjavikTime.format(
    "h:mm:ss:SSS [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 100);
