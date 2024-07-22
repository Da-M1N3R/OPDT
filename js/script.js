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

const characterCards = document.querySelector(".products-container");
let characters = {};
fetch('data.json').then(response => response.json()).then(data => {
  characters = data;

  characters.forEach(character => {
    const cardOPDT = generateCardHTML(character);
    console.log(cardOPDT);
    characterCards.innerHTML += cardOPDT;
    // characterCards.appendChild(cardOPDT);
  });
  let preveiwContainer = document.querySelector('.products-preview');
  let previewBox = preveiwContainer.querySelectorAll('.preview');

  document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
      preveiwContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
          preview.classList.add('active');
        }
      });
    };
  });
})

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

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


previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

