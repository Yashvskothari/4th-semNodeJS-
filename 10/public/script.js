const isHomePage = window.location.pathname.includes("index.html");
const isCartPage = window.location.pathname.includes("cart.html");

const API = "http://localhost:3000";

/* HOME PAGE */
if (isHomePage) {
  fetch(API + "/api/products")
    .then(res => res.json())
    .then(data => showProducts(data));
}

function showProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button class="btn" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

/* ADD TO CART (FIXED) */
window.addToCart = function(id) {
  fetch(API + "/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .then(() => alert("Item added to cart"));
};

/* CART PAGE */
if (isCartPage) {
  loadCart();
}

function loadCart() {
  fetch(API + "/api/cart")
    .then(res => res.json())
    .then(items => showCart(items));

  fetch(API + "/api/cart/total")
    .then(res => res.json())
    .then(data => {
      document.getElementById("total").innerText =
        "Total: ₹" + data.total;
    });
}

function showCart(items) {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  items.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p class="price">₹${item.price}</p>
        <button class="btn danger" onclick="removeItem(${item.id})">
          Remove
        </button>
      </div>
    `;
  });
}

/* REMOVE ITEM (FIXED) */
window.removeItem = function(id) {
  fetch(API + "/api/cart/" + id, { method: "DELETE" })
    .then(() => loadCart());
};