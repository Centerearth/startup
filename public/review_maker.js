async function saveScore() {
  const userName = this.getPlayerName();
  const letterGrade = document.querySelector('#gradeId')?.value;
  const classNum = document.querySelector('#classId')?.value;
  const reviewContent = document.querySelector('#reviewId')?.value;
  const date = new Date().toLocaleDateString();
  const newReview = { name: userName, grade: letterGrade, date: date, class:classNum, review:reviewContent};

  try {
    const response = await fetch(`/api/review/${classNum}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    // Store what the service gave us as the high scores
    const reviews = await response.json();
    localStorage.setItem('reviews', JSON.stringify(reviews));
  } catch {
    // If there was an error then just track scores locally
    this.updateReviewsLocal(newReview);
  }
}

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}







/*
function post() {
    const gradeEl = document.querySelector("#gradeId");
    localStorage.setItem("grade", gradeEl.value);

    const classEl = document.querySelector("#classId");
    localStorage.setItem("class", classEl.value);

    const reviewEl = document.querySelector("#reviewId");
    localStorage.setItem("review", reviewEl.value);

    document.getElementById("reviewForm").reset();
    window.location.reload()
  }


const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}
*/