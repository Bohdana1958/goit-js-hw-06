const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const box = document.createDocumentFragment();
for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item')
  box.appendChild(li)
}
list.appendChild(box);







































































