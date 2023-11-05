let counter = 0;
const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action ="decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]');
btnDecrement.addEventListener("click", offClick);
function offClick (){
    counter -= 1
    valueEl.textContent = counter;
};
btnIncrement.addEventListener("click", onClick);
function onClick (){
    counter += 1
    valueEl.textContent = counter;
};
















































