
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.change-color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



btnRef.addEventListener('click', () =>getRandomHexColor())