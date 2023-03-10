function login() {
    const nameEl = document.querySelector("#form2Example1");
    localStorage.setItem("userName", nameEl.value);
    document.getElementById("myForm").reset();
    window.location.reload()
  }
  

const accountName = document.querySelector('.user-name');
accountName.textContent = this.getAccountName();

function getAccountName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}