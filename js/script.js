let characterCount = 0;
function generateCardHTML(character) {
  characterCount++;
  const characterId = `${characterCount}`;
  return `
    <div class="product" data-name="p-${characterId}">
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <div class="price">$${character.price}</div>
    </div>
  `;
}
let extraImgCounter = 0;
function generatePreviewCharInfo(character, extraImgCounter=0) {
  let extraImgPg = extraImgCounter + 1;
  let extraImgAllPg = character.extras.length;
  const characterId = `${characterCount}`;
  console.log("CharProduct -", characterCount.toString(),": " , character.name);
  return `
    <div class="preview" data-target="p-${characterId}">
      <i class="fas fa-times"></i>
      <div class="previewCard">

        <div class="name-price">
          <h3>${character.name}</h3>
          <div class="buttons">
            <a href="#" class="buy">Buy</a>
          </div>
        </div>

        <div class="img-priceContainer">
          <img src="${character.image}" alt="${character.name}">
          <div class="price">$${character.price}</div>
        </div>

        <p>
          Saint Figarland Garling is a World Noble of the Figarland Family and the Supreme Commander (最高司令官, Saikō Shireikan?) of the God's Knights, of whom he is the first to be introduced. He was formerly active as a "champion" on God Valley.[1]
        </p>
      </div>

      <div class="container-ExImg">
        <div class="extraImg">
          <i class="fas fa-chevron-left" id="prevBtnID-${characterId}"></i>

          <div class="extraImgBox">
            <img src="${character.extras[extraImgCounter]}" alt="${character.name}">
            <p>(${extraImgPg}/${extraImgAllPg})</p>
          </div>

          <i class="fas fa-chevron-right" id="nextBtnID-${characterId}"></i>
        </div>
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

// ...

function printCurrentPreviewProduct(product) {
  return product;
}

function testLeft(product) {
  let name = product.getAttribute('data-target');
  console.log("Billy choose = ", name);
}
function tester() {
  console.log("Billy's here...");
}


function handleRightClick() {
  console.log("nextBtn clicked")

  extraImgCounter++; // increment counter
  // Update img src attribute
  const img = document.querySelector('.preview .extraImg img');
  img.src = character.extras[extraImgCounter];
  return img.src;
}
// ...

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


// Preview Image const
const previewContainer = document.querySelector('.products-preview');

let charExtraLength = 0;

'use strict';

function getActiveChar(characters) {
  characters.forEach(character => {
    if (document.querySelectorAll('.active') == true) {
      x = document.querySelectorAll('.active');
      console.log("X is here", x);
    }
  })
}
function getJust(n) {
  extrasNum = characters[n].extras
  console.log("Just selected products >>>", extrasNum);
  // generatePreviewCharInfo(characters[n]);
  console.log("Billy signing off >>> ", extrasNum[1]);
}
function target_StringSlice(n) {
  numberPart = n.substring(2);
  num = parseInt(numberPart);
  return num
}

function handleLeftClick() {
  console.log("prevBtn clicked")
  console.log(extraImgCounter);

  extraImgCounter--; // decrement counter
  // Update img src attribute
  generatePreviewCharInfo(characters[target_StringSlice[n]], extraImgCounter) 
  const img = document.querySelector('.preview .extraImg img');
}

let characters;


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
        // console.log(target);
        // console.log("2nd hook, name = ", name, "& target = ", target);

        if(name == target){

          console.log("name=", name, "& target=", target);
          // console.log(typeof target);
          n = target_StringSlice(target) - 1;
          console.log("n = ", n);
          getJust(n);
          let previewResult = printCurrentPreviewProduct(preview);
          // console.log(previewResult);
          // testLeft(previewResult);
          // console.log("name == target >>> success!!!")
          preview.classList.add('active');
          console.log(preview);
          
          console.log("Billy is here with: ", target);
          // console.log(leftChevron);
          // console.log(rightChevron);
          

          console.log("billy closed the door")

          const img = preview.querySelector('.preview .extraImg img');
          // console.log(img.src)

          let idName = 'prevBtnID-' + (n + 1).toString()
          const leftBtn = document.getElementById(idName);
          console.log("Daki", idName);
          // leftBtn.addEventListener('click', event => {
          //   console.log("billy, we are clicking LEFT.");
          // })
          leftBtn.addEventListener('click', event => {
            generatePreviewCharInfo(characters[0], extraImgCounter=1);
          })
          
          // leftBtn.id = 'prevBtn';

          // console.log("Doma", leftBtn);
        }

        // if(true) {
        //   console.log("billy showing: ", preview)
        //   const previewOn = preview.querySelector('.active');
        //   console.log(previewOn);
        // }
        
      });
    };
  });

  previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      previewContainer.style.display = 'none';
    };
  });
  // //new
  // const leftChevron = document.getElementById('prevBtn');
  // const rightChevron = document.getElementById('nextBtn');
  // console.log(leftChevron);
  // console.log("Billy bob")
  // leftChevron.addEventListener('click', event => {
  //   console.log("Say cheese");
  // });
})
const nothingBtn = document.getElementById('nothing');
nothingBtn.addEventListener('click', event => {
  console.log("billy is back, & he brought Alicia.");
})

