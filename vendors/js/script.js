let cart = [];
let addButton1 = document.getElementById('addItemBtn1');
let addButton2 = document.getElementById('addItemBtn2');
let addButton3 = document.getElementById('addItemBtn3');
let addButton4 = document.getElementById('addItemBtn4');
let addButton5 = document.getElementById('addItemBtn5');
let addButton6 = document.getElementById('addItemBtn6');

let buttonContainer1 = document.getElementById('buttonContainer1');
let buttonContainer2 = document.getElementById('buttonContainer2');
let buttonContainer3 = document.getElementById('buttonContainer3');
let buttonContainer4 = document.getElementById('buttonContainer4');
let buttonContainer5 = document.getElementById('buttonContainer5');
let buttonContainer6 = document.getElementById('buttonContainer6');

let cartItemsContainer = document.getElementById('cartItems');

let bookingMessage = document.getElementById('bookingMessage');

document.addEventListener('DOMContentLoaded', function () {
  updateCartDisplay();
  updateSubmitState();
});

function updateSubmitState() {
  if (cart.length > 0) {
    document.getElementById('bookNowBtn').disabled = false;
    bookingMessage.style.display = 'none';
  } else {
    document.getElementById('bookNowBtn').disabled = true;
    cartItemsContainer.innerHTML = '<tr><td colspan="3" style="text-align: center;">No items in cart</td></tr>';
    bookingMessage.style.display = 'flex';
  }
}

function updateCartDisplay() {
  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>₹${item.price.toFixed(2)}</td>
    `;
    cartItemsContainer.appendChild(row);
  });
  let total = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById('totalAmount').textContent = `₹${total.toFixed(2)}`;
}

function addToCart(serviceName, servicePrice) {
  cart.push({ name: serviceName, price: servicePrice });
  updateCartDisplay();
  updateSubmitState();
}

function removeFromCart(serviceName) {
  cart = cart.filter(item => item.name !== serviceName);
  updateCartDisplay();
  updateSubmitState();
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<tr><td colspan="3" style="text-align: center;">No items in cart</td></tr>';
  }
}

function createRemoveButton1() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn1";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Dry Cleaning');
    buttonContainer1.innerHTML = "";
    buttonContainer1.appendChild(addButton1);
    console.log(cart);
  }
  return btn;
}

addButton1.addEventListener('click', function () {
  addToCart('Dry Cleaning', 200);
  buttonContainer1.innerHTML = "";
  buttonContainer1.appendChild(createRemoveButton1());
  console.log(cart);
});

function createRemoveButton2() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn2";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Wash & Fold');
    buttonContainer2.innerHTML = "";
    buttonContainer2.appendChild(addButton2);
    console.log(cart);
  }
  return btn;
}

addButton2.addEventListener('click', function () {
  addToCart('Wash & Fold', 100);
  buttonContainer2.innerHTML = "";
  buttonContainer2.appendChild(createRemoveButton2());
  console.log(cart);
});

function createRemoveButton3() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn3";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Ironing');
    buttonContainer3.innerHTML = "";
    buttonContainer3.appendChild(addButton3);
    console.log(cart);
  }
  return btn;
}

addButton3.addEventListener('click', function () {
  addToCart('Ironing', 30);
  buttonContainer3.innerHTML = "";
  buttonContainer3.appendChild(createRemoveButton3());
  console.log(cart);
});

function createRemoveButton4() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn4";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Stain Removal');
    buttonContainer4.innerHTML = "";
    buttonContainer4.appendChild(addButton4);
    console.log(cart);
  }
  return btn;
}

addButton4.addEventListener('click', function () {
  addToCart('Stain Removal', 500);
  buttonContainer4.innerHTML = "";
  buttonContainer4.appendChild(createRemoveButton4());
  console.log(cart);
});

function createRemoveButton5() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn5";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Leather & Suede Cleaning');
    buttonContainer5.innerHTML = "";
    buttonContainer5.appendChild(addButton5);
    console.log(cart);
  }
  return btn;
}

addButton5.addEventListener('click', function () {
  addToCart('Leather & Suede Cleaning', 999);
  buttonContainer5.innerHTML = "";
  buttonContainer5.appendChild(createRemoveButton5());
  console.log(cart);
});

function createRemoveButton6() {
  let removeButton = document.createElement('button');
  removeButton.className = 'remove-item-button';
  const btn = document.createElement("button");
  btn.className = "remove-item-button";
  btn.id = "removeItemBtn6";
  btn.innerHTML = `<div>Remove Item</div><ion-icon name="remove-circle-outline"></ion-icon>`;
  btn.onclick = function () {
    removeFromCart('Wedding Dress Cleaning');
    buttonContainer6.innerHTML = "";
    buttonContainer6.appendChild(addButton6);
    console.log(cart);
  }
  return btn;
}

addButton6.addEventListener('click', function () {
  addToCart('Wedding Dress Cleaning', 2800);
  buttonContainer6.innerHTML = "";
  buttonContainer6.appendChild(createRemoveButton6());
  console.log(cart);
});