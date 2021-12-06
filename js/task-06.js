const input = document.getElementById('validation-input');

const inputLengthEl = input.dataset.length;
input.addEventListener('focus', focusInput);
input.addEventListener('blur', blurInput);

function focusInput(event) {
    
}

function blurInput(event) {

    
   
    if (event.currentTarget.value.length == inputLengthEl && event.currentTarget.value.length <= inputLengthEl) {
        input.classList.add('valid');
    } else if (event.currentTarget.length == null) {
        input.classList.add('invalid');
    }
   
}
 

