const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
    const dataLength = Number(validationInput.dataset.length);
    const inputValue = validationInput.value.length;
    
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