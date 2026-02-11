/* src/scripts/utils.js – 0.1.2 – 2026-02-12 */

export const formatCurrency = (num, locale = 'tr-TR', cur = 'TRY') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: cur }).format(num);

export const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(null, args), wait);
  };
};

export const lazyLoadImages = () => {
  if (!('IntersectionObserver' in window)) return;
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  const obs = new IntersectionObserver((entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        ob.unobserve(img);
      }
    });
  });
  imgs.forEach(img => obs.observe(img));
};

export const initNav = () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.querySelector('.menu');
  if (!toggle || !menu) return;
  // Kural düzeltmesi: .open yerine .active kullanılıyor
  toggle.addEventListener('click', () => menu.classList.toggle('active'));
};

export const initRelatedProducts = () => {
  const container = document.querySelector('.related-products');
  if (!container) return;
  container.innerHTML = '<p>İlgili ürünleri burada listeleyin.</p>';
};