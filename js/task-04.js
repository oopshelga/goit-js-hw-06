

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();





