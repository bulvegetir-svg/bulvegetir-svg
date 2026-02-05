/* scripts/analytics.js – 0.1.1 – 2026-02-04 */

export const initAnalytics = () => {
  const script = document.createElement('script');
  script.setAttribute('data-domain', 'ornek.com');   // ✅ kendi alan adınızı girin
  script.src = 'https://plausible.io/js/plausible.js';
  script.defer = true;
  document.head.appendChild(script);
};
