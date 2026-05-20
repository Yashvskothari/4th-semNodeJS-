const express = require("express");
const router = express.Router();
const products = require("../data/products");

// CART STORAGE (temporary in memory)
let cart = [];

/* ADD TO CART */
router.post("/", (req, res) => {
  const { id } = req.body;

  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ msg: "Product not found" });

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  res.json(cart);
});

/* GET CART */
router.get("/", (req, res) => {
  res.json(cart);
});

/* REMOVE ONE ITEM */
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = cart.find(i => i.id === id);

  if (!item) return res.json(cart);

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  res.json(cart);
});

/* CART SUMMARY (billing) */
router.get("/summary", (req, res) => {
  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    totalQty += item.quantity;
  });

  res.json({
    items: cart,
    totalAmount: total,
    totalItems: totalQty
  });
});

module.exports = router;