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

    // Yönlendirme mantığı: Her zaman arama sayfasına git
    window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
  }

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

// Arama Sonuçlarını Görüntüleme İşlevi (SEARCH.JS'DEN TAŞINDI)
async function initSearchResults() {
  const resultsContainer = document.getElementById('results-list');
  const searchTermSpan = document.getElementById('search-term');

  if (!resultsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');

  if (query) {
    searchTermSpan.textContent = query;
    try {
      const response = await fetch('/data/productGroups.json');
      const data = await response.json();
      
      let results = [];
      for (const group of data) {
        if (group.name.toLowerCase().includes(query.toLowerCase())) {
          results.push({ name: group.name, url: `/group/${group.slug}/` });
        }
        for (const product of group.products) {
          if (product.name.toLowerCase().includes(query.toLowerCase())) {
            results.push({ name: product.name, url: `/product/${product.slug}/` });
          }
        }
      }

      if (results.length > 0) {
        resultsContainer.innerHTML = results.map(r => `
          <div class="product-item">
            <a href="${r.url}">${r.name}</a>
          </div>
        `).join('');
      } else {
        resultsContainer.innerHTML = '<p>Sonuç bulunamadı.</p>';
      }
    } catch (error) {
      resultsContainer.innerHTML = '<p>Arama sırasında bir hata oluştu.</p>';
    }
  }
}

// Sayfa yüklendiğinde fonksiyonları başlat
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSearch();
  initSearchResults(); // Arama sonuçları sayfasında çalışacak
});