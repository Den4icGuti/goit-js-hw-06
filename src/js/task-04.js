

 const counterRef = document.querySelector('#counter');

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

const spanRef = document.querySelector('#value');
let counterValue = 0;

const changeValue = function (step) {
    
    counterValue = counterValue + step;
    spanRef.textContent = counterValue;
};


btnDecrementRef.addEventListener('click', () => changeValue(-1));

btnIncrementRef.addEventListener('click', () => changeValue(+1));



