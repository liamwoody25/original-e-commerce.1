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
    inBag: 0
  },
  {
    name: 'android',
    category: 'smartwatch',
    price: 399,
    image: './public/assets/images/rachit-tank-2cFZ_FB08U-smart-watch.jpg',
    inBag: 0
  },
]

let bag = {output: 0, bagTotal: 0};



function sendProductToBag(i) {
  const product = bagProducts[i];
  let bag = document.querySelectorAll('.bag-output')[0];
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



  // these codes are for the bag item contents
  const productContent = document.createElement('div');
  productContent.classList.add('product-content-container');

  const productName = document.createElement('h3');
  productName.textContent = product.name;

  const subTitle = document.createElement('p');
  subTitle.textContent = product.category;

  const cardPrice = document.createElement('p');
  cardPrice.textContent = `$${product.price}`;
  


  // these codes create the quantity button
  const quantityContent = document.createElement('div');
  quantityContent.classList.add('quantity-btn-content');

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('decrease-btn');
  removeBtn.innerHTML = '<i class="bi bi-dash-square"></i>';

  const quantityOutput = document.createElement('span');
  quantityOutput.innerText = displayQuantity;

  const addBtn = document.createElement('button');
  addBtn.classList.add('increase-btn');
  addBtn.innerHTML = '<i class="bi bi-plus-square"></i>'


  // these codes are to display the product cards to the shopping section
  cardProduct.append(cardImg, productContent, quantityContent);
  productContent.append(productName, subTitle, cardPrice);
  quantityContent.append(removeBtn, quantityOutput, addBtn)
  bagContainer.append(cardProduct)



// this eventlistener code listens for when the user wants to remove a product from the bag
  removeBtn.addEventListener('click', function(){
    let bag = document.querySelectorAll('.bag-output')[0];
    let displayQuantity = Number(bag.innerText) - 1;

    if (displayQuantity < 0) {
      displayQuantity = 0
    }

    bag.innerText = displayQuantity

    if (displayQuantity === 0) {
      cardProduct.remove(cardImg, productContent, quantityContent)
    }
  })



// this eventlistener code listens for when the user wants to add a product to the bag
  addBtn.addEventListener('click', function(){
    let bag = document.querySelectorAll('.bag-output')[0];
    let displayQuantity = Number(bag.innerText) + 1;

    if (displayQuantity > 10) {
      displayQuantity  = 0;
    }

    bag.innerText = displayQuantity
    addProduct(i)
  })

}

function addProduct(product,i) {
  console.log('my items are', item)
  product.inBag = 1

  let item = {
    [product.category]:product
  }
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
   sendProductToBag(bagProducts,[i])
  })
}

cartBtn.addEventListener('click', function(){
  cartDisplay()
})

burgerToggle.addEventListener('click', function(){
  hamBurgerMenu()
})