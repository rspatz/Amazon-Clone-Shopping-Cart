let cartQuantity = 0;

function updateCartQuantity(quantity) {
  if (cartQuantity + quantity > 10) {
    alert('The cart is full.');
    return;
  }
  //   cartQuantity = cartQuantity += quantity;

  if (cartQuantity + quantity < 0) {
    alert('Not enough items in the cart.');
    return;
  }

  cartQuantity += quantity;
  alert(`Cart Quantity: ${cartQuantity}`);
}
