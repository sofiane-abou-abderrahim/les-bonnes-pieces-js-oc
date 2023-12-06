// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

for (let i = 0; i < pieces.length; i++) {
  // Retrieve the DOM element that will host the cards
  const sectionSheets = document.querySelector('.sheets');

  // Create a tag dedicated to an automotive piece
  const pieceElement = document.createElement('article');

  // Create the img element
  const imageElement = document.createElement('img');
  // Access index i of the pieces list to configure the image source
  imageElement.src = pieces[i].image;

  const nameElement = document.createElement('h2');
  nameElement.innerText = pieces[i].name;

  const priceElement = document.createElement('p');
  priceElement.innerText = `Prix: ${pieces[i].price} € (${
    pieces[i].price < 35 ? '€' : '€€€'
  })`;

  const categoryElement = document.createElement('p');
  categoryElement.innerText = pieces[i].category ?? '(aucune catégorie)';

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText =
    pieces[i].description ?? 'Pas de description pour le moment.';

  const stockElement = document.createElement('p');
  stockElement.innerText = pieces[i].availability
    ? 'En stock'
    : 'Rupture de stock';

  // Attach the article tag to the Sheets section
  sectionSheets.appendChild(pieceElement);
  // Attach the image to pieceElement (the article tag)
  sectionSheets.appendChild(imageElement);
  sectionSheets.appendChild(nameElement);
  sectionSheets.appendChild(priceElement);
  sectionSheets.appendChild(categoryElement);
  sectionSheets.appendChild(descriptionElement);
  sectionSheets.appendChild(stockElement);
}
