const key = document.getElementById("keys");
const display = document.getElementById("display");

function appendToDisplay(i) {
    display.value += i;
}

function calculate() {

    
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}