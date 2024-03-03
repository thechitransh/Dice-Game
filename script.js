const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
let score = [0, 0];
let activePlayer = 0;
let value = 0;
let playing = true;
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  value = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    dice.classList.remove("hidden");
    let num = Math.floor(Math.random() * 6) + 1;
    dice.src = `${num}.png`;
    value = value + num;
    document.querySelector(`#current--${activePlayer}`).textContent = value;
    document;
    if (num == 1) {
      switchPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (playing) {
    score[activePlayer] = value + score[activePlayer];
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
    }
    switchPlayer();
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  value = 0;
  score = [0, 0];
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  activePlayer = 0;
  playing = true;
  player1.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--winner");
  player2.classList.remove("player--active");
});
