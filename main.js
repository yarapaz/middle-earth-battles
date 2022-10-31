'use strict';

//DOM elements to retrieve
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const battleText = document.querySelector('.js_battle_text');
const userCounter = document.querySelector('.js_user_counter');
const computerCounter = document.querySelector('.js_computer_counter');

//Functions
function randomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function battleMessage() {
  let selectValue = parseInt(select.value);
  let counter = 0;
  const counterMaxLimit = 10;
  counter++;
  if (selectValue < randomNumber(5) && counter < counterMaxLimit) {
    battleText.innerHTML =
      '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    computerCounter.innerHTML = `Ordenador:  ${counter}`;
  } else if (selectValue > randomNumber(5) && counter < counterMaxLimit) {
    battleText.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
    userCounter.innerHTML = `Jugadora:  ${counter}`;
  } else if (selectValue === randomNumber(5) && counter < counterMaxLimit) {
    battleText.innerHTML = 'Empate';
  } else if (counter === counterMaxLimit) {
    if (userCounter > computerCounter) {
      battleText.innerHTML =
        '¡Has ganado el juego! Ahora la Tierra Media podrá vivir en paz';
      btn.innerHTML = 'Reiniciar Juego';
    } else {
      battleText.innerHTML =
        'Has perdido el juego. Las sombras se apoderarán de las tierras de los hombres libres';
      btn.innerHTML = 'Reiniciar Juego';
    }
  }
}

function handleClick(event) {
  event.preventDefault();
  battleMessage();
}

//Events
btn.addEventListener('click', handleClick);
