const express = require("express");
const stripe = require("stripe")("sk_test_..."); // kendi gizli anahtarın

const app = express();
app.use(express.static("dist"));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "try",
          product_data: {
            name: "Kablosuz Kulaklık + Akıllı Saat",
          },
          unit_amount: 139800, // kuruş cinsinden
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://bulvegetir.com/thankyou.html",
    cancel_url: "https://bulvegetir.com/cart.html",
  });

  res.redirect(303, session.url);
});
// JavaScript Document