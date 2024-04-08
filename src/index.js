function updateTime() {
  let vancityElement = document.querySelector("#vancity");
  let vancityDateElement = vancityElement.querySelector(".date");
  let vancityTimeElement = vancityElement.querySelector(".time");
  let vancityTime = moment().tz("America/Vancouver");

  vancityDateElement.innerHTML = vancityTime.format("MMMM Do YYYY");
  vancityTimeElement.innerHTML = vancityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let reykjavikElement = document.querySelector("#reykjavik");
  let reykjavikDateElement = reykjavikElement.querySelector(".date");
  let reykjavikTimeElement = reykjavikElement.querySelector(".time");
  let reykjavikTime = moment().tz("Atlantic/Reykjavik");

  reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM Do YYYY");
  reykjavikTimeElement.innerHTML = reykjavikTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let maldivesElement = document.querySelector("#maldives");
  let maldivesDateElement = maldivesElement.querySelector(".date");
  let maldivesTimeElement = maldivesElement.querySelector(".time");
  let maldivesTime = moment().tz("Indian/Maldives");

  maldivesDateElement.innerHTML = maldivesTime.format("MMMM Do YYYY");
  maldivesTimeElement.innerHTML = maldivesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(timeZone);

  let cityName = timeZone.replace("_", " ").replace("_", " ").split("/")[1];
  cityElement = document.querySelector("#city");
  cityTimeElement = cityElement.querySelector(".time");

  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="index.html">Back to Home page</a>`;

  function updateTime() {
    let cityTimeElement = cityElement.querySelector(".time");
    let timeZone = event.target.value;
    let cityTime = moment().tz(timeZone);
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }
  setInterval(updateTime, 500);
}

updateTime();
setInterval(updateTime, 500);

selectCitiesElement = document.querySelector("#cities");
selectCitiesElement.addEventListener("change", updateCity);
