// Cart logic for order.html
let cartCount = 0;
const cartIcon = document.getElementById('cart');

// Create cart count badge
let cartBadge = document.createElement('span');
cartBadge.id = 'cart-count';
cartBadge.style.position = 'absolute';
cartBadge.style.top = '8px';
cartBadge.style.right = '8px';
cartBadge.style.background = '#ff9800';
cartBadge.style.color = '#fff';
cartBadge.style.borderRadius = '50%';
cartBadge.style.padding = '2px 7px';
cartBadge.style.fontSize = '0.9rem';
cartBadge.style.fontWeight = 'bold';
cartBadge.style.zIndex = '2';
cartBadge.textContent = cartCount;
cartIcon.style.position = 'relative';
cartIcon.appendChild(cartBadge);

let cartItems = [];

// Add to cart button logic
const addToCartButtons = document.querySelectorAll('.flavour-card button');
addToCartButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    cartCount++;
    cartBadge.textContent = cartCount;
    btn.textContent = 'Added to cart';
    btn.disabled = true;
    btn.style.background = '#bdbdbd';
    // Add item to cartItems
    const card = btn.closest('.flavour-card');
    const name = card.querySelector('h3').textContent;
    cartItems.push(name);
    setTimeout(() => {
      btn.textContent = 'Add to cart';
      btn.disabled = false;
      btn.style.background = '';
    }, 1200);
  });
});

// Cart modal logic
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items-list');
const cartItemsCount = document.getElementById('cart-items-count');
const cartDoneBtn = document.getElementById('cart-done-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const orderConfirmedMsg = document.getElementById('order-confirmed-msg');

cartIcon.addEventListener('click', function() {
  // Populate cart modal
  cartItemsList.innerHTML = cartItems.length
    ? '<ul style="padding-left:0;list-style:none;">' + cartItems.map(item => `<li style='margin-bottom:6px;'>${item}</li>`).join('') + '</ul>'
    : '<div style="color:#bb6513;">No items in cart.</div>';
  cartItemsCount.textContent = `Total items: ${cartItems.length}`;
  orderConfirmedMsg.style.display = 'none';
  cartModal.style.display = 'flex';
});

cartDoneBtn.addEventListener('click', function() {
  orderConfirmedMsg.style.display = 'block';
  cartItemsList.style.display = 'none';
  cartItemsCount.style.display = 'none';
  cartDoneBtn.style.display = 'none';
});

cartCloseBtn.addEventListener('click', function() {
  cartModal.style.display = 'none';
  cartItemsList.style.display = '';
  cartItemsCount.style.display = '';
  cartDoneBtn.style.display = '';
  orderConfirmedMsg.style.display = 'none';
});
