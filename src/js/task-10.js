const inputEl = document.querySelector('#controls input');
const btnCreate = document.querySelector('#controls [data-create]');
const btnDestroy = document.querySelector('#controls [data-destroy]');
const boxes = document.getElementById("boxes");
btnCreate.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}
function createBoxes(amount) {

  const basicSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";

}

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

