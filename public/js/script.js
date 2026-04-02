const cartBtn = document.querySelector('.bi-bag');
const purchaseBtn = document.querySelectorAll('.item-btn');
const burgerToggle = document.querySelector('.ham-burger');
const cartOffScreen = document.querySelector('.shopping-section');
const menuDropDown = document.querySelector('.header-bar');
const bagContainer = document.querySelector('.cart-content');

const bagProducts = [
  {
    name: 'macbook',
    category: 'laptop',
    price: 899,
    image: './public/assets/images/pexels-tuurt-macbook-jpg.jpg',
  },
]

let bag = {output: 0, bagTotal: 0};


function sendProductToBag(i) {
  const bag = document.querySelectorAll('#bag-output')[0];
  const product = bagProducts[i]
  let displayQuantity = Number(bag.innerText) + 1;

  if (displayQuantity > 10) {
    displayQuantity = 0;
  }

  bag.innerText = displayQuantity;


  // these code is for creating the card product 
  const cardProduct = document.createElement('article');
  cardProduct.classList.add('product-item');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = product.image;
  cardImg.alt = 'card image'
  // these code is for creating the card product 



  // these codes are for the bag item contents
  const productContent = document.createElement('div');
  productContent.classList.add('product-content-container');

  const productName = document.createElement('h3');
  productName.textContent = product.name;

  const subTitle = document.createElement('p');
  subTitle.textContent = product.category;

  const cardPrice = document.createElement('p');
  cardPrice.textContent = `$${product.price}`;
  // these codes are for the bag item contents
  


  // these codes create the quantity button
  const quantityContent = document.createElement('div');
  quantityContent.classList.add('quantity-btn-content');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('decrease-btn');
  removeBtn.innerHTML = '<i class="bi bi-dash-square"></i>';

  const quantityOutput = document.createElement('span');
  quantityOutput.classList.add('item-output');
  quantityOutput.textContent = 0

  const addBtn = document.createElement('button');
  addBtn.classList.add('increase-btn');
  addBtn.innerHTML = '<i class="bi bi-plus-square"></i>'
  // these codes create the quantity button


  cardProduct.append(cardImg, productContent, quantityContent);
  productContent.append(productName, subTitle, cardPrice);
  quantityContent.append(removeBtn, quantityOutput, addBtn)
  bagContainer.append(cardProduct)
}







// this function displays the shopping section
function cartDisplay(){
  if (cartBtn.classList.toggle('active')){
    cartOffScreen.classList.toggle('active');
  } else {
    cartOffScreen.classList.toggle('active');
  }
}

// this function displays the dropdown menu
function hamBurgerMenu() {
  if (burgerToggle.classList.toggle('enable')) {
    menuDropDown.style.display = 'flex';
  } else {
    menuDropDown.style.display = 'none';
  }
}



// this eventlilstener code listens for the item btn when the user clicks on a product
for (let i = 0; i < purchaseBtn.length; i++) {
  purchaseBtn[i].addEventListener('click', function(){
   sendProductToBag(i)
  })
}

cartBtn.addEventListener('click', function(){
  cartDisplay()
})

burgerToggle.addEventListener('click', function(){
  hamBurgerMenu()
})