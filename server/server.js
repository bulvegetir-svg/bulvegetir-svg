const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
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
      success_url: "http://localhost:3000/thankyou.html",
      cancel_url: "http://localhost:3000/cart.html",
    });

    res.redirect(303, session.url);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// JavaScript Document