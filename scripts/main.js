/* version: 0.1.1 – 2026-02-04 */
import { initCart } from './cart.js';
import { initCheckout } from './checkout.js';
import { initAnalytics } from './analytics.js';
import { lazyLoadImages } from './utils.js';
import { initNav } from './utils.js';
import { initRelatedProducts } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Genel UI
  initNav();
  lazyLoadImages();

  // Sepet yönetimi
  initCart();

  // Checkout (Stripe)
  initCheckout();

  // Analitik
  initAnalytics();

  // Ürün sayfası: ilgili ürünleri göster
  if (document.body.classList.contains('product-page')) {
    initRelatedProducts();
  }
});
