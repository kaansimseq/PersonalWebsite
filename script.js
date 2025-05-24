const toggle = document.getElementById("themeToggle");
const body = document.body;

function updateIcon() {
  const icon = document.getElementById("themeIcon");
  if (body.classList.contains("dark-mode")) {
    icon.src = "images/icons/sun-icon.svg";
    icon.alt = "Light Mode";
  } else {
    icon.src = "images/icons/moon-icon.svg";
    icon.alt = "Dark Mode";
  }
}

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark-mode");
} else {
  body.classList.add("dark-mode");
}
updateIcon();

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateIcon();
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
