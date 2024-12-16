// Function to filter products based on category
function filterCategory(category) {
    // Hide all product sections
    document.querySelectorAll('.product').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected category
    document.getElementById(category).style.display = 'block';
}

// Simple cart management
let cart = [];

// Add item to cart and store it in localStorage
function addToCart(productName, price) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Display cart items on the cart page
window.onload = function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total-price').innerHTML = `Total: $${total.toFixed(2)}`;
};

// Checkout function
function checkout() {
    alert("Proceeding to checkout...");
    // Add logic for actual checkout, e.g., redirect to a payment page
}

// Search functionality
document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Clear search functionality
document.getElementById("clearSearch").addEventListener("click", function() {
    document.getElementById("searchInput").value = "";
    const products = document.querySelectorAll(".product");
    products.forEach(product => product.style.display = "block");
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const showSignupLink = document.getElementById("show-signup");
    const showLoginLink = document.getElementById("show-login");
  
    // Show Signup Form
    showSignupLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    });
  
    // Show Login Form
    showLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    });
  });
  