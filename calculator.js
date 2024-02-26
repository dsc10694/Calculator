function add (a,b){
    return a+b
}

function subtract (a,b){
    return a-b
}

function multiply (a,b){
    return a*b
}

function divide (a,b){
    return a/b
}

const numOne  =''

const operator  =''

const numTwo =''



function operate(first, second,operator){

    if (operator == '/' ){
 return divide(first,second);
}
else if (operator == '+' ){
return add(first,second);
}
else if (operator == '-' ){
return subtract(first,second);
}
else if (operator == '*' ){
return multiply(first,second);
}
} 

display = document.getElementById('display')
zeroButton = document.getElementById('0');
oneButton = document.getElementById('1')
twoButton = document.getElementById('2')
threeButton = document.getElementById('3')
fourButton = document.getElementById('4')
fiveButton = document.getElementById('5')
sixButton = document.getElementById('6')
sevenButton = document.getElementById('7')
eightButton = document.getElementById('8')
nineButton = document.getElementById('9')

zeroButton.addEventListener('click' , function() {
    display.textContent += '0';
});
