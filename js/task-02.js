const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = ingredient;
  ingredientsRef.append(ingredientsItemRef);
}

console.log(ingredientsRef);
