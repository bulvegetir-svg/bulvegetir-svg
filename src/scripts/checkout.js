/* scripts/checkout.js – 0.1.2 – 2026-02-15 */

const stripePublicKey = 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX';

// Stripe yetkinliğini yükleme helper
const loadStripe = () => {
  if (window.Stripe) return Promise.resolve(window.Stripe(stripePublicKey));

  const script = document.createElement('script');
  script.src = 'https://js.stripe.com/v3/';
  script.async = true;
  document.head.appendChild(script);

  return new Promise(res => script.onload = () => res(window.Stripe(stripePublicKey)));
};

module.exports = {
  initCheckout: () => {
    document.addEventListener('click', async e => {
      if (!e.target.matches('.checkout')) return;

      const productId = e.target.dataset.id;
      const products = await fetch('data/products.json').then(r => r.json());
      const product  = products.find(p => p.id === productId);

      if (!product) return alert('Ürün bulunamadı');

      const stripe = await loadStripe();

      stripe.redirectToCheckout({
        lineItems: [{ price: product.stripePriceId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${location.origin}/thankyou/?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${location.origin}/product-${product.slug}/`
      })
      .then(res => {
        if (res && res.error) alert(res.error.message);
      });
    });
  }
};
