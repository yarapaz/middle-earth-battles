'use strict';

//DOM elements to retrieve
const btn = document.querySelector('.js_btn');
const select = document.querySelector('.js_select');
const battleText = document.querySelector('.js_battle_text');

//Functions
function randomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function battleMessage() {
  let selectValue = parseInt(select.value);
  if (selectValue < randomNumber(6)) {
    battleText.innerHTML =
      '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else if (selectValue > randomNumber(6)) {
    battleText.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (selectValue === randomNumber(6)) {
    battleText.innerHTML = 'Empate';
  }
}

function counter() {
  let counter = 0;
  if (selectValue < randomNumber(6)) {
    battleText.innerHTML =
      '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else if (selectValue > randomNumber(6)) {
    battleText.innerHTML = '¡Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (selectValue === randomNumber(6)) {
    battleText.innerHTML = 'Empate';
  }
}

function handleClick(event) {
  event.preventDefault();
  battleMessage();
}

//Events
btn.addEventListener('click', handleClick);
