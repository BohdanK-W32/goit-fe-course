// const numbers = [12, 15, 25, 37, 41];
// let min = numbers [0];
// let max = numbers[numbers.length - 1];

// let userInput = +prompt (`Введите цифру между ${min} и ${max}`);

// if (isNaN(userInput)) {
//     alert('Было введено не число.');
// } else {
//     for (const value of numbers) {
//         if (userInput === value) {
//             alert('Поздравляем Вы угадали!');
//         }
//         hasNumber = value;
//     }
// }

// if (isNaN(userInput) === false && userInput !== hasNumber) {
//     alert('Сожалеем Вы не угадали');
// }

// const fnctn_div = function (value1, value2) {
//     let res = value1 / value2;
//     return res;
// }
// console.log(fnctn_div(20, 5));

// const fnctn_mult = function (value1, value2) {
//     let res = value1 * value2;
//     return res;
// }
// console.log(fnctn_mult(20, 5));

// const fnctn_sub = function (value1, value2) {
//     let res = value1 - value2;
//     return res;
// }
// console.log(fnctn_sub(20, 5));

// const fnctn_add = function (value1, value2) {
//     let res = value1 + value2;
//     return res;
// }
// console.log(fnctn_add(20, 5));

// const arr1 = [1, 5, 34, 6, 15, 4];
// const arr2 = [3, 45, 14, 5, 35, 21];
// const res1 = [];
// const res2 = [];
// for (const num of arr1) {
//     if (num < 10) {
//         res1.push(num);
//     } 
// }
// for (const num of arr2) {
//     if (num < 15) {
//         res2.push(num);
//     } 
// }
// console.log(res1 + ' , ' + res2);

// const fnFind = function(arr, num){
//     let res = [];
//     for (const number of arr) {
//         if (number < num) {
//             res.push(number);
//         } 
//     }
//     return res;
//     console.log(res);
// };

// const fn = function () {
//     let arr = [];
//     let userInput;
//     do {
//         userInput = prompt('Enter smth');
//         arr.push(userInput);
//         if(userInput === null){
//             arr.pop();
//         }
//     } while (userInput !== null);
//     return;
// }

// const checkForSpam = function (str) {
//     let lowerStr = str.toLowerCase();
//     if (lowerStr.includes('spam') || lowerStr.includes('sale')) {
//       return true;
//     } else {
//       return false;
//     }
//     // str.icludes
//   };
//   console.log( checkForSpam('Latest technology news') ); // false
//   console.log( checkForSpam('JavaScript weekly newsletter') ); // false
//   console.log( checkForSpam('Get best sale offers now!') ); // true
//   console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// function getPx (str) {
//     if (str === '' || isNaN(str) === false) {
//       return null;
//     } else {
//       let parsedStr = parseFloat(str);
//       return parsedStr;
//     }
// }
// Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

// let prmpt = +prompt('Ввведіть число');
// let fib = (max) => {
//   let fibNum = 1;
//   let first = 0;
//   let second = 1;
//   let arr = [];
//   do {
//     arr.push(fibNum);
//     fibNum = first + second;
//     first = second;
//     second = fibNum;
//   } while (fibNum <= max);
//   console.log(arr);
//   return;
// }
// fib(prmpt);