import isEven from './is-even.js';
const numberInput = document.getElementById('number')

button.onclick = function() {
    const number = Number(numberInput.value);
    const result = isEven(number);
    console.log(result)
    if(result === true) {
        even.classList.remove('hidden')
        odd.classList.add('hidden')
    } else {
        even.classList.add('hidden')
        odd.classList.remove('hidden')
    }
}