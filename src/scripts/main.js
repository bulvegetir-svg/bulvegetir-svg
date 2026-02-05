/* src/scripts/main.js – 0.1.1 – 2026-02-05 */
import { initCart } from './cart.js';
// import { initCheckout } from './checkout.js';   // ❌ kaldırıldı
import { initAnalytics } from './analytics.js';
import { lazyLoadImages, initNav, initRelatedProducts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Genel UI
  initNav();
  lazyLoadImages();

  // Sepet yönetimi
  initCart();

  // Checkout (Stripe)
  // initCheckout();   // ❌ kaldırıldı

  // Analitik
  initAnalytics();

  // Ürün sayfası: ilgili ürünleri göster
  if (document.body.classList.contains('product-page')) {
    initRelatedProducts();
  }
});
