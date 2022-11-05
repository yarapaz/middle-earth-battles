'use strict';

//DOM elements to retrieve
const battleBtn = document.querySelector('.js_battle_btn');
const resetBtn = document.querySelector('.js_reset_btn');
const select = document.querySelector('.js_select');
const battleText = document.querySelector('.js_battle_text');
const userCounterText = document.querySelector('.js_user_counter');
const computerCounterText = document.querySelector('.js_computer_counter');
const userRaceImage = document.querySelector('.js_user_image');
const computerRaceImage = document.querySelector('.js_computer_image');
let userCounter = 0;
let computerCounter = 0;
let turns = 0;

//Functions
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function paintBattleText(text) {
  battleText.innerHTML = text;
}

function paintUserRaceImage(image) {
  userRaceImage.style = image;
}

function paintComputerRaceImage(image) {
  computerRaceImage.style = image;
}

function getComputerRacePP() {
  const randomNumber = getRandomNumber(5);
  let racePP = 0;
  let raceText = '';
  let raceImage = '';
  //I don't create a raceName variable as in the getUserRacePP function because in this case I don't have a way to know which race the computer has selected. I only know a random number to work with. That's the reason why I introduce the name directly.

  if (randomNumber === 1) {
    racePP = 2;
    raceText = 'Vas a combatir con los: Sureños malos';
    raceImage = 'background-image: url("./images/sureños malos.jpg")';
  } else if (randomNumber === 2) {
    racePP = 2;
    raceText = 'Vas a combatir con los: Orcos';
    raceImage = 'background-image: url("./images/orcos.jpg")';
  } else if (randomNumber === 3) {
    racePP = 2;
    raceText = 'Vas a combatir con los: Goblins';
    raceImage = 'background-image: url("./images/goblins.jpg")';
  } else if (randomNumber === 4) {
    racePP = 3;
    raceText = 'Vas a combatir con los: Huargos';
    raceImage = 'background-image: url("./images/huargos.jpg")';
  } else if (randomNumber === 5) {
    racePP = 5;
    raceText = 'Vas a combatir con los: Trolls';
    raceImage = 'background-image: url("./images/trolls.jpg")';
  }
  paintBattleText(raceText);
  paintComputerRaceImage(raceImage);
  return racePP;
}

function getUserRacePP() {
  let racePP = parseInt(reset.value);
  let raceName = reset.innerHTML;
  let raceText = '';
  let raceImage = '';

  if (option === 0) {
    raceText = 'Seleccione una raza, por favor';
    raceImage = 'background-image: url("./images/default-Image.jpg")'; //imagen por defecto
  } else if (option === 1) {
    raceText = `Vas a combatir con los: ${raceName}`;
    raceImage = 'background-image: url("./images/hobbits.jpg")';
  } else if (option === 2) {
    raceText = `Vas a combatir con los: ${raceName}`;
    raceImage = 'background-image: url("./images/sureños buenos.jpg")';
  } else if (option === 3) {
    raceText = `Vas a combatir con los: ${raceName}`;
    raceImage = 'background-image: url("./images/enanos.jpg")';
  } else if (option === 4) {
    raceText = `Vas a combatir con los: ${raceName}`;
    raceImage = 'background-image: url("./images/numenoreanos.jpg")';
  } else if (option === 5) {
    raceText = `Vas a combatir con los: ${raceName}`;
    raceImage = 'background-image: url("./images/elfos.jpg")';
  }
  paintBattleText(raceText);
  paintUserRaceImage(raceImage);
  return racePP;
}

function restartCounters() {
  userCounter = 0;
  computerCounter = 0;
  turns = 0;
  userCounterText.innerHTML = userCounter;
  computerCounterText.innerHTML = computerCounter;
}

function handleResetClick(event) {
  event.preventDefault();
  restartGame();
  restartCounters();
}

function compareCounter(userCounter, computerCounter) {
  let finalResult = '';
  if (userCounter > computerCounter) {
    finalResult =
      '¡Has ganado el juego! Ahora la Tierra Media podrá vivir en paz';
  } else if (userCounter < computerCounter) {
    finalResult =
      'Has perdido el juego. Las sombras se apoderarán de las tierras de los hombres libres';
  } else if (userCounter === computerCounter) {
    finalResult =
      '¡Habéis empatado! Todo se decidirá en la siguiente ronda de batallas';
  }
  paintBattleText(finalResult);
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
  let defaultMessage = '¡Comienza la batalla!';
  paintBattleText(defaultMessage);
}

function maxTurns() {
  compareCounter(userCounter, computerCounter);
  gameOver();
}

function comparePP(userRacePP, computerRacePP) {
  const maxTurns = 10;
  let resultBattle = '';
  turns++;
  if (userRacePP < computerRacePP && turns < maxTurns) {
    computerCounter++;
    computerCounterText.innerHTML = computerCounter;
    resultBattle = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else if (userRacePP > computerRacePP && turns < maxTurns) {
    userCounter++;
    userCounterText.innerHTML = userCounter;
    resultBattle = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (userRacePP === computerRacePP && turns < maxTurns) {
    resultBattle = 'Empate';
  }
  if (turns === maxTurns) {
    maxTurns();
  }
  paintBattleText(resultBattle);
}

function handleBattleClick(event) {
  event.preventDefault();
  //Obtener poder raza de buenos
  const userRacePP = getUserRacePP();
  //Obtener poder raza de malos
  const computerRacePP = getComputerRacePP();
  comparePP(userRacePP, computerRacePP);
  renderScore();
}

//Events
battleBtn.addEventListener('click', handleBattleClick);
resetBtn.addEventListener('click', handleResetClick);
