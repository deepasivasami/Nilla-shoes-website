


// Menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});




// Cart Elements
const cartContainer = document.getElementById("cartContainer");
const totalCostEl = document.getElementById("totalCost");
const cartCountEl = document.getElementById("cart-count");
const buyNowBtn = document.getElementById("buyNowBtn");







// Render cart products
function renderProducts() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<div class="empty-cart">Your cart is empty 🛍️</div>`;
    totalCostEl.textContent = "0.00";
    cartCountEl.textContent = "0";
    return;
  }


  
debugger
  let total = 0;

  cart.forEach((item, index) => {
    if (!item.quantity) item.quantity = 1;

    let price = typeof item.price === "number"
      ? item.price
      : parseFloat((item.price || "0").toString().replace(/[^0-9.]/g, "")) || 0;

    total += price * item.quantity;

    const cartItem = document.createElement("article");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
    
     <img src="${item.img}" 
     alt="${item.name}" 
     style="width:200px;height:200px;object-fit:cover;"
     onerror="this.src='images/default.png'">
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-price">₹${price.toFixed(2)}</div>
      </div>
      <div class="item-controls">
        <div class="quantity-control">
          <button class="decre" data-id="${index}">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="incre" data-id="${index}">+</button>
        </div>
        <button class="deletebtn" data-id="${index}">Delete</button>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });

  totalCostEl.textContent = total.toFixed(2);
  cartCountEl.textContent = cart.length;







  // Quantity Increase
  document.querySelectorAll(".incre").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      updateQuantity(id, 1);
    });
  });






  // Quantity Decrease
  document.querySelectorAll(".decre").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      updateQuantity(id, -1);
    });
  });






  // Delete item
  document.querySelectorAll(".deletebtn").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      deleteItem(id);
    });
  });
}







// Update quantity function
function updateQuantity(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart[id]) {
    cart[id].quantity = (cart[id].quantity || 1) + change;

    if (cart[id].quantity < 1) {
      cart[id].quantity = 1; // Prevent negative quantity
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderProducts();
  }
}







// Delete item function
function deleteItem(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item deleted.");
    renderProducts();
  }
}








// Buy Now button
buyNowBtn.addEventListener("click", () => {
  const total = totalCostEl.textContent;

  if (total === "0.00") {
    alert("Your cart is empty. Add products first.");
    return;
  }

  if (confirm(`Are you sure you want to purchase for ₹${total}?`)) {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  }
});







// Logout button
let lgbtn = document.querySelector(".logout");
if (lgbtn) {
  lgbtn.addEventListener("click", () => {
    if (confirm("Do you want to logout?")) {
      window.location.href = "index.html";
    }
  });
}




// Initial render
renderProducts();