fetch('../data/details.json')
  .then(response => response.json())
  .then(data => {
    const characterContainer = document.getElementById('characterContainer');

    data.forEach(character => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Price: $${character.price}</p>
        <a href="${character.link}">More Details</a>
      `;

      characterContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
