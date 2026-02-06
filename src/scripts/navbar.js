document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".navbar__toggle");

  // Ana menü toggle
  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Dropdown toggle
  document.querySelectorAll(".dropdown__toggle").forEach(btn => {
    btn.addEventListener("click", e => {
      const parent = e.target.closest(".dropdown, .dropdown__item");
      parent.classList.toggle("active");
    });
  });
});
