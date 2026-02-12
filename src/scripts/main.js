// src/scripts/main.js
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // Elementler DOM'da var mı?
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }
}

// --- EKLENEN SATIR ---
document.addEventListener('DOMContentLoaded', initMobileNav);
// --------------------