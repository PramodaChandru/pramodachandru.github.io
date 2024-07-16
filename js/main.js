function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-dark-mode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});
