'use strict';

let userInput;
const enterNumber = 'Введите любое число: ';
const notANumber = 'Было введено не число, попробуйте еще раз';
const noNumbers = 'Вы не ввели ни одного числа.';
const numbers = [];
let total = 0;

do {
    userInput = prompt(enterNumber);

    if (isNaN(userInput) === true || userInput === '') {
        alert(notANumber);
    } else {
        numbers.push(Number(userInput));
    }
} while (userInput !== null);

numbers.pop();

for (const value of numbers) {
    total += value;
}

if (numbers.length !== 0) {
    alert(`Общая сумма чисел равна ${total}.`);
} else {
    alert(noNumbers);
}