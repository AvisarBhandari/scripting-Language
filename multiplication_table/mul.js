function mul(){
    const n = document.getElementById('num').value;
    const r = document.getElementById('range').value;
    var i,m,mul='';
    if(r<=10)
    {
    for(i=1;i<=r;i++)
        {
            m = n*i;
            mul += n.toString() + ' x ' + i.toString() + ' = ' + m + '<br>';
        }
    }
    else
    {

    }
        document.getElementById('result').innerHTML=mul;
}