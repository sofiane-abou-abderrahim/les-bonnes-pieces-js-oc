export function reviewsAddListener() {
  const piecesElements = document.querySelectorAll('.sheets article button');
  for (let i = 0; i < piecesElements.length; i++) {
    piecesElements[i].addEventListener('click', async function (event) {
      const id = event.target.dataset.id;
      // Store the server response in a constant
      const response = await fetch(`http://localhost:8081/pieces/${id}/avis`);
      // Deserialize JSON response
      const reviews = await response.json();

      const pieceElement = event.target.parentElement;

      const reviewsElement = document.createElement('p');
      for (let i = 0; i < reviews.length; i++) {
        reviewsElement.innerHTML += `${reviews[i].utilisateur}: ${reviews[i].commentaire} <br>`;
      }
      pieceElement.appendChild(reviewsElement);
    });
  }
}
