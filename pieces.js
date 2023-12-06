// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

// create elements (tags)
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
const descriptionElement = document.createElement('p');
descriptionElement.innerText =
  article.description ?? '(Pas de description pour le moment.)'; // Add a paragraph element for the description with a default text in case of absence of description
const availabilityElement = document.createElement('p');
availabilityElement.innerText = `${
  article.availability ? 'En stock' : 'Rupture de stock'
}`; // added a paragraph element for the availability property with a default text if the item is available or no longer available

// attache the elements (tags) to the rest of the document
const sectionSheets = document.querySelector('.sheets');
sectionSheets.appendChild(imageElement);
sectionSheets.appendChild(nameElement);
sectionSheets.appendChild(priceElement);
sectionSheets.appendChild(categoryElement);
sectionSheets.appendChild(descriptionElement);
sectionSheets.appendChild(availabilityElement);
