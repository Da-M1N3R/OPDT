let characterCount = 0;
function generateCardHTML(character) {
  //console.log(character);
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

// debugger

const characterCards = document.querySelector(".products-container");
let characters = {};
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
fetch('data.json').then(response => response.json()).then(data => {
  characters = data;

  characters.forEach(character => {
    // const genExImg = generateExtraImg(character);
    const cardOPDT = generateCardHTML(character);
    const cardPreviewOPDT = generatePreviewCharInfo(character);

    // console.log("cardOPDT -->");
    // console.log(cardOPDT);
    // console.log("cardPreviewOPDT -->");
    // console.log(cardPreviewOPDT);
    characterCards.innerHTML += cardOPDT;

    // characterCards.innerHTML += genExImg;

    //preveiwContainer.innerHTML += cardPreviewOPDT;
    const product = characterCards.querySelector(`.product[data-name="p-${characterCount}"]`);
    console.log(product);
    // characterCards.appendChild(cardOPDT);

  });

  // characters.forEach(character => {
  //   const cardPreviewOPDT = generatePreviewCharInfo(character);
  //   console.log(cardPreviewOPDT);
  //   preveiwContainer.innerHTML += cardPreviewOPDT;
  // });
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

// let preveiwContainer = document.querySelector('.products-preview');
// let previewBox = preveiwContainer.querySelectorAll('.preview');

// document.querySelectorAll('.products-container .product').forEach(product =>{
//   product.onclick = () =>{
//     preveiwContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview =>{
//       let target = preview.getAttribute('data-target');
//       if(name == target){
//         preview.classList.add('active');
//       }
//     });
//   };
// });

// characterCards.addEventListener('click', (event) => {
//   if (event.target.classList.contains('product')) {
//     const product = event.target;
//     preveiwContainer.style.display = 'flex';
//     let name = product.getAttribute('data-name');
//     previewBox.forEach(preview => {
//       let target = preview.getAttribute('data-target');
//       if (name == target) {
//         preview.classList.add('active');
//       }
//     });
//   }
// });


// previewBox.forEach(close =>{
//   close.querySelector('.fa-times').onclick = () =>{
//     close.classList.remove('active');
//     preveiwContainer.style.display = 'none';
//   };
// });

