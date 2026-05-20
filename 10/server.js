const express = require("express");
const app = express();
const products = require("./data/products");
const cartRoutes = require("./routes/cartRoutes");

app.use(express.json());
app.use(express.static("public"));


// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


// products api
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.use("/api/cart", cartRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});