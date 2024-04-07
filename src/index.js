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

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(timeZone);
  let cityName = timeZone.replace("_", " ").replace("_", " ").split("/")[1];
  cityElement = document.querySelector("#city");

  cityElement.innerHTML += `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss:SSS [<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 100);

selectCitiesElement = document.querySelector("#cities");
selectCitiesElement.addEventListener("change", updateCity);
