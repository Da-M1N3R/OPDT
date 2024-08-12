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
  const characterExImgs = character.extras;
  console.log("Billy here...", characterExImgs);
  return `
    <div class="preview" data-target="p-${characterId}" id="p-${characterId}">
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
          Saint Figarland Garling is a World Noble of the Figarland Family and the Supreme Commander (最高司令官, Saikō Shireikan?) of the God's Knights, of whom he is the first to be introduced.<br>
          <strong>Faction:</strong>
          {character.faction}
          <br>
          <strong>Devil Fruit:</strong>
          {character.devilfruit}<br>
          <strong>Moves:</strong><br>
          1) {character.moves[0]}<br>
          2) {character.moves[1]}<br>
          3) {character.moves[2]}
        </p>
      </div>

      <div class="container-ExImg">
        <div class="extraImg">
          <i class="fas fa-chevron-left" id="prev-${characterId}"></i>

          <div class="extraImgBox">
            <img src="${character.extras[extraImgCounter]}" alt="${character.name}">
            <span style="display:flex; justify-content:center;">
              <p>(</p>
              <p class="pgNum">${extraImgPg}</p>
              <p>/${extraImgAllPg})</p>
            </span>
          </div>

          <i class="fas fa-chevron-right" id="next-${characterId}"></i>
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
  
  let allExtras = [];
  characters.forEach(product => {
    const name = product.name;
    const extras = product.extras;

    console.log(`Name = ${name}`);
    console.log('Extras =', extras);

    allExtras.push(extras);
  })

  console.log("Evil =", allExtras); // access data of extras

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
          console.log("preview is here", preview);
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
          

          const img = preview.querySelector('.preview .extraImg img');
          // console.log(img.src)

          // Extras array
          const myArray = allExtras[n];
          const myBox = preview.querySelector('.preview .container-ExImg .extraImg .extraImgBox');

          // Product Name
          let productIdName = 'p-' + (n + 1).toString();
          const productId = document.getElementById(productIdName);
          const charName = productId.querySelector('h3');
          const charNameh3 = charName.textContent || charName.innerText;

          // Product Extra Image Length
          const charExL = productId.querySelector('.extraImgBox .pgNum');
          const charExLptag = charExL.textContent || charExL.innerText;
          console.log("charExLptag =", charExLptag);

          // leftBtn
          let leftIdName = 'prev-' + (n + 1).toString()
          const prevBtn = document.getElementById(leftIdName);
          // leftBtn.addEventListener('click', event => {
          //   console.log("billy, we are clicking LEFT.");
          // })
          // rightBtn
          let rightIdName = 'next-' + (n + 1).toString()
          const nextBtn = document.getElementById(rightIdName);


          // changePic function
          let num = 0
          function changePic(direction) {
            if (direction === "prev") {
              num--; // Decrement for previous image
              if (num < 0) {
                num = myArray.length - 1; // Wrap around to last image on underflow
              }
            } else if (direction === "next") {
              num++; // Increment for next image
              if (num === myArray.length) {
                num = 0; // Wrap around to first image on overflow
              }
            }
            let pgNumber = num + 1;
            if (pgNumber < 0) {
              pgNumber = myArray.length;
            }

            const imgElement = myBox.querySelector("img"); // Get the image element

            if (imgElement) {
              imgElement.src = myArray[num];
              charExL.textContent = pgNumber;
            } else {
              console.error("Image element not found!");
            }
          }

          

          // left & right Btn event listeners
          // prevBtn.addEventListener('click', event => {
          //   console.log("Actual Id =", n);
          //   // console.log("CharID =", idName);
          //   console.log("Billy is here, fear not.");
          //   console.log("Character Name =", charNameh3);
          //   console.log("Length of extraImg =", charExLptag);
          //   console.log("Extra img array length =", allExtras[n].length);
          //   // generatePreviewCharInfo(characters[0], extraImgCounter=1);
          // })
          prevBtn.addEventListener("click", () => changePic("prev"));
          nextBtn.addEventListener("click", () => changePic("next"));
          document.addEventListener("keydown", event => {
            if(event.key.startsWith("Arrow")){
              event.preventDefault()
          
              switch(event.key){
                case "ArrowLeft":
                  console.log("ArrowLeft pressed");
                  changePic("prev");
                  break;
                case "ArrowRight":
                  console.log("ArrowRight pressed");
                  changePic("next");
                  break;
                case "Escape":
                  closePreviewTab();
                  break;
              }
            }
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

  function closePreviewTab() {
    previewBox.forEach(close =>{
      close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
      };
    });
  }

  closePreviewTab();
  
  

  // //new
  // const leftChevron = document.getElementById('prevBtn');
  // const rightChevron = document.getElementById('nextBtn');
  // console.log(leftChevron);
  // console.log("Billy bob")
  // leftChevron.addEventListener('click', event => {
  //   console.log("Say cheese");
  // });
})


