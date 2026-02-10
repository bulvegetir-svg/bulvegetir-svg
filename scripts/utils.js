/* version: 0.1.3 – 2026-02-10 */
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

/* Navbar ve hamburger menü */
export const initNav = () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  // Mobilde linke tıklanınca menüyü kapat
  const navLinks = document.querySelectorAll(".nav-list .nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });
};

/* Ürün sayfası: ilgili ürünler */
export const initRelatedProducts = () => {
  const container = document.querySelector(".related-products");
  if (!container) return;

  const products = [
    { name: "Ürün A", link: "/products/a" },
    { name: "Ürün B", link: "/products/b" },
    { name: "Ürün C", link: "/products/c" }
  ];

  products.forEach(p => {
    const item = document.createElement("a");
    item.href = p.link;
    item.textContent = p.name;
    item.classList.add("related-item");
    container.appendChild(item);
  });
};
