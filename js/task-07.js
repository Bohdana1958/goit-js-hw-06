const inputEl = document.querySelector('#font-size-control');
inputEl.addEventListener('input', inputOn);
const textEl = document.querySelector('#text');
function inputOn() {
    const inputValue = inputEl.value;
    textEl.style.fontSize = inputValue + 'px';

    
}






