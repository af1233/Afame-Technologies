let displayValue = '';

const display = document.getElementById('display');

function appendValue(val) {
    if (val === '.' && displayValue.includes('.')) return;
    displayValue += val;
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.value = '0';
}

function calculate() {
    try {
        const result = eval(displayValue);
        display.value = result;
        displayValue = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
