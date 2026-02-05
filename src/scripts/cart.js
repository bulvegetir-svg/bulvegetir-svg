/* scripts/cart.js – 0.1.1 – 2026-02-04 */
import { formatCurrency } from './utils.js';

export const initCart = () => {
  const CART_KEY = 'peoje_cart';
  const loadCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  const saveCart = items => localStorage.setItem(CART_KEY, JSON.stringify(items));

  const renderBadge = () => {
    const badge = document.querySelector('.cart-badge');
    const items = loadCart();
    badge.textContent = items.reduce((c, i) => c + i.qty, 0);
  };

  /* add‑to‑cart button handler */
  document.addEventListener('click', e => {
    if (!e.target.matches('.add-to-cart')) return;
    const btn   = e.target;
    const item = {
      id:   btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      img:  btn.dataset.img,
      qty: 1
    };

    const cart = loadCart();
    const existing = cart.find(i => i.id === item.id);
    if (existing) existing.qty += 1;
    else cart.push(item);
    saveCart(cart);
    renderBadge();
  });

  /* cart page content */
  if (document.body.classList.contains('cart-page')) {
    const cart = loadCart();
    const container = document.querySelector('#cart-items');
    container.innerHTML = cart.map(i => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}" />
        <span>${i.name}</span>
        <span>${i.price} TL × ${i.qty}</span>
        <button class="remove-item" data-id="${i.id}">×</button>
      </div>`).join('');

    document.addEventListener('click', e => {
      if (!e.target.matches('.remove-item')) return;
      const id = e.target.dataset.id;
      const newCart = loadCart().filter(i => i.id !== id);
      saveCart(newCart);
      location.reload();
    });

    const totalEl = document.querySelector('#cart-total');
    const total  = cart.reduce((s, i) => s + i.price * i.qty, 0);
    totalEl.textContent = `${total.toFixed(2)} TL`;
  }

  renderBadge();
};
