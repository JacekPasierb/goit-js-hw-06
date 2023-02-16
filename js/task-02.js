const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");

  
  const arr = document.querySelector("#ingredients");
  arr.append(list);

 
}