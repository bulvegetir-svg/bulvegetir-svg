/* src/scripts/main.js – 0.1.2 – 2026-02-12 */
import { initCart } from './cart.js';
import { initAnalytics } from './analytics.js';
import { lazyLoadImages, initNav, initRelatedProducts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Genel UI
  initNav();
  initMobileNav(); // Hamburger menü
  lazyLoadImages();

  // Arama İşlevselliği
  initSearch();

  // Sepet yönetimi
  initCart();

  // Analitik
  initAnalytics();

  // Ürün sayfası: ilgili ürünleri göster
  if (document.body.classList.contains('product-page')) {
    initRelatedProducts();
  }
});

// Arama işlevi
function initSearch() {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  if (searchButton && searchInput) {
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
}

function performSearch() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (query) {
    window.location.href = `/cevap/?q=${encodeURIComponent(query)}`;
  }
}

// Hamburger Menü Mantığı
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      // active sınıfı varsa çıkar, yoksa ekle
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      } else {
        menu.classList.add('active');
      }
    });

    // Menü dışına tıklanınca kapat
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }
}