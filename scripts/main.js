/* version: 0.1.3 – 2026-02-10 */
import { lazyLoadImages, initNav, initRelatedProducts } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // Lazy load images
  lazyLoadImages();

  // Navbar hamburger menü
  initNav();

  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  // Ürün sayfası ilgili ürünler
  initRelatedProducts();
});
