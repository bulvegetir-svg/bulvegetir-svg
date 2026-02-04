/* version: 0.1.1 – 2026-02-04 */
export const initAnalytics = () => {
  const script = document.createElement('script');
  script.setAttribute('data-domain', 'ornek.com'); // sitenizin domaini
  script.src = 'https://plausible.io/js/plausible.js';
  script.defer = true;
  document.head.appendChild(script);
};
// JavaScript Document