function areaOfSquare(){
    var l = parseFloat(prompt("Enter The Length: "));
    var a = Math.pow(l,2);
    alert ( "Area Of Square="+a);
}

function celciusToFarenheit(){
    var c = parseFloat(prompt("Enter The Celcius: "));
    
    var f = (c*9/5)+32;
    alert("It is "+f+"° Farenheit");

}

function farenheitToCelcius(){
    var f = parseFloat(prompt("Enter The Farenheit: "));
    var c = ( f - 32) * 5/9;
    alert("It is "+c+"° Celcius");
}

function volumeOfSphere(){
    var r = parseFloat(prompt("Enter the Radius of Sphere: "));
    v = 4/3*(Math.PI*Math.pow(r,3));
    alert( "volume = "+ v);
}

function areaOfTriangle(){
    var b = parseFloat(prompt("Entrt base of the triangle:"));
    var h = parseFloat(prompt("Entrt height of the triangle:"));
    var a = (b*h)/2;
    alert("Area of triangle: "+a);

} 
function areaOfcircle(){
    var r = parseFloat(prompt("Enter the radius of a circle: "));
    var a = Math.PI*Math.pow(r,2);
    alert("Area of circle: "+a)
}
