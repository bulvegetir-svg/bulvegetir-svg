/* version: 0.1.1 – 2026-02-04 */
export const initCheckout = () => {
  const stripePublicKey = 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'; // → .env ya da CI’da enjekte edin

  const loadStripe = () => {
    if (window.Stripe) return Promise.resolve(window.Stripe(stripePublicKey));
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    document.head.appendChild(script);
    return new Promise(res => script.onload = () => res(window.Stripe(stripePublicKey)));
  };

  document.addEventListener('click', async (e) => {
    if (!e.target.matches('.checkout')) return;
    const productId = e.target.dataset.id;

    // Ürün bilgilerini JSON’dan al
    const products = await fetch('data/products.json').then(r => r.json());
    const product = products.find(p => p.id === productId);
    if (!product) return alert('Ürün bulunamadı');

    const stripe = await loadStripe();
    stripe.redirectToCheckout({
      lineItems: [{ price: product.stripePriceId, quantity: 1 }],
      mode: 'payment',
      successUrl: `${location.origin}/thankyou.html?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${location.origin}/product-${product.slug}.html`,
    }).then(res => {
      if (res.error) alert(res.error.message);
    });
  });
};
// JavaScript Document