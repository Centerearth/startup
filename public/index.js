const searchInputDropdown = document.getElementById('search-input-dropdown');
const dropdownOptions = document.querySelectorAll('.input-group-dropdown-item');

const accountName = document.querySelector('.user-name');
//accountName.textContent = this.getAccountName();

function getAccountName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}

function goto() {
    const link = document.querySelector("#classSelection");
    location.href = link.value;
  }