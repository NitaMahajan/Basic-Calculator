
const display = document.getElementById("display");
console.log(display);

function onKeyClick(input) {
    console.log(input);
    display.value = display.value + input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}