function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const date = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;

  document.querySelectorAll("[data-clock-time]").forEach((el) => (el.textContent = time));
  document.querySelectorAll("[data-clock-date]").forEach((el) => (el.textContent = date));
}

updateClock();
setInterval(updateClock, 1000);
