// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const fontSizeControl = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
  
fontSizeControl.addEventListener('input', textWord);
function textWord() {
    const textSize = fontSizeControl.value;
    textElement.style.fontSize = `${textSize}px`;
  };



