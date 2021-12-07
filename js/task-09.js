

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

function changeColor() {
  document.body.style.background = getRandomHexColor();
};

function spColorCurrent() {
  spanRef.textContent = getRandomHexColor()
};
btnRef.addEventListener('click', changeColor);

btnRef.addEventListener('click',spColorCurrent)




