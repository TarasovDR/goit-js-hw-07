const calculateItems = () => {
  const itemsNumberRef = document.querySelectorAll('.item');
  console.log(`В списке ${itemsNumberRef.length} категории.`);

  for (let i = 0; i < itemsNumberRef.length; i += 1) {
    const element = itemsNumberRef[i].querySelector('h2');
    const elementNumber = itemsNumberRef[i].querySelectorAll('ul > li');

    console.log(`Категория: ${element.textContent}`);
    console.log(`Количество элементов: ${elementNumber.length}`);
  }
};

calculateItems();
