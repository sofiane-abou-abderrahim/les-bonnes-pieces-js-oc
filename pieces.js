// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

// creates elements
const article = pieces[0];
const imageElement = document.createElement('img');
imageElement.src = article.image;
const nameElement = document.createElement('h2');
nameElement.innerText = article.name;
const priceElement = document.createElement('p');
priceElement.innerText = `Prix: ${article.price} €`;
const categoryElement = document.createElement('p');
categoryElement.innerText = article.category;

// attaches the element to the rest of the document
const sectionSheets = document.querySelector('.sheets');
sectionSheets.appendChild(imageElement);
sectionSheets.appendChild(nameElement);
sectionSheets.appendChild(priceElement);
sectionSheets.appendChild(categoryElement);
