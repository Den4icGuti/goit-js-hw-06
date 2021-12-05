const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output ');

inputEl.addEventListener('input', onInputText)

function onInputText(event) {

     spanEl.textContent = event.target.value || "Anonymous";

     
};

