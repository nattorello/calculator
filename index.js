let isOn = true;

const display = document.getElementById("display");

// on / off
function togglePower() {
    isOn = !isOn;

    if (!isOn) {
        display.value = "";
        display.placeholder = "OFF";
    } else {
        display.placeholder = "";
    }
}
// add display
function appendToDisplay(input) {
    if (!isOn) return;

    const operators = ["+", "-", "*", "/"];

    let lastChar = display.value.slice(-1);

    // do not let it start with operator
    if (display.value === "" && operators.includes(input)) {
        return;
    }

    // replace operators
    if (operators.includes(lastChar) && operators.includes(input)) {
        display.value = display.value.slice(0, -1) + input;
        return;
    }

    display.value += input;
}

// clear display
function clearDisplay() {
    if (!isOn) return;
    display.value = "";
}

// calculate result
function calculate() {
    if (!isOn) return;

    try {
        display.value = eval(display.value);

    }
    catch {
        display.value = "Error";
    }
}

// positive / negative
function toggleSign() {
    if (display.value !== "") {
        display.value = Number(display.value) * -1;
    }
}

// percentage
function percent() {
    if (display.value !== "") {
        display.value = Number(display.value) / 100;
    }
}
