const items = document.querySelectorAll('.item');
const allItem = items.length;
console.log(`Number of categories: ${allItem}`);
items.forEach((element) => {

let elemTitle = element.querySelector('h2').textContent;

let oneTitle = element.querySelectorAll('li');
let allTitle = oneTitle.length;

	console.log(`Category: ${elemTitle} `);
  console.log(`Elements: ${allTitle}`);

});
    







