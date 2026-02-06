(() => {
  // src/scripts/utils.js
  var lazyLoadImages = () => {
    if (!("IntersectionObserver" in window))
      return;
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const obs = new IntersectionObserver((entries, ob) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          ob.unobserve(img);
        }
      });
    });
    imgs.forEach((img) => obs.observe(img));
  };
  var initNav = () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    if (!toggle || !menu)
      return;
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  };
  var initRelatedProducts = () => {
    const container = document.querySelector(".related-products");
    if (!container)
      return;
    container.innerHTML = "<p>\u0130lgili \xFCr\xFCnleri burada listeleyin.</p>";
  };

  // src/scripts/cart.js
  var initCart = () => {
    const CART_KEY = "peoje_cart";
    const loadCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    const saveCart = (items) => localStorage.setItem(CART_KEY, JSON.stringify(items));
    const renderBadge = () => {
      const badge = document.querySelector(".cart-badge");
      const items = loadCart();
      badge.textContent = items.reduce((c, i) => c + i.qty, 0);
    };
    document.addEventListener("click", (e) => {
      if (!e.target.matches(".add-to-cart"))
        return;
      const btn = e.target;
      const item = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: Number(btn.dataset.price),
        img: btn.dataset.img,
        qty: 1
      };
      const cart = loadCart();
      const existing = cart.find((i) => i.id === item.id);
      if (existing)
        existing.qty += 1;
      else
        cart.push(item);
      saveCart(cart);
      renderBadge();
    });
    if (document.body.classList.contains("cart-page")) {
      const cart = loadCart();
      const container = document.querySelector("#cart-items");
      container.innerHTML = cart.map((i) => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}" />
        <span>${i.name}</span>
        <span>${i.price} TL \xD7 ${i.qty}</span>
        <button class="remove-item" data-id="${i.id}">\xD7</button>
      </div>`).join("");
      document.addEventListener("click", (e) => {
        if (!e.target.matches(".remove-item"))
          return;
        const id = e.target.dataset.id;
        const newCart = loadCart().filter((i) => i.id !== id);
        saveCart(newCart);
        location.reload();
      });
      const totalEl = document.querySelector("#cart-total");
      const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
      totalEl.textContent = `${total.toFixed(2)} TL`;
    }
    renderBadge();
  };

  // src/scripts/analytics.js
  var initAnalytics = () => {
    const script = document.createElement("script");
    script.setAttribute("data-domain", "ornek.com");
    script.src = "https://plausible.io/js/plausible.js";
    script.defer = true;
    document.head.appendChild(script);
  };

  // src/scripts/main.js
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    lazyLoadImages();
    initCart();
    initAnalytics();
    if (document.body.classList.contains("product-page")) {
      initRelatedProducts();
    }
  });
})();
