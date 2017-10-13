angular
  .module('vinoApp')
  .service('checkout', checkout);

function checkout() {
  console.log('checking out!!!');

  // Cart Review
  // Coupon Code
  // Shipping Address
  // Payment Options
  // Order review
  // Confirm Order

  const cartView      = document.getElementById('cartView'),
        shippingView  = document.getElementById('shippingView'),
        paymentView   = document.getElementById('paymentView'),
        finalView     = document.getElementById('finalView');

  const cartButton = document.getElementById('cartButton'),
        shipButton  = document.getElementById('shipButton'),
        payButton  = document.getElementById('payButton'),
        reviewButton  = document.getElementById('reviewButton'),
        orderButton  = document.getElementById('orderButton');


  if (cartButton) cartButton.onclick = viewCart;
  if (shipButton) shipButton.onclick = viewShipping;
  if (payButton) payButton.onclick = viewPayment;
  if (reviewButton) reviewButton.onclick = viewReview;
  if (orderButton) orderButton.onclick = submitOrder;

  function viewCart() {
    console.log('viewing cart');
  }
  function viewShipping() {
    console.log('viewing shipping');
  }
  function viewPayment() {
    console.log('viewing payment');
  }
  function viewReview() {
    console.log('viewing order review');
  }
  function submitOrder() {
    console.log('order submitted');
  }



}
