const accountName = document.querySelector('.user-name');
accountName.textContent = this.getPlayerName();

const reviewerName = document.querySelector('.user-name2');
playerNameEl.textContent = this.getPlayerName();

const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();

const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();



function getPlayerName() {
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