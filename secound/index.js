function calculate() {
    const operation = document.getElementById('operation').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    switch (operation) {
        case 'areaOfSquare':
            result = inputValue ** 2;
            break;
        case 'areaOfTriangle':
            result = 0.5 * inputValue * prompt("Enter the height:");
            break;
        case 'celciusToFarenheit':
            result = (inputValue * 9/5) + 32;
            break;
        case 'farenheitToCelcius':
            result = (inputValue - 32) * 5/9;
            break;
        case 'volumeOfSphere':
            result = (4/3) * Math.PI * (inputValue ** 3);
            break;
        case 'areaOfCircle':
            result = Math.PI * (inputValue ** 2);
            break;
        default:
            result = "Invalid Operation";
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
