document.addEventListener("DOMContentLoaded", function() {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  function toggleMenu() {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  hamMenu.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  const menuLinks = document.querySelectorAll(".ul-off-screen a");
  menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
  });
});