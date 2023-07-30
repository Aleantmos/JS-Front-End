function solve() {
  const addButton = document.querySelectorAll('.add-product');
  const textarea = document.querySelector('textarea');
  const checkout = document.querySelector('.checkout');

  let cart = [];
  let totalPrice = 0;

  checkout.addEventListener('click', checkoutHandler);

  addButton.forEach((button) => {
    button.addEventListener('click', (happening) => {
      let productDiv = happening.target.parentElement.parentElement;
      let productName = productDiv.querySelector(".product-title").textContent;
      let productPrice = parseFloat(
        productDiv.querySelector(".product-line-price").textContent
      );
      addProductToCart(productName, productPrice);
    });
  });

  function addProductToCart(productName, productPrice) {
   let product = {
      name: productName,
      price: productPrice
   }
   
   cart.push(product);
   totalPrice += productPrice;

   textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
  }

  function checkoutHandler() {
   let filterProducts = [...new Set(cart.map(product => product.name))];
   let productList = filterProducts.join(', ');

   textarea.value += `You bought ${productList} for ${totalPrice.toFixed(2)}.\n`;

   let buttons = document.querySelectorAll('button');
   buttons.forEach(button => button.disabled = true);
  }
}
