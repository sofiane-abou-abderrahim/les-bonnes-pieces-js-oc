// Retrieve parts from the JSON file
const response = await fetch('pieces-autos.json');
const pieces = await response.json();

const article = pieces[0];
const imageElement = document.createElement('img');
imageElement.src = article.image;
const nameElement = document.createElement('h2');
nameElement.innerText = article.name;
const priceElement = document.createElement('p');
priceElement.innerText = `Prix: ${article.price} €`;
const categoryElement = document.createElement('p');
categoryElement.innerText = article.category;
