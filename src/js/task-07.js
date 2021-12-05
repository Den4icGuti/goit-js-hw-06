const refs = {
    inputEl: document.querySelector("#font-size-control"),

    textEl: document.querySelector("#text")
}



const { inputEl, textEl } = refs;



function changeFonSizeText(event) {
    
    textEl.setAttribute('style',`font-size: ${event.currentTarget.value}px`)
}

inputEl.addEventListener('input', changeFonSizeText);
