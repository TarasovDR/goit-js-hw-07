const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.classList.add('ingredients__list');

const ingredientsItems = ingredients.map(ingredient => {
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.classList.add('ingredients__item');
  ingredientsItemRef.textContent = ingredient;
  return ingredientsItemRef;
});

ingredientsRef.append(...ingredientsItems);
