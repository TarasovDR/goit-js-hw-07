const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const counterValueRef = document.querySelector('#value');
const decrementCounterBtn = document.querySelector('[data-action="decrement"]');
const incrementCounterBtn = document.querySelector('[data-action="increment"]');

decrementCounterBtn.addEventListener('click', function () {
  counter.decrement();
  counterValueRef.textContent = counter.value;
});

incrementCounterBtn.addEventListener('click', function () {
  counter.increment();
  counterValueRef.textContent = counter.value;
});
