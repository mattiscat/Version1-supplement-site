require("dotenv").config();

var cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://mattiscat.github.io/Version1-supplement-site/success",
    cancel_url: "https://mattiscat.github.io/Version1-supplement-site/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("app listening on port 4000"));
