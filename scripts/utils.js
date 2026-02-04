/* version: 0.1.1 – 2026-02-04 */
export const formatCurrency = (num, locale = 'tr-TR', cur = 'TRY') => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: cur }).format(num);
};

export const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
};

export const lazyLoadImages = () => {
  if (!('IntersectionObserver' in window)) return;
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        obs.unobserve(img);
      }
    });
  });
  imgs.forEach(img => observer.observe(img));
};
// JavaScript Document