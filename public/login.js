async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#your_name')?.value;
  const userEmail = document.querySelector('#email')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ name: userName, email: userEmail, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    //window.location.href = 'review_maker.html';
    window.location.href = '/login.html'
  } else {
    //not exactly sure what this does but it never hits this part
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
    document.getElementById("myForm").reset();
    window.location.reload()
  }
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/login.html'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}


//modify
function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}




/*function login() {
    const nameEl = document.querySelector("#form2Example1");
    localStorage.setItem("userName", nameEl.value);
    document.getElementById("myForm").reset();
    window.location.reload()
  }
  

const accountName = document.querySelector('.user-name');
accountName.textContent = this.getAccountName();

function getAccountName() {
  return localStorage.getItem('userName') ?? 'Anonymous';
}*/