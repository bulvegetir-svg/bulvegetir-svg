/* src/scripts/main.js – 0.1.2 – 2026-02-12 */
import { initCart } from './cart.js';
import { initAnalytics } from './analytics.js';
import { lazyLoadImages, initNav, initRelatedProducts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Genel UI
  initNav();
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
    // Yönlendirme adresi düzeltildi: /cevap/
    window.location.href = `/cevap/?q=${encodeURIComponent(query)}`;
  }
}