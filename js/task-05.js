const input = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(e) {
  e.currentTarget.value.length < 1
    ? (nameOutput.textContent = 'незнакомец')
    : (nameOutput.textContent = e.currentTarget.value);
}
