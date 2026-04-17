const cartBtn = document.querySelector('.bi-bag');
const purchaseBtn = document.querySelectorAll('.item-btn');
const burgerToggle = document.querySelector('.ham-burger');
const cartOffScreen = document.querySelector('.shopping-section');
const menuDropDown = document.querySelector('.header-bar');
const bagContainer = document.querySelector('.cart-content');
const bagTextHolder = document.querySelector('.bag-placeholder-content');
const priceContent = document.querySelector('.bag-price-container')

const bagProducts = [
  {
    name: 'macbook',
    category: 'laptop',
    price: 899,
    image: './public/assets/images/pexels-anna-nekrashevich-macbook.png',
    inBag: 0
  },
  {
    name: 'android',
    category: 'smartwatch',
    price: 399,
    image: './public/assets/images/andrey-matveev-msartwatch-unsplash.png',
    inBag: 0
  },
  {
    name: 'iphone',
    category: 'smartphone',
    price: 699,
    image: './public/assets/images/allison-saeng-iphone-unsplash.png',
    inBag: 0
  },
  {
    name: 'Headset',
    category: 'accessory',
    price: 250,
    image: './public/assets/images/pexels-cottonbro-headphones-jpg.jpg',
    inBag: 0
  },
  {
    name: 'ipad',
    category: 'tablet',
    price: 499,
    image: './public/assets/images/pexels-joshsorenson-tablet.png',
    inBag: 0
  }

]

let bag = {output: 0, bagTotal: 0};



function sendProductToBag(i) {
  const product = bagProducts[i];
  let bag = document.querySelectorAll('#bag-output')[0];
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



  // these codes create the bag item contents
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
  quantityOutput.classList.add('card-output')
  quantityOutput.textContent = `${product.inBag}`;

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
    const bag = document.querySelectorAll('.card-output')[i];
    let displayQuantity = Number(bag.innerText) - 1;

    if (displayQuantity < 0) {
      displayQuantity = 0;
    }

    bag.innerText = displayQuantity

    if (displayQuantity === 0) {
      cardProduct.remove(cardImg, productContent, quantityContent )
      bagTextHolder.style.display = 'block'
      priceContent.style.display = 'none'
    }
    document.getElementById('bag-output').innerText =  displayQuantity;
    
    
  })



// this eventlistener code listens for when the user clicks add button for the product to the bag
  addBtn.addEventListener('click', function(){
    const bag = document.querySelectorAll('.card-output')[i];
    let displayQuantity =  Number(bag.innerText) + 1;

    if (displayQuantity > 10) {
      displayQuantity = 0
    }

    bag.innerText = displayQuantity

    addProduct(product)

    document.getElementById('bag-output').textContent = displayQuantity ;
    
   
})


// this code displays the total price when the buy now button is clicked 
  const bagDetails = document.createElement('div');
  bagDetails.classList.add('bag-price-content');

  const bagText = document.createElement('p');
  // bagText.classList.add('')
  bagText.textContent = 'postage/packaging';

  const subHd = document.createElement('p');
  subHd.textContent = 'SubTotal'

  const totalHd = document.createElement('h4');
  totalHd.textContent = 'Total Price'

  bagDetails.append(bagText, subHd, totalHd)
  priceContent.append(bagDetails);

 if (displayQuantity) {
  bagTextHolder.style.display = 'none'
  priceContent.style.display = 'block'
 } else {
  priceContent.style.display = 'none'
 }

}



// this function is for adding muliple products to the shopping bag
function addProduct(product) {
  console.log(product )

  product.inBag += 1

  if (bag[product.name]) {
    bag[product.name].displayQuantity += 1
  } else {
    bag[product.name] = {
      ...product,
      inBag: 1
    }
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
    menuDropDown.style.display = 'block'
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