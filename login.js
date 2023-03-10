function login() {
    const nameEl = document.querySelector("#form2Example1");
    localStorage.setItem("userName", nameEl.value);
    document.getElementById("myForm").reset();
    window.location.reload()
  }
  

const playerNameEl = document.querySelector('.user-name');
playerNameEl.textContent = this.getPlayerName();
document.getElementById("myForm").reset();

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}