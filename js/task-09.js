const elem = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
btnEl.addEventListener('click', buttonOn);
function buttonOn() {
  const color = getRandomHexColor();
  elem.style.backgroundColor = color;
  textEl.textContent = color;
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


