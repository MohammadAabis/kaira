import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const CLIENT_URL = process.env.CLIENT_URL

// Allow your Vite Dev server
app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());


app.post("/create-checkout-session", async (req, res) => {
  const { items } = req.body;

  // details about the items being purchased
  const line_items = items.map((item) =>({
    price_data:{
      currency:"usd",
      product_data:{
        name:item.name,
      },
      unit_amount: parseFloat(item.price.replace(/[^0-9.]/g, "")) * 100,
    },
    quantity:1
  }))
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items: line_items,
    mode: 'payment',
    success_url: `${CLIENT_URL}/payment-status`,
    cancel_url: `${CLIENT_URL}/payment-status`,
  });

  res.json({id:session.id})
})

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Server running on :${port}`));
