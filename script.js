let display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!";
    }
}

// Square function
function square() {
    display.value = Math.pow(eval(display.value), 2);
}

// Cube function
function cube() {
    display.value = Math.pow(eval(display.value), 3);
}

// Square root function
function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

// Factorial function
function factorial() {
    let num = parseInt(display.value);
    if (num < 0) {
        display.value = "Error!";
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

// Log base 10 function
function log10() {
    display.value = Math.log10(eval(display.value));
}

// Natural logarithm (ln) function
function ln() {
    display.value = Math.log(eval(display.value));
}

// Toggle Dark/Light Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
