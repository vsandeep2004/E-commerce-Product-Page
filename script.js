// Initialize cart count
let cartCount = 0;

// Get the "Buy Now" button and cart count element
const buyNowBtn = document.getElementById("buy-now-btn");
const cartCountEl = document.getElementById("cart-count");

// Add event listener for "Buy Now" button
buyNowBtn.addEventListener("click", function() {
    cartCount += 1;
    cartCountEl.textContent = cartCount;

    // Display alert (optional)
    alert("Product added to cart!");
});
