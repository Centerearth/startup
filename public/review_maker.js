async function saveReview() {
  const userName = document.querySelector("#nameId")?.value;
  const letterGrade = document.querySelector('#gradeId')?.value;
  const classNum = document.querySelector('#classId')?.value;
  const reviewContent = document.querySelector('#reviewId')?.value;
  const date = new Date().toLocaleDateString();
  const newReview = { name: userName, grade: letterGrade, date: date, class:classNum, review:reviewContent};
  const response = await fetch(`/api/review/${classNum}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newReview),
  });
  const reviews = await response.json();
  //console.log(reviews);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  broadcastEvent(classNum, {});
  //window.location.href = `/review_maker.html`;
  //window.location.href = `/${classNum}.html`;
}
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'Websocket', 'connected');
    };
    socket.onclose = (event) => {
      displayMsg('system', 'Websocket', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(event);
      displayMsg('player', msg.from, ` has had a new review posted!`);
    };
  }

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

function broadcastEvent(from, value) {
    const event = {
      from: from,
      value: value,
    };
    socket.send(JSON.stringify(event));
    temp = JSON.stringify(event);
    const msg = JSON.parse(temp);
    displayMsg('player', msg.from.toUpperCase(), ` has had a new review posted!`);
  }

configureWebSocket();



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