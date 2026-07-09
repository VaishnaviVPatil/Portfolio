// scripts.js

function handleToggleMenu() {
    const menu = document.getElementById("menu");
    if (!menu) return;
    menu.classList.toggle("active");
  }
  
  // expose it globally (important for inline onclick)
  window.handleToggleMenu = handleToggleMenu;
  
  // year
  document.addEventListener("DOMContentLoaded", () => {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });