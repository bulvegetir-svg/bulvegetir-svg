export const initAnalytics = () => {
  const script = document.createElement('script');
  script.setAttribute('data-domain', 'ornek.com'); // ✅ kendi alan adınızı
  girin                     // ← buradaki satır hataya neden olur
  script.src = 'https://plausible.io/js/plausible.js';
  script.defer = true;
  document.head.appendChild(script);
};
