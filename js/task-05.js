const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', function () {
    const name = nameInput.value;
    if (name === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = name;
    }
});
