// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

// create elements
const article = pieces[0];
const imageElement = document.createElement('img');
imageElement.src = article.image;
const nameElement = document.createElement('h2');
nameElement.innerText = article.name;
const priceElement = document.createElement('p');
priceElement.innerText = `Prix: ${article.price} € (${
  article.price < 35 ? '€' : '€€€'
})`; // Choose between two possibilities using the ternary operator
const categoryElement = document.createElement('p');
categoryElement.innerText = article.category ?? '(aucune catégorie)'; // Provide a default value using the nullish coalescing operator

// attache the element to the rest of the document
const sectionSheets = document.querySelector('.sheets');
sectionSheets.appendChild(imageElement);
sectionSheets.appendChild(nameElement);
sectionSheets.appendChild(priceElement);
sectionSheets.appendChild(categoryElement);
