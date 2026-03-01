function handleToggleMenu() {
    const menu = document.getElementById("menu");
    if (!menu) return;
    menu.classList.toggle("active");
  }
  
  (function setYear() {
    const el = document.getElementById("year");
    if (!el) return;
    el.textContent = String(new Date().getFullYear());
  })(); 