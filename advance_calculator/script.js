
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        keyBoardDisplay(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        resultult();
    } else if (key === 'Backspace') {
        ce();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

function keyBoardDisplay(val){
    var v=document.getElementById('display');
    v.value+=val;
}
function clearDisplay() {
    var inp = document.getElementById('display');
    inp.value = '';
}
function ce() {
    var ev = document.getElementById('display');
    ev.value = ev.value.slice(0, -1);
}

function squareRoot(){
    var diaplay = document.getElementById('display');
    display.value+="²";
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}
 
function base10Log() {
    let display = document.getElementById("display");
    display.value += "log(";
}
 
function pi() {
    let display = document.getElementById("display");
    display.value += "pi";
}
 
function e() {
    let display = document.getElementById("display");
    display.value += "e";
}
 
function power() {
    let display = document.getElementById("display");
    display.value += "^(";
}

function resultult() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
        
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
 
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}