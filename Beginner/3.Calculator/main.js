const output = document.getElementById('output')
const number = document.querySelectorAll('.number-btn')
const operator = document.querySelectorAll('.operator')
const enter = document.getElementById('enter')
const clear = document.getElementById('clear')

number.forEach(button => {
    button.addEventListener("click", () => {
        output.innerText += button.innerText
    })
})

let operation = ''
let previous = ''

operator.forEach(operator => {
    operator.addEventListener("click", () => {
        previous = output.innerText
        operation = operator.innerText
        output.innerText = ''
    })
})

enter.addEventListener("click", () => {

    let current = output.innerText;
    let result = 0;

    if (operation === "+") result = Number(previous) + Number(current);
    if (operation === "-") result = Number(previous) - Number(current);
    if (operation === "*") result = Number(previous) * Number(current);
    if (operation === "/") result = Number(previous) / Number(current);

    output.innerText = result;
})

clear.addEventListener("click", () => {
    output.innerText = ""
    previous = ""
    operation = ""
})