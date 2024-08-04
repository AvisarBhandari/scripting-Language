function add(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var sum = n1+n2;
    document.getElementById("result").innerHTML = "Result:"+sum;
}
function sub(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var d = n1-n2;
    document.getElementById("result").innerHTML = "Result:"+d;
}
function mul(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var m = n1*n2;
    document.getElementById("result").innerHTML = "Result:"+m;
}
function div(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var d = n1/n2;
    document.getElementById("result").innerHTML = "Result:"+d;
}