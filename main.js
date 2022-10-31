'use strict';

//DOM elements to retrieve
const battleBtn = document.querySelector('.js_battle_btn');
const resetBtn = document.querySelector('.js_reset_btn');
const select = document.querySelector('.js_select');
const battleText = document.querySelector('.js_battle_text');
const userCounterText = document.querySelector('.js_user_counter');
const computerCounterText = document.querySelector('.js_computer_counter');
let userCounter = 0;
let computerCounter = 0;
let moves = 0;

//Functions
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getComputerRacePP() {
  const randomNumber = getRandomNumber(5);
  let result = 0;
  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
    result = 2;
  } else if (randomNumber === 4) {
    result = 3;
  } else {
    result = 5;
  }

  return result;
}

function getUserRacePP() {
  return parseInt(select.value);
}

function handleResetClick(event) {
  event.preventDefault();
  restartGame();
  userCounter = 0;
  computerCounter = 0;
  moves = 0;
  userCounterText.innerHTML = userCounter;
  computerCounterText.innerHTML = computerCounter;
  battleText.innerHTML = '¡Comienza la batalla!';
}

function compareCounter(userCounter, computerCounter) {
  if (userCounter > computerCounter) {
    battleText.innerHTML =
      '¡Has ganado el juego! Ahora la Tierra Media podrá vivir en paz';
  } else if (userCounter < computerCounter) {
    battleText.innerHTML =
      'Has perdido el juego. Las sombras se apoderarán de las tierras de los hombres libres';
  } else if (userCounter === computerCounter) {
    battleText.innerHTML =
      '¡Habéis empatado! Todo se decidirá en la siguiente ronda de batallas';
  }
}

function renderScore() {
  userCounterText.innerHTML = userCounter;
  computerCounterText.innerHTML = computerCounter;
}

function gameOver() {
  battleBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
}

function restartGame() {
  battleBtn.classList.remove('hidden');
  resetBtn.classList.add('hidden');
}

function comparePP(userRacePP, computerRacePP) {
  const maxMoves = 10;
  moves++;
  if (userRacePP < computerRacePP && moves < maxMoves) {
    computerCounter++;
    computerCounterText.innerHTML = computerCounter;
    battleText.innerHTML =
      '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else if (userRacePP > computerRacePP && moves < maxMoves) {
    userCounter++;
    userCounterText.innerHTML = userCounter;
    battleText.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (userRacePP === computerRacePP && moves < maxMoves) {
    battleText.innerHTML = 'Empate';
  }
  if (moves === maxMoves) {
    compareCounter(userCounter, computerCounter);
    gameOver();
  }
}

function handleBattleClick(event) {
  event.preventDefault();
  //Obtener la raza de buenos
  const userRacePP = getUserRacePP();
  //Obtener la raza de malos
  const computerRacePP = getComputerRacePP();
  comparePP(userRacePP, computerRacePP);
  renderScore();
}

//Events
battleBtn.addEventListener('click', handleBattleClick);
resetBtn.addEventListener('click', handleResetClick);
