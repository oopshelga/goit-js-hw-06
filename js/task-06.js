// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// const validationInput = document.querySelector("#validation-input");
// const expectedLength = parseInt(validationInput.getAttribute("data-length"));

// validationInput.addEventListener("blur", () => {
// const inputValue = validationInput.value.trim();

//   if (inputValue.length === expectedLength) {
//     validationInput.classList.remove("invalid");
//     validationInput.classList.add("valid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
// });

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    const dataLength = Number(validationInput.dataset.length);
    const inputValue = validationInput.trim();
    
if (inputValue.length === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
}
    
});
// inputValidator.addEventListener(`blur`, () => { 
//      const dataLength = Number(inputValidator.dataset.length);
//      const inputLength = inputValidator.value.length;