export function reviewsAddListener() {
  const piecesElements = document.querySelectorAll('.sheets article button');
  for (let i = 0; i < piecesElements.length; i++) {
    piecesElements[i].addEventListener('click', async function (event) {
      const id = event.target.dataset.id;
      // Store the server response in a constant
      const response = await fetch(`http://localhost:8081/pieces/${id}/avis`);
      // Deserialize JSON response
      const reviews = await response.json();

      window.localStorage.setItem(
        `piece-reviews-${id}`,
        JSON.stringify(reviews)
      );

      const pieceElement = event.target.parentElement;
      displayReviews(pieceElement, reviews);
    });
  }
}

export function displayReviews(pieceElement, reviews) {
  const reviewsElement = document.createElement('p');
  for (let i = 0; i < reviews.length; i++) {
    reviewsElement.innerHTML += `${reviews[i].user}: ${reviews[i].comment} <br>`;
  }
  pieceElement.appendChild(reviewsElement);
}

export function sendReviewsAddListener() {
  const reviewsForm = document.querySelector('.reviews-form');
  reviewsForm.addEventListener('submit', function (event) {
    // Disable the default browser behavior
    event.preventDefault();

    // Create the object for the new reviews
    const reviews = {
      pieceId: parseInt(event.target.querySelector('[name=piece-id]').value),
      user: event.target.querySelector('[name=user').value,
      comment: event.target.querySelector('[name=comment]').value,
      starsNb: parseInt(event.target.querySelector('[name=stars-number]').value)
    };

    // Create the payload in JSON format
    const payload = JSON.stringify(reviews);

    // Call the fetch function with all the necessary information
    fetch('http://localhost:8081/avis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    });
  });
}
