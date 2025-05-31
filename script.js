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
    profilePic.src = "images/avatar2.jpg";
  }
}

function createStars() {
  const starsContainer = document.getElementById("stars");
  starsContainer.innerHTML = ""; // önceki yıldızları temizle

  const isDarkMode = body.classList.contains("dark-mode");
  const starColor = isDarkMode ? "#f2f2f2" : "#031326"; // beyaz veya lacivert

  for (let i = 0; i < 500; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 4 + 1; // 1px - 4px arası boyut

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = starColor;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;

    starsContainer.appendChild(star);
  }
}

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark-mode");
} else {
  body.classList.add("dark-mode");
}
updateIcon();

createStars();

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateIcon();
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
  createStars();
});
