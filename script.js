let cart = [];
let cartCount = 0;
let pricePerItem = 49.99;

function changeImage(imageSrc) {
  document.getElementById('main-img').src = imageSrc;
}

function updateTotalPrice() {
  let quantity = document.getElementById('quantity').value;
  let totalPrice = (quantity * pricePerItem).toFixed(2);
  document.querySelector('.total-price').innerText = `Total: $${totalPrice}`;
}

function addToCart() {
  let quantity = parseInt(document.getElementById('quantity').value);
  let totalPrice = (quantity * pricePerItem).toFixed(2);
  cart.push({ name: "Product Name", quantity, price: totalPrice });
  
  cartCount += quantity;
  document.getElementById('cart-count').innerText = cartCount;
  
  updateCartModal();
  alert(`${quantity} item(s) added to cart!`);
}

function updateCartModal() {
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear previous items
  let cartTotal = 0;
  
  cart.forEach(item => {
    cartTotal += parseFloat(item.price);
    let itemRow = document.createElement('p');
    itemRow.innerText = `${item.quantity}x ${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemRow);
  });
  
  document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

function toggleCart() {
  let cartModal = document.getElementById('cart-modal');
  cartModal.style.display = (cartModal.style.display === 'none' || cartModal.style.display === '') ? 'block' : 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout...");
    // You can add further checkout logic here
  }
}
