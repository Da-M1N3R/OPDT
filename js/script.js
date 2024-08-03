let characterCount = 0;
function generateCardHTML(character) {
  characterCount++;
  const characterId = `${characterCount}`;
  return `
    <div class="product" data-name="p-${characterId}">
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <div class="price">$${character.price}</div>
      <p>Sorry</p>
    </div>
  `;
}
let extraImgCounter = 0;
function generatePreviewCharInfo(character, extraImgCounter=0) {
  const characterId = `${characterCount}`;
  return `
    <div class="preview" data-target="p-${characterId}">
      <i class="fas fa-times"></i>
      <div class="previewCard">
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
        <div class="price">$${character.price}</div>
        <div class="buttons">
          <a href="#" class="buy">buy now</a>
          <a href="#" class="cart">add to team</a>
        </div>
      </div>
      <div class="extraImg">
        <i class="fas fa-chevron-left"></i>
        <img src="${character.extras[extraImgCounter]}" alt="${character.name}">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  `;
}

function closePreview(event) {
  // Check for Esc keypress or click event on the close icon
  if (event.type === 'keydown' && event.key === 'Escape' ||
      event.target.classList.contains('fa-times')) {
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  }
}

let i = 0;
function prevExImg() {
  if (i <= 0) i = images.length;
  i--;
  return generatePreviewCharInfo(characters[0], i);
} // not working yet
function nextExImg() {
  if (i >= images.lenght - 1) i = -1;
  i++;
  return generatePreviewCharInfo(characters[0], i);
} // not working yet

// Product Image const
const characterCards = document.querySelector(".products-container");
let characters = {};

// Preview Image const
const previewContainer = document.querySelector('.products-preview');

let charExtraLength = 0;
const body = document.querySelector(".body");
console.log(body);

'use strict';

fetch('data.json').then(response => response.json()).then(data => {
  characters = data;
  
  characters.forEach(character => {
    const cardOPDT = generateCardHTML(character);
    const cardPreviewOPDT = generatePreviewCharInfo(character);

    characterCards.innerHTML += cardOPDT;
    previewContainer.innerHTML += cardPreviewOPDT;

  });

  const previewBox = previewContainer.querySelectorAll('.preview');
  document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        console.log(target);
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
      previewContainer.style.display = 'none';
    };
  });
})
