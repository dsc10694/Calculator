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

const display = document.querySelector('.display')
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
clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', clear =()=>{
    display.innerHTML = ''
})

zeroButton.addEventListener('click' , function() {
    display.textContent += '0';
    
});

oneButton.addEventListener('click' , function() {
    display.textContent += '1';
});

twoButton.addEventListener('click' , function() {
    display.textContent += '2';
});

threeButton.addEventListener('click' , function() {
    display.textContent += '3';
});

fourButton.addEventListener('click' , function() {
    display.textContent += '4';
});

fiveButton.addEventListener('click' , function() {
    display.textContent += '5';
});

sixButton.addEventListener('click' , function() {
    display.textContent += '6';
});

sevenButton.addEventListener('click' , function() {
    display.textContent += '7';
});

eightButton.addEventListener('click' , function() {
    display.textContent += '8';
});

nineButton.addEventListener('click' , function() {
    display.textContent += '9';
});
