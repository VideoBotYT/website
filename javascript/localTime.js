const timeZone = 'Europe/Brussels';
const localTimeElement = document.getElementById("localTime");

function updateLocalTime() {
  const now = new Date();
  localTimeElement.textContent = now.toLocaleTimeString('en-US', { timeZone });
}

setInterval(updateLocalTime, 1000);