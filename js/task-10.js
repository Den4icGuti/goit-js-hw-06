function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const btnCteateRef = document.querySelector('[data-create]')
const btnClearRef = document.querySelector('[data-destroy]')
const divBoxesRef = document.querySelector('#boxes');



btnCteateRef.addEventListener('click', renderBox);
btnClearRef.addEventListener('click',destroyBoxes)

function renderBox() {
  let inputValue = document.querySelector('#controls > input').value;
  if (inputValue == '') {
    alert('В поле должна быть хоть одна цифра')
  }
  createBoxes(inputValue)
};
let basSize = 30;
function createBoxes(amount) {
  let divBoxes = document.createDocumentFragment();
  
  for (let i = 0; i < amount; i += 1) {
    basSize += 10;
    let colors = getRandomHexColor();
    let div = document.createElement('div');
    div.style.cssText = `width:${basSize}px;height:${basSize}px; background-color:${colors}`;
    divBoxes.appendChild(div);

  }
  divBoxesRef.appendChild(divBoxes)
}


function destroyBoxes(){
  
  divBoxesRef.innerHTML = '';
}










