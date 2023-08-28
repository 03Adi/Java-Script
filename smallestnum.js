var a=Number(prompt("enter the first number :"))
var b=Number(prompt("enter thhe second number :"))
var c=Number(prompt("enter the third number :"))
if(a<b){
    if(a<c)
    document.write(`${a} is smallest`)
    else
    document.write(`${c} is smallest`)
}
else{
    if(b<c)
    document.write(`${b} is smallest`)
    else
    document.write(`${c} is smallest`)
}
