'use strict';

//DOM elements to retrieve
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const battleText = document.querySelector('.js_battle_text');
const userCounter = document.querySelector('.js_user_counter');
const computerCounter = document.querySelector('.js_computer_counter');
let counter = 0;

//Functions
function randomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function compare(user, computer) {
  if (user > computer) {
    battleText.innerHTML =
      '¡Has ganado el juego! Ahora la Tierra Media podrá vivir en paz';
    btn.innerHTML = 'Reiniciar Juego';
  } else if (user < computer) {
    battleText.innerHTML =
      'Has perdido el juego. Las sombras se apoderarán de las tierras de los hombres libres';
    btn.innerHTML = 'Reiniciar Juego';
  } else if (user === computer) {
    battleText.innerHTML =
      '¡Habéis empatado! Todo se decidirá en la siguiente batalla';
    btn.innerHTML = 'Reiniciar Juego';
  }
}

function battleMessage() {
  let selectValue = parseInt(select.value);
  const counterMaxLimit = 10;
  if (selectValue < randomNumber(5) && counter < counterMaxLimit) {
    counter = counter + 1;
    computerCounter.innerHTML = counter;
    battleText.innerHTML =
      '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else if (selectValue > randomNumber(5) && counter < counterMaxLimit) {
    counter = counter + 1;
    userCounter.innerHTML = counter;
    battleText.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (selectValue === randomNumber(5) && counter < counterMaxLimit) {
    battleText.innerHTML = 'Empate';
  } else if (counter === counterMaxLimit) {
    compare(userCounter, computerCounter);
  }
}

function handleClick(event) {
  event.preventDefault();
  battleMessage();
}

//Events
btn.addEventListener('click', handleClick);
