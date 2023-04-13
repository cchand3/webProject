window.reviewData = [
    {
        name: "Beena Chand",
        date: "2023-02-17",
        rating: 5,
        review: "As a longtime fan of Dandi Biyo, I have to say that this game never gets old. Every game is a new challenge, and it's always so satisfying when you successfully knock over the other team's biyo. If you haven't played Dandi Biyo yet, you're missing out on some serious fun!"
    },
    {
        name: "Chetan Chand",
        date: "2023-01-21",
        rating: 4,
        review: "Dandi Biyo is more than just a game to me – it's a symbol of my Nepalese heritage and culture. I grew up playing this game with my family and friends, and it holds a special place in my heart. I'm so glad that Dandi Biyo is gaining popularity around the world, and I hope that more people will discover the joy of playing this amazing game."
    },
    {
        name: "Jackie Chan",
        date: "2023-05-24",
        rating: 4,
        review: "I just played Dandi Biyo for the first time, and I have to say, it was an absolute blast! The game is so simple yet so challenging, and it really tests your coordination and aim. I can see why it's such a beloved sport in Nepal, and I'm already looking forward to my next game."
    },
    {
        name: "Rey Mysterio",
        date: "2023-09-26",
        rating: 5,
        review: "I love playing Dandi Biyo with my friends on weekends. It's such a great way to get outside and enjoy some friendly competition. Plus, it's always fun to see who has the best aim and coordination. If you're looking for a new outdoor game to play with your friends, I highly recommend Dandi Biyo."
    },
    {
        name: "Snoop Dog",
        date: "2023-07-02",
        rating: 3,
        review: "Dandibiyo was too physically demanding for me. As someone who isn't very athletic, I found it difficult to throw the dandi stick accurately, and my arm got tired quickly. I think this game would only be enjoyable for those with a lot of physical strength and endurance."
    },
    {
        name: "John Xina",
        date: "2022-05-22",
        rating: 1,
        review: "I found Dandibiyo to be a very boring game. The gameplay was slow and repetitive, and there wasn't enough variety to keep me interested. I wouldn't recommend it to anyone looking for an exciting sport."
    }
];

// waits for the DOM to load before executing any code
document.addEventListener('DOMContentLoaded', function() {

  // creates the initial table using the reviewData array
  createTable(reviewData);

  // adds a submit event listener to the form
  const form = document.querySelector('.review-form-input-area');
  form.addEventListener('submit', function(event) {

    // prevents the default behavior of the form (i.e. reloading the page) when the form is submitted
    event.preventDefault();

    // get the values entered by the user from the form
    const name = document.querySelector('#name').value;
    const date = document.querySelector('#date').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const review = document.querySelector('#review').value;

    // creates a new object with the user input data
    const newReview = { name, date, rating, review };

    // to add the new object to the reviewData array
    reviewData.push(newReview);

    // clears the form after submission
    form.reset();

    // re-create the table with the updated data
    createTable(reviewData);
  });

});

// defining the createTable function to display the reviews in a table
function createTable(reviews) {

  // gets the tbody element of the table
  let table = document.querySelector("#reviewTable");

  // define variables for creating new table rows, cells, and text
  let newRow, newCell, newText;

  // iterates through the reviews array and create a table row for each review
  reviews.forEach(function (review) {

    // creates a new table row
    newRow = table.insertRow();
    newRow.className = "card";

    // add a cell for the name of the reviewer
    newCell = newRow.insertCell();
    newCell.className = "reviewName";
    newCell.textContent = "Name: ";
    newText = document.createTextNode(review.name);
    newCell.appendChild(newText);

    // add a cell for the date of the review
    newCell = newRow.insertCell();
    newCell.className = "reviewDate";
    newCell.textContent = "Date: ";
    newText = document.createTextNode(review.date);
    newCell.appendChild(newText);

    // add a cell for the rating of the review
    newCell = newRow.insertCell();
    newCell.className = "reviewRating";
    newCell.textContent = "Rating: ";
    newText = document.createTextNode(getRatingStars(review.rating));
    newCell.appendChild(newText);

    // add a cell for the text of the review
    newCell = newRow.insertCell();
    newCell.className = "reviewReview";
    newText = document.createTextNode(review.review);
    newCell.appendChild(newText);
  });
}

// defining the getRatingStars function to convert a numerical rating to a string of stars
function getRatingStars(rating) {
  let starHtml = '';
  for (let i = 0; i < rating; i++) {
    starHtml += '★ ';
  }
  for (let i = rating; i < 5; i++) {
    starHtml += '☆ ';
  }
  return starHtml.trim();
}