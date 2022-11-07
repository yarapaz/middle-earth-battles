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
const userRaceText = document.querySelector('.js_user_race');
const computerRaceText = document.querySelector('.js_computer_race');
let defaultUserImage = 'background-image: url("./images/good-forces.png")';
let defaultComputerImage = 'background-image: url("./images/evil-forces.jpg")';
let defaultMessage = '¡Comienza la batalla!';
let userCounter = 0;
let computerCounter = 0;
let turns = 0;
let defaultText = '';

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

function paintUserRaceName(name) {
  userRaceText.innerHTML = name;
}

function paintComputerRaceName(raceName) {
  computerRaceText.innerHTML = raceName;
}

function sumCounter(count) {
  count++;
  return count;
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

function handleResetClick(event) {
  event.preventDefault();
  restartGame();
  restartCounters();
}

function restartGame() {
  battleBtn.classList.remove('hidden');
  resetBtn.classList.add('hidden');
  paintBattleText(defaultMessage);
  let name = '';
  paintComputerRaceImage(defaultComputerImage);
  paintComputerRaceName(name);
  paintUserRaceImage(defaultUserImage);
  paintUserRaceName(name);
  select.value = 0;
}

function restartCounters() {
  userCounter = 0;
  computerCounter = 0;
  turns = 0;
  userCounterText.innerHTML = userCounter;
  computerCounterText.innerHTML = computerCounter;
}

function getComputerRacePP() {
  const randomNumber = getRandomNumber(5);
  let racePP = 0;
  let raceImage = '';
  let raceName = '';

  if (randomNumber === 1) {
    racePP = 2;
    raceImage = 'background-image: url("./images/sureños malos.jpg")';
    raceName = 'Haradrim';
  } else if (randomNumber === 2) {
    racePP = 2;
    raceImage = 'background-image: url("./images/orcos.jpg")';
    raceName = 'Orcos';
  } else if (randomNumber === 3) {
    racePP = 2;
    raceImage = 'background-image: url("./images/goblins.jpg")';
    raceName = 'Goblins';
  } else if (randomNumber === 4) {
    racePP = 3;
    raceImage = 'background-image: url("./images/huargos.jpg")';
    raceName = 'Huargos';
  } else if (randomNumber === 5) {
    racePP = 5;
    raceImage = 'background-image: url("./images/trolls.jpg")';
    raceName = 'Trolls';
  }
  paintComputerRaceImage(raceImage);
  paintComputerRaceName(raceName);
  return racePP;
}

function getUserRacePP() {
  let racePP = parseInt(select.value);
  let raceName = '';
  let raceImage = '';

  if (racePP === 1) {
    raceImage = 'background-image: url("./images/hobbits.jpg")';
    raceName = 'Hobbits';
  } else if (racePP === 2) {
    raceImage = 'background-image: url("./images/sureños buenos.jpg")';
    raceName = 'Sureños';
  } else if (racePP === 3) {
    raceImage = 'background-image: url("./images/enanos.jpg")';
    raceName = 'Enanos';
  } else if (racePP === 4) {
    raceImage = 'background-image: url("./images/numenoreanos .jpg")';
    raceName = 'Numenóreanos';
  } else if (racePP === 5) {
    raceImage = 'background-image: url("./images/elfos.jpg")';
    raceName = 'Elfos';
  }
  paintUserRaceImage(raceImage);
  paintUserRaceName(raceName);
  return racePP;
}

function comparePP(userRacePP, computerRacePP) {
  const maxTurns = 10;
  let resultBattle = '';
  turns = sumCounter(turns);

  if (userRacePP === 0 && turns <= maxTurns) {
    paintComputerRaceImage(defaultComputerImage);
    paintUserRaceImage(defaultUserImage);
    resultBattle = 'Seleccione una raza para empezar a jugar';
    paintBattleText(resultBattle);
    let raceName = '';
    paintComputerRaceName(raceName);
    turns--;
  } else if (userRacePP < computerRacePP && turns <= maxTurns) {
    computerCounter = sumCounter(computerCounter);
    computerCounterText.innerHTML = computerCounter;
    resultBattle = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    paintBattleText(resultBattle);
  } else if (userRacePP > computerRacePP && turns <= maxTurns) {
    userCounter = sumCounter(userCounter);
    userCounterText.innerHTML = userCounter;
    resultBattle = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
    paintBattleText(resultBattle);
  } else if (userRacePP === computerRacePP && turns <= maxTurns) {
    resultBattle = 'Empate';
    paintBattleText(resultBattle);
  }
  if (turns === maxTurns) {
    compareCounter(userCounter, computerCounter);
    gameOver();
  }
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
