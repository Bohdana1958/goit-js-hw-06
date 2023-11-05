const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', blurOn);
function blurOn() {
    const inputValue = inputEl.value;
    const valueLength = Number(inputEl.dataset.length);
    if (inputValue.length === valueLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
    
}





   

