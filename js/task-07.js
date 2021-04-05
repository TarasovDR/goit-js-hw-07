const fontSizeRef = document.querySelector('#font-size-control');
const rangedText = document.querySelector('#text');

fontSizeRef.addEventListener('input', e => {
  rangedText.style.fontSize = e.currentTarget.value + 'px';
});
