let isOn = true;

const display = document.getElementById("display");

// ligar / desligar
function togglePower() {
    isOn = !isOn;

    if (!isOn) {
        display.value = "";
        display.placeholder = "OFF";
    } else {
        display.placeholder = "";
    }
}
// adicionar ao display
function appendToDisplay(input) {
    if (!isOn) return;

    const operators = ["+", "-", "*", "/"];

    let lastChar = display.value.slice(-1);

    // não deixar começar com operador
    if (display.value === "" && operators.includes(input)) {
        return;
    }

    // se clicar dois operadores seguidos → substitui
    if (operators.includes(lastChar) && operators.includes(input)) {
        display.value = display.value.slice(0, -1) + input;
        return;
    }

    display.value += input;
}

// limpar display
function clearDisplay() {
    if (!isOn) return;
    display.value = "";
}

// calcular resultado
function calculate() {
    if (!isOn) return;

    try {
        display.value = eval(display.value);

    }
    catch {
        display.value = "Error";
    }
}

// positivo / negativo
function toggleSign() {
    if (display.value !== "") {
        display.value = Number(display.value) * -1;
    }
}

// porcentagem
function percent() {
    if (display.value !== "") {
        display.value = Number(display.value) / 100;
    }
}