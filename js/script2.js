let characterCount = 0;
function generateCardHTML(character) {
  //console.log(character);
  characterCount++;
  const characterId = `${characterCount}`;
  console.log("Chillies");
  return `
    <div class="product" data-name="p-${characterId}">
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <div class="price">$${character.price}</div>
    </div>
  `;
}

function generatePreviewCharInfo(character) {
  const characterId = `${characterCount}`;
  return `
    <div class="preview" data-target="p-${characterId}">
      <i class="fas fa-times"></i>
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$${character.price}</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to team</a>
      </div>
    </div>
  `;
}

function generateExtraImg(character) {
  characterCount++;
  const characterId = `${characterCount}`;
  return `
    <div class="extraImg" data-target="p-${characterId}">
      <i class="fas fa-chevron-left"></i>
      <i class="fas fa-chevron-right"></i>
      <img src="${character.extras[0]}" alt="${character.name}">
    </div>
  `
}

function xgenerateExtraImg(character, n) {
    charxlen = character.extras.length;
    // console.log(charxlen);
    return `
        <div class="extraImg" data-target="p-1">
            <i id="prevBtn" class="fas fa-chevron-left" onclick="prev1()></i>
            <img src="${character.extras[n]}" alt="${character.name}" class=".slider-img">
            <i id="nextBtn" class="fas fa-chevron-right" onclick="next1()"></i>
            <h1>${character.extras.length}</h1>
        </div>
    `
} // onclick attribute giving problem
function nextImage() {
  currentIndex = (currentIndex + 1) % charxlen;
  return currentIndex;
}
function prevImage() {
  if (currentIndex <= 0) currentIndex = charxlen;
  currentIndex--;
  return xgenerateExtraImg(characters[0], currentIndex);
}
let i = 0;
function prev() {
  if (i <= 0) i = images.length;
  i--;
  return xgenerateExtraImg(characters[0], i);
} // not working yet
function next() {
  if (i >= images.lenght - 1) i = -1;
  i++;
  return xgenerateExtraImg(characters[0], i);
} // not working yet

// debugger

// Product Image const
const characterCards = document.querySelector(".products-container");
let characters = {};

// Preview Image const
let preveiwContainer = document.querySelector('.products-preview');

// Extra Image const
const extraImg = document.querySelector('.extraImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
var currentIndex = 0;
var charxlen = 0;

// 
let charExtraLength = 0;

'use strict';

// Specific getFunctions
function getProductNames(products) {
  products.forEach(product => {
    console.log("Product Name: ", product.name);
  });
}
function getProductImage(products) {
  products.forEach(product => {
    console.log("Product Image: ", product.image);
  });
}
function getProductPrice(products) {
  products.forEach(product => {
    console.log("Product Price: ", product.price);
  });
}

// Repeated functions to be optimized & adjusted
let productCounter = 0;
function printProduct_1by1(product) {
  //console.log(character);
  productCounter++;
  const productId = `${productCounter}`;
  console.log(product.name);
  return `
    <div class="product" data-name="p-${productId}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="price">$${product.price}</div>
    </div>
  `;
}
function printProduct_all(products) {
  products.forEach(product => {
    productCounter++;
    const productId = `${productCounter}`;
    console.log(product.name);
    return `
      <div class="product" data-name="p-${productId}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">$${product.price}</div>
      </div>
    `;
  })
} // not working yet

fetch('test.json')
.then(response => response.json())
.then(data => {
  data.forEach(product => {
    let productName = product.name;
    let productPrice = product.price;
    let productImage = product.image;
    let productExtras = product.extras;

    // console.log(printProduct_1by1(product));
  });
  // getProductNames(data);
  // getProductPrice(data);
  // console.log(printProduct_all(data));

})
.catch(error => {
  console.error("Error fetching data:", error);
});


//generateCardHTML - function
//generatePreviewCharInfo - function
fetch('test.json').then(response => response.json()).then(data => {
  characters = data;
  // const xImg = xgenerateExtraImg(characters[0], currentIndex);
  // extraImg.innerHTML += xImg;
  // prevBtn.addEventListener('click', prevImage);
  // nextBtn.addEventListener('click', nextImage);
  // charExtraLength = characters[0].extras.length;
  // console.log(charExtraLength);

  characters.forEach(character => {
    const cardOPDT = generateCardHTML(character);
    const cardPreviewOPDT = generatePreviewCharInfo(character);

    characterCards.innerHTML += cardOPDT;

    // characterCards.innerHTML += genExImg;

    //preveiwContainer.innerHTML += cardPreviewOPDT;
    const product = characterCards.querySelector(`.product[data-name="p-${characterCount}"]`);
    // console.log(product);
    // characterCards.appendChild(cardOPDT);

  });

  // characters.forEach(character => {
  //   const cardPreviewOPDT = generatePreviewCharInfo(character);
  //   console.log(cardPreviewOPDT);
  //   preveiwContainer.innerHTML += cardPreviewOPDT;
  // });
  let previewBox = preveiwContainer.querySelectorAll('.preview');


  document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        console.log("2nd hook, name = ", name, "& target = ", target);
        if(name == target){
          console.log("name == target >>> success!!!")
          preview.classList.add('active');
        }
      });
    };
  });
  previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      preveiwContainer.style.display = 'none';
    };
  });
})
