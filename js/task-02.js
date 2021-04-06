const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.textContent = ingredient;
  ingredientsRef.append(ingredientsItemRef);
});
console.log(ingredientsRef);
