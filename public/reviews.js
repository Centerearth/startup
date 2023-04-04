async function loadReviews(classNum) {
  //need to update each html with proper parameter
  classNum = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  alert(classNum);
  let reviews = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch(`/api/scores/${classNum}`);
    reviews = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } catch {
    // If there was an error then just use the last saved scores
    const reviewsText = localStorage.getItem('reviews');
    if (reviewsText) {
      reviews = JSON.parse(reviewsText);
    }
  }

  displayReviews(reviews);
}

function displayReviews(reviews) {
  const tableBodyEl = document.querySelector('#reviewTable');

  if (scores.length) {
    // Update the DOM with the scores
    for (const [i, review] of reviews.entries()) {
      const nameTdEl = document.createElement('td');
      const gradeTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');
      const reviewTdEl = document.createElement('td');

      nameTdEl.textContent = review.name;
      gradeTdEl.textContent = review.grade;
      dateTdEl.textContent = review.date;
      reviewTdEl.textContent = review.name;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(gradeTdEl);
      rowEl.appendChild(dateTdEl);
      rowEl.appendChild(reviewTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to review!/td></tr>';
  }
}

loadReviews();






/*
const accountName = document.querySelector('.user-name');
accountName.textContent = this.getAccountName();

const reviewerName = document.querySelector('.user-name2');
reviewerName.textContent = this.getAccountName();

const reviewEl = document.querySelector('#reviewText');
reviewEl.textContent = this.getReview();

const gradeEl = document.querySelector('#reviewerGrade');
gradeEl.textContent = this.getGrade();

function getAccountName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}

function getGrade() {
    return localStorage.getItem('grade') ?? 'Unknown';
  }

function getClass() {
    return localStorage.getItem('class') ?? 'Unknown';
  }

function getReview() {
    return localStorage.getItem('review') ?? 'Unknown';
  }
  */