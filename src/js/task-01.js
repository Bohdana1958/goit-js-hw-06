
const element = document.querySelectorAll('.item')
const elemAll = element.length
console.log(`Number of categories: ${elemAll}`);
element.forEach(elem => 
  console.log(
    `Category: ${elem.firstElementChild.textContent}
    Elements: ${elem.lastElementChild.children.length}`
  ))




    







