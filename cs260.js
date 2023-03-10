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