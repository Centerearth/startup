async function saveReview() {
  const userName = document.querySelector("#nameId")?.value;
  const letterGrade = document.querySelector('#gradeId')?.value;
  const classNum = document.querySelector('#classId')?.value;
  const reviewContent = document.querySelector('#reviewId')?.value;
  const date = new Date().toLocaleDateString();
  const newReview = { name: userName, grade: letterGrade, date: date, class:classNum, review:reviewContent};
  console.log(classNum);
  const response = await fetch(`/api/review/${classNum}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newReview),
  });
  console.log("HI)");
  const reviews = await response.json();
  console.log(reviews);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  window.location.href = `/`;
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