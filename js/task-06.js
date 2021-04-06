const inputRef = document.querySelector('#validation-input');

const validInputLength = inputRef.addEventListener('blur', () => {
  if (inputRef.value.length === Number(inputRef.dataset.length)) {
    addAndRemoveValidClass('valid', 'invalid');
  } else {
    addAndRemoveValidClass('invalid', 'valid');
  }
});

function addAndRemoveValidClass(addClass, removeClass) {
  inputRef.classList.add(addClass);
  inputRef.classList.remove(removeClass);
}
