const toggle = document.getElementById("themeToggle");
const body = document.body;

function updateIcon() {
  const icon = document.getElementById("themeIcon");
  const profilePic = document.querySelector(".profile-pic");

  if (body.classList.contains("dark-mode")) {
    // Dark modda: Güneş ikonunu ve avatar1'i göster
    icon.src = "images/icons/sun-icon.svg";
    icon.alt = "Light Mode";
    profilePic.src = "images/avatar1.jpg";
  } else {
    // Light modda: Ay ikonunu ve gözlüklü avatar2'yi göster
    icon.src = "images/icons/moon-icon.svg";
    icon.alt = "Dark Mode";
    profilePic.src = "images/avatar2.png";
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
