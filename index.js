var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let price = Math.floor((Math.random()*100) + 1);
 let newItem = {[item]: price};
 getCart().push(newItem);
 console.log(`${item} has been added to your cart.`);
 return getCart();
}

function viewCart() {
  // write your code here
  var cart = getCart();
  if (cart.length === 0) {
  	console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
  	console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`)
  } else {
	  var message = "In your cart, you have ";
	  for (var i = 0; i < cart.length - 1; i++) {
	  	if (cart.length === 2){
	  		message += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]} `
	  	} else {
	  		message += `${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}, `;
	  	}
	  }
	  message += `and ${Object.keys(cart[cart.length-1])[0]} at $${Object.values(cart[cart.length-1])[0]}.`;
	  console.log(message);
	}
}

function total() {
  // write your code here
  let cartValues = getCart();
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
  	total += Object.values(cart[i])[0];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let cart = getCart();
  for (var i = 0; i < cart.length; i++) {
  	if (Object.keys(cart[i])[0] === item) {
  		cart.splice(i, 1);
  		return cart;
  	}
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
  	console.log("Sorry, we don't have a credit card on file for you.");
  } else {
  	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  	setCart([]);
  }
}
