/* 
  Функция multiplyBy принимает два параметра - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
// const multiplyBy = (num, arr) => arr.map( x => x * num);
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]  

/* 
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
// const findEvery = (num, arr) => arr.every(x => x >= num);
  
//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  Функция должна возвращать массив всех значений этого ключа из arr.
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// getPropValues = (arr, prop) => arr.map(x => x[prop]);
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

/*переписати через map*/
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
// alert( arrLength ); // 4,5,2,5

// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const arrLength = arr.map(el => el.length);
// alert( arrLength ); // 4,5,2,5

// const arrNum = [1, 2, 3, 4, 5];
// const getSum = function (arr) {
//   const res = [];
//   arr.reduce(function(sum, element) {
//     res.push(sum + element);
//     return sum + element;
//   }, 0);
//   return res;
// }
// console.log(getSum(arrNum));

/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/
// const users = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];
// const setGuestState = (guests, period) => {
//   let newUsers = guests.map(guest => ({...guest, isActive: guest.inactiveDays < period}));
//   return newUsers;
// };
// // Вызовы функции для проверки
// console.log(
//   setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
// console.log(
//   setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
// console.log(
//   setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей.
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.    
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/
// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// const getActiveGuests = guests => {
//   let newGuests = guests.filter(user =>  user.isActive === true);
//   return newGuests;
// };
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

