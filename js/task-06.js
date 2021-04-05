const inputRef = document.querySelector('#validation-input');

const checkInputLength = inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});

console.dir(inputRef);
