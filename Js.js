function Hesaplama (a , b) {
    c = a + b;
    console.log(c)
}
Hesaplama (5 , 6);

function Carpmak (d , e) {
    f= d * e;
    console.log(f)
}
Carpmak (5 , 6);

function Checking(a) {
    let b = ( a > 0 ) ? "Число больше нуля" : "Число меньше нуля";
    console.log (b)
}
Checking (-5)

let a1 = 5;
let b1 = 6;

let c1 = a1 + b1;
let d1 = c1 - b1;
let e1 = d1 * a1;
let f1 = e1 / a1;

console.log (f1);


let x = 5;
let y = 3;

console.log(x == y)
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x != y)


let age = 60;

if ( age < 16 ) {
    console.log("Бер")
} else if (age >= 16 && age < 30) {
    console.log("Къонах")       
}  else if (age > 30 && age < 50) {
    console.log ("Вохкх стаг")
} else {
    console.log("К1ен стаг")
}


function square ( a , b ) {
    let square1 = a** 2;
    let square2 = b** 2;
    console.log( square1 , square2 );
}
square ( 3 , 5 )

let counter = 0;
counter += 2;
counter *=2;
counter /= 0.4;
counter /= 2;

console.log(counter)


let string = ("Что-то там");
let string1 = ("Что-то другое");
console.log ( string == string1);
console.log ( string != string1);

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];  
    }
    return sum; 
}

let squaress = sumArray([1,2,3,4,5]);
console.log(squaress)


let IsAdult = 20;
let results = (IsAdult > 18) ? "Вы совершеннолетний" : "Вы несовершеннолетний"
console.log(results)

let years = prompt("Сколько вам лет?") ;
let result1 = ( years >= 18) ? "Вы можете пройти этот тест!" : "Вы не можете пройти этот тест!"
console.log(result1)


let stringq = prompt("Введите предложение");
if ( stringq === "") {
    console.log("Ты прикалываешься?")
} else {
    console.log(stringq)
}

function summary ( ab , bc) {
    return ab + bc
}
let xre = summary( 5 , 3);
console.log(xre);


function Lengths (Message) {
    console.log(Message.length)
}

let cgec = Lengths(prompt("Что-то напишите"));



function cases ( a , b , operator ) {
    let result2;
    switch(operator) {
        case '+':
        result2 = a + b;
        break; 
        case '-':
        result2 = a - b;
        break; 
        case '*':
        result2 = a * b;
        break; 
        case '/':
        result2 = a / b;
        break; 
    }
    return result2;
}
let dref = cases( 3 , 5 , '*')
console.log(dref);


let numbers = [10,20,3,4,5,9] ;
function check(numbers , newby) {
    let value = [];
    for (let i = 0 ; i < numbers.length; i++ ) {
        if (numbers[i] > newby) {
            value.push(numbers[i])
        }
    }
    console.log(value)
}
let result5 = check(numbers,10);
console.log(result5);

