// src/scripts/main.js

// Hamburger Menü İşlevi
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }
}

// Arama İşlevi (JSON yapısına göre güncellendi)
async function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  if (!searchInput || !searchButton) return;

  async function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    try {
      // 1. JSON veri dosyasını çek
      // Veriler artık _data klasöründe, bu nedenle fetch doğrudan çalışmayabilir.
      // E-ticaret sitelerinde arama için genelde bir "arama indeksi" dosyası kullanılır.
      // Şimdilik hata yönetimi ekliyoruz.
      const response = await fetch('/data/productGroups.json'); 
      if (!response.ok) {
        throw new Error('Veri dosyası bulunamadı (404)');
      }
      const data = await response.json();

      // 2. Veri içinde ara
      let firstResultUrl = null;
      
      for (const group of data) {
        if (group.name.toLowerCase().includes(query)) {
          firstResultUrl = `/group/${group.slug}/`;
          break;
        }
        for (const product of group.products) {
          if (product.name.toLowerCase().includes(query)) {
            firstResultUrl = `/product/${product.slug}/`;
            break;
          }
        }
        if (firstResultUrl) break;
      }

      // 3. Sonuçları yönlendir
      if (firstResultUrl) {
        window.location.href = firstResultUrl;
      } else {
        alert('Ürün bulunamadı.');
      }
    } catch (error) {
      console.error('Arama hatası:', error);
      alert('Arama yapılırken bir hata oluştu. Veri dosyasının konumu kontrol edilmeli.');
    }
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

// Sayfa yüklendiğinde fonksiyonları başlat
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSearch();
});