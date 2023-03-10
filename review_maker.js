function post() {
    const gradeEL = document.querySelector("#gradeId");
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