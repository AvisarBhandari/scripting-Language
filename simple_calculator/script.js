function solve(val) {
    var v = document.getElementById('result');
    v.value += val;
}

function resultult() {
    var num1 = document.getElementById('result').value;
    try {
        
        var num2 = Function('"use strict";return (' + num1.replace('x', '*') + ')')();
        document.getElementById('result').value = num2;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    var inp = document.getElementById('result');
    inp.value = '';
}

function ce() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        resultult();
    } else if (key === 'Backspace') {
        ce();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
