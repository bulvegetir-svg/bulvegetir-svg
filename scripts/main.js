/* version: 0.1.2 – 2026-02-10 */
import { lazyLoadImages, initNav, initRelatedProducts } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // Lazy load images
  lazyLoadImages();

  // Navbar hamburger menü
  initNav();

  // Ürün sayfası ilgili ürünler
  initRelatedProducts();
});
