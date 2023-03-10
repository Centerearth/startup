function login() {
    const nameEl = document.querySelector("#form2Example1");
    localStorage.setItem("userName", nameEl.value);
  }
  

const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}