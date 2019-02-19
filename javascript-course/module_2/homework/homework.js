'use strict';

// Variables

let userInput;
const enterNumber = 'Введите любое число: ';
const notANumber = 'Было введено не число, попробуйте еще раз';
const noNumbers = 'Вы не ввели ни одного числа.';
const numbers = [];
let total = 0;

// number check and pushing in array
do {
    userInput = prompt(enterNumber);

    if (isNaN(userInput) || userInput === '') {
        alert(notANumber);
    } else {
        numbers.push(Number(userInput));
    }
} while (userInput !== null);

// extraction last value (because loop do...while have post-expression and return value 'undefined')
numbers.pop();

// sum of all values
for (const value of numbers) {
    total += value;
}

// check the length of array and output sum
if (numbers.length !== 0) {
    alert(`Общая сумма чисел равна ${total}.`);
} else {
    alert(noNumbers);
}